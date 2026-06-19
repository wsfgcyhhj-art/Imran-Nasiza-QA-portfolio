// script.js — НЕ ТРОГАЙ. Все правки делай в portfolio.config.js

const IC = {
  search:   `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  api:      `<svg viewBox="0 0 24 24"><polyline points="13 2 13 9 20 9"/><path d="M4 20.5v-16a1 1 0 0 1 1-1h10l5 5v15.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>`,
  bot:      `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="11"/><circle cx="8" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,
  db:       `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/></svg>`,
  devtools: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  loop:     `<svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>`,
};

function render() {
  document.title = SITE.profile.name + ' — QA Engineer';

  // Nav
  const navEl = document.getElementById('nav-links');
  const mobEl = document.getElementById('mob-nav');
  SITE.site.nav.forEach(n => {
    navEl.innerHTML += `<li><a href="${n.href}">${n.label}</a></li>`;
    mobEl.innerHTML  += `<a href="${n.href}" onclick="closeMob()">${n.label}</a>`;
  });

  // Hero
  document.getElementById('h-name').textContent = SITE.profile.name;
  document.getElementById('h-role').textContent  = SITE.profile.role;
  document.getElementById('h-tag').textContent   = SITE.profile.tagline;
  document.getElementById('av-ph').textContent   = SITE.profile.initials;
  document.getElementById('ab-ph').textContent   = SITE.profile.initials;
  document.getElementById('ab-bio').textContent  = SITE.profile.about;
  document.getElementById('ct-text').textContent = SITE.profile.contactText;
  document.getElementById('cv-link').href        = SITE.profile.cv;
  document.getElementById('ft-copy').textContent = '© ' + new Date().getFullYear() + ' ' + SITE.profile.name + '. Все права защищены.';

  if (SITE.profile.avatar) {
    const img = document.getElementById('av-img');
    img.src = SITE.profile.avatar; img.classList.add('show');
    document.getElementById('av-ph').style.display = 'none';
    const abImg = document.getElementById('ab-img-tag');
    abImg.src = SITE.profile.avatar; abImg.classList.add('show');
  }

  // Hero pills (берём из skills)
  const pillsEl = document.getElementById('h-pills');
  SITE.skills.forEach(s => {
    pillsEl.innerHTML += `<span class="pill">${s.title}</span>`;
  });

  // Hero stats
  const statsEl = document.getElementById('h-stats');
  SITE.stats.forEach(s => {
    statsEl.innerHTML += `<div><div class="h-sv" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="h-sl">${s.label}</div></div>`;
  });

  // Marquee
  const mqEl = document.getElementById('mq-sec');
  const items = [...SITE.ticker,...SITE.ticker,...SITE.ticker];
  const mkRow = cls => { const r=document.createElement('div'); r.className='mq-row '+cls; r.innerHTML=items.map(t=>`<span class="mq-item">${t}</span>`).join(''); return r; };
  mqEl.appendChild(mkRow('mq-row--l'));
  mqEl.appendChild(mkRow('mq-row--r'));

  // Skills
  const skEl = document.getElementById('sk-grid');
  SITE.skills.forEach(s => {
    skEl.innerHTML += `<div class="sk-card"><div class="sk-ico">${IC[s.icon]||IC.search}</div><h3>${s.title}</h3><p>${s.desc}</p></div>`;
  });

  // About focus list
  const expEl = document.getElementById('ab-exp');
  SITE.focus.forEach(e => expEl.innerHTML += `<li>${e}</li>`);

  // Bars
  const barsEl = document.getElementById('ab-bars');
  SITE.bars.forEach(b => {
    barsEl.innerHTML += `<div class="bar-item"><div class="bar-hd"><span>${b.name}</span><span>${b.percent}%</span></div><div class="bar-tr"><div class="bar-fi" data-pct="${b.percent}"></div></div></div>`;
  });

  // Project filters
  const cats = ['Все', ...new Set(SITE.projects.map(p => p.type))];
  const filEl = document.getElementById('pf-filters');
  cats.forEach(cat => {
    const b = document.createElement('button');
    b.className = 'f-btn' + (cat==='Все'?' on':'');
    b.textContent = cat;
    b.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      filterPj(cat);
    });
    filEl.appendChild(b);
  });

  // Projects
  const pjEl = document.getElementById('pj-grid');
  SITE.projects.forEach((p,i) => {
    const ov = p.links && p.links.length
      ? p.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')
      : '<span style="font-family:var(--ff-m);font-size:.7rem;color:var(--t2)">— Скоро —</span>';
    pjEl.innerHTML += `
      <div class="pj-card" data-cat="${p.type}">
        <div class="pj-vis"><div class="pj-num">0${i+1}</div><div class="pj-scan"></div><div class="pj-ov">${ov}</div></div>
        <div class="pj-body">
          <div class="pj-meta"><span class="pj-yr">${p.period}</span><span class="pj-cl"> · ${p.type}</span></div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="pj-tags">${p.approaches.map(t=>`<span class="pj-tag">${t}</span>`).join('')}</div>
        </div>
      </div>`;
  });

  // Contact links
  const ctEl = document.getElementById('ct-links');
  SITE.profile.contacts.forEach(c => {
    ctEl.innerHTML += `<a class="ct-link" href="${c.href}" target="_blank" rel="noopener">${c.label} · ${c.value} <span>→</span></a>`;
  });
}

function filterPj(cat) {
  document.querySelectorAll('.pj-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'Все' && c.dataset.cat !== cat);
  });
}

function closeMob() { document.getElementById('mob-nav').classList.remove('open'); }
document.getElementById('ham').addEventListener('click', () => {
  document.getElementById('mob-nav').classList.toggle('open');
});

// ═══════════════════════════════════════
//  PARTICLES
// ═══════════════════════════════════════
function initParticles() {
  const cv = document.getElementById('particles');
  const ctx = cv.getContext('2d');
  let W,H,pts=[];
  function resize(){ W=cv.width=window.innerWidth; H=cv.height=window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  for (let i=0;i<55;i++) pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.4});
  function draw() {
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(255,77,0,.45)'; ctx.fill();
    });
    pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<120){ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=`rgba(255,77,0,${.15*(1-d/120)})`; ctx.lineWidth=.6; ctx.stroke(); }
    }));
    requestAnimationFrame(draw);
  }
  draw();
}

// ═══════════════════════════════════════
//  ANIMATIONS
// ═══════════════════════════════════════
function initAnim() {
  if (!window.gsap || !window.ScrollTrigger) { setTimeout(initAnim,120); return; }
  gsap.registerPlugin(ScrollTrigger);
  initParticles();

  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    document.getElementById('spbar').style.width = pct + '%';
    document.getElementById('nav').classList.toggle('on', window.scrollY > 40);
    document.getElementById('backTop').classList.toggle('show', window.scrollY > 520);
  }, {passive:true});

  document.getElementById('backTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
  document.getElementById('logo-top').addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
  document.getElementById('logo-bottom').addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });

  const cur = document.getElementById('cur'), curD = document.getElementById('cur-d');
  document.addEventListener('mousemove', e => {
    gsap.to(curD, {x:e.clientX, y:e.clientY, duration:.06});
    gsap.to(cur,  {x:e.clientX, y:e.clientY, duration:.42, ease:'power2.out'});
  });
  document.querySelectorAll('a,button,.f-btn,.sk-card,.pj-card').forEach(el => {
    el.addEventListener('mouseenter', () => cur.classList.add('cur-big'));
    el.addEventListener('mouseleave', () => cur.classList.remove('cur-big'));
  });

  document.querySelectorAll('.btn-p,.btn-s,.nav-cta').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const r=btn.getBoundingClientRect(), x=e.clientX-r.left-r.width/2, y=e.clientY-r.top-r.height/2;
      gsap.to(btn, {x:x*.22, y:y*.22, duration:.3, ease:'power2.out'});
    });
    btn.addEventListener('mouseleave', () => gsap.to(btn,{x:0,y:0,duration:.5,ease:'elastic.out(1,.4)'}));
  });

  document.querySelectorAll('.sk-card,.pj-card').forEach(card => {
    const spot=document.createElement('div'); spot.className='spot'; card.appendChild(spot);
    card.addEventListener('mousemove', e => {
      const r=card.getBoundingClientRect(), x=e.clientX-r.left, y=e.clientY-r.top, cx=r.width/2, cy=r.height/2;
      gsap.to(card, {rotateX:(y-cy)/cy*8, rotateY:(cx-x)/cx*8, duration:.3, ease:'power2.out', transformPerspective:800});
      spot.style.left=x+'px'; spot.style.top=y+'px';
    });
    card.addEventListener('mouseleave', () => gsap.to(card,{rotateX:0,rotateY:0,duration:.6,ease:'elastic.out(1,.5)'}));
  });

  const nameEl = document.getElementById('h-name');
  nameEl.setAttribute('data-text', nameEl.textContent);
  setInterval(() => { nameEl.classList.add('glitch'); setTimeout(()=>nameEl.classList.remove('glitch'),380); }, 4500);

  const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
  function scramble(el) {
    const orig=el.textContent; let frame=0; const total=18;
    const iv=setInterval(() => {
      el.textContent = orig.split('').map((c,i) => c===' ' ? ' ' : (frame > i*(total/orig.length) ? c : chars[Math.floor(Math.random()*chars.length)])).join('');
      if (++frame>total) { el.textContent=orig; clearInterval(iv); }
    }, 40);
  }
  document.querySelectorAll('.s-title').forEach(el => {
    ScrollTrigger.create({trigger:el, start:'top 82%', once:true, onEnter:()=>scramble(el)});
  });

  const tl = gsap.timeline({defaults:{ease:'power3.out'}});
  tl.from('#nav',{y:-60,opacity:0,duration:.8})
    .from('#h-name',{y:44,opacity:0,duration:.7},'-=.3')
    .from('.h-role',{y:22,opacity:0,duration:.5},'-=.35')
    .from('#h-tag',{y:18,opacity:0,duration:.5},'-=.3')
    .from('.pill',{y:14,opacity:0,stagger:.04,duration:.4},'-=.3')
    .from('.h-btns a',{y:14,opacity:0,stagger:.12,duration:.4,ease:'back.out(1.5)'},'-=.25')
    .from('#h-stats > div',{y:14,opacity:0,stagger:.1,duration:.4},'-=.3')
    .from('.av-wrap',{scale:.78,opacity:0,duration:.95,ease:'back.out(1.7)'},'-=.9')
    .from('.orb',{opacity:0,duration:1.5},'-=.8');

  if (window.Typed) {
    new Typed('#h-role', {strings:[SITE.profile.role], typeSpeed:55, showCursor:false});
  }

  document.querySelectorAll('.h-sv').forEach(el => {
    const target=+el.dataset.target, suffix=el.dataset.suffix, obj={val:0};
    gsap.to(obj, {scrollTrigger:{trigger:el,start:'top 90%'}, val:target, duration:1.8, ease:'power2.out', onUpdate(){ el.textContent=Math.floor(obj.val)+suffix; }});
  });

  document.querySelectorAll('.mq-row').forEach(r => {
    r.addEventListener('mouseenter', () => r.style.animationPlayState='paused');
    r.addEventListener('mouseleave', () => r.style.animationPlayState='running');
  });

  gsap.from('.sk-card', {scrollTrigger:{trigger:'#skills',start:'top 78%'}, y:60,opacity:0,stagger:.1,duration:.7});
  gsap.from('.ab-img-w', {scrollTrigger:{trigger:'#about',start:'top 72%'}, x:-60,opacity:0,duration:.85});
  gsap.from('.ab-text > *', {scrollTrigger:{trigger:'#about',start:'top 72%'}, y:35,opacity:0,stagger:.1,duration:.6});

  const barObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.style.width=e.target.dataset.pct+'%'; barObs.unobserve(e.target); } });
  }, {threshold:.3});
  document.querySelectorAll('.bar-fi').forEach(b => barObs.observe(b));

  gsap.from('.pj-card', {scrollTrigger:{trigger:'#projects',start:'top 78%'}, y:55,opacity:0,stagger:.1,duration:.7});
  gsap.from('.ct-info > *', {scrollTrigger:{trigger:'#contact',start:'top 78%'}, y:30,opacity:0,stagger:.1,duration:.6});

  gsap.to('.av-wrap', {scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.5}, y:100});
  gsap.to('.orb1', {scrollTrigger:{trigger:'body',start:'top top',end:'bottom bottom',scrub:2}, y:200,x:-80});
  gsap.to('.orb2', {scrollTrigger:{trigger:'body',start:'top top',end:'bottom bottom',scrub:3}, y:-160,x:60});

  gsap.utils.toArray('.s-label').forEach(el => {
    gsap.from(el, {scrollTrigger:{trigger:el,start:'top 86%'}, x:-20,opacity:0,duration:.5});
  });
}

document.addEventListener('DOMContentLoaded', () => { render(); initAnim(); });
