import fitz,sys,json
# usage: crop.py src page x0 y0 x1 y1 zoom out
W='/home/user/biraloma/CVJ/WORK'
s,p,x0,y0,x1,y1,z,out=sys.argv[1],int(sys.argv[2]),*map(float,sys.argv[3:8]),sys.argv[8]
d=fitz.open(f'{W}/{s}.pdf'); pg=d[p-1]
pix=pg.get_pixmap(matrix=fitz.Matrix(z,z),clip=fitz.Rect(x0,y0,x1,y1),colorspace=fitz.csRGB)
pix.save(out); print(out,pix.width,pix.height)
