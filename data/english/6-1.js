window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 6, bookName: '阅读干扰项',
  chapterId: 1, chapterName: '五类陷阱 · 教程',
  sections: [

    // ── 一 ──
    {
      h: '一、为什么「文章读懂了还是选错」',
      p: [
        '阅读理解错题，很多不是"没读懂"，而是"读懂了、但选项把我骗了"。原因很简单：出题人不是随便编选项的，每一个错选项都有它的"设计目的"。',
        '一个正确选项，必须同时满足三条：内容在文中能找到依据、范围不多不少、逻辑不多走一步。错选项就是在这三条里挑一条违反。',
        { li: '依据不够：文中没这个说法（无中生有、张冠李戴）。' },
        { li: '范围不对：说的东西对，但被放大或缩小了（偷换范围、以偏概全）。' },
        { li: '逻辑多走半步：文中只说了 A，选项却说成 A 导致 B（过度推断）。' },
        '所以做阅读不是"读得懂就能选对"，而是"读完之后，用原文去检验每一个选项"。检验的依据永远在原文里，不在你的印象里。',
        { code: '文中（示例）：\n"Some of the volunteers found the new schedule easier to follow."\n\n选项：\nA. The new schedule was easier for some volunteers. ✔（some ↔ some，范围一致）\nB. The new schedule was easier for the volunteers.   ✘（some 被放大成全部）\nC. The new schedule was popular among the volunteers. ✘（easier 被换成 popular，加了文中没有的态度）' },
        { tip: '一个实用的心理准备：四个选项里，有三个是专门为"你这种读法"准备的。你越凭印象选，越容易踩中它们。' },
        '还有个坑要说清楚：干扰项往往"看起来很有道理"。它不是胡说，它是"对了一半"。你要练的就是找那不对的一半。',
        { li: '选项读起来越顺、越像常识，越要回原文确认一遍。' },
        '下面八节，把五类陷阱一类一类拆开，再讲主旨题、推断题、词义题怎么做，最后给一套考场检查法。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"Only a small number of students in the class chose to take the extra course, and most of them said they did it out of personal interest."\n\n题目：What can we learn about the students who took the extra course?\nA. Most students in the class took the extra course.\nB. Some students took it mainly out of personal interest.\nC. All the students took it because they had to.\n\n哪个选项是正确项？为什么？',
          a: [
            '先把原文的每一个限定词挑出来：a small number of（少数）、most of them（其中大多数）、personal interest（个人兴趣）。',
            '看 A：原文是 a small number of（少数），选项说 most students（大多数）。范围被放大了，错。',
            '看 C：原文说 most of them 出于个人兴趣，选项说 All the students 因为必须。范围和原因两处都不对，错。',
            '看 B：Some ≈ a small number of（少数也就是"一些"），mainly out of personal interest 对应 most of them said they did it out of personal interest。范围、原因都对得上。',
            '结论：B。这类题的答案就是"限定词对得上"的那一个。'
          ],
          tip: '看到选项里有 all、most、only、never 这类词，先别管意思，回头找原文对应的限定词。'
        }
      ]
    },

    // ── 二 ──
    {
      h: '二、陷阱一：偷换范围',
      p: [
        '第一类陷阱最好认：说的东西没错，但范围变了。原文说"一部分"，选项写成"全部"；原文说"可能"，选项写成"必然"；原文说"有时候"，选项写成"总是"。',
        '这类选项的特点是：你一眼看过去觉得"对啊，文中就是这个意思"，因为它确实讲了同一件事。区别只在范围。',
        { li: '放大：some → all / most；a few → many；sometimes → always；can → will。' },
        { li: '缩小：many → some；often → rarely；main reason → only reason。' },
        { li: '模糊变确定：may / might / could → must / certainly / proves。' },
        { code: '文中说了：\n"Regular exercise may help improve memory in older adults."\n\n选项写成：\n✘ Regular exercise surely improves memory in older adults.\n   （may → surely，可能性被写成必然）\n✘ Regular exercise is the only way to improve memory.\n   （may help → the only way，缩小成唯一途径）\n✔ Regular exercise can be helpful for memory in older adults.\n   （may ≈ can，范围守住）' },
        { tip: '原文里的 may、might、can、some、often、in some cases 这些"软词"最值钱。选项把它们变硬了，就是错的。' },
        '反过来也成立：如果原文用的是 must、always、the only way 这种硬话，选项把它们写软了，同样是错的。范围和原文必须一致，方向不限。',
        '一个动作练习：每读完一道题的选项，就在原文里把对应的那句话找出来，用笔在限定词上画圈，然后和选项的限定词对一遍。这个动作做熟了，这类题基本不会错。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"In some mountain villages, farmers have started to grow tea instead of corn, which has brought them a better income. Experts warn, however, that tea plants may suffer if the winters become drier."\n\n题目：What does the passage say about growing tea in these villages?\nA. It has certainly made every farmer richer.\nB. In some cases, it has brought farmers a better income.\nC. It is the only solution to the farmers\u2019 income problem.',
          a: [
            '先把原文的三个限定挑出来：In some mountain villages（部分村庄）、a better income（收入变好）、may suffer（可能会受损）。',
            '看 A：certainly + every farmer，把"一部分村庄"放大成"每个农户"，把"收入变好"放大成"一定变富"。错。',
            '看 C：the only solution 是"唯一办法"，原文完全没这么说，属于额外加码。错。',
            '看 B：In some cases 对应原文的 In some mountain villages，has brought farmers a better income 对应原文原话。范围一致。',
            '结论：B。这类题只要盯住"部分 / 全部""可能 / 必然"这两组对照，就很好判断。'
          ]
        }
      ]
    },

    // ── 三 ──
    {
      h: '三、陷阱二：张冠李戴',
      p: [
        '第二类陷阱是"人搞错了"。文中 A 说了这句话、做了这件事，选项却说是 B 说的、B 做的。或者把两个时间、两个地点、两个研究的结果调换了。',
        '文章里出现多个人物、多个观点的文章最容易出这类题：一篇阅读里有专家、有农民、有老师、有学生，各说各的话，选项就把他们的观点换着安。',
        { li: '人物对错：A 的观点安到 B 头上。' },
        { li: '时间对错：前期的结果安到后期，或者反过来。' },
        { li: '地点对错：甲地的现象安到乙地。' },
        { li: '研究对错：第一项研究的结论安给第二项研究。' },
        { code: '文中说了：\n"Dr. Lee believes the new method saves time. Her colleague, Dr. Brown, however, argues that it may cost more."\n\n选项写成：\n✘ Dr. Brown believes the new method saves time.\n   （把 Dr. Lee 的观点安给了 Dr. Brown）\n✔ Dr. Brown thinks the new method could be more expensive.\n   （人物、观点都对得上）' },
        { tip: '读文章的时候，遇到人名、机构名就在旁边标上"他说了什么"。这一步花十秒，能省掉这一类题的全部纠结。' },
        '这类题还有一个变体：选项里说"人们认为……"，而原文其实是"专家认为……"。范围从"专家"扩到"人们"，也算张冠李戴。',
        '判它的方法很直接：选项里出现谁说，就回原文找那个"谁"，看他/它到底说了什么。找不到，就是错项。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"Ms. Green, a primary school teacher, thinks homework should be shorter. Mr. Hall, who runs a small shop, says shorter homework is bad for children\u2019s habits. Both agree that parents should be told about any change."\n\n题目：What is Mr. Hall\u2019s opinion?\nA. Homework should be shorter.\nB. Shorter homework may harm children\u2019s habits.\nC. Parents should not be told about changes.',
          a: [
            '先给两个人做好标记：Ms. Green → 觉得作业该少；Mr. Hall → 觉得作业变少对孩子习惯不好；两人都同意 → 变化要告诉家长。',
            '看 A：这是 Ms. Green 的观点，安到了 Mr. Hall 头上。张冠李戴。',
            '看 C：原文说 Both agree that parents should be told，选项说 should not be told，把两人的共同观点反过来说。错。',
            '看 B：Shorter homework may harm children\u2019s habits ≈ 原文 shorter homework is bad for children\u2019s habits。人物、观点都对。',
            '结论：B。人物多的文章，一定要边读边标"谁说了什么"。'
          ]
        }
      ]
    },

    // ── 四 ──
    {
      h: '四、陷阱三：无中生有',
      p: [
        '第三类陷阱最"像对的"：选项里说的事情，在现实世界里确实成立，但文章里根本没提。',
        '这就是"无中生有"。它不骗你的逻辑，骗你的常识。你一想"这不是明摆着的吗"，手就点上去了。',
        { li: '文中没提的原因：选项给出一个听起来合理的解释，但文章没说。' },
        { li: '文中没提的结果：选项推断出一个顺理成章的后果，但文章没说。' },
        { li: '文中没提的态度：选项说"作者反对 / 支持"，但文章只是陈述。' },
        { code: '文中说了：\n"A number of cities have started to build more bike lanes."\n\n选项写成：\n✘ Building bike lanes reduces air pollution.\n   （听起来对，但文中一个字没提"污染"）\n✔ More bike lanes are being built in several cities.\n   （和原文一一对应）' },
        { tip: '判断无中生有只有一个动作：把选项里的关键词丢回原文里找。找不到，无论它多合理，都是错的。' },
        '注意一个容易糊涂的地方：有时候选项里的词是"同义替换"，不是无中生有。比如原文说 bike lanes，选项说 paths for bicycles，这是同一件事，不算。',
        '要区分这两者，靠的是"意思能不能对上"，而不是"词是不是一样"。找不到关键词，就再找它的同义说法；同义说法也找不到，那才是无中生有。',
        '还有一个信号词：选项里出现 therefore、so、this means 这类推出来的说法，而无中生有的概率会明显上升。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"The school has added a morning reading period of fifteen minutes before the first class. Teachers say students seem calmer when the day starts this way."\n\n题目：What can we learn from the passage?\nA. Students read for fifteen minutes before the first class.\nB. The morning reading period has raised students\u2019 test scores.\nC. Parents asked the school to add the reading period.',
          a: [
            '先把原文说了什么列出来：学校加了 15 分钟晨读；老师说这样开始一天，学生看起来更平静。',
            '看 B：test scores（考试成绩）在原文里完全没出现。听起来很合理——多读书成绩当然会好——但文中没说。无中生有。',
            '看 C：parents asked 在原文里也没出现，学校为什么加、谁提议的，文章没交代。无中生有。',
            '看 A：fifteen minutes、before the first class、students read 全部能一一对上。正确。',
            '结论：A。凡是选项中出现了原文没有的关键词，就按无中生有处理。'
          ],
          tip: '"听起来很合理"恰恰是无中生有最容易得手的地方。合理不是依据，原文才是依据。'
        }
      ]
    },

    // ── 五 ──
    {
      h: '五、陷阱四：过度推断',
      p: [
        '第四类陷阱是"多走了半步"。前面三类的错，你能一眼看出；这一类的错，往往要回过头读一遍才发现。',
        '它的样子是：文中说了 A，也说了一件事 B 的时间或场景，选项就说"A 导致了 B"，或者"A 一定会带来 B"。原文只是"两件事都发生了"，选项却给它们加上了因果。',
        { li: '把并列写成因果：文中说"也在做 A，也在做 B"，选项说"因为 A，所以 B"。' },
        { li: '把一次写成规律：文中说"这次……"，选项说"一般来说……"。' },
        { li: '把结果往前推：文中说 A 之后 B 发生了，选项说"是 A 造成了 B"。' },
        { li: '把作者的中立写成支持：文中只是列举，选项说"作者赞成"。' },
        { code: '文中说了：\n"Students who joined the reading club often did better in writing. The club meets twice a week."\n\n选项写成：\n✘ Joining the reading club improves students\u2019 writing.\n   （原文只是"常观察到两件事一起出现"，选项写成"参加俱乐部能提高写作"的因果关系）\n✔ Students in the reading club often did better in writing.\n   （只说观察到的事实，不多走半步）' },
        { tip: '看到选项中带 because、lead to、cause、result in、improve、make 这类"因果动词"，就要格外小心：原文里有没有明说这层因果？没说，就是过度推断。' },
        '这类题最稳的判法是用一句话问自己："这句话，是作者明说的，还是我自己推的？"如果是自己推的，那就不能选。',
        '再补一个常见的变体：原文说"研究人员还未找到原因"，选项写成"原因尚不明确，但可能是……"。后半句就是自己加上去的推断。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"Since the city opened the new library, more people have been seen reading in the park nearby. The library offers free Wi-Fi and stays open until ten at night."\n\n题目：What can be inferred from the passage?\nA. The new library caused more people to read in the park.\nB. More people have been seen reading in the park near the new library.\nC. The library is popular mainly because of its free Wi-Fi.',
          a: [
            '先把原文的事实列清楚：图书馆开业后，附近公园里读书的人变多了；图书馆有免费 Wi-Fi，开到晚上十点。这两件事原文只是"先后/并存"，没说因果。',
            '看 A：caused 是明确的因果关系——图书馆导致人们去公园读书。原文没这么说。过度推断。',
            '看 C：mainly because of its free Wi-Fi 也是自己加的原因，原文只说了有两个条件，没说哪个是主要原因。过度推断。',
            '看 B：只是把原文观察到的现象复述了一遍，没加因果、没加原因。正确。',
            '结论：B。有一类题的答案就是"把原文说过的事重说一遍"，别的都是在多走半步。'
          ]
        }
      ]
    },

    // ── 六 ──
    {
      h: '六、陷阱五：以偏概全',
      p: [
        '第五类陷阱和第二类"偷换范围"是一家的，区别在于：偷换范围是范围本身被改了；以偏概全是拿文章的"一个例子 / 一个细节 / 一段"，当成了"整篇的主旨"。',
        '这种题最常见于主旨题和标题题。文章讲了三件事，选项只讲其中一件事，说得也对，但盖不住全文。',
        { li: '段落当全篇：文章说了三点，选项只说其中一点。' },
        { li: '例子当观点：文章用一个人做例子，选项说文章在讲这个人的故事。' },
        { li: '细节当标题：标题只覆盖了后半段，前两段完全没提。' },
        { code: '文章结构（示例）：\n第 1 段：介绍睡眠不足的普遍现象\n第 2 段：睡眠不足对学习的影响\n第 3 段：手机使用是主要原因之一\n第 4 段：改善睡眠的几个建议\n\n选项写成：\n✘ How Mobile Phones Affect Sleep\n   （只覆盖第 3 段，前两段和第四段都没提，以偏概全）\n✔ Sleep and Learning: Problems and Solutions\n   （覆盖现象、影响、原因、建议，能盖住全文）' },
        { tip: '标题题的正确项，通常要能同时盖住"问题"和"做法"两边；只讲问题或只讲做法的，多半是以偏概全。' },
        '要防这一类，读文章时就要有"结构感"：每段读一句话，在心里写个两字标签（现象 / 原因 / 影响 / 做法）。选项盖不住所有标签，就不选。',
        '还有个小提醒：正确标题一般不会太"花"。带比喻、带情感色彩的标题虽然好看，但在这种题里反而容易是干扰项。'
      ],
      ex: [
        {
          q: '文章结构（示例）：\n第 1 段：越来越多的中学生开始用记事本安排学习\n第 2 段：用记事本能帮他们记住作业、减少忘记\n第 3 段：但有些人把时间排得太满，反而更焦虑\n第 4 段：专家建议每天留出半小时的空白时间\n\n题目：What is the best title for the passage?\nA. Why Students Forget Their Homework\nB. Using Planners: Good Points and a Warning\nC. How to Get Better Grades in Middle School',
          a: [
            '给每一段贴标签：第 1 段 = 现象，第 2 段 = 好处，第 3 段 = 问题，第 4 段 = 建议。',
            '看 A：只对应"忘记作业"，最多覆盖第 2 段，后面的问题、建议全丢了。以偏概全。',
            '看 C：提高成绩，文章整个没讲，属于无中生有 + 范围太大。',
            '看 B：Good Points 盖第 2 段，a Warning 盖第 3、4 段，还带着第 1 段的"现象"这个背景。能覆盖全文。',
            '结论：B。标题题选"能盖住所有标签"的那个，不是选"最像"的那个。'
          ],
          tip: '标题题有个好用的检查动作：把选项盖回每一段，有没有哪一段是它完全没提到的？有，就不选。'
        }
      ]
    },

    // ── 七 ──
    {
      h: '七、主旨题怎么选',
      p: [
        '主旨题（main idea / best title / mainly about）看起来难，其实最容易用固定方法做。因为文章的骨架是明摆着的：首段、各段段首句、末段。',
        '第一步：读首段。首段通常交代话题，有时直接给出作者的态度。',
        '第二步：读每一段的段首句（如果段首句像主题句的话，有些文章主题句在段尾）。把这些句子连起来读一遍，就是全文的骨架。',
        '第三步：读末段。末段常给出结论或者呼吁，也是主旨的一部分。',
        { li: '正确项必须同时满足：覆盖全文（不是某一段）+ 不带文中没有的态度 + 不超出文章范围。' },
        { li: '错误项常见三种：只讲一段（以偏概全）、讲得太宽（比文章大一圈）、讲得太细（只是文中一个细节）。' },
        { code: '骨架示例：\n首段：More schools are replacing paper tests with online ones.\n段首句 1：Online tests save a great deal of time for teachers.\n段首句 2：They also make it easier to see where students are struggling.\n段首句 3：Still, some teachers worry about technical problems during exams.\n末段：The real question is how to use them wisely.\n\n主旨 = 在线考试的优点与顾虑，以及怎么合理使用。\n（只讲"优点"或只讲"技术问题"的选项，都是以偏概全）' },
        { tip: '主旨题不要凭"哪一句读起来最像总结"来选。用骨架对：首段 + 每段首句 + 末段，能盖住的才是答案。' },
        '还有一条经验：主旨题的四个选项里，通常有一个太宽（比如把"在线考试"写成"教育的未来"），有一个太窄（只写"老师的工作量"），有一个扯到别处（无中生有），剩下的那个才是。',
        '如果两个选项看着都能盖住全文，就去比"哪个更具体"。太宽的往往是错的，因为它把文章的范围放大到文章根本没说的地方。'
      ],
      ex: [
        {
          q: '文章骨架（示例）：\n首段：City farms are becoming popular in some big cities.\n段首句 1：They give children a chance to see where food comes from.\n段首句 2：They also help cool the air around them.\n段首句 3：However, finding enough space is still a problem.\n末段：Even so, more cities are trying to make room for them.\n\n题目：What is the passage mainly about?\nA. Why children should learn about food.\nB. City farms: benefits and the problem of space.\nC. The future of farming in the world.',
          a: [
            '先搭骨架：首段 = 现象（城市农场变流行）；段首句 1、2 = 好处；段首句 3 + 末段 = 空间问题但仍在推进。',
            '看 A：只对应"让孩子了解食物"这一条好处，把另外一条好处和空间问题都丢了。以偏概全。',
            '看 C：the world 比文章大太多，文章只讲了几个大城市，范围被放大。',
            '看 B：benefits 盖住两条好处，the problem of space 盖住段首句 3 和末段。能盖住全文。',
            '结论：B。主旨题的标准就是"盖得住"三个字。'
          ]
        }
      ]
    },

    // ── 八 ──
    {
      h: '八、推断题与词义猜测题怎么做',
      p: [
        '推断题（infer / imply / suggest）最容易被"过度推断"骗。要记住一句话：推断题的前提是"文中一定有依据"，只要依据不在文中，无论多合理都不能选。',
        { li: '推断题的答案，是从文中一句话"往前小半步"得到的，不是靠自己的常识补出来的。' },
        { li: '选项中带 must、only、never、always 这类绝对词的，绝大多数是错项。' },
        { li: '推断题的词常常比原文"软"：may、probably、likely、seems。' },
        { code: '文中说了：\n"She looked at the letter, folded it carefully, and put it away without a word."\n\n推断：\n✔ She probably did not want to talk about the letter.\n   （像"without a word"这样的细节，允许推出"不想谈"这种最小的一步）\n✘ She must have received bad news.\n   （信里写了什么，文中没说，是凭空补的）' },
        '词义猜测题（划线词 / 划线句）的思路完全不一样：不要背单词，要看上下文。上下文给的线索通常有三种。',
        { li: '定义线索：划线词后面跟着 or / that is / which means，就是在解释它。' },
        { li: '对比线索：前文有 but / however / instead，或者有反义词，就能反推出它的意思。' },
        { li: '举例线索：后面跟着 for example / such as，例子本身就是解释。' },
        { code: '例（对比线索）：\n"Unlike her talkative brother, Mary was rather taciturn."\n\nUnlike 提示前后相反：brother 是 talkative（话多），那么 taciturn 就是"话少"的意思。' },
        { tip: '词义题千万不要选"你见过的那个最熟的意思"。出题人常常故意用熟词僻义，让你凭印象选错。' },
        '词义题还有一个稳妥的动作：把你猜的意思代回原句，读一遍。读不通，就是猜错了。',
        '最后重复一遍：推断题的依据必须是文中已有的信息；词义题的依据必须是划线词周围的句子。两者都不能靠记忆和常识。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"Our first attempt to build the small wooden boat failed, and the second was not much better. My father, however, refused to be discouraged. \u2018We will try again tomorrow,\u2019 he said, and he was already reaching for the tools."\n\n题目 1：What can be inferred about the father?\nA. He was ready to keep trying.\nB. He must have built boats before.\n\n题目 2：The underlined word "discouraged" in the passage is closest in meaning to ___.\nA. made to lose hope\nB. made very angry',
          a: [
            '题目 1 先看依据：原文有 refused to be discouraged、We will try again tomorrow、already reaching for the tools。这三处都指向"还要继续试"。',
            '题目 1 看 A：ready to keep trying 正好对应"已经伸手去拿工具 + 明天再试"。有依据，可以推。',
            '题目 1 看 B：built boats before 在原文里没有任何线索，"必须造过"是凭空补的。排除。',
            '题目 2 看上下文：前句说两次都没成功，后面父亲说"明天再试"，还去拿工具。所以 discouraged 是"泄气 / 失去希望"的意思。',
            '题目 2 看 A：made to lose hope 对得上。看 B：made very angry 和上下文没有关系。',
            '结论：题目 1 选 A，题目 2 选 A。推断有依据、词义看上下文，这两条是同一件事。'
          ]
        }
      ]
    },

    // ── 九 ──
    {
      h: '九、考场检查法：把选项逐字对回原文',
      p: [
        '前面八节讲了怎么判题，这一节讲怎么在考场上少丢分。方法只有一个：把选项里的关键内容，一项一项对回原文。',
        { li: '第 1 步：圈出选项里的限定词和绝对词（some / all / most / may / must / only / always）。' },
        { li: '第 2 步：圈出选项里的主语（谁）和动作（做了什么）。' },
        { li: '第 3 步：回原文找到对应的句子，逐项对：谁对得上吗？范围对得上吗？因果是文中说的吗？' },
        { li: '第 4 步：三项都对得上，才选。有一项对不上，就划掉。' },
        { code: '检查表（对着每一个选项走一遍）：\n□ 主语是谁？和原文一致吗？\n□ 范围一样吗（some / all、may / must）？\n□ 因果关系是原文说的，还是我自己加的？\n□ 选项里的词，原文里能找到吗（或者找到同义说法）？\n□ 有没有绝对词（only / never / always / must）？原文有吗？' },
        { tip: '如果时间不够，只做两件事：看主语对不对、看绝对词有没有依据。这两项能筛掉大部分错项。' },
        '还有一条时间上的建议：做阅读题，先做完能确定的，把不确定的用笔标记出来，最后统一回看。不要在某一题上耗着，也不要把答案留空。',
        '最后提醒一句：不要因为"这个选项和上一篇阅读的答案很像"就选它。每一道题的答案都只在这一篇的原文里。'
      ],
      ex: [
        {
          q: '文中（示例）：\n"According to a recent survey, about 60% of the students said they read for pleasure at least once a week. The survey also found that students who read for pleasure often had a wider vocabulary."\n\n题目：What can we learn from the survey?\nA. All students read for pleasure once a week.\nB. Most students read for pleasure at least once a week.\nC. Reading for pleasure is the only way to build a wider vocabulary.',
          a: [
            '先圈原文的限定词：about 60%、at least once a week、often had a wider vocabulary。',
            '看 A：All students 和原文的 about 60% 对不上，范围被放大。绝对词 All + 无依据。排除。',
            '看 C：the only way 在原文里毫无依据，原文只说"常观察到词汇量更大"，没说这是唯一途径。排除。',
            '看 B：Most ≈ about 60%（超过一半），at least once a week 和原文原话一致。两项都对得上。',
            '结论：B。用第 3 步那套检查表走一遍，错误选项基本都能被限定词筛出来。'
          ],
          tip: '这道题里 A 和 C 都死在"绝对词"上。考场上遇到 only、all、never、must，先回原文找依据，找不到就直接划。'
        }
      ]
    }

  ]
};
