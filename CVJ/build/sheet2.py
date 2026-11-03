import sys,glob
from PIL import Image
d=sys.argv[1]; out=sys.argv[2]; nums=[int(x) for x in sys.argv[3].split(',')]
ims=[Image.open(f'{d}/s-{n:02d}.png') if glob.glob(f'{d}/s-{n:02d}.png') else Image.open(f'{d}/s-{n}.png') for n in nums]
w,h=ims[0].size; cols=2; rows=(len(ims)+1)//2
S=Image.new('RGB',(cols*(w+6),rows*(h+6)),'#444')
for i,im in enumerate(ims): S.paste(im,((i%cols)*(w+6),(i//cols)*(h+6)))
S.save(out); print(S.size)
