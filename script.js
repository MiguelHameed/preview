(function () {
  const S = window.SITE;
  const NEEDED = ['hideTodos', 'person', 'projects', 'about', 'skills', 'experience', 'schools', 'credentials', 'testimonials', 'contactLine'];
  if (!S || NEEDED.some((key) => S[key] === undefined)) return;
  const P = S.person;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (t) => (t === null || t === undefined ? '' : String(t)).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const isTodo = (t) => typeof t === 'string' && /^TODO/i.test(t);
  const txt = (t) => isTodo(t)
    ? (S.hideTodos ? '' : `<span class="todo">${esc(t.replace(/^TODO:?\s*/i, '')) || 'to be added'}<span class="todo-tag">to confirm</span></span>`)
    : esc(t);

  const CHANNELS = [
    ...(S.projects.length ? [{ id: 'projects', title: 'Projects', sub: S.projectsSub, view: true }] : []),
    { id: 'about', title: 'About', sub: S.aboutSub },
    { id: 'skills', title: 'Skills', sub: S.skillsSub },
    { id: 'experience', title: 'Experience' },
    { id: 'education', title: 'Education' },
    { id: 'credentials', title: 'Credentials', sub: S.credentialsSub },
    ...(S.testimonials.length >= 2 ? [{ id: 'testimonials', title: 'Testimonials', sub: S.testimonialsSub }] : []),
    { id: 'contact', title: 'Contact', sub: S.contactSub },
  ];

  const SITE_ROOT = location.pathname.replace(/index\.html$/, '').replace(/(?:projects|work)\/?$/, '').replace(/\/?$/, '/');
  const asset = (u) => (!u || /^([a-z]+:)?\/\//i.test(u) || u.startsWith('/') || u.startsWith('data:') ? u : SITE_ROOT + u);

  const NEW_TAB = '<span class="sr-only"> (opens in a new tab)</span>';

  const hasBooking = Boolean(P.booking && P.bookingCta && !isTodo(P.bookingCta));
  const CTA = hasBooking
    ? { href: P.booking, label: P.bookingCta, ext: true, icon: 'calendar',
        sub: P.bookingNote || P.booking.replace(/^https?:\/\//, '').replace(/\/.*$/, '') }
    : { href: 'mailto:' + P.email, label: P.cta || P.email, ext: false, icon: 'email', sub: P.email };

  const SHEETS = [];
  const sheetAttr = (data) => ` type="button" data-sheet="${SHEETS.push(data) - 1}"`;

  const ICONS = {
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4.5" width="18" height="16" rx="3" fill="#ffffff" stroke="#c8ccd1"/><path fill="#EA4335" d="M3 7.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3V9H3z"/><rect x="7" y="12" width="3" height="3" rx=".6" fill="#3c4043"/><rect x="11.5" y="12" width="3" height="3" rx=".6" fill="#3c4043"/><rect x="7" y="16.2" width="3" height="2.4" rx=".6" fill="#3c4043"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 13.2c0-3.1-1.65-4.94-4.3-4.94-1.94 0-2.8 1.07-3.29 1.82V8.5H9.48V20h3.37v-5.7c0-1.5.28-2.96 2.14-2.96 1.83 0 1.86 1.72 1.86 3.06V20h3.38l.01-6.8z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffff" d="M3 6h18v12H3z"/><path fill="#4285F4" d="M20.4 19h-2.1V9.9L12 14.3 5.7 9.9V19H3.6A1.6 1.6 0 0 1 2 17.4V6.6C2 5.7 2.7 5 3.6 5h.7L12 10.6 19.7 5h.7c.9 0 1.6.7 1.6 1.6v10.8c0 .9-.7 1.6-1.6 1.6z"/><path fill="#34A853" d="M2 17.4V8.1l3.7 2.6V19H3.6A1.6 1.6 0 0 1 2 17.4z"/><path fill="#FBBC04" d="M22 17.4c0 .9-.7 1.6-1.6 1.6h-2.1v-8.3L22 8.1z"/><path fill="#EA4335" d="M2 6.6C2 5.7 2.7 5 3.6 5h.7L12 10.6 19.7 5h.7c.9 0 1.6.7 1.6 1.6v1.5L12 14.9 2 8.1z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.5 9.5 2.5 9.9 2.5 13s0 3.5.07 4.8c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.07-1.3.07-1.7.07-4.8s0-3.5-.07-4.8c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4z"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"/><circle cx="17" cy="7" r="1.15"/></svg>',
    notes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v2H5zm0 5h14v2H5zm0 5h9v2H5z"/></svg>',
  };
  const APPS = [
    { label: 'LinkedIn', href: P.linkedin, ext: true, icon: 'linkedin' },
    { label: 'Email', href: 'mailto:' + P.email, icon: 'email' },
    ...(P.instagram ? [{ label: 'Instagram', href: P.instagram, ext: true, icon: 'instagram' }] : []),
    ...(S.notes ? [{ label: 'Notes', href: S.notes, ext: true, icon: 'notes' }] : []),
  ];

  $('#channel-list').innerHTML = CHANNELS.map((c) =>
    `<li><a class="side-link" href="#${c.id}" data-channel="${c.id}"><span class="hash" aria-hidden="true">#</span>${c.title}</a></li>`
  ).join('');
  $('#app-list').innerHTML = APPS.map((a) =>
    `<li><a class="side-link" href="${esc(a.href)}"${a.ext ? ' target="_blank" rel="noopener"' : ''}><span class="app-icon app-${a.icon}">${ICONS[a.icon]}</span>${a.label}${a.ext ? `<span class="ext" aria-hidden="true">↗</span>${NEW_TAB}` : ''}</a></li>`
  ).join('');

  const avatarEl = (cls, alt) => P.avatar
    ? `<img class="${cls}" src="${esc(asset(P.avatar))}" alt="${esc(alt)}" width="44" height="44" loading="lazy" />`
    : `<span class="${cls} avatar-mark"${alt ? ` role="img" aria-label="${esc(alt)}"` : ' aria-hidden="true"'}>mh</span>`;
  const avatarLive = (cls, alt) => `<span class="avatar-live">${avatarEl(cls, alt)}<i class="live-dot" title="Open to work anywhere"></i></span>`;
  $$('[data-headshot]').forEach((el) => { el.outerHTML = avatarLive('side-avatar', ''); });

  if (!S.projects.length) { const w = $('.rail [data-rail="projects"]'); if (w) w.remove(); }

  const manilaTime = () => new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' }).format(new Date());

  const avatar = avatarEl('msg-avatar', '');
  const msg = (label, body, extraClass = '') => `
    <article class="msg reveal ${extraClass}">
      ${avatar}
      <div class="msg-body">
        <div class="msg-meta"><span class="msg-name">${esc(P.shortName)}</span><span class="msg-time mono">${label}</span></div>
        ${body}
      </div>
    </article>`;
  const divider = (c) => `
    <h2 class="channel-divider" id="${c.id}" data-section="${c.id}">
      <span class="hash" aria-hidden="true">#</span>${c.title}${c.sub ? `<span class="divider-sub"><span class="divider-dash" aria-hidden="true">—</span> ${esc(c.sub)}</span>` : ''}
    </h2>`;
  const buttons = (attr = '', withLinkedIn = true) => `
    <div class="actions" ${attr}>
      <a class="btn btn-primary" href="${esc(CTA.href)}"${CTA.ext ? ' target="_blank" rel="noopener"' : ''}>${esc(CTA.label)}${CTA.ext ? NEW_TAB : ''}</a>
      ${withLinkedIn ? `<a class="btn btn-brand" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn<svg class="btn-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6"/></svg>${NEW_TAB}</a>` : ''}
    </div>`;

  function introPhoto() {
    if (P.headshot && !/placeholder/.test(P.headshot)) {
      return `<img class="intro-photo" src="${esc(asset(P.headshot))}" srcset="${esc(asset('images/site/headshot-240.jpg'))} 240w, ${esc(asset(P.headshot))} 480w"
                   sizes="(max-width: 767px) 110px, 220px" alt="${esc(P.name)}" width="480" height="480" fetchpriority="high" />`;
    }
    return `<div class="intro-photo is-empty" role="img" aria-label="Photo coming soon">
              <span class="empty-title">your photo<br />goes here</span>
              <span class="empty-note">square · head and shoulders</span>
            </div>`;
  }

  function intro() {
    return `
      <div class="day mono" id="intro" data-section="intro">${esc(S.pinnedLabel)}</div>
      <article class="msg reveal">
        ${avatarLive('msg-avatar', P.name)}
        <div class="msg-body">
          <div class="msg-meta"><span class="msg-name">${esc(P.shortName)}</span><span class="msg-time mono">${esc(P.location)} · UTC+8</span></div>
          <div class="intro-grid">
            <div class="intro-main">
              <p class="lede"><span class="before">${esc(P.storyStart)}</span> ${esc(P.story)}</p>
              ${S.tags && S.tags.length ? `<p class="hash-tags">${S.tags.map((t) => `<span class="hash-tag mono">#${esc(t)}</span>`).join('')}</p>` : ''}
              ${buttons('data-intro-actions')}
              ${S.highlights && S.highlights.length ? `
              <ul class="highlights">${S.highlights.map((h) => (typeof h === 'string'
                ? `<li>${esc(h)}</li>`
                : `<li>${h.href
                    ? `<a class="hook" href="${esc(h.href)}">${esc(h.hook)}</a>`
                    : `<span class="hook">${esc(h.hook)}</span>`}: ${esc(h.line)}</li>`)).join('')}</ul>` : ''}
            </div>
          </div>
        </div>
      </article>`;
  }

  const COUNT_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  function shotRow(w) {
    const list = [].concat(w.shots || [], w.shot || [])
      .map((s) => (typeof s === 'string' ? { src: s } : s)).filter((s) => s && s.src);
    if (!list.length) return '';
    return `
      <div class="shots">${list.map((s, i) => `
        <button class="shot"${sheetAttr({ kind: w.year || 'Project', title: w.title, image: s.src,
          imageAlt: s.caption || `${w.title}, picture ${i + 1}`, story: s.caption ? [s.caption] : [] })}
          aria-label="${esc(s.caption || `${w.title}: open picture ${i + 1} of ${list.length}`)}">
          <img src="${esc(asset(s.src))}" alt="" loading="lazy" />
        </button>`).join('')}
      </div>`;
  }

  function projects(c) {
    const n = S.projects.length;
    return divider(c) + S.projects.map((w, i) => {
      const meta = [w.year, ...(w.tags || [])].filter(Boolean).map(esc).join(' &middot; ');
      const rows = [
        ['What it is', w.what], ['What I built', w.built], ['Result', w.result],
        ['What I own', w.owns], ['Where it stops', w.stops],
        ['Problem', w.problem], ['What I did', w.did],
      ].filter(([, v]) => v && txt(v)).map(([k, v]) => `
        <p class="school-line"><span class="label">${k}</span> ${txt(v)}</p>`).join('');
      const specs = (w.specs || []).map((sp) => `${esc(sp.value)} <span class="spec-of">${esc(sp.label)}</span>`).join(' &middot; ');
      return msg(`work ${i + 1} of ${n}`, `
      <h3 class="work-title">${esc(w.title)}</h3>
      ${meta ? `<p class="where">${meta}</p>` : ''}
      ${w.pending && !S.hideTodos ? `<p class="work-pending">${txt(w.pending)}</p>` : ''}
      ${rows}
      ${specs ? `<p class="school-line"><span class="label">Specifics</span> <span class="spec-line">${specs}</span></p>` : ''}
      ${shotRow(w)}`);
    }).join('');
  }

  function orgLogo(src, initials, org) {
    return src
      ? `<img class="org-logo" src="${esc(asset(src))}" alt="${esc(org)} logo" width="96" height="96" loading="lazy" />`
      : `<span class="org-logo org-initials" aria-hidden="true">${esc(initials || '')}</span>`;
  }

  function certList(items) {
    if (!items || !items.length) return '';
    return `
      <div class="role-earlier">
        <p class="earlier-head"><span class="label">Certificates</span></p>
        <ul class="certs">${items.map((x) => `
          <li>
            <p class="cert-head">${x.image
              ? `<button class="cert-title cert-open"${sheetAttr({ kind: 'Certificate', title: x.title, image: x.image, imageAlt: x.imageAlt || x.title,
                  meta: x.date && !isTodo(x.date) ? [{ label: 'Date', value: x.date }] : [], link: x.link, linkLabel: x.linkLabel })}>${esc(x.title)}</button>`
              : `<span class="cert-title">${esc(x.title)}</span>`}<span class="cert-date">${txt(x.date)}</span></p>
          </li>`).join('')}</ul>
      </div>`;
  }

  function experience(c) {
    const shortOrg = (o) => o.replace('Department of Health – Metro Manila Center for Health Development', 'Department of Health')
      .replace('DOST – Food and Nutrition Research Institute', 'DOST-FNRI');
    const positions = S.experience.flatMap((e) => [
      { role: e.role, org: e.org, dates: e.ownDates || e.dates },
      ...(e.earlier ? [{ role: e.earlier.role, org: e.org, dates: e.earlier.dates }] : []),
    ]);
    const list = positions.map((p) => `
      <li><span class="tl-role"><strong>${esc(p.role)}</strong></span><span class="tl-org">${esc(shortOrg(p.org))}</span><span class="tl-dates">${txt(p.dates)}</span></li>`).join('');
    const summary = msg('overview', `
      ${S.experienceLede ? `<p class="section-lede">${esc(S.experienceLede.replace('{count}', positions.length))}</p>` : ''}
      <ul class="timeline">${list}</ul>`);
    const roles = S.experience.map((e, i) => msg(`role ${i + 1} of ${S.experience.length}`, `
      <div class="role-head role-head-multi">
        ${orgLogo(e.logo, e.initials, e.org)}
        <div>
          <h3 class="work-title">${esc(e.role)}</h3>
          <p class="org">${esc(e.org)}${e.type ? ` · ${esc(e.type)}` : ''}</p>
          <p class="where">${esc(e.place)} · ${txt(e.dates)}</p>
        </div>
      </div>
      <ul class="points">${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      ${certList(e.certificates)}
      ${e.earlier ? `
      <div class="role-earlier">
        <p class="earlier-head"><span class="label">Before this</span> <strong>${esc(e.earlier.role)}</strong> &middot; ${txt(e.earlier.dates)}</p>
        <ul class="points">${e.earlier.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      </div>` : ''}`)).join('');
    return divider(c) + summary + roles;
  }

  function education(c) {
    const noteHtml = (t) => {
      const i = t.indexOf(':');
      return i === -1 ? esc(t) : `${esc(t.slice(0, i + 1))} <strong>${esc(t.slice(i + 1).trim())}</strong>`;
    };
    const schools = S.schools.map((e, i) => msg(`school ${i + 1} of ${S.schools.length}`, `
      <div class="role-head role-head-multi role-head-school">
        ${orgLogo(e.logo, e.initials, e.school)}
        <div>
          <h3 class="work-title">${esc(e.school)}</h3>
          <p class="org">${esc(e.award)}</p>
          <p class="where">${esc(e.place)} &middot; ${txt(e.dates)}</p>
        </div>
      </div>
      ${e.note ? `<p class="school-note">${noteHtml(e.note)}</p>` : ''}
      ${e.research ? `
      <p class="school-line"><span class="label">Research</span> <strong>${esc(e.research)}</strong></p>` : ''}
      ${(e.honours || []).length ? `
      <div class="school-line"><span class="label">Dean's Lister</span>
        <ul class="honours">${e.honours.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      </div>` : ''}
      ${certList(e.certificates)}`)).join('');
    const lic = S.licence ? msg('licence', `
      <p class="school-line"><span class="label">${esc(S.licence.label)}</span> ${esc(S.licence.text)}</p>
      ${certList(S.licence.certificates)}`) : '';
    const now = S.learning ? msg('next', `
      <p class="school-line"><span class="label">Studying now</span> ${esc(S.learning)}</p>`) : '';
    return divider(c) + schools + lic + now;
  }

  function skills(c) {
    return divider(c) + msg('skills', `<ul class="skill-rows">${S.skills.map((g) => {
      const does = g.does || g.items || [];
      const tools = g.tools || [];
      return `
      <li>
        <h3 class="skill-group-name">${esc(g.group)}</h3>
        <div class="skill-body">
          ${does.length ? `<p class="skill-does">${does.map(esc).join('<span class="sep"> / </span>')}</p>` : ''}
          ${tools.length ? `<p class="skill-tools"><span class="label">Tools</span> ${tools.map(esc).join(' &middot; ')}</p>` : ''}
        </div>
      </li>`;
    }).join('')}</ul>`);
  }

  const hasSheet = (p) => Boolean(p.image || (p.meta && p.meta.length) || (p.story && p.story.length));

  function credentials(c) {
    return divider(c) + msg('credentials', `
      <ul class="cred-rows">${S.credentials.map((p) => {
        const opens = hasSheet(p);
        const tag = opens ? 'button' : (p.link ? 'a' : 'div');
        const attrs = opens ? sheetAttr(p)
          : (p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : '');
        const cue = opens ? 'Open <span aria-hidden="true">&rarr;</span>'
          : (p.link ? `Verify <span aria-hidden="true">↗</span>${NEW_TAB}` : '');
        return `
        <li>
          <${tag} class="cred-row${opens || p.link ? ' is-link' : ''}"${attrs}>
            <span class="cred-mark">${p.logo ? `<img src="${esc(asset(p.logo))}" alt="" width="162" height="162" loading="lazy" />` : ''}</span>
            <span class="cred-body">
              <span class="cred-kind label">${esc(p.kind)}</span>
              <strong class="cred-title">${txt(p.title)}</strong>
              ${p.topic && txt(p.topic) ? `<span class="cred-topic">${txt(p.topic)}</span>` : ''}
            </span>
            ${cue ? `<span class="cred-cue">${cue}</span>` : ''}
          </${tag}>
        </li>`;
      }).join('')}</ul>`);
  }

  function testimonials(c) {
    return divider(c) + S.testimonials.map((t) => `
      <article class="msg reveal">
        <span class="msg-avatar initials" aria-hidden="true">${esc(t.name.split(' ').map((n) => n[0]).join('').slice(0, 2))}</span>
        <div class="msg-body">
          <div class="msg-meta"><span class="msg-name">${esc(t.name)}</span><span class="msg-time mono">${esc(t.role)}</span></div>
          <blockquote class="quote">“${esc(t.quote)}”</blockquote>
        </div>
      </article>`).join('');
  }

  function about(c) {
    return divider(c) + msg('about', `
      ${[].concat(S.about).map((t) => `<p class="about-text">${txt(t)}</p>`).join('')}
      <blockquote class="motto">“${esc(P.motto)}”</blockquote>`);
  }

  const resumeRow = () => (S.resumeLine
    ? `<li><span class="label">${esc(S.resumeLabel || 'Resume')}</span><a href="mailto:${esc(P.email)}${S.resumeSubject ? `?subject=${encodeURIComponent(S.resumeSubject)}` : ''}">${esc(S.resumeLine)}</a></li>`
    : '');

  function contact(c) {
    return divider(c) + msg('contact', `
      <p class="section-lede">${esc(S.contactLine)}</p>
      <ul class="contact-list">
        <li><span class="label">Email</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>
        <li><span class="label">LinkedIn</span><a href="${esc(P.linkedin)}" target="_blank" rel="noopener">${esc(P.linkedinLabel)} <span aria-hidden="true">↗</span>${NEW_TAB}</a></li>
        ${resumeRow()}
        <li><span class="label">Based in</span><span>${esc(P.location)} (UTC+8) · <span data-clock>${manilaTime()}</span></span></li>
        <li><span class="label">Status</span><span>${esc(P.availability)}</span></li>
      </ul>
      ${buttons('data-contact-actions', false)}`) + (S.endLine ? `<p class="end">${esc(S.endLine)}</p>` : '');
  }

  const builders = { projects, experience, skills, education, credentials, testimonials, about, contact };
  const feed = $('#feed');
  const scrollChannels = CHANNELS.filter((c) => !c.view);
  const workChannel = CHANNELS.find((c) => c.view);
  const firstPicture = (w) => {
    const s = w.thumb || [].concat(w.shots || [], w.shot || [])[0];
    return s ? (typeof s === 'string' ? s : s.src) : null;
  };
  const pictureSizes = (w, pic) => (w.thumbLarge && pic === w.thumb
    ? ` srcset="${esc(asset(w.thumb))} 522w, ${esc(asset(w.thumbLarge))} 780w" sizes="(max-width: 767px) 45vw, 360px"` : '');
  const workRow = workChannel ? `
    <section class="proj-strip" aria-labelledby="proj-heading">
      <div class="proj-head">
        <h2 class="proj-heading" id="proj-heading">${esc(workChannel.title)}</h2>
        <a class="proj-all" href="#${workChannel.id}">Open all <span aria-hidden="true">&rarr;</span></a>
      </div>
      <ul class="proj-cards">${S.projects.map((w, i) => {
        const pic = firstPicture(w);
        return `
        <li>
          <a class="proj-card" href="#${workChannel.id}" data-project="${i}">
            ${pic
              ? `<span class="proj-thumb"><img src="${esc(asset(pic))}"${pictureSizes(w, pic)} alt="" width="522" height="348" loading="lazy" /></span>`
              : `<span class="proj-thumb is-name" aria-hidden="true">${esc(w.title)}</span>`}
            <span class="proj-name">${esc(w.title)}</span>
            ${w.year ? `<span class="proj-meta">${esc(w.year)}</span>` : ''}
          </a>
        </li>`;
      }).join('')}</ul>
    </section>` : '';
  feed.innerHTML = intro() + workRow + scrollChannels.map((c) => builders[c.id](c)).join('');

  $$('.proj-thumb img').forEach((img) => {
    const fit = () => { if (img.naturalHeight && Math.abs(img.naturalWidth / img.naturalHeight - 1.5) < 0.03) img.classList.add('is-fill'); };
    if (img.complete) fit(); else img.addEventListener('load', fit, { once: true });
  });

  const views = {};
  CHANNELS.filter((c) => c.view).forEach((c) => {
    const panel = document.createElement('div');
    panel.className = 'channel-view';
    panel.hidden = true;
    panel.innerHTML = `<button class="view-back" type="button" data-view-back>← Back to messages</button>` + builders[c.id](c);
    const heading = panel.querySelector('.channel-divider');
    if (heading) { heading.classList.add('sr-only'); }
    feed.insertAdjacentElement('afterend', panel);
    views[c.id] = panel;
  });
  let openView = null;
  function showView(id) {
    openView = id;
    feed.hidden = !!id;
    Object.entries(views).forEach(([k, el]) => {
      el.hidden = k !== id;
      if (k === id) el.querySelectorAll('.reveal').forEach((r) => r.classList.add('in'));
    });
    if (id) { setActive(id); $('.pane').scrollTop = 0; }
  }
  $$('[data-view-back]').forEach((b) => b.addEventListener('click', () => { history.back(); }));

  const VIEW_PATH = { projects: 'projects/' };
  const ROOT = SITE_ROOT;
  const urlFor = (id) => ROOT + (id && VIEW_PATH[id] ? VIEW_PATH[id] : '');
  const viewFromPath = () => {
    const rest = location.pathname.slice(ROOT.length).replace(/index\.html$/, '');
    const hit = Object.keys(VIEW_PATH).find((id) => VIEW_PATH[id].replace(/\/$/, '') === rest.replace(/\/$/, ''));
    return hit || null;
  };

  function openFromHash(replace) {
    const RENAMED = { 'selected-work': 'projects', proof: 'credentials' };
    const raw = location.hash.slice(1);
    const hashId = RENAMED[raw] || raw;
    if (RENAMED[raw] && !CHANNELS.some((c) => c.view && c.id === hashId)) {
      const el = document.getElementById(hashId);
      if (el) {
        history.replaceState(null, '', '#' + hashId);
        el.scrollIntoView();
      }
    }
    const hashIsView = CHANNELS.some((c) => c.view && c.id === hashId);
    const id = hashIsView ? hashId : viewFromPath();
    showView(id);
    if (hashIsView) history.replaceState({ view: id }, '', urlFor(id));
    else if (replace) history.replaceState({ view: id }, '');
  }
  window.addEventListener('hashchange', () => openFromHash(true));
  window.addEventListener('popstate', (e) => {
    const id = e.state && e.state.view;
    showView(CHANNELS.some((c) => c.view && c.id === id) ? id : null);
    if (!id) setActive('intro');
  });

  const headIcon = $('[data-head-avatar]');
  if (headIcon) headIcon.outerHTML = avatarLive('head-avatar', '');
  const titleEl = $('#pane-title');
  const subEl = $('#pane-sub');
  function setActive(id) {
    const c = CHANNELS.find((x) => x.id === id);
    titleEl.textContent = c ? '#' + c.title : P.shortName;
    subEl.textContent = c ? (c.sub || '') : `${P.role} · ${P.location}`;
    $$('[data-channel]').forEach((a) => a.classList.toggle('is-active', a.dataset.channel === (c ? c.id : 'intro')));
    $$('.rail-btn[data-rail]').forEach((b) => b.classList.toggle('is-active',
      c ? (c.id === 'projects' ? b.dataset.rail === 'projects' : false) : b.dataset.rail === 'home'));
  }
  $$('a[href^="#"]').forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const isView = CHANNELS.some((c) => c.view && c.id === id);
    if (isView) link.setAttribute('href', urlFor(id));
    link.addEventListener('click', (e) => {
      if (isView) {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        history.pushState({ view: id }, '', urlFor(id));
        showView(id);
        const entry = link.dataset.project ? views[id].querySelectorAll('.msg')[Number(link.dataset.project)] : null;
        if (entry) entry.scrollIntoView({ block: 'start' });
      } else if (openView) {
        history.pushState({ view: null }, '', urlFor(null) + link.getAttribute('href'));
        showView(null);
      }
    });
  });

  const sections = $$('[data-section]');
  let current = 'intro';
  const spy = new IntersectionObserver((entries) => {
    if (openView) return;
    entries.forEach((e) => { if (e.isIntersecting) current = e.target.dataset.section; });
    setActive(current);
  }, { rootMargin: '0px 0px -75% 0px', threshold: 0 });
  sections.forEach((s) => spy.observe(s));
  setActive('intro');
  openFromHash(true);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  } else {
    const rev = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach((el) => rev.observe(el));
  }

  const floatBtn = $('#float-btn');
  const floatLink = $('#float-link');
  const floatX = $('#float-x');
  floatLink.href = CTA.href;
  if (CTA.ext) { floatLink.target = '_blank'; floatLink.rel = 'noopener'; }
  floatLink.innerHTML = `<span class="float-app">${ICONS[CTA.icon]}</span>`
    + `<span class="float-text"><strong>${esc(CTA.label)}</strong><span class="float-sub">${esc(CTA.sub)}</span></span>`
    + `<span class="float-when">now</span>${CTA.ext ? NEW_TAB : ''}`;
  $$('[data-mail]').forEach((a) => { a.href = 'mailto:' + P.email; });
  let floatDismissed = false;
  floatX.addEventListener('click', () => {
    floatDismissed = true;
    setFloat();
    floatLink.blur();
  });
  const visibleButtons = new Set();
  function setFloat() {
    const show = visibleButtons.size === 0 && !floatDismissed;
    floatBtn.classList.toggle('is-hidden', !show);
    floatBtn.setAttribute('aria-hidden', String(!show));
    floatLink.tabIndex = show ? 0 : -1;
    floatX.tabIndex = show ? 0 : -1;
  }
  const btnObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visibleButtons.add(e.target) : visibleButtons.delete(e.target)));
    setFloat();
  });
  $$('[data-intro-actions], [data-contact-actions]').forEach((el) => btnObs.observe(el));

  setInterval(() => $$('[data-clock]').forEach((el) => { el.textContent = manilaTime(); }), 30000);

  const sheet = $('#sheet');
  const sheetScrim = $('#sheet-scrim');
  const sheetBody = $('#sheet-body');
  const sheetX = $('#sheet-x');
  let sheetOpener = null;

  const sheetFocusable = () => $$('a[href], button:not([disabled])', sheet).filter((el) => el.offsetParent !== null);

  function openSheet(p, opener) {
    sheetOpener = opener || null;
    const story = (p.story || []).filter(Boolean);
    const layout = p.image ? (story.join(' ').length > 160 ? 'split' : 'picture') : 'text';
    const rest = `
      ${p.meta && p.meta.length ? `<dl class="sheet-meta">${p.meta.map((m) => `
        <div><dt class="label">${esc(m.label)}</dt><dd>${esc(m.value)}</dd></div>`).join('')}</dl>` : ''}
      ${story.map((s) => `<p class="sheet-para">${esc(s)}</p>`).join('')}
      ${p.link ? `<a class="btn btn-primary sheet-cta" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || 'Verify')} <span aria-hidden="true">↗</span>${NEW_TAB}</a>` : ''}`;
    sheet.dataset.layout = layout;
    sheetBody.innerHTML = `
      <div class="sheet-head">
        <span class="proof-kind">${esc(p.kind)}</span>
        <h2 class="sheet-title" id="sheet-title">${esc(p.title)}</h2>
      </div>
      ${p.image ? `<div class="sheet-media"><img class="sheet-image" src="${esc(asset(p.image))}" alt="${esc(p.imageAlt || '')}" /></div>` : ''}
      ${rest.trim() ? `<div class="sheet-rest">${rest}</div>` : ''}`;
    sheet.scrollTop = 0;
    sheet.hidden = false; sheetScrim.hidden = false;
    document.body.classList.add('sheet-open');
    sheetX.focus();
  }

  function closeSheet() {
    if (sheet.hidden) return;
    sheet.hidden = true; sheetScrim.hidden = true;
    document.body.classList.remove('sheet-open');
    sheetBody.innerHTML = '';
    if (sheetOpener && sheetOpener.offsetParent !== null) sheetOpener.focus();
    sheetOpener = null;
  }

  sheetX.addEventListener('click', closeSheet);
  sheetScrim.addEventListener('click', closeSheet);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });
  sheet.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || sheet.hidden) return;
    const items = sheetFocusable();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener('click', (e) => {
    const card = e.target.closest ? e.target.closest('[data-sheet]') : null;
    if (!card) return;
    const p = SHEETS[Number(card.dataset.sheet)];
    if (p) openSheet(p, card);
  });

  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    const at = document.activeElement;
    if (at && at !== document.body && at.id !== 'messages') return;
    const el = [feed, ...Object.values(views)].find((x) => x && !x.hidden);
    if (!el || el.scrollHeight <= el.clientHeight || getComputedStyle(el).overflowY === 'visible') return;
    const page = el.clientHeight * 0.9;
    const by = { PageDown: page, PageUp: -page, ' ': e.shiftKey ? -page : page,
                 ArrowDown: 48, ArrowUp: -48, Home: -el.scrollHeight, End: el.scrollHeight }[e.key];
    if (by === undefined) return;
    e.preventDefault();
    el.tabIndex = -1;
    el.focus({ preventScroll: true });
    el.scrollBy({ top: by });
  });

  const app = $('#app');
  const menuBtn = $('[data-menu]');
  const scrim = $('[data-scrim]');
  const sidebar = $('#sidebar');
  const focusable = () => $$('a[href], button:not([disabled])', sidebar).filter((el) => el.offsetParent !== null);
  const openMenu = () => {
    app.classList.add('menu-open'); scrim.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    const first = focusable()[0];
    if (first) first.focus();
  };
  const closeMenu = () => {
    const wasOpen = app.classList.contains('menu-open');
    app.classList.remove('menu-open'); scrim.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    if (wasOpen && menuBtn.offsetParent !== null) menuBtn.focus();
  };
  sidebar.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !app.classList.contains('menu-open')) return;
    const items = focusable();
    if (!items.length) return;
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  menuBtn.addEventListener('click', () => (app.classList.contains('menu-open') ? closeMenu() : openMenu()));
  scrim.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  $$('#sidebar a[href^="#"], .rail a[href^="#"]').forEach((a) => a.addEventListener('click', closeMenu));

  $$('[data-fold]').forEach((btn) => btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    btn.setAttribute('aria-expanded', String(open));
    $('#' + btn.getAttribute('aria-controls')).hidden = !open;
  }));
  const sideBtn = $('[data-side-toggle]');
  sideBtn.addEventListener('click', () => {
    const hidden = app.classList.toggle('side-hidden');
    sideBtn.setAttribute('aria-expanded', String(!hidden));
  });

  const root = document.documentElement;
  const fromUrl = new URLSearchParams(location.search).get('theme');
  let saved = null;
  try { saved = localStorage.getItem('mh-theme'); } catch (e) { /* storage blocked */ }
  function setTheme(t) {
    root.dataset.theme = t;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = t === 'burgundy' ? '#241a19' : '#182024';
  }
  setTheme(fromUrl === 'burgundy' || (fromUrl !== 'dark' && saved === 'burgundy') ? 'burgundy' : 'dark');
  $$('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
    const next = root.dataset.theme === 'burgundy' ? 'dark' : 'burgundy';
    setTheme(next);
    try { localStorage.setItem('mh-theme', next); } catch (e) { /* ignore */ }
  }));
})();
