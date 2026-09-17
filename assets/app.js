/* 唯一一份逻辑：首页目录 + 章节答题 + 整本检测，共用这一个文件 */
(function () {
  'use strict';

  var MARK_NAME = ['', '会', '模糊', '不会'];
  var NUM = ['', '①', '②', '③'];
  var BOOK = { 1: '必修一', 2: '必修二', 3: '选择性必修一', 4: '选择性必修二', 5: '选择性必修三' };

  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (txt != null) n.textContent = txt;
    return n;
  }
  function toast(msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = el('div', 'toast'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('on');
    clearTimeout(t._t);
    t._t = setTimeout(function () { t.classList.remove('on'); }, 1800);
  }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise(function (res, rej) {
      var ta = el('textarea'); ta.value = text;
      ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(new Error('copy')); }
      catch (e) { rej(e); }
      finally { document.body.removeChild(ta); }
    });
  }
  function showRaw(text) {
    var ta = document.querySelector('textarea.raw');
    if (!ta) { ta = el('textarea', 'raw'); document.body.appendChild(ta); }
    ta.value = text; ta.classList.add('on'); ta.focus(); ta.select();
    toast('已选中，长按复制');
  }
  function doCopy(text, okMsg) {
    copy(text).then(function () { toast(okMsg || '已复制'); })
      .catch(function () { showRaw(text); });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function keyOf(sid, bid, cid) { return 'quiz:' + sid + ':' + bid + '-' + cid; }
  function readMarks(sid, bid, cid) {
    try { return JSON.parse(localStorage.getItem(keyOf(sid, bid, cid)) || '{}') || {}; }
    catch (e) { return {}; }
  }
  function writeMarks(sid, bid, cid, m) {
    try { localStorage.setItem(keyOf(sid, bid, cid), JSON.stringify(m)); } catch (e) {}
  }
  // 从自己的 <script src="…app.js?v=xxx"> 上读出本次部署的版本号，
  // 再贴到所有数据文件地址后面 —— 这样题目更新也不会被浏览器缓存卡住。
  function assetVer() {
    var ss = document.getElementsByTagName('script');
    for (var i = 0; i < ss.length; i++) {
      var m = (ss[i].getAttribute('src') || '').match(/app\.js\?v=([0-9a-f]+)/);
      if (m) return m[1];
    }
    return '';
  }
  var VER = assetVer();
  function withVer(url) {
    if (!VER) return url;
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'v=' + VER;
  }
  function loadScript(url) {
    url = withVer(url);
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url;
      s.onload = function () { res(); };
      s.onerror = function () { rej(new Error(url)); };
      document.head.appendChild(s);
    });
  }
  function loadData(url) {
    url = withVer(url);
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = url;
      s.onload = function () { var d = window.QUIZ_DATA; window.QUIZ_DATA = null; d ? res(d) : rej(new Error(url)); };
      s.onerror = function () { rej(new Error(url)); };
      document.head.appendChild(s);
    });
  }
  function siteBase(sid) {
    var p = location.pathname;
    return p.indexOf('/' + sid + '/') >= 0 ? p.split('/' + sid + '/')[0] : '';
  }
  function cut(s, n) {
    s = String(s).replace(/[。？?！!，,]/g, '');
    return s.length > n ? s.slice(0, n) + '…' : s;
  }

  /* ---------- 一张题卡 ---------- */
  function makeCard(o) {
    var c = el('div', 'q' + (o.mark ? ' m' + o.mark : ''));
    var hd = el('div', 'hd');
    hd.appendChild(el('span', 'no', String(o.no)));
    var tx = el('div', 'tx');
    if (o.src) tx.appendChild(el('div', 'src', o.src));
    if (o.tag) tx.appendChild(el('div', 'tag', o.tag));
    tx.appendChild(el('div', null, o.q));
    if (o.a) tx.appendChild(el('div', 'ans', o.a));
    hd.appendChild(tx);
    c.appendChild(hd);

    var cur = o.mark || 0;
    var ops = el('div', 'ops');
    var btns = [];
    [1, 2, 3].forEach(function (v) {
      var b = el('button', 'op' + (cur === v ? ' s' + v : ''), NUM[v] + ' ' + MARK_NAME[v]);
      b.onclick = function () {
        cur = (cur === v) ? 0 : v;
        o.onMark(cur);
        c.className = 'q' + (cur ? ' m' + cur : '');
        btns.forEach(function (x, j) { x.className = 'op' + (cur === j + 1 ? ' s' + (j + 1) : ''); });
      };
      btns.push(b);
      ops.appendChild(b);
    });
    if (o.a) {
      var ab = el('button', 'op ans', '看答案');
      var tog = function () {
        var open = c.classList.toggle('open');
        ab.textContent = open ? '收起答案' : '看答案';
      };
      ab.onclick = tog;
      tx.classList.add('tap');
      tx.onclick = function (ev) { if (ev.target === ab) return; tog(); };
      ops.appendChild(ab);
    }
    c.appendChild(ops);
    return c;
  }

  /* ============ 首页 ============ */
  function home() {
    loadScript('data/index.js').then(function () {
      var box = document.getElementById('root');
      (window.SITE_INDEX || []).forEach(function (s) {
        var sec = el('section', 'subj');
        var hd = el('h2');
        hd.appendChild(el('span', null, s.name));
        var n = 0; (s.books || []).forEach(function (b) { n += (b.chapters || []).length; });
        hd.appendChild(el('span', 'st', n ? n + ' 章' : '待录入'));
        sec.appendChild(hd);

        if (!s.books || !s.books.length) {
          var p = el('div', 'book'); p.appendChild(el('div', 'empty', '暂无内容'));
          sec.appendChild(p);
        }
        (s.books || []).forEach(function (b) {
          var bd = el('div', 'book');
          bd.appendChild(el('h3', null, b.name));
          var live = (b.chapters || []).filter(function (c) { return c.live; });
          if (!b.chapters || !b.chapters.length) {
            bd.appendChild(el('div', 'empty', '待录入'));
          } else {
            var cs = el('div', 'chips');
            b.chapters.forEach(function (c) {
              var a = el('a', 'chip' + (c.live ? ' on' : ' off'), c.name);
              if (c.live) a.href = s.id + '/' + b.id + '-' + c.id + '/';
              cs.appendChild(a);
            });
            if (live.length && !b.noReview) {
              var r = el('a', 'chip rev', '整本检测 · ' + live.length + ' 章');
              r.href = s.id + '/' + b.id + '/';
              cs.appendChild(r);
            }
            bd.appendChild(cs);
          }
          sec.appendChild(bd);
        });
        box.appendChild(sec);
      });
    }).catch(function () {
      document.getElementById('root').appendChild(el('div', 'empty', '目录加载失败'));
    });
  }

  /* ============ 章节页 ============ */
  function chapterPage(sid, bid, cid) {
    var base = siteBase(sid);
    loadData(base + '/data/' + sid + '/' + bid + '-' + cid + '.js').then(function (D) {
      if (D.sections) { renderRead(D, base); return; }
      if (D.items) { renderStudy(D, base); return; }
      var marks = readMarks(sid, bid, cid);
      var qs = D.questions || [];
      var filter = 0;
      var tagFilter = '';

      document.title = D.subject + ' ' + BOOK[bid] + ' ' + D.chapterName;
      document.getElementById('ttl').innerHTML = '';
      var t = document.getElementById('ttl');
      t.appendChild(document.createTextNode(D.subject + ' · ' + (D.bookName || BOOK[bid]) + ' · ' + D.chapterName));
      t.appendChild(el('small')).appendChild(el('a', null, '← 目录')).href = base + '/';

      var now = document.querySelector('.bar .p');
      var bar = document.querySelector('.pbar i');
      var list = document.getElementById('root');
      var fbox = document.getElementById('filters');

      function save() { writeMarks(sid, bid, cid, marks); }
      function stat() {
        var c = [0, 0, 0, 0], un = 0;
        qs.forEach(function (_, i) { var k = marks[i] || 0; c[k]++; if (!k) un++; });
        return { c: c, un: un, done: qs.length - un };
      }
      function head() {
        var s = stat();
        now.textContent = '①' + s.c[1] + ' ②' + s.c[2] + ' ③' + s.c[3] + ' / ' + qs.length;
        bar.style.width = (qs.length ? Math.round(s.done / qs.length * 100) : 0) + '%';
      }
      function chips() {
        var s = stat();
        fbox.innerHTML = '';
        [['全部 ' + qs.length, 0], ['未标 ' + s.un, -1],
         ['① 会 ' + s.c[1], 1], ['② 模糊 ' + s.c[2], 2], ['③ 不会 ' + s.c[3], 3]]
          .forEach(function (p) {
            var b = el('button', 'chip' + (filter === p[1] ? ' on' : ''), p[0]);
            b.onclick = function () { filter = p[1]; paint(); };
            fbox.appendChild(b);
          });
        var tags = [];
        qs.forEach(function (q) { if (q.k && tags.indexOf(q.k) < 0) tags.push(q.k); });
        if (tags.length > 1) {
          var sel = document.createElement('select');
          sel.className = 'tagsel';
          var o0 = document.createElement('option');
          o0.value = ''; o0.textContent = '全部篇目/主题（' + tags.length + '）';
          sel.appendChild(o0);
          tags.forEach(function (t) {
            var o = document.createElement('option');
            o.value = t; o.textContent = t + (tagCount(t) ? '（' + tagCount(t) + '）' : '');
            sel.appendChild(o);
          });
          sel.value = tagFilter;
          sel.onchange = function () { tagFilter = sel.value; paint(); };
          fbox.appendChild(sel);
        }
      }
      function tagCount(t) {
        var n = stat(), c = 0;
        qs.forEach(function (q, i) { if (q.k === t) c++; });
        return c;
      }
      function paint() {
        head(); chips();
        list.innerHTML = '';
        var shown = 0;
        qs.forEach(function (q, i) {
          var k = marks[i] || 0;
          if (tagFilter && q.k !== tagFilter) return;
          if (filter === -1 && k) return;
          if (filter > 0 && k !== filter) return;
          shown++;
          list.appendChild(makeCard({
            no: i + 1, tag: q.k, q: q.q, a: q.a, mark: k,
            onMark: function (v) {
              if (v) marks[i] = v; else delete marks[i];
              save(); head(); chips();
            }
          }));
        });
        if (!shown) list.appendChild(el('div', 'done', '这一档没有题目'));
      }
      document.getElementById('copy').onclick = function () {
        var s = stat();
        var L = ['【' + D.subject + ' ' + (D.bookName || BOOK[bid]) + ' ' + D.chapterName + '】共 ' + qs.length +
                 ' 题 · ①会 ' + s.c[1] + ' / ②模糊 ' + s.c[2] + ' / ③不会 ' + s.c[3]];
        [2, 3].forEach(function (v) {
          var items = [];
          qs.forEach(function (q, i) {
            if (marks[i] !== v) return;
            items.push('#' + (i + 1) + ' ' + cut(q.q, 20));
          });
          if (items.length) L.push((v === 2 ? '② 模糊：' : '③ 不会：') + items.join(' / '));
        });
        if (!s.c[2] && !s.c[3]) L.push('全部会 ✓');
        doCopy(L.join('\n'), '已复制到剪贴板');
      };
      document.getElementById('reset').onclick = function () {
        if (!confirm('清空这一章的全部标记？')) return;
        marks = {}; save(); paint();
      };
      paint();
    }).catch(function () {
      document.getElementById('root').appendChild(el('div', 'done', '这一章还没有录入'));
    });
  }

  /* ============ 整本检测 ============ */
  function bookPage(sid, bid) {
    var base = siteBase(sid);
    loadScript(base + '/data/index.js').then(function () {
      var s = (window.SITE_INDEX || []).filter(function (x) { return x.id === sid; })[0];
      if (!s) throw new Error('no subject');
      var b = (s.books || []).filter(function (x) { return x.id === bid; })[0];
      if (!b) throw new Error('no book');
      var live = (b.chapters || []).filter(function (c) { return c.live; });
      if (!live.length) throw new Error('no chapter');

      document.title = s.name + ' ' + b.name + ' · 整本检测';
      var t = document.getElementById('ttl');
      t.innerHTML = '';
      t.appendChild(document.createTextNode(s.name + ' · ' + b.name + ' · 整本检测'));
      t.appendChild(el('small')).appendChild(el('a', null, '← 目录')).href = base + '/';

      var pool = [];       // {cid, qi, q, marksRef}
      var mode = 'wrong';

      // 串行加载：每个数据文件都会写 window.QUIZ_DATA，并发会互相覆盖
      var seq = Promise.resolve();
      live.forEach(function (c) {
        seq = seq.then(function () {
          return loadData(base + '/data/' + sid + '/' + bid + '-' + c.id + '.js').then(function (D) {
            var m = readMarks(sid, bid, c.id);
            (D.questions || []).forEach(function (q, i) {
              pool.push({ cid: c.id, qi: i, q: q, marks: m, sid: sid, bid: bid });
            });
          });
        });
      });
      return seq.then(function () { run(pool, live, sid, bid, base, b, s); });
    }).catch(function () {
      document.getElementById('root').appendChild(el('div', 'done', '这一本还没有录入'));
    });
  }

  function run(all, live, sid, bid, base, book, subj) {
    var now = document.querySelector('.bar .p');
    var bar = document.querySelector('.pbar i');
    var list = document.getElementById('root');
    var fbox = document.getElementById('filters');
    var mode = 'wrong';
    var view = [];
    var done0 = 0;

    function pick() {
      var src = all.filter(function (it) {
        if (mode === 'all') return true;
        return it.marks[it.qi] === 2 || it.marks[it.qi] === 3;
      });
      view = shuffle(src.slice());
    }
    function stat() {
      var c = [0, 0, 0, 0], un = 0;
      view.forEach(function (it) { var k = it.marks[it.qi] || 0; c[k]++; if (!k) un++; });
      return { c: c, un: un, done: view.length - un };
    }
    function head() {
      var s = stat();
      now.textContent = '①' + s.c[1] + ' ②' + s.c[2] + ' ③' + s.c[3] + ' / ' + view.length;
      bar.style.width = (view.length ? Math.round(s.done / view.length * 100) : 0) + '%';
    }
    function chips() {
      fbox.innerHTML = '';
      var wrong = all.filter(function (it) { return it.marks[it.qi] === 2 || it.marks[it.qi] === 3; }).length;
      [['错题本（②③） ' + wrong, 'wrong'], ['整本乱序（全部） ' + all.length, 'all']]
        .forEach(function (p) {
          var btn = el('button', 'chip' + (mode === p[1] ? ' on' : ''), p[0]);
          btn.onclick = function () { if (mode !== p[1]) { mode = p[1]; paint(); } };
          fbox.appendChild(btn);
        });
      var rb = el('button', 'chip', '换一批 ⟳');
      rb.onclick = paint;
      fbox.appendChild(rb);
    }
    function paint() {
      pick();
      head(); chips();
      list.innerHTML = '';
      if (!view.length) {
        list.appendChild(el('div', 'done',
          mode === 'wrong' ? '这一本暂时没有②③的题 —— 要么全掌握了，要么还没开始标。' : '这一本还没有题。'));
        return;
      }
      view.forEach(function (it, n) {
        var k = it.marks[it.qi] || 0;
        list.appendChild(makeCard({
          no: n + 1, src: it.cid + ' · ' + '#' + (it.qi + 1), tag: it.q.k, q: it.q.q, a: it.q.a, mark: k,
          onMark: function (v) {
            if (v) it.marks[it.qi] = v; else delete it.marks[it.qi];
            writeMarks(sid, bid, it.cid, it.marks);
            head(); chips();
          }
        }));
      });
    }
    document.getElementById('copy').onclick = function () {
      var s = stat();
      var L = ['【' + subj.name + ' ' + book.name + ' · 整本检测】本次 ' + view.length +
               ' 题 · ①会 ' + s.c[1] + ' / ②模糊 ' + s.c[2] + ' / ③不会 ' + s.c[3]];
      [2, 3].forEach(function (v) {
        var items = [];
        view.forEach(function (it, n) {
          if ((it.marks[it.qi] || 0) !== v) return;
          items.push(it.cid + '#' + (it.qi + 1) + ' ' + cut(it.q.q, 18));
        });
        if (items.length) L.push((v === 2 ? '② 模糊：' : '③ 不会：') + items.join(' / '));
      });
      doCopy(L.join('\n'), '已复制到剪贴板');
    };
    document.getElementById('reset').onclick = function () {
      if (!confirm('清空「' + book.name + '」全部章节的标记？')) return;
      live.forEach(function (c) { writeMarks(sid, bid, c.id, {}); });
      all.forEach(function (it) { it.marks = {}; it.marks = it.marks; });
      location.reload();
    };
    paint();
  }

  /* ============ 教程 / 讲解页（sections）—— 可交互 ============ */
  function head2(title, base, right) {
    document.title = title;
    var t = document.getElementById('ttl');
    t.innerHTML = '';
    t.appendChild(document.createTextNode(title));
    t.appendChild(el('small')).appendChild(el('a', null, '← 目录')).href = base + '/';
    var p = document.querySelector('.bar .p');
    if (p) p.textContent = right || '';
    var fb = document.querySelector('.footbar');
    if (fb) fb.style.display = 'none';
    var f = document.getElementById('filters');
    if (f) f.innerHTML = '';
  }

  function renderRead(D, base) {
    var secs = D.sections || [];
    var exN = 0;
    secs.forEach(function (s) { exN += (s.ex || []).length; });
    head2(D.subject + ' · ' + (D.bookName || '') + ' · ' + D.chapterName, base,
      '教程 ' + secs.length + ' 节' + (exN ? ' · 例题 ' + exN : ''));
    var list = document.getElementById('root');
    list.innerHTML = '';

    // 小节目录：点一下直接跳到那一节
    if (secs.length > 2) {
      var nav = el('div', 'navbox');
      secs.forEach(function (s, i) {
        var a = el('a', null, (i + 1) + '. ' + String(s.h || '').replace(/^[一二三四五六七八九十]+、\s*/, ''));
        a.href = '#s' + i;
        nav.appendChild(a);
      });
      list.appendChild(nav);
    }

    var no = 0;
    secs.forEach(function (s, si) {
      var box = el('div', 'rd');
      box.id = 's' + si;
      if (s.h) box.appendChild(el('h2', null, s.h));
      var ps = s.p == null ? [] : (Array.isArray(s.p) ? s.p : [s.p]);
      ps.forEach(function (x) {
        if (typeof x === 'string') box.appendChild(el('p', null, x));
        else if (x && x.li) box.appendChild(el('div', 'li', '· ' + x.li));
        else if (x && x.tip) box.appendChild(el('div', 'tip', x.tip));
        else if (x && x.code) box.appendChild(el('pre', 'cd', x.code));
        else if (x && x.en) box.appendChild(el('div', 'ens', x.en));
        else if (x && x.zh) box.appendChild(el('div', 'zhs', x.zh));
      });
      (s.ex || []).forEach(function (x) { no++; box.appendChild(makeEx(x, no)); });
      list.appendChild(box);
    });
  }

  /* 一道例题：先自己想，点开才给思路 */
  function makeEx(x, no) {
    var w = el('div', 'ex');
    w.appendChild(el('div', 'ext', '例题 ' + no));
    w.appendChild(el('div', 'exq', x.q || ''));
    var a = el('div', 'exa');
    var steps = x.a == null ? [] : (Array.isArray(x.a) ? x.a : [x.a]);
    steps.forEach(function (t) { a.appendChild(el('div', 'exs', String(t))); });
    if (x.tip) a.appendChild(el('div', 'tip', x.tip));
    var b = el('button', 'exb', '点我看思路');
    b.onclick = function () {
      var on = a.classList.toggle('on');
      b.textContent = on ? '收起思路' : '点我看思路';
    };
    w.appendChild(b);
    w.appendChild(a);
    return w;
  }

  /* ============ 学习 / 背诵页（items）—— 先学后背 ============ */
  function renderStudy(D, base) {
    var items = D.items || [];
    // hideDefault 按内容定：写作用句要遮英文（看着中文想英文），
    // 词语辨析要遮中文（看着英文想意思）。没写就全显示。
    var mode = (D.hideDefault === 'en' || D.hideDefault === 'zh') ? D.hideDefault : 'show';
    var HINT = { show: '全部显示', en: '遮英文', zh: '遮中文' };
    head2(D.subject + ' · ' + (D.bookName || '') + ' · ' + D.chapterName, base, '背诵 ' + items.length + ' 项');
    var list = document.getElementById('root');
    var f = document.getElementById('filters');
    f.innerHTML = '';
    var btns = [];
    [['全部显示', 'show'], ['遮英文', 'en'], ['遮中文', 'zh']].forEach(function (p) {
      var b = el('button', 'chip', p[0]);
      b.dataset.k = p[1];
      b.onclick = function () { mode = p[1]; paint(); };
      btns.push(b);
      f.appendChild(b);
    });
    var rowState = {};
    function applyChips() {
      btns.forEach(function (b) { b.className = 'chip' + (mode === b.dataset.k ? ' on' : ''); });
    }
    // 一行点一下：在当前档位 ⇄ 全显示 之间来回，方便单独啃某几条
    function paint() {
      list.innerHTML = '';
      items.forEach(function (it, i) {
        var st = rowState[i] || mode;
        var r = el('div', 'row');
        var en = el('div', 'en', it.en || '');
        var zh = el('div', 'zh', it.zh || '');
        if (st === 'en') en.style.visibility = 'hidden';
        if (st === 'zh') zh.style.visibility = 'hidden';
        r.appendChild(en);
        r.appendChild(zh);
        if (it.note) r.appendChild(el('div', 'note', it.note));
        r.onclick = function () { rowState[i] = (st === mode ? 'show' : mode); paint(); };
        list.appendChild(r);
      });
      applyChips();
    }
    paint();
  }

  /* ============ 进度导出 / 导入 ============ */
  // 标记全部躺在 localStorage，键名统一是 quiz:<科>:<册>-<章>。
  // 导出一份 JSON 带到别的设备导入，就能接着标。
  function allMarks() {
    var out = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf('quiz:') === 0) {
          var v = localStorage.getItem(k);
          if (v) out[k] = v;
        }
      }
    } catch (e) {}
    return out;
  }
  function markedCount(map) {
    var n = 0;
    for (var k in map) {
      try { if (Object.keys(JSON.parse(map[k])).length) n++; } catch (e) {}
    }
    return n;
  }
  // 用设备本地日期做文件名——北京时间凌晨导出时，UTC 还是前一天，会写成昨天的日期
  function todayLocal() {
    var d = new Date();
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }
  function exportProgress() {
    var map = allMarks();
    var n = markedCount(map);
    if (!n) { toast('还没有标过题，没有可导出的进度'); return; }
    var text = JSON.stringify({
      app: 'gaokao-training', type: 'progress', v: 1,
      exportedAt: new Date().toISOString(), exportedOn: todayLocal(), chapters: n, marks: map
    });
    try {
      var url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
      var a = el('a');
      a.href = url;
      a.download = '题库进度-' + todayLocal() + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 3000);
      toast('已导出 ' + n + ' 章进度');
    } catch (e) {
      showRaw(text);  // 不支持下载的浏览器（部分内嵌）——直接给文本自己存
    }
  }
  function importProgress(file) {
    var fr = new FileReader();
    fr.onload = function () {
      var d;
      try { d = JSON.parse(String(fr.result)); } catch (e) { toast('这个文件不是 JSON'); return; }
      if (!d || d.type !== 'progress' || !d.marks) { toast('不是本页导出的进度文件'); return; }
      var keys = Object.keys(d.marks);
      if (!keys.length) { toast('文件里没有进度'); return; }
      var bad = 0, good = [];
      keys.forEach(function (k) {
        if (k.indexOf('quiz:') !== 0) { bad++; return; }
        try { JSON.parse(d.marks[k]); good.push(k); } catch (e) { bad++; }
      });
      if (!good.length) { toast('文件里没有可用进度'); return; }
      if (!confirm('导入会覆盖本机当前的全部标记。\n\n文件：' + good.length + ' 章' +
                   (d.exportedOn || d.exportedAt ? '（导出于 ' + (d.exportedOn || d.exportedAt.slice(0, 10)) + '）' : '') +
                   (bad ? '\n⚠️ ' + bad + ' 条格式不对，跳过' : '') +
                   '\n\n确定继续？')) return;
      // 导错也能救：把本机旧进度原样留在 quizBackup 里（不参与统计，不参与导出）
      try { localStorage.setItem('quizBackup', JSON.stringify(allMarks())); } catch (e) {}
      var old = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k0 = localStorage.key(i);
        if (k0 && k0.indexOf('quiz:') === 0) old.push(k0);
      }
      old.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
      var ok = 0;
      good.forEach(function (k) {
        try { localStorage.setItem(k, d.marks[k]); ok++; } catch (e) {}
      });
      toast('已导入 ' + ok + ' 章，刷新中…');
      setTimeout(function () { location.reload(); }, 800);
    };
    fr.onerror = function () { toast('读文件失败'); };
    fr.readAsText(file);
  }
  function mountProgress() {
    var bar = document.querySelector('.footbar-in');
    var made = false;
    if (!bar) {
      var fb = el('div', 'footbar');
      bar = el('div', 'footbar-in');
      fb.appendChild(bar);
      document.body.appendChild(fb);
      made = true;
    }
    var exp = el('button', 'btn ghost', '导出');
    exp.onclick = exportProgress;
    var imp = el('button', 'btn ghost', '导入');
    var inp = document.createElement('input');
    inp.type = 'file';
    inp.accept = '.json,application/json';
    inp.style.display = 'none';
    inp.onchange = function () {
      if (inp.files && inp.files[0]) importProgress(inp.files[0]);
      inp.value = '';
    };
    imp.onclick = function () { inp.click(); };
    if (made) { exp.style.flex = '1'; imp.style.flex = '1'; }
    bar.appendChild(exp);
    bar.appendChild(imp);
    document.body.appendChild(inp);
  }

  /* ============ 分流 ============ */
  document.addEventListener('DOMContentLoaded', function () {
    mountProgress();
    if (document.body.dataset.page === 'home') { home(); return; }
    var p = location.pathname.replace(/index\.html?$/, '');
    var mc = p.match(/\/([a-z]+)\/(\d+)-(\d+)\/?$/);
    if (mc) { chapterPage(mc[1], +mc[2], +mc[3]); return; }
    var mb = p.match(/\/([a-z]+)\/(\d+)\/?$/);
    if (mb) { bookPage(mb[1], +mb[2]); return; }
    document.getElementById('root').appendChild(el('div', 'done', '网址不对'));
  });
})();
