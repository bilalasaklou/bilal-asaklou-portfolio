'use client';

import { useState } from 'react';
import { ArrowDown, ArrowUpRight, BookOpen, BriefcaseBusiness, Check, ChevronRight, Code2, Dna, Download, ExternalLink, Github, GraduationCap, Mail, Menu, Microscope, Network, Search, X } from 'lucide-react';

const nav = [['About', '#about'], ['Education', '#education'], ['Research', '#research'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']];
const interests = ['Biomedical data integration', 'Multi-omics analysis', 'Machine learning & deep learning', 'Bioinformatics', 'Computational biology', 'Interpretable and explainable AI'];
const skills = [
  { title: 'Programming', items: ['Python', 'R', 'Java', 'PHP'] },
  { title: 'Data science', items: ['Pandas', 'NumPy', 'Data cleaning', 'Statistical modelling', 'Data visualisation'] },
  { title: 'Machine learning', items: ['Scikit-learn', 'Classification', 'Feature selection', 'Model evaluation', 'Cross-validation'] },
  { title: 'Deep learning', items: ['PyTorch', 'TensorFlow', 'Neural networks', 'Explainable AI'] },
  { title: 'Bioinformatics', items: ['16S rRNA metabarcoding', 'Microbiome analysis', 'Transcriptomics', 'Multi-omics'] },
  { title: 'Tools & workflow', items: ['Git', 'Jupyter', 'LaTeX', 'Linux'] },
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <header className="site-header"><div className="nav-wrap">
      <a className="wordmark" href="#home" onClick={closeMenu}>BA<span>.</span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}</nav>
      <a className="nav-cta" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
    </div></header>

    <main>
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ACADEMIC & RESEARCH PORTFOLIO</div>
          <h1>Bilal<br /><em>Asaklou.</em></h1>
          <p className="hero-role">AI Researcher <span>·</span> PhD Student</p>
          <p className="hero-intro">Exploring how artificial intelligence can help us understand complex biomedical data and uncover meaningful biological insights.</p>
          <div className="hero-actions"><a className="button button-dark" href="#research">Explore my research <ArrowUpRight size={16} /></a><a className="text-link" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/cv/bilal-asaklou-cv.pdf`} target="_blank" rel="noreferrer">Download CV <Download size={15} /></a></div>
          <div className="hero-meta"><span><span className="meta-line" /> Based in Morocco</span><span>Open to research collaboration</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract scientific network illustration"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-core"><Dna size={58} strokeWidth={1.05} /></div><span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="node node-d" /><div className="art-caption"><span>01 / 06</span><span>SCIENCE × INTELLIGENCE</span></div></div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-strip"><div className="section-shell strip-inner"><span className="strip-label">RESEARCH AT THE INTERSECTION OF</span><div>ARTIFICIAL INTELLIGENCE <i>×</i> BIOMEDICINE <i>×</i> DATA SCIENCE</div></div></section>

      <section className="content-section section-shell" id="about">
        <div className="section-heading"><span className="section-index">01 — ABOUT</span><h2>Curiosity driven.<br /><em>Research focused.</em></h2></div>
        <div className="about-grid"><div className="about-lead">I am an AI researcher and PhD student interested in developing computational methods for the analysis of complex biomedical data.</div><div className="about-body"><p>My academic background combines artificial intelligence, machine learning and data analysis. Through my research experience in biomedical data science, I have become particularly interested in how heterogeneous biological datasets can be integrated to reveal patterns that may not be visible when each data modality is studied independently.</p><p>My current research direction focuses on AI methods for the integrative analysis of heterogeneous biomedical data, with an interest in multi-omics, reproducibility, model interpretability and biological relevance.</p><p className="muted-note">I value rigorous methodology, transparent evaluation and collaboration across computational and life sciences.</p></div></div>
        <div className="interest-row"><span className="mini-label">RESEARCH INTERESTS</span><div className="interest-tags">{interests.map(x => <span key={x}>{x}</span>)}</div></div>
      </section>

      <section className="education-section" id="education"><div className="section-shell content-section">
        <div className="section-heading"><span className="section-index">02 — EDUCATION</span><h2>Academic<br /><em>background.</em></h2></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">2026 — PRESENT</div><div className="timeline-mark"><GraduationCap size={19} /></div><div className="timeline-content"><div className="timeline-top"><h3>PhD in Artificial Intelligence / Biomedical Data Science</h3><span className="pill">CURRENT</span></div><p className="institution">Doctoral studies · Morocco</p><p>Research topic: <strong>AI Methods for the Integrative Analysis of Heterogeneous Biomedical Data.</strong></p><p className="timeline-detail">Developing computational approaches for combining and analysing heterogeneous biomedical data, including omics data.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">2024 — 2026</div><div className="timeline-mark"><GraduationCap size={19} /></div><div className="timeline-content"><h3>Master’s Degree in Artificial Intelligence and Digital Computing</h3><p className="institution">Faculty of Sciences and Techniques (FST), Beni Mellal · Sultan Moulay Slimane University, Morocco</p><p>Graduate-level training in artificial intelligence, data science, machine learning and digital computing.</p></div></article>
          <article className="timeline-item">
  <div className="timeline-date">2024</div>

  <div className="timeline-mark">
    <BookOpen size={19} />
  </div>

  <div className="timeline-content">
    <h3>Bachelor's Degree in Computer Science</h3>

    <p className="institution">
      Faculty of Sciences and Techniques (FST),
      Beni Mellal, Morocco
    </p>

    <p className="timeline-detail">
      Graduated in Computer Science, developing a strong foundation in
      programming, algorithms, databases, and computer science.
    </p>
  </div>
</article>
        </div>
      </div></section>

      <section className="content-section section-shell" id="research">
        <div className="section-heading"><span className="section-index">03 — RESEARCH</span><h2>Questions worth<br /><em>investigating.</em></h2></div>
        <div className="research-feature"><div className="research-icon"><Network size={28} /></div><div><span className="mini-label">CURRENT RESEARCH DIRECTION</span><h3>AI methods for the integrative analysis of heterogeneous biomedical data</h3><p>Investigating machine learning and deep learning strategies to integrate multiple biomedical data modalities, identify robust patterns and support interpretable scientific discovery.</p><div className="research-keywords"><span>Data integration</span><span>Multi-omics</span><span>Heterogeneous data</span><span>Explainable AI</span></div></div></div>
        <div className="research-cards"><article><Microscope size={21} /><h4>Multimodal & multi-omics learning</h4><p>Combining complementary molecular and clinical information to build richer representations of biological systems.</p></article><article><Search size={21} /><h4>Robust biomarker discovery</h4><p>Identifying reproducible signals across datasets and cohorts while accounting for technical and biological variability.</p></article><article><Code2 size={21} /><h4>Interpretable AI</h4><p>Developing models whose predictions can be examined, evaluated and connected to meaningful biological hypotheses.</p></article></div>
      </section>

      <section className="projects-section" id="projects"><div className="section-shell content-section">
        <div className="section-heading"><span className="section-index">04 — SELECTED PROJECTS</span><h2>From data<br /><em>to discovery.</em></h2></div>
        <article className="project-card"><div className="project-topline"><span>MASTER’S FINAL-YEAR PROJECT · UM6P</span><span>01 / 02</span></div><div className="project-main"><div><h3>Identification of bacterial biomarkers associated with Parkinson’s disease</h3><p className="project-subtitle">A multi-cohort machine learning approach applied to 16S metabarcoding data</p></div><div className="project-symbol"><Dna size={38} /></div></div><p className="project-description">Development of a machine learning workflow to identify bacterial signatures associated with Parkinson’s disease using multi-cohort gut microbiome data. The work explored preprocessing, feature filtering, cohort-aware evaluation and strategies to assess generalisation across studies.</p><div className="project-tags"><span>16S rRNA</span><span>Microbiome</span><span>Machine learning</span><span>Multi-cohort analysis</span><span>Biomarker discovery</span></div><div className="project-footer"><span><BriefcaseBusiness size={15} /> Faculty of Medical Sciences, Mohammed VI Polytechnic University (UM6P), Ben Guerir</span><span>Research project</span></div></article>
        <article className="project-card secondary-project"><div className="project-topline"><span>RESEARCH & TECHNICAL WORK</span><span>02 / 02</span></div><h3>Cross-cohort machine learning evaluation for biomedical datasets</h3><p className="project-description">Exploration of cohort-aware validation strategies, feature selection and model comparison to investigate the robustness and transferability of predictive models across heterogeneous biomedical studies.</p><div className="project-tags"><span>Cross-validation</span><span>Model evaluation</span><span>Feature selection</span><span>Python</span></div></article>
        <p className="project-footnote">Project descriptions are concise portfolio summaries. Add links to code, posters, reports or publications when they are ready to share.</p>
      </div></section>

      <section className="content-section section-shell" id="skills">
        <div className="section-heading"><span className="section-index">05 — SKILLS</span><h2>Tools for<br /><em>discovery.</em></h2></div>
        <div className="skills-grid">{skills.map((group, i) => <div className="skill-card" key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="contact-section" id="contact"><div className="section-shell contact-inner"><span className="section-index">06 — CONTACT</span><h2>Let’s advance<br /><em>research together.</em></h2><p>I am interested in meaningful research discussions, academic collaborations and opportunities at the intersection of AI and biomedical sciences.</p><div className="contact-actions"><a className="button button-light" href="mailto:Billalasaklou@gmail.com">Email me <Mail size={16} /></a><a className="contact-social" href="www.linkedin.com/in/bilal-asaklou/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14} /></a><a className="contact-social" href="https://github.com/bilalasaklou" target="_blank" rel="noreferrer">GitHub <Github size={14} /></a></div></div></section>
    </main>
    <footer className="footer"><div className="section-shell footer-inner"><a className="wordmark" href="#home">BA<span>.</span></a><span>© {new Date().getFullYear()} Bilal Asaklou. All rights reserved.</span><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
