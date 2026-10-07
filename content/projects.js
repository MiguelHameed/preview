
window.SITE = window.SITE || {};
Object.assign(window.SITE, {

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
      what: 'The site you are reading. Plain HTML, CSS and JavaScript, no framework, hosted on GitHub Pages.',
      built: 'I set the direction, wrote the words, and reviewed every change on a staging copy before it reached the live domain.',
      specs: [
        { value: 'Staged releases', label: 'every change reviewed on a copy first' },
        { value: 'Regression suite', label: '16 checks, run against the real site' },
        { value: 'Lighthouse 100', label: 'accessibility and SEO' },
      ],
    },
  ],

  files: [],

  liveSites: [],
});
