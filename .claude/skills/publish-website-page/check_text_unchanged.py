#!/usr/bin/env python3
"""Proves a visual-only change did not touch the website's wording or SEO.

Usage:  python3 check_text_unchanged.py [--allow-reorder] <site_before_dir> <site_after_dir>
--allow-reorder: sections may move around (better organization), but no word may be added, removed or changed.
Compares every index.html (and card.html / ship2shore-invoice.html) in both folders:
page title, meta description, canonical, robots, og tags, all headings, every visible word,
every link address, and the JSON-LD data. Exit code 0 = identical, 1 = something changed.
Differences in CSS / classes / layout markup are ignored on purpose.
"""
import sys, re, json, os
from html.parser import HTMLParser

class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True)
        s.title=''; s.meta={}; s.links=[]; s.heads=[]; s.text=[]; s.ld=[]; s.canon=''
        s._skip=0; s._in_title=False; s._head=None; s._ld=False; s._buf=''
    def handle_starttag(s,t,a):
        a=dict(a)
        if t in('script','style'):
            s._skip+=1
            if t=='script' and a.get('type')=='application/ld+json': s._ld=True; s._buf=''
        elif t=='title': s._in_title=True
        elif t=='meta':
            k=a.get('name') or a.get('property')
            if k in('description','robots','og:title','og:description','og:url','twitter:title','twitter:description'): s.meta[k]=a.get('content','')
        elif t=='link' and a.get('rel')=='canonical': s.canon=a.get('href','')
        elif t=='a' and a.get('href'): s.links.append(a['href'])
        elif t in('h1','h2','h3','h4'): s._head=[t,'']
    def handle_endtag(s,t):
        if t in('script','style'):
            s._skip-=1
            if s._ld:
                try: s.ld.append(json.loads(s._buf))
                except Exception: s.ld.append(s._buf)
                s._ld=False
        elif t=='title': s._in_title=False
        elif s._head and t==s._head[0]:
            s.heads.append((s._head[0],' '.join(s._head[1].split()))); s._head=None
    def handle_data(s,d):
        if s._ld: s._buf+=d; return
        if s._skip: return
        if s._in_title: s.title+=d; return
        if s._head: s._head[1]+=d
        s.text.append(d)

def parse(path):
    p=P(); p.feed(open(path,encoding='utf-8').read())
    words=' '.join(' '.join(p.text).split())
    return dict(title=' '.join(p.title.split()),meta=p.meta,canonical=p.canon,headings=p.heads,
                links=sorted(set(p.links)),jsonld=p.ld,words=words)

def pages(root):
    out=[]
    for d,_,fs in os.walk(root):
        if '/.git' in d or 'node_modules' in d: continue
        for f in fs:
            if f.endswith('.html'): out.append(os.path.relpath(os.path.join(d,f),root))
    return sorted(out)

def main(a,b,reorder=False):
    A,B=set(pages(a)),set(pages(b)); bad=0
    for f in sorted(A-B): print('REMOVED PAGE',f); bad+=1
    for f in sorted(B-A): print('NEW PAGE (not compared)',f)
    for f in sorted(A&B):
        x,y=parse(os.path.join(a,f)),parse(os.path.join(b,f))
        for k in x:
            same = x[k]==y[k]
            if reorder and k in('words','headings','links') :
                from collections import Counter
                if k=='words': same = Counter(x[k].split())==Counter(y[k].split())
                else: same = Counter(map(str,x[k]))==Counter(map(str,y[k]))
            if not same:
                bad+=1; print(f'CHANGED {f} :: {k}')
                if k=='words' and reorder:
                    from collections import Counter
                    cx,cy=Counter(x[k].split()),Counter(y[k].split())
                    print('   words removed:',dict((cx-cy).most_common(10)),' words added:',dict((cy-cx).most_common(10)))
                elif k=='words':
                    xa,ya=x[k].split(),y[k].split()
                    i=next((i for i,(p,q) in enumerate(zip(xa,ya)) if p!=q),min(len(xa),len(ya)))
                    print('   before: ...',' '.join(xa[max(0,i-6):i+10]))
                    print('   after : ...',' '.join(ya[max(0,i-6):i+10]))
    print('RESULT:', 'identical wording and SEO tags' if not bad else f'{bad} difference(s) found')
    return 1 if bad else 0

if __name__=='__main__':
    args=[a for a in sys.argv[1:] if a!='--allow-reorder']
    if len(args)!=2: print(__doc__); sys.exit(2)
    sys.exit(main(args[0],args[1],'--allow-reorder' in sys.argv))
