(function () {
  "use strict";
  var C = window.COURSE;
  var LS = { lang: "noor-ent-lang", done: "noor-ent-done" };

  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  var lang = load(LS.lang, "ar");
  if (lang !== "ar" && lang !== "en") lang = "ar";
  var done = load(LS.done, {});

  var T = {
    ar: {
      home: "الرئيسية", lectures: "المحاضرات", capstone: "المشروع الختامي", printSum: "طباعة الملخص", toggle: "English",
      menu: "القائمة", freeCourse: "كورس مجاني · Free Course", start: "ابدأ المحاضرة الأولى", continueLbl: "أكمل من حيث توقفت", viewCap: "المشروع الختامي",
      lecturesN: "محاضرة", hoursN: "ساعة تعلّم (تقدير)", partsN: "أجزاء", capN: "مشروع ختامي",
      yourProgress: "تقدّمك", of: "من", byInstructor: "إعداد وتدريس",
      methodH: "كيف ندرس كل محاضرة؟", methodSub: "لكل محاضرة أربع خطوات ثابتة، حتى تبقى الطريقة واضحة من أول درس إلى آخر درس.",
      m1: "ملخص مبسّط بالعربي", m1d: "ترجمة وتلخيص دقيق لأفكار المصدر العالمي بلغة عربية مبسّطة.",
      m2: "شرح بالعراقي", m2d: "نفس الأفكار بأسلوب قريب وأمثلة من حياتنا حتى تتثبّت بالذهن.",
      m3: "English summary", m3d: "ملخص إنكليزي قصير للمراجعة والامتحانات وتعلّم المصطلحات.",
      m4: "مثال وتطبيق", m4d: "مثال عملي، ثم نشاط تنتج منه صفحة تدخل في مشروعك الختامي.",
      curriculumH: "المنهج", curriculumSub: "ست أجزاء واثنتا عشرة محاضرة، من الفكرة إلى الانطلاق.",
      part: "الجزء", hrs: "ساعتان", srcs: "مصادر", done: "منجزة",
      capH: "المشروع الختامي", capSub: "كل ما تتعلمه يتحول إلى خطة مشروع حقيقية.", openCap: "افتح تفاصيل المشروع",
      sources: "المصادر الأصلية", sourcesSub: "شاهد أو اقرأ المصدر أولاً، ثم ارجع للشرح.",
      objectives: "ماذا ستتعلم", step: "الخطوة", s1: "ملخص المصدر بالعربي", s1d: "ترجمة مبسّطة لأفكار المصدر الأصلي",
      s2: "الشرح بالعراقي", s2d: "نفس الأفكار بأسلوب قريب، مع أمثلة",
      s3: "English summary", s3d: "For revision and exams",
      s4: "مثال تطبيقي", s4d: "كيف تبدو الأفكار على مشروع حقيقي",
      terms: "مصطلحات المحاضرة", term: "المصطلح", meaning: "المعنى",
      activity: "النشاط العملي", deliverable: "الناتج المطلوب للمشروع الختامي",
      quiz: "أسئلة مراجعة", quizSub: "حاول أن تجيب في ذهنك قبل فتح الجواب.",
      pdf: "تحميل PDF", mark: "علّمها كمنجزة", marked: "تمّ إنجازها",
      prev: "المحاضرة السابقة", next: "المحاضرة التالية", toCap: "المشروع الختامي",
      ilm: "ساعتان", typeVideo: "فيديو", typeSlides: "شرائح", typeCourse: "كورس", typeReading: "قراءة",
      deliverables: "ناتج كل محاضرة", rubric: "معيار التقييم المقترح", total: "المجموع", capPdf: "تحميل قالب المشروع (PDF)",
      capSteps: "خطوات التسليم", cs1: "أنجز نشاط كل محاضرة واحتفظ بصفحته.", cs2: "اجمع الصفحات الاثنتي عشرة في وثيقة واحدة بالترتيب.", cs3: "حوّل الخلاصة إلى عرض من 7 شرائح لمدة 10 دقائق.", cs4: "قدّم العرض أمام زملاء واطلب ملاحظاتهم قبل التسليم.",
      footNote: "المحتوى بالعربي مع المصطلحات الإنكليزية.", back: "الصفحة الرئيسية", printTitle: "ملخّص الكورس للمراجعة", printSub: "أهداف كل محاضرة، الخلاصة بالإنكليزي، والمصطلحات.",
      objectivesPrint: "الأهداف", termsPrint: "المصطلحات"
    },
    en: {
      home: "Home", lectures: "Lectures", capstone: "Capstone", printSum: "Print summary", toggle: "عربي",
      menu: "Menu", freeCourse: "Free Course · كورس مجاني", start: "Start Lecture 1", continueLbl: "Continue where you left off", viewCap: "Capstone project",
      lecturesN: "lectures", hoursN: "learning hours (estimate)", partsN: "parts", capN: "capstone project",
      yourProgress: "Your progress", of: "of", byInstructor: "Created and taught by",
      methodH: "How each lecture works", methodSub: "Every lecture follows the same four steps, so the method stays clear from the first lesson to the last.",
      m1: "Simplified Arabic summary", m1d: "An accurate, simplified rendering of the global source (Arabic mode).",
      m2: "Iraqi-dialect explanation", m2d: "The same ideas in a familiar voice with local examples (Arabic mode).",
      m3: "English summary", m3d: "A short summary for revision, exams and terminology.",
      m4: "Example and practice", m4d: "A worked example, then an activity that produces one page for your capstone.",
      curriculumH: "Curriculum", curriculumSub: "Six parts, twelve lectures, from idea to launch.",
      part: "Part", hrs: "2 hours", srcs: "sources", done: "done",
      capH: "Capstone project", capSub: "Everything you learn becomes a real venture plan.", openCap: "Open project details",
      sources: "Original sources", sourcesSub: "Watch or read the source first, then come back for the explanation.",
      objectives: "What you will learn", step: "Step", s1: "Summary", s1d: "The key ideas, distilled",
      s2: "Worked example", s2d: "How the ideas look on a real venture",
      s3: "", s3d: "", s4: "", s4d: "",
      terms: "Key terms", term: "Term", meaning: "Arabic",
      activity: "Practice activity", deliverable: "Deliverable for the capstone",
      quiz: "Self-check questions", quizSub: "Try answering in your head before opening the answer.",
      pdf: "Download PDF", mark: "Mark as done", marked: "Completed",
      prev: "Previous lecture", next: "Next lecture", toCap: "Capstone project",
      ilm: "2 hours", typeVideo: "Video", typeSlides: "Slides", typeCourse: "Course", typeReading: "Reading",
      deliverables: "Deliverable from each lecture", rubric: "Suggested grading rubric", total: "Total", capPdf: "Download project template (PDF)",
      capSteps: "How to submit", cs1: "Complete each lecture's activity and keep its page.", cs2: "Combine the twelve pages into one document, in order.", cs3: "Turn the essentials into a seven-slide, ten-minute pitch.", cs4: "Present to peers and collect feedback before submitting.",
      footNote: "Arabic with English terminology.", back: "Home", printTitle: "Course summary for revision", printSub: "Objectives, English summary and key terms for every lecture.",
      objectivesPrint: "Objectives", termsPrint: "Terms",
      iraqiNote: "The detailed Iraqi-dialect explanation of this lecture is available in Arabic mode (use the language button)."
    }
  };
  function t(k) { return (T[lang] && T[lang][k]) || T.ar[k] || k; }
  function L(o) { return (o && (o[lang] || o.ar || o.en)) || ""; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function typeLabel(x) { return { video: t("typeVideo"), slides: t("typeSlides"), course: t("typeCourse"), reading: t("typeReading") }[x] || x; }
  function typeIcon(x) { return { video: "▶", slides: "▤", course: "◆", reading: "≡" }[x] || "•"; }
  function lecById(n) { for (var i = 0; i < C.lectures.length; i++) if (C.lectures[i].id === n) return C.lectures[i]; return null; }
  function doneCount() { var n = 0; C.lectures.forEach(function (l) { if (done[l.id]) n++; }); return n; }
  function nextUndone() { for (var i = 0; i < C.lectures.length; i++) if (!done[C.lectures[i].id]) return C.lectures[i]; return null; }
  function totalHours() { return C.lectures.reduce(function (a, l) { return a + (l.hours || 2); }, 0); }

  var app = document.getElementById("app");
  var menuPanel = document.getElementById("menu-panel");

  /* ---------- header + footer text ---------- */
  function renderChrome() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = L(C.course.title) + " | Noor Muhannad";
    document.getElementById("bt-title").textContent = L(C.course.title);
    document.getElementById("bt-sub").textContent = "Noor Muhannad Ahmed";
    document.getElementById("lang-btn").textContent = t("toggle");
    document.getElementById("lang-btn").setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
    document.getElementById("print-lbl").textContent = t("printSum");
    document.getElementById("menu-lbl").textContent = t("menu");
    document.getElementById("foot-note").textContent = L(C.attribution);
    document.getElementById("foot-lang").textContent = t("footNote");
    var links = '<div class="wrap"><div class="menu-cols"><div>' +
      '<a href="#/"><span class="n">⌂</span>' + esc(t("home")) + '</a>' +
      '<a href="#/lectures"><span class="n">≡</span>' + esc(t("lectures")) + '</a>' +
      '<a href="#/capstone"><span class="n">★</span>' + esc(t("capstone")) + '</a></div><div>' +
      C.lectures.map(function (l) { return '<a href="#/lecture/' + l.id + '"><span class="n ltr">' + pad(l.id) + '</span>' + esc(L(l.title)) + '</a>'; }).join("") +
      '</div></div></div>';
    menuPanel.innerHTML = links;
  }

  /* ---------- views ---------- */
  function progressBlock() {
    var n = doneCount(), tot = C.lectures.length, pct = Math.round(n * 100 / tot);
    return '<div class="progress-line" aria-live="polite"><div class="row"><span>' + esc(t("yourProgress")) + '</span><span class="ltr">' + n + ' / ' + tot + ' · ' + pct + '%</span></div>' +
      '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"><i style="width:' + pct + '%"></i></div></div>';
  }

  function viewHome() {
    var nu = nextUndone();
    var startHref = nu ? "#/lecture/" + nu.id : "#/capstone";
    var startLbl = doneCount() > 0 && nu ? t("continueLbl") : t("start");
    var h = '<section class="hero"><div class="wrap">' +
      '<div class="eyebrow">' + esc(t("freeCourse")) + '</div>' +
      '<h1>' + esc(L(C.course.title)) + '</h1>' +
      '<p class="tag">' + esc(L(C.course.tagline)) + '</p>' +
      '<p class="lead">' + esc(L(C.course.lead)) + '</p>' +
      '<p class="byline">' + esc(t("byInstructor")) + ' <b class="ltr">' + esc(C.course.instructor) + '</b></p>' +
      '<div class="cta-row"><a class="btn primary" href="' + startHref + '">' + esc(startLbl) + '</a><a class="btn" href="#/capstone">' + esc(t("viewCap")) + '</a></div>' +
      '<div class="stats"><div><b>' + C.lectures.length + '</b><span>' + esc(t("lecturesN")) + '</span></div>' +
      '<div><b class="ltr">≈' + totalHours() + '</b><span>' + esc(t("hoursN")) + '</span></div>' +
      '<div><b>' + C.parts.length + '</b><span>' + esc(t("partsN")) + '</span></div>' +
      '<div><b>1</b><span>' + esc(t("capN")) + '</span></div></div>' +
      progressBlock() + '</div></section>';

    h += '<section class="block"><div class="wrap"><h2 class="h2">' + esc(t("methodH")) + '</h2><p class="sub">' + esc(t("methodSub")) + '</p><div class="method">' +
      [1, 2, 3, 4].map(function (i) { return '<div><div class="k">' + i + '</div><h3>' + esc(t("m" + i)) + '</h3><p>' + esc(t("m" + i + "d")) + '</p></div>'; }).join("") +
      '</div></div></section>';

    h += '<section class="block" id="lectures"><div class="wrap"><h2 class="h2">' + esc(t("curriculumH")) + '</h2><p class="sub">' + esc(t("curriculumSub")) + '</p>';
    C.parts.forEach(function (p) {
      var ls = C.lectures.filter(function (l) { return l.part === p.id; });
      h += '<div class="part"><div class="part-title"><div class="pn">' + esc(t("part")) + ' ' + p.id + '</div><h3>' + esc(L(p.title)) + '</h3><p>' + esc(L(p.blurb)) + '</p></div><ul class="lec-list">';
      ls.forEach(function (l) {
        h += '<li><a class="lec' + (done[l.id] ? " done" : "") + '" href="#/lecture/' + l.id + '"><span class="no">' + pad(l.id) + '</span><span><span class="t">' + esc(L(l.title)) + '</span><div class="m">' + esc(t("hrs")) + ' · ' + l.sources.length + ' ' + esc(t("srcs")) + '</div></span><span class="st" aria-label="' + esc(done[l.id] ? t("done") : "") + '">✓</span></a></li>';
      });
      h += '</ul></div>';
    });
    h += '</div></section>';

    h += '<section class="block"><div class="wrap"><div class="capstone-card"><div class="eyebrow" style="color:#F0DEC0">Capstone</div><h3>' + esc(L(C.capstone.title)) + '</h3><p>' + esc(L(C.capstone.intro)) + '</p><a class="btn" href="#/capstone">' + esc(t("openCap")) + '</a></div></div></section>';
    return h;
  }

  function viewLecture(n) {
    var l = lecById(n);
    if (!l) return viewHome();
    var idx = C.lectures.indexOf(l);
    var prev = C.lectures[idx - 1], next = C.lectures[idx + 1];
    var part = C.parts.filter(function (p) { return p.id === l.part; })[0];
    var isDone = !!done[l.id];
    var h = '<div class="wrap"><nav class="crumbs" aria-label="breadcrumb"><a href="#/">' + esc(t("back")) + '</a><span>/</span><span>' + esc(t("part")) + ' ' + part.id + ' · ' + esc(L(part.title)) + '</span></nav>';
    h += '<header class="lec-head"><div class="kicker">' + (lang === "ar" ? "المحاضرة " : "Lecture ") + pad(l.id) + '</div><h1 id="lec-title" tabindex="-1">' + esc(L(l.title)) + '</h1>' +
      '<div class="lec-tools"><span class="chip gold">' + esc(t("hrs")) + '</span>' +
      '<a class="btn primary" href="pdf/lecture-' + pad(l.id) + '.pdf" target="_blank" rel="noopener">⬇ ' + esc(t("pdf")) + '</a>' +
      '<button class="btn" id="mark-btn" aria-pressed="' + isDone + '">' + (isDone ? "✓ " + esc(t("marked")) : esc(t("mark"))) + '</button></div></header>';

    h += '<div class="lec-body">';
    // sources
    h += '<section class="sec"><h2>' + esc(t("sources")) + '</h2><p class="sub" style="margin-bottom:14px;color:var(--muted)">' + esc(t("sourcesSub")) + '</p><ul class="src">' +
      l.sources.map(function (s) {
        return '<li><span class="ic" aria-hidden="true">' + typeIcon(s.type) + '</span><div><a class="ltr" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.name) + '</a> <span class="chip">' + esc(typeLabel(s.type)) + '</span><div class="nt">' + esc(L(s.note)) + '</div></div></li>';
      }).join("") + '</ul></section>';
    // objectives
    h += '<section class="sec"><h2>' + esc(t("objectives")) + '</h2><ul class="plain">' + l.objectives[lang].map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") + '</ul></section>';

    function step(no, title, desc, body, cls) {
      return '<section class="sec step ' + (cls || "") + '"><div class="sn" aria-hidden="true">' + no + '</div><div><h2>' + esc(title) + '</h2><p class="desc">' + esc(desc) + '</p><div class="body">' + body + '</div></div></section>';
    }
    function paras(a) { return a.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join(""); }
    function bullets(a) { return '<ul class="plain">' + a.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>'; }

    if (lang === "ar") {
      h += step(1, t("s1"), t("s1d"), paras(l.summary_ar));
      h += step(2, t("s2"), t("s2d"), paras(l.explain_ar), "iraqi");
      h += step(3, t("s3"), t("s3d"), bullets(l.summary_en), "english");
      h += step(4, t("s4"), t("s4d"), paras([l.example.ar]));
    } else {
      h += step(1, t("s1"), t("s1d"), bullets(l.summary_en));
      h += step(2, t("s2"), t("s2d"), paras([l.example.en]));
      h += '<section class="sec"><div class="note-en">' + esc(t("iraqiNote")) + '</div></section>';
    }

    h += '<section class="sec"><h2>' + esc(t("terms")) + '</h2><div class="terms-wrap"><table class="terms"><thead><tr><th>' + (lang === "ar" ? "Term" : "Term") + '</th><th>' + esc(lang === "ar" ? t("meaning") : "Arabic") + '</th></tr></thead><tbody>' +
      l.terms.map(function (x) { return '<tr><td>' + esc(x.en) + '</td><td>' + esc(x.ar) + '</td></tr>'; }).join("") + '</tbody></table></div></section>';

    h += '<section class="sec"><div class="activity"><h2>' + esc(t("activity")) + '</h2><p>' + esc(L(l.activity)) + '</p><div class="deliv"><small>' + esc(t("deliverable")) + '</small>' + esc(L(l.activity.deliverable)) + '</div></div></section>';

    h += '<section class="sec"><h2>' + esc(t("quiz")) + '</h2><p style="color:var(--muted)">' + esc(t("quizSub")) + '</p>' +
      l.quiz.map(function (q) { return '<details class="qa"><summary>' + esc(L(q.q)) + '</summary><div class="ans">' + esc(L(q.a)) + '</div></details>'; }).join("") + '</section>';

    h += '</div>';
    h += '<nav class="pager" aria-label="pager">' +
      (prev ? '<a class="prev" href="#/lecture/' + prev.id + '"><small>' + esc(t("prev")) + '</small><span>' + pad(prev.id) + ' · ' + esc(L(prev.title)) + '</span></a>' : '') +
      (next ? '<a class="next" href="#/lecture/' + next.id + '"><small>' + esc(t("next")) + '</small><span>' + pad(next.id) + ' · ' + esc(L(next.title)) + '</span></a>' : '<a class="next" href="#/capstone"><small>' + esc(t("toCap")) + '</small><span>' + esc(L(C.capstone.title)) + '</span></a>') +
      '</nav></div>';
    return h;
  }

  function viewCapstone() {
    var h = '<div class="wrap"><nav class="crumbs"><a href="#/">' + esc(t("back")) + '</a></nav>' +
      '<header class="lec-head"><div class="kicker">Capstone</div><h1 id="lec-title" tabindex="-1">' + esc(L(C.capstone.title)) + '</h1><p style="max-width:66ch;color:var(--muted);margin:0 0 16px">' + esc(L(C.capstone.intro)) + '</p>' +
      '<div class="lec-tools"><a class="btn primary" href="pdf/capstone-template.pdf" target="_blank" rel="noopener">⬇ ' + esc(t("capPdf")) + '</a></div></header>';
    h += '<section class="sec"><h2>' + esc(t("deliverables")) + '</h2><ol class="deliv-list">' +
      C.lectures.map(function (l) { return '<li><span class="dn">' + pad(l.id) + '</span><div>' + esc(L(l.activity.deliverable)) + '<br><a href="#/lecture/' + l.id + '">' + esc(L(l.title)) + '</a></div></li>'; }).join("") + '</ol></section>';
    h += '<section class="sec"><h2>' + esc(t("capSteps")) + '</h2><ul class="plain">' + ["cs1", "cs2", "cs3", "cs4"].map(function (k) { return '<li>' + esc(t(k)) + '</li>'; }).join("") + '</ul></section>';
    var tot = 0;
    h += '<section class="sec"><h2>' + esc(t("rubric")) + '</h2><table class="rubric"><tbody>' + C.capstone.rubric.map(function (r) { tot += r.w; return '<tr><td>' + esc(L(r.name)) + '</td><td class="ltr">' + r.w + '</td></tr>'; }).join("") + '<tr><td><b>' + esc(t("total")) + '</b></td><td class="ltr">' + tot + '</td></tr></tbody></table><p style="font-size:14px;color:var(--muted);margin-top:8px">' + esc(L(C.capstone.rubricNote)) + '</p></section></div>';
    return h;
  }

  /* ---------- router ---------- */
  function route() {
    var hash = location.hash || "#/";
    var m = hash.match(/^#\/lecture\/(\d+)/);
    var html, after;
    if (m) html = viewLecture(parseInt(m[1], 10));
    else if (/^#\/capstone/.test(hash)) html = viewCapstone();
    else { html = viewHome(); if (/^#\/lectures/.test(hash)) after = "lectures"; }
    app.innerHTML = html;
    menuPanel.hidden = true;
    document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
    var mb = document.getElementById("mark-btn");
    if (mb && m) {
      mb.addEventListener("click", function () {
        var id = parseInt(m[1], 10);
        if (done[id]) delete done[id]; else done[id] = 1;
        save(LS.done, done);
        route();
      });
    }
    if (after) { var el = document.getElementById(after); if (el) el.scrollIntoView(); }
    else window.scrollTo(0, 0);
  }

  /* ---------- print summary ---------- */
  function printSummary() {
    var root = document.getElementById("print-root");
    var h = '<h1>' + esc(L(C.course.title)) + '</h1><p class="ps">' + esc(t("printTitle")) + ' · ' + esc(t("printSub")) + '</p>';
    C.lectures.forEach(function (l) {
      h += '<div class="pl"><h2>' + pad(l.id) + ' · ' + esc(L(l.title)) + '</h2>';
      h += '<div class="pt"><b>' + esc(t("objectivesPrint")) + '</b></div><ul>' + l.objectives[lang].map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") + '</ul>';
      h += '<div class="pt"><b>Summary</b></div><ul dir="ltr" style="text-align:left">' + l.summary_en.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join("") + '</ul>';
      h += '<div class="pt"><b>' + esc(t("termsPrint")) + '</b>: <span dir="ltr">' + l.terms.map(function (x) { return esc(x.en); }).join(" · ") + '</span></div></div>';
    });
    h += '<div class="pfoot">' + esc(L(C.attribution)) + '</div>';
    root.innerHTML = h;
    window.print();
  }

  /* ---------- events ---------- */
  document.getElementById("lang-btn").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    save(LS.lang, lang);
    renderChrome();
    route();
  });
  document.getElementById("print-btn").addEventListener("click", printSummary);
  document.getElementById("menu-btn").addEventListener("click", function () {
    var open = menuPanel.hidden;
    menuPanel.hidden = !open;
    this.setAttribute("aria-expanded", String(open));
  });
  window.addEventListener("hashchange", route);

  renderChrome();
  route();
})();
