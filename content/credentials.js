
window.SITE = window.SITE || {};
Object.assign(window.SITE, {
  credentialsSub: 'Click it, I’ll wait.',

  credentials: [
    {
      kind: 'Certification', title: 'Certified ClickUp Expert',
      topic: "ClickUp's own certification. It is the system my work runs on.",
      logo: 'images/credentials/clickup.webp',
      link: 'https://verify.skilljar.com/c/8a2eyxevcezx',
      linkLabel: 'Verify on Skilljar',
      image: 'images/credentials/clickup-certificate.jpg',
      imageAlt: 'ClickUp Certificate of Completion, Expert level, issued 16 June 2025',
      meta: [
        { label: 'Issuer', value: 'ClickUp' },
        { label: 'Issued', value: '16 June 2025' },
        { label: 'Certificate', value: '8a2eyxevcezx' },
      ],
      story: [
        'Everything I run lives in ClickUp. In June 2025, I earned its expert certification because the tool I rely on most is the one I should know best.',
        'Since then, I have gone deeper into structure. I design how a workspace is organised, build the automations that run it, and connect it to the tools people already use. On top of that, I build agents and AI Skills, and I track what they cost to run. When it is all done well, nobody notices, and that is the point.',
      ],
    },
    { kind: 'In progress · Microsoft', title: 'SC-300: Identity and Access Administrator',
      logo: 'images/credentials/sc-300.webp', topic: 'Exam not yet taken.' },
    { kind: 'In progress · Microsoft', title: 'SC-200: Security Operations Analyst',
      logo: 'images/credentials/sc-200.webp', topic: 'Exam not yet taken.' },
  ],
});
