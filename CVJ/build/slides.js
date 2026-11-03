const fs=require('fs');
let all=[];
for (const p of ['s1','s2','s3','s4','s5']) { if (fs.existsSync(__dirname+'/'+p+'.js')) all=all.concat(require('./'+p+'.js')); }
// slides moved to Backup for timing (kept with full notes)
const TO_BACKUP=['Further Lateral-View Indices','Mucopolysaccharidosis','Nerve Sheath Tumor','Grisel Syndrome','Atlas Fracture on CT'];
const moved=all.filter(s=>TO_BACKUP.includes(s.t));
all=all.filter(s=>!TO_BACKUP.includes(s.t));
const bi=all.findIndex(s=>s.type==='section'&&s.t==='Backup Images');
moved.forEach(s=>{ if(s.notes&&typeof s.notes==='object') s.notes.cue='Backup: '+(s.notes.cue||''); });
all.splice(bi+1,0,...moved);
// trim long core scripts: keep ~90 words, move remainder to IF TIME
const LIMIT=92;
const NOTRIM=['Clivus–Canal Angle','Hangman’s Fracture','Treatment Algorithm','Findings Needing Urgent Communication','Key Takeaways: Reading Checklist','Atlantoaxial Instability: Classification','Two Developmental Patterns'];
for (let i=0;i<bi;i++){ const n=all[i].notes; if(!n||typeof n!=='object'||!n.script||NOTRIM.includes(all[i].t)) continue;
  const sents=n.script.match(/[^.!?]+[.!?]+(\s|$)/g)||[n.script]; let keep=[],w=0,k=0;
  for(;k<sents.length;k++){ const sw=sents[k].split(/\s+/).filter(Boolean).length; if(w>0 && w+sw>LIMIT) break; keep.push(sents[k]); w+=sw; }
  if(k<sents.length){ const rest=sents.slice(k).join('').trim(); n.script=keep.join('').trim(); n.iftime=rest+(n.iftime?' '+n.iftime:''); }
}
module.exports=all;
