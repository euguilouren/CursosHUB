<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>GitHub Profile — Preview</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,600;0,700;1,400&family=Syne:wght@700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}

:root{
  --bg:#0d1117;
  --surface:#161b22;
  --surface2:#1c2128;
  --border:#30363d;
  --border2:#21262d;
  --text:#c9d1d9;
  --muted:#8b949e;
  --heading:#f0f6fc;
  --blue:#58a6ff;
  --green:#3fb950;
  --purple:#bc8cff;
  --orange:#d29922;
  --red:#f85149;
}

body{
  background:var(--bg);
  color:var(--text);
  font-family:'JetBrains Mono',monospace;
  font-size:14px;
  line-height:1.6;
  min-height:100vh;
}

/* ── TOPBAR ── */
.topbar{
  background:var(--surface);
  border-bottom:1px solid var(--border);
  padding:0 24px;
  display:flex;
  align-items:stretch;
  justify-content:space-between;
  height:52px;
}
.topbar-left{display:flex;align-items:center;gap:20px}
.gh-logo{
  font-family:'Syne',sans-serif;
  font-size:18px;
  font-weight:800;
  color:var(--heading);
  letter-spacing:-0.5px;
}
.gh-logo span{color:var(--blue)}
.breadcrumb{font-size:13px;color:var(--muted)}
.breadcrumb .u{color:var(--blue)}
.breadcrumb .sep{color:var(--border);margin:0 6px}
.topbar-right{display:flex;align-items:center;font-size:12px;color:var(--muted)}

/* ── TABS ── */
.tabs{
  background:var(--surface);
  border-bottom:1px solid var(--border);
  display:flex;
  padding:0 24px;
  gap:4px;
}
.tab{
  padding:12px 18px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;
  color:var(--muted);
  cursor:pointer;
  border:none;
  background:none;
  border-bottom:2px solid transparent;
  position:relative;
  bottom:-1px;
  transition:color .15s;
}
.tab:hover{color:var(--heading)}
.tab.active{color:var(--heading);border-bottom-color:var(--orange)}

/* ── LAYOUT ── */
.container{max-width:1200px;margin:0 auto;padding:32px 24px}

.panel{display:none}
.panel.active{display:block}

.profile-grid{
  display:grid;
  grid-template-columns:268px 1fr;
  gap:32px;
}

/* ── SIDEBAR ── */
.avatar{
  width:240px;height:240px;
  border-radius:50%;
  background:linear-gradient(135deg,var(--surface2) 0%,#0d2137 100%);
  border:3px solid var(--border);
  display:flex;align-items:center;justify-content:center;
  font-size:90px;
  margin-bottom:16px;
  position:relative;
}
.avatar::after{
  content:'';position:absolute;inset:-3px;
  border-radius:50%;
  border:2px solid var(--blue);
  opacity:.25;
}
.pname{
  font-family:'Syne',sans-serif;
  font-size:22px;font-weight:800;
  color:var(--heading);margin-bottom:2px;
}
.pusername{font-size:17px;color:var(--muted);margin-bottom:12px}
.pbio{font-size:13px;line-height:1.55;margin-bottom:16px}

.follow-btn{
  width:100%;padding:7px;
  background:var(--surface2);
  border:1px solid var(--border);
  color:var(--heading);
  border-radius:6px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;cursor:pointer;
  margin-bottom:16px;
  transition:all .15s;
}
.follow-btn:hover{background:var(--blue);border-color:var(--blue)}

.divider{border:none;border-top:1px solid var(--border);margin:12px 0}

.meta-row{
  display:flex;align-items:center;
  gap:8px;font-size:13px;color:var(--text);
  margin-bottom:8px;
}
.meta-row .icon{color:var(--muted);width:16px;text-align:center}
.meta-link{color:var(--blue);text-decoration:none}

.stats-row{display:flex;gap:16px;font-size:13px}
.stats-row strong{color:var(--heading)}

/* ── README WRAPPER ── */
.readme-box{
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:6px;
  overflow:hidden;
}
.readme-topbar{
  background:var(--surface2);
  border-bottom:1px solid var(--border);
  padding:8px 16px;
  display:flex;justify-content:space-between;
  font-size:12px;color:var(--muted);
}
.readme-topbar strong{color:var(--text)}
.readme-body{padding:28px 36px}

/* ── TYPING HEADER ── */
.typing-section{text-align:center;margin-bottom:28px}
.typing-line{
  font-family:'Syne',sans-serif;
  font-size:30px;font-weight:800;
  color:var(--heading);
  display:inline;
}
.cursor{
  display:inline-block;width:3px;height:1.05em;
  background:var(--blue);
  margin-left:3px;
  vertical-align:text-bottom;
  animation:blink 1s step-end infinite;
}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}

.pill-row{
  display:flex;flex-wrap:wrap;justify-content:center;
  gap:8px;margin-top:14px;
}

/* ── SECTION TITLE ── */
.section-title{
  font-family:'Syne',sans-serif;
  font-size:17px;font-weight:800;
  color:var(--heading);
  margin:28px 0 14px;
  padding-bottom:8px;
  border-bottom:1px solid var(--border);
  display:flex;align-items:center;gap:8px;
}

/* ── BADGES ── */
.badge{
  display:inline-flex;align-items:center;gap:5px;
  padding:4px 11px;border-radius:4px;
  font-size:12px;font-weight:600;letter-spacing:.2px;
}
.badge-row{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:6px}
.cat-label{
  font-size:11px;color:var(--muted);
  text-transform:uppercase;letter-spacing:1px;
  margin-top:12px;margin-bottom:7px;
}

/* Language badges */
.b-py{background:#3776ab1a;color:#5b9bd5;border:1px solid #3776ab33}
.b-ts{background:#3178c61a;color:#4b91f7;border:1px solid #3178c633}
.b-js{background:#f7df1e1a;color:#d4b700;border:1px solid #f7df1e33}
.b-go{background:#00add81a;color:#1bbfe0;border:1px solid #00add833}
.b-rs{background:#ce412b1a;color:#e8694f;border:1px solid #ce412b33}
.b-ja{background:#ed8b001a;color:#f09b1a;border:1px solid #ed8b0033}
.b-kt{background:#7f52ff1a;color:#a97dff;border:1px solid #7f52ff33}
.b-c {background:#a8b9cc1a;color:#9bafc7;border:1px solid #a8b9cc33}
.b-cp{background:#00599c1a;color:#4c8bbf;border:1px solid #00599c33}
.b-dk{background:#2496ed1a;color:#3aabf5;border:1px solid #2496ed33}
.b-k8{background:#326ce51a;color:#5b89e8;border:1px solid #326ce533}
.b-pg{background:#3367911a;color:#7aadcf;border:1px solid #33679133}
.b-rd{background:#dc382d1a;color:#e26555;border:1px solid #dc382d33}
.b-lx{background:#fcc6241a;color:#fcc624;border:1px solid #fcc62433}
.b-gt{background:#f050241a;color:#f46039;border:1px solid #f0502433}
.b-gr{background:#3fb9501a;color:#3fb950;border:1px solid #3fb95033}
.b-bl{background:#58a6ff1a;color:#58a6ff;border:1px solid #58a6ff33}
.b-pu{background:#bc8cff1a;color:#bc8cff;border:1px solid #bc8cff33}

/* ── STATS GRID ── */
.stats-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;margin:14px 0;
}
.stat-card{
  background:var(--bg);
  border:1px solid var(--border);
  border-radius:8px;
  padding:18px;
}
.stat-card-title{
  font-size:11px;color:var(--muted);
  text-transform:uppercase;letter-spacing:1px;
  margin-bottom:12px;
}
.stat-row{display:flex;gap:24px}
.stat-val{
  font-family:'Syne',sans-serif;
  font-size:26px;font-weight:800;
}
.stat-sub{font-size:11px;color:var(--muted)}

.streak-card{
  background:var(--bg);border:1px solid var(--border);
  border-radius:8px;padding:18px;
  grid-column:1/-1;
  display:flex;justify-content:space-evenly;align-items:center;
}
.sk-item{text-align:center}
.sk-val{
  font-family:'Syne',sans-serif;
  font-size:34px;font-weight:800;color:var(--orange);
}
.sk-lbl{font-size:12px;color:var(--text);margin:2px 0}
.sk-sub{font-size:11px;color:var(--muted)}
.sk-div{width:1px;height:50px;background:var(--border)}

/* Lang bars */
.lang-bars{display:flex;flex-direction:column;gap:7px}
.lang-row{display:flex;justify-content:space-between;font-size:12px;margin-bottom:2px}
.bar-track{height:4px;background:var(--surface2);border-radius:2px}
.bar-fill{height:100%;border-radius:2px}

/* Contrib */
.contrib-card{
  background:var(--bg);border:1px solid var(--border);
  border-radius:8px;padding:16px;margin-top:10px;
}
.contrib-grid{
  display:grid;
  grid-template-columns:repeat(53,1fr);
  gap:2px;margin-top:8px;
}
.cc{aspect-ratio:1;border-radius:2px;background:var(--surface2)}
.cc.l1{background:#0e4429}
.cc.l2{background:#006d32}
.cc.l3{background:#26a641}
.cc.l4{background:#39d353}

/* ── PROJECTS ── */
.project-grid{
  display:grid;grid-template-columns:1fr 1fr;
  gap:10px;margin:14px 0;
}
.proj-card{
  background:var(--bg);border:1px solid var(--border);
  border-radius:8px;padding:16px;
  transition:border-color .2s,background .2s;
  cursor:default;
}
.proj-card:hover{border-color:var(--blue);background:var(--surface2)}
.proj-icon{font-size:18px;margin-bottom:8px}
.proj-name{color:var(--blue);font-size:14px;font-weight:700;margin-bottom:6px}
.proj-desc{font-size:12px;color:var(--muted);line-height:1.55;margin-bottom:10px}
.proj-meta{display:flex;gap:12px;font-size:11px;color:var(--muted)}
.lang-dot-row{display:flex;align-items:center;gap:4px}
.ldot{width:8px;height:8px;border-radius:50%}

/* ── CONTACT ── */
.contact-row{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
.contact-link{
  display:inline-flex;align-items:center;gap:7px;
  padding:8px 15px;
  background:var(--bg);border:1px solid var(--border);
  border-radius:6px;color:var(--text);
  font-size:13px;text-decoration:none;
  transition:all .15s;
}
.contact-link:hover{border-color:var(--blue);color:var(--blue)}

/* About */
.about-p{font-size:14px;line-height:1.75;margin-bottom:10px}

/* Quote */
.quote-footer{
  text-align:center;
  margin-top:32px;padding-top:20px;
  border-top:1px solid var(--border);
  font-size:12px;color:var(--muted);
  font-style:italic;
}

/* ── SOURCE PANEL ── */
.source-wrap{max-width:900px;margin:0 auto}
.source-head{
  display:flex;justify-content:space-between;align-items:center;
  margin-bottom:16px;
}
.source-head h2{
  font-family:'Syne',sans-serif;
  font-size:17px;font-weight:800;color:var(--heading);
}
.copy-btn{
  padding:8px 18px;
  background:var(--blue);border:none;
  color:#fff;border-radius:6px;
  font-family:'JetBrains Mono',monospace;
  font-size:13px;cursor:pointer;
  transition:opacity .15s;
}
.copy-btn:hover{opacity:.85}
.copy-btn.ok{background:var(--green)}

textarea.src{
  width:100%;height:620px;
  background:var(--surface);
  border:1px solid var(--border);
  border-radius:6px;
  padding:18px;
  color:var(--text);
  font-family:'JetBrains Mono',monospace;
  font-size:12px;line-height:1.65;
  resize:vertical;outline:none;
}
.src-note{
  margin-top:12px;font-size:12px;color:var(--muted);line-height:1.7;
}
.src-note code{
  background:var(--surface2);padding:1px 6px;
  border-radius:3px;color:var(--orange);
}

/* profile views badge in readme */
.pv-wrap{text-align:center;margin:10px 0 18px}
</style>
</head>
<body>

<!-- TOPBAR -->
<div class="topbar">
  <div class="topbar-left">
    <div class="gh-logo">git<span>hub</span></div>
    <div class="breadcrumb">
      <span class="u">SEU-USUARIO</span>
      <span class="sep">/</span>
      <span class="u">SEU-USUARIO</span>
    </div>
  </div>
  <div class="topbar-right">📋 Profile README Preview</div>
</div>

<!-- TABS -->
<div class="tabs">
  <button class="tab active" onclick="switchTab('preview',this)">👁 Preview</button>
  <button class="tab" onclick="switchTab('source',this)">📄 README.md</button>
</div>

<div class="container">

  <!-- ============================================================ PREVIEW -->
  <div id="panel-preview" class="panel active">
    <div class="profile-grid">

      <!-- SIDEBAR -->
      <div>
        <div class="avatar">🧑‍💻</div>
        <div class="pname">Seu Nome</div>
        <div class="pusername">SEU-USUARIO</div>
        <div class="pbio">Software Engineer · Distributed Systems · Open Source · Builder of things that scale.</div>
        <button class="follow-btn">Follow</button>
        <hr class="divider">
        <div class="meta-row"><span class="icon">🏢</span> @sua-empresa</div>
        <div class="meta-row"><span class="icon">📍</span> Brasil</div>
        <div class="meta-row"><span class="icon">🔗</span> <a class="meta-link" href="#">seu-site.dev</a></div>
        <div class="meta-row"><span class="icon">💬</span> @seu-usuario</div>
        <hr class="divider">
        <div class="stats-row">
          <div><strong>248</strong> <span style="color:var(--muted)">following</span></div>
          <div><strong>1.2k</strong> <span style="color:var(--muted)">followers</span></div>
        </div>
      </div>

      <!-- README BODY -->
      <div>
        <div class="readme-box">
          <div class="readme-topbar">
            <div><strong>README.md</strong></div>
            <div>✏️ Edit</div>
          </div>
          <div class="readme-body">

            <!-- TYPING -->
            <div class="typing-section">
              <div><span class="typing-line" id="typer">Hi, I'm Luan</span><span class="cursor"></span></div>
              <div class="pv-wrap">
                <span class="badge b-bl" style="font-size:11px">👁 Profile Views · 1.2k</span>
              </div>
              <div class="pill-row">
                <span class="badge b-gr">🚀 Open to Collaborate</span>
                <span class="badge b-bl">⚡ Backend · Distributed Systems</span>
                <span class="badge b-pu">🌍 Based in Brazil</span>
              </div>
            </div>

            <!-- ABOUT -->
            <div class="section-title">🧑‍💻 About Me</div>
            <p class="about-p">
              Software engineer focused on <strong style="color:var(--blue)">distributed systems, backend architecture</strong> and performance-critical applications.
              I build things that have to work at 3AM under double the load. Passionate about open source and systems design.
            </p>
            <p class="about-p" style="margin-top:0">
              Currently deep into <strong style="color:var(--green)">Rust + Go for infrastructure</strong>, Python/TypeScript for everything else.
              Correctness first, clarity second, efficiency third.
            </p>

            <!-- STACK -->
            <div class="section-title">🛠️ Tech Stack</div>

            <div class="cat-label">Languages</div>
            <div class="badge-row">
              <span class="badge b-py">🐍 Python</span>
              <span class="badge b-ts">TS TypeScript</span>
              <span class="badge b-js">JS JavaScript</span>
              <span class="badge b-go">Go</span>
              <span class="badge b-rs">🦀 Rust</span>
              <span class="badge b-ja">☕ Java</span>
              <span class="badge b-kt">K Kotlin</span>
              <span class="badge b-c">C</span>
              <span class="badge b-cp">C++</span>
            </div>

            <div class="cat-label">Infrastructure &amp; Tools</div>
            <div class="badge-row">
              <span class="badge b-dk">🐳 Docker</span>
              <span class="badge b-k8">⎈ Kubernetes</span>
              <span class="badge b-pg">🐘 PostgreSQL</span>
              <span class="badge b-rd">Redis</span>
              <span class="badge b-lx">🐧 Linux</span>
              <span class="badge b-gt">Git</span>
            </div>

            <!-- STATS -->
            <div class="section-title">📊 GitHub Stats</div>
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-card-title">Activity</div>
                <div class="stat-row">
                  <div>
                    <div class="stat-val" style="color:var(--blue)">1.2k</div>
                    <div class="stat-sub">commits/year</div>
                  </div>
                  <div>
                    <div class="stat-val" style="color:var(--purple)">48</div>
                    <div class="stat-sub">PRs merged</div>
                  </div>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-card-title">Top Languages</div>
                <div class="lang-bars">
                  <div>
                    <div class="lang-row"><span style="color:#5b9bd5">Python</span><span style="color:var(--muted)">38%</span></div>
                    <div class="bar-track"><div class="bar-fill" style="width:38%;background:#5b9bd5"></div></div>
                  </div>
                  <div>
                    <div class="lang-row"><span style="color:#4b91f7">TypeScript</span><span style="color:var(--muted)">25%</span></div>
                    <div class="bar-track"><div class="bar-fill" style="width:25%;background:#4b91f7"></div></div>
                  </div>
                  <div>
                    <div class="lang-row"><span style="color:#1bbfe0">Go</span><span style="color:var(--muted)">20%</span></div>
                    <div class="bar-track"><div class="bar-fill" style="width:20%;background:#1bbfe0"></div></div>
                  </div>
                  <div>
                    <div class="lang-row"><span style="color:#e8694f">Rust</span><span style="color:var(--muted)">12%</span></div>
                    <div class="bar-track"><div class="bar-fill" style="width:12%;background:#e8694f"></div></div>
                  </div>
                </div>
              </div>

              <div class="streak-card">
                <div class="sk-item">
                  <div class="sk-val">47</div>
                  <div class="sk-lbl">Total Stars</div>
                  <div class="sk-sub">across repos</div>
                </div>
                <div class="sk-div"></div>
                <div class="sk-item">
                  <div class="sk-val" style="color:var(--green)">21</div>
                  <div class="sk-lbl">Current Streak</div>
                  <div class="sk-sub">days</div>
                </div>
                <div class="sk-div"></div>
                <div class="sk-item">
                  <div class="sk-val" style="color:var(--blue)">89</div>
                  <div class="sk-lbl">Longest Streak</div>
                  <div class="sk-sub">days</div>
                </div>
              </div>
            </div>

            <div class="contrib-card">
              <div class="stat-card-title">Contribution Activity — last 12 months</div>
              <div class="contrib-grid" id="cgrid"></div>
            </div>

            <!-- PROJECTS -->
            <div class="section-title">🚀 Featured Projects</div>
            <div class="project-grid">
              <div class="proj-card">
                <div class="proj-icon">⚡</div>
                <div class="proj-name">event-engine</div>
                <div class="proj-desc">High-throughput event processor. 100k events/sec with sub-ms P99 latency using Rust async runtime.</div>
                <div class="proj-meta">
                  <div class="lang-dot-row"><div class="ldot" style="background:#e8694f"></div>Rust</div>
                  <span>⭐ 24</span><span>🍴 8</span>
                </div>
              </div>
              <div class="proj-card">
                <div class="proj-icon">🔧</div>
                <div class="proj-name">infra-toolkit</div>
                <div class="proj-desc">CLI for Kubernetes ops. Multi-cluster diff, drift detection, automated rollback triggers.</div>
                <div class="proj-meta">
                  <div class="lang-dot-row"><div class="ldot" style="background:#1bbfe0"></div>Go</div>
                  <span>⭐ 18</span><span>🍴 5</span>
                </div>
              </div>
              <div class="proj-card">
                <div class="proj-icon">🐍</div>
                <div class="proj-name">data-pipeline</div>
                <div class="proj-desc">Modular ETL on Kafka. Declarative config, dead-letter queue, observability built-in.</div>
                <div class="proj-meta">
                  <div class="lang-dot-row"><div class="ldot" style="background:#5b9bd5"></div>Python</div>
                  <span>⭐ 31</span><span>🍴 12</span>
                </div>
              </div>
              <div class="proj-card">
                <div class="proj-icon">📡</div>
                <div class="proj-name">grpc-gateway</div>
                <div class="proj-desc">Typed gRPC↔REST gateway with automatic OpenAPI generation. Protocol-buffer first.</div>
                <div class="proj-meta">
                  <div class="lang-dot-row"><div class="ldot" style="background:#4b91f7"></div>TypeScript</div>
                  <span>⭐ 15</span><span>🍴 3</span>
                </div>
              </div>
            </div>

            <!-- CONTACT -->
            <div class="section-title">📫 Contact</div>
            <div class="contact-row">
              <a class="contact-link" href="#">💼 LinkedIn</a>
              <a class="contact-link" href="#">🐦 Twitter / X</a>
              <a class="contact-link" href="#">📧 Email</a>
              <a class="contact-link" href="#">🌐 Website</a>
              <a class="contact-link" href="#">💬 Discord</a>
            </div>

            <div class="quote-footer">
              ⚡ <em>"Correctness is non-negotiable. Everything else is a trade-off."</em>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div><!-- /panel-preview -->

  <!-- ============================================================ SOURCE -->
  <div id="panel-source" class="panel">
    <div class="source-wrap">
      <div class="source-head">
        <h2>README.md — copie e cole no seu repositório</h2>
        <button class="copy-btn" id="cbtn" onclick="copyMe()">📋 Copiar tudo</button>
      </div>
      <textarea class="src" id="src" readonly></textarea>
      <div class="src-note">
        <strong>Como ativar o profile README:</strong><br>
        1. Crie um repositório público com o mesmo nome do seu username: <code>github.com/SEU-USUARIO/SEU-USUARIO</code><br>
        2. Adicione o arquivo <code>README.md</code> com o conteúdo acima.<br>
        3. Substitua todos os <code>SEU-USUARIO</code> pelo seu username real.<br>
        4. Personalize: nome, bio, lista de projetos, links de contato.<br>
        5. Os cards de stats e streak são servidos por APIs externas (github-readme-stats) — funcionam automaticamente.
      </div>
    </div>
  </div>

</div>

<script>
/* ── TAB SWITCH ── */
function switchTab(name, btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
}

/* ── TYPING ANIMATION ── */
const lines = [
  "Hi, I'm Luan 👋",
  "Software Engineer",
  "Distributed Systems",
  "Rust · Go · Python · TS",
  "Always shipping ⚡"
];
let li = 0, ci = 0, del = false;
const el = document.getElementById('typer');
function tick() {
  const s = lines[li];
  if (!del) {
    ci++;
    el.textContent = s.slice(0, ci);
    if (ci === s.length) { del = true; setTimeout(tick, 2000); return; }
  } else {
    ci--;
    el.textContent = s.slice(0, ci);
    if (ci === 0) { del = false; li = (li + 1) % lines.length; }
  }
  setTimeout(tick, del ? 38 : 82);
}
tick();

/* ── CONTRIB GRAPH ── */
(function(){
  const g = document.getElementById('cgrid');
  // seed-ish pattern for realistic look
  for (let i = 0; i < 53 * 7; i++) {
    const d = document.createElement('div');
    d.className = 'cc';
    const r = Math.random();
    if (r > 0.72) d.classList.add(['l1','l2','l3','l4'][Math.floor(Math.random()*4)]);
    g.appendChild(d);
  }
})();

/* ── README SOURCE ── */
const README = `<div align="center">

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=26&pause=1000&color=58A6FF&center=true&vCenter=true&random=false&width=620&lines=Hi%2C+I'm+SEU-NOME+%F0%9F%91%8B;Software+Engineer;Distributed+Systems+%7C+Backend;Rust+%C2%B7+Go+%C2%B7+Python+%C2%B7+TypeScript;Always+shipping+%E2%9A%A1)](https://git.io/typing-svg)

<img src="https://komarev.com/ghpvc/?username=SEU-USUARIO&label=Profile+Views&color=58a6ff&style=flat" />

![Open to Collaborate](https://img.shields.io/badge/Open_to-Collaborate-3fb950?style=flat&logo=github)
![Focus](https://img.shields.io/badge/Focus-Backend_%7C_Distributed_Systems-58a6ff?style=flat)
![Brazil](https://img.shields.io/badge/Based_in-Brazil-green?style=flat)

</div>

---

## 🧑‍💻 About Me

Software engineer focused on **distributed systems, backend architecture** and performance-critical applications.
I build things that have to work at 3AM under double the load.

Currently deep into **Rust + Go for infrastructure**, Python/TypeScript for everything else.
Correctness first, clarity second, efficiency third.

---

## 🛠️ Tech Stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)
![Rust](https://img.shields.io/badge/Rust-CE412B?style=flat&logo=rust&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat&logo=kotlin&logoColor=white)
![C](https://img.shields.io/badge/C-A8B9CC?style=flat&logo=c&logoColor=black)
![C++](https://img.shields.io/badge/C++-00599C?style=flat&logo=cplusplus&logoColor=white)

**Infrastructure & Tools**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat&logo=kubernetes&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)

---

## 📊 GitHub Stats

<div align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=SEU-USUARIO&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true&count_private=true" />
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SEU-USUARIO&layout=compact&theme=github_dark&hide_border=true&langs_count=8" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=SEU-USUARIO&theme=github-dark-blue&hide_border=true" />
</div>

---

## 🚀 Featured Projects

<div align="center">
  <a href="https://github.com/SEU-USUARIO/REPO-1">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=SEU-USUARIO&repo=REPO-1&theme=github_dark&hide_border=true" />
  </a>
  <a href="https://github.com/SEU-USUARIO/REPO-2">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=SEU-USUARIO&repo=REPO-2&theme=github_dark&hide_border=true" />
  </a>
  <a href="https://github.com/SEU-USUARIO/REPO-3">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=SEU-USUARIO&repo=REPO-3&theme=github_dark&hide_border=true" />
  </a>
  <a href="https://github.com/SEU-USUARIO/REPO-4">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username=SEU-USUARIO&repo=REPO-4&theme=github_dark&hide_border=true" />
  </a>
</div>

---

## 📫 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/SEU-USUARIO)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SEU-USUARIO)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:SEU-EMAIL@email.com)
[![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://seu-site.dev)

</div>

---

<div align="center">
  <em>⚡ "Correctness is non-negotiable. Everything else is a trade-off."</em>
</div>`;

document.getElementById('src').value = README;

function copyMe() {
  navigator.clipboard.writeText(README).then(() => {
    const b = document.getElementById('cbtn');
    b.textContent = '✅ Copiado!';
    b.classList.add('ok');
    setTimeout(() => { b.textContent = '📋 Copiar tudo'; b.classList.remove('ok'); }, 2200);
  });
}
</script>
</body>
</html>
