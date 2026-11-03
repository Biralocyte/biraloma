# Inventory: teegala

- Title: "CRANIOVERTEBRAL JUNCTION TUBERCULOSIS: A NEW COMPREHENSIVE THERAPEUTIC STRATEGY" (section: CLINICAL STUDIES)
- Authors: Ramesh Teegala, M.Ch. (Alluri Sita Ramaraju Academy of Medical Sciences Hospital, Eluru, West Godavari, India); Pradyuth Kumar, M.Ch.; Shashank S. Kale, M.Ch.; Bhawani S. Sharma, M.Ch. (all AIIMS, New Delhi, India)
- Journal: Neurosurgery 63:946-955, 2008 (Volume 63, Number 5, November 2008). Received January 1, 2008; accepted June 4, 2008.
- DOI printed: 10.1227/01.NEU.0000327696.77814.1E
- Pages: 10 (journal pp. 946-955; PDF page N = journal page 945+N). Pages 9-10 include references (39) and four invited Comments (Traynelis, Benzel, Menezes, Mummaneni).
- Text layer: yes (digital PDF, pdftotext works). Two-column layout; the supplied text_clean/teegala.txt is only 29 lines (one block per page, still interleaved) and per-page text is interleaved, so plain `pdftotext` (non-layout) on the PDF was used for reading; tables were checked against the page images.
- Figures: 7 (Fig 1 and Fig 7 are flow charts; Figs 2-6 radiographs/CT/MRI). Tables: 6 (Table 1 grading, 2 disability class, 3 diagnostic criteria, 4 symptoms, 5 bone/soft-tissue involvement, 6 outcomes by grade).
- Conversion problems:
  - figs_raw_index_articles.csv orig_fig_no values are wrong for page 5 (f1 listed as 1, f2 listed as 4): teegala_p005_f1 is Figure 4 (right column), teegala_p005_f2 is Figure 3 (left column). Page 6 f1 is Fig 5, page 7 f1 is Fig 6, page 8 f1 is Fig 7, page 2 f1 is Fig 1, page 3 f1 is Fig 2 (index lists "1,2,1,4,1,1,1").
  - Raw crops of Figs 2, 3 and 6 contain part of the caption text (Fig 3 caption truncated mid-sentence in the crop); flagged NEEDS_RERENDER/crop in the CSV. Figs 1, 4, 5, 7 crops are clean.
  - Fig 4 dotted lines are thin and low contrast.
  - Table 6 extracted text is scrambled by pdftotext; reproduced from the page image.
- Internal inconsistencies in the article (as printed): abstract says "over a 3-year period" but the text says "9-year period" and Jan 1997-Dec 2005; abstract "Children and young adults comprised 70%" vs results "Seventy-three percent ... younger than 30"; results text cites "Fig. 2" for the 5 patients with reducible AAD posterior fixation (Fig. 3 is the relevant figure); Table 6 lists Grade 1 initial instability (AAD) 12 + Grade 2 20 + Grade 3 6 = 38 (consistent with 38 AAD); disability Class 1 = 30, 2 = 32, 3 = 8, 4 = 1 in Table 2 (sums to 71).
- Quality for this talk: High value for CVJ TB grading, algorithm, outcomes and instability definition (the only source with a TB scoring system). Weak points: image quality of radiographs is modest (grainy, low-contrast, scanned from film), figures carry no arrows or measurement overlays except dotted lines in Fig 4, no CT/MRI craniometry, no measurement beyond retropharyngeal collection >=7 mm at C2 and dens-C1 arch instability cut-offs. Single-institution series; algorithm validated only on its own cohort. Not a systematic craniometry source.
