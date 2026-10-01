
window.SITE = {
  showCv: false,
  hideTodos: true,

  person: {
    name: 'Miguel Irfan Hameed',
    shortName: 'Miguel Irfan Hameed', // what the header and every message shows
    role: 'Marketing Operations Specialist', // Miguel's main target (22 Sep); Technical Operations is the second track
    storyStart: 'Grounded in science, fluent in data,',
    story: 'I now build the systems that turn strangers into partners.',
    location: 'Quezon City, Philippines',
    availability: 'Open to new opportunities, remote or relocation',
    email: 'miguelhameed@gmail.com',
    linkedin: 'https://www.linkedin.com/in/miguelhameed',
    linkedinLabel: 'linkedin.com/in/miguelhameed',
    instagram: 'https://www.instagram.com/miggybop/', // set to null to take it off the site
    cv: 'cv.pdf',
    motto: "I find what's broken, fix it, and keep it moving.",
    headshot: 'images/headshot.jpg', // Miguel's graduation portrait (22 Sep), for now; studio headshot coming
    avatar: 'images/headshot-avatar.jpg?v=2', // small chat icons: same crop as the big photo (28 Sep). Bump ?v= when the file changes so browsers refetch it.
  },

  tags: ['marketing-operations', 'business-development', 'ai-workflows'],

  highlights: [
    { hook: 'Five workstreams, one desk', line: 'partnerships, the website, competitive intelligence, content, outbound.', href: '#selected-work' },
    { hook: 'Owned end to end', line: 'research, enrichment, briefs and sequencing, handed over ready to send.', href: '#selected-work' },
    { hook: 'House rules', line: 'I wrote the operating agreement the work runs on.', href: '#selected-work' },
    { hook: 'Order restored', line: 'a partner pipeline untouched since April, current again in a day.', href: '#selected-work' },
    { hook: 'First pass, last word', line: 'AI drafts the repetitive part; I review everything before it ships.', href: '#selected-work' },
  ],

  workSetName: 'workstreams, one desk',

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

  boundary: {
    lede: 'I wrote the agreement this work runs on. It says what I ship on my own judgement, and the short list I hand up.',
    ships: 'Competitive research and teardowns. Account briefs. First drafts of any post, blog or outbound message. Blog review up to editing. Pull requests against staging. ClickUp field and status hygiene. Lead list triage and disqualification.',
    gated: 'Merging to production. Moving a post to approved. Anything sent to a person outside the company. Anything with a price, fee or contract term. Any security or compliance claim about a client. Anything that touches positioning.',
  },

  experience: [
    {
      role: 'Technical Operations Specialist', // Miguel's choice, 22 Sep: Work Summary title, shortened
      type: 'Freelance',
      org: 'Cloud Sentry Solutions',
      logo: 'images/logos/cloud-sentry.png', // their own mark, from cloudsentry.com (Miguel, 29 Sep)
      place: 'New Hampshire, New England',
      dates: 'April 2025 – Present', // alongside DOH until Jan 2026
      points: [
        'Audited 23 partner records across three lists in a day, wrote 21 dated notes, and brought eighteen stale records back inside the 14-day rule.',
        'Built the sales-enablement pack in two days: four competitor teardowns, a battlecard, six objection scripts, a one-pager, a win/loss spec and a decision memo.',
        'Wrote 24 articles for the company blog, then reviewed and annotated the full 72-post corpus.',
        'Shipped ten pull requests to the marketing site in one week, backed by twelve Lighthouse audits and a 41-page crawl at phone width.',
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
        'Managed and validated health facility data for the Field Health Services Information System (FHSIS), to support accurate regional and national health reporting.',
        'Coordinated with local health units and partner facilities to ensure timely, complete and standardised submission of public health data.',
        'Reviewed, consolidated and analysed routine health reports to support monitoring, planning and decision-making for public health programmes.',
      ],
    },
    {
      role: 'Project Technical Specialist I',
      org: 'DOST – Food and Nutrition Research Institute',
      logo: 'images/logos/dost-fnri.png',
      place: 'Taguig City, Philippines',
      dates: 'September 2023 – August 2024',
      ownDates: 'November 2023 – August 2024', // this title alone; the row header carries the whole FNRI span
      points: [
        'Conducted data collection and validation for the National Nutrition Survey, ensuring the accuracy and completeness of nutritional data.',
        'Collected, aliquoted and processed biological fluid samples through phlebotomy, to support the analysis of biochemical markers for the survey.',
        'Performed laboratory processing and analysis of the biochemical markers used to assess and update the nutritional status of the Filipino population nationwide.',
      ],
      earlier: {
        role: 'Project Technical Assistant II',
        dates: 'September – November 2023',
        points: [
          'Encoded and validated the data collected throughout the National Nutrition Survey.',
          'Received and designated the biochemical markers collected from the survey.',
        ],
      },
    },
  ],

  education: 'BS Medical Technology, Far Eastern University Manila, 2022. Licensed.',
  educationLogo: 'images/logos/feu.png', // official FEU seal (Wikipedia)

  skills: [
    { group: 'Marketing operations',
      does: ['Content pipeline management', 'Editorial workflows', 'Content writing and editing'],
      tools: ['Buffer', 'GA4'] },
    { group: 'Pipeline and outreach',
      does: ['Lead and partner research', 'Lead qualification', 'Pipeline management', 'Competitive research and teardowns', 'Outreach sequencing and replies'],
      tools: ['Dripify', 'LinkedIn Sales Navigator', 'Apollo'] },
    { group: 'AI and automation',
      does: ['Agent and AI Skill building', 'AI workflow mapping'],
      tools: ['Claude', 'ClickUp AI'] },
    { group: 'Operations and process',
      does: ['Workflow design', 'Process documentation', 'Website quality checks'],
      tools: ['ClickUp', 'GitHub', 'Lighthouse', 'HTML/CSS'] },
  ],
  learning: 'Microsoft SC-300 and SC-200', // shown under the skills as "currently learning"

  proof: [
    {
      kind: 'Certification', title: 'Certified ClickUp Expert',
      topic: "ClickUp's own certification, June 2025. It's the system five of my workstreams run on.",
      logo: 'images/logos/clickup.png',
      link: 'https://verify.skilljar.com/c/8a2eyxevcezx',
      linkLabel: 'Verify on Skilljar',
      image: 'images/proof/clickup-certificate.jpg',
      imageAlt: 'ClickUp Certificate of Completion, Expert level, issued 16 June 2025',
      meta: [
        { label: 'Issuer', value: 'ClickUp' },
        { label: 'Issued', value: '16 June 2025' },
        { label: 'Certificate', value: '8a2eyxevcezx' },
      ],
      story: [
        'ClickUp is where my work actually happens. Five workstreams, their charters, the partner records, the blog pipeline and the weekly figures all live in one workspace, so knowing the tool properly is not optional. It is the difference between a system that holds and one that quietly drifts.',
        'I took the certification in June 2025. Since then I have built the super agents the team uses, written two AI Skills, and taken on the audit into the workspace’s AI credit use.',
      ],
    },
    { kind: 'Training · Department of Health', title: 'Health data quality and analysis', topic: 'Data management, data quality checks for Universal Health Care, and a recognition for cross-program data analysis (2025).' },
    { kind: 'Certificate · NIDA Clinical Trials Network', title: 'Clinical research foundations', topic: 'Foundational principles of clinical research (2022).' },
  ],

  files: [],

  liveSites: [],

  testimonials: [], // TODO: real quotes only, with name and role. The channel stays hidden until there are two.

  about: [
    'I fixed a system nobody else could get working. I think about that more than anything else I have done, because it was the first time I understood what I actually wanted — not a title, not a department. To be the one people come to when something has stopped.',
    'Before that I was further back — survey data, health facility records, numbers somebody else would eventually stand up and present. Good work, and I still like it. But it wears on you quietly. That is the only way I can describe the stretch of unhappiness that followed. No single bad day. Just years of it.',
    'So I made a decision that did not look like a career move. I took work as a virtual assistant, and it turned out to be the opening that led here — to operations, the first work I have done that has my name on it.',
    'It took a few years to see what I had been circling the whole time. It was never the subject. It was the running of it: holding the parts together, keeping them straight, making the whole thing easier for whoever is on the other end. It doesn’t matter where I sit. What I want is to be the name that comes up when something breaks.',
    'I did not expect to enjoy carrying this much at once, but I do. I think it is because this time I am the one standing up with it.',
  ],

  notes: null, // No Substack yet; the Notes link stays hidden while this is null.
};
