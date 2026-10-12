
window.SITE = window.SITE || {};
Object.assign(window.SITE, {
  projectsSub: 'One of these is the page you’re on.',

  workSetName: '',

  projects: [
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
      thumb: 'images/work/miguelhameed-com.webp',
      thumbLarge: 'images/work/miguelhameed-com-780.webp',
      what: 'A production portfolio run as a product: a zero-dependency static site with its own design system, a staging environment, automated end-to-end testing and a gated release pipeline, served from GitHub Pages on a custom domain.',
      built: 'I owned it end to end: set the roadmap, wrote the copy, and signed off every release on staging before it shipped.',
      specs: [
        { value: 'Languages', label: 'HTML, CSS, JavaScript' },
        { value: 'Release pipeline', label: 'staging, sign-off, then production' },
        { value: 'Automated QA', label: 'end-to-end checks on every release' },
        { value: 'Accessibility and SEO', label: 'audited with Lighthouse' },
        { value: 'Design system', label: 'themed and responsive, phone to widescreen' },
        { value: 'Documentation', label: 'every rule and release written up' },
      ],
    },
  ],

});
