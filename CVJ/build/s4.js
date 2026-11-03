// Part 4: instability & management, urgent findings, takeaways, references
const F = id => '/home/user/biraloma/CVJ/WORK/figs_final/' + id + '.png';
const A = (g, c) => ({ g, c });
module.exports = [
{ type: 'section', num: '7', t: 'Instability and Management', sub: 'What changes the surgical decision', notes: { cue: 'Section change: neurosurgeons’ section.', script: 'This section is about what the surgeon needs from us.' } },

{ type: 'table', t: 'Atlantoaxial Instability: Classification', colW: [1.6, 7.4], fs: 19,
  rows: [['Group', 'Description'],
    ['**I**', 'AAI with **occipitalization of atlas**, fusion of C2 and C3; odontoid displaced posteriorly'],
    ['**II**', 'AAI from **incompetent odontoid**: os odontoideum; ossiculum terminale; agenesis of base, apical segment, or whole odontoid'],
    ['**III**', 'Odontoid dislocated posteriorly; **no abnormality of C1 or odontoid**']],
  foot: 'Dynamic studies decide **fixed or mobile** instability',
  notes: { cue: 'The classification used in South-Asian neurosurgical practice.',
    script: 'AIIMS classifies atlantoaxial instability into three groups. Group I is instability combined with occipitalization of the atlas and fusion of C2 and C3, with the odontoid displaced posteriorly. Group II is instability due to incompetence of the odontoid process: type I os odontoideum, type II ossiculum terminale, type III agenesis of the odontoid base, type IV agenesis of the apical segment, and type V agenesis of the odontoid. Group III is posterior dislocation of the odontoid with no abnormality of C1 or the odontoid. Dynamic flexion and extension studies are important not only for the diagnosis but also for management, that is, whether the instability is fixed or mobile.',
    qa: 'Q: Where does this classification come from? A: AIIMS presents it citing Gupta SK, Khosla VK, Sharma BS et al., PGI Chandigarh experience, in “Cranio-vertebral junction anomalies: the Indian experience” (1998).',
    source: 'AIIMS p.26 (verbatim condensed).' } },

{ type: 'text', t: 'Factors That Decide Treatment', lines: [
  { t: '**Reducibility**: can alignment be restored?', num: true },
  { t: '**Direction of encroachment**: ventral or dorsal', num: true },
  { t: 'Cause; **hindbrain herniation, syrinx, vascular** anomaly', num: true },
  { t: 'Abnormal ossification centers, **growth plates**', num: true }],
  notes: { cue: 'Four questions the report should answer.',
    script: 'Youmans lists four factors that influence the specific treatment of craniovertebral abnormalities. First, reducibility of the bony lesion, that is, the ability to restore anatomic alignment and so relieve compression on neural structures. Second, the mechanics of compression and the direction of encroachment. Third, the cause of the pathologic process, and the presence of hindbrain herniation, syrinx and vascular abnormalities. Fourth, the presence of abnormal ossification centers and epiphyseal growth plates, which is why thin-section CT in children should comment on them. Each of these is an imaging question, so each should appear in our report.',
    clinical: 'Report template line: “Reducible on extension / traction: yes or no. Compression: ventral (dens, pannus, clivus) or dorsal (C1 arch, opisthion). Chiari/syrinx: yes or no. Vertebral artery course.”',
    source: 'Youmans & Winn Ch 260, Treatment, p.1961 (verbatim condensed).' } },

{ type: 'imgtext', t: 'Treatment Algorithm', imgs: [F('youmans_F260.4')], imgW: 6.4, capRight: true, capSize: 15,
  lines: ['**Reducible** → stabilize', '**Irreducible** → decompress by direction'],
  cap: ['Evolution of craniovertebral abnormalities treatment algorithm. CT, computed tomography; flex/ex, flexion–extension; MRI, magnetic resonance imaging.'],
  notes: { cue: 'Walk the two main branches only.',
    script: 'This is the Youmans treatment algorithm. Imaging, MRI and CT with flexion–extension MRI, separates patients with osseoligamentous compression or instability from those with no compression and a stable flexion–extension study, who are followed clinically and with imaging. Reducible lesions are stabilized: acute lesions with an orthosis, and chronic or unstable ones with posterior fusion. Irreducible lesions undergo intraoperative neuromuscular blockade and traction with intraoperative CT; if still irreducible, the direction of encroachment decides the approach. Ventrolateral compression at the level of the nasopharynx, above the hard palate, is approached endonasally or transorally; at the oropharynx, below the hard palate, transorally or transcervically. Dorsal encroachment gets dorsal decompression. Any instability after decompression is followed by posterior fusion.',
    figure: 'Youmans & Winn 8e Fig. 260.4, p.1963. Flowchart; rendered from vector graphics at high resolution; chapter tab removed.',
    clinical: 'The hard-palate level of the compression decides endonasal vs transoral: state where the dens tip lies relative to the hard palate line.',
    qa: 'Q: Traction weights? A: Youmans: under 2 years, 8- to 10-point skull fixation with 1–2 pounds pin pressure; 2–5 years, maximal pin pressure 4 pounds; over 5 years, traction starts at 3–4 pounds, not exceeding 7; adults start at 7–8 pounds, not exceeding 15 pounds.',
    source: 'Youmans p.1961–1963, Fig. 260.4.' } },

{ type: 'imgtext', t: 'Reducible vs Irreducible', imgs: [F('youmans_F260.13')], imgW: 5.2, capSize: 13,
  cap: ['8-year-old, prior motor vehicle accident. Dynamic radiographs: increased atlantodental interval in flexion (A, black line), reduced in extension (B). (C) Sagittal MRI. (D) 3D and (E) sagittal CT: dystopic os odontoideum. (F) C1–C2 screw fixation with rib. (G) Stable alignment.'],
  lines: ['Reducible: **stabilize**', 'Irreducible: **decompress**, then fix', { t: 'Ventral: transoral, endonasal, transcervical', sub: true }, { t: 'Dorsal: posterolateral', sub: true }],
  notes: { cue: 'A reducible case: fixation alone.',
    script: 'The primary aim of treatment is to relieve compression at the cervicomedullary junction. Stabilization is paramount in reducible lesions to maintain neural decompression. Irreducible lesions require decompression and are subdivided into ventral and dorsal compression states. Ventral decompression uses a transpalatopharyngeal route, a Le Fort drop-down maxillotomy, or a lateral extrapharyngeal route; dorsal compression needs posterolateral decompression. If instability is present after decompression, posterior fixation is mandated. This child’s atlantodental interval widened in flexion and reduced in extension, so the lesion was reducible and was treated with C1–C2 fixation alone.',
    iftime: 'Youmans: reducible lesions from inflammatory states or recent trauma respond to external immobilization once reduction is achieved. Rates of fusion failure reach 50% when immobilization is inadequate; instrumented fusion is undertaken above 6 years of age.',
    figure: 'Youmans & Winn Fig. 260.13, p.1969. Atlantodental interval = short black line in A (named); no other pointers.',
    qa: 'Q: In Chiari with basilar invagination, can we just do a posterior decompression? A: Youmans: ventral decompression should be performed before any posterior procedure in irreducible ventral compression; posterior procedures first are associated with unfavorable results in up to 30%.',
    source: 'Youmans p.1961–1963, 1967 (verbatim condensed).' } },

{ type: 'section', num: '8', t: 'Urgent Findings and Checklist', notes: { cue: 'Section change.', script: 'Finally, what needs a phone call, and a checklist for reading these studies.' } },

{ type: 'text', t: 'Findings Needing Urgent Communication', lines: [
  'Atlanto-occipital **dislocation** or joint widening',
  'C1 fracture with **transverse ligament** disruption',
  '**Unstable** dens, hangman’s or condyle avulsion fracture',
  '**Cord compression or edema** at the CVJ',
  'Retropharyngeal or **epidural abscess**',
  'Transverse foramen fracture: **vertebral artery**'],
  notes: { cue: 'Six things that cannot wait.',
    script: 'These are the findings I would call about rather than just report. Atlanto-occipital dislocation, because mortality is highly related to brainstem injury. A C1 fracture with transverse ligament disruption, or an increased atlantodental interval after trauma, because stability then depends on the alar ligaments. Unstable fractures: type II hangman’s fractures with displacement, type III occipital condyle avulsions, and displaced odontoid fractures. Any cord compression or edema at the junction, including os odontoideum after minor trauma, since severe neurological deficit after minor trauma is well described. A retropharyngeal or epidural abscess compressing the cord. And a fracture through the transverse foramen, where vertebral artery injury is suspected.',
    clinical: 'Youmans: clinical presentation may be insidious, or infrequently a rapid neurological progression followed by sudden death.',
    source: 'Chen p.494–497, p.507 (Fig. 42: progression with gas and cord compression); AIIMS p.25–27; Chong Fig. 14.11 (transverse foramen); Youmans p.7, p.14. Selection of urgent items is the presenter’s, based on these source statements.' } },

{ type: 'text', t: 'Key Takeaways: Reading Checklist', lines: [
  { t: 'Dens vs **Chamberlain, McRae, Wackenheim**', num: true },
  { t: '**Clivus–canal angle** and basal angle', num: true },
  { t: '**ADI** in neutral, flexion, extension', num: true },
  { t: 'C1 assimilation, arch clefts, **os vs fracture**', num: true },
  { t: 'Ligaments, pannus, **retro-odontoid** tissue', num: true },
  { t: '**Reducible?** Ventral or dorsal? Chiari, syrinx?', num: true }],
  notes: { cue: 'End on the checklist; then thank and invite questions.',
    script: 'To finish, a checklist for every CVJ study. One: where is the dens tip relative to the Chamberlain, McRae and Wackenheim lines. Two: measure the clivus-canal angle and the basal angle, remembering that platybasia alone is asymptomatic but an acute clivus-canal angle compresses the cord. Three: the atlantodental interval, ideally in neutral, flexion and extension. Four: look for assimilation of the atlas, arch clefts, and separate an os odontoideum from a fracture. Five: assess the ligaments, pannus and retro-odontoid tissue. Six: answer the surgeon’s questions — is it reducible, is the compression ventral or dorsal, and is there a Chiari malformation or syrinx. Thank you; I am happy to take questions.',
    source: 'Synthesis of the preceding slides.' } },

{ type: 'refs', t: 'References', size: 11, refs: [
  'Chen YF, Liu HM. Imaging of craniovertebral junction. Neuroimaging Clin N Am. 2009;19(3):483–510. doi:10.1016/j.nic.2009.06.002',
  'Khandelwal N, Gupta V. Craniovertebral junction anomalies. In: Gupta AK, Garg A, Sandhu MS, eds. AIIMS-MAMC-PGI’s Comprehensive Textbook of Diagnostic Radiology. 3rd ed. New Delhi: Jaypee Brothers Medical Publishers; 2021. Chapter 208.',
  'Developmental anomalies of the craniovertebral junction and surgical management. In: Winn HR, ed. Youmans & Winn Neurological Surgery. 8th ed. Philadelphia: Elsevier; 2023. Chapter 260, pp. 1959–1972.',
  'Smoker WRK. Craniovertebral junction: normal anatomy, craniometry, and congenital anomalies. RadioGraphics. 1994;14(2):255–277.',
  'Liu HM, Chen YF. Imaging of the craniovertebral junction. In: Chong V, ed. Skull Base Imaging. St. Louis: Elsevier; 2018. Chapter 14 (from p. 291).',
  'Sutton D, Reznek R, Murfitt J; Aggarwal B, adaptation ed. Textbook of Radiology and Imaging. 8th ed. Vol 2. New Delhi: Elsevier (RELX India); 2024.',
  'Dähnert W; Kale H, SAE ed. Radiology Review Manual. 8th ed. South Asian Edition. Wolters Kluwer Health (India); 2021.',
  'Arcalis N, Medrano S, Cuadrado M, et al. Craniovertebral junction: pictorial review of the anatomy and pathologic conditions. ECR 2010, C-2392. doi:10.1594/ecr2010/C-2392',
  'Bermejo AMM, Herraiz LH, Martin MAA, et al. The craniovertebral junction (CVJ): anatomy, bony variants and acquired pathology. ECR 2005, C-0882. doi:10.1594/ECR05/C-0882',
  'Pandit RV, Bommineni B, Kumar A. Computed tomography evaluation of the craniovertebral junction: what to look for and how? ECR 2019, C-2397. doi:10.26044/ecr2019/C-2397',
  'Eser MB, Baysal B, Atalay B, Önal C, Erdemli S. Congenital craniocervical junction anomalies incidentally detected in routine CT and MR evaluation: a pictoral essay. ECR 2018, C-2555. doi:10.1594/ecr2018/C-2555'],
  notes: { cue: 'Do not read out.', script: 'These are the sources; the AIIMS, Chen and Smoker chapters are the main ones for the radiology content, and Youmans for management.',
    source: 'Citation details taken from the source files; details not verifiable in the files (chapter authors of AIIMS and Youmans chapters, page ranges, years where not printed) are omitted. EPOS posters 8–11 were extracted in a separate local session (site blocked here); author names and title spelling as shown on the poster pages (capitalization of “eser”, “erdemli”, “garcia” normalized; “pictoral” kept as printed).' } },
];
