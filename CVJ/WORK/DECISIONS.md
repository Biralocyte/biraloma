# DECISIONS LOG — CVJ talk (Neuro-Radiology Meet, 5 Nov 2026)

Times are Nepal time (NPT).

- 21:00 Unzipped the sources to CVJ/src/CVJ. There was nothing in /mnt/user-data/uploads. I removed the __MACOSX and .DS_Store junk.
- 21:02 EPOS: `curl -I https://epos.myesr.org/` returned a proxy 403 (CONNECT tunnel failed, host not allowed). The 4 EPOS posters (ECR2010 C-2392, ECR2005 C-0882, ECR2019 C-2397, ECR2018 C-2555) could not be reached, so I continued without them. They are not cited, because nothing about them could be verified.
- 21:03 Text: pdftotext -layout, one file per page, in WORK/text/<src>/. Figures: rendered from the page region (PyMuPDF clip, zoom = native px density, min 2x, max 6x, RGB), so overlay arrows are kept and inverted (CMYK/Separation) images are avoided. Raw renders are in WORK/figs_raw/ and indexed in figs_raw_index.csv.
- 21:04 Extra file 91affc46…webp: an unsourced infographic (watermark "SA Radiology", artist signature, typos "paltybasia", "dense"). Its values cannot be traced to a citable source, so it is NOT used on slides. Kept in WORK only.
- 21:05 Step 2 runs as a Workflow, one sonnet agent per source plus one sonnet verifier per source (Sutton + Dahnert excerpts share one agent because they are tiny). Planning, slides, script, captions and audit stay on the main model.
- Source keys: chen, aiims, youmans, chong, smoker, sutton, dahnert.
- Youmans excerpt = Chapter 260 "Developmental Anomalies of the Craniovertebral Junction and Surgical Management" (not a trauma chapter). It is therefore used for developmental anomalies, reducibility and surgical decision points. Trauma classifications come from Chen/AIIMS.
- Chamberlain normal value: AIIMS Table 1 prints "Tip of dens 1 + 3.6 mm below this line" (I checked the rendered page, and it reads "+", probably a misprint for "±"). Smoker: "may normally project above this line … ranging from 1 mm ± 3.6 to 6.6 mm". Youmans: "below this line or at most 3 to 5 mm above it". Chong: "Dens apex < 5 mm above this line". Chen: "The dens is 3.6 to 6.6 mm below the line". The slide shows the agreed qualitative rule (AIIMS wording "odontoid process bisects the line in basilar invagination"). The numeric disagreement goes in the notes as a Q&A point.
- Welcher basal angle: AIIMS 124–142° (rank 1, shown on slide). Smoker "averages 132° and should always be less than 140°". Chen "<140°". Chong platybasia ">143–145 degrees" in the text but "<140 degrees" in its table. Explained in the notes.
- ADI: AIIMS "more than 4 mm in children and more than 3 mm in adults is diagnostic" (p25) is shown on the slide. The AIIMS age cut-off differs within the chapter (p9 "<8 years up to 5 mm", p27 "<4 mm under 9 years"), and Youmans gives "beyond age 8 years … limited to 3 mm" and "Down syndrome >4.5 mm mandates evaluation". All of this is in the notes.
- No TB image exists in any source, so the TB slide is text plus the Chen TB-vs-RA table. Logged in gaps.md.
- Smoker figures (scanned RadioGraphics 1994) were cropped panel by panel from the page renders to remove page text, and are shown whole (all panels a–c). smoker_F8 = raw p008_f1 (single MR panel = whole Fig 8).
- Youmans Fig 260.4 algorithm is vector graphics, rendered at 4x; the chapter-number tab was whited out (page furniture, not figure content).
- Hierarchy adjusted: Smoker (rank 3 overall) was promoted to the main figure source for craniometry, because Chen and Youmans only name the lines. AIIMS values stay on the slides wherever the sources disagree.
- Chen Figs 17/18: the verifier found the printed images swapped relative to their captions. Images were matched by content (chen_F17 = CT/CT/T2 block on p.11). Used only in Backup.
- Timing: the v1 core script was about 5,500 words (48 min). Grisel, Atlas fracture on CT, Further lateral-view indices, MPS and Nerve sheath tumor moved to Backup with full notes. Core scripts are capped at about 92 words; the remainder is moved verbatim to IF TIME (build/slides.js). Seven key slides are exempt (clivus–canal angle, hangman, algorithm, urgent, takeaways, AAI classification, BI patterns). Final core: 60 slides, about 4,265 script words, about 38 min.
- Low-resolution AIIMS composites (Figs 8, 11, 12, 14, 18, 20) moved to Backup; core slides use the higher-resolution Chen, Chong, Youmans and Smoker figures.
- Numbered and bulleted lists: when a line starts with a red bold key phrase, a zero-width plain run is inserted first so the number or bullet renders black. A buClr element is also added in post-processing.
- Fonts: Helvetica is specified (renders as Liberation Sans in the Linux check renders). Pointer glyphs use "Apple Symbols", 4 pt larger than the caption; this falls back to DejaVu in the check renders.
- Pointer glyph mapping: white/gray pointer → gray glyph (7F7F7F); black → black. White outlined block arrows (Chen Figs 20, 27, 38) → open arrow ⇨ gray. Dashed or dotted arrows and "dot" pointers have no glyph equivalent, so their words are kept.

## EPOS integration (after delivery; posters extracted in a separate local session, EPOS_CVJ.zip)
- Posters: C-2392 (ECR 2010, Arcalis et al.), C-0882 (ECR 2005, Bermejo et al.), C-2397 (ECR 2019, Pandit et al.), C-2555 (ECR 2018, Eser et al.). Rank: below all textbooks and journal sources. They are used for images and for gaps only. Cited in the notes and as references 8–11.
- Three new core slides:
  - "The Same Lines on CT and MRI" (C-2555 Fig 2)
  - "Basion–Dens and Basion–Axial Intervals" (C-2397 Figs 9, 8, with the Harris rule of 12 from C-2392 and C-0882)
  - "Measuring Basilar Invagination" (C-2555 Fig 7)
- Four backup slides: Powers ratio and modified Ranawat (C-2397 Figs 4–5; definitions only, no values in any source), AOD radiograph (C-0882 Fig 17; 242 × 312 px, flagged), condylus tertius (C-2555 Fig 10), platybasia (C-2555 Fig 5).
- The 12 mm Harris value is radiographic (C-0882: "on the lateral radiograph"). C-2397 gives CT definitions without cut-offs; stated in the Q&A.
- Jefferson slide: key line now includes "lateral masses >6 mm apart" (C-2392 wording). The C-0882 variant ("≥6 mm between odontoid and lateral masses") is in the Q&A.
- Notes additions: Anderson–Montesano named (C-0882); traction absolutely contraindicated in AOD (C-2392); Anderson & D'Alonzo frequencies and type II nonunion 64% (C-2392); ADI and Welcher poster values added to the Q&A disagreements.
- C-2392 images are whole poster slides (720 × 540) with tiny embedded images, so none are used on slides.
- Captions follow the poster captions (condensed); drawn coloured lines are named in words, and coloured arrows get coloured glyphs (C-2555 Fig 10: green, purple, red).
- Timing after integration: core 63 slides, about 4,485 script words, about 39.8 min.

## Added journal articles (uploaded Article_PDFs_with_errata.zip)
- Sources:
  - Smoker & Khanna 2008 (Childs Nerv Syst)
  - Deliganis et al. 2000 (RadioGraphics), plus Erratum 2001;21(2):520
  - Goel 2009 (Neurol India)
  - Teegala et al. 2008 (Neurosurgery)
  - Dlouhy et al. 2017 (J Neurosurg Spine)
- Extraction: one sonnet agent per article, then one verifier per article (workflow).
- Rank: peer-reviewed journal articles, above the EPOS posters. Where they give values the textbooks lack, they go on the slides; where they disagree with AIIMS, the AIIMS value stays on the slide and the disagreement goes in the Q&A.
- Erratum: Deliganis Table 3, basion–posterior axial line = "<12 mm posterior to basion, <4 mm anterior to basion" (the corrected wording; the supplied PDF is the online-corrected version). The slide uses the corrected wording, and the Q&A explains the erratum and the body text's opposite phrasing.
- New core slides:
  - Normal Intervals at Lateral Radiography (Deliganis Table 3, 5 of 7 rows)
  - Irreducible Os: Transverse Ligament (Dlouhy Fig 3)
  - CVJ Tuberculosis: Grade and Treat (Teegala Fig 1)
  - Grade 3 CVJ Tuberculosis (Teegala Fig 2; the panels were separated so the embedded caption text is excluded, each shown whole)
- AOD slide: the image is now Deliganis Fig 7 (radiograph with BDI 18 mm, plus bilateral sagittal CT), replacing the Chen mummy CT.
- Two Developmental Patterns: the "AIIMS term" row was replaced by a "Goel group" row (A: instability, fix C1–C2; B: no instability, decompress). The Goel definitions are quoted in the Q&A.
- Teegala Fig 1: a thin red page border was trimmed (page furniture).
- Moved to Backup for timing: Basioccipital Hypoplasia (overlaps Measuring Basilar Invagination), Klippel–Feil Anomaly, Condylar Hypoplasia and Condylus Tertius. New backup slide: Goel Group A and B MRI.
- Smoker 2008 values went into the Chamberlain, McGregor and Welcher Q&A (≤5 mm, ≤7 mm, platybasia >150°).
- The references slide is split; the continuation numbers from 12 to 16.
- Timing: core 65 slides, about 4,586 script words, about 40.7 min.
