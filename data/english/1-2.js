window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 1, bookName: '语法填空',
  chapterId: 2, chapterName: '十个抽屉 · 背',
  hideDefault: 'en',
  items: [
    // ── 抽屉一：时态语态 ──
    { en: 'every day / usually / often / always → do / does', zh: '习惯性动作、经常发生的事、客观事实，用一般现在时。主语是第三人称单数时动词加 s。', note: '最容易漏掉三单的 s：He go 是错的，必须 He goes。' },
    { en: 'last week / two days ago / in 1990 / just now → did / was / were', zh: '有明确的过去时间点，用一般过去时。', note: 'ago 只能跟过去时，不能跟完成时。' },
    { en: 'since 2019 / for three years / so far / up to now → have / has + done', zh: '从过去开始、一直持续到现在，或者对现在还有影响，用现在完成时。since 后接时间点，for 后接时间段。', note: 'so far、up to now、in the last few years 也是现在完成时的信号。' },
    { en: 'by the end of last year / before he came → had + done', zh: '过去的过去：在过去某个时间点之前就已经完成的事，用过去完成时。', note: 'by the end of last year 用过去完成；by the end of next year 才用将来完成。' },
    { en: 'by next year / by 2030 / by the time you arrive → will have + done', zh: '到将来某个时间点之前会完成的事，用将来完成时。', note: 'by + 将来时间 = 将来完成，这是最容易被忽略的时态之一。' },
    { en: 'now / at the moment / look! / listen! → am / is / are + doing', zh: '此刻正在发生的动作，用现在进行时。提示词 Look! 和 Listen! 一出现基本就锁定进行时。', note: '进行时不能跟 every day 这类表示习惯的时间词一起用。' },
    { en: 'tomorrow / next week / in three days → will + do', zh: '将来要发生的动作，用一般将来时；也可以写成 be going to + do（表示打算或有迹象）。', note: 'if / when 引导的时间、条件状语从句里，将来用一般现在时表示，不写 will。' },
    { en: 'the bridge / the problem / the book + build / solve / write → be + done', zh: '主语是动作的承受者（桥被建、问题被解决），用被动语态。先定时态，再把 be 变成对应时态，后接过去分词。', note: '只有及物动词才有被动，happen / appear / rise / belong 这些不及物动词没有被动形式。' },

    // ── 抽屉二：非谓语 ──
    { en: '句中已有谓语 + 没有 and / but → doing / done / to do', zh: '一个句子只能有一套谓语。已有谓语又没有并列连词把动词并列起来，空处只能填非谓语。', note: '先数谓语再动手，这是判断非谓语唯一的入口。' },
    { en: '表目的 / 表将来 → to do', zh: '空处表示为了做某事，或者动作还没发生，用不定式。', note: 'to 后面永远跟动词原形，别写成 to doing。' },
    { en: '主动关系 + 与谓语同时发生 → doing', zh: '逻辑主语是动作的发出者，用现在分词，相当于 who is doing。', note: '别只看空的前后，要回头找这个分词的逻辑主语到底是谁。' },
    { en: '被动关系 / 已经完成 → done', zh: '逻辑主语是动作的承受者，用过去分词，相当于 which was done。', note: '不及物动词的过去分词只表示完成，不表示被动。' },
    { en: '介词后 + 动词 → doing', zh: '介词后面接动名词，把这个动作当成名词用。', note: 'look forward to / be used to / pay attention to 里的 to 是介词，后面也接 doing。' },
    { en: '句首的 Doing / Done → 逻辑主语 = 主句主语', zh: '分词短语放句首，它的逻辑主语必须和主句主语是同一个人或物。', note: '逻辑主语和主句主语不一致就是语法错，作文里也常扣分。' },
    { en: '名词前起修饰 → doing（主动 / 进行）/ done（被动 / 完成）', zh: '分词作定语放在名词前面或后面，先看名词与这个词是主动还是被动关系。', note: 'a developing country（发展中国家，主动）／ a developed country（发达国家，完成）。' },

    // ── 抽屉三：词性转换 ──
    { en: 'his / her / the / a + ___ → 名词', zh: '形容词性物主代词和冠词后面，必须接名词。', note: '常见名词后缀：-tion / -sion / -ment / -ness / -ity / -ance。' },
    { en: '___ + 名词（修饰名词）→ 形容词', zh: '空在名词前面起修饰作用，填形容词。', note: '常见形容词后缀：-ful / -less / -ous / -ive / -able / -al。' },
    { en: '修饰动词 / 修饰整个句子 → 副词', zh: '空处修饰动词、形容词或者整句话，用副词。', note: '拼写注意：true → truly、happy → happily、basic → basically。' },
    { en: 'be / seem / look / feel / become + ___ → 形容词', zh: '系动词后面作表语，填形容词，不填副词。', note: '别被动词后面填副词的说法带偏，系动词是明确的例外。' },
    { en: '句子的主语或宾语位置 → 名词', zh: '主语和宾语必须由名词或代词充当；给的词若是动词或形容词，就改成名词。', note: '介词短语和从句可以作主语，但单独的形容词不能。' },
    { en: '介词后 → 名词 / 动名词', zh: '介词后面只能接名词或动名词，不能接原形动词。', note: 'before leaving / after finishing，别写成 before leave。' },

    // ── 抽屉四：比较级最高级 ──
    { en: 'than → 比较级', zh: '看到 than，前面的空就是比较级；单音节词加 -er，多音节词前面加 more。', note: 'good / better / best、bad / worse / worst、many / more / most 是不规则变化。' },
    { en: 'the + ___ + of / in + 范围 → 最高级', zh: '在一群人、一段时间里最怎么样，用最高级；单音节加 -est，多音节用 most。', note: '最高级前面必须有 the，the tallest of the three。' },
    { en: 'as ___ as → 原级', zh: 'as … as 中间用原级，表示和……一样；否定式 not as … as 表示不如。', note: '中间不能写比较级，as taller as 是典型错误。' },
    { en: 'much / far / even / a lot / a bit + 比较级', zh: '这些词用来修饰比较级，表示程度；它们后面不能接原级或最高级。', note: 'much taller（对）／ very taller（错），very 不能修饰比较级。' },
    { en: 'the more ..., the more ...', zh: '越……就越……，前后两半都用比较级。', note: '前半句用 the more，后半句也要用 the + 比较级，两边对称。' },

    // ── 抽屉五：名词单复数 ──
    { en: 'two / many / several / a number of + 名词 → 复数', zh: '前面有表示两个以上数量的词，名词用复数形式。', note: 'a number of + 复数名词作主语，谓语也用复数。' },
    { en: '谓语是 are / were / have → 主语用复数', zh: '谓语的形式反过来告诉你主语该是单还是复。', note: 'The number of students is rising，这里谓语是 is，因为它说的是数量本身。' },
    { en: 'a / an / one / each / every + 名词 → 单数', zh: '这些词后面只能跟单数可数名词。', note: 'each / every 后面绝对不能加复数。' },
    { en: 'child / man / woman / foot / tooth / mouse → 不规则复数', zh: '这一组名词的复数是变形，不是加 s：children / men / women / feet / teeth / mice。', note: 'man 和 woman 作定语修饰另一个名词时也要变：two women teachers。' },
    { en: 'information / advice / news / progress / furniture / equipment → 不可数', zh: '这些名词没有复数形式，前面也不能加 a / an，要计数就得用量词。', note: 'a piece of news / a piece of advice / make progress，都不能加 s。' },

    // ── 抽屉六：冠词 ──
    { en: '第一次提到 + 泛指一个 + 辅音音素开头 → a', zh: '泛指某个类别里的一个，第一次提出来，用不定冠词。判断看读音不看字母。', note: 'a useful book（useful 以辅音音素 /j/ 开头），不是 an。' },
    { en: '第一次提到 + 泛指一个 + 元音音素开头 → an', zh: '同样是泛指一个，但后面那个词的读音以元音音素开头，用 an。', note: 'an hour（h 不发音）／ a university（读 /juː/，是辅音音素）。' },
    { en: '上文提到过 / 双方都知道 / 独一无二 → the', zh: '特指的时候用定冠词：再提到同一个东西、双方心知肚明、世界上只有一个。', note: 'the sun / the moon / the earth 这类独一无二的事物必须加 the。' },
    { en: '最高级 / 序数词 / only / same / 乐器名词前 → the', zh: '最高级、序数词、the only、the same 后面，以及演奏乐器前，用 the。', note: 'the first prize、the only way、play the piano。' },
    { en: '复数泛指 / 抽象名词泛指 / 固定短语 → 零冠词', zh: '泛指一类人或物时、谈论抽象概念时，以及 at home、by bus、go to school 这类固定短语里，不加冠词。', note: 'go to school 是去上学，go to the school 是去那所学校，意思不同。' },

    // ── 抽屉七：介词 ──
    { en: '空后面是名词或动名词 + 整体作状语 → 介词', zh: '介词的后面永远是名词性的东西，整个短语在句子里作状语或定语。', note: '介词后面接动词必须写成 doing，这是最容易漏的一步。' },
    { en: 'at + 具体时间点 / on + 具体某天 / in + 月份、年份、季节', zh: '时间介词从大到小：in 用于年、月、季节，on 用于星期和具体日期，at 用于钟点和正午、午夜。', note: 'on the morning of May 1st，因为指的是具体某天的早上，用 on。' },
    { en: 'at + 小地点 / in + 大地方 / on + 表面', zh: '地点介词：at 用于一个点（车站、门口），in 用于一个空间或城市国家，on 用于平面的表面。', note: 'arrive at 小地方、arrive in 大城市，这是固定搭配。' },
    { en: 'be interested in / be good at / depend on / be proud of', zh: '形容词和动词后面跟哪个介词全是固定搭配，只能一个个记。', note: '这些搭配里的介词一旦写错，整空就零分，跟意思对不对没关系。' },
    { en: 'by + doing（方式）/ with + 工具 / in + 语言', zh: '表示方式手段用 by，表示使用的工具用 with，表示用某种语言用 in。', note: 'write with a pen / answer in English / travel by train。' },
    { en: 'for + 目的或时长 / from + 来源 / of + 所属', zh: '这三个介词各有自己的惯用角度：为了什么用 for，从哪里来用 from，属于谁用 of。', note: 'be made of 看得出材料，be made from 看不出材料。' },

    // ── 抽屉八：连词 ──
    { en: '空前后各是一套主谓 + 空前面没有名词 → 连词', zh: '两个完整句子并在一起，中间需要连词；先判断两句之间的逻辑关系，再选词。', note: '两个句子之间只用逗号不用连词，是典型的语法错误。' },
    { en: '转折 → but / however / while / although', zh: '前后意思相反，用转折连词。however 后面要加逗号，but 不加。', note: 'although 和 but 不能同时出现在一个句子里。' },
    { en: '因果 → so / because / since / for', zh: '由原因推结果用 so，由结果说原因用 because / since / for。', note: 'because 和 so 不能同时用，这是中国学生最常见的错误之一。' },
    { en: '条件 → if / unless / as long as', zh: '表示如果、除非、只要；if 和 unless 引导的从句里，将来用一般现在时。', note: 'unless 本身已经含否定的意思，后面不要再加 not。' },
    { en: '并列与递进 → and / or / not only ... but also', zh: '并列关系用 and，选择关系用 or，递进关系用 not only … but also。', note: 'not only … but also 连接两个主语时，谓语跟后面那个主语一致。' },

    // ── 抽屉九：代词 ──
    { en: '句子缺主语 → 主格 I / he / she / they / it', zh: '主语位置用主格代词，动作由它发出。', note: 'He and I are friends，两个都作主语，都用主格。' },
    { en: '句子缺宾语 / 介词后 → 宾格 me / him / her / them', zh: '动词后面或介词后面用宾格代词。', note: 'between you and me 是固定说法，不是 between you and I。' },
    { en: '名词前作定语 → 形容词性物主代词 my / his / their', zh: '后面还跟着一个名词时，用形容词性物主代词。', note: 'his 既能作形容词性也能作名词性，不用加 s 变形。' },
    { en: '单独使用、后面不再接名词 → 名词性物主代词 mine / yours / theirs', zh: '代替前面提到过的东西，后面不接名词，用名词性物主代词。', note: 'Yours is better than mine，两边都是名词性物主代词。' },
    { en: '宾语和主语指同一个人 → 反身代词 myself / himself / themselves', zh: '动作回到动作发出者自己身上，用反身代词。', note: '常见搭配：enjoy oneself、help oneself to、hurt oneself。' },
    { en: '作形式主语或形式宾语 → it', zh: '真正的主语是后面的不定式或从句时，前面用 it 占位，避免头重脚轻。', note: 'It is important to learn English well，不能说 To learn English well is important 之外的语序混乱。' },

    // ── 抽屉十：关系词 ──
    { en: '先行词是人 + 从句缺主语 → who / that', zh: '空前面是表示人的名词，空后面的从句里缺主语，用 who 或 that。', note: '先行词是 the only one、the very man 这些时，只能用 that。' },
    { en: '先行词是人 + 从句缺宾语 → whom / who / that', zh: '从句里缺的是宾语，用 whom（正式）或 who / that。', note: '介词提到关系词前面时，只能用 whom：to whom。' },
    { en: '先行词是物 + 从句缺主语或宾语 → which / that', zh: '先行词是物或事情，用 which 或 that，看它在从句里作主语还是宾语。', note: '逗号后面的非限制性定语从句里不能用 that，只能用 which。' },
    { en: '所属关系（名词 + ___ + 名词）→ whose', zh: '表示谁的，空后面紧跟一个名词，用 whose，人和物都能用。', note: 'the boy whose father is a doctor；the house whose windows face south。' },
    { en: '先行词是地点 + 从句不缺成分 → where', zh: '先行词是 place、school、city 这类地点词，从句本身成分完整，缺的只是地点状语，用 where。', note: '如果从句缺的是主语或宾语，就该用 which / that，不能因为先行词是地点就用 where。' },
    { en: '先行词是时间 → when / 先行词是原因 reason → why', zh: 'the day when、the moment when、the reason why，从句成分完整时用这些关系副词。', note: '判断标准只有一个：看从句里缺不缺主语或宾语，而不是看先行词是什么。' }
  ]
};
