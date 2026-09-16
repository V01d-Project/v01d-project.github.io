window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 2, chapterName: '格式与易错',
  sections: [
    {
      h: '① 应用文的评分点在哪',
      p: [
        '先想清楚一件事：阅卷老师一篇作文只看几十秒，他眼睛落在哪儿？落在三样东西上——内容点齐不齐、结构像不像一封信、语言有没有扎眼的错。这三样拿稳了，分数就稳了；句子漂不漂亮是加分项，不是保底项。',
        '所以顺序是这样：先把"该说的都说全"，再把"该有的位置都摆对"，最后才琢磨换几个高级句式。',
        { li: '内容：题目给出的任务点必须一条不漏。漏一条就直接掉一档，比写错一个时态严重得多。' },
        { li: '结构：最常见的是三段——第一段说明写信目的，第二段写清具体信息，第三段表达期待或感谢。' },
        { li: '语言：先保证不犯低级错（时态、主谓一致、拼写、大小写），再谈亮点句式。' },
        { tip: '动笔前把题目要求摘成 1、2、3 列在草稿边上，写完一条划掉一条。这个动作比回头检查十遍都管用。' },
        { code: '第一段：我为什么写这封信（目的）\n第二段：具体信息 / 我的情况 / 建议内容（细节）\n第三段：期待回复 / 表达感谢（收束）' }
      ]
    },
    {
      h: '② 称呼、开头、结尾、落款怎么写',
      p: [
        '为什么单讲这一节？因为中文信讲究"您好""此致敬礼"，位置随意也能看懂；英文书信的位置是硬规矩，称呼和落款放错了地方，句子写得再好也照样扣分。',
        '先说称呼。称呼只出现在第一行，正文里不要再喊一遍对方。',
        { li: '知道对方姓名：Dear Mr. Smith, / Dear Ms. Green, / Dear Li Hua, —— 后面用逗号。' },
        { li: '不知道姓名、不确定性别：Dear Sir or Madam, —— 后面也用逗号。' },
        { li: '男性用 Mr.，女性用 Ms.；不知道婚姻状况就用 Ms.，这是最稳的。' },
        { tip: '称呼后面写逗号（英式习惯），最稳；冒号主要出现在美式公务信里，考试别冒险。' },
        '再说开头。第一句就要说明"我为什么写这封信"，别从天气聊起。固定句式是 I am writing to ...，把 invite / apply for / express my thanks 直接接在后面。',
        '然后是结尾。结尾只做一件事：把话收住。期待回复用 I am looking forward to your reply.；礼貌收尾用 I would appreciate it if you could ...。',
        '最后是落款，它和称呼是一对，必须配对使用。',
        { li: '知道对方姓名（Dear Mr. Smith）→ Yours sincerely, → 空一行 → Li Hua' },
        { li: '不知道对方姓名（Dear Sir or Madam）→ Yours faithfully, → 空一行 → Li Hua' },
        { tip: '落款排三行：Yours sincerely, 一行、空一行、Li Hua 一行。Yours sincerely 后面是逗号不是句号，署名后面不加句号。' },
        { code: 'Dear Mr. Smith,\n\nI am writing to invite you to attend our English evening.\n\nI would be grateful if you could accept my invitation.\n\nYours sincerely,\n\nLi Hua' },
        { li: '中英差异：中文信开头常写"您好"，英文信不这么写；中文落款写"此致敬礼"，英文对应的就是 Yours sincerely / Yours faithfully；中文日期写年月日，英文通知、书信的日期常写 May 15th 这样的形式。' }
      ]
    },
    {
      h: '③ 最容易丢分的 6 个毛病',
      p: [
        '下面这六条都是"一看就知道错"的小毛病，但每一条都在扣分，而且改起来都不费劲。写完自己的作文，照着这六条过一遍就行。',
        { li: '① 称呼和落款配错：写了 Dear Mr. Smith, 结尾却用 Yours faithfully,。改法：知道对方姓名就配 Yours sincerely，不知道姓名（Dear Sir or Madam）才配 Yours faithfully。' },
        { li: '② 漏掉题目里的任务点：题目要求"告诉时间地点、邀请参加、请求回复"，只写了两条。改法：动笔前把要求列成 1、2、3，写完一条一条打勾。' },
        { li: '③ 时态前后打架：活动还没办，却写成 The activity was held last week.。改法：还没发生的事用一般将来时（will be held），已经发生的事用一般过去时，其他叙述用一般现在时，同一封信里按时间分开用。' },
        { li: '④ 通篇缩写加口语：写 I am 写成 I\'m，写 do not 写成 don\'t，还冒出 Come on! 这种话。改法：全部展开成 I am、do not、cannot，句子写完整，应用文是正式文体。' },
        { li: '⑤ appreciate 和 look forward to 后面接错：写成 I would appreciate if you could ...，或者 look forward to hear from you。改法：appreciate 后面先补上 it（I would appreciate it if you could ...）；look forward to 里的 to 是介词，后面接 doing（look forward to hearing from you）。' },
        { li: '⑥ 结尾催人或下命令：写 I hope you can come as soon as possible.，或者 You must reply at once.。改法：换成 I hope you can make it. / I would be grateful if you could reply at your earliest convenience. 语气才是"邀请"和"请求"。' },
        { tip: '另外两个高频小坑：落款别自己加 Your best friend（题目只要求"以李华的身份"，就写 Li Hua）；正文里别用 Hi / Hello 当称呼，称呼只有第一行那一个。' }
      ]
    }
  ]
};
