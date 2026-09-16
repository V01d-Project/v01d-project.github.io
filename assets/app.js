/* 唯一一份逻辑：首页目录 + 章节答题，共用这一个文件 */
(function () {
  'use strict';

  var MARK_NAME = ['', '会', '模糊', '不会'];
  var SUBJ = {
    chinese: '语文', math: '数学', english: '英语',
    physics: '物理', chemistry: '化学', bio: '生物'
  };
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
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = function () { rej(new Error(src)); };
      document.head.appendChild(s);
    });
  }
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
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

  /* ============ 首页 ============ */
  function home() {
    loadScript('data/index.js').then(function () {
      var box = document.getElementById('root');
      var idx = window.SITE_INDEX || [];
      idx.forEach(function (s) {
        var sec = el('section', 'subj');
        var hd = el('h2'); hd.appendChild(el('span', null, s.name));
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
          if (!b.chapters || !b.chapters.length) {
            bd.appendChild(el('div', 'empty', '待录入'));
          } else {
            var cs = el('div', 'chips');
            b.chapters.forEach(function (c) {
              var a = el('a', 'chip' + (c.live ? ' on' : ' off'), c.name);
              if (c.live) { a.href = s.id + '/' + b.id + '-' + c.id + '/'; }
              cs.appendChild(a);
            });
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
  function chapterPage() {
    var m = location.pathname.replace(/index\.html?$/, '').match(/\/([a-z]+)\/(\d+)-(\d+)\/?$/);
    if (!m) { document.getElementById('root').textContent = '网址不对'; return; }
    var sid = m[1], bid = +m[2], cid = +m[3];
    var base = location.pathname.indexOf('/' + sid + '/') >= 0 ? location.pathname.split('/' + sid + '/')[0] : '';

    loadScript(base + '/data/' + sid + '/' + bid + '-' + cid + '.js').then(function () {
      render(window.QUIZ_DATA, sid, bid, cid);
    }).catch(function () {
      document.getElementById('root').appendChild(el('div', 'done', '这一章还没有录入'));
    });
  }

  function render(D, sid, bid, cid) {
    var KEY = 'quiz:' + sid + ':' + bid + '-' + cid;
    var marks = {};
    try { marks = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { marks = {}; }
    var qs = D.questions || [];
    var filter = 0;

    document.title = D.subject + ' ' + BOOK[bid] + ' ' + D.chapterName;

    var ttl = document.getElementById('ttl');
    ttl.textContent = D.subject + ' · ' + (D.bookName || BOOK[bid]) + ' · ' + D.chapterName;

    var now = document.querySelector('.bar .p');
    var bar = document.querySelector('.pbar i');
    var list = document.getElementById('root');
    var fbox = document.getElementById('filters');

    function save() { try { localStorage.setItem(KEY, JSON.stringify(marks)); } catch (e) {} }

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
    }

    function paint() {
      head(); chips();
      list.innerHTML = '';
      var shown = 0;
      qs.forEach(function (q, i) {
        var k = marks[i] || 0;
        if (filter === -1 && k) return;
        if (filter > 0 && k !== filter) return;
        shown++;

        var c = el('div', 'q' + (k ? ' m' + k : ''));
        var hd = el('div', 'hd');
        hd.appendChild(el('span', 'no', String(i + 1)));
        var tx = el('div', 'tx');
        if (q.k) tx.appendChild(el('div', 'tag', q.k));
        tx.appendChild(el('div', null, q.q));
        if (q.a) {
          var ans = el('div', 'ans', q.a);
          tx.appendChild(ans);
        }
        hd.appendChild(tx);
        c.appendChild(hd);

        var ops = el('div', 'ops');
        [1, 2, 3].forEach(function (v) {
          var b = el('button', 'op' + (k === v ? ' s' + v : ''), '① 会② 模糊③ 不会'.slice((v - 1) * 4, (v - 1) * 4 + 1) + ' ' + MARK_NAME[v]);
          b.onclick = function () {
            marks[i] = (marks[i] === v) ? 0 : v;
            if (!marks[i]) delete marks[i];
            save();
            var m = marks[i] || 0;
            c.className = 'q' + (m ? ' m' + m : '');
            ops.querySelectorAll('.op').forEach(function (o, j) {
              o.className = 'op' + (m === j + 1 ? ' s' + (j + 1) : '');
            });
            head(); chips();
          };
          ops.appendChild(b);
        });
        if (q.a) {
          var ab = el('button', 'op ans', '答案');
          ab.onclick = function () { c.classList.toggle('open'); ab.textContent = c.classList.contains('open') ? '收起' : '答案'; };
          ops.appendChild(ab);
        }
        c.appendChild(ops);
        list.appendChild(c);
      });
      if (!shown) list.appendChild(el('div', 'done', '这一档没有题目'));
    }

    document.getElementById('copy').onclick = function () {
      var s = stat();
      var L = ['【' + D.subject + ' ' + (D.bookName || BOOK[bid]) + ' ' + D.chapterName + '】共 ' + qs.length +
               ' 题 · ①会 ' + s.c[1] + ' / ②模糊 ' + s.c[2] + ' / ③不会 ' + s.c[3]];
      [2, 3].forEach(function (v) {
        var names = qs.filter(function (_, i) { return marks[i] === v; })
                      .map(function (q) { return q.k || q.q.slice(0, 12); });
        if (names.length) L.push((v === 2 ? '② 模糊：' : '③ 不会：') + names.join(' / '));
      });
      if (!s.c[2] && !s.c[3]) L.push('全部会 ✓');
      doCopy(L.join('\n'), '已复制，粘给 Phicilia');
    };

    document.getElementById('reset').onclick = function () {
      if (!confirm('清空这一章的全部标记？')) return;
      marks = {}; save(); paint();
    };

    paint();
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.body.dataset.page === 'home') home();
    else chapterPage();
  });
})();
