// All of the site's words live here. Edit text in this file; the design reads from it.
// Anything marked TODO is waiting on Miguel and shows on the page as a visible placeholder.

window.SITE = {
  // Publishing switches (Miguel, 27 Sep — option A for the first push):
  //   showCv: false   -> the CV button and the CV app link are hidden until a cleaned CV (no phone/address) is ready
  //   hideTodos: true -> unfinished items are left out of the page instead of showing as red placeholders
  // Set either back to true/false here when the real content is ready. Nothing below is deleted.
  showCv: false,
  hideTodos: true,

  person: {
    name: 'Miguel Irfan Hameed',
    shortName: 'Miguel Irfan Hameed', // what the header and every message shows
    role: 'Marketing Operations Specialist', // Miguel's main target (22 Sep); Technical Operations is the second track
    // Story line chosen by Miguel (22 Sep), shown two-tone (after alicezhao.work): the start in grey, the rest in full colour.
    storyStart: 'Grounded in science, fluent in data,',
    story: 'I now build the systems that turn strangers into partners.',
    location: 'Quezon City, Philippines',
    availability: 'Open to work anywhere',
    email: 'miguelhameed@gmail.com',
    linkedin: 'https://www.linkedin.com/in/miguelhameed',
    linkedinLabel: 'linkedin.com/in/miguelhameed',
    instagram: 'https://www.instagram.com/miggybop/', // set to null to take it off the site
    cv: 'cv.pdf',
    motto: "I get closer, fix what's broken, and keep things moving.", // chosen by Miguel 22 Sep
    headshot: 'images/headshot.jpg', // Miguel's graduation portrait (22 Sep), for now; studio headshot coming
    avatar: 'images/headshot-avatar.jpg?v=2', // small chat icons: same crop as the big photo (28 Sep). Bump ?v= when the file changes so browsers refetch it.
  },

  // What the intro message lists under "what I do".
  // Slack-style tags under the opening line (after baileyelith.com). Drawn from his approved highlights.
  tags: ['marketing-operations', 'business-development', 'ai-workflows'],

  // Approved by Miguel 22 Sep. Order follows the pipeline: find, reach, give them something to read, speed it up with AI.
  highlights: [
    'Pipeline management: finding, checking and qualifying leads and partners',
    'LinkedIn outreach campaigns with Dripify, Sales Navigator and Apollo',
    'Content operations, from idea to published article',
    'AI-assisted workflows that save the team time',
  ],

  // The name of the whole set, shown above the work. Keep it short; the count is added automatically.
  // Example: 'systems, one workspace' renders as "Four systems, one workspace" when there are four items.
  workSetName: 'charters, one remit',

  // Emptied 29 Sep 2026 at Miguel's request: the four cards described work he did not do.
  // The old text is parked in content-work-cards-removed.txt. The Work channel hides itself while this is empty.
  // Each entry, when Miguel has real ones:
  //   { title, category, year, tags: [], result, problem, did, metric, specs: [{ label, value }], shot }
  //   'specs' are two or three checkable facts, not claims: the tool, the cadence, the volume.
  //   e.g. specs: [{ value: 'ClickUp', label: 'system' }, { value: 'Weekly', label: 'cadence' }, { value: '23', label: 'records' }]
  //   'category' and 'year' print beside the number, e.g. "01 — CONTENT OPERATIONS · 2026".
  selectedWork: [
    {
      title: 'Partner pipeline, research to the moment of contact',
      category: 'Partner pipeline', year: '30% of my week', tags: ['Research', 'Record hygiene'],
      owns: 'Finding and enriching partner leads, writing an account brief for each one, sequencing who is approached and when, and keeping every record current under a 14-day rule.',
      stops: 'At human contact. My manager sends everything and owns every stage change.',
      result: 'Twenty-three records across three lists, all carrying a dated note and a next step. Eighteen were past the 14-day rule; none were afterwards.',
      specs: [{ value: 'ClickUp', label: 'system' }, { value: '14 days', label: 'staleness rule' }, { value: '23 records', label: 'across 3 lists' }],
      metric: '30%', shot: null,
    },
    {
      title: 'Marketing site, from bug to staging pull request',
      category: 'Marketing site', year: '25% of my week', tags: ['QA', 'Staging PRs'],
      owns: 'Testing the site, reproducing and documenting defects, fixing copy, and opening pull requests against staging.',
      stops: 'At the merge. I never merge to production, and anything touching positioning is flagged in the pull request so it is read as a decision, not a code change.',
      specs: [{ value: 'GitHub', label: 'system' }, { value: 'Staging only', label: 'boundary' }, { value: 'Lighthouse', label: 'audits' }],
      metric: '25%', shot: null,
    },
    {
      title: 'Competitive intelligence the sales side can actually use',
      category: 'Competitive intelligence', year: '20% of my week', tags: ['Teardowns', 'Sales enablement'],
      owns: 'Competitor teardowns, a battlecard, objection handling scripts, and a monitoring run that keeps them current.',
      stops: 'At review. Nothing goes to a customer without my manager reading it first.',
      result: 'Eleven deliverables and one monitoring run.',
      specs: [{ value: '11', label: 'deliverables' }, { value: '1', label: 'monitoring run' }, { value: 'Quarterly', label: 'cadence' }],
      metric: '20%', shot: null,
    },
    {
      title: 'Content operations, idea to editing',
      category: 'Content operations', year: '15% of my week', tags: ['Editorial', 'Distribution'],
      owns: 'Moving blog posts through the pipeline, reviewing and annotating them, and drafting and scheduling social content.',
      stops: "At the editing stage. Approving a post and publishing it are my manager's alone, and nothing posts under my name.",
      specs: [{ value: 'ClickUp', label: 'pipeline' }, { value: 'Buffer', label: 'scheduling' }, { value: 'Editing', label: 'last stage I own' }],
      metric: '15%', shot: null,
    },
    {
      title: 'Outbound list quality, so the pipeline is worth working',
      category: 'Outbound list quality', year: '10% of my week', tags: ['Triage', 'Reporting'],
      owns: 'Triaging outbound records, disqualifying what does not fit, keeping list quality honest, and reporting on campaigns.',
      stops: 'At the reply that needs a person. Anything beyond a routine response goes to my manager or the sales operator.',
      specs: [{ value: 'Dripify', label: 'system' }, { value: 'Sales Navigator', label: 'sourcing' }, { value: 'Apollo', label: 'enrichment' }],
      metric: '10%', shot: null,
    },
  ],

  // The authority boundary, from the Operating Agreement I work under. His words and mine, not a paraphrase.
  boundary: {
    lede: 'Five charters, one line that decides everything: I own the work up to the point of human contact or approval.',
    ships: 'Competitive research and teardowns. Account briefs. First drafts of any post, blog or outbound message. Blog review up to editing. Pull requests against staging. ClickUp field and status hygiene. Lead list triage and disqualification.',
    gated: 'Merging to production. Moving a post to approved. Anything sent to a person outside the company. Anything with a price, fee or contract term. Any security or compliance claim about a client. Anything that touches positioning.',
  },

  experience: [
    {
      role: 'Operations & Business Development Associate', // Miguel's choice, 22 Sep: Work Summary title, shortened
      type: 'Independent contractor',
      org: 'Cloud Sentry Solutions',
      logo: null, initials: 'CS', // no logo until Ken okays it (Miguel, 22 Sep)
      place: 'New Hampshire, New England',
      dates: 'April 2025 – Present', // alongside DOH until Jan 2026
      // Marketing-first draft, accepted by Miguel 22 Sep "for now" — he'll refine the details later.
      points: [
        'Manage a 60-article content pipeline for the company blog, and write, edit and review cybersecurity and compliance articles',
        'Run three LinkedIn outreach campaigns at once in Dripify, with daily and weekly reporting',
        'Research and qualify partner leads, and cleaned up the partner pipeline so overdue follow-ups dropped from 18 to 0',
        'Map where AI saves the marketing and sales team time, and build ClickUp automations that cut manual work',
        'Wrote the operating guide for five workstreams, and run weekly speed and quality checks on the marketing website',
      ],
    },
    {
      role: 'Health Program Officer II',
      org: 'Department of Health – Metro Manila Center for Health Development',
      logo: 'images/logos/doh.png', // official DOH seal (Wikimedia Commons)
      place: 'Mandaluyong City, Philippines',
      dates: 'April 2025 – January 2026',
      points: [
        'Managed and validated health facility data for the Field Health Services Information System (FHSIS)',
        'Coordinated with local health units and partner facilities for timely, complete, standardised data',
        'Reviewed, consolidated and analysed routine health reports to support monitoring and planning',
      ],
    },
    {
      role: 'Project Technical Specialist I',
      org: 'DOST – Food and Nutrition Research Institute',
      logo: 'images/logos/dost-fnri.png', // FNRI emblem, from fnri.dost.gov.ph
      place: 'Taguig City, Philippines',
      dates: 'November 2023 – August 2024',
      points: [
        'Conducted data collection and validation for the National Nutrition Survey',
        'Collected and processed biological samples through phlebotomy; performed laboratory analysis of biochemical markers',
      ],
    },
    {
      role: 'Project Technical Assistant II',
      org: 'DOST – Food and Nutrition Research Institute',
      logo: 'images/logos/dost-fnri.png', // FNRI emblem, from fnri.dost.gov.ph
      place: 'Taguig City, Philippines',
      dates: 'September – November 2023',
      points: ['Encoded and validated National Nutrition Survey data'],
    },
  ],

  education: 'BS Medical Technology, Far Eastern University Manila, 2022. Licensed.',
  educationLogo: 'images/logos/feu.png', // official FEU seal (Wikipedia)

  // Marketing-first groups, approved by Miguel 22 Sep. Only tools he has actually used.
  skills: [
    { group: 'Marketing operations', items: ['Content pipeline management', 'Editorial workflows', 'Content writing and editing', 'SEO tools', 'Buffer', 'Google Analytics'] },
    { group: 'Pipeline and outreach', items: ['Lead and partner research', 'Lead qualification', 'Pipeline management', 'LinkedIn outreach', 'Dripify', 'LinkedIn Sales Navigator', 'Apollo'] },
    { group: 'AI and automation', items: ['ChatGPT', 'Claude', 'ClickUp AI', 'AI workflow mapping', 'ClickUp automations'] },
    { group: 'Operations and tools', items: ['ClickUp', 'Slack', 'Workflow design', 'Process documentation', 'Website quality checks'] },
    { group: 'Data and compliance', items: ['Health data validation', 'R programming', 'HTML/CSS', 'SOC 2 compliance analysis'] },
  ],
  learning: 'Microsoft SC-300 and SC-200', // shown under the skills as "currently learning"


  // Proof, agreed with Miguel 22 Sep: current and marketing-relevant items first; lab-only certificates left out.
  // Items come from his CV. Add `link: 'https://…'` to any card to show a "View" link.
  proof: [
    { kind: 'Certification', title: 'Certified ClickUp Expert', topic: 'TODO: year earned' },
    { kind: 'In progress · startup project', title: 'MAPA: Multi-route Advisory for Passable Alternatives', topic: "A real-time navigation and road-passability app for Metro Manila's drivers and on-demand riders, including flood-prone roads." },
    { kind: 'Course · Coursera', title: 'Online Course in Management', topic: 'TODO: course name and year' },
    { kind: 'Training · Department of Health', title: 'Health data quality and analysis', topic: 'Data management, data quality checks for Universal Health Care, and a recognition for cross-program data analysis (2025).' },
    { kind: 'Certificate · NIDA Clinical Trials Network', title: 'Clinical research foundations', topic: 'Foundational principles of clinical research (2022).' },
  ],

  // Work pictures for the "Files" tab beside "Messages". The tab only appears once there is at least one.
  // Each entry: { name: 'content-board.png', src: 'images/work/content-board.png', caption: 'optional line' }
  // Keep every screenshot free of client names and private details.
  files: [],

  // Links out to real, published things ("Live sites" in the sidebar, after baileyelith.com).
  // The section only appears once there is at least one. Each entry: { label: 'MAPA', url: 'https://…' }
  liveSites: [],

  testimonials: [], // TODO: real quotes only, with name and role. The channel stays hidden until there are two.

  // Miguel's own words (22 Sep), lightly tidied for grammar only. One string per paragraph.
  about: [
    'Staying relevant has never been more important than in these fast-changing times, and my own path keeps proving it. From a start in medical science to arriving at the intersection of technical operations, compliance and marketing, my career has already evolved more than once.',
    'I started in medical laboratory science, earning my degree and license from Far Eastern University – Manila, then spent years handling medical data, research and contextual analysis at the DOST Food and Nutrition Research Institute and later the Department of Health, Metro Manila Center for Health Development. Somewhere in that work I noticed how close I already was to living inside data.',
    'Then came a stretch of sudden, quiet unhappiness, not tied to any one bad day, just a feeling that had settled in and stayed. So I made a decision that did not look like a career move at the time. I started working as a virtual assistant, and it became the opening that pointed me toward where I am now.',
    'That path led to my current role as an Operations & Business Development Associate at Cloud Sentry Solutions, a managed security and compliance platform, working across ClickUp workflow management, LinkedIn outreach, compliance automation and tool configuration.',
    'If there is one thing tying all of this together, it is the willingness to keep learning and outgrowing myself. Working with a startup means wearing a lot of hats, and embracing them has been one of the most fulfilling things I have ventured into so far. I feel more alive doing this than I have in a long time.',
    'My quest for learning and growing continues.',
  ],

  // From what Miguel has said he loves doing (May 2026 chat). Shown as small tags in #about.
  interests: ['Travel', 'Diving', 'Hiking', 'Trekking', 'The gym'],

  // The brand word, shown quietly in #about.
  word: 'Movement',

  notes: null, // No Substack yet; the Notes link stays hidden while this is null.
};
