window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 1, chapterName: '应用文',
  questions: [
    // ── 邀请信 ──
    { k: '邀请-开头', q: '邀请信开头第一句怎么写？给两种说法。', a: 'I am writing to invite you to attend our English speech contest. / I would like to invite you to join us in the activity. 中文：我写信是想邀请你参加我们的英语演讲比赛。/ 我想邀请你参加这个活动。开头直接点明"邀请"这个目的，别绕弯子。' },
    { k: '邀请-中间', q: '邀请信中间必须交代活动的哪些信息？用一句英语写出来。', a: 'The activity will be held in the school hall from 3 p.m. to 5 p.m. next Friday. 中文：活动将于下周五下午3点到5点在学校礼堂举行。——时间、地点、事由三样一个都不能少。' },
    { k: '邀请-中间', q: '邀请信中间怎么介绍活动内容？', a: 'The contest includes a three-minute speech and a free talk, where you can share your ideas with us. 中文：比赛包括三分钟演讲和自由交流，你可以和我们分享你的想法。' },
    { k: '邀请-中间', q: '想让对方一定来，加一句什么？', a: 'Your presence will surely make the event more meaningful. 中文：你的到来必定会让这次活动更有意义。（比 "Please come" 得体得多）' },
    { k: '邀请-结尾', q: '邀请信的结尾怎么写？', a: 'I would be grateful if you could accept my invitation. Looking forward to your reply. 中文：如果你能接受邀请，我将不胜感激。期待你的回复。' },
    { k: '邀请-易错', q: '【易错】邀请信结尾写 "I hope you can come as soon as possible."，问题在哪？', a: 'as soon as possible 是催人家赶紧来，语气生硬。改成 I hope you can make it. 或 Looking forward to seeing you there. 更自然。' },

    // ── 建议信 ──
    { k: '建议-开头', q: '建议信开头怎么写？', a: 'I am sorry to hear that you are having trouble with your English study. Here are some suggestions for you. 中文：听说你在英语学习上遇到困难，我很难过，这里给你一些建议。' },
    { k: '建议-中间', q: '给第一条建议的句式？', a: 'First of all, I suggest that you (should) talk with your teacher about it. 中文：首先，我建议你和老师谈谈这件事。（suggest 后面的 that 从句用 should + 动词原形，should 可以省略）' },
    { k: '建议-中间', q: '第二条、第三条建议怎么连？', a: 'Besides, it would be a good idea to keep a diary in English. What is more, why not join an English club? 中文：另外，用英语记日记会是个好主意。再者，为什么不加入英语社团呢？' },
    { k: '建议-中间', q: '【易错】suggest 后面能不能说 "suggest you to do sth"？', a: '不能。suggest sb to do 是错的。正确写法：suggest that sb (should) do sth；要说"建议某人做某事"也可以用 advise sb to do sth。' },
    { k: '建议-结尾', q: '建议信结尾怎么写？', a: 'I hope you will find these suggestions helpful. If there is anything else I can do, please let me know. 中文：希望这些建议对你有帮助。如果还有什么我能做的，请告诉我。' },
    { k: '建议-易错', q: '【易错】建议信里一路写 "You should ... You must ..."，行不行？', a: '不行，那像是在下命令。建议信要用 I suggest / it would be better if you ... / why not ...，语气才是"给建议"。' },

    // ── 申请信 ──
    { k: '申请-开头', q: '申请信开头怎么写？', a: 'I am writing to apply for the position of a volunteer in the city library. 中文：我写信是想申请城市图书馆志愿者这个岗位。（I am writing to apply for...）' },
    { k: '申请-中间', q: '申请信里怎么介绍自己的优势？', a: 'I am good at English and I have worked as a volunteer twice before, which has taught me how to get along with others. 中文：我擅长英语，之前做过两次志愿者，这教会了我怎样与人相处。' },
    { k: '申请-中间', q: '怎么表达"我能胜任"？', a: 'I am confident that I am qualified for the job. 中文：我有信心自己能胜任这份工作。（be qualified for 胜任）' },
    { k: '申请-中间', q: '怎么表达"需要我的时候随时可以来"？', a: 'I would be available whenever I am needed. 中文：需要我的时候我随时都可以。（available 有空的、可用的）' },
    { k: '申请-结尾', q: '申请信结尾怎么写？', a: 'I would appreciate it if you could give me a chance. I am looking forward to your early reply. 中文：如果您能给我一个机会，我将不胜感激。期待您的早日回复。' },
    { k: '申请-易错', q: '【易错】申请信里写 "I want to apply for this job because I need money." 怎么改？', a: '别落在"我需要钱"上。要落在能力和意愿上：because I believe this job suits my strengths and I am eager to serve others. 中文：因为我相信这份工作适合我的长处，我也很想为他人服务。' },

    // ── 通知 ──
    { k: '通知-标题', q: '书面通知的标题怎么写？', a: '单独一行居中写 NOTICE，全部大写，写在正文上方；正文第一行再点明事由。' },
    { k: '通知-开头', q: '通知正文开头怎么写？', a: 'In order to enrich our school life, the Students\' Union will hold an English evening. 中文：为了丰富我们的校园生活，学生会将举办一场英语晚会。（in order to 表目的）' },
    { k: '通知-中间', q: '通知里要说清哪些信息？用英语写出时间、地点和参加对象。', a: 'It will take place in the school hall at 4 p.m. on May 20th. All students are welcome to take part in it. 中文：活动将于5月20日下午4点在学校礼堂举行。欢迎全体同学参加。' },
    { k: '通知-中间', q: '通知里怎么要求大家报名？', a: 'Those who are interested are asked to sign up at the Students\' Union office before Friday. 中文：有兴趣的同学请在周五之前到学生会办公室报名。' },
    { k: '通知-结尾', q: '通知的落款怎么处理？', a: '正文写完后，在右下方写发出通知的单位和日期，比如：the Students\' Union / May 15th。中文：右下角写"发出单位 + 日期"，单位在上、日期在下。' },
    { k: '通知-易错', q: '【易错】通知里可以用缩写和口语吗？', a: '不要用 don\'t、can\'t 这类缩写，也别用 Come on! 这类口语。通知是正式文体，要写 do not、cannot，句子要完整。' },

    // ── 介绍类（人物 / 地方 / 活动） ──
    { k: '介绍-开头', q: '介绍类作文开头怎么写？', a: 'I am more than glad to introduce my hometown to you. 中文：我非常乐意把我的家乡介绍给你。（introduce A to B，A 是被介绍的人或物）' },
    { k: '介绍-中间', q: '介绍人物时怎么写他的特点？', a: 'He is a man of great patience, always ready to help others. 中文：他是个很有耐心的人，总是乐于助人。' },
    { k: '介绍-中间', q: '介绍一个地方时怎么写？', a: 'Our city is famous for its long history and beautiful scenery. 中文：我们这座城市以悠久的历史和美丽的风景闻名。（be famous for 以……闻名）' },
    { k: '介绍-中间', q: '介绍活动或事物时怎么给细节？', a: 'It covers a wide range of topics, ranging from science to history. 中文：它涉及的话题很广，从科学到历史都有。（ranging from ... to ...）' },
    { k: '介绍-结尾', q: '介绍类作文结尾怎么写？', a: 'I hope you will like it, and I am willing to tell you more if you are interested. 中文：希望你会喜欢，如果你感兴趣，我很乐意再多讲一些。' },
    { k: '介绍-易错', q: '【易错】be famous for 和 be famous as 有什么区别？', a: 'be famous for 后面接"出名的原因"（以……闻名）；be famous as 后面接"身份"（作为……而出名）。例：He is famous for his songs. / He is famous as a singer.' },

    // ── 感谢信 ──
    { k: '感谢-开头', q: '感谢信开头怎么写？', a: 'I am writing to express my sincere thanks for your help. 中文：我写信是为了对你的帮助表达我诚挚的谢意。' },
    { k: '感谢-中间', q: '怎么具体说清"谢的是什么"？', a: 'Without your help, I could not have got through the exam. 中文：没有你的帮助，我不可能通过那场考试。（could not have done 是对过去的假设）' },
    { k: '感谢-中间', q: '怎么表达"我会记住这份帮助"？', a: 'I will always remember your kindness, and I hope I can return the favour some day. 中文：我会一直记得你的好意，希望有一天能回报你。（return the favour 回报恩情）' },
    { k: '感谢-结尾', q: '感谢信结尾怎么写？', a: 'Thanks again for your time, and I wish you all the best. 中文：再次感谢你花时间帮我，祝你一切都好。' },
    { k: '感谢-易错', q: '【易错】感谢信只写一句 "Thank you very much." 够吗？', a: '不够。这句话太笼统，要写出"具体因为什么谢"加上"这件事对我有什么影响"，才显得真诚。' },
    { k: '感谢-易错', q: '【易错】thanks for 和 thanks to 有什么不同？', a: 'thanks for + 感谢的事或物；thanks to + 多亏了某人某物（表示原因）。例：Thanks for your help. / Thanks to your help, I passed the exam.' },

    // ── 通用高分句型 ──
    { k: '礼貌请求', q: '怎么用委婉语气提出请求？给三种说法。', a: 'Could you please ...? / Would it be possible for you to ...? / I wonder if you could ...? 中文：能否请你……？三种都比 "Please do it." 客气得多。' },
    { k: '礼貌请求', q: '怎么表达"如果您能……我将不胜感激"？', a: 'I would appreciate it if you could give me a hand. 中文：如果您能帮我一把，我将不胜感激。（appreciate 后面先接 it，再接 if 从句）' },
    { k: '礼貌请求', q: '【易错】"I would appreciate it if ..." 里的 it 能省掉吗？', a: '不能省。appreciate 是及物动词，it 是形式宾语，后面才接 if 从句。写成 I would appreciate if ... 就是错的。' },
    { k: '表达期待', q: '怎么表达"期待早日收到回复"？', a: 'I am looking forward to your early reply. 中文：期待你的早日回复。' },
    { k: '表达期待', q: '【易错】look forward to 后面接什么？', a: '接名词或动名词：look forward to hearing from you。写成 look forward to hear from you 是错的。' },
    { k: '表达期待', q: '怎么表达"希望你能来 / 希望你能参加"？', a: 'I hope you can make it. / I would be delighted if you could join us. 中文：希望你能来。/ 如果你能来我们会非常高兴。' },
    { k: '总结收尾', q: '应用文最后作总结用哪句？', a: 'In a word, I am sure it will be a meaningful experience for you. 中文：总之，我相信这对你来说会是一次有意义的经历。' },
    { k: '总结收尾', q: '想请对方"有事随时联系我"，怎么说？', a: 'If you have any questions, please feel free to contact me. 中文：如果有任何问题，请随时联系我。' },

    // ── 格式与称呼、落款 ──
    { k: '称呼', q: '知道对方姓名时，称呼怎么写？', a: 'Dear Mr. Smith, / Dear Ms. Green, / Dear Li Hua, 后面用逗号，然后另起一行写正文。男性用 Mr.，女性用 Ms.，不清楚婚姻状况就用 Ms.。' },
    { k: '称呼', q: '不知道对方姓名（只知道或完全不知道性别）怎么办？', a: '不知道性别用 Dear Sir or Madam, 后接逗号。注意称呼只在第一行，正文第一句不要再重复对方的称呼。' },
    { k: '称呼', q: '【易错】称呼后面用逗号还是冒号？', a: '英文书信习惯用逗号（Dear Mr. Smith,）。用冒号主要在美式公务信里。考试写逗号最稳。' },
    { k: '落款', q: '写信给认识的人，落款怎么写？', a: 'Yours sincerely, 后面隔一行写自己的名字。中文：你真诚的（用于知道对方姓名的信）。' },
    { k: '落款', q: '写信给不认识的人（Dear Sir or Madam），落款怎么写？', a: 'Yours faithfully, 后面隔一行写自己的名字。中文：你忠实的（用于不知道对方姓名的信）。' },
    { k: '落款', q: '【易错】Yours sincerely 后面是逗号还是句号？署名怎么排？', a: 'Yours sincerely 后面是逗号，不能写句号。署名排三行：Yours sincerely, →（空一行）→ Li Hua。署名不加句号。' },
    { k: '格式', q: '应用文正文一般分几段？', a: '三段最常见：第一段说明写信目的，第二段写具体内容，第三段表达期待或感谢。每段首行空两格，或段与段之间空一行，全文统一一种就行。' },
    { k: '格式', q: '【易错】应用文里能用缩写（I\'m、don\'t、it\'s）吗？', a: '考场上尽量别用。写成 I am、do not、it is，文体更正式，也少一处扣分点。' },
    { k: '格式', q: '应用文用什么时态？', a: '以一般现在时为主；写已经发生的事用一般过去时；写将来要办的活动用一般将来时。同一封信里时间不同，时态要跟着变。' },
    { k: '格式', q: '【易错】落款能不能写 "Your best friend, Li Hua"？', a: '题目要求"以李华的身份"写信时，落款只写 Li Hua。除非题目明确说是写给朋友，才可以写 Yours, Li Hua。别自己加 Your best friend。' }
  ]
};
