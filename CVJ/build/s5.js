// Part 5: backup images
const F = id => '/home/user/biraloma/CVJ/WORK/figs_final/' + id + '.png';
const A = (g, c) => ({ g, c });
const B = (t, imgs, cap, fig, src, script, extra = {}) => ({ type: 'img', t, imgs: imgs.map(F), cap, ...extra,
  notes: { cue: 'Backup: show only if asked.', script, figure: fig, source: src } });
module.exports = [
{ type: 'section', t: 'Backup Images', notes: { cue: 'Backup section; use for questions.', script: 'Additional images for questions.' } },

B('Craniometry on CT', ['chong_F14.1'],
  ['(A, B) Measurements on lateral projection. A, posterior margin of hard palate; B, opisthion; C, inferior margin of posterior rim of foramen magnum; D, basion; E, dorsum sella; F, anterior clinoid process; G, floor of anterior cranial fossa. A–B Chamberlain; A–C McGregor; B–D McRae; D–E Wackenheim; D–F–G Welcher basal angle.'],
  'Chong Ch 14 Fig. 14.1 (p.292) with line names from Table 14.1. Drawn lines black on diagram, white on CT, labelled with letters (named in caption). Table 14.1 normal values: Chamberlain dens apex < 5 mm above; McGregor < 7 mm above; McRae tip of dens below; Wackenheim tangent to or intersecting the posterior one-third of the odontoid; Welcher < 140°.',
  'Chong p.292.', 'The same lines on sagittal CT; useful if asked how to draw them on a modern study.'),

B('Os Odontoideum or Fracture?', ['smoker_F32'],
  ['(a) Os odontoideum (O): well-corticated convex upper margin of the axis body ', A('▶', 'black'), ' and rounded hypertrophic anterior atlas arch (dot). (b) Type 2 odontoid fracture: normal half-moon anterior arch (dot) and flattened, straight upper margin of the axis ', A('▶', 'black'), '; odontoid and atlas posteriorly displaced.'],
  'Smoker Fig. 32 (p.276). Axis upper margin = black arrowheads (▶ black); anterior arch = dot (white in a, black in b; word kept); os = letter O.',
  'Smoker p.276.', 'The radiographic version of the comparison table: convex corticated margin and round arch for the os; flat margin and half-moon arch for the fracture.'),

B('Os Odontoideum: CT, MRI', ['chen_F17'],
  ['Os odontoideum. Sagittal CT (A), coronal CT (B), and T2-weighted MR imaging (C) show the rounded and hypertrophic anterior arch of the atlas. (B) Lateral dislocation is also shown on the coronal study. (C) Severe cord compression and edema can be found inside the cord after minor trauma.'],
  'Chen & Liu Fig. 17 (p.492–493). No pointers. Note: in the printed article the image blocks of Figs. 17 and 18 appear swapped; image matched to caption content (CT, CT, T2) by the verifier.',
  'Chen p.491–493.', 'Cord edema after minor trauma in an os odontoideum: the reason these patients are fixed even when symptoms are mild.'),

B('Atlas Assimilation with Syrinx', ['youmans_F260.8'],
  ['29-year-old with lower cranial nerve palsy and hemianesthesia. Complete atlas assimilation and abnormal odontoid–clivus angulation on sagittal (A), coronal (B) and 3D CT (C). Sagittal MR: tonsillar ectopia with ventral medullary indentation (D) and holocord syringohydromyelia (E). (F) After transoral odontoidectomy and dorsal occiput–C2 fusion.'],
  'Youmans & Winn Fig. 260.8 (p.1966). Panel letters only. Verifier: panel F is a lateral radiograph although the legend describes syrinx resolution.',
  'Youmans p.1966.', 'An irreducible ventral compression treated ventrally first, then fused posteriorly, as the algorithm predicts.'),

B('Basilar Impression: Bone Softening', ['youmans_F260.14'],
  ['10-year-old with an unidentified bone-softening disorder. (A) Sagittal MR: severe cervicomedullary compression and syrinx. (B, C) CT: abnormal skull base, shallow posterior fossa, left C1–occiput assimilation. (D) Axial CT: compression from the C1 articular pillar ', A('→', 'white'), '. (E, F) 3D CT: pathologic occiput–C1 articulation ', A('→', 'black'), '. (G) Lateral radiograph.'],
  'Youmans & Winn Fig. 260.14 (p.1970). C1 articular pillar = white arrow (→ gray) in D; occiput–C1 articulation = black arrows (→ black) in E, F.',
  'Youmans p.1968.', 'Secondary basilar impression from bone softening.', { capSize: 14 }),

B('Ponticulus Posticus', ['chong_F14.8'],
  ['Ponticulus posticus. (A) Complete type; (B) calcified type; (C) bilateral involvement ', A('→', 'black'), '; (D) the vertebral artery goes through the ponticulus posticus ', A('→', 'white'), '.'],
  'Chong Fig. 14.8 (p.299). Bilateral ponticulus = black arrows (→ black) in C; vertebral artery = white arrow (→ gray) in D.',
  'Chong p.296–297.', 'Relevant before C1 lateral mass screws: the vertebral artery may run through the bony bridge.'),

B('Hangman’s Fracture on CT', ['chong_F14.14'],
  ['Hangman fracture ', A('→', 'white'), A('→', 'black'), ' involving the pars interarticularis. (A) Axial and (B) sagittal reconstruction CT.'],
  'Chong Fig. 14.14 (p.303). Pars fractures = white arrows in A (→ gray), black arrow in B (→ black).',
  'Chong p.300.', 'Bilateral pars fractures on CT.'),

B('Teardrop Fracture of the Odontoid', ['chen_F26'],
  ['Teardrop fracture of odontoid process. Midsagittal CT (B) and T2-weighted MR imaging (C) show fracture at the posteroinferior odontoid process better than the plain radiography (A).'],
  'Chen & Liu Fig. 26 (p.497). No pointers.', 'Chen p.497.', 'CT and MRI show what the radiograph misses.'),

B('Ankylosing Spondylitis and OPLL', ['chen_F30'],
  ['Ankylosing spondylitis. (A) Radiograph: vertebral body squaring, disk calcification, apophyseal joint sclerosis; OPLL from C2 to C4. (B) T2: hyperintensity in disk space, vertebral body margins, bone marrow of dens body and erosion of the odontoid. (C) Abnormal enhancement in the same locations on postcontrast T1.'],
  'Chen & Liu Fig. 30 (p.500). No pointers.', 'Chen p.497–500.', 'Seronegative arthropathy can erode the dens like RA.'),

B('OPLL at the CVJ', ['chen_F34'],
  ['OPLL. (A) Radiograph: continuous type OPLL from the skull base to C4. Midsagittal T1 (B) and T2 (C): segmental (B) and continuous (C) lesions with cord compression. (D) Axial T2 at C1-2: OPLL with extensive calcification, or calcification of the synovial membranes of the atlantoaxial joint.'],
  'Chen & Liu Fig. 34 (p.502). No pointers.', 'Chen p.498–501.', 'Continuous OPLL is thicker and most often causes severe cord compression.'),

B('Pseudotumor in Hemodialysis', ['chong_F14.18'],
  ['Retroodontoid pseudotumor, asymptomatic 61-year-old on hemodialysis for 20 years. (A) Sagittal T2WI and (B) T1WI: soft tissue posterior to the dens, dark on T2WI and isointense on T1WI. (C, D) CT: hyperdense soft tissue posterior to the dens with dens erosions.'],
  'Chong Fig. 14.18 (p.308). No pointers; panel letters C, D not visible in the render.', 'Chong p.305–306.', 'Another dark retro-odontoid mass: think dialysis and amyloid.'),

B('Chronic Fibrous Pannus', ['aiims_F16'],
  ['Chronic RA with hypointense soft tissue at the CVJ without any enhancement.'],
  'AIIMS Figs. 16A–C (p.29). No pointers; 700 × 305 px (low resolution).', 'AIIMS p.26, p.29.', 'Fibrous pannus: dark on T2, no enhancement.'),

B('CVJ Infection after Radiotherapy', ['chen_F42'],
  ['NPC after radiation therapy with infection of the CVJ; fatty marrow change from radiotherapy. (A) T2: prominent prespinal and epidural soft tissue. (B) Postcontrast T1: rim enhancement suggesting liquefaction; little bony change. (C) CT several days later: progression with a nonenhancing collection and gas; the cord is compressed.'],
  'Chen & Liu Fig. 42 (p.507). No pointers.', 'Chen p.508–509.', 'Rapid progression with gas and cord compression: an urgent finding.'),

B('Osteoradionecrosis at the CVJ', ['chong_F14.21'],
  ['Osteoradionecrosis, 66-year-old after palatal cancer irradiation, with diabetes. (A–C) T1 pre- and postcontrast: marrow signal change and enhancement of occipitoatlas and right atlantoaxial joints. (D) T2 and (E) postcontrast T1: soft tissue edema, heterogeneous enhancement, focal necrosis ', A('→', 'white'), '. (F) After 1 year: partial resolution, mild C1-2 subluxation.'],
  'Chong Fig. 14.21 (p.312). Focal soft tissue necrosis = white arrows (→ gray) in D, E.', 'Chong p.307–308.', 'Differential for a post-radiotherapy CVJ lesion: recurrence, infection, osteoradionecrosis.', { capSize: 14 }),

B('Meningioma with Extradural Extension', ['chen_F39'],
  ['Meningioma in the right foramen magnum with extradural extension through the hypoglossal canal to the right carotid space. Iso- to mildly hyperintense on T2 (A), homogeneous strong enhancement (B, C).'],
  'Chen & Liu Fig. 39 (p.506). No pointers.', 'Chen p.505–506.', 'Extradural extension explains incomplete removal.'),

B('Neurenteric Cyst and Fibrous Dysplasia', ['chen_F41', 'chen_F37'],
  ['Left: neurenteric cyst; large lobulated intradural extramedullary cystic mass ventral to brainstem and cord; T1 hyperintense (A), mixed T2 signal (B). Right: fibrous dysplasia of the clivus; expansile lesion, hypointense on T1 (A) and T2 (B), homogeneous enhancement (C), no soft tissue component; ground-glass on CT (D).'],
  'Chen & Liu Figs. 41 (p.507) and 37 (p.504). No pointers.', 'Chen p.503–507.', 'Two benign lesions that can mimic tumor.'),

B('Bow Hunter Syndrome', ['chong_F14.28'],
  ['28-year-old with episodic posterior circulation strokes. (A) FLAIR: cerebellar, thalamic infarcts. (B) Sagittal T2: atlas assimilation, Klippel–Feil C2-3, basilar invagination. (C, D) Vertebral angiography: abnormal course with mild right C1-2 stenosis ', A('→', 'black'), '. (E, F) During left head turn: right C1-2 ', A('→', 'black'), ' and foramen magnum (dashed black arrow) stenoses; left C1-2 ', A('→', 'white'), '.'],
  'Chong Fig. 14.28 (p.321). Stenoses = black arrows (→ black), dashed black arrow (words kept), white arrow (→ gray).', 'Chong p.312–313.', 'Dynamic vertebral artery compression with head rotation in a bony CVJ anomaly.', { capSize: 14 }),

B('Chiari I: CSF Flow', ['aiims_F21'],
  ['Arnold–Chiari type I with syrinx: phase-contrast cine MRI showing downward ', A('→', 'black'), ' and upward ', A('→', 'white'), ' flow of the CSF.'],
  'AIIMS Fig. 21 (p.36). Downward flow = black arrow (→ black); upward flow = white arrow (→ gray). 700 × 261 px (low resolution).', 'AIIMS p.31, p.36.', 'CSF flow study across the foramen magnum.'),

B('Basi-occiput Hypoplasia', ['aiims_F8'],
  ['Basilar invagination (BI) with basi-occiput hypoplasia: clivus is short and clivus-canal angle is typically less than 150°.'],
  'AIIMS Fig. 8 (p.19). No pointers; 479 × 353 px (low resolution).', 'AIIMS p.16, p.19.', 'Short clivus with acute clivus–canal angle.'),

B('Split Atlas', ['aiims_F11', 'smoker_F23'],
  ['Left: split atlas. (A) Lateral radiograph: rounded, hypertrophic anterior arch without typical cortication (thin arrows) and two posterior arches without a spinolaminar line (thick arrow); (B) NCCT: clefts in anterior and posterior arch. Right: (a) normal half-moon anterior arch (dot) with a 1–2-mm predental space ', A('▶', 'black'), '; (b) split atlas: rounded anterior arch with duplicated anterior margins ', A('▶', 'black'), ' overlapping the odontoid tip (dotted line), so no predental space can be identified.'],
  'AIIMS Figs. 11A–B (p.22): thin and thick arrows (small; words kept); 700 × 256 px, low resolution. Smoker Fig. 23 (p.270): anterior arch = dot (word kept); predental space and duplicated margins = black arrowheads (▶ black); odontoid tip = dotted line.',
  'AIIMS p.19, p.22; Smoker p.270.', 'A rounded anterior arch hides the predental space: do not mistake it for a fracture.', { capSize: 14 }),

B('Odontoid Hypoplasia', ['aiims_F12'],
  ['Odontoid hypoplasia: the odontoid process is barely seen and the attachments for the apical and alar ligaments are absent.'],
  'AIIMS Figs. 12A–C (p.22). No pointers; 700 × 217 px (low resolution).', 'AIIMS p.19, p.22.', 'Hypoplastic dens predisposes to atlantoaxial instability.'),

B('Klippel–Feil Syndrome', ['aiims_F20'],
  ['Klippel–Feil syndrome: young patient showing multiple vertebral anomalies (A), Sprengel’s shoulder (B), and short neck (C).'],
  'AIIMS Figs. 20A–C (p.35). No pointers; 700 × 210 px (low resolution).', 'AIIMS p.30, p.35.', 'The clinical phenotype with the 3D CT.'),
B('Type II Fracture: Dynamic Study', ['aiims_F18'],
  ['Type-II odontoid fracture. Lateral radiographs in (A) flexion and (B) extension: cortical breach at the base of dens, more marked in flexion ', A('→', 'black'), '; (C) NCCT MIP: type-II fracture with irregular margins of contiguous fragments; (D, E) sagittal T1W and T2W in flexion and extension: cord compression and cord signal changes.'],
  'AIIMS Figs. 18A–E (p.33). Cortical breach = black arrows (→ black) in A, B. Radiographs show tonal reversal in the source print (verifier: present on the source page, not an extraction error).', 'AIIMS p.27, p.33.', 'Flexion shows the instability of a type II fracture.', { capSize: 14 }),

{ type: 'img', t: 'Powers Ratio and Modified Ranawat on CT', imgs: ['/home/user/biraloma/CVJ/WORK/figs_final/epos_C-2397_F4.jpg', '/home/user/biraloma/CVJ/WORK/figs_final/epos_C-2397_F5.jpg'],
  cap: ['Left: the determination of distances for the purpose of calculation of Power’s ratio, mid-sagittal CT (green lines). Right: the modified Ranawat index on mid-sagittal CT (green lines).'],
  notes: { cue: 'Backup: definitions only; no values in sources.',
    script: 'Powers ratio is calculated by dividing the distance between the tip of the basion and the spinolaminar line of the atlas by the distance from the tip of the opisthion to the midpoint of the posterior aspect of the anterior arch of C1. The modified Ranawat index is the distance between the midpoint of the base of the C2 end-plate and a line from the center of the anterior arch of C1 to the center of the posterior arch. None of the sources in this talk gives a normal value for either, so I do not quote one.',
    figure: 'EPOS C-2397 (ECR 2019) Figs. 4 and 5, “Findings”. Drawn green lines (named). 1024 × 769 px each. A tiny blue square at the top edge of Fig. 5 is in the original file (viewer artifact), left uncropped.',
    source: 'Pandit RV et al. ECR 2019, C-2397, doi:10.26044/ecr2019/C-2397 (definitions verbatim condensed).' } },

{ type: 'imgtext', t: 'Atlanto-occipital Dislocation: Radiograph', imgs: ['/home/user/biraloma/CVJ/WORK/figs_final/epos_C-0882_F17.jpg'], imgW: 3.2, capRight: true, capSize: 16,
  cap: ['Atlantoaxial dislocation as a result of severe trauma. The basion-dens interval ', {g:'*',c:'black'}, ' is dramatically increased.'],
  lines: ['BDI **>12 mm** without traction', '**Traction contraindicated**'],
  notes: { cue: 'Backup: AOD on a lateral radiograph.',
    script: 'The basion–dens interval is dramatically increased. In atlanto-occipital dislocation the basion–dens interval is more than 12 millimeters without traction on the lateral radiograph, and cervical traction is absolutely contraindicated because further stretching of the brainstem can occur.',
    figure: 'EPOS C-0882 (ECR 2005) printed Fig. 17 (site gallery “Fig. 16”), Imaging findings. Basion–dens interval = black asterisk (* black); a faint black double-headed arrow is not named in the caption. Caption says “Atlantoaxial” although the text places it under atlanto-occipital dislocation. 242 × 312 px: very low resolution, upscaled.',
    source: 'Bermejo AMM et al. ECR 2005, C-0882, doi:10.1594/ECR05/C-0882; Arcalis N et al. ECR 2010, C-2392 (traction).' } },

{ type: 'img', t: 'Condylus Tertius on CT', imgs: ['/home/user/biraloma/CVJ/WORK/figs_final/epos_C-2555_F10.png'],
  cap: ['Condylus tertius: (a) axial CT, (b) mid-sagittal CT, (c) coronal CT, (d) 3D volume rendering, posterior view. C1 (atlas) ', {g:'→',c:'green'}, '; odontoid process ', {g:'→',c:'purple'}, '; condylus tertius ', {g:'→',c:'red'}, '. Proatlas persists or fails to integrate with the clivus: an ossified, well-corticated remnant at the distal end of the clivus.'],
  notes: { cue: 'Backup: condylus tertius in three planes.',
    script: 'The third condyle in three planes and on 3D: a well-corticated ossicle at the distal clivus, above and anterior to the dens.',
    figure: 'EPOS C-2555 (ECR 2018) Fig. 10. C1 = green arrows (→ green); odontoid = purple arrows (→ purple); condylus tertius = red arrows (→ red). 1279 × 959 px.',
    source: 'Eser MB et al. ECR 2018, C-2555, doi:10.1594/ecr2018/C-2555.' } },

{ type: 'img', t: 'Platybasia with Basilar Invagination', imgs: ['/home/user/biraloma/CVJ/WORK/figs_final/epos_C-2555_F5.png'],
  cap: ['Platybasia: (a) mid-sagittal CT with Welcher basal angle (meaningful for platybasia above 140°; t:172°); (b) sagittal T2W: flattened skull base, enlarged Welcher basal angle (t:167°); (c) 3D VR: nasion–tuberculum sellae and tuberculum sellae–basion lines; (d) mid-sagittal CT: basilar invagination (Chamberlain line, red, h:13 mm).'],
  notes: { cue: 'Backup: platybasia measured.',
    script: 'A Welcher basal angle of about 170 degrees on CT and MRI, with the dens 13 millimeters above the Chamberlain line in the same patient.',
    figure: 'EPOS C-2555 (ECR 2018) Fig. 5. Welcher lines = blue drawn lines labelled t:172°/t:167°; Chamberlain line = red line with h:13 mm. 1282 × 959 px.',
    source: 'Eser MB et al. ECR 2018, C-2555, doi:10.1594/ecr2018/C-2555.' } },
{ type: 'img', t: 'Goel Group A and Group B', imgs: ['/home/user/biraloma/CVJ/WORK/figs_final/goel_F1a.png', '/home/user/biraloma/CVJ/WORK/figs_final/goel_F2a.png'],
  cap: ['Left: T1-weighted MRI showing Group A basilar invagination; the odontoid process has invaginated into the foramen magnum. Right: T2-weighted MRI showing Group B basilar invagination; the odontoid process and the clivus relationship has been maintained; the distance between the ponto-medullary junction and the tip of the odontoid process is markedly reduced; Chiari malformation and syringomyelia can be seen.'],
  notes: { cue: 'Backup: Goel A vs B on MRI.', script: 'Group A: the dens has left the clivus and invaginates into the foramen magnum. Group B: the odontoid–clivus relationship is preserved, but the whole complex is high, with Chiari malformation and syrinx.',
    figure: 'Goel A. Neurol India 2009;57:235–246, Figs. 1a and 2a (PDF p.3). No pointers; letter labels C2, C7 in Fig. 2a. 507 × 463 and 507 × 465 px.',
    source: 'Goel A. Neurol India 2009;57(3):235–246.' } },
];
