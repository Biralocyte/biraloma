import sys,glob,os
from PIL import Image,ImageDraw,ImageFont
W='/home/user/biraloma/CVJ/WORK'
def sheet(files,out,tile=300,cols=5):
    rows=(len(files)+cols-1)//cols
    im=Image.new('RGB',(cols*tile,rows*(tile+22)),'white'); d=ImageDraw.Draw(im)
    try: f=ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',14)
    except: f=None
    for k,p in enumerate(files):
        t=Image.open(p).convert('RGB'); w,h=t.size; t.thumbnail((tile-6,tile-6))
        x=(k%cols)*tile; y=(k//cols)*(tile+22)
        im.paste(t,(x+3,y+3)); d.text((x+3,y+tile),f"{os.path.basename(p)[:-4]} {w}x{h}",fill='red',font=f)
    im.save(out)
os.makedirs(W+'/contact',exist_ok=True)
import sys
for s in (sys.argv[1:] or ['chen','aiims','youmans','chong','smoker','sutton','dahnert']):
    fs=sorted(glob.glob(f'{W}/figs_raw/{s}_*.png'))
    for i in range(0,len(fs),15):
        sheet(fs[i:i+15],f'{W}/contact/{s}_{i//15+1}.png')
print(sorted(os.listdir(W+'/contact')))
