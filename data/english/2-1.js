window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 2, bookName: '完形词块',
  chapterId: 1, chapterName: '完形词块',
  questions: [
    // ── 完形考什么 ──
    { k: '考什么', q: '【完形第一步】完形填空20个空，本质上在考什么？', a: '考三样：①词义辨析 ②固定搭配（词块）③上下文逻辑。纯语法题很少。所以做完形的顺序是：先读通句子 → 想"哪个词意思对得上" → 最后才用语法验证。' },
    { k: '动词辨析', q: '【动词】四个选项都是动词时，靠什么定答案？', a: '看三处：①后面接不接宾语（及物/不及物）②动作是"结果"还是"过程"③后面接 to do 还是 doing。例：He looked at the picture for a long time.（看"过程"用 look at，"看到结果"才用 see）' },
    { k: '名词辨析', q: '【名词】四个选项都是名词时，靠什么定答案？', a: '看两处：搭配和单复数。先看前面有没有 a/an、后面是 is 还是 are，再看它和句中的动词、介词搭不搭。例：We have made great progress in English.（progress 不可数，不能说 a progress）' },
    { k: '形容词副词', q: '【形容词/副词】四个选项都是形容词或副词时，先分什么？', a: '先分清"说人"还是"说物"：-ed 结尾多修饰人（感到…），-ing 结尾多修饰物（令人…）。副词再看它修饰谁、感情是褒还是贬。例：The film is boring; I feel bored.' },
    { k: '上下文线索', q: '【逻辑线】上下文线索主要看哪四种关系？', a: '①转折（but / however）②因果（so / because）③复现（同一个词或它的近义词又出现一次）④并列（and / or 两边意思一致或相反）。抓住这四种，很多空不选也知道。例：He was tired, but he kept working.（but 一出来，后半句一定是"还在干"）' },

    // ── 近义辨析（看/说/听/笑/哭/找查）──
    { k: '视觉动词', q: '【辨析】look / see / watch 怎么分？', a: 'look 是"把眼睛转过去看"，不及物，后面要加 at；see 是"看见"，强调结果，及物；watch 是"盯着看动态的东西"（比赛、电视、动静）。例：I looked at the sky but saw nothing; then I watched a bird flying by.' },
    { k: '视觉动词', q: '【辨析】notice / observe 怎么分？', a: 'notice 是"注意到"，无意的、突然的一眼；observe 是"观察"，有目的地细看，认真且持续。例：I noticed a mistake in his paper.（无意看到）/ The scientists observed the stars every night.（有心观察）' },
    { k: '视觉动词', q: '【辨析】stare / glare / glance 怎么分？', a: 'stare 盯着看（时间长，吃惊或无礼）；glare 怒视（生气地瞪）；glance 瞥一眼（很快地、主动地看一眼）。例：He stared at the strange machine, then glanced at me and glared when I laughed.' },
    { k: '视觉动词', q: '【辨析】glimpse 和 catch sight of 怎么分？', a: 'glimpse 是"瞥见"，被动地看到一眼，常写 catch a glimpse of；catch sight of 是"突然看见"，强调一瞬间捕捉到。例：I caught sight of him in the crowd and got a glimpse of his new coat.' },
    { k: '言语动词', q: '【辨析】tell / say / speak / talk 怎么分？', a: 'tell sb sth 告诉某人某事（必须带人）；say sth (to sb) 说出内容（重"话本身"）；speak 侧重"会讲某种语言/发言"；talk with sb about sth 交谈（重双方）。例：He told me a story, said goodbye, spoke English well, and talked with me for an hour.' },
    { k: '言语动词', q: '【辨析】whisper / chat / inform sb of 怎么分？', a: 'whisper 低声说（耳语，怕人听见）；chat 闲聊（轻松随意）；inform sb of sth 正式通知（书面、官方口气）。例：She whispered a secret to me, then chatted about the weather; later the teacher informed us of the exam date.' },
    { k: '言语动词', q: '【辨析】explain / warn / remind / complain 怎么分？', a: 'explain sth to sb 解释；warn sb of/about sth 警告（有危险）；remind sb of sth 提醒（别忘了）；complain to sb about sth 抱怨。例：He explained the rule to us, warned us of the danger, reminded us of the deadline, and complained about the noise.' },
    { k: '言语动词', q: '【辨析】admit / deny / announce / persuade sb into doing 怎么分？', a: 'admit 承认（做了错事）；deny 否认（和 admit 相反）；announce 宣布（公开告知）；persuade sb into doing 说服某人做成（是"成功说服"，不是"试图劝"）。例：He admitted his mistake, denied the rumour, announced the plan, and persuaded me into joining him.' },
    { k: '听觉动词', q: '【辨析】hear / listen to / sound 怎么分？', a: 'hear 听见（结果，常常是无意的）；listen to 听（主动地、有意识地去听）；sound 听起来（系动词，后面接形容词）。例：I heard a noise, so I listened to the door, and the music sounds great.' },
    { k: '笑与哭', q: '【辨析】laugh / smile / grin 和 cry / sob / weep 怎么分？', a: 'laugh 出声地笑（laugh at 是嘲笑）；smile 微笑（无声，友好）；grin 咧嘴笑（露牙，开心或得意）；cry 哭（最普通）；sob 抽泣（一抽一抽）；weep 哭泣（书面语，多是默默流泪）。例：She smiled at me and laughed at the joke, then cried and sobbed when she heard the news.' },
    { k: '查找辨析', q: '【辨析】find / look for / find out / discover 怎么分？', a: 'look for 是"找"的过程（不一定找到）；find 是"找到"的结果；find out 是"查明、搞清楚"（事实真相，靠打听调查）；discover 是"发现"原本就存在、但不为人知的东西。例：I looked for my keys but couldn\'t find them; then I found out who took them.' },
    { k: '查找辨析', q: '【辨析】hunt for / search for 和 check / examine / inspect 怎么分？', a: 'search for 搜寻（范围广、较正式）；hunt for 四处找（急切、费力）；check 核对（看看对不对，日常）；examine 仔细检查（专业、细致，如医生检查）；inspect 巡查视察（上级或官方来查）。例：Check your answers; the doctor examined my eyes; the officer inspected the school.' },

    // ── 近义辨析（增减/变化/成败/努力）──
    { k: '增减', q: '【辨析】rise / raise 怎么分？', a: 'rise 不及物，"自己上升"（太阳升起、价格上涨），后面不能带宾语；raise 及物，"把…举起来/提高…"，必须带宾语。例：The sun rises in the east; please raise your hand.' },
    { k: '增减', q: '【辨析】increase / decrease 和 reduce / bring down 怎么分？', a: 'increase 增加、decrease 减少，中性描述变化；reduce 是"人为把…降下来"，强调动作；bring down 是短语，口语化，也可指"打倒"。例：The price increased, so the shop reduced it in order to bring down the cost.' },
    { k: '变化', q: '【辨析】become / grow / turn / go + 形容词怎么分？', a: 'become 最通用（变得）；grow 强调"渐渐变得"（多接 better / worse / older）；turn 强调"变成另一种颜色或状态"（turn red 变红）；go 多接"变坏"的词（go bad 变质、go wrong 出错）。例：He became rich, grew older, turned grey, and the milk went bad.' },
    { k: '变化', q: '【辨析】improve / develop 怎么分？', a: 'improve 是"改善、提高"，在原有基础上变好；develop 是"发展、培养"，从无到有、从小到大（也可指培养习惯技能）。例：He improved his English and developed a good habit of reading.' },
    { k: '成败', q: '【辨析】succeed / make it / make progress 怎么分？', a: 'succeed 成功（succeed in doing sth）；make it 指"做到了、赶上了、办成了"（口语，也能指"挺过来"）；make progress 取得进步（progress 不可数，不加 a）。例：He succeeded in passing the exam, made progress in maths, and finally made it to college.' },
    { k: '成败', q: '【辨析】come true / realize one\'s dream 和 manage to do 怎么分？', a: 'come true 是"（梦想、愿望）成真"，主语是梦想，不及物；realize one\'s dream 是"实现梦想"，主语是人，及物；manage to do 是"设法做成了"，强调克服困难做成。例：Her dream came true when she realized her goal; she managed to finish it alone.' },
    { k: '努力', q: '【辨析】try to do / manage to do 怎么分？', a: 'try to do 是"努力去试"，不一定成功；manage to do 是"设法做成了"，已经成功。这是完形高频陷阱：句子后面出现 finally / at last，往往选 manage to do。例：He tried to open the door, and at last he managed to open it.' },
    { k: '努力', q: '【辨析】make efforts / attempt / do one\'s best 怎么分？', a: 'make efforts 做出努力（make efforts to do sth）；attempt 尝试（较正式，attempt to do，可能失败）；do one\'s best 尽最大努力（强调态度）。例：She made great efforts, attempted the hard task, and did her best till the end.' },

    // ── 动词短语（动词+介词/副词）──
    { k: '动词短语', q: '【辨析】take on / take up / take off / take over 怎么分？', a: 'take on 承担（工作、责任）；take up 开始从事（爱好）、占用（时间空间）；take off 起飞、脱掉、突然走红；take over 接管。例：He took on the job, took up painting, took off his coat, and took over the company.' },
    { k: '动词短语', q: '【辨析】turn out / turn down / turn up / turn to 怎么分？', a: 'turn out 结果是（turn out to be）；turn down 拒绝、调低音量；turn up 出现、调高音量；turn to 求助于（turn to sb for help）。例：The plan turned out well; he turned down the offer; she had nobody to turn to.' },
    { k: '动词短语', q: '【辨析】put off / put up with / put up / put on 怎么分？', a: 'put off 推迟；put up with 忍受（with 不能丢）；put up 搭起、张贴、举起；put on 穿上、上演。例：They put off the match, put up with the noise, put up a tent, and put on a play.' },
    { k: '动词短语', q: '【辨析】come up with / come across / come up / come about 怎么分？', a: 'come up with 想出（办法、主意）；come across 偶然遇到或发现；come up 被提出、发生；come about 发生（多问事情怎么发生的）。例：He came up with a plan, came across an old friend, and the question came up in class.' },
    { k: '动词短语', q: '【辨析】break down / break out / break in / break up 怎么分？', a: 'break down （车、机器）坏掉，（身体）垮掉；break out （战争、火灾）爆发；break in 闯入、打断（谈话）；break up 分手、散开、解散。例：The car broke down, the war broke out, someone broke in, and the party broke up.' },
    { k: '动词短语', q: '【辨析】carry out / carry on / carry away 怎么分？', a: 'carry out 执行、实施（计划、实验）；carry on 继续（carry on with sth）；carry away 拿走，be carried away 是被冲昏头脑。例：They carried out the plan, carried on working, and he was carried away by success.' },
    { k: '动词短语', q: '【辨析】figure out 和 find out 怎么分？', a: 'figure out 是"想明白、琢磨出来"（靠动脑筋，宾语多是问题、原因、办法）；find out 是"查明"（靠打听调查，宾语多是事实、真相）。例：I finally figured out the answer, and the police found out the truth.' },
    { k: '动词短语', q: '【辨析】give up / give in / give away / look forward to 怎么分？', a: 'give up 放弃（give up doing）；give in 屈服、让步（give in to sb）；give away 赠送、泄露；look forward to 期待（to 是介词，后接 doing）。例：Don\'t give up; never give in; he gave away his books; I look forward to seeing you.' },
    { k: '动词短语', q: '【辨析】run out of / run out / look into / look up 怎么分？', a: 'run out of 是"（人）用完某物"，及物；run out 是"（某物）用完了"，主语是物，不及物；look into 调查；look up 抬头看、查阅（字典）。例：We ran out of paper, so the paper ran out; the police looked into it; look up the word.' },
    { k: '动词短语', q: '【辨析】set up / set off / stand for / stand out 怎么分？', a: 'set up 建立、创办；set off 出发、引爆；stand for 代表、象征（也指"容忍"，多用于否定）；stand out 显眼、突出。例：They set up a school and set off at dawn; "UN" stands for United Nations; she stands out in class.' },
    { k: '动词短语', q: '【辨析】bring about / bring up / keep up with / keep away from 怎么分？', a: 'bring about 引起、导致（变化）；bring up 抚养、提出（话题）；keep up with 跟上，不落后；keep away from 远离。例：The rain brought about floods; she was brought up by her aunt; hurry up to keep up with the class.' },
    { k: '动词短语', q: '【辨析】get over / get through / get along with / get rid of 怎么分？', a: 'get over 克服，从（病、打击）中恢复；get through 通过（考试）、接通电话、完成；get along with 与…相处；get rid of 摆脱、除掉。例：He got over his illness, got through the exam, gets along with classmates, and got rid of the bad habit.' },
    { k: '动词短语', q: '【辨析】make up / make out / make up for / be made of 怎么分？', a: 'make up 编造、组成、化妆、和好；make out 辨认出、理解；make up for 弥补（make up for lost time）；be made of 由…制成（看得出原料）。例：He made up a story to make up for being late; I can\'t make out the words; the desk is made of wood.' },

    // ── 动词后接什么 ──
    { k: '只接不定式', q: '【只接 to do】哪些动词后面只能接不定式？', a: 'want / decide / manage / refuse / afford / promise / pretend / hope / plan / offer / agree。记法：这些词后面直接跟 to do，绝不能接 doing。例：He refused to go and decided to stay.' },
    { k: '只接动名词', q: '【只接 doing】哪些动词后面只能接动名词？', a: 'enjoy / finish / avoid / consider / practise / suggest / mind / keep / imagine / risk / admit / give up。记法：enjoy doing 对，enjoy to do 错。例：She enjoys reading and avoids making mistakes.' },
    { k: '宾补不定式', q: '【接 sb to do】哪些动词后面要接"宾语 + to do"？', a: 'advise / allow / expect / force / persuade / remind / warn / tell / want / ask / encourage / invite。结构是 v + sb + to do，中间那个人不能丢。例：The teacher advised us to read more.' },
    { k: '宾补原形', q: '【接 sb do】哪些动词后面接"宾语 + 动词原形"？', a: '使役动词 make / let / have + sb + do（不带 to）；感官动词 see / hear / watch / notice + sb + do（看到听到整个动作，也不带 to）。例：He made me wait; I saw him cross the road.' },
    { k: '宾补进行', q: '【接 sb doing】什么时候用"sb doing"？', a: '感官动词 see / hear / watch / notice 和 keep / catch 后面，如果强调"正在做"，就用 doing。例：I saw him crossing the road.（看到正在过马路）/ I saw him cross the road.（看到了全过程）' },
    { k: '两可动词', q: '【两可】remember / forget / regret 后面接 to do 和 doing，意思差在哪？', a: 'to do 指"还没做的事"；doing 指"已经做过的事"。例：Remember to lock the door.（记得要去锁，还没锁）/ I remember locking the door.（记得锁过，已锁了）' },
    { k: '两可动词', q: '【两可】stop 后面接 to do 和 doing，意思差在哪？', a: 'stop to do 是"停下来，去做另一件事"（to do 表目的）；stop doing 是"停止正在做的这件事"（doing 作宾语）。例：He stopped to smoke.（停下手头的事去抽烟）/ He stopped smoking.（把烟戒了）' },
    { k: '两可动词', q: '【两可】try 后面接 to do 和 doing，意思差在哪？', a: 'try to do 是"努力去做"；try doing 是"试着做做看"（换一种办法试）。例：He tried to open the door.（使劲想打开）/ He tried opening the window.（改去试试开窗）' },
    { k: '介词后', q: '【易错】介词后面接动词要接什么形式？', a: '一律接 doing（动名词），不能接原形，也不能随便接 to do。例：He is good at swimming; thank you for helping me.' },
    { k: '介词搭配', q: '【易错】哪些常见结构里的 to 是介词，后面要接 doing？', a: 'look forward to doing（期待）、be used to doing（习惯于）、devote oneself to doing（致力于）、pay attention to doing（注意）、get down to doing（开始着手）。例：I look forward to hearing from you.' },

    // ── 易错词块 ──
    { k: '易错词块', q: '【易错】"这事怪他"用 be to blame，为什么不写成 be to be blamed？', a: '固定搭配 sb is to blame for sth，用主动形式表达被动意思，写成 to be blamed 就是错的。例：He is to blame for the accident.（这起事故该怪他）' },
    { k: '易错词块', q: '【易错】make sense of 和 make sense 怎么用？', a: 'make sense of sth 是"弄懂、理解"，宾语放在 of 后面；make sense 是"讲得通、有道理"，本身意思就完整。例：I can\'t make sense of this sentence.（看不懂这句）/ Your idea makes sense.（你的想法有道理）' },
    { k: '易错词块', q: '【易错】at the mercy of 是什么意思？', a: '意思是"任凭…摆布、完全受…支配"，语气里带着无助和被动。例：The boat was at the mercy of the waves.（小船任凭风浪摆布）' },
    { k: '易错词块', q: '【易错】in terms of 是什么意思，怎么用？', a: '意思是"就…而言、从…方面来说"，后面接名词。例：In terms of price, this one is better.（就价格而言，这个更好）' },
    { k: '易错词块', q: '【易错】lose track of 是什么意思？', a: '意思是"失去…的线索、记不清了、跟…失去联系"。例：I lost track of time.（我忘了时间）/ We lost track of him after he moved.（他搬走后就没了联系）' },
    { k: '易错词块', q: '【易错】还有哪些完形高频词块要一起背？', a: 'be aware of 意识到；be responsible for 对…负责；be addicted to 对…上瘾；take advantage of 利用；make a difference 起作用；have access to 有…的机会或权利。例：Only you can make a difference.' }
  ]
};
