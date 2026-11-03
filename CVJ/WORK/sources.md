# SOURCES — inventory and hierarchy (CVJ talk)

## Final hierarchy (confirmed)
1. **AIIMS-MAMC-PGI 3e, Ch 208 "Craniovertebral Junction Anomalies" (Khandelwal N, Gupta V), Jaypee 2021.** Primary for craniometry values (Tables 1–2), South-Asian incidence, AAI groups, TB stages and pannus types. Images are low resolution (≤800 px). Chapter numbers are internally inconsistent for the ADI cut-offs (logged).
2. **Chen YF, Liu HM. Imaging of Craniovertebral Junction. Neuroimag Clin N Am 2009;19:483–510.** Primary overview, structure, trauma, inflammatory and neoplasm content, with the best pathology images. Craniometry is thin.
3. **Smoker WRK. RadioGraphics 1994;14:255–277** (scanned OCR; two-column interleaving). Promoted for craniometry: diagram + radiograph + MR for every line. Figures were cropped from page renders.
4. **Youmans & Winn 8e, Ch 260 (Menezes, Ahmed, Dlouhy), Elsevier 2023.** Management: treatment factors, algorithm, reducibility, traction, Down syndrome, Grisel. High-resolution images.
5. **Liu HM, Chen YF. Ch 14 in Chong V (ed) Skull Base Imaging, Elsevier 2018.** Newer CT/MR images, two developmental BI patterns, reducible→irreducible progression, retro-odontoid pseudotumor, vascular lesions.
6. **Sutton 8e Vol 2 (RELX India 2024)** and **Dähnert SAE 8e (Wolters Kluwer India 2021).** Cross-check values only (Dähnert ADI >2.5 mm adult / >4.5 mm child noted in Q&A).
- EPOS posters: blocked by the network proxy (403); not used, not cited.
- Unsourced webp infographic: not used.

## Per-source inventories (from the extraction agents, verified)

---
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

---
# Inventory: aiims

## Bibliographic
- Book: AIIMS-MAMC-PGI's Comprehensive Textbook of Diagnostic Radiology, Third Edition (Volumes 1-4). Editors: Arun Kumar Gupta, Anju Garg, Manavjit Singh Sandhu. Publisher: Jaypee Brothers Medical Publishers (P) Ltd, New Delhi / London. (c) 2021; First Edition 2016, Second 2019, Third 2021. ISBN 978-93-90595-55-6 (printed p4).
- Chapter: "Chapter 208. Craniovertebral Junction Anomalies", authors Niranjan Khandelwal, Vivek Gupta (printed p5). Book page numbers of the chapter are not printed in the extract; no DOI.
- PDF: 38 pages, letter size, PDF metadata creator "afkebooks.com" (an e-book re-distributor; Quartz re-export), not a publisher file.

## Page map (PDF pages)
- p1-4 front matter (title, editors, copyright). p2 contains Jaypee logo image (skip).
- p5-34 CVJ chapter text. p34 = Summary. p5 intro/anatomy; p7 atlas/ligaments/embryology; p9 biomechanics, clinical presentation; p10 craniometry intro + classification of anomalies; p12-14 Tables 1 and 2 (craniometric lines/angles); p14-16 incidence/imaging; p16-26 specific conditions (basilar invagination, assimilation, atlas arch, dens dysplasias, os terminale, os odontoideum, AAI + classification); p26-27 RA, CPPD, TB; p27 trauma; p30-31 syndromes (KFS, Down, Chiari I-III, achondroplasia, MPS, OI); p34 summary.
- p37-38 references (38 refs). p11, p32 are blank pages; p21 contains only the last line of the Fig. 10 caption.
- CVJ content = p5-34 + refs p37-38 (whole file apart from p1-4).

## Text layer
- Native text layer (pdftotext -layout works; no OCR). Total ~54 KB text.
- Conversion problems: Tables 1 and 2 survive as readable text but Table 1 is split across p12-13 (the 'Basion odontoid index (Whooley)' row breaks across the page); some rows have a missing space or "+" instead of "+/-" (e.g. "Tip of dens 1 + 3.6 mm", "30 + 9 mm", "Odontoid tip may be the line" is truncated in the source); "usesaseries" (missing spaces, p10); word-break hyphenations ("perpen dicular", "hypo-spadiasis"); typos in the source itself ("trip of odontoid", "Boogard"). The bullet-list 'Developmental and Acquired Abnormalities' of the classification runs across p10-13 interleaved with Table 1/2 (the classification's last bullets 'Miscellaneous...' and 'Spontaneous AAD rotatory subluxation' appear after the table on p13). Figure captions are separate from figures and are intact (short captions). The Fig. 10 caption is split across p20-21. No two-column interleaving. Some figure callouts in the text are wrong (see figs csv).
- Page background has colored table shading and yellow highlights (p13) from the source; harmless to text.

## Figures
- 21 numbered figures (Figs 1-21; many multi-panel) + 2 uncaptioned diagrams overlaid on Table 1 (p12, p13) = 23 rows in aiims_figs.csv. p12 and p13 also have 2 tiny green slide-thumbnail images that were not captured (illegible; skip).
- Image quality: embedded images are low resolution (most native widths 479-700 px; many individual panels <300 px tall); several radiographs (Figs 15A-B, 18A-B) are blurry and look inverted/negative; Fig 17 is a heavily magnified blurry CT crop; Fig 8 has no angle drawn despite the caption. Good-quality items: Fig 1 (labelled CT/MR landmarks), Fig 2 (ligament diagrams), Fig 5 (craniometry line diagrams), uncaptioned lines diagram, Fig 10 (assimilation CT), Fig 21.
- Caption/text mismatches: Fig 1 caption panel descriptions scrambled; Fig 5 caption says A lateral/B AP but image is A AP/B lateral; Fig 14 caption vs body text reversed; text cites 'Figs 19A and B' for Klippel-Feil (is Fig 20).

## Quality assessment and suggested rank for the talk
- Strengths: a single concise chapter written for a South-Asia audience; explicit Table 1 and Table 2 of craniometric lines with normal/abnormal values; Indian/institutional data (incidence 3.03% of neurology admissions, 70-patient and 82-patient series, dynamic MRI study in 25 patients); Chiari, KFS, Down, achondroplasia, MPS, OI coverage; AAI classification (Groups I-III) from PGI Chandigarh; TB atlantoaxial stage I-III; rheumatoid pannus MR signal/enhancement types; os odontoideum vs type II fracture CT signs; dynamic MRI.
- Weaknesses: no Anderson-D'Alonzo subtypes beyond a 3-line description (type I-III), no Traynelis, Jefferson/Landells, Levine-Edwards, Effendi, Anderson-Montesano, Goel, Tuli/Fielding classifications, no Powers ratio, Harris/BDI-BAI, Redlund-Johnell, Ranawat, or CCI; says trauma "discussed elsewhere in this book"; no surgical management section; Table 2 and several values are textually inconsistent or truncated; atlas-dens interval cutoff text is internally inconsistent (p9, p25, p27); figures are low resolution.
- Suggested rank: PRIMARY for South-Asia-relevant entities (congenital AAD, basilar invagination, TB, os odontoideum, dynamic MRI) and for the traditional craniometric lines/tables; SECONDARY for trauma classifications and surgical decisions; use for figure source of diagrams (Figs 1, 2, 5, uncaptioned lines diagram, 10) but not for projection of low-res radiographs. Overall rank: mid-high for craniometry list, low for management.

---
# youmans inventory

- Book: Youmans & Winn Neurological Surgery, 8th ed. (editor H. Richard Winn, MD), Elsevier, Philadelphia, (c) 2023, ISBN 978-0-323-66192-8 (PDF p1-2 front matter only; PDF p2 shows cover image "Warholian Brains").
- Chapter: "260 Developmental Anomalies of the Craniovertebral Junction and Surgical Management", Arnold H. Menezes, Raheel Ahmed, Brian J. Dlouhy. Section 8 Pediatrics. Printed pp. 1957-1972 plus references 1972.e1-e3. No DOI printed.
- PDF: 21 pages (612x783 pt). Mapping PDF page -> printed: p3=1957 ... p18=1972 (text, ends with Suggested Readings), p19-21=1972.e1-e3 (references 1-130). p1=title page excerpt, p2=copyright. Facts/CSV use PDF page numbers.
- CVJ content: PDF p3-p18 (whole chapter); references p19-21. This is a pediatric-focused chapter (developmental anomalies), not a general CVJ chapter: NO trauma classifications (no Anderson-D'Alonzo, Traynelis, Jefferson, Levine-Edwards, Anderson-Montesano), no rheumatoid, no TB, no neoplasm, no degenerative text. Grisel, Down, os odontoideum, atlas assimilation, Klippel-Feil, basilar invagination/impression, skeletal dysplasias, MPS covered.
- Text layer: native (pdftotext), 126 KB. Problems: key-concept box and Box 260.2 have dropped characters ("unction", "ne plained", "fi ation", "uadriparesis", "ertigo" = missing letters j/x/Q/V/u/p); two-column layout is interleaved in Box 260.1 (p6) and Box 260.2 (p7) with body text; Fig 260.3 legend (p8) is image text, partly scrambled; stray "!" end-of-section marks and superscript refs fused to words (e.g. "stabilization.!"); page header/footer numbers inline. Captions are intact and readable. Fig 260.4 flowchart text (p9) is layout-scrambled (read from image if needed).
- Figures: 16 numbered figures (260.1-260.16) + Boxes 260.1, 260.2. 14 captured as figs_raw files (15 files incl. cover); 260.1 (embryology table, p4) and 260.4 (treatment algorithm, p9) are vector/text and NOT in figs_raw -> need re-render from PDF. Images are clinical CT/MRI/radiograph/3D-CT composites; high native resolution (most ~2000 px wide) except 260.5 (901x700) and 260.11 (901x861, 1990s-era T1 MRI).
- No inverted images or scrambled captions seen. Caption/image mismatches: Fig 260.15 caption mentions no arrows but panel B has white and black arrows; Fig 260.14 panel E/F black arrows per caption OK; Fig 260.7 caption says "arrow" - image shows black arrowhead.
- Quality: Authoritative single-institution (Iowa, >7000 patients) pediatric CVJ review; strong on embryology, craniometry basics (only 6 lines named in Fig 260.3, few numeric values), os odontoideum (Fielding types), basilar invagination ventral/paramesial, treatment algorithm (reducible/irreducible, ventral vs dorsal), Down/achondroplasia/MPS. Excellent surgical-decision-focused clinical cases with CT/MRI/3D-CT. Weak: craniometry numbers (only Chamberlain, Wackenheim, McRae, ADI 4.5 mm in Down, <20 mm canal), no adult trauma/RA/TB/tumor.
- Suggested rank: high for congenital/pediatric/surgical-management and case images; low as craniometry source (use Smoker 1994 / Dahnert-type tables instead); not a source for trauma classifications.

---
# Inventory: smoker

- Title: "Craniovertebral Junction: Normal Anatomy, Craniometry, and Congenital Anomalies" (PDF metadata title: "Craniovertebral junction: normal anatomy, craniometry, and congenital anomalies."; title on p1 OCR'd as "Craniovertebral Junction: Normal Anatomy, Craniometry, and Congenital Anali1" - OCR garble, "Anomalies"+superscript 1)
- Author: Wendy R. K. Smoker, MD (Dept of Radiology, Section of Neuroradiology, Medical College of Virginia, Richmond, VA)
- Year/journal: RadioGraphics 1994; 14:255-27[7] (page 1 prints "255-27”"; page footers show 255-277); Volume 14, Number 2, March 1994. Published by RSNA (copyright mark "(c) RSNA, 1994"). Format: "Scientific Exhibit" (Cum Laude award, 1992 RSNA scientific assembly; received April 28, 1993, accepted November 15). No DOI printed. No edition.
- PDF pages: 23 (p1 = journal p.255 abstract/title; p2 = 256; p3 = 257 ... p23 = 277). PDF page N = journal page 254+N.
- CVJ content: all pages, p1-p23. Text/intro p1-2; Fig 1 quiz p3; craniometry p4-8 (Figs 2-8); terminology p8; occiput p8-14; atlas p14-18; axis p18-22; summary + Fig 1 answers p22; references p23 (26 refs).
- Text layer vs scanned: scanned page images with OCR text layer (page 1/5/9/21 scans are 4842x6594 full-page grayscale; other pages have embedded RGB figure images placed over scan). OCR quality moderate.
- Figure count: 32 numbered figures (Fig 1 has 5 panels a-e; Figs 5/6, 14/15 share captions) plus 1 table (Signs and Symptoms of CVJ Abnormalities, p2, listed as text). 25 figures have at least some panel captured in figs_raw; diagrams (Figs 2a, 3a, 4a, 5a, 6a, 7a, 9, 11a, 13a, 16, 20, 26) were NOT extracted as separate files; Figs 4, 9, 10, 30 exist only inside whole-page scans (p005_f1, p009_f1, p021_f1) and need re-render.
- Conversion problems: pdftotext text has wide whitespace padding and two-column interleaving (esp. p2, p8, p10-p15, p23 refs); numerals OCR'd as letters (i for 1, "1 10" for 110, "#{176}" for degree sign, "i50" for 150); "Welcher" printed for Welcker (as in source); hyphenation breaks (basioccipi-tal, craniometnic = craniometric, neural spelled "neuronadiology"); Fig 2 TR/TE "1700/201" is likely an OCR/print error; "Anali1" in title; page 1 header "Index terms" garbled; caption Fig 1 says "(a-c)" but five panels. Captions are intact and associated with the correct figures. No inverted images seen.
- Quality: Single-author scientific exhibit review; concise, with clean figure set in 3 modalities (radiograph, polytomogram, CT, 1990s T1 MR). Images are 1990s scans of modest resolution (most panels 400-900 px wide; roughly 15 small ones < 450 px). Craniometry content is brief (Chamberlain/McGregor, Wackenheim, Welcher, AO joint axis angle) but with the normal values and multimodality images. Notably NO Powers ratio, ADI values, Wholey/Redlund-Johnell/McRae, Harris, Clark, or classification of Anderson-D'Alonzo beyond a type 1/2 mention. Strong on occipital/atlas/axis congenital anomalies (condylus tertius, condylar and basiocciput hypoplasia, assimilation, split atlas, os odontoideum). No surgical management section.
- Suggested rank for talk: high for congenital anomaly imaging and basic craniometry lines/angles (rank 2-3 among sources); not a source for trauma/rheumatoid/management. Best figures: Figs 4, 5, 6, 8, 14, 15, 18, 19, 25, 30-32 (but many are low-res and need rendering of diagrams).

---
# Inventory: chong.pdf

- Title (PDF metadata/title page): "Skull Base Imaging"; editor: Vincent Chong, MD, MBA, MHPE, FRCR (National University Health System / NUS, Singapore). Copyright (c) 2018 by Elsevier, Inc.; ISBN 978-0-323-48563-0; Elsevier, 3251 Riverport Lane, St. Louis, Missouri 63043. Edition number not printed in the extracted pages.
- Only an EXCERPT: 40 PDF pages = title page (p1, partial), copyright page (p2), then Chapter 14 "Imaging of the Craniovertebral Junction" by Hon-Man Liu, MD and Ya-Fang Chen, MD, printed pages 291-328 (PDF p3-40; printed page = PDF page + 288). No journal volume/DOI. Chapter is adapted from Chen YF, Liu HM. Neuroimaging Clin N Am. 2009;19(3):483-510 (Box 14.1 credit line).
- CVJ content: whole chapter, PDF p3-36 text/figures; references PDF p37-40 (84 refs).
- Text layer: native (pdftotext works, not scanned/OCR). 123 KB text total.
- Figures: 32 numbered figures (Fig 14.1-14.32) in 34 figs_raw files (Fig 14.20 split over 3 files); plus Table 14.1 (measurements) and Boxes 14.1-14.6 (text only). Raw figure renders are native-resolution; panel sizes mostly 280-450 px (see low_res column; composites mostly >400 px but individual panels often ~300-350 px, marginal for full-slide projection).
- Conversion problems: two-column interleaving in pdftotext -layout (every page, columns merged on one line; need column-aware reading); Table 14.1 and Fig 14.1 diagram text scrambled (labels A-G mixed into table); ligature/spacing mostly fine; reference superscripts rendered as "!" or stray digits (e.g. "anomalies.!", "1,2"); end-of-section marker rendered "!". Reference numbering in the text is shifted from ~ref 30 on (e.g. OPLL cited to refs 30-31 which are chondrosarcoma papers; RA statistics cited to ref 48 which is Byers chordoma histology; CPPD "Bouvet 1985" cited as 54 which is a neurenteric cyst case) - the printed list seems misaligned with in-text numbers; treat citations cautiously. No inverted/corrupted images found; figure panels mostly lack some letter labels (e.g. Fig 14.20 crops, 14.18 C/D).
- Source inconsistencies: Welcher basal angle ">143-145" (text p3) vs "<140" (Table 14.1); Fig 14.3 caption "2008 to 2013" vs panel stamp 2015; Fig 14.9 caption says A coronal but A looks sagittal.
- Quality assessment: Moderate. Clear modern CT/MR pictorial review with good pathology breadth (congenital, trauma incl. atlas/odontoid/hangman, degenerative, RA/AS/CPPD, infection/ORN, tumors, vascular incl. Bow Hunter, VAVF, DAVF) and 32 clinical images with arrows; strong on tumour and vascular CVJ. WEAK on craniometry (only 5 lines/angle in Table 14.1, no BDI/BAI/ADI-PADI beyond ADI text, no Powers, Redlund-Johnell, Ranawat, Grabb-Oakes, clivus-canal angle values), and no named classifications (Anderson-D'Alonzo, Traynelis, Levine-Edwards, Landells, Anderson-Montesano, Tuli, Fielding, Goel) - only numbered box classifications. Little explicit surgical-decision content. Images are low-to-mid resolution greyscale.
- Suggested rank for talk: secondary/supporting source (rank ~2-3 of sources): use for case images of basilar invagination, atlas assimilation, os odontoideum, ponticulus posticus, Jefferson/odontoid/hangman CT, retroodontoid pseudotumor, ORN, chordoma/meningioma, and CVJ vascular lesions (Bow Hunter, DAVF). Do not rely on it for craniometry or trauma classifications.

---
# Inventory: sutton_dahnert (two excerpts)

## (a) Sutton - sutton.pdf (text/sutton, 21 pages)
- Title: Textbook of Radiology & Imaging, Edition 8, Volume 2 (PDF metadata title "Textbook of Radiology And Imaging, Vol 2 - E-Book"; metadata author "Bharat Aggarwal").
- Authors: David Sutton, Rodney Reznek, Janet Murfitt. Adaptation Editor: Bharat Aggarwal (Max Healthcare, New Delhi). Associate editors Amit Kumar Sahu, Akshay D. Baheti, Varsha Joshi; section editors incl. Girish Gandikota, Mukesh Harisinghani, Puneet Bhargava, Sandeep Hedgire, Subba Digumarthy, Sujit Vaidya, Suresh Mukerji, Suyash Mohan (pp.1-4).
- Publisher/year: Elsevier / RELX India Pvt. Ltd., 2024 (adapted reprint of 7e, Churchill Livingstone; previous editions 2005, 1998, 1993). Adapted ISBN 978-81-312-5961-0; set ISBN 978-81-312-5959-7 (p.5-6).
- Chapter numbering from figure captions: Chapter 79 (figs 79.24-79.26). Chapter title not in excerpt. Chapter/section "Craniovertebral Junction Abnormalities" begins at bottom of excerpt p.7.
- Page map (PDF pages): 1-6 front matter/copyright; 7 end of degenerative-spine section + heading "Craniovertebral Junction Abnormalities"; 8-13 CVJ and congenital spine anomalies; 13-14 spine anomalies/ "What the referring physician wants to know" (spinal neoplasm); 14-15 suggested readings; 15-21 reference list [1]-[35] (chapter-wide, mostly not CVJ).
- CVJ content: pp.7-13 (about 5 pages of text). Printed page numbers are not present in text layer.
- Text layer: native (not OCR); clean single-column. No ligature/spacing problems seen. Text excerpts start mid-sentence on p.7 and p.14 (excerpt gaps: p.13 -> p.14 jumps mid-sentence "In a large ..." -> "vessels that will have a tubular configuration"). Fig 79.26 caption splits across p.12/p.13. Fig 79.24 image is on p.9 but its caption is on p.10.
- Figures: 3 CVJ figures (Fig. 79.24 A-B, 79.25 A-C, 79.26), as 3 raw crops (sutton_p009_f1, p011_f1, p012_f1) plus one non-figure (sutton_p004_f1 = Elsevier logo, skipped). Raw crops are low native resolution (see CSV).
- Conversion problems: Fig 79.24 raw crop panel B appears cropped at bottom (white line lies on lowest edge; dens/C1 region barely visible). Pages are rendered Letter size from an e-book (reflowed), so no original pagination.
- Quality for talk: low-moderate. Narrative text is brief; useful as a cross-check on Chamberlain/McGregor/basal angle/condylar angle values and 3 CVJ example images (CT/MRI) of basilar invagination, atlanto-occipital assimilation + Chiari I, os odontoideum. No Wackenheim, Ranawat, BDI/BAI, Redlund-Johnell, ADI, Powers, Welcher, clivo-axial angle, no trauma classifications, no RA text, no TB text.
- Suggested rank: low (supporting; images only for 3 teaching examples; resolution 240-870 px wide).

## (b) Dahnert - dahnert.pdf (text/dahnert, 4 pages)
- Title: Radiology Review Manual, South Asian Edition (adaptation of Radiology Review Manual, Eighth Edition; PDF metadata "Dähnert: Radiology Review Manual, 8e (2017)").
- Author: Wolfgang Dähnert, MD. SAE Editors: Hrishikesh Kale, Abhijit Raut (Kokilaben Hospital, Mumbai).
- Publisher/year: Wolters Kluwer Health (India), Copyright 2021; ISBN-13 978-93-89859-98-0.
- Pages: p.1 title page (with background neck radiograph), p.2 copyright, p.3 = book p.226 (end of jaw-cyst section, then "CRANIOVERTEBRAL JUNCTION": CVJ anomaly, basilar invagination), p.4 = book p.227 (basilar impression, platybasia, atlas/axis anomalies, odontoid erosion, atlantoaxial subluxation).
- CVJ content: PDF pp.3-4 (book pp.226-227).
- Text layer: native, but two-column page in pdftotext -layout is INTERLEAVED (left and right columns on same lines; p.3 even has the jaw-cyst column interleaved with the CVJ column; p.4 right column text sits to the right in the same lines). Symbols: check mark bullets "♦"/"•" (dahnert bullet for imaging signs) and arrows rendered as "Α" (e.g. "Α aqueductal stenosis Α hydrocephalus" = arrow glyph lost); "!" for "due to"; "√" in image render. Page 4 thumbnail is clean and used to verify.
- Figures: 1 small line drawing on p.4 "Primary and Secondary Ossification Centers" (axis, atlas) - NOT captured in figs_raw (the only dahnert fig raw, dahnert_p001_f1, is the title-page background image, not a figure). Needs re-render.
- Quality: concise, high-yield list-style; contains numeric values (predental >2.5 mm adult / >4.5 mm children; retrodental <18 mm; Chamberlain >5 mm; tip of odontoid >10 mm above bimastoid line; clivus-canal angle <150 deg; Welcher >140-145 deg) and differential lists/mnemonics. Mixed: some values lack landmarks definition. Suggested rank: low-moderate (quick-reference cross-check, mnemonics for slides); no images useful.
