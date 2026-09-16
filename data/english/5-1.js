window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 5, bookName: '七选五',
  chapterId: 1, chapterName: '四个抓手 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、为什么七选五最容易浪费时间',
      p: [
        '七选五的坑在于，很多人把它当阅读理解做：先把整篇文章一句一句读完，再回头逐空去挑句子。读完两遍，十分钟已经没了，时间全花在"读"上，分数却没涨。',
        '错在哪？文章本来就有 5 个洞。你先把一篇破了洞的文章读一遍，读到的信息是不完整的，还得再读第二遍。等于花两遍的时间，买一遍的信息。',
        { li: '错误做法：先通读全文 → 读得半懂不懂 → 再读一遍 → 时间没了，题还没做。' },
        { li: '正确做法：先扫 7 个选项，划出线索词 → 带着线索读文章 → 找到就填，填完就走。' },
        '为什么先看选项有用？因为选项里的代词、连接词、核心名词，正好就是你要在文章里找的东西。手里有清单，读文章就是"对号入座"，不是"从零理解"。',
        { code: '选项（示例）：\nA. These habits are easy to build if you start small.\nB. However, changing them takes far more time than most people expect.\nC. What is more, it saves you both time and money.\n\n扫一遍就能划出：\nA → These / habits（复数，回指前文提过的多个习惯）\nB → However（转折，前面一定是相反的说法）\nC → What is more（递进）+ it（单数，回指前文的一个单数名词）' },
        { tip: '记住一个数字：7 个选项、5 个空，必定有 2 个用不上。你不需要看懂全文，只需要让每一句接得上。' },
        '把这条反过来看，就是做题的底气：就算某一段没完全读懂，只要线索词咬得住，你也能把空填对。七选五考的是"句子之间接不接得上"，不是"你有没有读懂全文"。',
        { li: '线索词分四类：代词、连接词、复现词、结构标志词。后面四节一个一个讲。' }
      ],
      ex: [
        {
          q: '很多人的做题顺序是这样的：\n第 1 步：把 A—G 七个选项读一遍（两分钟）\n第 2 步：从头把文章读完，遇到空就停（五分钟）\n第 3 步：回头把选项一个个往空里试（三分钟）\n第 4 步：还剩两个空没定，再看一遍文章（两分钟）\n\n这个顺序最大的问题在哪？',
          a: [
            '第 2 步是最大的浪费：文章有 5 个洞，你读的时候信息是断的，读完也记不住多少，等于白读一遍。',
            '第 3 步"一个个往空里试"，是在做排除法，不是在找线索，所以做得慢还容易自我说服。',
            '正确的顺序是：先扫选项、划线索词（1 分钟）→ 读文章、看到空就用手里的线索去对（3—4 分钟）→ 填完还剩空的再回看（2 分钟）。',
            '结论：问题在于"先通读全文再做题"。顺序一改，同样的时间能多做一遍检查。'
          ],
          tip: '注意："先读选项"不等于"把七个选项背下来"，是划词——划代词、划连接词、划重复出现的名词。'
        }
      ]
    },

    // ── 二 ──
    {
      h: '二、抓手一：代词指代',
      p: [
        '代词是七选五里最稳的线索，因为它不能凭空出现——每个 it、they、this、these、such 前面都必须有它指的东西。',
        '所以看到一个选项里以代词开头的句子，就往空前面找：那个名词是谁、单数还是复数、是人还是东西。找得到，这句就能填；找不到，基本可以排除。',
        { li: 'it / this / that：指代前文的单数名词、一整件事，或者上一句话的内容。' },
        { li: 'they / them / these / those：指代前文的复数名词，或者一群人、一堆东西。' },
        { li: 'such + 名词：指代前文刚说过的那一类东西，通常前面刚举过例子。' },
        { li: '人 vs 物：选项里用 he / she 还是 it，直接告诉你空前面该是人是物。' },
        { code: '空前面一句：\n"These daily habits, small as they seem, shape the way we live."\n\n选项：\nA. They are easy to pick up but hard to give up.        → They 指复数 habits ✔\nB. It is easy to pick up but hard to give up.           → It 指单数，对不上 ✘\nC. Such habits are easy to pick up but hard to give up. → Such 回指刚提过的 habits ✔' },
        { tip: '这道类型的空，最快的判法就是看数字：前文是复数（habits、students、problems），选项却用 it，直接划掉，不用再读意思。' },
        '再提醒一句：代词线索只能帮你排除，不能单独帮你确定。排除完还剩两个，就再往下用连接词、复现词继续筛。'
      ],
      ex: [
        {
          q: '短文（示例）：\nMany students try to memorize new words by repeating them again and again. ___ Studies show that words learned through stories stay in memory far longer.\n\n选项：\nA. This method works for a while, but the words soon fade.\nB. These words are difficult to remember.\nC. It is a helpful way to learn grammar.',
          a: [
            '看空的位子：空在段中，前面讲的是"反复背单词"这个做法，后面讲的是"通过故事记的词记得更久"。',
            'A 里的 This method 回指前面"反复背单词"这件事，而且 but the words soon fade 正好和后一句"记得更久"形成对比。接得上。',
            'B 里的 These words 是复数，前文没出现过复数名词，指代落空；而且它和后一句不构成对比。排除。',
            'C 讲的是语法，前文讲的是词汇，话题跳了。排除。',
            '结论：A。代词能不能找到"主人"，是这一抓手的全部标准。'
          ]
        }
      ]
    },

    // ── 三 ──
    {
      h: '三、抓手二：逻辑连接',
      p: [
        '第二类线索是连接词。它们像路牌，直接告诉你前后两句是什么关系：顺着、反着、还是因为这个所以那个。',
        '做题时看到选项开头有连接词，先在空的前后找"关系"。关系对不上，句子意思再顺也填不得。',
        { li: '转折：however、but、yet、instead、on the contrary、in fact。前面一定是"相反的说法"。' },
        { li: '递进：what is more、besides、moreover、in addition、also。前面一定在讲同一方向的另一条理由。' },
        { li: '因果：so、therefore、as a result、thus、because、since。前面是结果还是原因，要看方向。' },
        { li: '举例：for example、for instance、such as、take ... as an example。前面一定刚说过一个概括性的说法。' },
        { code: '空前面一句：\n"Reading aloud has many benefits."\n\n选项：\nA. For example, it helps you notice the rhythm of English.  → 举例，前句是概括 ✔\nB. However, it takes a lot of time.                     → 转折，前句不是相反说法 ✘\nC. Therefore, it is bad for you.                        → 因果 + 意思相反 ✘' },
        { tip: '最容易错的是 however。它不只表示"但是"，还暗含"和前面说的相反"。如果前句和后句并不相反，就不该用 however。' },
        '还有一个细节：however 后面通常有逗号，而 but 后面直接接句子。这个格式上的差别，偶尔也能帮你把两个选项区分开。'
      ],
      ex: [
        {
          q: '短文（示例）：\nWalking to school every morning sounds like a small thing. ___ It keeps you active, and it gives you time to think before the day begins.\n\n选项：\nA. However, it does far more for you than that.\nB. Therefore, most students prefer to take the bus.\nC. For example, many people drive to work.',
          a: [
            '看空的位置和上下文：前一句说"走路上学听起来是件小事"，后一句列举了两条好处。中间这一句要把"小事"和"很多好处"接起来。',
            'A 里的 However 表示转折（不是真的相反，而是"你以为只是小事，其实远不止"），后面 it does far more for you than that 正好引出下面两条好处。接得上。',
            'B 的 Therefore 表结果，前句不是原因；而且"学生更愿意坐公交"和后文"走路的好处"方向反了。排除。',
            'C 的 For example 要用在概括句之后，但前一句不是概括，是评价。排除。',
            '结论：A。看到连接词，先在前后找关系，关系不对就划掉。'
          ]
        }
      ]
    },

    // ── 四 ──
    {
      h: '四、抓手三：复现与同义替换',
      p: [
        '第三类线索是"同一个东西说两遍"。文章为了讲清楚，会把同一个概念换着说法重复。这些重复就是你确定答案的地方。',
        '复现分两种：一种是用同一个词（原词复现），一种是用不同的词说同一个意思（同义替换）。',
        { li: '原词复现：前文出现 benefit，选项里也出现 benefit。这种最容易看见。' },
        { li: '同义替换：前文说 save you time，选项里说 make your life easier。意思重合，词不一样。' },
        '注意：同义替换比原词复现可靠。原词复现有时候是陷阱——出题人会故意在不同话题的选项里放同一个词。所以看见原词，还要再看一眼句子意思对不对得上。',
        { code: '空前面一句：\n"Taking notes by hand forces you to decide what matters."\n\n选项：\nA. That is why it helps you focus on the main points.  → main points ≈ what matters ✔\nB. That is why handwriting is becoming popular again. → 话题跳了（手写流行 ≠ 抓重点）✘' },
        { tip: '找复现的时候，优先看名词和动词。形容词、副词经常是干扰项里用来迷惑人的。' },
        '再补一条：如果一整段反复出现一个词（比如 pressure、memory、habit），那么这一段里的空，选项大概率也带着这个词或者它的同义说法。'
      ],
      ex: [
        {
          q: '短文（示例）：\nMost people believe that talent decides success. ___ In fact, studies of top performers in many fields point to the same thing: long hours of focused practice.\n\n选项：\nA. But the evidence tells a different story.\nB. So talent is the most important factor.\nC. For example, some people are naturally good at music.',
          a: [
            '空前面是"大多数人认为天赋决定成功"，空后面是"研究表明是长时间专注练习"。前后方向相反。',
            'A 里 the evidence 和后面的 studies 是同义复现，tells a different story 和后面的 In fact 一起构成转折。接得上。',
            'B 说"所以天赋最重要"，和空后面"研究指向练习"直接冲突。排除。',
            'C 说"有些人天生擅长音乐"，是顺着"天赋决定"的方向讲的，和后面接不上。排除。',
            '结论：A。前后方向相反时，先找表示"不是这样"的说法。'
          ]
        }
      ]
    },

    // ── 五 ──
    {
      h: '五、抓手四：句式与结构一致',
      p: [
        '第四类线索是"句子长得像不像"。文章里常有排比的段落：几个句子结构一样，主语一样，长度也接近。这种地方，选项必须跟旁边的句子是同一个模子。',
        '最常见的是段落首句。同一段里几个句子都用祈使句开头，或者都用"主语 + 动词 + 补语"，你填的那一句也得是同样的开头。',
        { li: '排比：前两句是"Do A. Do B."，中间的空大概率也是"Do C."。' },
        { li: '平行：前句用 First，后句用 Third，中间多半是 Second。' },
        { li: '主语一致：一段都在说 you，选项突然换成 people，就要警惕。' },
        { code: '段落（示例）：\nFirst, set a clear goal for the week.\n___\nThird, check your progress every Sunday.\n\n选项：\nA. Second, break that goal into small daily steps. ✔（数字 + 祈使句，结构一致）\nB. You should also think about your goal.             ✘（结构不同，没有数字）' },
        { tip: '结构一致的题，光看开头两三个词就能定。看到 First ... Third ...，中间必须是 Second，不用读意思。' },
        '不过要提醒一句：结构一致是"辅助条件"，不是唯一条件。两个选项结构都对的时候，还要回到意思上，看哪个和前后文真正接得上。',
        '还有一种结构线索是标点。比如前面是分号或者冒号，选项往往也是同一层级的小句，而不是完整的独立句子。'
      ],
      ex: [
        {
          q: '段落（示例）：\nTo keep your desk tidy:\n· Put everything you use daily within reach.\n· ___\n· Throw away anything you have not touched for a year.\n\n选项：\nA. Keep only one notebook open at a time.\nB. It is very important to keep your desk tidy.\nC. Tidiness has a lot to do with how you feel.',
          a: [
            '先看这一段的形状：三条祈使句，都是一句话，都很短，都在讲"具体怎么做"。',
            'A 是祈使句（Keep ...），长度和旁边两条接近，也是具体动作。结构对得上。',
            'B 是"It is very important to ..."的陈述句，而且讲的是"整洁很重要"，不是具体做法。结构和内容都不对。',
            'C 讲的是整洁和心情的关系，是评价，不是动作。排除。',
            '结论：A。看到排比的短句串，先挑开头结构一致的那一个。'
          ]
        }
      ]
    },

    // ── 六 ──
    {
      h: '六、空格在段首 / 段中 / 段尾，分别看什么',
      p: [
        '空的位置不同，你要看的方向也不同。这一节能省掉你一半的犹豫时间。',
        '空在段首：这一句通常是这段的主题句。往下读这一段剩下的内容，选项要能"盖住"整段。盖不住的，就是干扰项。',
        { li: '段首空：往后看整段，选能概括全段的主题句。' },
        '空在段中：往两边看，前一句和后一句都要接得上。这种空最容易，因为线索最多。',
        { li: '段中空：前后各读一句，找代词、连接词、复现词。' },
        '空在段尾：这一句通常是本段的收束，或者引出下一段。往前看这一段的主旨，往后看下一段的开头。',
        { li: '段尾空：往前收本段，往后接下一段，注意有没有承上启下的词。' },
        { tip: '有一种段尾空是"承上启下句"：既总结上一段，又抛出下一段的话题。这种句子最难，判它的方法就是看它有没有同时提到两边的关键词。' },
        { code: '三种位置各举一句：\n\n段首句（主题句）：\nVolunteering has more benefits than most students realize.\n\n段中句（承接）：\nThis is exactly why so many of them come back the next year.\n\n段尾句（收束 + 过渡）：\nAnd that is where the real challenge begins.' }
      ],
      ex: [
        {
          q: '短文（示例）：\n___(1) They are cheap, they last for years, and they never need batteries.\n\n选项：\nA. Paper books have several advantages over e-books.\nB. Reading is a good habit for everyone.\nC. E-books are becoming more and more popular.',
          a: [
            '空在段首，先别急着选，把后面一整句读完："便宜、能用很多年、不需要电池"。这三条都是"纸质书"的优点。',
            'A 说"纸质书有几个优点"，正好盖住后面三条。接得上。',
            'B 说的是"阅读是好习惯"，范围太大，盖不住"便宜 / 耐用 / 不用电池"。排除。',
            'C 说"电子书越来越流行"，后面讲的却是纸质书的好处，方向反了。排除。',
            '结论：A。段首空的标准是"能不能概括整段"，不是"读起来顺不顺"。'
          ]
        }
      ]
    },

    // ── 七 ──
    {
      h: '七、两个空纠结的时候怎么定',
      p: [
        '做到最后剩下两个空、两个选项，看着都能填——这时候再读一遍意思，只会越读越像。要换方法。',
        '方法是回原文找"硬线索"。意思是可以糊弄的，代词、数字、连接词糊弄不了。',
        { li: '第一步：数一数。看前文是单数还是复数，选项里的代词对不对得上。' },
        { li: '第二步：找关系。看空前后的逻辑是转还是顺，选项的连接词对不对得上。' },
        { li: '第三步：回填验证。两个选项都往回填一次，读一读，哪个地方"卡"就是错的那个。' },
        { li: '第四步：看剩下的那个。七选五有 2 个多余选项，通常这两个之间有一个明显不搭，把它排除，另一个就是答案。' },
        { tip: '凭语感做题是七选五最大的失分点。语感来自"读得多"，而你读的这篇正好是别人写来考你的，语感在这里不可靠。' },
        '还有一个实用的招：先做确定的，再回来做纠结的。四个空定下来之后，剩下的选项少了，纠结的那一个经常会自己浮出来。',
        { code: '排除法的例子：\n假设最后剩第 3 空和第 5 空，剩选项 D 和 F。\n\n· 第 3 空前是 "these tools"（复数），D 用 "they"，F 用 "it" → F 排除，第 3 空填 D。\n· 第 5 空自然就是 F，再回填读一遍确认。' }
      ],
      ex: [
        {
          q: '短文（示例）：\nStudents often complain that they have no time to exercise. ___(1) Even ten minutes of walking between classes counts.\n\n选项：\nA. The truth is that they do have small pockets of time.\nB. It is important to eat well and sleep enough.\nC. This is a problem that teachers care about a lot.',
          a: [
            '空前面是"学生抱怨没时间锻炼"，空后面是"课间走十分钟也算"。前后关系是：抱怨 → 其实有时间 → 举例。',
            'A 的 The truth is that 是"其实"的说法，they do have small pockets of time 正好被后面的"课间走十分钟"印证。接得上。',
            'B 讲吃和睡，话题从"时间"跳到"饮食和睡眠"，接不上。排除。',
            'C 说"老师很关心这个问题"，后文并没有讲老师，接不上。排除。',
            '结论：A。前后关系对不上时，先按"方向"排除，不要靠读起来的顺口程度。'
          ]
        }
      ]
    },

    // ── 八 ──
    {
      h: '八、做题顺序与时间分配',
      p: [
        '七选五一共 5 个空，建议总时间 6—8 分钟，平均每空 30—40 秒。超过一分钟还没定，先跳过，别被一个空拖住整篇。',
        { li: '第 1 步（约 1 分钟）：扫 A—G 七个选项，划代词、连接词、重复名词。' },
        { li: '第 2 步（约 3—4 分钟）：从头读文章，读到空就用线索去对，能定就填。' },
        { li: '第 3 步（约 1 分钟）：回头处理剩下的空，用排除法。' },
        { li: '第 4 步（约 1 分钟）：把填好的句子代回原文，从头到尾读一遍，看顺不顺。' },
        { code: '时间表（示例，总 7 分钟）：\n0:00—1:00    扫选项，划线索词\n1:00—4:30    读文章 + 填确定的空\n4:30—5:30    用排除法处理剩下的空\n5:30—6:30    回填朗读，检查逻辑和代词\n6:30—7:00    检查拼写、大小写、答题卡填涂' },
        { tip: '最后一分钟的回填朗读很重要。七选五错了往往不是"选不出"，而是"选错一个连带错两个"，读一遍能救回来。' },
        '还有一个习惯值得养成：做完之后从第一个空读到最后一个空，只在脑子里问一句话——"这两个句子接得上吗"。接不上，就回头改。',
        '最后提醒：如果实在时间不够，宁可空着也别乱填。乱填会把原本对的逻辑链也打乱，得不偿失。'
      ],
      ex: [
        {
          q: '一道七选五只剩 8 分钟，还有 5 个空没做，最后一段还有 2 个空在犹豫。下面哪个处理方式最合理？',
          a: [
            '先花 1 分钟扫一遍 7 个选项，把代词、连接词划出来。这 1 分钟是省不掉的。',
            '接着按顺序读文章，能确定的先填。一边读一边填，通常 5 个空里能定下 3 个。',
            '剩下 2 个用排除法：先看代词数量对不对，再看连接词方向对不对，最后回填读一遍。',
            '不要死磕某一个空。单空超过一分半就跳过，做完别的再回来。',
            '结论：先扫选项 → 顺序填 → 排除法收尾 → 回填朗读。整篇 6—8 分钟是正常节奏，8 分钟做 5 个空够用。'
          ],
          tip: '七选五是整张卷子里"时间回报率"最高的题之一：只要方法对，5 个空可以在 3 分钟内做完。别把它拖成阅读理解。'
        }
      ]
    }

  ]
};
