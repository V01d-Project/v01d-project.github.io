window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 6, bookName: '阅读干扰项',
  chapterId: 1, chapterName: '五类陷阱',
  sections: [

    // ── 一 ──
    {
      h: '一、为什么"文章读懂了"还会选错',
      p: [
        '很多人的问题不在读不懂，而在选错了依据。你读完文章，心里留下一个大致印象，然后凭这个印象去挑选项——可选项里偏偏有几个长得跟你的印象很像，却和原文对不上。',
        '铁律只有一条：判断选项对错的唯一标准，是回原文找依据。文中能找到、说法完全对得上的，才是答案；只凭印象和常识选的，多半是干扰项。',
        '定位最快的方法，是抓题干里的名词：人名、地名、数字、大写词。回原文找到同一处，答案就在那一两句附近。',
        { li: '回原文划出依据句：划不出来的选项，直接划掉。' },
        { li: '警惕绝对词：all、always、never、must、only、completely、everyone。原文一般说得克制（some、may、often）。' },
        { li: '两个选项都像对的时候，比"范围"和"语气"：哪个把范围说大了、语气说绝了、多加了原文没有的意思，就排除哪个。' },
        { tip: '干扰项只有五种长相：偷换范围、张冠李戴、无中生有、过度推断、以偏概全。认得它们，比盲目多做题有用得多。' },
        { code: '文中说了：The new library opens at nine on weekdays.\n凭印象选："图书馆周末也开门" —— 听着合理，但文中没提周末。  ×\n回原文核对：原文只说了 weekdays，选项写 On weekends 就是错的。  ✓' }
      ]
    },

    // ── 二 ──
    {
      h: '二、陷阱一：偷换范围',
      p: [
        '长相：原文说的是小范围，选项悄悄换成大范围；也可能反过来，把大范围改小。',
        '识别方法：回原文读那半句，把范围词圈出来——some / most / all、may / must、often / always、a few / many。选项里的范围词和原文对不上，就是偷换。',
        { li: '原文 In some cities in the south ... → 选项 In all of China ...。' },
        { li: '原文 Most students passed ... → 选项 All the students passed ...。' },
        { li: '原文 may reduce stress → 选项 must reduce stress（把"可能"换成"必然"）。' },
        { tip: '口诀：some 不搬成 all，may 不搬成 must，often 不搬成 always。看到绝对词，先回原文对一遍。' },
        { code: '文中说了：In some cities in the south, people eat rice for breakfast.\n选项写成：In all of China, people eat rice for breakfast.   ×\n（some cities in the south 被换成 all of China，范围被放大）' }
      ]
    },

    // ── 三 ──
    {
      h: '三、陷阱二：张冠李戴',
      p: [
        '长相：人和事文中都提到了，但配错了对——把甲的特点说成乙的，把 A 做的事写成 B 做的，把原因写成结果。',
        '识别方法：选项里出现两个或更多的人名、事物名时，一定回原文核对主语是谁、宾语是谁。错误常常就出在主语上。',
        { li: '配对错：Tom likes apples, Mary likes bananas. → 选项说 Tom likes bananas。' },
        { li: '因果颠倒：暴风雨在前、物价上涨在后 → 选项说"物价上涨引起了暴风雨"。' },
        { li: '时间错位：老图书馆建于 1900，新图书馆建于去年 → 选项把去年安到了老馆头上。' },
        { tip: '这类选项用的全是原文原词，读起来最眼熟，最容易凭"眼熟"选错。回到原文把整句重读一遍，看搭配对不对。' },
        { code: '文中说了：Tom likes apples. Mary likes bananas.\n选项写成：Tom likes bananas.   ×\n（两个人、两种水果文中都出现过，只是配错了对象）' }
      ]
    },

    // ── 四 ──
    {
      h: '四、陷阱三：无中生有',
      p: [
        '长相：说得很有道理、很符合常识，但原文从头到尾没提过。最常见的是突然冒出"可以省钱""对环境好""大家都喜欢"。',
        '识别方法：读完选项问自己一句——原文哪一句支持它？说不出具体是哪一句（只能说"感觉应该是"），那就是无中生有。',
        { li: '"省钱"：文章只讲某个习惯对健康有好处，选项说 This habit also saves money（文中没提钱）。' },
        { li: '"受欢迎"：文章介绍一个应用的功能，选项说 It is popular with young people（文中没说谁在用）。' },
        { li: '"大家都喜欢"：凡是没有依据的"everyone / most people"，都算这一类。' },
        { tip: '阅读考的是"作者写了什么"，不是"你觉得对不对"。常识再对，只要文中没有依据，这个选项就是错的。' },
        { code: '文中说了：早上跑步对身体有好处。\n选项写成：This habit also saves money.   ×\n（文中只谈健康，"省钱"是读者自己补上去的常识）' }
      ]
    },

    // ── 五 ──
    {
      h: '五、陷阱四：过度推断',
      p: [
        '长相：从文中一点点信息往前迈了一大步。原文只说"他没接电话"，选项说"他不想理我"；原文说"价格降了"，选项说"以后还会降"。',
        '识别方法：看选项比原文"多"了什么。原文只给现象，选项却给了动机、将来、评价、程度——多出来的这部分，就是推过头了。',
        { li: '补动机：没接电话 → "他不想理你"。' },
        { li: '推到将来：上个月降了 10% → "以后还会一直降"。' },
        { li: '加评价：他只说了一句话 → "这句话说得非常不客气"。' },
        { tip: '合理的推断只往前走半步，而且能由原文那句直接得出来。原文说"他跑了三小时"，推"他很累"可以；推"他不喜欢坐车"就不行。' },
        { code: '文中说了：He did not answer the phone.\n选项写成：He did not want to talk to you.   ×\n（"没接"可能是没听见、在忙、手机没带；"不想理你"是替作者补上的动机）' }
      ]
    },

    // ── 六 ──
    {
      h: '六、陷阱五：以偏概全',
      p: [
        '长相：用一个细节、一个例子、一段的意思，冒充全文的意思。主旨题里最常见。',
        '识别方法：看这个选项能不能"罩住"全文。只能对应某一段或某个例子的，就是以偏概全；能罩住各段共同意思的才对。',
        { li: '小样本当普遍：One study of 20 students found ... → 选项 Studies show that all students ...。' },
        { li: '一个例子当全文：文章主干讲"如何养成学习习惯"，一段举了"早起"的例子 → 选项只说"早起很重要"。' },
        { li: '反向的坑：选项比文章还宽泛（范围过大）。它和以偏概全正好是一对，一个太小、一个太大。' },
        { tip: '主旨题的答案要"不大不小，刚好盖住全文"。做法：给每段写一个词标签，再看选项和几个标签对得上——只对一个的，基本可以排除。' },
        { code: '文中说了：文章讲"如何养成好的学习习惯"，其中一段举了"早起"的例子。\n选项写成：Taking exercise in the morning is important.   ×\n（文章主干是学习习惯，"早起锻炼"只是一个例子，还被改偏了）' }
      ]
    },

    // ── 七 ──
    {
      h: '七、主旨题怎么选',
      p: [
        '常见问法：The text mainly tells us ... / What is the main idea of the text? / What is the best title for the text? / The passage is mainly about ...。',
        '方法：去三个地方找答案——首段、各段的首句、末段。这类文章基本是"总—分—总"的结构，主线就在这几个地方。选项必须覆盖全文。',
        { li: '圈出文中反复出现的名词：它们往往就是话题词，正确选项一般带着这些词或它们的同义说法。' },
        { li: '标题题：要短、涵盖全文、带核心词，通常是名词短语。太长的句子、只讲一段的、带个人观点的，都不选。' },
        { li: '两个常见坑：太窄（只讲某一段的细节 → 以偏概全），太宽（超出文章讲的范围）。' },
        { tip: '开头讲的那个小故事不能当主旨——它通常只是引出话题的"引子"，真正的主旨在故事后面那句话里。' },
        { code: '文中说了：首段由一个"学生早起读书"的小故事引出话题，后面几段分别讲定计划、用零碎时间、复习。\n选项写成：One student\'s morning routine.   ×\n（只对应引子那一段，太窄）' }
      ]
    },

    // ── 八 ──
    {
      h: '八、推断题与词义猜测题',
      p: [
        '这两类题问的不是"文中写了什么"，而是"文中没直说、但能推出来什么"。所以做法也要跟着换。',
        '推断题怎么认：题干里出现 infer、imply、suggest、learn from、conclude、what can we know about 这些词。',
        { li: '推断题的答案一定在文中有依据，但原文不会把答案原句写出来。看到选项和原文一模一样，反而要警惕。' },
        { li: '重点看四个地方：转折处（but / however）、引号里的话、举例之后、段落最后一句。' },
        { li: '态度题抓感情色彩：正面用 positive、supportive；负面用 negative、critical、doubtful；客观用 objective、neutral。' },
        { li: '推断不能用常识回答。常识只能帮你理解句子，不能当依据——这是推断题最大的失分点。' },
        '词义猜测题怎么做：先看这个词所在的那一句，再看它前后各一句。答案几乎都藏在上下文里，不用查词典。',
        { li: '找"送答案"的信号：定义（is、means、that is、in other words）、举例（such as、for example）、对比（but、while、instead）、因果（because、so、therefore）。' },
        { li: '没有上下文时用构词法：un- / im- / dis- 是否定，-less 是"没有"，-ful 是"充满"，-ness / -tion 多是名词。' },
        { li: '代入法：把四个选项依次放回原句念一遍，念得通顺、整句讲得通的，就是答案。' },
        { li: '别选这个词最常见的那个意思。考官偏偏不考熟义，选项里的熟词本义往往是干扰项。' },
        { tip: '猜词也要看感情色彩。先判断这句是夸还是贬，再在选项里找对应色彩的词。' },
        { code: '文中说了：He looked at the empty chair for a long time before he left the room.\n选项写成：He missed the person who used to sit there.   ✓（合理推断，只走半步）\n选项写成：He decided to buy a new chair.   ×（无中生有 + 过度推断）' }
      ]
    }

  ]
};
