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
