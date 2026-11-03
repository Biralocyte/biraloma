import sys,glob,re
from PIL import Image
d=sys.argv[1]; out=sys.argv[2]; nums=[int(x) for x in sys.argv[3].split(',')]
files={int(re.search(r's-(\d+)\.png',f).group(1)):f for f in glob.glob(d+'/s-*.png')}
ims=[Image.open(files[n]) for n in nums]
w,h=ims[0].size; cols=2; rows=(len(ims)+1)//2
S=Image.new('RGB',(cols*(w+6),rows*(h+6)),'#444')
for i,im in enumerate(ims): S.paste(im,((i%cols)*(w+6),(i//cols)*(h+6)))
S.save(out); print(S.size)
