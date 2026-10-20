window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 2, bookName: '完形词块',
  chapterId: 1, chapterName: '四类线索 · 教程',
  sections: [
    {
      h: '一、完形到底在考什么',
      p: [
        '完形填空是 15 个空，每空 1 分，共 15 分（新课标卷口径；旧全国卷是「20 空、每题 1.5 分、共 30 分」，不要按那个分配时间）。它跟语法填空最像，也最容易被误解：很多人以为完形考的是词汇量，单词认识得多就能做对。',
        '事实上，完形的四个选项你通常全都认识。考的不是这个词你认不认识，而是这个词放在这个位置上合不合适——上下文有没有线索支持它。',
        '所以完形真正的题目不是选词，是找线索。文章的作者已经在前面或后面埋好了依据，你的任务是把这个依据找出来，然后选那个被依据支持的选项。',
        { li: '选项全都认识却选错，说明错在逻辑和语境，不在词汇。这时候继续背单词，不会有任何提升。' },
        { li: '完形的答案有且只有一个依据。凡是选完之后说不出依据的，都算猜，猜对的概率只有四分之一。' },
        { li: '四类线索覆盖了绝大多数题目：转折与因果线索、复现与同义替换线索、搭配线索、语境线索。' },
        '把完形当成找线索的游戏，比把它当成选词的考试，正确率高得多。因为线索是可以找的，语感是不稳定的。',
        { tip: '做完题以后别急着对答案，先问自己一句：这一空我选的依据是哪个词？说不出来的那几道，就是真正要练的地方。' },
        { en: 'The blank is not a test of vocabulary; it is a test of context.' },
        { zh: '填空考的不是词汇，而是上下文。' },
        { code: '看一个空是怎么被线索定出来的：\n\n  Tom studied hard for months. ______, he still failed the exam.\n\n  A. Therefore   B. However   C. Besides   D. Instead\n\n  第 1 步  读到 hard for months，预期是考得好，结果却是 failed the exam\n  第 2 步  前后意思相反 → 找转折线索\n  第 3 步  However 表转折，Therefore 表结果，Besides 表递进，Instead 表替代\n  第 4 步  选 B\n\n线索是 still failed 这四个词，不是语感。' }
      ],
      ex: [
        { q: 'The road was so icy that the car ______ several times before it finally stopped.\nA. slipped   B. jumped   C. fell   D. turned',
          a: ['先读整句：路面结冰，车在最后停下之前发生了几次什么。',
              '找线索：icy（结冰的路面）是关键。冰面最直接导致的是打滑，不是跳、不是掉、不是转。',
              '看搭配：slipped several times 表示打滑了好几次，与 icy 完全吻合。',
              '排除其他三个：jumped 需要主动起跳，fell 需要从高处坠落，turned 只是转向，都与结冰路面没有因果关系。',
              '选 A。'],
          tip: '完形里 if 句、so ... that 句常常把因果写在同一句里，这是最容易用的线索。' },
        { q: 'She opened the box slowly, afraid of what might be ______ it.\nA. beside   B. inside   C. behind   D. above',
          a: ['先读整句：她慢慢打开盒子，害怕里面可能有什么。',
              '找线索：opened the box 是动作，盒子被打开，接下来一定和盒子的内部有关。',
              '看选项的空间关系：inside 表示在里面，其他三个都表示盒子之外的位置。',
              '看情绪：afraid of 表明她担心的是盒子里的东西，逻辑上和 inside 吻合。',
              '选 B。'],
          tip: '动作描写里，只要出现 open / close / enter / leave 这类动词，后面常有一个方位词等着你，跟着动作的物理方向走就不会错。' }
      ]
    },
    {
      h: '二、转折与因果：最好用的两类线索',
      p: [
        '这两类线索的地位最高，因为它们的判断最硬——只要看到那个词，前后关系就定死了，不需要理解整段话。',
        '先说转折。转折词一出现，就意味着一件事情：前后必须是相反的意思。前文说好，空里就是坏；前文说要放弃，空里就是还在坚持。这个方向的判断几乎不需要思考，只要你能在句子里认出那个转折词。',
        { li: '常见转折词：but、however、yet、while、whereas、instead、on the contrary、nevertheless。' },
        { li: '让步词也算转折的一种：although、though、even though、despite、in spite of。看到它们，主句与从句的意思相反。' },
        { li: 'however、nevertheless 后面通常跟一个逗号；but、yet 后面不跟逗号。这一点在选连词时能帮你排除。' },
        '再说因果。因果有两个方向，方向弄反了，答案就是错的。',
        { li: '由因推果（前面是原因，后面是结果）：so、therefore、thus、as a result、lead to、result in、cause。' },
        { li: '由果推因（前面是结果，后面是原因）：because、since、as、for、due to、owing to、result from。' },
        { li: 'result in 和 result from 是一对镜子里外反着来的词，考试里几乎每年都用它做干扰项。' },
        { tip: '看到一个空后面跟着 so that，先不要急着选结果——so that 也可能是目的状语（为了……），要看后面有没有情态动词。有 can / could / might 的，多半是目的。' },
        { en: 'A turning word sets the two halves against each other; a cause word ties them in one direction only.' },
        { zh: '转折词让前后对立，因果词让前后顺着一个方向走。' },
        { code: '转折示例：\n\n  He had plenty of money. ______, he never bought anything for himself.\n  → 有钱 vs 从不给自己买东西 → 对比 → However\n\n因果示例：\n\n  The heavy rain ______ the river to rise quickly.\n  → 雨是因，河水上涨是果 → caused\n\n  The flood ______ the heavy rain that lasted a whole week.\n  → 洪水是果，暴雨是因 → resulted from' }
      ],
      ex: [
        { q: 'She practised the piano for two hours every day. ______, she was still nervous before the concert.\nA. As a result   B. What is more   C. Even so   D. In other words',
          a: ['先读前后两句：每天练两小时；音乐会前仍然紧张。',
              '定关系：练了那么久本该有信心，实际却紧张，这是相反、出乎预期的关系。',
              '看选项：As a result 表结果（方向错），What is more 表递进（方向错），In other words 表同义重述（方向错）。',
              'Even so 表示即便如此，是让步转折，正好对上。',
              '选 C。'],
          tip: '句子之间没有 but 时，转折关系常常藏在 Even so、Still、All the same 这类短语状语里。' },
        { q: 'The team lost their best player before the final match. ______, they played even better and won the cup.\nA. Therefore   B. Besides   C. Nevertheless   D. Otherwise',
          a: ['读前后：决赛前失去了最好的球员；他们打得更好了还赢了。',
              '定关系：失去主力本该变差，结果反而更好，前后相反，是转折。',
              '排除：Therefore 表结果，Besides 表递进，Otherwise 表否则，都不符合相反关系。',
              'Nevertheless 表示尽管如此，表转折，与句意吻合。',
              '选 C。'],
          tip: '因果和转折的判断只看一点：后半句是顺着前半句走，还是反着走。' }
      ]
    },
    {
      h: '三、复现与同义替换',
      p: [
        '复现是完形里最稳的一种线索，也是很多人完全没有意识到的。它的意思是：这个空要填的词，文章上面或下面已经用另一种方式说过了。',
        '为什么会这样？因为完形是从一篇完整的文章里挖空的，作者的行文本来就前后照应。挖空只是把已经写过的意思擦掉一处，剩下的部分一定还在文章里。',
        { li: '原词复现：同一个词在前后句里再出现一次。前面说 a big problem，后面又提 the problem，空里多半还是跟 problem 有关的词。' },
        { li: '同义复现：用意思相近的另一个词重复同一个概念。前面说 difficult，后面用 hard，这就是同义复现。' },
        { li: '反义复现：用相反的概念照应。前面说 succeed，后面可能说 failure，这时候空里就是跟失败相反或相近的方向。' },
        { li: '上下义复现：用概括词照应具体词。前文列举了 apples、bananas，后面可能就是 fruit。' },
        { li: '指代照应：it、this、they、such 这些词指的就是前文的东西，顺着它们往回找，常常能找到空的答案。' },
        '用法很简单：填不出来的时候，别在原地空想，往上读一句、往下读一句，看有没有和空里要填的东西意思相近、相反、或者指的同一件事的词。找到了，答案就锁定了。',
        { tip: '复现线索有一个特征：它一般是原文里的一个普通名词或动词，长得并不显眼。做题时要刻意地往回扫一眼，不能只看空的左右三个词。' },
        { en: 'The answer is usually already printed somewhere else in the passage.' },
        { zh: '答案通常已经在文章的别处写过了。' },
        { code: '复现示例：\n\n  The old man had lost his memory. He could not remember his own name,\n  and he even forgot the ______ of his own street.\n  → 前一句已经出现 memory / remember，空里仍在这个概念里 → name\n\n  The village was completely destroyed. Nothing was left standing;\n  the ______ of the houses was terrible.\n  → destroyed 与 destruction 是同义复现 → destruction\n\n反义复现示例：\n\n  He wanted to give up, but something inside him told him not to ______.\n  → give up 与 quit 是同义，前面出现 give up → 空里是 quit' }
      ],
      ex: [
        { q: 'The old library was in a terrible ______. Most of the windows were broken and the roof was falling down.\nA. condition   B. situation   C. position   D. location',
          a: ['读第一句：老图书馆处于一种很糟的什么状态里。',
              '往下读，找复现：broken windows、falling roof 都在描述这座建筑的外观和结构，属于同一个概念的展开。',
              '看选项的角度：situation 多指处境、局面，position 指位置，location 指地点，只有 condition 直接表示事物的状况、condition 与后面破损描写是同一范畴。',
              '看搭配：in a terrible condition 是固定说法，表示状况很糟。',
              '选 A。'],
          tip: 'in a ... condition / in bad condition 是高频词块，看到破损、旧、脏这类描写就该想到它。' },
        { q: 'My grandfather never talked much, but his ______ were always clear: work hard and be honest.\nA. words   B. stories   C. lessons   D. actions',
          a: ['读整句：他话不多，但他的什么总是很清楚：努力工作、诚实做人。',
              '看转折：but 把 never talked much 和后面对立起来，说明后面说的虽然是他的主张，但表达方式更倾向于一种明确的教诲。',
              '看冒号：冒号后面 work hard and be honest 就是在解释空里那个词，属于解释性复现。',
              '看搭配：his lessons were always clear，lessons 在这里指他教给人的道理，与冒号后的内容吻合。words 与前句 never talked much 直接冲突。',
              '选 C。'],
          tip: '冒号和破折号后面常常是对前面那个空的直接解释，是最好用的复现标志。' }
      ]
    },
    {
      h: '四、搭配与语境',
      p: [
        '前面三类线索靠逻辑，这一类靠积累。搭配线索指的是：某个词和另一个词天生就要一起用，换成同义的另一个词就不行。',
        '比如 make a decision 和 do a decision，意思完全一样，但英语里只能写 make。这种题四个选项的意思可能全都通顺，唯一的区分点就是搭配。',
        { li: '动词加介词或副词的固定搭配：depend on、result from、consist of、be aware of、take advantage of。' },
        { li: '动词加名词的固定搭配：make a decision、take action、pay attention、keep a record、gain experience。' },
        { li: '形容词加介词的固定搭配：be interested in、be good at、be proud of、be responsible for、be familiar with。' },
        { li: '程度和范围的差别：some 与 most、often 与 always、may 与 must，这类题要靠语境判断语气，不能只看词本身。' },
        '语境线索是最后一层。它问的不是句子对不对，而是符不符合这个人、这个场合、这段时间。',
        { li: '看褒贬：这个词是正面的还是负面的？作者在夸还是在批？' },
        { li: '看人称与身份：说话的是医生、学生还是路人，用词会不一样。' },
        { li: '看时间与地点：句子里的时间词和地点词能排除很多选项，比如 winter 出现时，swim in the lake 就不合理。' },
        { tip: '遇到四个选项意思都能讲通的时候，不要硬读语感，把每个选项代进去念一整套固定搭配，哪个搭配是英语里真实存在的，就选哪个。' },
        { en: 'When every option sounds right, only the phrase that actually exists decides the answer.' },
        { zh: '当每个选项都念得通时，真正决定答案的是那个英语里真实存在的搭配。' },
        { code: '搭配示例：\n\n  We must ______ attention to the safety of the children.\n  → pay attention to 是固定搭配（不是 put / give / take）→ pay\n\n  Her success ______ from years of hard work.\n  → result from 表示由……造成 → resulted\n\n语境示例：\n\n  It was December. The lake was covered with ice, so nobody wanted to ______.\n  A. swim   B. skate   C. fish   D. walk\n  → 湖面结冰，想下水游泳不合理；结冰的湖上最自然的活动是滑冰 → B' }
      ],
      ex: [
        { q: 'He ______ a great interest in ancient history when he was only ten.\nA. took   B. made   C. developed   D. found',
          a: ['读整句：他十岁时对古代史产生了浓厚的兴趣。',
              '看搭配：interest 常跟 develop、show、take 搭配。take an interest in 表示对某事有兴趣，也是固定说法。',
              '看语境：when he was only ten 强调兴趣是慢慢形成的，develop（逐渐形成、培养）比 take（一次性产生）更贴切。',
              '看排除：made 和 found 与 interest 不构成英语里的固定搭配。',
              '选 C。'],
          tip: 'develop an interest in / a habit of / a skill 是高频词块，凡是强调慢慢形成的过程，多用 develop。' },
        { q: 'The volunteers worked all night to ______ out the fire, and by morning the village was safe.\nA. put   B. turn   C. break   D. carry',
          a: ['读整句：志愿者们干了一整夜，到早上村子安全了，说明火被扑灭了。',
              '看搭配：扑灭火在英语里是 put out the fire，这是固定的动词短语。',
              '看排除：turn out 表示结果是，break out 表示爆发（火灾自身发生），carry out 表示执行，都与灭火无关。',
              '选 A。'],
          tip: 'turn out、break out、carry out 这几个短语都以 out 结尾，含义完全不同，必须整块记，不能只看 out。' }
      ]
    },
    {
      h: '五、做题顺序与时间分配',
      p: [
        '完形最容易犯的错不是不会，而是顺序不对。一上来就逐空填，填到第 10 个发现前面全填错了——这种事几乎每个人都经历过。',
        '正确的做法是三遍走。第一遍不填，只读。读的目的是搞清楚：这篇文章讲什么、主要人物是谁、发生了什么事、作者的态度是正面的还是负面的。',
        { li: '第一遍通读（约 2 分钟）：不填任何空，把带空的句子照常读过去。读到空就先跳过，眼睛只在找主旨和态度。' },
        { li: '第二遍填空（约 12 分钟）：从第 1 个空开始，每个空都先找线索再选，找到依据就选，没有依据就先放着。' },
        { li: '第三遍复检（约 3 分钟）：把选出来的答案代回原文，通读一遍，检查前后逻辑、时态、代词指代是否一致。' },
        '为什么第一遍不能填？因为完形的许多空要等到后面才知道答案。前面第 3 空的线索，可能在第 12 空后面才出现。先通读一遍，这些线索就自然串起来了。',
        { li: '先易后难：一眼能看出线索的空先做，难的空标记下来，第二遍末尾再集中处理。' },
        { li: '不要凭我觉得更顺就改答案。要改，必须找到新的线索；没有新线索就改，十次有七次会改错。' },
        { tip: '时间上，15 个空建议 12 到 15 分钟。超过 18 分钟说明方法不对，不是题目太难——多半是在反复读同一段话。' },
        { en: 'Read it once without filling anything, and the passage will tell you where the answers are.' },
        { zh: '先空着手读一遍，文章自己会告诉你答案在哪儿。' },
        { code: '三遍法的时间表：\n\n  第 1 遍  0:00 - 2:00    通读，只抓主旨和态度，空全部跳过\n  第 2 遍  2:00 - 14:00   逐空找线索，没线索的先标记\n  第 3 遍  14:00 - 17:00  代入复检，回头看标记的难空\n\n  总共 15 到 18 分钟。\n\n复检时问四句话：\n  逻辑通吗？  时态一致吗？  代词指的是同一个人吗？  搭配是英语里真实存在的吗？' }
      ],
      ex: [
        { q: '（做题顺序判断）你在第 4 空卡住了，四个选项都读得通。此时最该做的是什么？',
          a: ['不要在原地反复读这一句。反复读不会产生新线索，只会浪费时间。',
              '先按当前最佳判断填一个，在旁边做个小标记，继续往下做。',
              '往下做的时候留意复现线索：答案很可能在第 4 空后面出现过，或者是靠后面几段才确定。',
              '第二遍末尾再回来处理标记过的空，这时你手上已经有整篇文章的信息，判断成本低得多。',
              '结论：卡住的空就地跳过并标记，靠后续内容反推，不要在单句上死磕。'],
          tip: '完形的时间黑洞就发生在反复读同一句话上。给自己定个规矩：一个空超过 40 秒没线索，立刻标记跳过。' },
        { q: '（复检判断）填完之后通读，你发现第 9 空的答案让整段句子时态从过去时跳到了现在时。最合理的处理是什么？',
          a: ['先看这段是不是有特殊内容：如果是客观真理、普遍规律、或者作者夹叙夹议的议论句，用现在时是合理的，不要动。',
              '如果不是，就是时态串了。回头看第 9 空附近的动词，确认全文基调是过去时还是现在时。',
              '多数叙事类完形通篇是过去时，一旦出现现在时，往往是选错了动词形式。',
              '改的时候找原句的时间状语做依据，不能只凭念起来顺不顺。',
              '结论：先判断是不是有意为之，再改；改必须有依据。'],
          tip: '复检要抓的四类硬伤：逻辑、时态、代词指代、搭配。按这四类过一遍，比重新读一遍文章有效得多。' }
      ]
    }
  ]
};
