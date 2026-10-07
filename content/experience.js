
window.SITE = window.SITE || {};
Object.assign(window.SITE, {
  experience: [
    {
      role: 'Technical Operations Specialist', // Miguel's choice, 22 Sep: Work Summary title, shortened
      type: 'Freelance',
      org: 'Cloud Sentry Solutions',
      logo: 'images/experience/cloud-sentry.png', // their own mark, from cloudsentry.com (Miguel, 29 Sep)
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
      logo: 'images/experience/doh.png', // official DOH seal (Wikimedia Commons)
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
      logo: 'images/experience/dost-fnri.png',
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

});
