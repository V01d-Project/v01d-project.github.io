window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 1, chapterName: '写作教程',
  sections: [

    // ── 一 ──
    {
      h: '一、应用文怎么评分',
      p: [
        '先说结论：应用文不是「自由作文」，而是一道有明确格式要求的任务题。阅卷老师看三样东西——内容全不全、结构对不对、语言能不能看。这三样是三笔分开算的分，丢哪一笔都可惜。',
        '内容分看的是「题目要求你做的事，你做了几件」。比如写邀请信，题目给了三条要点：活动是什么、时间地点、希望对方做什么。你少写一条，内容分就少一块。这一项最好拿，因为要点在题目里摆着，一条一条对着写就行。',
        '结构分看的是「像不像一封应用文」：称呼有没有、该分段的地方分没分段、落款写没写。这项不看你文采，只看格式，是最不该丢的分。',
        '语言分看的是句子能不能读通：时态对不对、搭配对不对、有没有一堆中式英语。这项最花时间，靠平时把句子背熟，临时抱佛脚效果有限。',
        { li: '内容：题目给的要点一条都不能漏。动笔前先把要点圈出来，写完数一遍圈了几个、写了几个。' },
        { li: '结构：称呼／开头交代目的／中间写要点／结尾客套／落款，五块缺一块就丢分。' },
        { li: '语言：不要求长难句，要求没有明显语法错、搭配准、少中式英语。' },
        { tip: '一篇「要点齐全、格式完整、句子简单但没错」的应用文，通常比「漏了一条要点、句子很花但错一堆」的分数高。先把稳的拿住。' },
        { en: 'I am writing to invite you to our English evening.', zh: '我写信是想邀请你来参加我们的英语晚会。——这一句同时交代了「写信目的」和「活动名称」，开头第一句就该起这个作用。' },
        { code: '题目要点（示例）：\n① 下周日 9 点，学校邀请一位外教做讲座\n② 地点：学校礼堂\n③ 请同学们准时参加，可以自由提问\n\n对着写：\n① Our school will invite a foreign teacher to give a lecture at 9 a.m. next Sunday.\n② It will be held in the school hall.\n③ Everyone is expected to arrive on time, and you may ask questions freely.' }
      ],
      ex: [
        {
          q: '题目要求写一封邀请信，给了三个要点：活动（英语角）、时间地点（本周五下午 4 点，学校花园）、希望对方介绍学习方法。小李写完了，活动和时间地点都写了，但第三条只在最后加了一句 Please come. 这一篇内容分大概会怎么样？',
          a: [
            '先数要点：题目一共三条，他写了前两条，第三条没落到纸上。',
            '第三条「希望对方介绍学习方法」是这封信里最具体的那个请求，漏了就等于没把话说清楚。',
            '最后那句 Please come 不算第三条，它只是客套。所以内容分上，三条只算写了两条。',
            '改法：把 Please come. 换成 Would you please share your learning methods with us? 这一句既补上第三条要点，又保住了结尾的礼貌。',
            '记住：结尾的客套句不能顶替要点。要点要单独用一句话写清楚，客套句只是收尾。'
          ],
          tip: '最常见的错就是把要点和客套话混在一起，以为写了「请你来」就等于写了「请你分享方法」。'
        }
      ]
    },

    // ── 二 ──
    {
      h: '二、三段结构：开头怎么起、中间怎么展开、结尾怎么收',
      p: [
        '所有应用文都能装进同一个模子：三段。第一段交代「我为什么写这封信」，第二段写「具体的事」，第三段收尾「我期待什么」。',
        '第一段（开头）：一到两句，只干一件事——说明写信目的。标准句式是 I am writing to ...。别在这里抒情，也别铺垫背景，老师一眼就想知道你写这封信干什么。写完目的句，可以补一句自己是谁、从哪知道的消息。',
        '第二段（中间）：这是主体，要点全在这一段。按题目给的顺序一条一条写，每条一到两句。条与条之间要有连接词（First of all / Besides / What is more），让老师看得出你在分条说事，而不是把要点堆成一团。',
        '第三段（结尾）：一到两句，说期待或感谢，再用一句客套话收住。常见的是 I would appreciate it if ... / Looking forward to your reply. 写完别再加新内容，新信息放中间段。',
        { li: '开头 1—2 句：I am writing to ... 交代目的，点到为止。' },
        { li: '中间 3—5 句：要点一条一句，用 First of all / Besides / What is more 串起来。' },
        { li: '结尾 1—2 句：说期待、说感谢，套语收尾，不添新信息。' },
        { tip: '分段的边界要清楚。最常见的问题是开头段写了四五句，把中间该写的事都写了，结果中间段空着——这是结构分最容易掉的地方。' },
        { en: 'I am writing to tell you about our plan for the coming English Week.', zh: '我写信是想告诉你我们下周英语周的计划。——开头段的标准起手式，后面接什么都顺。' },
        { en: 'First of all, ... Besides, ... What is more, ...', zh: '首先要说的是……另外……再者……——中间段分条写事的三个连接词，按顺序用，别只用一个词重复。' },
        { en: 'I would appreciate it if you could reply before Friday.', zh: '如果你能在周五前回复，我将不胜感激。——结尾段的标准句，注意 appreciate 后面先跟 it，再跟 if。' },
        { code: '三段结构（示例，邀请信）：\n\n第一段：I am writing to invite you to our English evening.\n第二段：First of all, it will be held at 7 p.m. on Friday. Besides, there will be songs and short plays. What is more, you may bring a friend.\n第三段：I would be grateful if you could come. Looking forward to your reply.' }
      ],
      ex: [
        {
          q: '下面这段是一封建议信的主体，中间段看不出层次，怎么改？\n\n「I am writing to give you some advice. You should read English aloud every morning. You should keep a diary. You should also join an English club. I hope it helps.」',
          a: [
            '先看目的：这封信的目的句没问题。',
            '问题在中间三条建议一个连接词都没有，三条 You should 排在一起，读起来像在往下属下命令，还看不出分了几条。',
            '改法第一步：给三条建议各加一个连接词——First of all / Besides / What is more。',
            '改法第二步：把 You should 换成更温和的说法，比如 I suggest that you ... / it would be a good idea to ... / why not ...?',
            '改完：First of all, I suggest that you read English aloud every morning. Besides, it would be a good idea to keep a diary in English. What is more, why not join an English club?',
            '最后一句 I hope it helps 可以留，也可以升级成 I hope you will find these suggestions helpful.'
          ],
          tip: '建议信里连用 You should / You must，是最典型的「语气扣分」，内容对了也照样吃亏。'
        }
      ]
    },

    // ── 三 ──
    {
      h: '三、称呼、结尾敬语、落款',
      p: [
        '这三块是格式分，写对了不加分，写错了直接扣，而且特别好记。花五分钟记牢，比背十个高级词划算。',
        '称呼写在第一行，顶格，后面跟逗号（不是冒号）。分三种情况：知道对方姓 → Dear Mr. Wang, / Dear Ms. Li, / Dear Professor Smith,；不知道对方是谁 → Dear Sir or Madam,；写给朋友或同学 → 直接 Dear Tom, 就行。',
        '结尾敬语是信写完以后单独一行的那句话。规则和称呼配着记：称呼里写了对方的姓（Dear Mr. Wang,）就用 Yours sincerely,；称呼用的是 Dear Sir or Madam, 就用 Yours faithfully,；写给熟人、朋友，用 Best wishes, 或 Yours, 都可以。',
        '落款就是你的署名，写在结尾敬语下面，靠左对齐。考试里一律写 Li Hua，后面不加句号。别用真名，也别写英文名。',
        { li: '称呼：顶格写，末尾用逗号。Dear Mr. Wang, / Dear Sir or Madam, / Dear Tom,' },
        { li: '结尾敬语：单独一行。知道姓名→Yours sincerely,；不知姓名→Yours faithfully,；熟人→Best wishes,' },
        { li: '落款：Li Hua，靠左，不加句号，前面和结尾敬语之间空一行。' },
        { tip: '中英最大的差别：中文信最后写「此致 / 敬礼」，英文信不写这个，对应位置就是 Yours sincerely 那类敬语。另外英文日期的写法是 May 20th, 2026 或 20th May, 2026，不要写成 2026 年 5 月 20 日那种顺序。' },
        { code: '一整封样信（邀请信，可直接照这个骨架写）：\n\nDear Mr. Smith,\n\n    On behalf of the Student Union, I am writing to invite you to be the judge of our English speech contest.\n\n    The contest will be held in the school hall from 2 p.m. to 5 p.m. on May 20th. About twenty students will take part, and each of them will give a three-minute speech on "My Dream". We would be honoured to have you with us, as your comments would be of great help to us.\n\n    I would be grateful if you could accept my invitation. Looking forward to your reply.\n\nYours sincerely,\nLi Hua' }
      ],
      ex: [
        {
          q: '一封信的称呼写成「Dear Mr. Wang:」，结尾写成「Yours, / Li Hua」，落款写「Li Hua.」。这样写有几处要改？',
          a: [
            '第一处，称呼后面的标点：英文信件里称呼后面用逗号，不用冒号。改成 Dear Mr. Wang,',
            '第二处，结尾敬语和称呼的搭配：称呼用了 Mr. Wang（知道姓名），结尾就该用 Yours sincerely, 而不是 Yours,。',
            '第三处，落款后面的句号：署名后面不加句号，改成 Li Hua。',
            '三处都是纯格式问题，跟英语水平无关，改完就是格式满分。',
            '记住一条配对规则：称呼里有姓 → Yours sincerely；称呼是 Sir or Madam → Yours faithfully。'
          ],
          tip: '考场上把这三处对着称呼检查一遍，十秒钟能救回格式分。'
        }
      ]
    },

    // ── 四 ──
    {
      h: '四、怎么把「中文想法」变成英语句子',
      p: [
        '写不出来，多半不是英语差，而是方法错——脑子里先有一句很漂亮的中文，然后一个词一个词往英语上换。这样换出来的句子，老师一看就是「中式英语」。',
        '正确的顺序只有三步：先想清楚这句中文到底要说什么 → 把它说成一句最简单的中文 → 再翻成英语。第三步最难的是「不会的词怎么办」，答案是换一个你会的说法，而不是硬造一个词。',
        '举个例子，你想说「这次活动能开拓我们的视野」。第一步，你要说的是：活动对我们有好处。第二步，简单中文：这个活动对我们有帮助。第三步：This activity is helpful to us. 句子简单，但一个错都没有。至于 broaden our horizons 那种说法，会写就写，不会写千万别硬凑成 open our eyesight 这种错词。',
        '还有一条铁律：先定主干，再挂细节。英语句子的主干是「谁 + 做什么 + 对谁 / 什么」，状语（时间、地点、方式）都挂在主干后面。中文爱把时间放前面，英语习惯放后面。',
        { li: '第一步：把中文想法压成一句最简单的话，说清楚「谁、做什么、结果怎样」。' },
        { li: '第二步：为这句简单的中文找一个你有把握的英语句型（比如 be helpful to / be good at / take part in）。' },
        { li: '第三步：想说但不会的词，换成你会说的近义说法，不硬造词。' },
        { tip: '中文喜欢用「动词连着动词」，英语一句话只能有一个谓语，其余动作要靠 to do / doing / 介词来处理。' },
        { en: 'This activity is helpful to us.', zh: '这个活动对我们有帮助。——不会写 broaden our horizons 时的安全选择，先把意思送到，不要为了一个「高级词」把整句写错。' },
        { en: 'It will be held in the school hall at 3 p.m. next Friday.', zh: '活动将于下周五下午 3 点在学校礼堂举行。——英语里时间和地点放句尾，先说要紧的（held），再补细节。' },
        { code: '中式英语 → 改法：\n\n× I very like this activity.\n  → I like this activity very much.（very 不能直接修饰动词）\n\n× I am very happy to can join it.\n  → I am very happy to be able to join it.（to 后面不能跟 can）\n\n× There have many students took part in it.\n  → Many students took part in it.（「有」不能一律翻成 there have）\n\n× My English level has improved.\n  → My English has improved.（level 是多余的）\n\n× Please you come on time.\n  → Please come on time.（please 不能和 you 一起用）' }
      ],
      ex: [
        {
          q: '把「我希望你能在周五之前把演讲稿发给我」写成英语。',
          a: [
            '第一步，压成最简单的中文：我要你把稿子在周五前给我。',
            '第二步，找出主干：我 + 希望 + 一件事。「希望」后面接的是宾语从句，用 I hope (that) you can ...。',
            '第三步，写从句里的内容：你把演讲稿发给我，在周五之前。『发给我』用 send me ... ；『周五之前』用 before Friday，放句尾。',
            '合起来：I hope you can send me your speech before Friday.',
            '如果想说「发到我的邮箱」，就在后面加 to my email：I hope you can send your speech to my email before Friday.',
            '整个过程中，没有出现任何一个你没把握的词，句子也没错。这就是「先压简单、再翻」的用法。'
          ],
          tip: '一上来就想「我希望你能在周五之前把演讲稿发给我」逐字翻，很容易冒出 I hope you can give me your speech before Friday in time 这种堆在一起的句子。'
        }
      ]
    },

    // ── 五 ──
    {
      h: '五、8 个最容易丢分的毛病',
      p: [
        '下面这 8 条，是应用文里最常见、也最容易改的丢分点。每条都给了改法，考前对着自己的作文一条一条过。',
        { li: '① 要点漏写或写偏。题目给了三条要点，你只写了意思最熟的那两条。改法：动笔前先在题目上把要点编号圈出来，写完回头数一遍，缺的那条宁可写得简单也要补上。' },
        { li: '② 缺少称呼和落款。直接从正文开始写，或者结尾忘了署名。改法：养成习惯——动笔第一行先写 Dear ..., 写完最后两行先写 Yours sincerely, 再写 Li Hua，中间的正文最后填。' },
        { li: '③ 时态乱。写的是「下周的活动」，却用了一般过去时。改法：先定时间基准——活动还没发生用将来时（will be held），已经在写过去的事用过去时，通篇不改。' },
        { li: '④ 逐字直译的中式英语。比如把「我很高兴」写成 I very happy。改法：写之前先在脑子里把中文压缩成最简单的一句，再翻；不确定的搭配宁可换成 be happy to do 这种最普通的说法。' },
        { li: '⑤ 通篇简单句，没有连接词。五六个短句用句号隔开，读起来像清单。改法：在每两条信息之间插一个连接词——First of all / Besides / What is more / However，成本极低，效果明显。' },
        { li: '⑥ 口语词和缩写混进正式信件。写成 dont、cant、OK、Yeah、a lot of。改法：正式书信里一律写全 do not / cannot；OK 换成 All right 或直接删掉；a lot of 换成 many / plenty of。' },
        { li: '⑦ 语气不对。建议信里一路 You must / You should；通知里冒出 I think we should。改法：建议信用 I suggest that you ... / it would be better if you ...；通知是第三人称口吻，用 the Students\' Union 作主语，不出现「我」。' },
        { li: '⑧ 词数不够或跑题。要求 100 词左右，只写了 60 词；或者题目问活动安排，你大半篇写自己学习的感受。改法：词数不够时回到要点，每一条要点后面补一句「为什么」或「怎么做」；跑题则是写之前先把每段要写什么用中文列三行。' },
        { tip: '这 8 条里，①②③⑦ 是纯格式和结构问题，不靠英语水平也能修好，考场上优先保。' },
        { code: '改前（问题：③④⑤⑥⑦ 都在）：\n\nDear Tom,\nI very happy you come my school. You must come. We will have a party last week. I think we should be happy. OK? dont be late.\nLi Hua\n\n改后：\n\nDear Tom,\n    I am very happy to hear that you will visit our school. I am writing to tell you about the party we are going to hold.\n    First of all, the party will be held this Saturday evening. Besides, all our classmates would like you to come. What is more, you may bring a friend with you.\n    I hope you can make it. Looking forward to seeing you.\nYours sincerely,\nLi Hua' }
      ],
      ex: [
        {
          q: '「Our school will hold a lecture. It is on next Sunday. It is at 9 a.m. We hope you can come.」这几句问题在哪，怎么改？',
          a: [
            '看结构：四个短句各自成句，中间没有任何连接词，这就是毛病⑤。',
            '看重复：It is ... It is ... 连着两句都用同一个句型，读起来很单调。',
            '改法第一步：把后两句的时间信息合到一起，用 at 9 a.m. next Sunday 一次说完。',
            '改法第二步：加连接词，让两句的关系显出来。前一句说安排，后一句说希望，可以用 and 或另起一句用 Besides。',
            '改完：Our school will hold a lecture at 9 a.m. next Sunday, and we hope you can come.',
            '也可以升级成更地道的说法：Our school will hold a lecture at 9 a.m. next Sunday. We would be delighted if you could join us.'
          ],
          tip: '把「It is on ... / It is at ...」合起来，是应用文里性价比最高的一次修改——省词、加结构分、还更地道。'
        }
      ]
    }

  ]
};
