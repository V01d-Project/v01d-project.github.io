window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 2, bookName: '完形词块',
  chapterId: 1, chapterName: '词块与辨析',
  items: [
    // ── 完形考什么（方法）──
    { en: '转折线索：but / however / yet / while / instead', zh: '完形第一抓手。看到这些词，先把前后意思定成相反，空里的词多半是前一句的反面。', note: 'He was tired, but he kept working. —— but 一出来，后半句必定"还在干"。' },
    { en: '因果线索：so / because / since / therefore / as a result', zh: '要么由原因推结果，要么由结果反推原因；常考的动词是 cause / lead to / result in。', note: 'It rained hard, so the match was put off. —— 看见 so，空里就是前面那件事的后果。' },
    { en: '复现线索：同一个词 / 它的近义词 / 它的反义词', zh: '上下句重复出现的那一类词，答案往往就是它本身，或者它的近义、反义形式。', note: '前句说 a big problem，后句又提 the problem，空里多半还是跟 problem 有关的词。' },

    // ── 近义辨析：看 ──
    { en: 'look at（动作）/ see（结果）/ watch（盯动态）', zh: '选：强调"看过去"选 look at；强调"看见"选 see；看比赛、电视、动静选 watch。', note: 'I looked at the sky but saw nothing; then I watched a bird flying by.' },
    { en: 'notice（无意看到一眼）/ observe（有意细看）', zh: '选：没打算看却看到了选 notice；有目的地认真、持续地看选 observe。', note: 'I noticed a mistake in his paper. / Scientists observe the stars every night.' },
    { en: 'stare（盯着看）/ glare（怒视）/ glance（瞥一眼）', zh: '选：时间长、吃惊或无礼选 stare；生气地瞪选 glare；很快地瞄一下选 glance。', note: 'He stared at the machine, glanced at me and glared when I laughed.' },
    { en: 'glimpse（瞥见，被动一眼）/ catch sight of（突然看见）', zh: '选：出现 catch a glimpse of 就是 glimpse；强调一瞬间捕捉到选 catch sight of。', note: 'I caught sight of him in the crowd and got a glimpse of his new coat.' },

    // ── 近义辨析：说 ──
    { en: 'tell sb sth / say sth to sb / speak English / talk with sb', zh: '选：后面直接跟人选 tell；重"说的话本身"选 say；重语言或发言选 speak；重双方交谈选 talk with sb about sth。', note: 'He told me a story, said goodbye, spoke English well and talked with me for an hour.' },
    { en: 'whisper（低声说）/ chat（闲聊）/ inform sb of sth（正式通知）', zh: '选：怕人听见选 whisper；轻松随意选 chat；官方、书面口气选 inform sb of sth。', note: 'She whispered a secret, then chatted about the weather; later the teacher informed us of the exam date.' },
    { en: 'explain sth to sb / warn sb of sth / remind sb of sth / complain to sb about sth', zh: '选：解释选 explain；有危险选 warn；怕人忘选 remind；不满选 complain；后面的介词一个都不能丢。', note: 'He explained the rule to us, warned us of the danger, reminded us of the deadline and complained about the noise.' },
    { en: 'admit（承认）/ deny（否认）/ announce（宣布）/ persuade sb into doing（说服成功）', zh: '选：承认和否认是一对反义；公开告知选 announce；persuade 是"已经说服了"，不是"试图劝"。', note: 'He admitted his mistake, denied the rumour, announced the plan and persuaded me into joining him.' },

    // ── 近义辨析：听、笑、哭 ──
    { en: 'hear（听见）/ listen to（去听）/ sound（听起来）', zh: '选：无意听到选 hear；有意识地主动去听选 listen to；后面接形容词的系动词选 sound。', note: 'I heard a noise, so I listened to the door, and the music sounds great.' },
    { en: 'smile（微笑）/ laugh at（出声笑、嘲笑）/ grin（咧嘴笑）/ cry / sob（抽泣）/ weep（书面哭泣）', zh: '选：无声友好选 smile；出声甚至嘲笑选 laugh at；露牙开心或得意选 grin；普通哭选 cry；一抽一抽选 sob；书面默默流泪选 weep。', note: 'She smiled at me and laughed at the joke, then cried and sobbed when she heard the news.' },

    // ── 近义辨析：找、查 ──
    { en: 'look for（找的过程）/ find（找到的结果）/ find out（查明真相）/ discover（发现未知）', zh: '选：不一定找到选 look for；找到了选 find；靠打听、调查弄清楚事实选 find out；发现本来就存在、只是不为人知的东西选 discover。', note: 'I looked for my keys but could not find them; then I found out who took them.' },
    { en: 'search for（搜寻）/ hunt for（四处急切地找）', zh: '选：范围广、较正式选 search for；急切、费力地到处找选 hunt for。', note: 'They searched for the missing child and hunted for the lost bag all night.' },
    { en: 'check（核对）/ examine（仔细检查）/ inspect（视察巡查）', zh: '选：看看对不对选 check；专业、细致地查（如医生）选 examine；上级或官方来查选 inspect。', note: 'Check your answers; the doctor examined my eyes; the officer inspected the school.' },

    // ── 近义辨析：增减、变化、成败、努力 ──
    { en: 'rise（自己上升，不及物）/ raise（把…升起，及物）', zh: '选：后面没有宾语选 rise；后面必须带宾语选 raise。', note: 'The sun rises in the east; please raise your hand.' },
    { en: 'increase（增加）/ decrease（减少）/ reduce（人为降下来）', zh: '选：中性描述变化选 increase / decrease；强调人动手把它降下来选 reduce。', note: 'The price increased, so the shop reduced it in order to bring down the cost.' },
    { en: 'become（通用）/ grow（渐渐变得）/ turn red（变成颜色或状态）/ go bad（变坏）', zh: '选：通用选 become；接 better / worse / older 这种渐变选 grow；颜色或状态突变选 turn；接 bad / wrong / mad 这类坏事选 go。', note: 'He became rich, grew older, turned grey, and the milk went bad.' },
    { en: 'improve（在原有基础上变好）/ develop（从无到有、培养）', zh: '选：只是变好选 improve；从没有到有、从小到大地培养选 develop。', note: 'He improved his English and developed a good habit of reading.' },
    { en: 'succeed in doing / make it / make progress', zh: '选：成功做成某事选 succeed in doing；口语里"做到了、赶上了"选 make it；取得进步选 make progress（不可数，不加 a）。', note: 'He succeeded in passing the exam, made progress in maths and finally made it to college.' },
    { en: "come true（梦想成真，主语是梦想）/ realize one's dream（人实现梦想）", zh: '选：主语是 dream、wish 这类词选 come true；主语是人选 realize。', note: 'Her dream came true when she realized her goal.' },
    { en: 'try to do（尽力去试）/ manage to do（设法做成了）', zh: '选：不一定成功选 try to do；已经成功选 manage to do。句尾出现 finally / at last，多半选 manage to do。', note: 'He tried to open the door, and at last he managed to open it.' },
    { en: "make efforts to do（做出努力）/ attempt to do（尝试，可能失败）/ do one's best（尽最大努力）", zh: '选：强调付出选 make efforts；较正式、结果不定选 attempt；强调态度和坚持选 do one\'s best。', note: 'She made great efforts, attempted the hard task and did her best till the end.' },

    // ── 动词短语 ──
    { en: 'take on（承担）/ take up（开始从事、占用）/ take off（起飞、脱下、走红）/ take over（接管）', zh: '选：后面是工作或责任选 take on；爱好、时间、空间选 take up；飞机、衣服、突然爆红选 take off；公司或职位换人选 take over。', note: 'He took on the job, took up painting, took off his coat and took over the company.' },
    { en: 'turn out（结果是）/ turn down（拒绝、调低）/ turn up（出现、调高）/ turn to（求助）', zh: '选：后面接事实或 to be 选 turn out；拒绝或音量调小选 turn down；人出现了或音量调大选 turn up；跟 sb for help 选 turn to。', note: 'The plan turned out well; he turned down the offer; she had nobody to turn to.' },
    { en: 'put off（推迟）/ put up with（忍受）/ put up（搭起、张贴）/ put on（穿上、上演）', zh: '选：往后推选 put off；忍受选 put up with（with 不能丢）；搭帐篷、贴海报选 put up；穿衣、演戏选 put on。', note: 'They put off the match, put up with the noise, put up a tent and put on a play.' },
    { en: 'come up with（想出办法）/ come across（偶然遇到）/ come up（被提出）/ come about（发生）', zh: '选：想出主意、办法选 come up with；偶然碰到人或物选 come across；问题被提出来选 come up；问事情怎么发生的选 come about。', note: 'He came up with a plan, came across an old friend, and the question came up in class.' },
    { en: 'break down（坏掉、垮掉）/ break out（爆发）/ break in（闯入、打断）/ break up（分手、散开）', zh: '选：车、机器坏了或身体垮了选 break down；战争、火灾爆发选 break out；闯进屋里或打断谈话选 break in；关系结束、人群散开选 break up。', note: 'The car broke down, the war broke out, someone broke in, and the party broke up.' },
    { en: 'carry out（执行、实施）/ carry on（继续）/ carry away（拿走；被冲昏头脑）', zh: '选：执行计划、做实验选 carry out；接着做下去选 carry on；拿走选 carry away，be carried away by 是被…冲昏头脑。', note: 'They carried out the plan, carried on working, and he was carried away by success.' },
    { en: 'figure out（动脑想明白）/ find out（打听查明）', zh: '选：靠动脑筋琢磨出办法、原因选 figure out；靠打听调查弄清事实、真相选 find out。', note: 'I finally figured out the answer, and the police found out the truth.' },
    { en: 'give up（放弃）/ give in（屈服让步）/ give away（赠送、泄露）/ look forward to（期待）', zh: '选：give up doing 放弃做；give in to sb 向某人让步；送人或把秘密说出去选 give away；look forward to 里的 to 是介词，后面接 doing。', note: 'Do not give up; never give in; he gave away his books; I look forward to seeing you.' },
    { en: 'run out of（人用完某物）/ run out（某物用完）/ look into（调查）/ look up（抬头看、查阅）', zh: '选：主语是人、后面带宾语选 run out of；主语是物、后面不带宾语选 run out；调查案件选 look into；查字典选 look up。', note: 'We ran out of paper, so the paper ran out; the police looked into it; look up the word.' },
    { en: 'set up（建立、创办）/ set off（出发、引爆）/ stand for（代表）/ stand out（突出）', zh: '选：建学校、办公司选 set up；出发或引爆选 set off；字母、符号代表什么选 stand for；在人群里显眼、出众选 stand out。', note: 'They set up a school and set off at dawn; UN stands for United Nations; she stands out in class.' },
    { en: 'bring about（引起、导致）/ bring up（抚养、提出）/ keep up with（跟上）/ keep away from（远离）', zh: '选：导致变化选 bring about；养大孩子或提出话题选 bring up；不落后选 keep up with；躲开、别靠近选 keep away from。', note: 'The rain brought about floods; she was brought up by her aunt; hurry up to keep up with the class.' },
    { en: 'get over（克服、康复）/ get through（通过、接通电话、完成）/ get along with（相处）/ get rid of（摆脱）', zh: '选：从病痛打击里恢复选 get over；通过考试、接通电话、把事情做完选 get through；和同学相处选 get along with；除掉坏习惯选 get rid of。', note: 'He got over his illness, got through the exam, gets along with classmates, and got rid of the bad habit.' },
    { en: 'make up（编造、组成、化妆、和好）/ make out（辨认出）/ make up for（弥补）/ be made of（由…制成，看得出原料）', zh: '选：编故事、凑成、和好选 make up；字看不清、意思听不懂选 make out；补上损失的时间选 make up for；看得出原料的"由…制成"选 be made of。', note: 'He made up a story to make up for being late; I cannot make out the words; the desk is made of wood.' },

    // ── 动词后接什么 ──
    { en: '只接 to do：want / decide / manage / refuse / afford / promise / pretend / hope / plan / offer / agree', zh: '这些动词后面只能跟 to do，绝不能跟 doing。', note: 'He refused to go and decided to stay.' },
    { en: '只接 doing：enjoy / finish / avoid / consider / practise / suggest / mind / keep / imagine / risk / admit / give up', zh: '这些动词后面只能跟 doing。enjoy doing 对，enjoy to do 错。', note: 'She enjoys reading and avoids making mistakes.' },
    { en: '接 sb to do：advise / allow / expect / force / persuade / remind / warn / tell / want / ask / encourage / invite', zh: '结构是 v + sb + to do，中间那个人不能丢。', note: 'The teacher advised us to read more.' },
    { en: '接 sb do（不带 to）：make / let / have + sb + do；see / hear / watch / notice + sb + do', zh: '使役动词和感官动词后面接宾语加动词原形，不带 to，表示看到、听到整个动作。', note: 'He made me wait; I saw him cross the road.' },
    { en: '接 sb doing：see / hear / watch / notice / keep / catch + sb + doing', zh: '强调"正在做"就用 doing，和 sb do 的区别就在这一点。', note: 'I saw him crossing the road.（正在过）/ I saw him cross the road.（整个过程）' },
    { en: 'remember / forget / regret + to do 与 + doing', zh: '选：to do 指还没做的事；doing 指已经做过的事。', note: 'Remember to lock the door.（记得要去锁）/ I remember locking the door.（记得锁过了）' },
    { en: 'stop to do 与 stop doing', zh: '选：to do 是"停下来，去做另一件事"（表目的）；doing 是"停止正在做的这件事"（作宾语）。', note: 'He stopped to smoke.（停下手中的事去抽烟）/ He stopped smoking.（把烟戒了）' },
    { en: 'try to do 与 try doing', zh: '选：try to do 是努力去做；try doing 是换一种办法试着做做看。', note: 'He tried to open the door.（使劲想打开）/ He tried opening the window.（改去试试开窗）' },
    { en: '介词后面 + doing', zh: '介词后面一律接动名词，既不接原形，也不随便接 to do。', note: 'He is good at swimming; thank you for helping me.' },
    { en: 'to 是介词的结构：look forward to doing / be used to doing / devote oneself to doing / pay attention to doing / get down to doing', zh: '这几个结构里的 to 是介词，后面必须接 doing，不能接原形。', note: 'I look forward to hearing from you.' },

    // ── 易错词块 ──
    { en: 'sb is to blame for sth（这事怪某人）', zh: '固定搭配，用主动形式表达被动意思；写成 be to be blamed 就是错的。', note: 'He is to blame for the accident.（这起事故该怪他）' },
    { en: 'make sense of sth（弄懂）/ make sense（讲得通）', zh: '选：后面要带宾语、意思是"看懂、弄懂"选 make sense of；本身意思就完整、指"有道理"选 make sense。', note: 'I cannot make sense of this sentence. / Your idea makes sense.' },
    { en: 'at the mercy of sb/sth（任凭…摆布）', zh: '语气里带着无助和被动，后面接支配你的那一方。', note: 'The boat was at the mercy of the waves.（小船任凭风浪摆布）' },
    { en: 'in terms of sth（就…而言、从…方面来说）', zh: '后面接名词，用来限定讨论的角度。', note: 'In terms of price, this one is better.（就价格而言，这个更好）' },
    { en: 'lose track of sb/sth（记不清、失去联系）', zh: '时间、人、事情都可以用，指"跟踪不下去了"。', note: 'I lost track of time. / We lost track of him after he moved.' },
    { en: 'be aware of / be responsible for / be addicted to / take advantage of / make a difference / have access to', zh: '完形高频词块，一组一起背：意识到、对…负责、对…上瘾、利用、起作用、有…的机会或权利。', note: 'be addicted to 里的 to 是介词，后面接名词或 doing。' }
  ]
};
