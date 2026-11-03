// Deck builder library for CVJ talk
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const FONT = 'Helvetica', SYM = 'Apple Symbols';
const C = { text: '111111', red: '8B0000', navy: '1F3864', white: 'FFFFFF' };
const GLYPH = { // pointer color -> glyph color
  black: '000000', white: '7F7F7F', gray: '7F7F7F', red: 'C00000', yellow: 'B8860B', green: '00802B', blue: '0047AB', orange: 'D2691E', pink: 'C71585', magenta: 'C71585', purple: '6A1B9A', cyan: '008B8B', navy: '1F3864'
};
const W = 10, H = 7.5, MX = 0.5;
function pngSize(p) {
  const b = fs.readFileSync(p);
  if (b.readUInt32BE(0) === 0x89504e47) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  // jpeg
  let i = 2; while (i < b.length) { if (b[i] !== 0xFF) { i++; continue; } const m = b[i + 1]; const len = b.readUInt16BE(i + 2); if (m >= 0xC0 && m <= 0xC3) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) }; i += 2 + len; }
  throw new Error('size ' + p);
}
// rich text: string with **bold red** markup -> runs
function rich(s, base) {
  const out = []; const parts = s.split(/(\*\*[^*]+\*\*)/);
  for (const p of parts) { if (!p) continue; if (p.startsWith('**')) out.push({ text: p.slice(2, -2), options: { ...base, bold: true, color: C.red } }); else out.push({ text: p, options: { ...base } }); }
  return out;
}
// caption: array of segments; string or {g:glyph,c:color}
function captionRuns(segs, size) {
  const runs = [];
  for (const s of segs) {
    if (typeof s === 'string') runs.push(...rich(s, { fontFace: FONT, fontSize: size, color: C.text }));
    else runs.push({ text: s.g, options: { fontFace: SYM, fontSize: size + 4, color: GLYPH[s.c] || s.c, bold: true } });
  }
  return runs;
}
function title(sl, t, opt = {}) {
  sl.addText(t, { x: MX, y: 0.28, w: W - 2 * MX, h: 0.62, fontFace: FONT, fontSize: opt.size || 30, bold: true, color: C.navy, align: 'left', valign: 'middle', margin: 0, fit: 'none' });
  sl.addShape('line', { x: MX, y: 0.95, w: W - 2 * MX, h: 0, line: { color: C.red, width: 2 } });
}
// lines: array of strings or {t, sub:true} or {t, num:true}
function bullets(sl, lines, box, opt = {}) {
  const runs = [];
  lines.forEach((ln, i) => {
    const o = typeof ln === 'string' ? { t: ln } : ln;
    const size = o.sub ? 22 : (opt.size || 24);
    const r = rich(o.t, { fontFace: FONT, fontSize: size, color: C.text });
    const para = { breakLine: false, paraSpaceBefore: i ? (o.sub ? 4 : 10) : 0, lineSpacingMultiple: 1.15, align: 'left' };
    if (o.num) para.bullet = { type: 'number', indent: 24 };
    else if (opt.bullet !== false && !o.plain) para.bullet = o.sub ? { code: '2013', indent: 22 } : { indent: 22 };
    if (o.sub) para.indentLevel = 1;
    if (r[0].options.bold || r[0].options.color !== C.text) r.unshift({ text: '\u200B', options: { fontFace: FONT, fontSize: size, color: C.text } });
    r[0].options = { ...r[0].options, ...para };
    r[r.length - 1].options.breakLine = i < lines.length - 1;
    runs.push(...r);
  });
  sl.addText(runs, { ...box, valign: 'top', margin: 2, fit: 'none' });
}
// images in one row with equal height inside box; returns used rect
function imageRow(sl, imgs, box, gap = 0.12) {
  const sz = imgs.map(p => pngSize(p)); const ars = sz.map(s => s.w / s.h);
  let h = Math.min(box.h, (box.w - gap * (imgs.length - 1)) / ars.reduce((a, b) => a + b, 0));
  const tw = ars.reduce((a, b) => a + b * h, 0) + gap * (imgs.length - 1);
  let x = box.x + (box.align === 'center' ? (box.w - tw) / 2 : 0);
  const rects = [];
  imgs.forEach((p, i) => { const w = ars[i] * h; sl.addImage({ path: p, x, y: box.y, w, h }); rects.push({ x, y: box.y, w, h, px: sz[i] }); x += w + gap; });
  return { x: rects[0].x, y: box.y, w: tw, h, rects };
}
module.exports = { pptxgen, FONT, SYM, C, GLYPH, W, H, MX, pngSize, rich, captionRuns, title, bullets, imageRow };
