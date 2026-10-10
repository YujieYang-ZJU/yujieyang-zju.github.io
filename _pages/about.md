---
permalink: /
title: "Yujie Yang"
excerpt: "Yujie Yang is a Ph.D. student in Control Science and Engineering at Zhejiang University, researching energy management for fuel cell hybrid power systems."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<h1 id="about-me">About Me</h1>

I am currently a Ph.D. student in Control Science and Engineering at **Zhejiang University**, Hangzhou, China, under the supervision of **Prof. Yang Zhu** and **Prof. Lei Wang**. I am a member of **Prof. Hongye Su**'s research group.

Previously, I received a B.Eng. degree in Electronic Information Engineering from **Zhejiang Gongshang University**, Hangzhou, China, and a B.Eng. degree in Robotics and Electrical Engineering from the **University of Sussex**, Brighton, United Kingdom, both in 2025.

<h1 id="research">Research</h1>

My research focuses on **energy management for fuel cell hybrid power systems**.

<h1 id="publications">Selected Publications</h1>

<article class="publication-card" aria-labelledby="pemfc-publication-title">
  <div class="publication-card__image">
    <div class="publication-card__figures">
      <a href="{{ '/images/pemfc-hierarchical-control.png' | relative_url }}" title="Fig. 2. Proposed hierarchical control strategy" aria-label="Enlarge Fig. 2: proposed hierarchical control strategy">
        <img src="{{ '/images/pemfc-hierarchical-control.png' | relative_url }}" alt="Hierarchical control framework with upper-level optimal temperature determination and lower-level data-enabled predictive control" loading="lazy" width="823" height="947">
        <span class="publication-card__figure-label">Fig. 2</span>
      </a>
      <a href="{{ '/images/pemfc-temperature-tracking.png' | relative_url }}" title="Fig. 11. Stack temperature variation under different control strategies in Case 2" aria-label="Enlarge Fig. 11: stack temperature tracking comparison">
        <img src="{{ '/images/pemfc-temperature-tracking.png' | relative_url }}" alt="Stack temperature tracking comparison for PID, MPC, DeePC, and GDeePC, with protection-based temperature adjustments and four enlarged details" loading="lazy" width="1610" height="773">
        <span class="publication-card__figure-label">Fig. 11</span>
      </a>
    </div>
    <p class="publication-card__image-hint">Click a figure to enlarge</p>
    <span class="publication-card__badge">TIE 2026</span>
  </div>
  <div class="publication-card__content">
    <h2 id="pemfc-publication-title" class="publication-card__title"><a href="https://ieeexplore.ieee.org/document/11185265" target="_blank" rel="noopener noreferrer">Hierarchical Optimal Temperature Regulation for PEMFCs via Generalized Data-Enabled Predictive Control</a></h2>
    <p class="publication-card__authors">Haisong Xu, <strong>Yujie Yang</strong>, Zheng-Guang Wu, Hongye Su, Lei Wang</p>
    <p class="publication-card__venue"><em>IEEE Transactions on Industrial Electronics</em>, 73(2): 3083–3092, 2026.</p>
    <div class="publication-card__actions">
      <a class="publication-card__button" href="https://ieeexplore.ieee.org/document/11185265" target="_blank" rel="noopener noreferrer">PDF</a>
      <a class="publication-card__button" href="{{ '/files/xu2026hierarchical.bib' | relative_url }}" data-citation-dialog="pemfc-citation" aria-haspopup="dialog" aria-controls="pemfc-citation">Cite</a>
    </div>
    <p class="publication-card__doi"><a href="https://doi.org/10.1109/TIE.2025.3603075" target="_blank" rel="noopener noreferrer">DOI: 10.1109/TIE.2025.3603075</a></p>
  </div>
</article>

<dialog id="pemfc-citation" class="publication-citation" aria-labelledby="pemfc-citation-title">
  <h2 id="pemfc-citation-title">BibTeX Citation</h2>
  <pre><code>@article{xu2026hierarchical,
  author = {Xu, Haisong and Yang, Yujie and Wu, Zheng-Guang and Su, Hongye and Wang, Lei},
  title = {Hierarchical Optimal Temperature Regulation for {PEMFCs} via Generalized Data-Enabled Predictive Control},
  journal = {IEEE Transactions on Industrial Electronics},
  year = {2026},
  volume = {73},
  number = {2},
  pages = {3083--3092},
  doi = {10.1109/TIE.2025.3603075},
  url = {https://ieeexplore.ieee.org/document/11185265}
}</code></pre>
  <div class="publication-citation__actions">
    <button type="button" class="publication-card__button" data-copy-citation>Copy citation</button>
    <a href="{{ '/files/xu2026hierarchical.bib' | relative_url }}" download>Download .bib</a>
    <form method="dialog"><button class="publication-card__button" aria-label="Close citation">Close</button></form>
  </div>
  <p class="publication-citation__status" role="status" aria-live="polite"></p>
</dialog>

<article class="publication-card" aria-labelledby="lstm-nmpc-publication-title">
  <div class="publication-card__image">
    <div class="publication-card__figures publication-card__figures--lstm">
      <a href="{{ '/images/lstm-nmpc-control.png' | relative_url }}" title="Fig. 2. Control diagram of the LSTM-based NMPC strategy" aria-label="Enlarge Fig. 2: LSTM-based NMPC control strategy">
        <img src="{{ '/images/lstm-nmpc-control.png' | relative_url }}" alt="LSTM-based nonlinear model predictive control diagram with IPSO rolling optimization and PEMFC thermal management feedback" loading="lazy" width="1095" height="440">
        <span class="publication-card__figure-label">Fig. 2</span>
      </a>
      <a href="{{ '/images/lstm-nmpc-temperature-tracking.png' | relative_url }}" title="Fig. 6. Simulation results comparison of PID, LMPC and NMPC controllers" aria-label="Enlarge Fig. 6: PID, LMPC and NMPC temperature tracking comparison">
        <img src="{{ '/images/lstm-nmpc-temperature-tracking.png' | relative_url }}" alt="Outlet temperature tracking for PID, linear MPC and LSTM-based NMPC, with a detail inset and temperature reference" loading="lazy" width="1110" height="885">
        <span class="publication-card__figure-label">Fig. 6</span>
      </a>
    </div>
    <p class="publication-card__image-hint">Click a figure to enlarge</p>
    <span class="publication-card__badge">IAI 2025</span>
  </div>
  <div class="publication-card__content">
    <h2 id="lstm-nmpc-publication-title" class="publication-card__title"><a href="https://ieeexplore.ieee.org/document/11276989" target="_blank" rel="noopener noreferrer">LSTM-Based Nonlinear Model Predictive Control for Thermal Management of Proton Exchange Membrane Fuel Cells</a></h2>
    <p class="publication-card__authors"><strong>Yujie Yang</strong>, Haisong Xu, Lei Wang, Yang Zhu, Hongye Su</p>
    <p class="publication-card__venue"><em>2025 7th International Conference on Industrial Artificial Intelligence (IAI)</em>, Shenyang, China, pp. 1–6, 2025.</p>
    <div class="publication-card__actions">
      <a class="publication-card__button" href="https://ieeexplore.ieee.org/document/11276989" target="_blank" rel="noopener noreferrer">PDF</a>
      <a class="publication-card__button" href="{{ '/files/yang2025lstm.bib' | relative_url }}" data-citation-dialog="lstm-nmpc-citation" aria-haspopup="dialog" aria-controls="lstm-nmpc-citation">Cite</a>
    </div>
    <p class="publication-card__doi"><a href="https://doi.org/10.1109/IAI68403.2025.11276989" target="_blank" rel="noopener noreferrer">DOI: 10.1109/IAI68403.2025.11276989</a></p>
  </div>
</article>

<dialog id="lstm-nmpc-citation" class="publication-citation" aria-labelledby="lstm-nmpc-citation-title">
  <h2 id="lstm-nmpc-citation-title">BibTeX Citation</h2>
  <pre><code>{% raw %}@inproceedings{yang2025lstm,
  author = {Yang, Yujie and Xu, Haisong and Wang, Lei and Zhu, Yang and Su, Hongye},
  title = {{LSTM}-Based Nonlinear Model Predictive Control for Thermal Management of Proton Exchange Membrane Fuel Cells},
  booktitle = {2025 7th International Conference on Industrial Artificial Intelligence ({IAI})},
  year = {2025},
  pages = {1--6},
  address = {Shenyang, China},
  publisher = {IEEE},
  doi = {10.1109/IAI68403.2025.11276989},
  url = {https://ieeexplore.ieee.org/document/11276989}
}{% endraw %}</code></pre>
  <div class="publication-citation__actions">
    <button type="button" class="publication-card__button" data-copy-citation>Copy citation</button>
    <a href="{{ '/files/yang2025lstm.bib' | relative_url }}" download>Download .bib</a>
    <form method="dialog"><button class="publication-card__button" aria-label="Close citation">Close</button></form>
  </div>
  <p class="publication-citation__status" role="status" aria-live="polite"></p>
</dialog>

<h1 id="projects">Projects</h1>

<div class="homepage-project">
  <a class="homepage-project__preview" href="{{ '/images/inkdesk-editor.png' | relative_url }}" aria-label="View the InkDesk editor screenshot">
    <img src="{{ '/images/inkdesk-editor.png' | relative_url }}" alt="InkDesk layout editor with an e-paper canvas and widget palette" loading="lazy" width="2640" height="1704">
  </a>
  <div class="homepage-project__content">
    <h2 class="homepage-project__title"><img src="{{ '/images/inkdesk-logo.png' | relative_url }}" alt="" width="40" height="40">InkDesk</h2>
    <p class="homepage-project__subtitle">A desktop companion for e-paper dashboards</p>
    <p>InkDesk is an open-source macOS app with ESP-IDF firmware for the Seeed reTerminal E1001. Its drag-and-drop editor brings together to-do lists, notes, images, task progress, and optional AI-generated cards, with local-network synchronization and background menu bar operation.</p>
    <p class="homepage-project__meta">SwiftUI &middot; ESP32-S3 &middot; ESP-IDF &middot; MIT License</p>
    <p class="homepage-project__links"><a href="https://github.com/YujieYang-ZJU/InkDesk"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a><a href="https://github.com/YujieYang-ZJU/InkDesk#readme">Documentation</a></p>
  </div>
</div>

<h1 id="news">News</h1>

<p class="coming-soon">Updates will be added soon.</p>

<h1 id="education">Education</h1>

**Zhejiang University**<br>
Ph.D. student in Control Science and Engineering · Current

**Zhejiang Gongshang University**<br>
B.Eng. in Electronic Information Engineering · 2025

**University of Sussex**<br>
B.Eng. in Robotics and Electrical Engineering · 2025

<h1 id="honors">Honors and Awards</h1>

<p class="coming-soon">Details will be added soon.</p>
