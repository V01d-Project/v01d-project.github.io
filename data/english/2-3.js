window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 2, bookName: '完形词块',
  chapterId: 3, chapterName: '真题拆解 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、这一章解决什么：四个词都认识，还是会选错',
      p: [
        '上一章（2-1 四类线索）讲了完形靠线索不靠词汇，也讲了转折、因果、复现、搭配这四类线索怎么认。但它没回答一个问题：四个选项你都认识、四个代进句子里念都挺顺的时候，到底怎么分高下？',
        '这一章只干一件事：拿 5 个空当样本，把「四个词都认识却选错」这种题，一步一步排除给你看。',
        '先记住一句话：四个选项都认识，说明这道题考的已经不是词义，而是「这个词配不配这个位置」。配不配有四个方向的依据——搭配、上下文呼应、逻辑、情感色彩。',
        '先对一下分值（新课标卷，河南 2027 适用）：完形是 15 个空，每空 1 分，共 15 分。不是「20 空 30 分」，那是旧全国卷的口径。15 分想拿 11 分以上，靠的就是下面这套排除法。（分值依据见同目录 _references.md 的 B1、B2）',
        { li: '第一步 · 找线索：先别管选项，把空前后三四个词读一遍，问自己「这句话在说什么方向的事」。' },
        { li: '第二步 · 定方向：这个依据属于搭配、呼应、逻辑还是情感，先归类。' },
        { li: '第三步 · 逐个代：每个选项代进去，说不出它凭什么通，就不要它。' },
        { li: '第四步 · 说依据：选完必须能说出一句依据；说不出来就是猜，猜对的概率只有四分之一。' },
        { tip: '四个选项都认识时，别去比「哪个词更高级、更眼熟」。要比的是「哪个词在这句话里有依据支持」。' },
        { en: 'When all four options are familiar, the question is no longer what the word means, but whether the sentence supports it.' },
        { zh: '四个词都认识的时候，考的不是词义，是这句话支不支持它。' },
        { code: '本章每个样本都按这个格式看：\n\n  【空所在句子】  ... the blank sits here ______ .\n  【选项】        A. ...   B. ...   C. ...   D. ...\n  【答案】        A\n  【逐项排除】    B 为什么不通 / C 为什么不通 / D 为什么不通\n  【线索类型】    搭配 / 上下文呼应 / 逻辑 / 情感色彩' }
      ],
      ex: [
        { q: '先不动后面的样本，用这套方法试一个空：\nThe two brothers share the same room, but their tastes are quite ______.\nA. similar   B. different   C. modern   D. simple',
          a: ['第一步找线索：but 出现，前后必须相反。前半句说「共用一个房间」（关系近、习惯近），后半句就应该说「不一样」。',
              '第二步定方向：这是逻辑类的转折线索，不是搭配题。',
              '第三步逐个代：similar 顺着前面「共用」的方向走，和 but 冲突；modern（现代的）和 simple（简单的）跟「共用一个房间」没有任何关系，文章也没提潮流或简繁，属于无依据；different 与 but 的方向一致。',
              '第四步说依据：but 表示前后相反，前半讲「同」，后半必须讲「异」。',
              '答案 B。'],
          tip: 'but / though / yet 一出现，先定方向再选词——这一步花不到 3 秒，却能拦住一大半错选。' }
      ]
    },

    // ── 二 ──
    {
      h: '二、样本一 · 搭配：意思都对，只有一个是英语里真实存在的说法',
      p: [
        '先看这一句（自拟仿真题，仿新课标卷叙事完形的风格，非真题原文）：',
        { code: '【空所在句子】\nAfter leaving school, Jack decided to ______ a living by repairing\nbikes for the people in his town.\n\n【选项】\nA. make    B. do    C. take    D. gain\n\n【答案】A（make a living）' },
        '四个词你都认识，四个也都能表示「获得、从事」。差别只在一点：英语里只有 make / earn a living 这个说法。',
        '逐项排除：',
        { li: 'B. do a living —— do 后面接的是「不特指的工作」，像 do a job、do business、do the housework。do a living 英语里没有这个说法。' },
        { li: 'C. take a living —— take 接的是「一次性、拿走、承担」的东西：take a job、take a break、take a seat。living 是长期生计，配不上 take。' },
        { li: 'D. gain a living —— gain 后面跟「具体的、能数出来的收获」：gain experience、gain weight、gain a reputation。gain a living 不成立。' },
        { li: 'A. make a living —— make a living（靠……谋生）是固定的动词短语，后面用 by doing 说明靠什么谋生，整句完全对得上。' },
        '线索类型：搭配。这道题不靠上下文，靠的是「这个动词跟这个名词是不是天生一对」。',
        { tip: '做搭配题的办法很土但很有效：把四个选项各配一次，整块念出来——do a living、take a living、gain a living、make a living。哪一个你是在课文、听力、阅读里真见过的，就选哪个。' },
        { en: 'All four words mean something similar; only one of them actually goes with the noun.' },
        { zh: '四个词意思差不多，但只有一个真的能和后面那个名词搭上。' },
        { code: '同类搭配，见到就整块记（左边是「只能这么配」的动词）：\n\n  make   a living / a decision / progress / an effort / a mistake\n  take   a job / a break / measures / an interest in\n  keep   a record / a diary / a promise / in touch\n  pay    attention / a visit / the bill\n  gain   experience / weight / a reputation\n  run    a shop / a business / a school' }
      ],
      ex: [
        { q: 'So far, the company has ______ little progress in cutting the cost.\nA. taken   B. made   C. done   D. got',
          a: ['先看空后面：progress 的意思是「进展、进度」。',
              '逐个配：take little progress（英语里不说）；do little progress（不说）；get little progress（不说）。',
              'make progress 是固定说法，表示取得进展。',
              '结构上也对：has made → 现在完成时，表示到目前为止取得的进展。',
              '答案 B。'],
          tip: 'progress、effort、decision、a living、a mistake 这几个名词，默认配 make。' },
        { q: 'The nurse asked the visitors to ______ attention to the sign on the wall.\nA. put   B. give   C. pay   D. send',
          a: ['看名词：attention。这一空问的是「注意」这件事。',
              '逐个配：put attention to（不说）；give attention to（英语里虽有这个说法但极不标准，高考一律不认）；send attention（不通）。',
              'pay attention to 是固定搭配，意思是注意、留意。',
              '答案 C。'],
          tip: 'attention 只配 pay 和 draw / get；考到 attention，先想 pay。' }
      ]
    },

    // ── 三 ──
    {
      h: '三、样本二 · 上下文呼应：答案在句子另一半已经说过了',
      p: [
        '第二类是复现式的呼应，也是最典型的「四个词都认识」的空。',
        { code: '【空所在句子】\nTom is talkative and never stops talking, while his twin brother is\nquiet and ______.\n\n【选项】\nA. shy    B. rude    C. lazy    D. proud\n\n【答案】A（shy）' },
        '这一句的答案不在词义里，在 while 和 quiet 里。',
        '逐项排除：',
        { li: 'B. rude（没礼貌）——文章从头到尾没提两人的待人接物，只看得出一个人话多、一个人话少，rude 没有任何依据。' },
        { li: 'C. lazy（懒）——谈的是说话风格，不是做事的勤懒，方向不对。' },
        { li: 'D. proud（骄傲）——既和「话少」无关，也不能和 talkative 形成对立。' },
        { li: 'A. shy（腼腆）——腼腆的人正好话少、不爱开口，和前半句 talkative、never stops talking 正好构成 while 要求的对立；quiet and shy 也是英语里很自然的并列。' },
        '线索类型：上下文呼应（句内的反义照应 + 常用并列）。找法就一步：往回看。while 前面说「话多」，空里就该是「话少」那一类。',
        { tip: '看到 while / whereas / on the other hand，第一件事是把前面的关键词圈出来，然后到空里找它的「另一头」。' },
        { en: 'The answer is usually already stated in the other half of the sentence.' },
        { zh: '答案通常已经写在这句话的另一半里了。' },
        { code: '呼应常见的三种照应方式，遇到就回想：\n\n  反义照应   talkative  ↔  ______ (shy / silent)\n  同义照应   damaged    ↔  ______ (broken / ruined)\n  解释照应   冒号、破折号后面那句话就是空的解释：\n             He was generous: he ______ everything he had.\n             → gave / shared' }
      ],
      ex: [
        { q: 'Grandpa was a man of few words, so we knew his love from what he ______ rather than from what he said.\nA. did   B. thought   C. heard   D. wanted',
          a: ['先找线索：前半句 few words（话少），后半句出现 what he said（他说了什么）。',
              '再看结构：what he ______ rather than what he said —— rather than 把两半对立起来，一半是「说」，另一半就只能是「做」。',
              '逐个代：thought（想）和 wanted（想要）都是「心里的事」，不是「嘴上说的」的对立面，文章也没提他的念头；heard（听到）是被动的，主语是 he，逻辑不通。',
              'did 和 said 正好是一对：嘴上不说，那就只能靠行动。',
              '答案 A。'],
          tip: 'rather than / instead of / not ... but ... 这类结构，前后两项必须落在同一个类别里且互相对照——这是最好抓的呼应线索。' }
      ]
    },

    // ── 四 ──
    {
      h: '四、样本三 · 逻辑方向：因果反了，四个选项全废',
      p: [
        '第三类考逻辑方向。这一空最常见的错法不是不认识词，而是四个词都认识、句子念着也通，但方向反了。',
        { code: '【空所在句子】\nThe match was put off. It ______ the heavy rain that lasted all morning.\n\n【选项】\nA. resulted from   B. resulted in   C. led to   D. brought about\n\n【答案】A（resulted from）' },
        '四个选项全是「因果」的表达，全都认识。分不出高下的只有一样东西：哪一边是因、哪一边是果。',
        '逐项排除：',
        { li: '先定方向：句子说「比赛推迟了」，后面说「持续了一上午的大雨」。下雨是原因，推迟是结果。空在主句，主语 it 指的就是前面的「推迟这件事」，所以这一句是「结果 ______ 原因」的方向。' },
        { li: 'B. resulted in ——「造成」，因在前、果在后（A resulted in B = A 造成了 B）。代进去变成「推迟造成了大雨」，方向反了。' },
        { li: 'C. led to —— 同 resulted in，也是「导致」，方向反。' },
        { li: 'D. brought about ——「带来、引起」，方向同样反。' },
        { li: 'A. resulted from ——「由……造成」，果在前、因在后（A resulted from B = A 是由 B 造成的）。推迟由大雨造成，完全对得上。' },
        '线索类型：逻辑（因果方向）。判断只有一步：先定谁是因、谁是果，再看选项走哪个方向。',
        { tip: 'result in 和 result from 是一对镜子外里反着来的词，每年都有人栽在这里。记法：in（往里）＝冲向结果；from（来自）＝从原因里来。' },
        { en: 'Check which half is the cause first; the direction of the arrow decides the answer.' },
        { zh: '先把谁是因、谁是果定下来，箭头的方向就决定了答案。' },
        { code: '因果两组词，方向写死：\n\n  由因推果（因 → 果）\n    so / therefore / thus / as a result\n    lead to / result in / cause / bring about\n\n  由果推因（果 ← 因）\n    because / since / as / for / due to / owing to\n    result from / come from / be caused by\n\n  记忆：in 冲向结果，from 来自原因。' }
      ],
      ex: [
        { q: 'A large part of the old town was damaged. The flood ______ three days of continuous rain.\nA. resulted from   B. resulted in   C. caused   D. brought about',
          a: ['定方向：第一句说「老城区一大片被毁了」（结果），第二句说「连续三天的大雨」。',
              '谁是因：连续三天的大雨造成了洪水 / 被毁。所以空所在句是「洪水被毁这件事 ______ 三天的大雨」，方向和第一句一样，是果 ← 因。',
              '逐个代：resulted in（造成）、caused（引起）、brought about（带来）三个都是因在前、果在后，代进去变成「被毁造成了大雨」，全错。',
              'resulted from 表示由……造成，果在前、因在后，方向正确。',
              '答案 A。'],
          tip: '主语是「结果」时配 from；主语是「原因」时配 in / to / about。先看清主语是谁。' }
      ]
    },

    // ── 五 ──
    {
      h: '五、样本四 · 情感色彩：褒贬选反，意思差不多也错',
      p: [
        '第四类靠语境里的态度。作者是夸还是批、是担心还是放心，直接决定空里该放哪个词。',
        { code: '【空所在句子】\nAt first the neighbours were ______ of the strange old man, but after\nhe saved the boy from the fire, they welcomed him warmly.\n\n【选项】\nA. suspicious   B. curious   C. tired   D. ashamed\n\n【答案】A（suspicious）' },
        '四个词都眼熟，也都能接 of。分开它们的不是语法，是文章的褒贬。',
        '逐项排除：',
        { li: 'B. curious of —— 结构上就不对，curious 后面跟 about（be curious about sth）。意思上「好奇」偏中性，也撑不起后面那个 but 的转折。' },
        { li: 'C. tired of —— tired of 是「对……厌烦」，语法对，但脾气不对：邻居只是对陌生人存疑，还不到「厌烦」，也与后文「救火」的转折不搭。' },
        { li: 'D. ashamed of —— ashamed 是「因……感到羞愧」，通常是主语自己做了不好的事，用它说「邻居为老人感到羞愧」不合情理。' },
        { li: 'A. suspicious of —— be suspicious of sb 是「对某人不信任、起疑心」，是负面态度，正好和 but 后面「热情欢迎」形成反转。' },
        '线索类型：情感色彩（褒贬）+ 逻辑（but 的转折）。先在句子里标出态度词：but 和 welcomed warmly 是正面的，空里就必须是负面的。',
        { tip: '遇到态度题，先在草稿上写两个字：前「＋」后「－」，或者前「－」后「＋」。褒贬方向一定，四个选项能筛掉三个。' },
        { en: 'Match the attitude, not just the meaning.' },
        { zh: '要对的不是词义，是态度。' },
        { code: '常见褒贬配对（转折题里最常考）：\n\n  怀疑 / 不满   suspicious of, doubtful about, worried about, tired of\n  满意 / 肯定   content with, proud of, satisfied with, grateful for\n  佩服 / 感激   admire, appreciate, respect\n  轻视 / 贬低   look down on, ignore, blame\n\n先定褒贬，再挑词义。' }
      ],
      ex: [
        { q: 'The manager was ______ with the result: the team had finished the work three days early and with no mistakes.\nA. content   B. angry   C. familiar   D. busy',
          a: ['先读后半句：提前三天完工、还没出错误——明显是好事，态度是正面的。',
              '定褒贬：空里必须是「满意、认可」这一类的词。',
              '逐个代：angry with（生气）方向反了；busy with 是「忙于」，跟「对结果如何」不搭；familiar with 是「熟悉」，和提前完工这件事没有关系。',
              'content with 表示对……满意，和后半句的正面信息完全一致。',
              '答案 A。'],
          tip: 'with 前面能接的形容词很多，但只要有「好事 / 坏事」的信息，褒贬就把范围缩到一个。' }
      ]
    },

    // ── 六 ──
    {
      h: '六、样本五 · 综合：一段话里四类线索轮着用',
      p: [
        '最后一个综合样本（自拟仿真题），四个空，四类线索各来一次，看看真实做题时它们是怎么轮着用的。',
        { code: '【情境改写 · 自拟仿真题，非真题原文】\nOld Mr. Chen had ______① the little clock shop from his father twenty\nyears earlier. Customers came from far away, because his shop was the only\nplace in town where a broken clock could still be ______② properly.\nLast month his eyes began to fail, ______③ he refused to close the shop.\n______④, he was still the first to arrive every morning.\n\n【选项】\n① A. taken over   B. taken off   C. taken up    D. taken in\n② A. repaired     B. rebuilt     C. replaced    D. returned\n③ A. but          B. so          C. because     D. or\n④ A. However      B. Therefore   C. Besides     D. Instead' },
        '逐个看这四空是怎么被线索定下来的：',
        { li: '① 线索是搭配：take over 是「接管、接手」，从父亲手里接过店铺正好用它。take off（起飞 / 脱下 / 突然成功）、take up（开始从事 / 占用）、take in（收留 / 欺骗 / 理解）都接不上「从父亲手里接过来的店铺」。答案 A. taken over。' },
        { li: '② 线索是上下文呼应：前文出现了 broken clock（坏了的钟），一个坏了的钟能对它做的、又被 properly 修饰的动作只有一个——修好它。rebuilt（重建）是建筑级别的工程，replaced（换掉）和 returned（还回去）都不是对「坏」的处理。答案 A. repaired。' },
        { li: '③ 线索是逻辑：眼睛开始不行了（负面），却不肯关店（还在坚持），前后相反，是转折。so（结果）、because（原因）、or（选择）方向都不对。答案 A. but。' },
        { li: '④ 线索是逻辑 + 情感色彩：前一句说他不肯关店，这一句说他每天早上还是第一个到——这是「尽管那样，仍然如此」的坚持，要用让步转折的副词。However 表转折，Therefore 表结果，Besides 表递进，Instead 表替代。答案 A. However。' },
        { tip: '四个空答案都是常规词，难的是判断过程：先归类线索，再逐个代。这套动作走熟了，15 分里 11—13 分是稳的。' },
        { en: 'Same words, different clues — the clue you find is the answer you choose.' },
        { zh: '词都是那些词，不一样的是线索——你找到哪一类线索，就选哪一类答案。' },
        { code: '一段话里四类线索的分布（做题时可在卷子边上标）：\n\n  ① 搭配       take over a shop（从父亲手里接手）\n  ② 呼应       broken clock / properly  →  repaired\n  ③ 逻辑转折   eyes fail  ↔  refuses to close\n  ④ 逻辑 + 态度 refuses  ↔  still the first to arrive  →  However' }
      ],
      ex: [
        { q: '（综合判断）上面第 ② 空，如果有人在 repaired 和 rebuilt 之间犹豫，最有说服力的依据是哪一条？',
          a: ['回到原句：his shop was the only place in town where a broken clock could still be ______ properly。',
              '关键信息有三处：broken clock（坏了的钟）、the only place in town（城里唯一的地方）、properly（妥善地）。',
              'broken 是「坏了、出故障」，对应的处理是「修好」，不是「推倒重来」；rebuilt 用在建筑、整体结构重建上，钟表店不会对客人的钟做重建。',
              'the only place in town 说明它值钱的地方在于「还能修好」，这本身就是对 repaired 的呼应。',
              'properly 也在提示动作的精度——修得妥当，而不是换得妥当。',
              '结论：呼应线索决定选 repaired；rebuilt 虽然也能表达「让东西重新能用」，但词义范围太宽，被 broken 和 properly 两处挤掉了。'],
          tip: '两个词意思有重叠时，回到原句去找「范围最窄的那一处信息」——范围越窄，越排他。' },
        { q: '（方法复盘）下面这个空，说说你会按哪几步排除，最后选哪个：\nAfter the long walk, the children were so ______ that they fell asleep the moment they lay down.\nA. tired   B. bored   C. hungry   D. excited',
          a: ['第一步找线索：so ... that 是「如此……以至于」，后面的结果「一躺下就睡着」是关键信息。',
              '第二步定方向：这是逻辑里的因果方向——空里的状态是因，睡着是果。所以空里必须是「能从身体上导致睡着」的状态。',
              '第三步逐个代：bored（无聊）也能让人犯困，但它靠的是「没兴趣」，不是「累」，和 long walk 接不上；hungry（饿）不会直接让人立刻睡着；excited（兴奋）恰恰是「睡不着」的原因，方向反了。',
              'tired（累）和 long walk（走了很久的路）直接呼应，又正好解释了为什么一躺下就睡着。',
              '第四步说依据：long walk → tired → fell asleep，一条线上的因果 + 呼应双线索。',
              '答案 A。'],
          tip: 'so ... that 这类结构，空里和后半句必须能连成一条因果链：空 → 结果。连不上就排除。' }
      ]
    },

    // ── 七 ──
    {
      h: '七、考场上的这 15 分怎么花（新课标卷：15 空 ×1 分）',
      p: [
        '把这一章的排除法变成考场上的固定动作，只有四步。',
        { li: '① 通读（1—2 分钟，不填）：先把整篇读一遍，抓主旨、人物和态度。很多空的依据不在本句，而在后面某一段。' },
        { li: '② 找线索：每个空先读本句，再往上、往下各扫一眼，找搭配、呼应、逻辑、态度这四类依据。' },
        { li: '③ 卡住就跳过并标记：一个空超过 40 秒没线索，先按最佳判断填一个、做个记号，继续往下。不要反复读同一句话——那是完形最大的时间黑洞。' },
        { li: '④ 复检只查四样：逻辑通不通、时态一致不一致、代词指的是不是同一个人、搭配是不是英语里真实存在的。' },
        '时间：新课标卷完形 15 个空，建议 12—15 分钟。题量和分值都比旧的「20 空 30 分」少了一半，所以千万不要按老节奏把时间全砸在完形上——这张卷子里最贵的地方是阅读 50 分。',
        { tip: '最后一条纪律：改答案必须有新线索。只是「念着更顺」就改，十次里七次会改错。' },
        { en: 'Fifteen blanks, one point each — spend twelve to fifteen minutes, and never more.' },
        { zh: '15 个空，每空 1 分，12—15 分钟做完，别再多花。' },
        { code: '一张草稿边上该留下的痕迹（做完一篇后复盘用）：\n\n  空号   线索类型      依据词（圈出来）          选\n  ①     搭配          take over a shop          A\n  ②     呼应          broken / properly         A\n  ③     逻辑转折      fail ↔ refuse             A\n  ④     逻辑 + 态度   refuse ↔ still first      A\n  ⑤     卡住标记 40 秒，第二遍回来处理\n\n凡是「选完之后说不出依据词」的空，就是下次要练的空。' }
      ],
      ex: [
        { q: '你在第 7 空卡住了，A 和 D 都读得通，已经耗了 1 分钟。最该做的是什么？',
          a: ['不要再读这一句了。反复读不会产生新线索，只会吃掉后面题目的时间。',
              '先按当前判断选一个（比如 A），在题号旁边画个小圈做记号。',
              '继续往下做，留意复现线索：这类空经常在后文有同义或反义的说法，答案可能在后头等着你。',
              '第二遍复检时带着整篇的信息回来处理带圈的空，判断成本比第一遍低得多。',
              '结论：卡住的空就地跳过并标记，靠后文反推，不要在单句上死磕。'],
          tip: '完形的时间黑洞就发生在反复读同一句话上。给自己定死规矩：一个空超过 40 秒，立刻标记跳过。' }
      ]
    }

  ]
};
