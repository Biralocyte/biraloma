import fitz, os, csv, sys
W='/home/user/biraloma/CVJ/WORK'
import sys; srcs=sys.argv[1:] or ['chen','aiims','youmans','chong','smoker','sutton','dahnert']
os.makedirs(W+'/figs_raw',exist_ok=True); os.makedirs(W+'/pages',exist_ok=True)
rows=[]
def merge(boxes,gap=8):
    boxes=[fitz.Rect(b) for b in boxes]
    changed=True
    while changed:
        changed=False
        out=[]
        while boxes:
            b=boxes.pop()
            for i,o in enumerate(out):
                g=fitz.Rect(o.x0-gap,o.y0-gap,o.x1+gap,o.y1+gap)
                if g.intersects(b):
                    out[i]=o|b; changed=True; break
            else: out.append(b)
        boxes=out
    return boxes
for s in srcs:
    doc=fitz.open(f'{W}/{s}.pdf')
    for pn,page in enumerate(doc,1):
        # page thumbnail for agents
        page.get_pixmap(dpi=90).save(f'{W}/pages/{s}_p{pn:03d}.png')
        info=[i for i in page.get_image_info(xrefs=True) if (i['bbox'][2]-i['bbox'][0])>60 and (i['bbox'][3]-i['bbox'][1])>60]
        pr=page.rect
        info=[i for i in info if not (fitz.Rect(i['bbox']).width>pr.width*0.95 and fitz.Rect(i['bbox']).height>pr.height*0.95)]
        if not info: continue
        groups=merge([i['bbox'] for i in info])
        for gi,g in enumerate(sorted(groups,key=lambda r:(r.y0,r.x0)),1):
            g=g & pr
            members=[i for i in info if fitz.Rect(i['bbox']).intersects(g)]
            # native density px per pt
            dens=max(i['width']/max(1,fitz.Rect(i['bbox']).width) for i in members)
            zoom=min(max(dens,2.0),6.0)
            pix=page.get_pixmap(matrix=fitz.Matrix(zoom,zoom),clip=g,colorspace=fitz.csRGB)
            fid=f'{s}_p{pn:03d}_f{gi}'
            pix.save(f'{W}/figs_raw/{fid}.png')
            nat_w=sum(i['width'] for i in members) if len(members)>1 else members[0]['width']
            rows.append(dict(fig_id=fid,source=s,page=pn,n_images=len(members),bbox=','.join(f'{v:.0f}' for v in g),native_px=';'.join(f"{i['width']}x{i['height']}" for i in members),render_px=f'{pix.width}x{pix.height}',cs=';'.join(str(i.get('cs-name','')) for i in members)))
    print(s,len([r for r in rows if r['source']==s]))
with open(W+('/figs_raw_index_articles.csv' if sys.argv[1:] else '/figs_raw_index.csv'),'w',newline='') as f:
    w=csv.DictWriter(f,fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
