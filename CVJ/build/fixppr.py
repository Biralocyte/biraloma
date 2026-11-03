# keep only first <a:pPr> per <a:p> in slide XML
import zipfile, re, sys, shutil
src=sys.argv[1]; tmp=src+'.tmp'
zin=zipfile.ZipFile(src); zout=zipfile.ZipFile(tmp,'w',zipfile.ZIP_DEFLATED)
pat=re.compile(r'<a:p>(.*?)</a:p>',re.S)
ppr=re.compile(r'<a:pPr\b[^>]*/>|<a:pPr\b[^>]*>.*?</a:pPr>',re.S)
n=0
def fix(m):
    global n
    body=m.group(1); found=[0]
    def rep(mm):
        global n
        found[0]+=1
        if found[0]==1: return mm.group(0)
        n+=1; return ''
    out=ppr.sub(rep,body)
    out=re.sub(r'(<a:pPr[^>]*>(?:(?!</a:pPr>).)*?)(<a:bu(?:SzPct|SzPts|Font|AutoNum|Char))',lambda m: m.group(1)+'<a:buClr><a:srgbClr val="111111"/></a:buClr>'+m.group(2) if '<a:buClr>' not in m.group(1) else m.group(0),out,flags=re.S)
    return '<a:p>'+out+'</a:p>'
for it in zin.infolist():
    d=zin.read(it.filename)
    if re.match(r'ppt/(slides|notesSlides)/.*\.xml$',it.filename):
        d=pat.sub(fix,d.decode('utf8')).encode('utf8')
    zout.writestr(it,d)
zout.close(); shutil.move(tmp,src); print('removed extra pPr:',n)
