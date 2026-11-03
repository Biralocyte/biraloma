import csv,glob,os,re,shutil,fitz
W='/home/user/biraloma/CVJ/WORK'
idx={r['fig_id']:r for r in csv.DictReader(open(W+'/figs_raw_index.csv'))}
done=[];skip=[]
for f in glob.glob(W+'/inv/*_figs.csv'):
    for r in csv.DictReader(open(f)):
        fid=r['fig_id']; out=f'{W}/figs_final/{fid}.png'
        if os.path.exists(out): continue
        raws=re.findall(r'[a-z]+_p\d{3}_f\d+',r.get('raw_files',''))
        raws=[x for x in raws if x in idx]
        if not raws or 'NEEDS_RERENDER' in r.get('raw_files',''):
            if not raws: skip.append(fid); continue
        if len(raws)==1:
            shutil.copy(f'{W}/figs_raw/{raws[0]}.png',out)
        else:
            src=idx[raws[0]]['source']; pg=int(idx[raws[0]]['page'])
            if any(int(idx[x]['page'])!=pg for x in raws): skip.append(fid+'(multipage)'); continue
            rect=None
            for x in raws:
                b=fitz.Rect(*map(float,idx[x]['bbox'].split(',')))
                rect=b if rect is None else rect|b
            z=max(float(idx[x]['render_px'].split('x')[0])/ (fitz.Rect(*map(float,idx[x]['bbox'].split(','))).width) for x in raws)
            d=fitz.open(f'{W}/{src}.pdf'); d[pg-1].get_pixmap(matrix=fitz.Matrix(z,z),clip=rect,colorspace=fitz.csRGB).save(out)
        done.append(fid)
print('done',len(done)); print('skip',skip)
