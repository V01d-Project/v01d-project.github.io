window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 8, chapterName: '范文拆解 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、先说结论：背范文没用，拆范文才有用',
      p: [
        '这一章只做一件事：把三篇范文拆开，告诉你每一句在干什么、哪一句能搬到自己的卷子上。',
        '先说为什么不能整篇背。考场上不会考同一道题。你背熟的那篇邀请信如果是「请外教看京剧」，卷子上出的变成「请外教当评委」，句子立刻卡住。能带走的从来不是整篇，是句子——而且是你知道它「什么时候用」的句子。',
        '拆范文只有四个动作，顺序不能乱：',
        { li: '① 判身份：写给谁的？朋友、老师、还是不认识的读者？亲疏决定称呼和语气。' },
        { li: '② 圈要点：题目给了几条要求就圈几个，逐条在范文里标出对应句子。漏一条要点，内容分就少一块，这是最硬的失分。' },
        { li: '③ 拆句子：每句问它「在完成什么任务」——打招呼、交代目的、给信息，还是收尾。任务认出来，句式就记住了。' },
        { li: '④ 抄词块：只抄「结构能留、内容能换」的半成品。像 It will be held in ___ at ___ 这种，换时间地点就能用；只能用在「美术课」上的句子，出了这道题就死。' },
        { tip: '判断一句值不值得背，只看一个标准：换个题目它还能不能用。能用就背，不能用就跳过。后面标的「可迁移」句子，都是按这个标准挑的。' },
        { en: 'Do not memorise the whole essay; memorise the sentences that can move to another topic.', zh: '别背整篇，只背能搬到别的题目上去的句子。——这是这一章唯一的方法论。' },
        { code: '拆一篇范文，纸上该留下这样的痕迹：\n\n  Dear Chris,                      ← 身份：朋友，Dear + 名\n  I\'m writing to share ...          ← 任务：开头交代写信目的\n  Our teacher asked us to ...      ← 任务：要点 1 的引子\n  I chose the lake and ...         ← 任务：要点 1（你完成的作品）\n  The class meant a lot to me.     ← 任务：转场到要点 2\n  In the open air I noticed ...    ← 任务：要点 2（你的感想）\n  I do hope we can ...             ← 任务：收尾期待\n  Yours, / Li Hua                  ← 格式：敬语 + 署名' }
      ],
      ex: [
        { q: '一篇范文里有这么一句：I spent nearly two hours on it and got a picture I was proud of. 这句值不值得背？为什么？',
          a: ['先看它承担什么任务：它在给「你完成的作品」这条要点补细节——画了多久、结果怎么样。',
              '再看能不能迁移：把它拆成 I spent nearly ___ on it and got ___ I was proud of.，换题目马上能用——练琴、做手工、备赛、写程序都套得上。',
              '结论：值得背，但背的是「半成品」的骨架，不背「画了一幅画」这个具体内容。',
              '同一篇里的 the lake and the willow trees around it 就属于这道题专属的细节，换题即废，理解就行，不必背。'],
          tip: '标准只有一条：换个题目还能不能用。能用就背，不能用就跳过。' }
      ]
    },

    // ── 二 ──
    {
      h: '二、范文一：给朋友分享一次经历（2024 新课标 I 卷真题情境）',
      p: [
        '先看题。这是 2024 年新课标 I 卷写作第一节的真题情境：15 分，词数 80 左右。',
        { code: '【题目 · 2024 新课标 I 卷 写作第一节】\n假定你是李华，上周五你们班在公园上了一堂美术课。请你给英国朋友 Chris 写一封\n邮件分享这次经历，内容包括：\n  (1) 你完成的作品；\n  (2) 你的感想。\n注意：词数 80 左右。\n\n【示范范文】（教学示范，非官方答案）\n\nDear Chris,\n\n    I\'m writing to share with you an art class I had in a park last Friday.\n    Our teacher asked us to draw whatever we liked, so I chose the lake and\n    the willow trees around it. I spent nearly two hours on it and got a\n    picture I was proud of.\n    The class meant a lot to me. In the open air I noticed how colours change\n    with the light, which no photo can show. I do hope we can have such\n    classes more often.\n\nYours,\nLi Hua' },
        '现在一句一句拆。每句后面括号里写的，是它在这个任务里干什么。',
        { li: 'Dear Chris, ——（格式 · 称呼）写给朋友，Dear + 名，末尾用逗号，不是冒号。这一分是白送的。' },
        { li: 'I\'m writing to share with you an art class I had in a park last Friday. ——（任务 · 交代目的）开头第一句就点明「我写这封信是来分享什么的」。可迁移：把 share 后面换掉，a trip / a match / a book 都行，句式不动。' },
        { li: 'Our teacher asked us to draw whatever we liked, so I chose the lake and the willow trees around it. ——（任务 · 要点 1 引子）先交代缘由，再引出画了什么。whatever we liked = 随我们喜欢，比 we could draw anything 更紧凑。' },
        { li: 'I spent nearly two hours on it and got a picture I was proud of. ——（任务 · 要点 1 收尾）给作品补一个细节，说明花了多久、结果怎样。可迁移骨架：I spent nearly ___ on it and got ___ I was proud of.' },
        { li: 'The class meant a lot to me. ——（任务 · 转场）一句话把话头从「做了什么」转到「什么感受」。可迁移到任何一次经历：The trip meant a lot to me. / The match meant a lot to me.' },
        { li: 'In the open air I noticed how colours change with the light, which no photo can show. ——（任务 · 要点 2）全文最值钱的一句：用 how 从句说「注意到什么」，再用 which 补一句点评。句子长但不难，整句背下来。' },
        { li: 'I do hope we can have such classes more often. ——（任务 · 收尾）表达期待。这里的 do 是强调，语气更真。' },
        { li: 'Yours, / Li Hua ——（格式 · 敬语与署名）写给朋友，Yours, 或 Best wishes, 都行；署名一律 Li Hua，不加句号。' },
        { tip: '这道题最容易丢的不是语言，是只写到一条要点。很多人大篇幅写「我画了什么」，「你的感想」忘了写，内容分直接砍半。动笔前先把 (1)(2) 抄在草稿边上，写完一条划掉一条。' },
        { en: 'In the open air I noticed how colours change with the light, which no photo can show.', zh: '在户外我注意到颜色会随光变化，这是照片拍不出来的。——how 从句 + which 补充说明，换个题目照样能用。' },
        { code: '本篇「可迁移词块」（只背方括号里的骨架，内容自己换）：\n\n  I\'m writing to share with you [一件事].\n  [某人] asked us to [做某事], so I [我做的选择].\n  I spent nearly [一段时间] on it and got [某个结果] I was proud of.\n  [这件事] meant a lot to me.\n  I noticed how [某个现象], which [一句点评].\n  I do hope we can [某个期待] more often.' }
      ],
      ex: [
        { q: '题目要求 80 词左右。有同学写了 130 词，多出来的部分全在「我画了什么」上：湖、树、鸭子、小船、天上的云都写了一遍。这样写有什么问题？',
          a: ['先对要点：要点 (1) 写得极满，要点 (2)「你的感想」只剩半句，两条要点严重失衡。',
              '再看阅卷：内容分看的是要点齐全，不是某一条写得多。多写不加分，漏写要扣分。',
              '再看语言：鸭子、小船、云这类词一旦拼错或用得不地道，反而多出扣分点，风险大于收益。',
              '改法：细节只留一个（比如 the lake and the willow trees around it），省下的篇幅全部给「感想」，而且必须写成完整句子。',
              '记住：词数写到上限附近就够，要点均衡比篇幅长重要。'],
          tip: '两个要点就各给它 2—3 句，别让一条撑满全篇。' }
      ]
    },

    // ── 三 ──
    {
      h: '三、范文二：给外教写邮件定栏目（2025 新课标 I 卷真题情境）',
      p: [
        '这一篇考的是「从两个选项里挑一个，并说明理由」，属于表态 / 建议类邮件。分值同样 15 分，词数 80 左右。',
        { code: '【题目 · 2025 新课标 I 卷（全国 I 卷）写作第一节】\n假定你是李华，你班英语报将增设一个新栏目。外教 Jenny 提出\n"Fun at my school" 和 "Guess who I am" 两个选项供大家选择。请给 Jenny\n写一封邮件，内容包括：\n  (1) 你的选择；\n  (2) 说明理由。\n注意：词数 80 左右。\n\n【示范范文】（教学示范，非官方答案）\n\nDear Jenny,\n\n    I\'m writing to tell you my choice for the new column in our English\n    newspaper.\n    I would like to choose "Guess who I am". First of all, it is more fun,\n    because readers have to guess who the person is. Besides, we can describe\n    our classmates with the new words we have learned. What is more, those who\n    guess right may share their own stories, so more students will join in.\n    I hope my idea is helpful.\n\nYours,\nLi Hua' },
        '逐句拆。这道题的关键在中间段的分条结构：理由不能堆成一团，要让老师一眼看出你分了几条。',
        { li: 'Dear Jenny, ——（格式 · 称呼）写给外教、知道名字，用 Dear + 名。' },
        { li: 'I\'m writing to tell you my choice for the new column in our English newspaper. ——（任务 · 交代目的）tell you my choice 直接点题：我是来说我选哪个的。可迁移：tell you my plan / my decision / my suggestion。' },
        { li: 'I would like to choose "Guess who I am". ——（任务 · 要点 1）选择单独成句，短、清楚、不绕。I would like to 比 I want to 客气。' },
        { li: 'First of all, it is more fun, because readers have to guess who the person is. ——（任务 · 理由①）First of all 起头，because 接原因。' },
        { li: 'Besides, we can describe our classmates with the new words we have learned. ——（任务 · 理由②）Besides 接第二条。with the new words we have learned 是「用学过的词」，比 say new words 准确得多。' },
        { li: 'What is more, those who guess right may share their own stories, so more students will join in. ——（任务 · 理由③）What is more 接第三条；those who ... 是「猜对的人」，so 带出结果。' },
        { li: 'I hope my idea is helpful. ——（任务 · 收尾）一句客气收住，不添新信息。' },
        { tip: '三个连接词（First of all / Besides / What is more）是这道题最划算的投入：占不到 8 个词，却直接把「语法结构单调、缺少连贯」这一档拉上去。理由超过两条，就一定要分条。' },
        { en: 'Besides, we can describe our classmates with the new words we have learned.', zh: '另外，我们能用学过的词来描述同学。——Besides 起第二条理由，后面必须接一个具体「怎么做」。' },
        { code: '本篇「可迁移词块」：\n\n  I\'m writing to tell you my [choice / plan / suggestion].\n  I would like to choose [选项].\n  First of all, it is [评价], because [原因].\n  Besides, we can [做某事] with [某个条件].\n  What is more, those who [做某事] may [结果], so [进一步结果].\n  I hope my idea is helpful.' }
      ],
      ex: [
        { q: '把下面这段表态邮件的中间段改得有层次：\n「I choose "Fun at my school". It is interesting. We can play games. We can make new friends. I hope you like it.」',
          a: ['先数理由：他一共给了三条（有意思、能做游戏、能交新朋友），但三条平铺直叙，没有任何连接词，读起来像清单。',
              '改法第一步：给三条各加一个连接词——First of all / Besides / What is more。',
              '改法第二步：把 It is interesting 这种笼统说法具体化，接一个 because：First of all, it is more interesting, because we can play games together.',
              '改法第三步：后两条合并成 Besides 和 What is more，每条各自补成完整句子（主语 + 谓语）。',
              '改完：First of all, it is more interesting, because we can play games together. Besides, we can make new friends from other classes. What is more, it gives shy students a chance to speak.',
              '注意：连接词只是骨架，每条理由后面仍要有一个具体内容，否则就是空话。'],
          tip: '理由超过两条不分条，是表态类邮件最常见的扣分点，改起来却只要三个连接词。' }
      ]
    },

    // ── 四 ──
    {
      h: '四、范文三：通知（自拟仿真题）',
      p: [
        '通知和前两篇有本质区别：它不是在跟一个人说话，是面向全体读者。所以通知里不出现「我」，主语用「学生会 / 我们学校」这类组织。',
        { code: '【题目 · 自拟仿真题，非真题】\n假定你是学生会主席李华，学校将举办一次英语演讲比赛。请用英语写一则通知，\n内容包括：\n  (1) 活动时间与地点；\n  (2) 活动内容与要求；\n  (3) 报名方式。\n注意：词数 100 左右。\n\n【示范范文】（教学示范，非官方答案）\n\nNOTICE\n\n    In order to improve our spoken English, the Students\' Union is going to\n    hold an English speech contest.\n    The contest will take place in the school hall at 3 p.m. on Friday, May\n    26th. Each speaker will give a three-minute speech on the topic "My\n    Campus Life". After that, two foreign teachers will give short comments.\n    Anyone who wants to take part should sign up in Room 305 before May 20th.\n    Come and join us!\n\nThe Students\' Union\nMay 15th' },
        '逐句拆。注意三条要点是怎么各占一到两句的。',
        { li: 'NOTICE ——（格式）单独一行，一个词，不加句号。这是通知的身份证，缺了就不是通知。' },
        { li: 'In order to improve our spoken English, the Students\' Union is going to hold an English speech contest. ——（任务 · 交代事由）In order to 开头说目的，主句用组织作主语。可迁移：In order to ___, [组织] is going to hold ___.' },
        { li: 'The contest will take place in the school hall at 3 p.m. on Friday, May 26th. ——（任务 · 要点 1）时间地点一句说完：地点在前、时间在后。take place = 举行，主动语态比 be held 更像通知口吻。' },
        { li: 'Each speaker will give a three-minute speech on the topic "My Campus Life". ——（任务 · 要点 2 之一）说明内容和形式。three-minute 有连字符，minute 不加 s。' },
        { li: 'After that, two foreign teachers will give short comments. ——（任务 · 要点 2 之二）用一个时间连接词把第二个环节接上，避免又开一个短句。' },
        { li: 'Anyone who wants to take part should sign up in Room 305 before May 20th. ——（任务 · 要点 3）报名方式：Anyone who ... 是「想参加的人」，should sign up 给动作，地点和时间用 in / before 带出来。' },
        { li: 'Come and join us! ——（收尾）通知常用的号召句，短、有劲，不写 I hope you can come。' },
        { li: 'The Students\' Union / May 15th ——（格式 · 落款）组织名 + 日期。日期写 May 15th 或 15th May，不写「2026 年 5 月 15 日」那种顺序。' },
        { tip: '通知最典型的两处失分：一是把「我」写进去（I think we should hold ...），二是落款忘了写组织名和日期。通知是组织在说话，全文不该出现一个 I。' },
        { en: 'Anyone who wants to take part should sign up in Room 305 before May 20th.', zh: '想参加的同学请在 5 月 20 日前到 305 室报名。——一条句子同时交代「谁、做什么、在哪、什么时候」。' },
        { code: '本篇「可迁移词块」：\n\n  In order to [目的], [组织] is going to hold [活动].\n  [活动] will take place in [地点] at [时间].\n  Each [参与者] will give a [时长] speech on the topic "[主题]".\n  After that, [某人] will [做什么].\n  Anyone who wants to take part should sign up in [地点] before [时间].\n  Come and join us!' }
      ],
      ex: [
        { q: '下面这则通知的问题在哪？怎么改？\n「NOTICE\nI think we will have an English speech contest. It is interesting. You should come.\n还有，请想参加的同学到 305 室报名。\nThank you.」',
          a: ['第一处，人称错了：通知是组织在说话，不能出现 I think we will ...。改成 The Students\' Union is going to hold an English speech contest.',
              '第二处，要点严重不足：只有「有比赛」一条，时间、地点、内容、报名方式全没有——三条要点其实只写了半条。',
              '第三处，混进了中文：英语卷子里夹中文句子，这部分直接按无效内容处理。',
              '第四处，语气不对：You should come 是命令口吻，通知里换成 Come and join us! 或 Everyone is welcome.',
              '第五处，格式缺落款：通知末尾必须有组织名和日期。',
              '改完的样子就是本节范文：事由一句 → 时间地点一句 → 内容要求两句 → 报名一句 → 号召一句 → 落款两行。'],
          tip: '通知拿分靠「要点齐 + 格式全 + 不出现我」，三样都不靠英语水平，先保这三样。' }
      ]
    },

    // ── 五 ──
    {
      h: '五、把拆下来的东西装进自己的作文（三步）',
      p: [
        '范文拆完，最后一件事是把方法变成考场上能执行的动作。写应用文只有三步，练熟了就成条件反射。',
        { li: '第一步 · 审题（约 2 分钟）：把题目里的动词圈出来——「分享」「选择」「说明理由」「报告」「邀请」。每个动词对应一条要点，圈几条就是几条，抄到草稿纸边上。' },
        { li: '第二步 · 搭骨架（约 1 分钟）：三段固定——开头一句交代目的（I\'m writing to ...）、中间按要点顺序写、结尾一句收束（I hope ... / Looking forward to ...）。先把三段的「任务」写出来，再往里填内容。' },
        { li: '第三步 · 套词块（约 8 分钟）：按要点取句子；取不到就取骨架，比如 I spent nearly ___ on it and got ___ I was proud of.。宁可用简单但正确的句子，也别硬造一个高级词。' },
        { li: '最后 · 检查（约 2 分钟）：只查四样——称呼和落款写了没、要点一条不落、时态统一、复数与三单的 s。这四样都是「不靠水平也能救回来」的分。' },
        { tip: '考场时间：应用文建议 12—15 分钟。写不出来的时候，回到第一步——不要想「这句英语怎么说」，要想「这条要点我要交代什么」。从句子的任务出发，语言自己会简单下来。' },
        { en: 'Write down the task of each sentence first, and the English will follow.', zh: '先把每句话的任务想清楚，英语自然就跟上来了。' },
        { code: '一张草稿纸上应该长这样（以 2024 真题为例）：\n\n  要点 ①  我完成的作品\n  要点 ②  我的感想\n\n  第 1 段（目的）：I\'m writing to share ...\n  第 2 段（要点①）：老师让我们随便画 + 我画了湖和柳树 + 花了多久 / 结果\n  第 3 段（要点②）：这门课对我很重要 + 我注意到什么 + 希望还有这样的课\n\n  写的时候：哪条要点写完了，就在草稿上划掉哪条。\n  抬头看一眼——两条都划掉了，才算写完。' }
      ],
      ex: [
        { q: '考场上拿到一道 80 词的应用文，只剩 8 分钟，来不及想漂亮句子。这 8 分钟按什么顺序花？',
          a: ['前 1 分钟：圈要点。题目给几条圈几条，抄在草稿边上。这一步最便宜，却能挡住最大的失分。',
              '接着 2 分钟：写三段骨架。开头一句 I\'m writing to ...，结尾一句套语，先落笔，别空着。',
              '中间 4 分钟：按要点顺序，一条一句，句子能短就短。不会的词换成会说的近义说法，不硬造。',
              '最后 1 分钟：只查称呼 / 落款 / 要点齐不齐 / 复数与三单的 s。',
              '宁可交一篇「简单但没错、要点齐全」的，也不要交一篇「漏了要点、还错一堆」的——前者分数通常更高。'],
          tip: '时间不够时，优先保「要点齐全 + 格式完整」，语言放最后。' }
      ]
    }

  ]
};
