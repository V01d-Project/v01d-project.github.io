window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 1, bookName: '语法填空',
  chapterId: 1, chapterName: '语法填空',
  questions: [
    // ── 判断法：先看空格给没给提示词 ──
    { k: '判断法', q: '【第一步】拿到语法填空，第一个动作是什么？', a: '看每个空后面的括号：给了词，还是没给词。这两条路完全不一样，先把10个空分好类再动手。' },
    { k: '判断法', q: '【有提示词】括号里给了词，说明什么？', a: '词义已经定了，你只负责"改形式"：动词改时态语态或改成非谓语；名词改单复数；形容词副词改比较级或改词性。' },
    { k: '判断法', q: '【无提示词】括号里空着，说明什么？', a: '要填虚词，范围只有五类：冠词、介词、连词、代词、关系词。' },
    { k: '判断法', q: '【无提示词】最常见的失分是什么？', a: '填了实词。无提示词的空只能从冠词、介词、连词、代词、关系词里选，填名词或形容词一定错。' },
    { k: '判断法', q: '【分界线】什么时候填关系词，什么时候填连词？', a: '空前面有名词、空后面是完整句子 → 关系词（定语从句）；空前面没有名词、空后面是句子 → 连词。' },
    { k: '判断法', q: '【有提示词】给了词就一定得变形吗？', a: '不一定。情态动词后、too...to 结构里的动词就是原形；information 这类不可数名词本来就不加 s。先判形式，再决定改不改。' },
    { k: '判断法', q: '【检查】填完最容易丢分的三处是哪三处？', a: '大小写（句首首字母必须大写）、拼写、单复数（三单的 s、名词复数的 s 最容易漏）。' },

    // ── 有提示词①：时态语态 ──
    { k: '时态语态', q: '【判定信号】括号里是动词，怎么决定填谓语还是非谓语？', a: '数这个句子里有没有别的谓语。已经有一个谓语 → 本空只能填非谓语；一个谓语都没有 → 本空作谓语，要定时态和语态。' },
    { k: '时态语态', q: '【定时间】靠什么确定时态？', a: '先找时间标志词：since / for + 时间段 → 现在完成时；last / ago / in 1990 → 一般过去时；already / yet / just → 现在完成时；every day → 一般现在时；没有标志就跟上下文保持一致。' },
    { k: '时态语态', q: '【例句】He ___ (work) in that school since 2019.', a: 'has worked。since 2019 表示从过去持续到现在，是现在完成时的铁信号；主语 He 是三单，所以用 has。' },
    { k: '时态语态', q: '【定语态】怎么一眼看出要填被动？', a: '看主语是"做"还是"被做"。主语是动作的承受者 → 被动，be + 过去分词。主语是物、句中有 by、动词是 build / allow / sell 这类，都要警惕被动。' },
    { k: '时态语态', q: '【例句】The bridge ___ (build) last year.', a: 'was built。桥是"被建"的，用被动；last year 是过去时间，be 要用过去式 was。' },

    // ── 有提示词②：非谓语 ──
    { k: '非谓语', q: '【判定信号】什么时候必须填非谓语？', a: '句子里已经有谓语了，又没有 and / but / or 把两个动词并列起来，那这个空就只能填非谓语（to do / doing / done）。' },
    { k: '非谓语', q: '【选哪个】to do、doing、done 怎么选？', a: '两步走：先看主动还是被动——主动用 doing，被动用 done；再看是不是表目的或将来——表目的 / 将来用 to do。' },
    { k: '非谓语', q: '【例句】___ (see) from the top of the hill, the city looks beautiful.', a: 'Seen。句子已有谓语 looks，空处填非谓语；city 和 see 是被动关系（城市被人看），所以用过去分词 Seen。' },
    { k: '非谓语', q: '【例句】The girl ___ (stand) under the tree is my sister.', a: 'standing。句子已有谓语 is，空处是非谓语；女孩是"主动站着"，用现在分词 standing，相当于 who is standing。' },
    { k: '非谓语', q: '【易错】分词短语放句首时要注意什么？', a: '它的逻辑主语必须和主句主语一致，否则就是错的。所以看到 Doing / Done 开头，先回头找主句主语，判断主动还是被动。' },

    // ── 有提示词③：词性转换 ──
    { k: '词性转换', q: '【判定信号】怎么知道这个空要改成别的词性？', a: '看空在句子里的位置：空格前面是形容词性物主代词或冠词 → 填名词；空格修饰动词或整句 → 填副词；空格在名词前 → 填形容词。' },
    { k: '词性转换', q: '【例句】His ___ (decide) surprised all of us.', a: 'decision。his 后面必须接名词，decide 的名词形式是 decision。' },
    { k: '词性转换', q: '【例句】She sings ___ (beautiful).', a: 'beautifully。空处修饰动词 sings，要用副词，形容词 beautiful 加 -ly 变成 beautifully。' },
    { k: '词性转换', q: '【易错】常见后缀要背熟哪几个？', a: '名词：-tion / -sion、-ment、-ness、-ity；形容词：-ful、-less、-ous、-ive、-able；副词：-ly。看到括号里的词，先想它能变成哪几种形式。' },

    // ── 有提示词④：比较级最高级 ──
    { k: '比较级', q: '【判定信号】看到 than，说明这个空要填什么？', a: '比较级。than 是比较级的铁信号：短的词加 -er，多音节的长词前面加 more。' },
    { k: '比较级', q: '【例句】This book is much ___ (interesting) than that one.', a: 'more interesting。than 提示比较级；interesting 是多音节词，用 more interesting。much 用来修饰比较级，表示"得多"。' },
    { k: '比较级', q: '【最高级】什么信号提示最高级？', a: 'the + 最高级 + of / in + 范围。看到 of the three、in our class 这种"范围"，前面又特指，就用最高级。' },
    { k: '比较级', q: '【例句】He is the ___ (tall) of the three boys.', a: 'tallest。of the three boys 给出三者以上的范围，用最高级 tallest，前面有 the。' },

    // ── 有提示词⑤：名词单复数 ──
    { k: '名词单复数', q: '【判定信号】什么情况必须把名词变复数？', a: '空前面有 two / many / several / a few 这类词，或者空后面是复数谓语（are / were），都要用复数。' },
    { k: '名词单复数', q: '【例句】Two ___ (knife) are on the table.', a: 'knives。two 后面用复数；以 -fe 结尾的名词变复数通常改 f 为 v 再加 -es：knife → knives。' },
    { k: '名词单复数', q: '【例句】We need more ___ (information) about the city.', a: 'information。information 是不可数名词，不能加 s，也不需要冠词 a。' },
    { k: '名词单复数', q: '【易错】哪些词最容易被误加 s？', a: 'information、advice、news、progress、equipment 这些都是不可数名词，永远不加 s。注意 news 结尾有 s，但它是单数，谓语用 is。' },

    // ── 无提示词①：冠词 ──
    { k: '冠词', q: '【判定信号】什么时候填 a / an？', a: '名词是可数名词单数、又是第一次提到、泛指"某一个" → 用 a / an。看读音不看字母：读音以元音音素开头才用 an。' },
    { k: '冠词', q: '【例句】He is ___ honest boy.', a: 'an。honest 的 h 不发音，单词读音以元音开头，所以用 an，不是看字母 h。' },
    { k: '冠词', q: '【判定信号】什么时候填 the？', a: '第二次提到、特指、后面有定语从句或 of 短语限定、表示世界上独一无二的事物，用 the。' },
    { k: '冠词', q: '【例句】I bought ___ book yesterday. ___ book is very interesting.', a: '第一空 a，第二空 The。第一次提到是泛指用 a；第二次提到是特指，用 The，句首还要大写。' },

    // ── 无提示词②：介词 ──
    { k: '介词', q: '【判定信号】空在名词或动名词前面，句子成分又都不缺，填什么？', a: '填介词。重点考固定搭配，所以要背：be interested in、be good at、depend on、look forward to 等。' },
    { k: '介词', q: '【例句】I am interested ___ music.', a: 'in。be interested in 是固定搭配，不能换成别的介词。' },
    { k: '介词', q: '【例句】He arrived ___ Beijing last night.', a: 'in。到达大地点（城市、国家）用 arrive in；到达小地点（车站、机场）用 arrive at。' },
    { k: '介词', q: '【易错】介词后面接动词要接什么形式？', a: '接动名词 doing。介词后面不能直接跟动词原形，也不能随便跟 to do（只有 look forward to、be used to 这类固定搭配里的 to 本身是介词）。' },

    // ── 无提示词③：连词 ──
    { k: '连词', q: '【判定信号】什么时候填连词？', a: '空格前后分别是两个句子（各有一套主谓），中间要一个东西把它们连起来，这个空就填连词。' },
    { k: '连词', q: '【例句】I was very tired, ___ I kept working.', a: 'but。前后是转折关系（很累但还在干），填 but（或 yet）。' },
    { k: '连词', q: '【例句】___ you study hard, you will pass the exam.', a: 'If。这是一个条件句，前面填 If，句首大写。' },
    { k: '连词', q: '【易错】however 和 but 有什么区别？', a: 'but 是连词，能直接连接两个句子；however 是副词，不能直接连接，前面通常要加分号或句号、后面加逗号。所以空格处直接连两个句子时填 but，不填 however。' },

    // ── 无提示词④：代词 ──
    { k: '代词', q: '【判定信号】什么时候填代词？', a: '句子缺主语或宾语，而这个词又是在指代前面出现过的人或物，就填代词。' },
    { k: '代词', q: '【例句】Tom lost his key, so he had to look for ___.', a: 'it。这里指代前文的 the key，是单数，用 it。不是 one——one 指同类中的一个，不特指"那一个"。' },
    { k: '代词', q: '【例句】This is not my pen. ___ is on the desk.', a: 'Mine。这里缺主语，指代"我的笔"，要用名词性物主代词 mine；my 后面必须有名词，不能单独用。句首要大写。' },
    { k: '代词', q: '【易错】it 和 one 什么时候用哪个？', a: 'it 指前面提到的"同一个"东西；one 指"同类中的一个"，不是同一个。上文说的是具体那支笔，就用 it。' },

    // ── 无提示词⑤：关系词 ──
    { k: '关系词', q: '【判定信号】怎么认出这个空要填关系词？', a: '空格前面紧挨着一个名词（先行词），后面是一个缺成分的句子，中间这个空就是关系词——它在从句里当主语、宾语或状语。' },
    { k: '关系词', q: '【选哪个】关系代词怎么选？', a: '看两件事：先行词是人还是物；关系词在从句里当主语还是宾语。人用 who / whom，物用 which，人和物都能用 that；当宾语时常常可以省略。' },
    { k: '关系词', q: '【例句】The man ___ is talking to Tom is his father.', a: 'who（或 that）。先行词 the man 是人，关系词在从句里当主语，所以用 who 或 that，而且不能省略。' },
    { k: '关系词', q: '【例句】This is the house ___ I lived in last year.', a: 'which（或 that）。先行词 the house 是物，关系词在从句里作介词 in 的宾语，所以用 which 或 that。' },
    { k: '关系词', q: '【例句】I still remember the day ___ we first met.', a: 'when。先行词 the day 是时间，从句 we first met 主谓宾齐全、不缺成分，所以用关系副词 when，等于 on which。' },

    // ── 综合：通读与检查 ──
    { k: '通读检查', q: '【最后一步】全部填完后要通读什么？', a: '一句一句念下来，检查三件事：时态前后有没有打架、单复数对不对、有没有出现"一个句子两个谓语"这种硬伤。' },
    { k: '通读检查', q: '【难空策略】一时做不出来的空怎么办？', a: '先跳过。把能确定的空先填完，剩下的空靠"排除法"定范围（先定是虚词还是实词，再在小范围里选），最后再回头。' },
    { k: '通读检查', q: '【易错】一个句子已经有谓语了，还能不能再填一个谓语动词？', a: '不能，除非中间有 and / but / or 并列。否则第二个动词只能变非谓语，或者让它待在从句里当从句的谓语。' },
    { k: '通读检查', q: '【心态】语法填空拿分的关键在哪？', a: '不在难题，在送分题。时态、单复数、大小写、拼写这些基本项一分不丢，比抠一个难空划算得多。' }
  ]
};
