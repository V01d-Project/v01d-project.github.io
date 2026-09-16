window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 1, bookName: '语法填空',
  chapterId: 1, chapterName: '判断法 · 教程',
  sections: [
    {
      h: '一、语法填空到底在考什么',
      p: [
        '先把这道题的底摸清楚，再谈方法。语法填空是一篇 150 到 200 词的短文，挖 10 个空，每空 1.5 分，满分 15 分。它是整张英语卷子里最讲道理的一道题：不考你读懂多少文学性的东西，也不考你词汇量的上限，它只考一件事——你能不能在几秒钟内看出一句话的骨架，然后往缺的位置上放对东西。',
        '很多人的做法是：从头读到尾，读到空就凭语感念一个词进去，念着顺就填了。这个方法在句子短的时候管用，可一旦句子变长、里面套了从句、动词好几个，语感立刻失灵。10 个空错 6 个，基本都是这么错出来的。',
        '为什么语感在这里不靠谱？因为中文和英文搭句子的方式本来就不一样。中文靠语序和意思，动词没有形态变化；英文靠形态，动词要跟着时态、语态、人称一起变。你脑子里那套中文的顺不顺，判断不了英文的形态对不对。',
        { li: '给了提示词的空，考点只有六个：时态、语态、非谓语、词性转换、比较级最高级、名词单复数。' },
        { li: '没给提示词的空，考点只有五个：冠词、介词、连词、代词、关系词。' },
        { li: '全部答案都在这 11 类里。年年换句子，不换考点，所以这是一道可以准备的题。' },
        '于是做题的过程就固定下来了：读句子 → 判断这个空属于哪一类 → 写下那一类的标准答案。三步做完就往下走，不回头。',
        { tip: '如果你现在错 4 个以上，先别急着刷题。把先分类、再填这个顺序练熟，正确率通常能先涨两三个，比多做十篇短文管用。' },
        { en: 'Grammar is not about memorising rules; it is about recognising the shape of a sentence.' },
        { zh: '语法不是背规则，而是认出一句话的形状。' },
        { code: '看一个空是怎么被认出来的：\n\nThe book ___ (write) by a young teacher is very popular.\n\n第 1 步  括号里给了 write          → 走有提示词这条路\n第 2 步  句中已经有谓语 is          → 本空不能再作谓语，只能填非谓语\n第 3 步  the book 与 write 是被写的关系 → 用过去分词\n第 4 步  写下 written\n\n四个判断都能复述出来，全程没用到语感。' }
      ],
      ex: [
        { q: 'The old temple ___ (build) more than 500 years ago still stands on the hill.',
          a: ['看提示词：括号给了 build，是动词，只能在它自己身上改形式。',
              '数谓语：主句的谓语已经是 stands，句中又没有 and / but 把动词并列起来，所以这个空不能作谓语。',
              '定关系：the old temple 与 build 是被建的关系，逻辑主语是动作的承受者，用过去分词。',
              '定形式：写 built。它放在名词后面起修饰作用，相当于 which was built more than 500 years ago。'],
          tip: '看到名词后面跟 ___ by ... 这种结构，先想被动分词，不要一上来就想时态。' },
        { q: 'A number of new houses ___ (build) in our village since 2020.',
          a: ['看提示词：给了 build，动词。',
              '数谓语：整句还没有谓语，所以这个空作谓语，要定时态和语态。',
              '定时态：since 2020 表示从过去持续到现在，用现在完成时。',
              '定语态：houses 是被建，用被动。现在完成时的被动是 have / has been done。',
              '定一致：主语 A number of new houses 是复数，用 have，写 have been built。'],
          tip: 'a number of + 复数名词作主语，谓语用复数；the number of + 复数名词才是单数。这一对年年考。' }
      ]
    },
    {
      h: '二、第一步：空格后有没有给提示词',
      p: [
        '拿到题不要急着读文章。第一个动作只有一个，而且必须练成条件反射：把 10 个空从上到下扫一遍，在每个题号旁边做记号——括号里给了词的，画一条横线；括号里空着的，画一个圈。',
        '为什么值得花这十几秒？因为这两种空能填的东西完全不重叠，是两条平行的路。提前把路分开，你的思考范围直接砍一半，不会在错误的方向上耗时间。',
        { li: '给了提示词 → 词义已经定了，你只能改形式：动词变时态语态或转非谓语，名词变单复数，形容词副词变比较级或者转词性。' },
        { li: '没给提示词 → 一句话都填不了实词，范围锁死在这五个：冠词、介词、连词、代词、关系词。' },
        { li: '做题顺序建议：先做有提示词的空（数量多、套路稳、容易拿分），再做没提示词的空（要看句子结构，稍难）。' },
        { li: '记号还能当检查表用。最后通读的时候，每个圈的旁边必须是一个虚词，这是最硬的检查标准。' },
        { tip: '最典型、也最不该犯的错：括号里明明没给词，却填了名词、形容词或动词。只要括号是空的，填实词一律算错，没有例外。' },
        { en: 'One decision decides half of the paper: is there a word in the bracket or not?' },
        { zh: '一个判断就决定了半道题：括号里到底有没有词。' },
        { code: '扫空分类，只做记号，不动笔填：\n\n  Two ___ (knife) are on the table.      给词  记 ——\n  He arrived ___ Beijing last night.      没给词 记 ○\n  ___ (see) from the hill, the city...    给词  记 ——\n  I was tired, ___ I kept working.        没给词 记 ○\n\n分完之后：三个横线走「改形式」，两个圈走「填虚词」，两条路永不交叉。' }
      ],
      ex: [
        { q: 'He settled down in ___ small village and became a teacher there.',
          a: ['看括号：空的，没给词 → 只能在虚词五类里挑。',
              '看空后面：紧跟一个名词短语 small village，句子的成分并不缺 → 这是冠词或介词的位置。',
              '看意思：这里指一个不知名的小村子，是第一次提到、泛指 → 用不定冠词。',
              '看读音：small 以辅音音素开头，所以用 a。写 a。'],
          tip: '没给提示词不等于随便填。先在五类里定类，再在类里定词，两步都要说得出理由。' },
        { q: 'The two ___ (child) were playing happily in the yard.',
          a: ['看括号：给了 child → 走有提示词这条路。',
              '看位置：前面有数词 two，意思是两个孩子，必须是复数。',
              '改形式：child 的复数是不规则变化 children。',
              '检查：后面的谓语 were 也是复数，主谓一致对上了。'],
          tip: 'child / man / woman / foot / tooth / mouse 都是不规则复数，只能单独记，不能靠加 s。' }
      ]
    },
    {
      h: '三、给了提示词，怎么判六类',
      p: [
        '给了提示词的空，判断顺序是固定的，照着往下走就不会乱。顺序是：先分谓语还是非谓语，再定时态语态，然后才看词性、比较级、单复数。',
        { li: '第一刀，先问这个空作谓语还是非谓语。数一数句子里已经有没有谓语：已经有一个谓语、又没有 and / but / or 把动词并列起来 → 本空只能填非谓语；一个谓语都没有 → 本空作谓语，去定时态语态。' },
        { li: '作谓语时，先定时态，再定语态。时态看时间标志词（every day、last week、since、by the time、so far）；语态看主语是动作的发出者还是承受者。' },
        { li: '作非谓语时，三种形式：表目的或将来用 to do；与逻辑主语是主动关系用 doing；是被动关系或已经完成用 done。' },
        { li: '词性转换看空在句中的位置：物主代词或冠词后面 → 名词；名词前面 → 形容词；修饰动词或整个句子 → 副词；系动词后面作表语 → 形容词。' },
        { li: '比较级最高级：见到 than 用比较级；见到 the + 空 + of / in + 范围用最高级；as ... as 中间用原级。' },
        { li: '名词单复数：前面有 two / many / several / a number of，或者后面是 are / were，就用复数。' },
        '顺序不能颠倒。先定谓语还是非谓语，等于先把门类关上；如果一上来就想时态，很容易把该填非谓语的地方也套上一个时态，那就错了。',
        { tip: '口诀记这一句：先数谓语，再看时间，最后看词性。三句话对应三个大类，谁也越不过谁。' },
        { en: 'First count the verbs, then read the clock, and only then look at the part of speech.' },
        { zh: '先数谓语，再看时间，最后才看词性。' },
        { code: 'He ___ (work) in this school since 2019.\n  → 给了 work；全句没谓语 → 作谓语；since 2019 → 现在完成；主语 He 三单\n  → has worked\n\n___ (see) from the top of the hill, the city looks beautiful.\n  → 给了 see；谓语已经有 looks → 填非谓语；city 是被看 → 过去分词\n  → Seen\n\nHis ___ (arrive) made everyone happy.\n  → 给了 arrive；空在物主代词 His 后面、主语的位置 → 名词\n  → arrival' }
      ],
      ex: [
        { q: 'By the time we got to the cinema, the film ___ (begin).',
          a: ['看提示词：给了 begin，动词。',
              '数谓语：从句 By the time we got to the cinema 里有谓语 got，但主句 the film ___ 还没有谓语，所以本空作谓语。',
              '定时态：by the time + 过去的时间，表示到过去某个时间点为止已经发生，用过去完成时。',
              '定语态：film 与 begin 是主动关系，电影自己开始，不用被动。',
              '写 had begun。'],
          tip: 'by the time 后面接过去时的句子，主句用过去完成时；接现在时的句子，主句用现在完成或将来完成。' },
        { q: 'The teacher entered the classroom, ___ (follow) by a group of students.',
          a: ['看提示词：给了 follow，动词。',
              '数谓语：entered 已经是谓语，句中又没有并列连词，所以本空只能填非谓语。',
              '定逻辑：老师是被一群学生跟着，逻辑主语是动作的承受者。',
              '定形式：用过去分词 followed，表被动。',
              '检查：followed 的逻辑主语就是句子主语 the teacher，前后一致，没问题。'],
          tip: '分词的逻辑主语默认是主句主语。如果主句主语不是它的逻辑主语，这个句子就是错句，作文里也扣分。' }
      ]
    },
    {
      h: '四、没给提示词，怎么判五类',
      p: [
        '没给提示词，听起来更难，其实范围更窄——只有五类虚词。判断的入口是空的前后各是什么。按下面的顺序试着套，一般第一个对上的就是答案。',
        { li: '冠词：空后面是名词，句子成分并不缺什么，但名词前面需要限定时 → 冠词。第一次提到、泛指一个用 a / an；上文提过、双方都知道、或者后面有 of / 最高级 / 序数词时用 the。' },
        { li: '介词：空后面是名词或动名词，而且这个短语整体在句子里作状语，或者跟前面的动词、形容词构成固定搭配 → 介词。' },
        { li: '连词：空前面没有名词，空后面是一个完整的句子（自己有一套主谓）→ 先想连词。看两句之间是转折、因果、条件、并列还是让步。' },
        { li: '代词：句子缺主语或宾语，而这个成分指代前面出现过的人或物 → 代词。分清主格、宾格、形容词性物主代词、名词性物主代词、反身代词。' },
        { li: '关系词：空前面紧挨着一个名词（先行词），空后面是一个缺成分的句子 → 关系词。看它在从句里作主语、宾语还是状语，是人还是物，再定用哪个。' },
        { tip: '最重要的一条分界线：前面有名词 + 后面是句子 = 关系词（定语从句）；前面没有名词 + 后面是句子 = 连词（状语从句或并列句）。这两个最容易混。' },
        { en: 'A noun in front of the blank points to a relative word; a blank at the start of a clause points to a conjunction.' },
        { zh: '空前面有名词，多半填关系词；空前面没有名词，多半填连词。' },
        { code: 'I was very tired, ___ I kept working.\n  → 前后各一套主谓，前面没有名词 → 连词；累了还干 → 转折 → but\n\nThe man ___ is talking to Tom is his father.\n  → 前面有名词 the man，后面从句缺主语 → 关系词；人 + 主语 → who\n\nI have never seen ___ interesting film before.\n  → 后面是名词短语 interesting film，句子成分不缺 → 冠词；泛指一部 → an（interesting 以元音音素开头）\n\nThe little boy hurt ___ when he fell off the bike.\n  → 缺宾语，而且指主语自己 → 反身代词 → himself' }
      ],
      ex: [
        { q: 'I was very tired, ___ I kept working until midnight.',
          a: ['看括号：没给词 → 只在虚词五类里挑。',
              '看前后：I was very tired 和 I kept working 各是一套主谓，是两个完整的句子。',
              '定类型：空前面没有名词，空后面是句子 → 连词。',
              '看逻辑：累了却还继续干，是转折关系。',
              '写 but。'],
          tip: '两个句子之间只有一个逗号时，必须用并列连词（and / but / or / so）把它们连起来，不能只用逗号。' },
        { q: 'The house ___ roof is red belongs to my uncle.',
          a: ['看括号：没给词 → 虚词五类。',
              '看前面：紧挨着的 the house 是一个名词，是先行词；空后面 roof is red 是一个缺成分的句子。',
              '定类型：前面有名词 + 后面是句子 → 关系词。',
              '看成分：roof 和 the house 是所属关系，从句里缺的正是这个定语。',
              '写 whose。'],
          tip: '凡是名词后面直接跟 ___ + 另一个名词这种结构，基本就是 whose，因为它表示所属。' }
      ]
    },
    {
      h: '五、通读检查：四个必查点',
      p: [
        '填完不等于做完。最后一步是把整篇当成一段英文重新念一遍，但这一遍不是重做，而是专门去查四类硬伤。这一遍通常只要一两分钟，却常常能捞回一到两分。',
        { li: '检查点一，大小写和拼写。句首首字母、专有名词必须大写；不规则动词的过去式和过去分词要写对；形容词变副词的拼写要复查。' },
        { li: '检查点二，一句一谓语。检查有没有一个句子里冒出两个谓语却没有连词，也有没有哪个从句的谓语被漏掉。' },
        { li: '检查点三，主谓一致和单复数。名词复数的 s、谓语第三人称单数的 s、is / are、has / have，一个一个对上。这一条是丢分最多的。' },
        { li: '检查点四，时态前后照应。全文的时态基调是不是一致？如果通篇是过去时，中间突然出现一个现在时，要么它是有意为之（客观真理、直接引语），要么就是你填错了。' },
        { tip: '检查时有个小技巧：把填过的 10 个词单独拎出来，每个问一句它为什么是这个形式。答不上来的那个，大概率就是错的。' },
        { en: 'Check the form of every word you wrote, not the meaning of the passage again.' },
        { zh: '检查的时候查你写下的每个词的形式，而不是再读一遍文章的意思。' },
        { code: '检查示范：\n\n  原句  He go to school every day and study hard.\n  问题① 主语 He 是三单，一般现在时的谓语要加 s → go 改 goes\n  问题② and 连接两个并列谓语，第二个也要跟主语一致 → study 改 studies\n\n  同一句话里两个 s 都漏了，这是最典型的失分。\n\n  原句  The story was wrote by a famous writer.\n  问题  被动语态是 be + 过去分词 → wrote 改 written' }
      ],
      ex: [
        { q: 'The story was wrote by a young writer in 1998. （找出并改正错误）',
          a: ['先看这个动词的形式：被动语态的结构是 be + 过去分词，不是 be + 过去式。',
              'wrote 是 write 的过去式，不能用在被动里。',
              'write 的过去分词是 written，属于不规则变化。',
              '改成 was written。',
              '顺带检查一遍时态：in 1998 是过去时间，was 用对了。'],
          tip: 'go / write / begin / break / speak 这些不规则动词的三种形式必须背熟，被动和完成时全靠它。' },
        { q: 'The teacher told us that light ___ (travel) faster than sound.',
          a: ['看提示词：给了 travel，动词。',
              '数谓语：that 引导的宾语从句里缺谓语，所以本空作谓语。',
              '定时态：主句是过去时 told，按一般规则从句也该用过去时。',
              '但这里是客观真理，光速快于声速不随时间变化，客观真理永远用一般现在时。',
              '写 travels。'],
          tip: '宾语从句的时态一致是一般规则，客观真理和自然规律是明确的例外。' }
      ]
    },
    {
      h: '六、常见失分点与时间分配',
      p: [
        '这一节讲两件很现实的事：这 10 个空该花多少时间，以及大家最常在哪几个地方掉分。把这两件事理清了，考试时就不会慌。',
        { li: '时间：整道语法填空建议 8 到 10 分钟。扫空分类 1 分钟，做题 6 分钟，通读检查 2 分钟。超过 12 分钟就是在挤别的时间，必须停下来。' },
        { li: '顺序：先做有提示词的空，再做没给提示词的空，最后回头攻难空。难空的判断成本高，放在最后，做不出也不影响前面的分。' },
        { li: '失分点一：无提示词的空填了实词。只要括号是空的，填名词、形容词、动词一律零分。' },
        { li: '失分点二：该填非谓语的地方填了谓语。说到底就是没数谓语就动笔。' },
        { li: '失分点三：漏掉第三人称单数的 s、名词复数的 s，尤其是一句话里两个并列谓语都漏。' },
        { li: '失分点四：时间标志词没认出来。since、by the time、so far、lately 这些词一出现，时态基本就定了。' },
        { li: '失分点五：拼写错。不规则动词写错、副词拼错（true → truly、happy → happily），语法明明对了却丢分。' },
        { tip: '某个空超过 30 秒还没有想法，先空着往下走。把确定的分拿到手再回头看——多数难空在你读完后面两句之后，线索会自己冒出来。' },
        { en: 'Spend your ten minutes on what you know, and never on what you are guessing.' },
        { zh: '把十分钟花在你确定的地方，别花在猜测上。' },
        { code: '10 分钟怎么分配：\n\n  0:00 - 1:00   扫空，给每个题号做记号（给词 / 没给词）\n  1:00 - 7:00   做题，先有提示词的，后没提示词的\n  7:00 - 9:00   通读检查四个必查点\n  9:00 - 10:00  回头攻剩下的难空\n\n超过 12 分钟就停，把时间还给阅读和完形。' }
      ],
      ex: [
        { q: 'So far, the scientists ___ (find) no clear evidence for their theory.',
          a: ['看提示词：给了 find，动词。',
              '数谓语：句子还没有谓语，所以本空作谓语，去定时态。',
              '定时态：so far（到目前为止）是现在完成时的信号词，动作从过去持续到现在并影响现在。',
              '定语态：scientists 是发现的发出者，主动。',
              '定一致：主语是复数，用 have，写 have found。'],
          tip: 'so far / up to now / in the last few years 都是现在完成时的信号词，看到就用 have / has done。' }
      ]
    }
  ]
};
