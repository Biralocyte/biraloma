# Extract end-of-chapter figures + captions with inline pointer icons from a PDF chapter
import fitz, hashlib, json, sys, os
from PIL import Image
W='/home/user/biraloma/CVJ/WORK'
src=sys.argv[1]; p0,p1=int(sys.argv[2]),int(sys.argv[3])
out=f'{W}/{src}_figs'; os.makedirs(out+'/icons',exist_ok=True)
d=fitz.open(f'{W}/{src}.pdf')
recs=[]; icons={}
for pn in range(p0,p1+1):
    pg=d[pn-1]
    infos=pg.get_image_info(xrefs=True)
    big=[i for i in infos if i['width']>40 and i['height']>40]
    small=[i for i in infos if i['width']<=40 and i['height']<=40]
    # caption: text spans + icons, sorted by line
    items=[]
    for b in pg.get_text('dict')['blocks']:
        if b['type']!=0: continue
        for l in b['lines']:
            for s in l['spans']:
                if s['text'].strip()=='' : 
                    if s['text']: items.append((round(s['bbox'][1]/4),s['bbox'][0],'T',s['text']))
                    continue
                items.append((round(s['bbox'][1]/4),s['bbox'][0],'T',s['text']))
    for i in small:
        x=d.extract_image(i['xref']) if i['xref'] else None
        key='na'
        if x:
            key=hashlib.md5(x['image']).hexdigest()[:8]
            if key not in icons:
                icons[key]=x['ext']; open(f'{out}/icons/{key}.{x["ext"]}','wb').write(x['image'])
        items.append((round(i['bbox'][1]/4),i['bbox'][0],'I',key))
    # only caption region: below figures
    ymin=max([i['bbox'][3] for i in big],default=0)/4-2
    items=[it for it in items if it[0]>=ymin]
    items.sort(key=lambda t:(t[0],t[1]))
    cap=''.join(t[3] if t[2]=='T' else '{'+t[3]+'}' for t in items)
    figs=[]
    for k,i in enumerate(sorted(big,key=lambda i:(i['bbox'][1],i['bbox'][0])),1):
        z=max(i['width']/(i['bbox'][2]-i['bbox'][0]),1.0)
        pix=pg.get_pixmap(matrix=fitz.Matrix(z,z),clip=fitz.Rect(i['bbox']),colorspace=fitz.csRGB)
        fn=f'{src}_p{pn:03d}_{k}.png'; pix.save(f'{out}/{fn}'); figs.append({'file':fn,'native':[i['width'],i['height']],'px':[pix.width,pix.height]})
    recs.append({'page':pn,'figs':figs,'caption':' '.join(cap.split())})
json.dump({'recs':recs,'icons':icons},open(f'{out}/index.json','w'),indent=1)
print(len(recs),'pages',sum(len(r['figs']) for r in recs),'figs',len(icons),'icon types')
