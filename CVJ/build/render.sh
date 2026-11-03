#!/bin/bash
# render pptx to per-slide PNGs
f=$1; d=${2:-/home/user/biraloma/CVJ/out/render}
rm -rf $d; mkdir -p $d
cd $(dirname $f) && timeout 300 soffice --headless --convert-to pdf --outdir $d $f >/dev/null 2>&1
pdftoppm -r ${3:-60} -png $d/*.pdf $d/s
ls $d | wc -l
