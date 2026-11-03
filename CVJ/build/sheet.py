import sys,glob
from PIL import Image,ImageDraw
d=sys.argv[1]; out=sys.argv[2]; a=int(sys.argv[3]) if len(sys.argv)>3 else 1; b=int(sys.argv[4]) if len(sys.argv)>4 else 999
fs=sorted(glob.glob(d+'/s-*.png'),key=lambda f:int(f.split('-')[-1][:-4]))
fs=[f for f in fs if a<=int(f.split('-')[-1][:-4])<=b]
ims=[Image.open(f) for f in fs]; w,h=ims[0].size; cols=3; rows=(len(ims)+cols-1)//cols
S=Image.new('RGB',(cols*(w+6),rows*(h+6)),'#444')
for i,im in enumerate(ims): S.paste(im,((i%cols)*(w+6),(i//cols)*(h+6)))
S.save(out); print(S.size)
