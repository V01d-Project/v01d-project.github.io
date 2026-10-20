window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 9, chapterName: '审题 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、审题：先把「要点」从题目里抠出来',
      p: [
        '审题不是把题目读一遍，是把题目里藏着的**要点**一条一条抠出来。抠漏一条，后面的句子写得再漂亮也白搭。',
        '题目的长相基本固定：一段中文情境 + 一句「内容包括：」+ 一个带编号的清单。**清单里的每一条，就是一个要点。**有 (1)(2) 就是两条，(1)(2)(3) 就是三条。',
        { li: '① 数编号：题目给 (1)(2) 就写两条，给 (1)(2)(3) 就写三条。没有编号的，按顿号、分号拆开数。' },
        { li: '② 圈动词：把「分享」「选择」「说明理由」「介绍」「邀请」「感谢」这类词圈出来。一个动词通常就对应一条要点。' },
        { li: '③ 抄到草稿纸边上：用中文抄，写一条划掉一条。这一步只花一分钟，挡住的是最大的一块失分。' },
        { tip: '题干里「内容包括」之前那些话（写给谁、什么体裁、什么情境）不是要点，但它们决定**称呼、人称和时态**，一样要圈出来。' },
        { code: '【怎么在题目上划要点 · 以 2025 新课标 I 卷为例】\n\n假定你是李华，你班英语报将增设一个新栏目。外教 Jenny 提出\n"Fun at my school" 和 "Guess who I am" 两个选项供大家选择。请给 Jenny\n写一封邮件，内容包括：\n  (1) 你的选择；            ← 要点①\n  (2) 说明理由。            ← 要点②\n注意：词数 80 左右。\n\n另圈出（不是要点，但决定怎么写）：\n  给 Jenny 写   → 称呼用 Dear Jenny\n  外教          → 语气客气，收尾用 Yours,\n  邮件          → 开头 I\'m writing to ...，落款 Li Hua\n  80 词左右     → 篇幅落到 80—100 词之间' },
        { en: 'Read the task twice: once for what to say, once for how to say it.', zh: '题目读两遍：一遍看要说什么（要点），一遍看怎么说（称呼、人称、时态、词数）。' }
      ],
      ex: [
        { q: '【自拟】假定你是李华，你校将举办一次英语演讲比赛。请给你校英国交换生 Peter 写一封邮件，邀请他参加，内容包括：(1) 比赛的时间与地点；(2) 比赛的主题与形式；(3) 邀请他担任评委。请写出这道题的要点清单，并说明题目里还有哪些信息不是要点。',
          a: ['先数编号：题目给了 (1)(2)(3)，所以是**三条要点**，不是两条。漏掉任何一条，内容分都要扣。',
              '要点① 比赛的时间与地点；要点② 比赛的主题与形式；要点③ 邀请他担任评委。',
              '再圈不是要点但必须管的：给 Peter 写 → Dear Peter；英国交换生 → 语气友好；邮件 → I\'m writing to ...，结尾 Yours, / Li Hua。',
              '题干里「你校将举办一次英语演讲比赛」是情境，不是要点——它只能当开头交代目的的那半句，不能占掉一整段。',
              '注意要点③是「邀请他当评委」，不是「邀请他参赛」。写成 Please come and take part in the contest. 就换了要点，也换了身份。'],
          tip: '先数编号再动笔。三条要点写成两条，是审题阶段最贵的失误。' }
      ]
    },

    // ── 二 ──
    {
      h: '二、每条要点，先写成一句英文骨架',
      p: [
        '要点抠出来之后，先别想「这句英语怎么写才高级」。要想四件事：**这条要点里，谁 + 做什么 + 什么时候／在哪里／为什么**。把这几个空填上，句子就出来了。',
        '骨架就长这样：主语 + 谓语 + 必要细节。先把每条要点都写成一句**能站住的英文**，再回头谈好不好听。',
        { li: '要点①「我完成的作品」——谁？I；做什么？drew a picture；什么内容？湖和柳树 → I drew a picture of the lake and the willow trees around it.' },
        { li: '要点②「我的感想」——谁？I；做什么？enjoyed the class；什么情况？in the open air → I really enjoyed the class in the open air.' },
        { tip: '骨架句可以很短、很土（I drew a picture. / I liked it.），但必须**一句对应一条要点**。先把每条要点都有一句话兜住，再回头把其中一两句加长、加细节。' },
        { code: '草稿纸上应该先出现这样一张「骨架表」（以 2024 真题为例）：\n\n  要点①  你完成的作品\n    谁：I   做什么：drew a picture   细节：of the lake and the willow trees\n    → I drew a picture of the lake and the willow trees around it.\n\n  要点②  你的感想\n    谁：I   做什么：enjoyed the class  细节：in the open air\n    → I really enjoyed the class in the open air.\n\n  每条要点先有一句英文站住，之后才往里加细节、加连接。' },
        { en: 'I drew a picture of the lake and the willow trees around it.', zh: '我画了一幅画，画的是湖和湖边的柳树。——要点「你完成的作品」的骨架句。' },
        { en: 'I really enjoyed the class in the open air.', zh: '我真的很喜欢那堂在户外上的课。——要点「你的感想」的骨架句。' }
      ],
      ex: [
        { q: '【自拟】假定你是李华，你校外教 Mr. Smith 下周要回国。请你给他写一封邮件，内容包括：(1) 感谢他一年来的教学；(2) 表达祝愿。请把这两条要点各写成一句英文骨架（不用写整篇）。',
          a: ['先抠要点：两条——(1) 感谢；(2) 祝愿。这道题没有第三条，别自己加「回忆往事」。',
              '要点①的骨架：谁 I，做什么 thank，谢谁 you，为什么 your teaching this year → I want to thank you for your teaching this year.',
              '要点②的骨架：谁 I，做什么 wish，祝谁 you，祝什么 all the best → I wish you all the best.',
              '骨架自检：两句各自主语 + 谓语齐全，各对应一条要点，没有哪条要点落空。',
              '再看人称：两句都是 I 和 you，因为这是「我写给一个人」的邮件。换成通知体裁，主语就要改成组织，骨架跟着变——所以人称在写骨架时就得一起定。'],
          tip: '骨架句不求长，求「一条要点一句话」，先把每条要点都兜住。' }
      ]
    },

    // ── 三 ──
    {
      h: '三、真题示范（1）：2024 新课标 I 卷 · 公园美术课',
      p: [
        '这是 2024 年新课标 I 卷写作第一节的真题情境（15 分，词数 80 左右）。按上一节的方法走一遍：划要点 → 写骨架 → 加细节连成篇。',
        { code: '【题目 · 2024 新课标 I 卷 写作第一节】\n假定你是李华，上周五你们班在公园上了一堂美术课。请你给英国朋友 Chris 写一封\n邮件分享这次经历，内容包括：\n  (1) 你完成的作品；\n  (2) 你的感想。\n注意：词数 80 左右。\n\n【第一步 · 划要点】\n  要点①  你完成的作品\n  要点②  你的感想\n  另圈：朋友 Chris → Dear Chris；邮件 → I\'m writing to ...；落款 Yours, / Li Hua\n\n【第二步 · 骨架】\n  1) 交代目的：I\'m writing to share with you an art class I had in a park last Friday.\n  2) 要点①  ：I drew a picture of the lake and the willow trees around it.\n  3) 要点②  ：I really enjoyed the class in the open air.\n\n【第三步 · 加细节、连成篇（示范范文，非官方答案）】\n\nDear Chris,\n\n    I\'m writing to share with you an art class I had in a park last Friday.\n    Our teacher asked us to draw whatever we liked, so I chose the lake and\n    the willow trees around it. I spent nearly two hours on it and got a\n    picture I was proud of.\n    The class meant a lot to me. In the open air I noticed how colours change\n    with the light, which no photo can show. I do hope we can have such\n    classes more often.\n\nYours,\nLi Hua' },
        { li: '骨架 → 成篇，加的是**细节和连接**：前面补一句缘由（老师让我们随便画），后面补一句细节（画了将近两小时、画出了让自己骄傲的作品）。' },
        { li: '骨架句没有被丢掉：I chose the lake and the willow trees around it 就是要点①的骨架，只是前后各挂了一句。' },
        { li: '要点之间的转场只用一句：The class meant a lot to me. ——从「我画了什么」转到「我什么感受」，这句可以搬到任何一次经历。' },
        { tip: '写的时候对着骨架表，一条要点写完就划掉一条。两条都划掉，才动手检查格式和词数。' },
        { en: 'Our teacher asked us to draw whatever we liked, so I chose the lake and the willow trees around it.', zh: '老师让我们随便画，所以我就画了湖和湖边的柳树。——先给缘由，再落要点①，句子一下就顺了。' }
      ],
      ex: [
        { q: '【真题情境 · 2024 新课标 I 卷】题目只给两条要点：(1) 你完成的作品；(2) 你的感想。有同学看到「公园」「美术课」，大篇幅写公园风景（天气、花、鸟、游人），两条要点却各只写一句。这是审题的哪一步出了问题？',
          a: ['问题在「划要点」之后没守住要点：他把**情境**（在公园上美术课）当成了内容，把要点①的「作品」写成了「公园里有什么」。',
              '区分很清楚：题目要的是「你的作品」——你画了什么、画得怎么样；不是「公园里有什么」。写风景等于拿背景当答案。',
              '改法：先把两条要点抄在草稿边上。写风景只留一句当引子（Our teacher asked us to draw whatever we liked），马上落到「我画了什么」。',
              '再给作品补一句细节（画了将近两小时、结果怎样），要点①就实了、也有字数了。',
              '要点②「感想」必须单独成句，不能靠开头那句交代缘由的句子带过——那是引子，不是感想。'],
          tip: '情境（在哪、和谁、什么时候）是背景，不是要点；要点就是「内容包括」下面那两条。' }
      ]
    },

    // ── 四 ──
    {
      h: '四、真题示范（2）：2025 新课标 I 卷 · 英语报新栏目二选一',
      p: [
        '这是 2025 年新课标 I 卷（全国 I 卷）写作第一节的真题情境。这道题的要点更「虚」：不是让你报告一件事，而是让你做选择、讲理由，最考验审题。',
        { code: '【题目 · 2025 新课标 I 卷 写作第一节】\n假定你是李华，你班英语报将增设一个新栏目。外教 Jenny 提出\n"Fun at my school" 和 "Guess who I am" 两个选项供大家选择。请给 Jenny\n写一封邮件，内容包括：\n  (1) 你的选择；\n  (2) 说明理由。\n注意：词数 80 左右。\n\n【第一步 · 划要点】\n  要点①  你的选择（必须明确选一个，不能两个都选、也不能不选）\n  要点②  说明理由（至少两条，最好分条写）\n  另圈：外教 Jenny → Dear Jenny；要「表态」→ 用 I would like to choose ...\n\n【第二步 · 骨架】\n  1) 交代目的：I\'m writing to tell you my choice for the new column.\n  2) 要点①  ：I would like to choose "Guess who I am".\n  3) 要点②  ：First of all, it is more fun. / Besides, we can describe our classmates.\n\n【第三步 · 加理由、连成篇（示范范文，非官方答案）】\n\nDear Jenny,\n\n    I\'m writing to tell you my choice for the new column in our English\n    newspaper.\n    I would like to choose "Guess who I am". First of all, it is more fun,\n    because readers have to guess who the person is. Besides, we can describe\n    our classmates with the new words we have learned. What is more, those who\n    guess right may share their own stories, so more students will join in.\n    I hope my idea is helpful.\n\nYours,\nLi Hua' },
        { li: '要点①「你的选择」只要一句：I would like to choose "Guess who I am". ——一句交代完，绝不展开成一整段。' },
        { li: '要点②是这道题的主体。骨架里先写 First of all, it is more fun. 这种半句，再补成「对谁、做什么、会怎样」的完整理由。' },
        { li: 'First of all / Besides / What is more 三个连接词把三条理由分开。它们占不到 8 个词，却能把「连贯」这一档直接拉上去。' },
        { tip: '二选一类的题目，「选择」只占一句，「理由」才是主体。把力气花在解释「为什么不选另一个」上，题目并没有问，写了不加分，还挤占篇幅。' },
        { en: 'I would like to choose "Guess who I am". First of all, it is more fun, because readers have to guess who the person is.', zh: '我想选「猜猜我是谁」。首先它更好玩，因为读者得去猜那个人是谁。——选择一句 + 理由一句（连接词 + because）。' }
      ],
      ex: [
        { q: '【真题情境 · 2025 新课标 I 卷】有同学这样审题：「Jenny 给了两个选项，所以我要把两个都写一遍、做个比较，最后再说我倾向哪个。」问题在哪？',
          a: ['题干问的是「你的选择」和「说明理由」，不是「比较两个选项」。做比较是自加的要求。',
              '两条要点里，一条是「选择」、一条是「理由」。把一半篇幅给比较，理由就写不深，要点②立刻变薄。',
              '80 词的容量也不够做完整比较。硬写的常见结果是：选择不明确、理由只有一句、还超了词数。',
              '正确做法：第一句直接 I would like to choose "___".；剩下的篇幅全给理由，写两到三条，分条写。',
              '如果确实想说一句不选另一个的原因，最多用半句带过，不能让它当主体。'],
          tip: '题面「内容包括」是一张封闭清单：清单外的东西写多了，挤掉的是清单内的分。' }
      ]
    },

    // ── 五 ──
    {
      h: '五、骨架写完的四查：人称 / 时态 / 称呼落款 / 词数',
      p: [
        '句子都写出来了，最后两分钟只查四样。这四样都是「不靠英语水平也能救回来」的分。',
        { li: '① 人称：写给一个人的邮件 = 我（I）对你（you）；通知 = 组织对全体读者，**全文不能出现 I**。写前先定，写后逐句扫一遍。' },
        { li: '② 时态：已经发生的（上周五那堂美术课）用过去时；打算要做的（将举办的比赛）用将来时。同一篇里别一会儿现在、一会儿过去地乱跳。' },
        { li: '③ 称呼与落款：知道名字用 Dear + 名（Dear Chris / Dear Jenny）；不知道名字用 Dear Sir or Madam。结尾给朋友用 Yours, 或 Best wishes,，给外教老师用 Yours, 或 Yours sincerely,；署名一律 Li Hua，不加句号。' },
        { li: '④ 词数：题目写 80 词左右，就落到 80—100 之间。少于 80 会按规则扣分；写太多容易出错、也容易两条要点一胖一瘦。数词数就一个个数字数，不估。' },
        { tip: '审题最常犯的两种错：**漏要点**（给了三条只写两条，内容分直接砍）和**跑题**（把情境当要点写，或写了题目没问的东西）。这两种在审题阶段就能挡住，不用等写完再改。' },
        { code: '【交卷前的四查清单】\n\n  □ 人称：邮件有人称 I / you ？通知里有没有混进 I ？\n  □ 时态：已发生的动词是不是过去式？将来做的有没有 will / be going to ？\n  □ 称呼：Dear + 名（或 Dear Sir or Madam）写了吗？\n  □ 落款：Yours, / Li Hua 写了吗？通知有没有组织名和日期？\n  □ 要点：题目给几条？我写了几条？有没有一条只写了半句？\n  □ 词数：数一遍，是不是 80—100 之间？' },
        { en: 'Check the reader, the tense, the greeting and the word count — before you check the grammar.', zh: '先查读者是谁、时态、称呼落款和词数，最后才查语法。——这四样最容易救，也最容易被忘。' }
      ],
      ex: [
        { q: '【自拟】下面是一位同学写 2024 真题情境的草稿：\n「Dear Chris,\nI am Li Hua. Our class have an art class in the park last Friday. It is very interesting. I draw a lake and trees. I think it is good.\nYours,\nLi Hua」\n请只按「人称 / 时态 / 称呼落款 / 词数」四查，把问题找出来。',
          a: ['称呼落款没问题：Dear Chris, 和 Yours, / Li Hua 都在，格式这一块是安全的，先保住它。',
              '时态大意了：已经发生的事要用过去时——have → had，is → was，draw → drew。改成 Our class had an art class in the park last Friday. / It was very interesting. / I drew a picture of a lake and trees.',
              '要点查：要点①「我完成的作品」有（湖和树），但太笼统；要点②「我的感想」只有 I think it is good 一句，太虚，要补成具体感受，比如 I really enjoyed drawing in the open air.',
              '词数查：全文大约 50 词，离 80 词左右差得远，会按「词数不足」扣分——这是数一遍就能发现的失分。',
              '顺带一句：I am Li Hua. 在邮件里是多余的，署名已经写了 Li Hua，开头不必再自我介绍，省下的词留给要点②。'],
          tip: '先查格式和要点，再查时态；词数不足数一遍就能发现，别漏。' }
        ,
        { q: '【自拟】题目：假定你是学生会主席李华，学校将举办英语演讲比赛，请写一则通知，内容包括：(1) 时间地点；(2) 内容要求；(3) 报名方式。有位同学通篇用 I think we should ... / I hope you can come ... 来写。这属于四查里的哪一查没过？怎么改？',
          a: ['属于第一查「人称」没过：通知是组织对全体读者说话，通篇不该出现 I。',
              '改法：主语换成组织——The Students\' Union is going to hold an English speech contest.，而不是 I think we should hold ...。',
              '收尾也跟着换：I hope you can come 改成 Come and join us! 或 Everyone is welcome. 这类面向所有人的号召句。',
              '同时补落款：通知末尾要有组织名（The Students\' Union）和日期，这两行不能少。',
              '要点也顺手数一遍：时间地点一句、内容要求一到两句、报名方式一句，三条各占一句，80—100 词刚好。'],
          tip: '人称是第一查，写前就定死：邮件用 I / you，通知不用 I。' }
      ]
    }

  ]
};
