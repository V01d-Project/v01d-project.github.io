window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 5, bookName: '七选五',
  chapterId: 1, chapterName: '四个抓手',
  sections: [

    // ── 一 ──
    {
      h: '一、为什么它最容易浪费时间',
      p: [
        '七选五的坑在于，很多人把它当阅读理解做：先把五个段落一句一句读完，再回头逐空去挑句子。等读完两遍，十分钟已经没了，时间全花在"读"上，分数却没涨。',
        '错在哪？文章本来就有 5 个洞，你先把一篇破了洞的文章读一遍，读到的信息是不完整的，还得再读第二遍。等于花两遍的时间，买一遍的信息。',
        '正确的做法反过来：先看选项，再读文章。',
        { li: '错误做法：先通读全文 → 读不懂 → 再读一遍 → 时间没了，题还没做。' },
        { li: '正确做法：先扫 7 个选项，划出线索词 → 带着线索读文章 → 找到就填，填完就走。' },
        '为什么先看选项有用？因为选项里的代词、连接词、核心名词，正是你要在文章里找的东西。手里有清单，读文章就是"对号入座"，不是"从零理解"。',
        { tip: '记住一个数字：7 个选项、5 个空，必定有 2 个用不上。你不需要看懂全文，只需要让每一句接得上。' },
        { code: '选项（示例）：\nA. These habits are easy to build.\nB. However, changing them takes time.\nC. What is more, it saves you money.\n\n扫一遍就能划出：\nA → These / habits（复数，回指前文提过的习惯）\nB → However（转折）\nC → What is more（递进）+ it（单数）' }
      ]
    },

    // ── 二 ──
    {
      h: '二、抓手一：代词指代',
      p: [
        '一句话里的代词，必须在前文找到它指的那个人或那个东西。找不到，这句话就接不上。这是七选五最硬的一条规律。',
        '用法分两个方向。看空后那一句的代词：后面出现 they，空格里就必须有复数名词；后面出现 he or she，空格里就必须有一个单数的"人"；后面出现 it，空格里就必须有单数的事物。',
        '反过来看空格里的代词：选项一上来就是 These shops，那前文必须刚刚提过 shops。前文从来没出现复数名词，这个选项就是错的。',
        { li: 'it / this / that + 单数名词 → 前文要有单数的事物。' },
        { li: 'they / them / these / those → 前文要有复数名词。' },
        { li: 'the + 名词 → 前文已经提过这个东西（所以才能用 the 特指）。' },
        { tip: 'this 和 these 特别容易骗人，它们通常回指刚刚说过的那件事。选项里的 this 在上文找不到落脚点，直接划掉。' },
        { code: '文章：The little shops sell cheap snacks. ___ They are popular with students.\n\n判断：空格后一句用 They 开头 → 空格里必须出现复数名词。\n答案（示例）：These shops are everywhere in the old town.' }
      ]
    },

    // ── 三 ──
    {
      h: '三、抓手二：逻辑连接',
      p: [
        '两个句子接不接得上，很多时候要看"方向"：是顺着说，还是反着说。方向对了句子才对；方向反了，词再眼熟也是错的。',
        '用法很简单：先判断空格前后是什么意思方向，再在选项里找对应的连接词。',
        { li: '顺着说（递进、补充）：also、besides、moreover、in addition、what is more、what is worse。' },
        { li: '反着说（转折、对比）：but、however、yet、instead、on the contrary、in fact。' },
        { li: '前因后果：so、therefore、thus、as a result、for this reason。' },
        { li: '顺序、举例：first、then、next、finally、for example、for instance。' },
        { tip: 'however 和 but 怎么分？看标点最快：空格单独占一句、后面带逗号 → 选 however；空格把前后两个句子直接连起来、后面不加逗号 → 选 but。' },
        { code: '文章：He studied very hard for months. ___ He still failed the exam.\n\n判断：前句"很努力"，后句"还是没考过" → 反方向 → 转折。\n答案（示例）：However,' }
      ]
    },

    // ── 四 ──
    {
      h: '四、抓手三：复现词与同义替换',
      p: [
        '空格要填的那句话，是"接着上文说的话"。既然接着上文说，就一定带着上文的核心词，或者它的同义说法。',
        '先找文章里反复出现的词。反复出现的名词往往就是这段的话题词，正确选项通常带着它。',
        '再看同义替换：同一个意思换一种说法。practise every day = work on it daily；helpful = useful = of great use。用词不一样，意思一样。',
        { li: '原词复现：文中说 practice，选项里还是 practice（或 practise）。' },
        { li: '同义复现：文中说 take time，选项里说 not in a week / be patient。' },
        { li: '同类复现：文中说 city、library，选项里说 school——都属于"场所"。' },
        { tip: '两个反向的坑要小心：一是"看着相关但换了话题"的选项（关键词只是顺带提到）；二是"词一模一样却是陷阱"的选项（把部分意思放大成全部）。判断时看整句的中心意思，别只看一个词。' },
        { code: '文章：Regular practice is the key to speaking well. ___\n\n判断：前文核心词是 practice，下一句应该顺着"练习"说。\n答案（示例）：So try to practise speaking for ten minutes every day.' }
      ]
    },

    // ── 五 ──
    {
      h: '五、抓手四：句式一致',
      p: [
        '一个段落里，句子会长得越来越像：祈使句连着祈使句，Some ... Others ... 对着 Some ... Others ...。这既是节奏，也是线索。',
        '用法：先把空格前后两句的结构写出来，再看哪个选项的结构能接上。结构不搭的选项，意思再像也要往后放。',
        { li: '祈使句对祈使句：Make a list. / Set a time. / 空格也该是动词原形开头。' },
        { li: '对比结构：Some ... Others ... 后面接一句总结。' },
        { li: '问句对问句：Do you ...? / 空格也可以是 Do you ...?' },
        { li: '标点也算：空格后面是逗号，说明这句还没说完，选项结尾就不能是句号。' },
        { tip: '句式不一致，读起来会"断"。选项本身没毛病，但和这一段的节奏搭不上，答案往往是另一个结构对得上的选项。' },
        { code: '文章：Make a list of your tasks. Set a time for each one. ___\n\n判断：前两句都是祈使句（动词原形开头）。\n答案（示例）：Start with the easiest task.' }
      ]
    },

    // ── 六 ──
    {
      h: '六、做题顺序与时间分配',
      p: [
        '七个空、七八分钟。分配不好，一两个空就能吃掉一半时间。按下面这个顺序走。',
        { li: '第 1 分钟：扫一遍 7 个选项，划出每个选项的抓手词（代词、连接词、核心名词）。' },
        { li: '接下来逐空填，每空 30—40 秒。到时间还没定下来，先标个记号跳过。' },
        { li: '先填有把握的：段首主题句、代词或连接词明显的空。' },
        { li: '每填一个空，就把前后句连起来默读一遍，顺了再走下一个。' },
        { li: '最后 2—3 分钟：通读检查代词指代、连接词方向、相邻两空有没有冲突。' },
        { tip: '检查时一定核对一句：没用上的选项正好是两个。多一个少一个，说明中间有错。' },
        '别在一个空上卡 5 分钟。七选五是一串连着扣分的题，卡住一个空，后面的节奏全受影响。',
        { code: '同一道题的走法（示例）：\n第 1 分钟   扫选项 → 划出 A 的 These / B 的 However / C 的 What is more\n先做 B 那个空（转折词最好认）\n再做 A 那个空（复数指代能对上 shops）\n难空留到最后，用剩下的选项排除\n最后核对：没用上的正好两个' }
      ]
    }

  ]
};
