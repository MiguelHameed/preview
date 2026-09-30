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
  // Headline style, chosen by Miguel 29 Sep: a short hook, then the plain fact.
  // Each is { hook, line } — the hook is set in the accent colour.
  // Headline style, chosen by Miguel: hook, colon, plain fact. Each links into the matching charter in #Work.
  highlights: [
    { hook: 'Five workstreams, one desk', line: 'partnerships, the website, competitive intelligence, content, outbound.', href: '#selected-work' },
    { hook: 'Owned end to end', line: 'research, enrichment, briefs and sequencing, handed over ready to send.', href: '#selected-work' },
    { hook: 'House rules', line: 'I wrote the operating agreement the work runs on.', href: '#selected-work' },
    { hook: 'Order restored', line: 'a partner pipeline untouched since April, current again in a day.', href: '#selected-work' },
    { hook: 'First pass, last word', line: 'AI drafts the repetitive part; I review everything before it ships.', href: '#selected-work' },
  ],

  // The name of the whole set, shown above the work. Keep it short; the count is added automatically.
  // Example: 'systems, one workspace' renders as "Four systems, one workspace" when there are four items.
  workSetName: 'workstreams, one desk',

  // Emptied 29 Sep 2026 at Miguel's request: the four cards described work he did not do.
  // The old text is parked in content-work-cards-removed.txt. The Work channel hides itself while this is empty.
  // Each entry, when Miguel has real ones:
  //   { title, category, year, tags: [], result, problem, did, metric, specs: [{ label, value }], shot }
  //   'specs' are two or three checkable facts, not claims: the tool, the cadence, the volume.
  //   e.g. specs: [{ value: 'ClickUp', label: 'system' }, { value: 'Weekly', label: 'cadence' }, { value: '23', label: 'records' }]
  //   'category' and 'year' print beside the number, e.g. "01 — CONTENT OPERATIONS · 2026".
  selectedWork: [
    {
      title: 'Partner pipeline: mine from first search to the moment of contact',
      category: 'Partner pipeline', year: '30% of my week', tags: ['Research', 'Record hygiene'],
      owns: 'Finding and enriching partner leads, writing an account brief for each one, sequencing who is approached and when, and keeping every record current under a 14-day rule.',
      stops: 'I hand each lead over researched, briefed and sequenced, ready for the CEO to send. Stage changes are his call, by design.',
      result: 'Twenty-three records across three lists, all carrying a dated note and a next step. Eighteen were past the 14-day rule; none were afterwards.',
      specs: [{ value: 'ClickUp', label: 'system' }, { value: '14 days', label: 'staleness rule' }, { value: '23 records', label: 'across 3 lists' }],
      metric: '30%', shot: null,
    },
    {
      title: 'Marketing site: I find it, fix it and ship it to staging',
      category: 'Marketing site', year: '25% of my week', tags: ['QA', 'Staging PRs'],
      owns: 'Testing the site, reproducing and documenting defects, fixing copy, and opening pull requests against staging.',
      stops: 'I open the pull request and flag anything that touches positioning, so the CEO reviews it as a decision rather than a code change. Merging is deliberately one person’s job, and that keeps production clean.',
      specs: [{ value: 'GitHub', label: 'system' }, { value: 'Staging only', label: 'boundary' }, { value: 'Lighthouse', label: 'audits' }],
      metric: '25%', shot: null,
    },
    {
      title: 'Competitive intelligence: the material the sales side works from',
      category: 'Competitive intelligence', year: '20% of my week', tags: ['Teardowns', 'Sales enablement'],
      owns: 'Competitor teardowns, a battlecard, objection handling scripts, and a monitoring run that keeps them current.',
      stops: 'I write it, he reads it before it reaches a customer. The research, the argument and the words are mine.',
      result: 'Eleven deliverables and one monitoring run.',
      specs: [{ value: '11', label: 'deliverables' }, { value: '1', label: 'monitoring run' }, { value: 'Quarterly', label: 'cadence' }],
      metric: '20%', shot: null,
    },
    {
      title: 'Content operations: idea to edited, on a schedule',
      category: 'Content operations', year: '15% of my week', tags: ['Editorial', 'Distribution'],
      owns: 'Moving blog posts through the pipeline, reviewing and annotating them, and drafting and scheduling social content.',
      stops: "I take a post from idea to edited and recommend what happens next; publishing is the CEO's to approve. Every draft on the blog and the social calendar is mine.",
      specs: [{ value: 'ClickUp', label: 'pipeline' }, { value: 'Buffer', label: 'scheduling' }, { value: 'Editing', label: 'last stage I own' }],
      metric: '15%', shot: null,
    },
    {
      title: 'Outbound list quality: a pipeline worth working',
      category: 'Outbound list quality', year: '10% of my week', tags: ['Triage', 'Reporting'],
      owns: 'Triaging outbound records, disqualifying what does not fit, keeping list quality honest, and reporting on campaigns.',
      stops: 'Routine replies are mine. Anything that needs a human decision I hand over with the context already written.',
      specs: [{ value: 'Dripify', label: 'system' }, { value: 'Sales Navigator', label: 'sourcing' }, { value: 'Apollo', label: 'enrichment' }],
      metric: '10%', shot: null,
    },
  ],

  // The authority boundary, from the Operating Agreement I work under. His words and mine, not a paraphrase.
  boundary: {
    lede: 'I wrote the agreement this work runs on. It says what I ship on my own judgement, and the short list I hand up.',
    ships: 'Competitive research and teardowns. Account briefs. First drafts of any post, blog or outbound message. Blog review up to editing. Pull requests against staging. ClickUp field and status hygiene. Lead list triage and disqualification.',
    gated: 'Merging to production. Moving a post to approved. Anything sent to a person outside the company. Anything with a price, fee or contract term. Any security or compliance claim about a client. Anything that touches positioning.',
  },

  experience: [
    {
      role: 'Operations & Business Development Associate', // Miguel's choice, 22 Sep: Work Summary title, shortened
      type: 'Independent contractor',
      org: 'Cloud Sentry Solutions',
      logo: 'images/logos/cloud-sentry.png', // their own mark, from cloudsentry.com (Miguel, 29 Sep)
      place: 'New Hampshire, New England',
      dates: 'April 2025 – Present', // alongside DOH until Jan 2026
      // Rewritten 30 Sep, approved by Miguel. Every figure traces to a dated entry in the ClickUp evidence
      // files (E:\Downloads\work-inventory-evidence.md and partner-pipeline-cleanup-evidence.md).
      // These are finished work; what he OWNS and where it STOPS lives in the Work channel, not here.
      // Do not add outreach he sent (the manager sends), ClickUp automations (not supported) or any
      // pipeline outcome — meetings, reply rates, conversions and revenue are all "not found".
      points: [
        // 23 records / 3 lists / 21 notes: cleanup evidence §2, 2026-09-18. 18→0 is his own dated count,
        // no second source; Miguel decided 30 Sep to keep it. "all" deliberately left out — 3 more records
        // surfaced on 09-23 outside the original scope.
        'Audited 23 partner records across three lists in a day, wrote 21 dated notes, and brought eighteen stale records back inside the 14-day rule.',
        // Charter 3 pack, 2026-09-22 to 23: 4 teardowns, 1 battlecard, 6 objection scripts, 1 one-pager,
        // 1 win/loss spec, 1 decision memo. Eleven deliverables in two days.
        'Built the sales-enablement pack in two days: four competitor teardowns, a battlecard, six objection scripts, a one-pager, a win/loss spec and a decision memo.',
        // 24 blog docs 2025-07-01 to 07-25; 72-post corpus review 2026-09-24; a notes comment per post 09-28.
        'Wrote 24 articles for the company blog, then reviewed and annotated the full 72-post corpus.',
        // 10 verified PRs in the week ending 2026-09-25; 12 Lighthouse reports; site crawl 41 pages at 370px.
        // He stops at merge — the manager merges — so this says "shipped to", not "shipped".
        'Shipped ten pull requests to the marketing site in one week, backed by twelve Lighthouse audits and a 41-page crawl at phone width.',
        // Super agents Jan–Mar 2026 (KQL agent demoed 03-16 and 03-23); two AI Skills 2026-08-28
        // ("1-3-1 Rule", "Client Outreach"); AI credit task opened 2026-09-24, still open — no outcome to claim.
        'Built Cloud Sentry\u2019s ClickUp super agents and two AI Skills, demoed both to the team, and hold the open audit into workspace AI credit use.',
      ],
    },
    {
      role: 'Health Program Officer II',
      org: 'Department of Health – Metro Manila Center for Health Development',
      logo: 'images/logos/doh.png', // official DOH seal (Wikimedia Commons)
      place: 'Mandaluyong City, Philippines',
      dates: 'April 2025 – January 2026',
      points: [
        'Managed and validated health facility data for the Field Health Services Information System (FHSIS).',
        'Coordinated with local health units and partner facilities for timely, complete, standardised data.',
        'Reviewed, consolidated and analysed routine health reports to support monitoring and planning.',
      ],
    },
    {
      role: 'Project Technical Specialist I',
      org: 'DOST – Food and Nutrition Research Institute',
      logo: 'images/logos/dost-fnri.png', // FNRI emblem, from fnri.dost.gov.ph
      place: 'Taguig City, Philippines',
      dates: 'November 2023 – August 2024',
      points: [
        'Conducted data collection and validation for the National Nutrition Survey.',
        'Collected and processed biological samples through phlebotomy; performed laboratory analysis of biochemical markers.',
      ],
    },
    {
      role: 'Project Technical Assistant II',
      org: 'DOST – Food and Nutrition Research Institute',
      logo: 'images/logos/dost-fnri.png', // FNRI emblem, from fnri.dost.gov.ph
      place: 'Taguig City, Philippines',
      dates: 'September – November 2023',
      points: ['Encoded and validated National Nutrition Survey data.'],
    },
  ],

  education: 'BS Medical Technology, Far Eastern University Manila, 2022. Licensed.',
  educationLogo: 'images/logos/feu.png', // official FEU seal (Wikipedia)

  // Rewritten 30 Sep. Each group leads with what Miguel DOES; the products he uses sit quieter underneath.
  // Audited against the ClickUp evidence files. Removed as unevidenced: SEO tools (no SEO tool is named
  // anywhere), ChatGPT (not in the systems list), Slack (the workspace runs on Teams), ClickUp automations
  // ("not supported" in the evidence), SOC 2 compliance analysis (also forbidden — the Operating Agreement
  // puts any compliance claim about a client on the manager's side). Google Analytics became GA4, which he
  // reads rather than runs. Added, all well evidenced: GitHub (staging PRs), Lighthouse (12 reports) and
  // competitive research (an entire charter at 20% of his week that was missing here).
  // "Outreach sequencing and replies" is deliberate: he sequences and drafts, the manager sends.
  skills: [
    { group: 'Marketing operations',
      does: ['Content pipeline management', 'Editorial workflows', 'Content writing and editing'],
      tools: ['Buffer', 'GA4'] },
    { group: 'Pipeline and outreach',
      does: ['Lead and partner research', 'Lead qualification', 'Pipeline management', 'Competitive research and teardowns', 'Outreach sequencing and replies'],
      tools: ['Dripify', 'LinkedIn Sales Navigator', 'Apollo'] },
    { group: 'AI and automation',
      does: ['AI workflow mapping'],
      tools: ['Claude', 'ClickUp AI'] },
    { group: 'Operations and process',
      does: ['Workflow design', 'Process documentation', 'Website quality checks'],
      tools: ['ClickUp', 'GitHub', 'Lighthouse'] },
    { group: 'Data and code',
      does: ['Health data validation'],
      tools: ['R', 'HTML/CSS'] },
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
