# Inventory: chen

## Bibliographic data (as printed on PDF p.1)
- Title: "Imaging of Craniovertebral Junction"
- Authors: Ya-Fang Chen, MD (a,b); Hon-Man Liu, MD (a,b,*). a: Dept of Radiology, College of Medicine, National Taiwan University, Taipei; b: Section of Neuroradiology, Dept of Medical Imaging, National Taiwan University Hospital, Taipei. Corresponding: hmliu@ntu.edu.tw
- Journal: Neuroimag Clin N Am 19 (2009) 483-510; doi:10.1016/j.nic.2009.06.002; ISSN line 1052-5149/09; (c) 2009 Elsevier Inc. Site printed: neuroimaging.theclinics.com. PDF metadata: created 1 Sep 2009 (Elsevier, Acrobat Distiller 8.0).
- Edition: journal article (Neuroimaging Clinics of North America, 2009), no issue number printed on the page.
- Keywords printed: Craniovertebral junction; Congenital anomaly; Acquired disorders; Degenerative disease; Neoplasm.
- Note: the task brief said "2009?" - confirmed 2009.

## File
- 28 PDF pages = journal pp. 483-510 (PDF page N = journal page N+482). All 28 pages are CVJ content (p.26-28 contain Table 5 end of text, "Infection", and references 1-58).
- Text layer: native (born-digital, fonts embedded; not scanned/OCR). 42 embedded images = 42 figures, all rendered in figs_raw (chen_pNNN_fK). Figure count: 42 (Fig. 1-42), plus Boxes 1-2 and Tables 1-5 (tables are text).
- Citation convention in facts file: [chen p.N] = PDF page.

## Conversion problems (per-page text)
- Degree symbols dropped/garbled (control char) in Fig. 8 and Fig. 9 captions ("140 ", "150 and 180 ") - the key craniometry values; the sign is printed in the PDF.
- Table 2 "Type II = Type 1 1 Klippel-Feil" (plus sign printed as "1"; Type I + KF).
- Two-column layout: pdftotext -layout interleaves columns; page 3 text is split by figure captions (Fig. 2/3 left, 4/5 right) and readable only with care. Figure captions otherwise intact, not scrambled.
- Hyphenation line-break artifacts ("app-roximately", "Chamber-lain's", "Radi-ology"); title spaced "Craniover tebral". Footer URL printed vertically on p.1.
- Source typos preserved: "metatrophic dwarfism", "supranumerary", "Bewereyer", "Hiramatsn", "show" (Fig. 30). Internal slips: differential diagnosis of os odontoideum vs type II fracture cited as "Box 1" (it is Table 4); basiocciput said to derive from "fourth occipital sclerotome" in text but Table 1 lists first occipital sclerotome; Fig. 23 labels mix "Type I", "Type 2", "Type 3".
- No inverted images; no missing panels found. Fig. 11 and Fig. 14A are blurry polytomograms (old images).

## Content structure
Anatomy/embryology (p1-4, Table 1, Figs 1-7); clinical features (p3-4); Box 1 classification of CVJ disorders (p5); occipital anomalies (platybasia, basioccipital hypoplasia, basilar invagination, condylar hypoplasia, condylus tertius; p4-7); atlas anomalies (assimilation + Wackenheim classification Table 2, arch anomaly; p7-10); axis/odontoid (aplasia, ossiculum terminale, os odontoideum, Table 4; p8-10); Klippel-Feil (p10-11); fractures (clivus, occipital condyle Table 3, AO dislocation, Jefferson, odontoid, Hangman; p11-16); inflammatory/degenerative (RA, AS, PVNS, OA, OPLL, DISH; p13-20); neoplasms (Box 2; chordoma, benign bone, chondrosarcoma, plasmacytoma, mets, NPC, meningioma, neurinoma, cystic lesions; p20-25); infection incl TB (Table 5; p25-26); references (p26-28).
Not covered: Chamberlain line/McGregor/McRae/Ranawat/Redlund-Johnell/Powers, ADI/PADI/space available for cord, Grabb-Oakes, Down syndrome or Morquio imaging measurements, achondroplasia, Chiari details, Goel/Harms, Tuli, Levine-Edwards, Landells/Spence rules, surgical fixation techniques. Craniometry is limited to the Fig. 8 caption (Welcher angle, Wackenheim line, clivus-canal angle, Chamberlain line) plus Hangman >3 mm displacement.

## Quality assessment and suggested rank
- Strengths: good, uniform-quality multimodality (CT/MRI) images with high pixel size (most 1000+ px wide; see CSV low_res flags); clear ligament line drawings (Figs 1-5, with labels in image); ligament MRI/CT (Figs 6-7); wide pathology coverage incl. neoplasm differential (chordoma, chondrosarcoma, plasmacytoma, NPC, meningioma, neurinoma, neurenteric cyst); Wackenheim classification table, Anderson-D'Alonzo type drawing (Fig. 23), Jefferson stable/unstable (Fig. 22), Table 4 os odontoideum vs type II fracture, Table 5 TB vs RA.
- Weaknesses: craniometry very thin (one diagram caption; no measurements on image-based figures; no Powers/ADI/ratios/cut-offs); minimal surgical-management content (only stability statements, "role of imaging is to determine nature and resectability"); no Chiari, Down, achondroplasia imaging detail; RA section brief; dated polytomography images.
- Low resolution (smallest side < 400 px): Fig 11 (blurry polytomogram, 479x665 ok in pixels but blurry) and Fig 19 (351 px wide); see CSV low_res flags.
- Suggested rank for this talk: primary source for imaging-appearance figures (ligaments, congenital anomalies, trauma, neoplasm) and for the Wackenheim assimilation classification; secondary for craniometry/management (must be supplemented by other sources). Overall rank: high for figures/pathology, low for craniometry/surgery.
