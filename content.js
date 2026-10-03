
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

  workSetName: 'projects',

  selectedWork: [
    {
      title: 'MAPA',
      year: 'In progress · my own project',
      what: "A real-time navigation and road-passability app for Metro Manila's drivers and on-demand riders, including flood-prone roads.",
      built: 'TODO: where MAPA is at and what exists so far',
      specs: [],
    },
    {
      title: 'miguelhameed.com',
      year: 'Live · this site',
      what: 'The site you are reading. Plain HTML, CSS and JavaScript, no framework, hosted on GitHub Pages.',
      built: 'I set the direction, wrote the words, and reviewed every change on a staging copy before it reached the live domain.',
      specs: [
        { value: 'Staging first', label: 'nothing ships unreviewed' },
        { value: '16', label: 'automated checks per release' },
        { value: '100', label: 'accessibility and SEO' },
      ],
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
      dates: 'April, 2025 – Present', // alongside DOH until Jan 2026
      points: [
        'ClickUp workspace architecture for Service Pyramid delivery.',
        'Automation of recurring L1 controls monitoring (onboarding, access reviews, evidence collection).',
        'Standard Operations Procedure and runbook authoring for client delivery.',
        'Cross-tool integration (ClickUp, identity tools, DLP, audit tooling).',
      ],
    },
    {
      role: 'Health Program Officer II',
      org: 'Department of Health – Metro Manila Center for Health Development',
      logo: 'images/logos/doh.png', // official DOH seal (Wikimedia Commons)
      place: 'Mandaluyong City, Philippines',
      dates: 'April, 2025 – January, 2026',
      certificates: [
        {
          title: 'Certificate of Completion of the Field Health Services and Information System Data Management and Analysis Training',
          date: 'August, 2025',
          note: 'Developed technical skills in organising, validating, and maintaining structured health data for administrative reporting.',
        },
        {
          title: 'Certificate of Completion for Data Quality Check Training: Critical Program for Universal Health Care Coverage',
          date: 'September, 2025',
          note: 'Completed Data Quality Check training for the Critical Program on Universal Health Care, strengthening accuracy and validation of records.',
        },
        {
          title: 'Certificate of Recognition for Workshop on Data Analysis for Different Health Programs',
          date: 'October, 2025',
          note: 'Demonstrated analytical skills through engagement in cross-program data interpretation and review activities.',
        },
      ],
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
      dates: 'September, 2023 – August, 2024',
      ownDates: 'November, 2023 – August, 2024', // this title alone; the row header carries the whole FNRI span
      points: [
        'Conducted data collection and validation for the National Nutrition Survey, ensuring the accuracy and completeness of nutritional data.',
        'Collected, aliquoted and processed biological fluid samples through phlebotomy, to support the analysis of biochemical markers for the survey.',
        'Performed laboratory processing and analysis of the biochemical markers used to assess and update the nutritional status of the Filipino population nationwide.',
      ],
      earlier: {
        role: 'Project Technical Assistant II',
        dates: 'September – November, 2023',
        points: [
          'Encoded and validated the data collected throughout the National Nutrition Survey.',
          'Received and designated the biochemical markers collected from the survey.',
        ],
      },
    },
  ],

  schools: [
    {
      school: 'Far Eastern University – Manila',
      logo: 'images/logos/feu.png', // Miguel supplied a cleaner seal, 2 Oct 2026, replacing the Wikipedia one
      initials: 'FEU',
      award: 'Bachelor of Science, Major in Medical Technology',
      place: 'Sampaloc, Manila',
      dates: 'June, 2022',
      note: 'Cumulative GPA: 3.34',
      research: 'Antimicrobial Property of MgO Nanoparticles: A Narrative Review',
      certificates: [
        {
          title: 'Certificate of Participation in the International Undergraduate Research Conference for Philippine Association of Schools of Medical Technology and Public Health, Inc.',
          date: 'November, 2021',
          note: 'Built foundational experience in academic research through involvement in an international conference on Medical Technology and Public Health.',
        },
      ],
      honours: [
        "Second Honors · Academic Year 2018 – 2019",
        "Second Honors · Academic Year 2019 – 2020",
        "First Honors · Academic Year 2020 – 2021",
      ],
    },
    {
      school: 'Centro Escolar University – Manila',
      logo: 'images/logos/ceu.png', // Miguel supplied the mark, 2 Oct 2026
      initials: 'CEU',
      award: 'Science, Technology, Engineering and Mathematics',
      place: 'San Miguel, Manila',
      dates: 'June, 2018',
      note: 'Medical Transcriptionist',
      research: 'The Perception of Students on Self Diagnosed Clinical Depression & Anxiety: A Phenomenological Study',
    },
  ],
  licence: {
    label: 'Licensed',
    text: 'Medical Technologist · Professional Regulation Commission · September 29, 2023',
    certificates: [
      {
        title: 'Certification of Completion for NIDA Clinical Trials Network',
        date: 'July, 2022',
        note: 'Trained in foundational clinical research principles through the NIDA Clinical Trials Network certification program.',
      },
      {
        title: 'Certification of Attendance for Transporting Dangerous Goods Training',
        date: 'July, 2022',
        note: 'Completed training on the safe handling, labelling, and transportation of dangerous goods in compliance with safety standards.',
      },
      {
        title: 'Certificate of Completion on The Manual of Operations for Screening Drug Testing Laboratories',
        date: 'August, 2024',
        note: 'Completed formal training on the Manual of Operations for Screening Drug Testing Laboratories, covering compliance, workflow, and quality procedures.',
      },
    ],
  },

  learning: 'Microsoft SC-300 and SC-200', // shown at the foot of Education as "studying now"

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
