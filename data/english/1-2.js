window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 1, bookName: '语法填空',
  chapterId: 2, chapterName: '十个抽屉',
  items: [
    // ── 抽屉一：时态语态 ──
    { en: 'since 2019 / for three years → have / has + done', zh: '从现在往回数、一直持续到现在，用现在完成时；主语三单用 has。', note: 'since 后面接时间点，for 后面接时间段，别写反。' },
    { en: 'last week / two days ago / in 1990 → did / was / were', zh: '有明确的过去时间，用一般过去式。', note: 'ago 只跟过去式，不能跟完成时。' },
    { en: 'already / yet / just / ever / never → have / has + done', zh: '这些副词是现在完成时的常客，位置在 have 和过去分词之间。', note: 'yet 多用于否定句和疑问句，肯定句用 already。' },
    { en: 'every day / usually / often / always → do / does', zh: '习惯性动作或客观事实，用一般现在时；主语三单动词加 s。', note: '最容易漏掉第三人称单数的 s。' },
    { en: 'by the end of last year → had + done', zh: '「过去的过去」：在过去某个时间点之前就已经完成，用过去完成时。', note: 'by the end of last year 用过去完成；by the end of next year 才用将来完成。' },
    { en: 'the bridge / the problem + build / solve → be + done', zh: '主语是动作的承受者（桥被建、问题被解决），用被动语态。先定时态，再把 be 变成对应时态。', note: '只有及物动词才有被动；happen / appear / rise 这类不及物动词没有被动。' },

    // ── 抽屉二：非谓语 ──
    { en: '句中已有谓语 + 没有 and / but → doing / done / to do', zh: '一个句子只能有一个谓语。已有谓语又没并列连词，空处只能填非谓语。', note: '先数谓语再动手，这是判断非谓语唯一的入口。' },
    { en: '表目的 / 表将来 → to do', zh: '空处表示「为了……」或还没发生的动作，用不定式。', note: 'to 后面永远跟动词原形，别写成 doing。' },
    { en: '主动关系 + 与谓语同时 → doing', zh: '逻辑主语是动作的发出者，用现在分词，相当于 who is doing。', note: '别只看空的前后，要回头找这个分词的逻辑主语是谁。' },
    { en: '被动关系 + 已经完成 → done', zh: '逻辑主语是动作的承受者，用过去分词，相当于 which was done。', note: '不及物动词的过去分词只表完成，不表被动。' },
    { en: '介词后 + 动词 → doing', zh: '介词后面接动名词，表示名词性的动作。', note: 'look forward to / be used to 里的 to 是介词，后面也接 doing。' },
    { en: '句首 Doing / Done → 逻辑主语 = 主句主语', zh: '分词短语放句首，它的逻辑主语必须和主句主语是同一个。', note: '逻辑主语与主句主语不一致就是语法错，作文里也常扣分。' },

    // ── 抽屉三：词性转换 ──
    { en: 'his / her / the / a + ___ → 名词', zh: '形容词性物主代词和冠词后面，必须接名词。', note: '常见名词后缀：-tion / -sion / -ment / -ness / -ity。' },
    { en: '___ + 名词（修饰名词）→ 形容词', zh: '空在名词前面起修饰作用，填形容词。', note: '常见形容词后缀：-ful / -less / -ous / -ive / -able。' },
    { en: '修饰动词 / 修饰整句 → 副词', zh: '空处修饰动词或整个句子，用副词。', note: '拼写注意：true → truly、happy → happily。' },
    { en: 'be / seem / look / feel + ___ → 形容词', zh: '系动词后面作表语，填形容词，不填副词。', note: '别被「动词后面填副词」带偏，系动词是例外。' },
    { en: '缺主语的位置 → 名词', zh: '句子主语必须由名词或代词充当，给的若是动词或形容词，就改成名词。', note: '介词短语、定语从句不能当主语。' },
    { en: 'the / more / most + ___ → 形容词 / 副词', zh: '冠词或比较级标志后面是形容词、副词的位置，看它修饰谁再定。', note: '修饰名词用形容词，修饰动词用副词。' },

    // ── 抽屉四：比较级最高级 ──
    { en: 'than → -er / more + adj.', zh: 'than 是比较级的铁信号：短词加 -er，多音节词前面加 more。', note: '不能既加 -er 又加 more。' },
    { en: 'the ___ + of / in + 范围 → -est / most', zh: '三者以上的范围用最高级，前面必须加 the。', note: 'of 后面接同类的人或物，in 后面接地点或团体。' },
    { en: 'much / far / a lot / even / still + ___ → 比较级', zh: '这些词只能修饰比较级，看到它们前面就是要填比较级。', note: 'very 不能修饰比较级，very 只能修饰原级。' },
    { en: 'as + ___ + as → 原级', zh: 'as ... as 中间用原级，表示「和……一样」。', note: '否定句里也常说 not as / so ... as。' },
    { en: 'the more ..., the more ... → 比较级', zh: '「越……越……」的结构，两边都用比较级。', note: '前后两个 the 都不能省。' },
    { en: 'one of the + ___ + 复数名词 → 最高级', zh: 'one of the 后面跟最高级加复数名词，表示「最……的之一」。', note: '名词必须是复数，这是高频失分点。' },

    // ── 抽屉五：名词单复数 ──
    { en: 'two / three / many / several / a few + ___ → 复数', zh: '数词和表示「多」的词后面，可数名词用复数。', note: '数词后面的名词漏 s，是最常见的低级失分。' },
    { en: 'are / were / have + ___ → 复数主语', zh: '谓语是复数形式，主语名词就必须是复数。', note: '主谓一致：单数主语配 is，复数主语配 are。' },
    { en: 'a / an / one / each / every + ___ → 单数', zh: '这些词后面跟可数名词单数。', note: 'each / every 后面的名词不加 s，谓语用单数。' },
    { en: 'information / advice / news / progress / equipment → 不加 s', zh: '不可数名词永远不变复数，前面也不能加 a / an。', note: 'news 长得像复数，其实是单数，谓语用 is。' },
    { en: 'knife / leaf / wolf / shelf → -ves', zh: '以 -f / -fe 结尾的名词变复数，通常改 f 为 v 再加 -es。', note: 'roof / chief 是例外，直接加 s。' },
    { en: 'is / was / does + 名词 → 单数', zh: '谓语是单数形式，说明主语是单数名词。', note: '主语后面夹了别的成分时，先找回真正的主语再定单复数。' },

    // ── 抽屉六：冠词 ──
    { en: '可数名词单数 + 第一次提到 + 泛指 → a / an', zh: '首次提到某一个、不特指时，用不定冠词。', note: 'a / an 不能用在复数名词和不可数名词前面。' },
    { en: '元音音素开头 → an', zh: '判断用 a 还是 an，看读音的第一个音素，不看字母。', note: 'an honest boy、a useful book，两个都是反例。' },
    { en: '第二次提到 / 特指 / 后面有定语 → the', zh: '上文提过、被定语从句或 of 短语限定、双方都知道的那个，用 the。', note: '第一次用 a，第二次一律用 the。' },
    { en: '独一无二 / 序数词 / 最高级前 → the', zh: 'the sun、the first、the tallest 都带 the。', note: '世界上独一无二的事物前面必须加 the。' },
    { en: 'go to school / at home / by bus → 不加冠词', zh: '固定搭配里常常不用冠词，强调用途而不是具体地点。', note: '别凭语感乱加 the，靠固定搭配表记。' },

    // ── 抽屉七：介词 ──
    { en: '名词 / 动名词前 + 成分不缺 → 介词', zh: '主谓宾都不缺，空后面又是个名词，多半填介词。', note: '介词不能单独作谓语，动词前面不填介词。' },
    { en: 'be interested in / be good at / depend on', zh: '介词最常考固定搭配，只能靠背。', note: '搭配里的介词是固定的，换一个就错。' },
    { en: 'arrive in + 大地点 / arrive at + 小地点', zh: '城市、国家用 in；车站、机场、村庄用 at。', note: 'home 前面不加介词，go home 直接说。' },
    { en: 'in 2020 / on Monday / at 7 o\'clock', zh: '时间介词口诀：in 年月季节，on 具体某天，at 具体时刻。', note: '具体某天的早上用 on the morning of ...，不用 in。' },
    { en: '介词 + ___ → doing', zh: '介词后面接动名词。', note: '介词后面不能出现动词原形。' },

    // ── 抽屉八：连词 ──
    { en: '两套主谓 + 一个空 → 连词', zh: '空前后各有一个完整的句子，中间要连词把它们接起来。', note: '一个句子里两个谓语必须有连词，否则是严重语法错。' },
    { en: '转折 → but / (al)though', zh: '前后意思相反用 but；although 引导让步状语从句。', note: '中文「虽然…但是…」在英语里只能留一个，不能同时用。' },
    { en: '因果 → because / so', zh: 'because 引导原因，so 引导结果。', note: '两者不能出现在同一个句子里。' },
    { en: '条件 → if / unless', zh: '条件状语从句用 if；unless 等于「除非、如果不」。', note: '主将从现：主句用将来时，从句用一般现在时。' },
    { en: '并列 → and / or', zh: '顺承或并列用 and，选择或否定并列用 or。', note: '否定句里的并列用 or，不用 and。' },
    { en: 'when / while / before / after / as soon as → 时间状语从句', zh: '这些连词引导时间状语从句，注意和主句的时态配合。', note: '主句将来时，从句用现在时，别写成 will。' },

    // ── 抽屉九：代词 ──
    { en: '缺主语 / 宾语 + 指代前文 → 代词', zh: '句子缺主语或宾语，而这个成分在指代前面出现过的人或物，就填代词。', note: '别重复填名词，这个空格就是给代词留的。' },
    { en: '同一个东西 → it / 同类中的一个 → one', zh: 'it 指前文提到的那一个，one 指同类里的任意一个。', note: '前文说的是具体那支笔、那本书，就只能用 it。' },
    { en: '名词性物主代词：mine / yours / his / hers / ours / theirs', zh: '后面不接名词、能单独作主语或宾语的物主代词。', note: 'my 后面必须有名词，mine 后面不能有名词。' },
    { en: 'by oneself / 主语与宾语是同一个 → 反身代词', zh: '宾语和主语指同一个人，用反身代词；by oneself 表示独自。', note: '反身代词的人称和数要和主语一致。' },
    { en: '两者 → both / either / neither；三者以上 → all / none', zh: '先定范围是两者还是三者以上，再定用肯定还是否定。', note: 'neither 本身已是否定，前面不能再加 not。' },

    // ── 抽屉十：关系词 ──
    { en: '先行词 + 缺成分的句子 → 关系词', zh: '空前面紧挨一个名词，空后面是一个缺成分的句子，就填关系词。', note: '定语从句里，关系词必须在从句中充当成分（主语 / 宾语 / 状语）。' },
    { en: '先行词是人 + 从句缺主语 → who / that', zh: '先行词指人、关系词在从句里作主语，用 who 或 that。', note: '作主语时关系词不能省略。' },
    { en: '先行词是物 + 从句缺主语 / 宾语 → which / that', zh: '先行词指物，用 which 或 that；作宾语时可以省略。', note: '前面有逗号的非限制性定语从句不能用 that。' },
    { en: '从句缺时间 / 地点 / 原因状语 → when / where / why', zh: '先行词是时间、地点、原因，从句主谓宾齐全时，用关系副词。', note: '先确认从句缺不缺宾语，缺宾语要用 which / that，不是 when / where。' },
    { en: '从句缺定语、表示「……的」→ whose', zh: '先行词和后面的名词有所属关系，用 whose。', note: 'whose 既能指人，也能指物。' },
    { en: '介词 + which / whom', zh: '介词提到关系词前面时，指人用 whom，指物用 which。', note: '这种结构里不能用 that，也不能省略关系词。' }
  ]
};
