const L = require('./lib.js');
const { C, FONT, W, H, MX } = L;
const SPEC = process.argv[2] || './slides.js';
const OUT = process.argv[3] || '/home/user/biraloma/CVJ/out/CVJ_Talk.pptx';
const slides = require(SPEC);
const pres = new L.pptxgen();
pres.layout = 'LAYOUT_4x3';
pres.author = 'Dr. Prasanna Sayami'; pres.title = 'Imaging of the Craniovertebral Junction';
function notesText(n) {
  if (!n) return '';
  if (typeof n === 'string') return n;
  const parts = [];
  if (n.cue) parts.push('CUE — ' + n.cue);
  if (n.script) parts.push('SCRIPT: ' + n.script);
  if (n.iftime) parts.push('IF TIME: ' + n.iftime);
  if (n.figure) parts.push('FIGURE: ' + n.figure);
  if (n.clinical) parts.push('CLINICAL: ' + n.clinical);
  if (n.qa) parts.push('Q&A: ' + n.qa);
  if (n.source) parts.push('SOURCE: ' + n.source);
  return parts.join('\n\n');
}
function capLines(segs, widthIn, size) {
  const txt = segs.map(s => typeof s === 'string' ? s.replace(/\*\*/g, '') : s.g + ' ').join('');
  const cpl = Math.floor(widthIn * 72 / (size * 0.5));
  // crude word wrap
  let lines = 1, cur = 0;
  for (const w of txt.split(/\s+/)) { if (cur + w.length + 1 > cpl) { lines++; cur = w.length; } else cur += w.length + 1; }
  return lines;
}
const report = [];
slides.forEach((s, idx) => {
  const sl = pres.addSlide();
  sl.background = { color: 'FFFFFF' };
  const no = idx + 1;
  if (s.type === 'title') {
    sl.addShape('rect', { x: 0, y: 0, w: 0.25, h: H, fill: { color: C.red }, line: { color: C.red } });
    sl.addText(s.t, { x: MX + 0.2, y: 1.6, w: 8.8, h: 1.6, fontFace: FONT, fontSize: 40, bold: true, color: C.navy, valign: 'bottom', margin: 0 });
    sl.addText(s.lines.map((l, i) => ({ text: l, options: { fontFace: FONT, fontSize: i ? 22 : 26, bold: i === 0, color: i === 0 ? C.text : C.text, breakLine: i < s.lines.length - 1, paraSpaceBefore: i ? 6 : 0 } })),
      { x: MX + 0.2, y: 3.6, w: 8.8, h: 2.8, valign: 'top', margin: 0 });
  } else if (s.type === 'section') {
    sl.addShape('rect', { x: 0, y: 0, w: 0.25, h: H, fill: { color: C.red }, line: { color: C.red } });
    if (s.num) sl.addText(s.num, { x: MX + 0.2, y: 2.0, w: 8.8, h: 0.8, fontFace: FONT, fontSize: 28, bold: true, color: C.red, margin: 0 });
    sl.addText(s.t, { x: MX + 0.2, y: 2.8, w: 8.8, h: 1.3, fontFace: FONT, fontSize: 40, bold: true, color: C.navy, valign: 'top', margin: 0 });
    if (s.sub) sl.addText(s.sub, { x: MX + 0.2, y: 4.2, w: 8.8, h: 1.6, fontFace: FONT, fontSize: 24, color: C.text, valign: 'top', margin: 0 });
  } else {
    L.title(sl, s.t, { size: s.tsize });
    const top = 1.15, bottom = H - 0.25;
    if (s.type === 'text') {
      L.bullets(sl, s.lines, { x: MX, y: top + 0.1, w: W - 2 * MX, h: bottom - top - 0.1 }, { bullet: s.bullet, size: s.size });
    } else if (s.type === 'img') {
      const capSize = s.capSize || 15;
      const cl = s.cap ? capLines(s.cap, W - 2 * MX, capSize) : 0;
      const capH = cl ? cl * capSize * 1.25 / 72 + 0.12 : 0;
      const keyH = s.key ? 0.5 : 0;
      const box = { x: MX, y: top + 0.05, w: W - 2 * MX, h: bottom - top - 0.05 - capH - keyH - 0.08, align: s.align || 'center' };
      const r = L.imageRow(sl, s.imgs, box);
      let y = r.y + r.h + 0.06;
      if (s.cap) { sl.addText(L.captionRuns(s.cap, capSize), { x: MX, y, w: W - 2 * MX, h: capH, fontFace: FONT, valign: 'top', margin: 0, lineSpacingMultiple: 1.0, fit: 'none' }); y += capH + 0.02; }
      if (s.key) sl.addText(L.rich(s.key, { fontFace: FONT, fontSize: 22, color: C.text }), { x: MX, y, w: W - 2 * MX, h: 0.48, valign: 'top', margin: 0 });
      report.push({ no, t: s.t, imgs: r.rects.map(q => ({ wIn: +q.w.toFixed(2), hIn: +q.h.toFixed(2), px: q.px })) });
    } else if (s.type === 'imgtext') {
      const iw = s.imgW || 4.8; const capSize = s.capSize || 14;
      const cl = s.cap ? capLines(s.cap, iw, capSize) : 0;
      const capH = cl ? cl * capSize * 1.25 / 72 + 0.12 : 0;
      const box = { x: MX, y: top + 0.05, w: iw, h: bottom - top - 0.05 - capH - 0.08 };
      if (s.capRight) {
        const r = L.imageRow(sl, s.imgs, { x: MX, y: top + 0.05, w: iw, h: bottom - top - 0.05 });
        const tx = MX + r.w + 0.3, tw = W - MX - tx;
        const cl2 = capLines(s.cap, tw, capSize); const ch2 = cl2 * capSize * 1.25 / 72 + 0.1;
        sl.addText(L.captionRuns(s.cap, capSize), { x: tx, y: top + 0.1, w: tw, h: ch2, valign: 'top', margin: 0, fit: 'none' });
        if (s.lines) L.bullets(sl, s.lines, { x: tx, y: top + 0.25 + ch2, w: tw, h: bottom - top - 0.3 - ch2 }, { bullet: s.bullet, size: s.size || 22 });
        report.push({ no, t: s.t, imgs: r.rects.map(q => ({ wIn: +q.w.toFixed(2), hIn: +q.h.toFixed(2), px: q.px })) });
      } else {
      const r = L.imageRow(sl, s.imgs, box);
      const cw = Math.max(r.w, s.capW || iw);
      if (s.cap) sl.addText(L.captionRuns(s.cap, capSize), { x: MX, y: r.y + r.h + 0.06, w: cw, h: capH, valign: 'top', margin: 0, fit: 'none' });
      const tx = MX + cw + 0.3;
      L.bullets(sl, s.lines, { x: tx, y: top + 0.1, w: W - MX - tx, h: bottom - top - 0.1 }, { bullet: s.bullet, size: s.size });
      report.push({ no, t: s.t, imgs: r.rects.map(q => ({ wIn: +q.w.toFixed(2), hIn: +q.h.toFixed(2), px: q.px })) });
      }
      //({ no, t: s.t, imgs: r.rects.map(q => ({ wIn: +q.w.toFixed(2), hIn: +q.h.toFixed(2), px: q.px })) });
    } else if (s.type === 'table') {
      const fs = s.fs || 18;
      const rows = s.rows.map((row, ri) => row.map(cell => ({ text: L.rich(String(cell), { fontFace: FONT, fontSize: fs, color: ri === 0 ? 'FFFFFF' : C.text, bold: ri === 0 }), options: { fill: { color: ri === 0 ? C.navy : (ri % 2 ? 'FFFFFF' : 'EEF1F6') }, valign: 'middle', margin: 0.06 } })));
      sl.addTable(rows, { x: MX, y: top + 0.15, w: W - 2 * MX, colW: s.colW, border: { type: 'solid', pt: 1, color: '7F7F7F' }, fontFace: FONT, autoPage: false });
      if (s.foot) sl.addText(L.rich(s.foot, { fontFace: FONT, fontSize: 16, color: C.text }), { x: MX, y: H - 0.85, w: W - 2 * MX, h: 0.6, valign: 'bottom', margin: 0 });
    } else if (s.type === 'refs') {
      const runs = s.refs.map((r, i) => ({ text: r, options: { fontFace: FONT, fontSize: s.size || 14, color: C.text, bullet: { type: 'number' }, breakLine: i < s.refs.length - 1, paraSpaceBefore: 4 } }));
      sl.addText(runs, { x: MX, y: top + 0.1, w: W - 2 * MX, h: bottom - top - 0.1, valign: 'top', margin: 2 });
    }
  }
  if (!s.nonum && s.type !== 'title') sl.addText(String(no), { x: W - 0.7, y: H - 0.35, w: 0.5, h: 0.3, fontFace: FONT, fontSize: 12, color: '444444', align: 'right', margin: 0 });
  sl.addNotes(notesText(s.notes));
});
pres.writeFile({ fileName: OUT }).then(() => { require('fs').writeFileSync(OUT.replace('.pptx', '_layout.json'), JSON.stringify(report, null, 1)); console.log('wrote', OUT, slides.length, 'slides'); });
