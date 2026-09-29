// Miguel's workspace — renders content.js into one continuous conversation.
// The whole site is a single scroll (a recruiter never has to tap to find anything);
// the channel list jumps to each part and highlights where you are.
(function () {
  const S = window.SITE;
  const P = S.person;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Anything still marked TODO in content.js shows as a visible "to confirm" placeholder.
  const isTodo = (t) => typeof t === 'string' && /^TODO/i.test(t);
  const txt = (t) => isTodo(t)
    ? (S.hideTodos ? '' : `<span class="todo">${esc(t.replace(/^TODO:?\s*/i, '')) || 'to be added'}<span class="todo-tag mono">to confirm</span></span>`)
    : esc(t);

  // ---------- channels (in the order they appear in the conversation) ----------
  // Order agreed with Miguel: Work opens as its own view; the rest read as one scroll.
  const CHANNELS = [
    ...(S.selectedWork.length ? [{ id: 'selected-work', title: 'Work', sub: 'What I run, and how far it goes', view: true }] : []),
    { id: 'about', title: 'About', sub: 'My story' },
    { id: 'skills', title: 'Skills', sub: 'Tools and strengths' },
    { id: 'experience', title: 'Experience', sub: 'Where I have worked' },
    { id: 'proof', title: 'Proof', sub: 'Certifications, training and projects' },
    ...(S.testimonials.length >= 2 ? [{ id: 'testimonials', title: 'Testimonials', sub: 'What people say' }] : []),
    { id: 'contact', title: 'Contact', sub: 'Get in touch' },
  ];

  // Small app icons for the sidebar, like app tiles in a chat workspace.
  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92zM20.44 13.2c0-3.1-1.65-4.94-4.3-4.94-1.94 0-2.8 1.07-3.29 1.82V8.5H9.48V20h3.37v-5.7c0-1.5.28-2.96 2.14-2.96 1.83 0 1.86 1.72 1.86 3.06V20h3.38l.01-6.8z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ffffff" d="M3 6h18v12H3z"/><path fill="#4285F4" d="M20.4 19h-2.1V9.9L12 14.3 5.7 9.9V19H3.6A1.6 1.6 0 0 1 2 17.4V6.6C2 5.7 2.7 5 3.6 5h.7L12 10.6 19.7 5h.7c.9 0 1.6.7 1.6 1.6v10.8c0 .9-.7 1.6-1.6 1.6z"/><path fill="#34A853" d="M2 17.4V8.1l3.7 2.6V19H3.6A1.6 1.6 0 0 1 2 17.4z"/><path fill="#FBBC04" d="M22 17.4c0 .9-.7 1.6-1.6 1.6h-2.1v-8.3L22 8.1z"/><path fill="#EA4335" d="M2 6.6C2 5.7 2.7 5 3.6 5h.7L12 10.6 19.7 5h.7c.9 0 1.6.7 1.6 1.6v1.5L12 14.9 2 8.1z"/></svg>',
    cv: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2.5h8.5L19 7v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V4a1.5 1.5 0 0 1 1-1.5zm1 2V19.5h10V8h-4V4.5H7zm2 7h6v1.6H9v-1.6zm0 3.4h6v1.6H9v-1.6z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.17.4.37 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.2-.25 1.8-.42 2.2-.22.6-.48 1-.9 1.4-.4.4-.8.7-1.4.9-.4.17-1 .37-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.05-1.8-.25-2.2-.42-.6-.22-1-.48-1.4-.9-.4-.4-.7-.8-.9-1.4-.17-.4-.37-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.2.25-1.8.42-2.2.22-.6.48-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.17 1-.37 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.84-.4.4-.64.8-.84 1.3-.16.4-.35 1-.4 2.1C2.5 9.5 2.5 9.9 2.5 13s0 3.5.07 4.8c.05 1.1.24 1.7.4 2.1.2.5.44.9.84 1.3.4.4.8.64 1.3.84.4.16 1 .35 2.1.4 1.3.07 1.7.07 4.8.07s3.5 0 4.8-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.84.4-.4.64-.8.84-1.3.16-.4.35-1 .4-2.1.07-1.3.07-1.7.07-4.8s0-3.5-.07-4.8c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.84-1.3-.4-.4-.8-.64-1.3-.84-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4z"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"/><circle cx="17" cy="7" r="1.15"/></svg>',
    notes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v2H5zm0 5h14v2H5zm0 5h9v2H5z"/></svg>',
  };
  const APPS = [
    { label: 'LinkedIn', href: P.linkedin, ext: true, icon: 'linkedin' },
    { label: 'Email', href: 'mailto:' + P.email, icon: 'email' },
    ...(P.instagram ? [{ label: 'Instagram', href: P.instagram, ext: true, icon: 'instagram' }] : []),
    ...(S.showCv === false ? [] : [{ label: 'CV (PDF)', href: P.cv, ext: true, icon: 'cv' }]),
    ...(S.notes ? [{ label: 'Notes', href: S.notes, ext: true, icon: 'notes' }] : []),
  ];

  $('#channel-list').innerHTML = CHANNELS.map((c) =>
    `<li><a class="side-link" href="#${c.id}" data-channel="${c.id}"><span class="hash">#</span>${c.title}</a></li>`
  ).join('');
  $('#app-list').innerHTML = APPS.map((a) =>
    `<li><a class="side-link" href="${esc(a.href)}"${a.ext ? ' target="_blank" rel="noopener"' : ''}><span class="app-icon app-${a.icon}">${ICONS[a.icon]}</span>${a.label}${a.ext ? '<span class="ext mono" aria-hidden="true">↗</span>' : ''}</a></li>`
  ).join('');
  // Small chat icons: Miguel's avatar photo if set, otherwise the mh mark (the big intro photo is separate).
  const avatarEl = (cls, alt) => P.avatar
    ? `<img class="${cls}" src="${esc(P.avatar)}" alt="${esc(alt)}" width="44" height="44" loading="lazy" />`
    : `<span class="${cls} avatar-mark"${alt ? ` role="img" aria-label="${esc(alt)}"` : ' aria-hidden="true"'}>mh</span>`;
  // the same icon with a green "available" dot, used where it stands for Miguel himself
  const avatarLive = (cls, alt) => `<span class="avatar-live">${avatarEl(cls, alt)}<i class="live-dot" title="Open to work anywhere"></i></span>`;
  $$('[data-headshot]').forEach((el) => { el.outerHTML = avatarLive('side-avatar', ''); });

  // no work cards yet: hide the rail's Work button as well
  if (!S.selectedWork.length) { const w = $('.rail [data-rail="work"]'); if (w) w.remove(); }

  const manilaTime = () => new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Manila', hour: 'numeric', minute: '2-digit' }).format(new Date());

  // ---------- building blocks ----------
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
      <span class="hash">#</span>${c.title}<span class="divider-sub mono">${esc(c.sub)}</span>
    </h2>`;
  const buttons = (attr = '') => `
    <div class="actions" ${attr}>
      ${S.showCv === false ? '' : `<a class="btn btn-primary" href="${esc(P.cv)}" target="_blank" rel="noopener">Download CV</a>`}
      <a class="btn ${S.showCv === false ? 'btn-primary' : ''}" href="mailto:${esc(P.email)}">Email me</a>
      <a class="btn" href="${esc(P.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>
    </div>`;

  // ---------- sections ----------
  // The big photo in the intro. With no photo set, it shows a red "your photo goes here" frame.
  function introPhoto() {
    if (P.headshot && !/placeholder/.test(P.headshot)) {
      return `<img class="intro-photo" src="${esc(P.headshot)}" srcset="images/headshot-240.jpg 240w, ${esc(P.headshot)} 480w"
                   sizes="(max-width: 767px) 110px, 220px" alt="${esc(P.name)}" width="480" height="480" fetchpriority="high" />`;
    }
    return `<div class="intro-photo is-empty" role="img" aria-label="Photo coming soon">
              <span class="empty-title">your photo<br />goes here</span>
              <span class="empty-note mono">square · head and shoulders</span>
            </div>`;
  }

  function intro() {
    return `
      <div class="day mono" id="intro" data-section="intro">pinned</div>
      <article class="msg reveal">
        ${avatarLive('msg-avatar', P.name)}
        <div class="msg-body">
          <div class="msg-meta"><span class="msg-name">${esc(P.shortName)}</span><span class="msg-time mono"><span data-clock>${manilaTime()}</span> in Quezon City</span></div>
          <div class="intro-grid">
            <div class="intro-main">
              <p class="lede"><span class="before">${esc(P.storyStart)}</span> ${esc(P.story)}</p>
              ${S.tags && S.tags.length ? `<p class="hash-tags">${S.tags.map((t) => `<span class="hash-tag mono">#${esc(t)}</span>`).join('')}</p>` : ''}
              ${buttons('data-intro-actions')}
              <ul class="highlights">${S.highlights.map((h) => (typeof h === 'string'
                ? `<li>${esc(h)}</li>`
                : `<li>${h.href
                    ? `<a class="hook" href="${esc(h.href)}">${esc(h.hook)}</a>`
                    : `<span class="hook">${esc(h.hook)}</span>`}: ${esc(h.line)}</li>`)).join('')}</ul>
              <div class="chips">
                <span class="chip">${esc(P.role)}</span>
                <span class="chip">${esc(P.location)}</span>
                <span class="chip"><i class="dot-good"></i>${esc(P.availability)}</span>
              </div>
            </div>
            ${introPhoto()}
          </div>
        </div>
      </article>`;
  }

  // Work cards: result first (after alicezhao.work), then a big rounded panel (after matthewdea.com)
  // that will hold a real screenshot. Until one is added, the panel shows the result number instead.
  const COUNT_WORDS = ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  function selectedWork(c) {
    const hues = ['sea', 'ocean', 'reef', 'deep'];
    const n = S.selectedWork.length;
    const setName = S.workSetName ? `<p class="set-name">${esc(COUNT_WORDS[n] || n)} ${esc(S.workSetName)}</p>` : '';
    return divider(c) + setName + S.selectedWork.map((w, i) => msg(`result ${i + 1} of ${n}`, `
      <p class="work-no mono">${String(i + 1).padStart(2, '0')}${w.category ? ` — ${esc(w.category)}` : ''}${w.year ? ` · ${esc(w.year)}` : ''}</p>
      <h3 class="work-title">${esc(w.title)}</h3>
      <ul class="tags">${w.tags.map((t) => `<li class="mono">${esc(t)}</li>`).join('')}</ul>
      ${w.result ? `<p class="outcome"><span class="outcome-label mono">result</span>${esc(w.result)}</p>` : ''}
      ${w.pending && !S.hideTodos ? `<p class="work-pending">${txt(w.pending)}</p>` : ''}
      <dl class="work-detail">
        ${w.owns ? `<div><dt class="mono">what I own</dt><dd>${esc(w.owns)}</dd></div>` : ''}
        ${w.stops ? `<div><dt class="mono">where it stops</dt><dd>${esc(w.stops)}</dd></div>` : ''}
        ${w.problem ? `<div><dt class="mono">problem</dt><dd>${esc(w.problem)}</dd></div>` : ''}
        ${w.did ? `<div><dt class="mono">what I did</dt><dd>${esc(w.did)}</dd></div>` : ''}
      </dl>
      ${w.specs && w.specs.length ? `<ul class="specs">${w.specs.map((sp) => `
        <li><span class="spec-value">${esc(sp.value)}</span><span class="spec-label mono">${esc(sp.label)}</span></li>`).join('')}</ul>` : ''}
      <figure class="attachment attachment-${hues[i % hues.length]}">
        ${w.shot
          ? `<img src="${esc(w.shot)}" alt="${esc(w.title)} — screenshot" loading="lazy" />`
          : `<div class="attach-metric">${esc(w.metric)}</div>
             <figcaption class="attach-note mono">screenshot coming — cleaned of client details before it goes live</figcaption>`}
      </figure>`)).join('') + (S.boundary ? msg('how I work', `
      <p class="section-lede">${esc(S.boundary.lede)}</p>
      <dl class="work-detail">
        <div><dt class="mono">I ship</dt><dd>${esc(S.boundary.ships)}</dd></div>
        <div><dt class="mono">he decides</dt><dd>${esc(S.boundary.gated)}</dd></div>
      </dl>`) : '');
  }

  // Employer logo on a white tile; initials badge when there is no logo (Cloud Sentry: Miguel's choice for now).
  function orgLogo(src, initials, org) {
    return src
      ? `<img class="org-logo" src="${esc(src)}" alt="${esc(org)} logo" width="48" height="48" loading="lazy" />`
      : `<span class="org-logo org-initials" aria-hidden="true">${esc(initials || '')}</span>`;
  }

  function experience(c) {
    // Short employer names for the overview line (the full names appear in each role below).
    const shortOrg = (o) => o.replace('Department of Health – Metro Manila Center for Health Development', 'Department of Health')
      .replace('DOST – Food and Nutrition Research Institute', 'DOST-FNRI');
    const list = S.experience.map((e) => `
      <li><span class="tl-role"><strong>${esc(e.role)}</strong><span class="tl-org">${esc(shortOrg(e.org))}</span></span><span class="tl-dates mono">${txt(e.dates)}</span></li>`).join('');
    const summary = msg('overview', `
      <p class="section-lede">${S.experience.length} roles, from national health data to marketing and business development.</p>
      <ul class="timeline">${list}</ul>`);
    const roles = S.experience.map((e, i) => msg(`role ${i + 1} of ${S.experience.length}`, `
      <div class="role-head">
        ${orgLogo(e.logo, e.initials, e.org)}
        <div>
          <h3 class="work-title">${esc(e.role)}</h3>
          <p class="org">${esc(e.org)}${e.type ? ` · ${esc(e.type)}` : ''}</p>
          <p class="where mono">${esc(e.place)} · ${txt(e.dates)}</p>
        </div>
      </div>
      <ul class="points">${e.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`)).join('');
    const edu = msg('education', `<div class="role-head">${orgLogo(S.educationLogo, 'FEU', 'Far Eastern University')}<p class="org"><strong>${esc(S.education)}</strong></p></div>`);
    return divider(c) + summary + roles + edu;
  }

  function skills(c) {
    return divider(c) + msg('skills', S.skills.map((g) => `
      <div class="skill-group">
        <h3 class="skill-head mono">${esc(g.group)}</h3>
        <ul class="tags tags-lg">${g.items.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      </div>`).join('') + (S.learning ? `
      <p class="learning"><span class="mono">currently learning</span> ${esc(S.learning)}</p>` : ''));
  }

  function proof(c) {
    return divider(c) + msg('proof', `
      <p class="section-lede">Certifications, training and the project I'm building.</p>
      <div class="proof-grid">${S.proof.map((p) => `
        <div class="proof-card">
          <span class="proof-kind mono">${esc(p.kind)}</span>
          <strong class="proof-title">${txt(p.title)}</strong>
          ${txt(p.topic) ? `<span class="proof-topic">${txt(p.topic)}</span>` : ''}
          ${p.link ? `<a class="proof-link" href="${esc(p.link)}" target="_blank" rel="noopener">View ↗</a>` : ''}
        </div>`).join('')}
      </div>`);
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
      <ul class="tags tags-lg">${S.interests.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      <p class="word mono">my word · <strong>${esc(S.word)}</strong></p>
      <blockquote class="motto">“${esc(P.motto)}”</blockquote>`);
  }

  function contact(c) {
    return divider(c) + msg('contact', `
      <!-- closing line: Miguel's favourite, keep as is (22 Sep) -->
      <p class="section-lede">If you're building a team that needs work to run on rails, I'd like to hear about it.</p>
      <ul class="contact-list">
        <li><span class="mono">email</span><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>
        <li><span class="mono">linkedin</span><a href="${esc(P.linkedin)}" target="_blank" rel="noopener">${esc(P.linkedinLabel)} ↗</a></li>
        <li><span class="mono">based in</span><span>${esc(P.location)} · <span data-clock>${manilaTime()}</span> local time</span></li>
        <li><span class="mono">status</span><span><i class="dot-good"></i> ${esc(P.availability)}</span></li>
      </ul>
      ${buttons('data-contact-actions')}`) + `<p class="end mono">— end of conversation —</p>`;
  }

  // The Files tab: a gallery of work pictures, with the file name under each (after baileyelith.com).
  function filesPanel() {
    return `<div class="files-grid">${S.files.map((f) => `
      <figure class="file-card">
        <img src="${esc(f.src)}" alt="${esc(f.caption || f.name)}" loading="lazy" />
        <figcaption class="file-name mono">${esc(f.name)}</figcaption>
      </figure>`).join('')}</div>`;
  }

  const builders = { 'selected-work': selectedWork, experience, skills, proof, testimonials, about, contact };
  const feed = $('#feed');
  const scrollChannels = CHANNELS.filter((c) => !c.view);
  feed.innerHTML = intro() + scrollChannels.map((c) => builders[c.id](c)).join('');

  // Channels marked `view: true` open on their own, like a separate page (after baileyelith.com).
  const views = {};
  CHANNELS.filter((c) => c.view).forEach((c) => {
    const panel = document.createElement('div');
    panel.className = 'channel-view';
    panel.hidden = true;
    panel.innerHTML = `<button class="view-back" type="button" data-view-back>← Back to messages</button>` + builders[c.id](c);
    const heading = panel.querySelector('.channel-divider'); // the header already names the channel
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

  // the address bar follows the view, so Back works and a shared link opens the right thing
  function openFromHash(replace) {
    const id = location.hash.slice(1);
    const isView = CHANNELS.some((c) => c.view && c.id === id);
    showView(isView ? id : null);
    if (replace) history.replaceState({ view: isView ? id : null }, '');
  }
  window.addEventListener('hashchange', () => openFromHash(true));
  window.addEventListener('popstate', (e) => {
    const id = e.state && e.state.view;
    showView(CHANNELS.some((c) => c.view && c.id === id) ? id : null);
    if (!id) setActive('intro');
  });

  // Files tab + Messages tab, shown only when there are files to show
  if (S.files && S.files.length) {
    const tabs = document.createElement('div');
    tabs.className = 'pane-tabs';
    tabs.innerHTML = `
      <button class="pane-tab is-on" type="button" data-tab="messages">Messages</button>
      <button class="pane-tab" type="button" data-tab="files">Files <span class="tab-count mono">${S.files.length}</span></button>`;
    $('.pane-head').insertAdjacentElement('afterend', tabs);
    const panel = document.createElement('div');
    panel.className = 'files-panel';
    panel.hidden = true;
    panel.innerHTML = filesPanel();
    feed.insertAdjacentElement('afterend', panel);
    $$('.pane-tab').forEach((b) => b.addEventListener('click', () => {
      const files = b.dataset.tab === 'files';
      $$('.pane-tab').forEach((x) => x.classList.toggle('is-on', x === b));
      feed.hidden = files;
      panel.hidden = !files;
    }));
  }

  // Live sites: links out to real published work, above the channel list
  if (S.liveSites && S.liveSites.length) {
    const head = document.createElement('button');
    head.className = 'side-label';
    head.type = 'button';
    head.setAttribute('aria-expanded', 'true');
    head.setAttribute('aria-controls', 'live-list');
    head.innerHTML = '<svg class="caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8.5h12l-6 7.5z"/></svg>Live sites';
    const list = document.createElement('ul');
    list.className = 'side-list';
    list.id = 'live-list';
    list.innerHTML = S.liveSites.map((l) =>
      `<li><a class="side-link" href="${esc(l.url)}" target="_blank" rel="noopener"><span class="hash">↗</span>${esc(l.label)}</a></li>`).join('');
    const firstLabel = $('.side-label');
    firstLabel.parentNode.insertBefore(head, firstLabel);
    firstLabel.parentNode.insertBefore(list, firstLabel);
    head.addEventListener('click', () => {
      const open = head.getAttribute('aria-expanded') !== 'true';
      head.setAttribute('aria-expanded', String(open));
      list.hidden = !open;
    });
  }

  // ---------- where am I? (highlight the channel you're reading) ----------
  const headIcon = $('[data-head-avatar]');
  if (headIcon) headIcon.outerHTML = avatarLive('head-avatar', '');
  const titleEl = $('#pane-title');
  const subEl = $('#pane-sub');
  function setActive(id) {
    const c = CHANNELS.find((x) => x.id === id);
    titleEl.textContent = c ? '#' + c.title : P.shortName;
    subEl.textContent = c ? c.sub : `${P.role} · ${P.location.split(',')[0]}`;
    $$('[data-channel]').forEach((a) => a.classList.toggle('is-active', a.dataset.channel === (c ? c.id : 'intro')));
    $$('.rail-btn[data-rail]').forEach((b) => b.classList.toggle('is-active',
      c ? (c.id === 'selected-work' ? b.dataset.rail === 'work' : false) : b.dataset.rail === 'home'));
  }
  $$('a[href^="#"]').forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    const isView = CHANNELS.some((c) => c.view && c.id === id);
    link.addEventListener('click', (e) => {
      if (isView) { e.preventDefault(); history.pushState({ view: id }, '', '#' + id); showView(id); }
      else if (openView) { showView(null); }
    });
  });

  const sections = $$('[data-section]');
  let current = 'intro';
  const spy = new IntersectionObserver((entries) => {
    if (openView) return; // the open view sets the title itself
    entries.forEach((e) => { if (e.isIntersecting) current = e.target.dataset.section; });
    setActive(current);
  }, { rootMargin: '0px 0px -75% 0px', threshold: 0 });
  sections.forEach((s) => spy.observe(s));
  setActive('intro');
  openFromHash(true); // honour a link like miguelhameed.com/#selected-work

  // ---------- gentle entrance as messages scroll into view ----------
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach((el) => el.classList.add('in'));
  } else {
    const rev = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    $$('.reveal').forEach((el) => rev.observe(el));
  }

  // ---------- floating "Email me": only when no other contact buttons are on screen ----------
  const floatBtn = $('#float-btn');
  floatBtn.href = 'mailto:' + P.email;
  floatBtn.innerHTML = `${avatarEl('float-avatar', '')}<span class="float-text"><strong>Email me</strong><span class="float-sub mono">${esc(P.availability)}</span></span>`;
  $$('[data-mail]').forEach((a) => { a.href = 'mailto:' + P.email; });
  const visibleButtons = new Set();
  function setFloat() {
    const show = visibleButtons.size === 0;
    floatBtn.classList.toggle('is-hidden', !show);
    floatBtn.setAttribute('aria-hidden', String(!show));
    floatBtn.tabIndex = show ? 0 : -1;
  }
  const btnObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? visibleButtons.add(e.target) : visibleButtons.delete(e.target)));
    setFloat();
  });
  $$('[data-intro-actions], [data-contact-actions]').forEach((el) => btnObs.observe(el));

  // live Manila clock (intro + contact)
  setInterval(() => $$('[data-clock]').forEach((el) => { el.textContent = manilaTime(); }), 30000);

  // ---------- phone: channel drawer ----------
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
  // while the drawer is open, Tab stays inside it
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

  // ---------- sidebar: fold a section open/closed (the ▾/▸ arrows), and hide the whole sidebar (desktop) ----------
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

  // ---------- theme: aquarium blue (dark) by default, burgundy on the button (Miguel, 22 Sep) ----------
  const root = document.documentElement;
  const fromUrl = new URLSearchParams(location.search).get('theme');
  let saved = null;
  try { saved = localStorage.getItem('mh-theme'); } catch (e) { /* storage blocked */ }
  function setTheme(t) {
    root.dataset.theme = t;
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = t === 'burgundy' ? '#1a0710' : '#020810';
  }
  // The button switches blue <-> burgundy (the plain light theme was retired 22 Sep).
  setTheme(fromUrl === 'burgundy' || (fromUrl !== 'dark' && saved === 'burgundy') ? 'burgundy' : 'dark');
  $$('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
    const next = root.dataset.theme === 'burgundy' ? 'dark' : 'burgundy';
    setTheme(next);
    try { localStorage.setItem('mh-theme', next); } catch (e) { /* ignore */ }
  }));
})();
