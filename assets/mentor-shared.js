/**
 * mentor-shared.js — Lógica compartilhada para todas as páginas de mentor.
 *
 * Cada página define window.MENTOR_CONFIG ANTES de carregar este script:
 *   window.MENTOR_CONFIG = {
 *     id: 'luan',          // identificador único do mentor
 *     accentHex: '#C9A84C',
 *     accentBorder: 'rgba(201,168,76,0.4)',
 *     accentBorderHover: 'rgba(201,168,76,0.8)',
 *     numCourses: 3,        // número de cursos no portal
 *   };
 *
 * Inclui: loader, parallax, eye-blink, light streaks, ambient dots,
 * reveal, card swipe, sounds, music, mute button, page transitions,
 * content protection, scroll progress, back-to-top.
 */
(function () {
  'use strict';

  var CFG = window.MENTOR_CONFIG || {};
  var MID = CFG.id || 'mentor';
  var ACCENT_BORDER       = CFG.accentBorder       || 'rgba(201,168,76,0.4)';
  var ACCENT_BORDER_HOVER = CFG.accentBorderHover   || 'rgba(201,168,76,0.8)';

  /* ── LOADER ── */
  window.addEventListener('load', function () {
    setTimeout(function () {
      var loader = document.getElementById('loader');
      if (loader) loader.classList.add('done');
    }, 600);
  });

  var photoImg  = document.getElementById('photo-img');
  var photoLayer = document.getElementById('photo-layer');
  var lids = [
    document.getElementById('lt-l'), document.getElementById('lb-l'),
    document.getElementById('lt-r'), document.getElementById('lb-r')
  ];

  /* ── ZOOM + PARALLAX on scroll ── */
  if (photoImg) {
    window.addEventListener('scroll', function () {
      var sy      = window.scrollY;
      var heroEl  = document.getElementById('hero');
      var heroH   = heroEl ? heroEl.offsetHeight : window.innerHeight;
      var progress = Math.min(sy / (heroH * 0.9), 1);
      var scale   = 1 + progress * 0.30;
      var posY    = 15 + progress * 12;
      photoImg.style.transform       = 'scale(' + scale.toFixed(4) + ')';
      photoImg.style.transformOrigin = 'center ' + posY.toFixed(1) + '%';
      if (photoLayer) photoLayer.style.opacity = Math.max(0, 1 - sy / (heroH * 0.85));
    }, { passive: true });
  }

  /* ── EYE BLINK ── */
  var validLids = lids.filter(Boolean);
  if (validLids.length === 4) {
    function closeLids(dur) {
      validLids.forEach(function (l) {
        l.style.transition = 'transform ' + dur + 's ease-in';
        l.style.transform  = 'scaleY(1)';
      });
    }
    function openLids(dur) {
      validLids.forEach(function (l) {
        l.style.transition = 'transform ' + dur + 's ease-out';
        l.style.transform  = 'scaleY(0)';
      });
    }
    function doBlink(onDone) {
      closeLids(0.055);
      setTimeout(function () { openLids(0.09); setTimeout(onDone, 100); }, 60);
    }
    function scheduleBlink() {
      var delay = 3000 + Math.random() * 3500;
      setTimeout(function () {
        doBlink(function () {
          if (Math.random() < 0.30) { setTimeout(function () { doBlink(scheduleBlink); }, 220); }
          else { scheduleBlink(); }
        });
      }, delay);
    }
    setTimeout(scheduleBlink, 2000);
  }

  /* ── REVEAL ── */
  document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(function (el) {
    new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) entries[0].target.classList.add('visible');
    }, { threshold: 0.1 }).observe(el);
  });

  /* ── CARD SWIPE ARROWS ── */
  document.querySelectorAll('.card-track').forEach(function (track) {
    var prev = track.parentElement && track.parentElement.querySelector('.swipe-prev');
    var next = track.parentElement && track.parentElement.querySelector('.swipe-next');
    var CARD_W = 220 + 16;
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -CARD_W, behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left:  CARD_W, behavior: 'smooth' }); });
  });

  /* ── LIGHT STREAKS ── */
  (function () {
    var container = document.getElementById('light-streaks');
    if (!container) return;
    var streaks = container.querySelectorAll('.streak-gold');
    streaks.forEach(function (s, i) {
      var dur   = 3 + Math.random() * 4;
      var delay = i * 1.2 + Math.random() * 2;
      var top   = 10 + Math.random() * 80;
      s.style.cssText += 'top:' + top + '%;animation:streakMove ' + dur + 's ' + delay + 's linear infinite;opacity:0;';
    });
  })();

  /* ── AMBIENT PARTICLES ── */
  (function () {
    var container = document.getElementById('ambient-dots');
    if (!container) return;
    for (var i = 0; i < 18; i++) {
      var d = document.createElement('div');
      d.className = 'ambient-dot';
      var size = 2 + Math.random() * 3;
      d.style.cssText = 'position:absolute;border-radius:50%;width:' + size + 'px;height:' + size + 'px;' +
        'left:' + Math.random() * 100 + '%;top:' + Math.random() * 100 + '%;' +
        'animation:ambientFloat ' + (6 + Math.random() * 8) + 's ' + (Math.random() * 4) + 's ease-in-out infinite alternate;';
      container.appendChild(d);
    }
  })();

  /* ── SOUNDS + MUSIC ── */
  var muted = localStorage.getItem('ui-muted') === '1';
  var audioCtx = null;
  function getCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function playTone(o) {
    if (muted) return;
    try {
      var ctx = getCtx();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = o.type || 'sine';
      osc.frequency.setValueAtTime(o.freq, ctx.currentTime);
      gain.gain.setValueAtTime(o.volume || 0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + (o.duration || 0.1));
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + (o.duration || 0.1) + 0.05);
    } catch (e) {}
  }
  var sounds = {
    clickDown: function () { playTone({ freq: 800,  duration: 0.04, type: 'square', volume: 0.04 }); },
    clickUp:   function () { playTone({ freq: 1600, duration: 0.05, type: 'sine',   volume: 0.05 }); setTimeout(function () { playTone({ freq: 2200, duration: 0.03, type: 'sine', volume: 0.025 }); }, 12); },
    click:     function () { playTone({ freq: 1200, duration: 0.06, type: 'sine',   volume: 0.05 }); setTimeout(function () { playTone({ freq: 1600, duration: 0.05, type: 'sine', volume: 0.03  }); }, 10); },
    impact:    function () { playTone({ freq: 180,  duration: 0.15, type: 'sine',   volume: 0.14 }); playTone({ freq: 90, duration: 0.22, type: 'sine', volume: 0.10 }); playTone({ freq: 60, duration: 0.3, type: 'triangle', volume: 0.06 }); },
    hover:     function () { playTone({ freq: 2200, duration: 0.04, type: 'sine',   volume: 0.02 }); },
    leave:     function () { playTone({ freq: 1100, duration: 0.05, type: 'sine',   volume: 0.015 }); },
    scroll:    function () { playTone({ freq: 440,  duration: 0.12, type: 'sine',   volume: 0.04 }); setTimeout(function () { playTone({ freq: 660, duration: 0.08, type: 'sine', volume: 0.03 }); }, 40); }
  };

  /* ── BACKGROUND MUSIC ── */
  var musicPlaying = false;
  var bgAudio = new Audio('https://raw.githubusercontent.com/euguilouren/CursosHUB/main/assets/bg-music.mp3');
  bgAudio.loop = true; bgAudio.volume = 0.08; bgAudio.preload = 'none'; bgAudio.crossOrigin = 'anonymous';
  bgAudio.load();

  function startMusic() {
    if (musicPlaying || muted) return;
    var p = bgAudio.play();
    if (p) p.then(function () { musicPlaying = true; }).catch(function () {
      setTimeout(function () { if (!muted && !musicPlaying) bgAudio.play().then(function () { musicPlaying = true; }).catch(function () {}); }, 500);
    });
  }
  function stopMusic() { musicPlaying = false; bgAudio.pause(); }

  var unlocked = false;
  function unlock() {
    if (unlocked) return; unlocked = true; getCtx(); if (!muted) startMusic();
  }
  ['click','touchstart','keydown','mousedown','scroll'].forEach(function (evt) {
    document.addEventListener(evt, unlock, { capture: true, passive: true });
  });

  /* ── BIND SOUNDS ── */
  document.querySelectorAll('nav a, .mobile-menu a').forEach(function (a) {
    a.addEventListener('mousedown',  function () { sounds.clickDown(); });
    a.addEventListener('mouseup',    function () { sounds.clickUp(); });
    a.addEventListener('touchstart', function () { sounds.clickDown(); }, { passive: true });
    a.addEventListener('touchend',   function () { sounds.clickUp(); },   { passive: true });
  });
  document.querySelectorAll('.btn-primary').forEach(function (btn) { btn.addEventListener('click', function () { sounds.impact(); }); });
  document.querySelectorAll('.btn-outline, .btn-lang').forEach(function (btn) {
    btn.addEventListener('mousedown',  function () { sounds.clickDown(); });
    btn.addEventListener('mouseup',    function () { sounds.clickUp(); });
    btn.addEventListener('touchstart', function () { sounds.clickDown(); }, { passive: true });
    btn.addEventListener('touchend',   function () { sounds.clickUp(); },   { passive: true });
  });
  document.querySelectorAll('.contact-card').forEach(function (c) { c.addEventListener('click', function () { sounds.impact(); }); });
  var ham = document.getElementById('hamburger');
  if (ham) {
    ham.addEventListener('mousedown',  function () { sounds.clickDown(); });
    ham.addEventListener('mouseup',    function () { sounds.clickUp(); });
    ham.addEventListener('touchstart', function () { sounds.clickDown(); }, { passive: true });
    ham.addEventListener('touchend',   function () { sounds.clickUp(); },   { passive: true });
  }
  var lastSection = null;
  new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && e.target.id !== lastSection) { lastSection = e.target.id; sounds.scroll(); }
    });
  }, { threshold: 0.5 }).observe(document.querySelector('section') || document.body);
  document.querySelectorAll('section[id]').forEach(function (s) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && e.target.id !== lastSection) { lastSection = e.target.id; sounds.scroll(); }
      });
    }, { threshold: 0.5 }).observe(s);
  });
  var lastHover = 0;
  document.querySelectorAll('.lang-card, .infra-card, .erp-card, .cert-card, .about-stat').forEach(function (c) {
    c.addEventListener('mouseenter', function () { var n = Date.now(); if (n - lastHover > 100) { sounds.hover(); lastHover = n; } });
    c.addEventListener('mouseleave', function () { var n = Date.now(); if (n - lastHover > 100) { sounds.leave(); lastHover = n; } });
  });

  /* ── MUTE BUTTON ── */
  var muteBtn = document.createElement('button');
  muteBtn.id = 'mute-toggle';
  muteBtn.setAttribute('aria-label', muted ? 'Ativar sons' : 'Desativar sons');
  var SVG_MUTED  = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';
  var SVG_SOUND  = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
  muteBtn.innerHTML = muted ? SVG_MUTED : SVG_SOUND;
  muteBtn.style.cssText = 'position:fixed;bottom:16px;right:16px;width:32px;height:32px;border-radius:50%;background:rgba(13,17,23,0.85);border:1px solid ' + ACCENT_BORDER + ';color:var(--accent);cursor:pointer;z-index:500;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);transition:all 0.25s ease;';
  muteBtn.addEventListener('mouseenter', function () { muteBtn.style.borderColor = ACCENT_BORDER_HOVER; muteBtn.style.transform = 'scale(1.08)'; });
  muteBtn.addEventListener('mouseleave', function () { muteBtn.style.borderColor = ACCENT_BORDER;       muteBtn.style.transform = 'scale(1)'; });
  muteBtn.addEventListener('click', function () {
    muted = !muted;
    localStorage.setItem('ui-muted', muted ? '1' : '0');
    muteBtn.setAttribute('aria-label', muted ? 'Ativar sons' : 'Desativar sons');
    muteBtn.innerHTML = muted ? SVG_MUTED : SVG_SOUND;
    if (muted) stopMusic(); else startMusic();
    if (!muted) sounds.clickUp();
  });
  document.body.appendChild(muteBtn);

  /* ── PAGE TRANSITION ── */
  (function () {
    var ov = document.getElementById('page-overlay');
    if (!ov) { ov = document.createElement('div'); ov.id = 'page-overlay'; document.body.prepend(ov); }
    requestAnimationFrame(function () { requestAnimationFrame(function () { ov.classList.add('hidden'); }); });
    document.querySelectorAll('a[href]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http') || href.startsWith('https')) return;
      link.addEventListener('click', function (e) {
        e.preventDefault(); var target = link.href;
        ov.classList.remove('hidden');
        setTimeout(function () { window.location.href = target; }, 420);
      });
    });
  })();

  /* ── CONTENT PROTECTION ── */
  (function () {
    function showToast() {
      var t = document.getElementById('protection-toast');
      if (!t) {
        t = document.createElement('div'); t.id = 'protection-toast';
        t.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);z-index:99999;background:#0f0f1a;border:1px solid ' + ACCENT_BORDER + ';border-radius:100px;padding:12px 24px;font-size:12px;font-weight:600;letter-spacing:1px;color:var(--accent);pointer-events:none;transition:opacity .3s;white-space:nowrap;';
        t.textContent = '© Conteúdo protegido — todos os direitos reservados';
        document.body.appendChild(t);
      }
      t.style.opacity = '1';
      clearTimeout(t._timer);
      t._timer = setTimeout(function () { t.style.opacity = '0'; }, 2500);
    }
    document.addEventListener('contextmenu', function (e) { showToast(); e.preventDefault(); return false; });
    document.addEventListener('keydown', function (e) {
      var ctrl = e.ctrlKey || e.metaKey;
      if (ctrl && 'uUsS'.includes(e.key)) { e.preventDefault(); showToast(); return false; }
      if (ctrl && e.shiftKey && 'iIjJcC'.includes(e.key)) { e.preventDefault(); showToast(); return false; }
      if (e.key === 'F12') { e.preventDefault(); showToast(); return false; }
    });
    document.addEventListener('dragstart', function (e) { if (e.target.tagName.toLowerCase() === 'img') e.preventDefault(); });
    setInterval(function () {
      var open = (window.outerWidth - window.innerWidth) > 160 || (window.outerHeight - window.innerHeight) > 160;
      var w = document.getElementById('devtools-warning');
      if (open && !w) {
        w = document.createElement('div'); w.id = 'devtools-warning';
        w.style.cssText = 'position:fixed;top:80px;right:24px;z-index:99999;background:#0f0f1a;border:1px solid rgba(201,168,76,0.25);border-radius:14px;padding:16px 20px;font-size:12px;color:#7070a0;max-width:260px;line-height:1.5;';
        w.innerHTML = '<span style="color:var(--accent);font-weight:700;display:block;margin-bottom:4px">⚠ Conteúdo Protegido</span>Este site é propriedade intelectual registrada.';
        document.body.appendChild(w);
      } else if (!open && w) { w.remove(); }
    }, 800);
  })();

  /* ── MENTOR PORTAL (genérico) ── */
  (function () {
    var SK  = 'mauth_' + MID;
    var NUM = CFG.numCourses || 3;

    function loadSavedTexts() {
      for (var i = 0; i < NUM; i++) {
        var ta = document.getElementById('ted-' + MID + '-' + i);
        var v  = localStorage.getItem('mtext_' + MID + '_' + i);
        if (ta && v) ta.value = v;
      }
    }
    window['mentorLogin_'   + MID] = function (e) {
      e.preventDefault();
      sessionStorage.setItem(SK, '1');
      document.getElementById('area-gate').style.display = 'none';
      var d = document.getElementById('area-dash');
      d.style.display = 'block'; d.classList.add('visible');
      loadSavedTexts(); return false;
    };
    window['mentorLogout_'  + MID] = function () {
      sessionStorage.removeItem(SK);
      var d = document.getElementById('area-dash');
      d.classList.remove('visible'); d.style.display = 'none';
      document.getElementById('area-gate').style.display = 'flex';
    };
    window['switchCourse_'  + MID] = function (idx) {
      document.querySelectorAll('#dash-tabs-' + MID + ' .dash-tab').forEach(function (t, i) { t.classList.toggle('active', i === idx); });
      document.querySelectorAll('[id^="panel-' + MID + '-"]').forEach(function (p, i) { p.classList.toggle('active', i === idx); });
    };
    window['loadVideo_'     + MID] = function (idx) {
      var inp = document.getElementById('vurl-' + MID + '-' + idx);
      if (!inp || !inp.value.trim()) return;
      var m = inp.value.trim().match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
      if (!m) { alert('URL do YouTube inválida'); return; }
      var em = document.getElementById('vem-' + MID + '-' + idx);
      var ph = document.getElementById('vph-' + MID + '-' + idx);
      em.innerHTML = '<iframe src="https://www.youtube.com/embed/' + m[1] + '?rel=0" allowfullscreen allow="autoplay; encrypted-media"></iframe>';
      em.style.display = 'block'; ph.style.display = 'none';
    };
    window['saveText_'      + MID] = function (idx) {
      var ta  = document.getElementById('ted-' + MID + '-' + idx);
      var msg = document.getElementById('tsaved-' + MID + '-' + idx);
      if (!ta) return;
      localStorage.setItem('mtext_' + MID + '_' + idx, ta.value);
      if (msg) { msg.style.display = 'inline'; setTimeout(function () { msg.style.display = 'none'; }, 2000); }
    };
    if (sessionStorage.getItem(SK)) {
      document.getElementById('area-gate').style.display = 'none';
      var d = document.getElementById('area-dash');
      if (d) { d.style.display = 'block'; d.classList.add('visible'); loadSavedTexts(); }
    }
  })();

  /* ── SCROLL PROGRESS BAR ── */
  (function () {
    var bar = document.getElementById('scroll-progress');
    if (!bar) return;
    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      bar.style.width = ((h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight) * 100) + '%';
    }, { passive: true });
  })();

  /* ── BACK TO TOP ── */
  (function () {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('visible', (document.documentElement.scrollTop || document.body.scrollTop) > 400);
    }, { passive: true });
  })();

})();
