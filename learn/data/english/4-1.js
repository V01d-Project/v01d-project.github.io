window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 4, bookName: '读后续写',
  chapterId: 1, chapterName: '四步法 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、读后续写到底考什么',
      p: [
        '这道题的形式很简单：给你一篇没写完的故事，停在最要紧的地方，再给你两段的第一句，你往下写两段，把故事写完。',
        '它和别的写作题最大的区别是——你不自由。人物是别人定好的，场景是别人定好的，连第一句话都给你了。你能决定的只有三件事：中间发生了什么、他们心里怎么动、最后怎么收。',
        '所以它考的就两件事：情节衔接，和语言质量。',
        '情节衔接，说的是你写的事必须从原文里长出来。人物还是那几个人，时间顺着往前走，不能在中间突然换人、换地方、换季节。阅卷老师读你第一段的时候，脑子里一直挂着一句话：这接得上吗。',
        '语言质量，说的是你能不能把已经想清楚的东西，用准确、有画面的英文写出来。不要求华丽词汇，要求动词准、句式有变化、语法错误少。',
        { li: '情节衔接：人物不变、场景不变、时间顺着走，原文里的矛盾最终被解决。' },
        { li: '语言：动作写清楚，情绪写具体，长短句交替着来。' },
        { li: '篇幅：两段共 150 词左右，一般第一段 70—80 词，第二段 70—80 词。' },
        { tip: '为什么很多人"情节想对了，分还是低"？因为情节只决定你不被扣大分，语言才决定你拿高分。情节是一条及格线，语言才是加分项。' },
        '下面两句就是最典型的"语言分"。同样的意思，写法不一样，分数就不一样：',
        { en: 'His heart was pounding so hard that he could hear it.' },
        { zh: '他的心砰砰跳得厉害，自己都能听见。写紧张时用——上台前、拆信封前、等在门外的時候，先给身体一个反应，再接下一个动作。' },
        { en: 'A cold fear crept up his spine, and his legs refused to move.' },
        { zh: '一股冰冷的恐惧顺着脊背爬上来，他的腿不听使唤了。写害怕到愣住时用；refuse 比 could not 多一层"身体不听自己的"的感觉。' },
        '注意这两句都没用难词。pound、creep、refuse 都是常见词，但用在了准确的地方，画面就出来了。所谓语言分，拼的不是词汇表长度，是"词用得对不对"。'
      ],
      ex: [
        {
          q: '原文：Emma worked part-time at an animal shelter. She had fallen in love with a small brown dog that nobody wanted to adopt. On Friday, she was told the dog would be sent away on Monday if no one took it. 第一段开头句：On Saturday morning, Emma got up before the sun rose.\n\n下面哪个续写方向是"接不住"的？\nA. 写 Emma 一早出门，挨家挨户贴领养启事，一路被拒绝，傍晚回到收容所，站在狗笼前不肯走。\nB. 写 Emma 一觉醒来发现自己变成了一只狗，被关进了笼子。\nC. 写 Emma 一早出门，去把自己的零花钱全部取出来，想凑够领养需要的费用。',
          a: [
            '第一步，先把原文的三样东西圈出来：人物（Emma、小狗、收容所工作人员），矛盾（她喜欢这只狗 ⇄ 没人领养就要送走，只剩三天），时间线（周五得知，周一是期限）。',
            '再看 A 和 C：都还在 Emma 和这只狗身上，时间从周六往前走，矛盾也没跑偏。方向是对的。',
            '看 B：突然加入"变成狗"这种超现实设定，可原文写的是现实故事。人物、场景、逻辑全断了，这就是接不住。',
            '结论：B 接不住。判断标准只有一条——从原文里长不出来的事，一句都不要写。'
          ],
          tip: 'A 和 C 本身也可能是对的，题问的是哪个"接不住"。考场上你不需要找到唯一答案，只需要保证自己不写跑偏的那一条路。'
        }
      ]
    },

    // ── 二 ──
    {
      h: '二、步骤一：读原文要圈出什么',
      p: [
        '读原文不是"看懂就行"。续写里所有能用的素材都在原文里，所以读的时候手里要拿笔，边读边圈，圈四样东西：人物关系、矛盾、伏笔、已经给好的时间线。',
        '第一样，人物关系。有谁，谁和谁是什么关系，谁在乎谁。这决定了后面谁能做什么、谁不该出现在哪。',
        { li: '人物关系：称呼、身份、彼此的态度。妈妈、教练、同桌，这些身份会决定台词怎么说。' },
        '第二样，矛盾。主人公最想要什么，现在办不到什么。这两者之间的差，就是这篇故事的心脏。你后面两段，就是在把这个差补上。',
        { li: '矛盾：想要什么 ⇄ 卡在哪。用一句话写出来，写不出说明还没读透。' },
        '第三样，伏笔。反复出现的物件、天气、一句说过的话、一个习惯动作。这些都不是作者白写的，你一定要在第二段把它们用回来。用上了，就是加分点。',
        { li: '伏笔：出现过两次以上的东西，后面一定要用一次。' },
        '第四样，已经给好的时间线。原文写了几天、几点、哪个季节、还剩多久，续写就必须顺着往下走，不能自己重新定时间。',
        { li: '时间线：已经写明的日子和期限，后面两段要严格顺着走。' },
        { tip: '读到一半先别急着想"我后面要写什么"。原文读透了，方向自己会浮出来；急着想情节，最容易把伏笔漏掉。' },
        { code: '原文（示例）：\nTom had been saving money for months to buy his mother a birthday gift. But two days before her birthday, he found his wallet was gone. He searched everywhere — under the bed, in his schoolbag, even in the old coat he never wore.\n\n圈出来的四样：\n· 人物关系：Tom 和妈妈（Tom 很在乎妈妈）\n· 矛盾：想给妈妈买礼物 ⇄ 钱丢了，离生日只剩两天\n· 伏笔：saving money for months（攒了很久，说明很看重）；the old coat he never wore（旧外套，很可能就是钱包所在）\n· 时间线：生日前两天，已给期限' },
        '你看，the old coat he never wore 这种细节就是作者特意给的。第二段如果写 Tom 在旧外套里翻出了钱包，这就是"用上了伏笔"，阅卷老师一眼就能看见。',
        { en: 'He searched everywhere, his mind racing faster than his hands.' },
        { zh: '他到处翻找，脑子转得比手还快。写着急找东西时用；独立主格 his mind racing 补一个同时发生的心理动作，句子立刻有了紧张感。' },
        { en: 'For months he had been saving, coin by coin, for this one day.' },
        { zh: '为了这一天，他一枚一枚地攒了好几个月。回扣上文伏笔时用；coin by coin 这种重复结构，写"一点点积累"最合适。' },
        '补一句语法提醒：coin by coin、day by day、step by step 这类结构，读起来有节奏，用在"积累、推进"的地方，比 very slowly、little by little 更利落。'
      ],
      ex: [
        {
          q: '原文：Jenny had practiced the piano for three months for the school concert. Two days before the concert, she hurt her right hand while helping her father in the garage.\n\n下面哪一项是"漏掉了时间线"的圈法？\nA. 人物：Jenny、父亲、音乐老师｜矛盾：想上台演出 ⇄ 手受伤了｜时间线：演出前两天\nB. 人物：Jenny、父亲、音乐老师｜矛盾：想上台演出 ⇄ 手受伤了｜时间线：没有写明\nC. 人物：Jenny、父亲｜矛盾：想上台演出 ⇄ 手受伤了｜伏笔：practiced for three months',
          a: [
            '先把原文里所有跟时间有关的词挑出来：for three months（练了三个月）、Two days before the concert（演出前两天）。',
            '时间线在原文里是明写出来的，所以圈的时候必须把它记下来。',
            'B 写的是"没有写明"，这就是漏掉了原文已经给好的时间线。后面续写就容易自己乱定日子，比如写成"演出当天早上"，直接和原文冲突。',
            '结论：B。原文给了的日期和期限，一定原样记下来，续写顺着它走。'
          ]
        }
      ]
    },

    // ── 三 ──
    {
      h: '三、步骤二：第一段怎么写',
      p: [
        '第一段的任务是把情节往前推，一直推到最紧张的那一下。它不是用来抒情的。',
        '第一步，把题目给的第一段开头句照抄下来，当作第一段的第一句。不要改写，不要换说法——这是题目白送的，照抄就对了。',
        '第二步，第二句就要接得上：不跳场景、不换人、不改时间。人物还在原来的地方，手边还是原来的东西。',
        '第三步，接着只写两样东西：动作和反应。动作就是人物做了什么，反应就是别人或者环境给出了什么回应。一句一个动作，动词要准。',
        { li: '动作：他做了什么。动词选准，一个动作写一句，不要堆在一起。' },
        { li: '反应：别人怎么回应、周围发生了什么变化。有反应，读者才知道事情在动。' },
        { li: '推进：每写两三句，事情就要往前走一点，不能原地打转。' },
        { tip: '第一段不要一上来就写一大段心里怎么想。开篇先让人物动起来，心理描写放在动作后面，一两句就够；上来就抒情，读起来会停住不动。' },
        { code: '题目给的开头句：\nTom ran all the way to the shop, only to find it closed.\n\n接着写（示例）：\nHe pressed his face against the glass, his eyes searching for the little wooden music box he had seen a week before. It was still there, on the bottom shelf. He knocked on the door, once, twice, but the lights inside stayed off. A woman walking her dog told him the shop would not open until Monday — and Monday was the day after his mother\'s birthday.' },
        '这段里没有一句写"他心里很难过"。全是动作：贴玻璃、找、敲门、灯没亮。可读者读完就知道他有多着急。这就是把情绪藏进动作里。',
        { en: 'He pressed his face against the glass, his eyes searching the shelf.' },
        { zh: '他把脸贴在玻璃上，眼睛在货架上找。写"隔着东西看、进不去"的场面用；独立主格 his eyes searching 让两个动作同时发生。' },
        { en: 'He knocked once, then twice; the lights inside stayed off.' },
        { zh: '他敲了一次，又敲了一次；里面的灯始终没亮。写"试图求助却没有回应"用；分号把两个相反的短句并在一起，比用 but 更利落。' },
        '还要记得最后留一个钩子。第一段的最后一句，最好停在"事情更糟了"或者"下一步该怎么办"的地方，让读者非往下看不可。上面示例的钩子就是最后那半句：Monday was the day after his mother\'s birthday。',
        '如果你嫌自己的第一段写得太顺、太平，可以回头问一句：这一段的最后一句，有没有让读者想往下翻？没有，就把它改到"卡住"的地方。'
      ],
      ex: [
        {
          q: '题目给的第一段开头句：Emma got up before the sun rose and went straight to the shelter.\n\n下面三个续写开头，哪个"接不住开头句"？\nA. The gate was still locked, so she sat down on the steps and waited, her hands deep in her pockets.\nB. Two weeks later, she had already forgotten the little dog and was busy with her exams.\nC. She knocked on the office window, and a familiar voice answered from inside.',
          a: [
            '先看开头句给了什么：时间是"太阳没出来之前"，地点是 shelter（收容所），人物是 Emma。这三样续写时都不能变。',
            'A：还在收容所门口，时间还是清晨，动作是坐下等。接住了。',
            'C：还在收容所，有人从办公室里应声。接住了。',
            'B：直接跳到"两周以后"，还把狗忘掉了。时间跳走了，人物态度也变了，跟开头句接不上。',
            '结论：B。第一段的第二句必须紧贴开头句，不能自己另开一个时间。'
          ]
        }
      ]
    },

    // ── 四 ──
    {
      h: '四、步骤三：第二段怎么写',
      p: [
        '第二段要干两件事，顺序不能反：先把矛盾解决，再写情感落点。',
        '解决矛盾的意思是，原文里卡住主人公的那件事，在这一段必须有结果。丢的钱找回来没有，没人接的电话打通没有，没赶上的车后来怎么样了——读者要看到一个交代。',
        '情感落点是说，事情解决之后，写人物的变化：一个动作、一个表情、一句很短的话，让读者看出他心里跟从前不一样了。',
        { li: '先"事"后"情"：先把事情办成，再让人物的心动一下。顺序反了，就成了空抒情。' },
        { li: '情感要落在具体的东西上：他做了什么、她的手怎么样、两个人说了哪句很短的话。' },
        { li: '题目给了第二段开头句，同样照抄下来当第一句，然后接着写。' },
        { tip: '不要用旁白讲道理。让主人公自己动一下、说一句，道理自己就浮出来了。"这个故事告诉我们要善良"这类句子，一律不要写。' },
        { code: '题目给的第二段开头句：\nOn Monday morning, Tom was the first to arrive at the shop.\n\n接着写（示例）：\nThe owner listened to his story and quietly took ten percent off the price. Tom counted his coins twice, then ran home and hid the box under his bed. That evening, when his mother opened it, the small melody filled the room, and she held it against her chest for a long time. Tom said nothing. He just watched her face, and for the first time in days, the weight in his chest lifted.' },
        '看这段的顺序：先解决（老板降价，钱够了，礼物买到），再落情感（妈妈把盒子抱在胸口，Tom 看着她的脸，胸口的重担落了地）。事在前、情在后，读起来才实。',
        { en: 'A heavy weight lifted from his chest, and he could finally breathe.' },
        { zh: '胸口的重担落了地，他终于能喘口气了。写"悬着的事终于解决"时用；放在矛盾解决之后一句，最自然。' },
        { en: 'She held the little box against her chest, saying nothing for a long time.' },
        { zh: '她把那个小盒子抱在胸口，好久没说话。写收到礼物、被感动时用；用"没说话"代替"很感动"，画面自己就出来了。' },
        '再补一句写法上的提醒：第二段的结尾可以稍微拉长一点时间尺度，比如"那天之后""后来的很多年"。原文已经写了具体几天，结尾偶尔跳一下尺度是可以的，但中间不能乱跳。',
        '另外，第二段是唯一允许你"情感加倍"的地方。第一段克制，第二段松开一点，整篇就有起伏。两段都平，读起来像流水账；两段都煽，读起来又假。'
      ],
      ex: [
        {
          q: '题目给的第二段开头句：The doctor smiled and told Jenny her hand would be fine in two weeks.\n\n下面三个续写片段，哪个是"顺序反了"（还没解决就先抒情）？\nA. Jenny let out a long breath and sat down. Her teacher called that afternoon and said the concert could be moved to next month.\nB. Jenny was so moved that tears filled her eyes, and she thought about how much she loved music, and she promised herself she would never give up her dream.\nC. Jenny thanked the doctor, then went home and asked her teacher whether she could play in the next school concert instead.',
          a: [
            '先记住第二段的两件事：解决矛盾（手受伤 ⇄ 想上台演出），落情感（她心里怎么变）。顺序必须先事后情。',
            'A：先松了一口气，然后老师打电话来说演出可以改到下个月。事情解决了，情感还没展开。顺序对。',
            'C：先谢医生，接着找老师换一场演出。事情解决了，也带一点行动。顺序对。',
            'B：一上来就是"很感动、流泪、想到自己多爱音乐、发誓永不放弃"。手的问题一个字没提，事还没办，情绪倒铺了一整段。这就是顺序反了。',
            '结论：B。情写了一堆，事一件没干。'
          ]
        }
      ]
    },

    // ── 五 ──
    {
      h: '五、步骤四：结尾一句怎么写',
      p: [
        '阅卷老师最后读到的就是结尾这一句。一句好的收尾，能把整篇的印象提上去。',
        '最稳的收法有三种：画面收、动作收、台词收。三种没有好坏，看你这篇故事适合哪一种。',
        '画面收：不点评、不停下来讲道理，就用一个景象把故事停住。两个人并肩走回家，雪在落；灯亮着，桌上摆着那盒糖。画面越具体越好。',
        { en: 'Snow was falling softly as they walked home side by side, neither of them saying a word.' },
        { zh: '雪轻轻落着，他们并肩走回家，谁都没有说话。写和解、陪伴、故事结束时用；"谁都没有说话"比"他们很感动"更有余味。' },
        '动作收：让主人公做一个小动作，把心里的变化落在手上、身上。动作要小，越具体越有力量。',
        { en: 'She reached out and took the old man\'s hand, and this time she called him "Dad".' },
        { zh: '她伸出手握住老人的手，这一次她喊了他一声"爸"。写亲情、和解的结尾用；把变化压在"这一次"三个字上，前面一定得有个"上一次"做对比。' },
        '台词收：一句话，很短，但要把前文给过的伏笔用回来。比如开头出现过的那句口头禅、那个约定、那句没说完的话。',
        { en: '"I found it," he said, holding up the old coat. "It was in here all along."' },
        { zh: '"我找到了，"他举起那件旧外套说，"一直都在这里面。"写用回伏笔的结尾用；外套是前文给过的线索，结尾用它一收，整个故事就圆上了。' },
        { li: '画面收：用景象停住，不点破。适合温暖、平静、要留余味的结尾。' },
        { li: '动作收：一个小动作承载变化。适合情绪比较重、要落在人身上的结尾。' },
        { li: '台词收：一句短台词回扣伏笔。适合前文给过明显线索的结尾。' },
        { tip: '千万别用 "This story tells us that we should be brave and never give up." 这种句子收尾。那是跳出故事讲道理，读着像议论文，直接掉档。' },
        { code: '同一个故事，三种收法：\n\n· 画面收：Outside, the first snow of the year fell quietly over the small town, and the little music box played on.\n· 动作收：Tom put his arm around his mother\'s shoulder and, for the first time, noticed how thin it had become.\n· 台词收："Happy birthday, Mum," he said, and watched her face light up.' },
        '选哪种，看你这篇故事的重心在哪。前面写了很多场景细节，就用画面收；前面写了很多身体动作，就用动作收；前面留了一个明显的约定或者物件，就用台词收。'
      ],
      ex: [
        {
          q: '原文给过这一句：Grandpa had promised that if the little tree survived the winter, he would carve a wooden bird for it.\n\n下面三个结尾，哪个可以判为"台词收"？\nA. In spring, the little tree was covered with new green leaves, and a wooden bird sat on its highest branch.\nB. The next morning, Peter ran straight to the garden and touched the first new leaf with his finger.\nC. "It lived," Peter said, holding the bird up to the light. "You kept your promise, Grandpa."',
          a: [
            '先分清三种收尾的标记：画面收靠景象，动作收靠一个身体动作，台词收靠引号里的短句。',
            'A 全是景象（新叶、木鸟停在最高的枝上），是画面收。',
            'B 是动作（跑进花园、用手指碰第一片新叶），是动作收。',
            'C 有引号、有短台词，还把前文的承诺（carve a wooden bird）用回来了，是台词收。',
            '结论：C。台词收的关键不只要有引号，还要把前文给的伏笔接回来。'
          ]
        }
      ]
    },

    // ── 六 ──
    {
      h: '六、时间分配与三个致命错误',
      p: [
        '读后续写一般给 25 分钟左右（具体时间以卷面为准）。提前把节奏定死，别在前半段磨太久，后面来不及写。',
        { li: '读原文 + 圈四样东西：4 分钟。' },
        { li: '想情节：3 分钟。在草稿纸上用中文写三行，两段各写什么事，写清楚就够。' },
        { li: '写第一段：6—7 分钟，70—80 词。' },
        { li: '写第二段：6—7 分钟，70—80 词。' },
        { li: '检查：3 分钟。重点看时态、人称、单复数、拼写。' },
        { code: '时间表（示例，总 25 分钟）：\n0—4 分     读原文，圈人物关系 / 矛盾 / 伏笔 / 时间线\n4—7 分     想情节，纸上写两三行中文\n7—14 分    写第一段（70—80 词，最后一句留钩子）\n14—21 分   写第二段（先解决矛盾，再落情感）\n21—25 分   检查：时态、人称、单复数、拼写、首字母大写' },
        '第一个致命错误：时态乱。原文是过去时，续写两段全程都要过去时，别写到一半换成现在时。这是最容易丢分、也最容易检查出来的一项。',
        '第二个致命错误：人称和称呼乱。原文里的 he / she 到底指谁，写的时候别串；称呼（妈妈、老师）也别中途换。这一项错了，读者会直接读不懂。',
        '第三个致命错误：写到一半开始讲道理。故事该收了，你却跳出来总结"我们应该……"。只要故事还有没收的线头，就不要讲道理；就算线头都收完了，讲道理也不如给一个画面。',
        { tip: '三个错误里，时态最容易抢救：写完花 30 秒，从第一个动词扫到最后一个，把不属于过去时的动词圈出来改掉。' },
        '最后说个心态上的事：读原文那 4 分钟不是浪费。读透了，后面两段一共也就 150 词，写起来很快；读的时候省下的三分钟，后面要用十分钟来还。',
        { en: 'By the time the sun went down, the two of them were still there, waiting together.' },
        { zh: '太阳落山的时候，他们两个人还在那儿，一起等着。写"时间往前推 + 陪伴"的收尾用；by the time 后面接过去时，注意别写错。' },
        { en: 'He did not say a word, but his eyes said everything.' },
        { zh: '他一句话也没说，但眼睛说明了一切。写克制、沉默的情感落点用；用 but 把"没说"和"说了"并在一起，短而有劲。' }
      ],
      ex: [
        {
          q: '下面这段续写（示例）有三处问题，请找出来：\n\nThe next morning, Tom gets up early and runs to the shop. He knocks on the door but nobody answers. He feels very sad and thinks about his mother. He thinks that we should always be kind to our parents. Suddenly, he finds his wallet in his old coat, and he is very happy.',
          a: [
            '第一条：时态错。开头是 The next morning（过去时间），后面却全用 gets / runs / knocks / feels，一般现在时。整段要改成过去时：got / ran / knocked / felt。',
            '第二条：讲道理。"He thinks that we should always be kind to our parents." 这是跳出故事讲课，不是人物该在故事里想的事。删掉，换成动作或者画面。',
            '第三条：解决得太随便。钱包"突然"就在旧外套里找到了，前面没有一句铺垫。原文里 the old coat he never wore 是伏笔，正确做法是让他翻找旧外套时想起来，而不是靠"突然"。',
            '小结：时态、讲道理、解决得随便——这三样是最常见的扣分点，写完一定回头扫一遍。'
          ]
        }
      ]
    }

  ]
};
