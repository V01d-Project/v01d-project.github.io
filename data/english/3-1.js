window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 3, bookName: '应用文',
  chapterId: 1, chapterName: '六类句式',
  items: [
    // ── 邀请信 ──
    { en: 'I am writing to invite you to attend our English speech contest.', zh: '我写信是想邀请你参加我们的英语演讲比赛。用在邀请信第一段第一句，直接点明目的，别绕弯子。' },
    { en: 'I would like to invite you to join us in the activity.', zh: '我想邀请你参加这个活动。开头第二句备选，语气比上一句更客气。' },
    { en: 'The activity will be held in the school hall from 3 p.m. to 5 p.m. next Friday.', zh: '活动将于下周五下午3点到5点在学校礼堂举行。中间段交代时间、地点、事由，三样一个都不能少。' },
    { en: 'The contest includes a three-minute speech and a free talk, where you can share your ideas with us.', zh: '比赛包括三分钟演讲和自由交流，你可以和我们分享你的想法。中间段介绍活动内容。' },
    { en: 'It would be an honour to have you with us.', zh: '有你参加会是我们的荣幸。中间段拉近关系，把对方抬起来。' },
    { en: 'Your presence will surely make the event more meaningful.', zh: '你的到来必定会让这次活动更有意义。比 Please come 得体得多。' },
    { en: 'I would be grateful if you could accept my invitation.', zh: '如果你能接受邀请，我将不胜感激。结尾第一句，礼貌收束。' },
    { en: 'Looking forward to your reply.', zh: '期待你的回复。结尾最后一句，标准套语。', note: '别写 I hope you can come as soon as possible，那是在催人，语气生硬；换成 I hope you can make it. 更自然。' },

    // ── 建议信 ──
    { en: 'I am sorry to hear that you are having trouble with your English study.', zh: '听说你在英语学习上遇到困难，我很难过。用在建议信开头，先共情再给建议。' },
    { en: 'Here are some suggestions for you.', zh: '这里给你一些建议。开头第二句，把建议引出来。' },
    { en: 'First of all, I suggest that you (should) talk with your teacher about it.', zh: '首先，我建议你和老师谈谈这件事。suggest 后面的 that 从句用 should 加动词原形，should 可以省略。' },
    { en: 'Besides, it would be a good idea to keep a diary in English.', zh: '另外，用英语记日记会是个好主意。第二条建议，比 You should 温和得多。' },
    { en: 'What is more, why not join an English club?', zh: '再者，为什么不加入英语社团呢？第三条建议，用反问句给建议。' },
    { en: 'It would be better if you could read aloud every morning.', zh: '如果你每天早上朗读，会更好。虚拟语气给建议，最不容易得罪人。' },
    { en: 'I hope you will find these suggestions helpful.', zh: '希望这些建议对你有帮助。结尾第一句。' },
    { en: 'If there is anything else I can do, please let me know.', zh: '如果还有什么我能做的，请告诉我。结尾表示愿意继续帮忙。', note: '一路 You should / You must 那是在下命令；建议信要用 I suggest / it would be better if you / why not。' },

    // ── 申请信 ──
    { en: 'I am writing to apply for the position of a volunteer in the city library.', zh: '我写信是想申请城市图书馆志愿者这个岗位。申请信开头固定句式，I am writing to apply for...' },
    { en: 'I learned from your website that you are looking for a volunteer.', zh: '我从你们的网站上得知你们在招志愿者。开头交代信息来源，显得真实可靠。' },
    { en: 'I am good at English and I have worked as a volunteer twice before, which has taught me how to get along with others.', zh: '我擅长英语，之前做过两次志愿者，这教会了我怎样与人相处。中间段摆自己的经历和优势。' },
    { en: 'I am confident that I am qualified for the job.', zh: '我有信心自己能胜任这份工作。be qualified for 是"胜任"。' },
    { en: 'I would be available whenever I am needed.', zh: '需要我的时候我随时都可以。available 是有空的、可用的。' },
    { en: 'I am patient and ready to help others, which I believe is what the job needs.', zh: '我有耐心，也乐于助人，我相信这正是这份工作需要的。把性格和岗位要求接上。' },
    { en: 'I would appreciate it if you could give me a chance.', zh: '如果您能给我一个机会，我将不胜感激。结尾第一句，appreciate 后面先接 it。' },
    { en: 'I am looking forward to your early reply.', zh: '期待您的早日回复。结尾套语。', note: '理由别落在 I need money 上，要落在能力和意愿上：because I believe this job suits my strengths.' },

    // ── 通知 ──
    { en: 'NOTICE', zh: '通知的标题：单独一行居中，全部大写，写在正文上方。', note: '标题不加句号，也不写成 Notice: 或 A Notice。' },
    { en: "In order to enrich our school life, the Students' Union will hold an English evening.", zh: '为了丰富我们的校园生活，学生会将举办一场英语晚会。通知开头先交代事由和举办方。' },
    { en: 'It will take place in the school hall at 4 p.m. on May 20th.', zh: '活动将于5月20日下午4点在学校礼堂举行。时间、地点一句话交代清楚。' },
    { en: 'All students are welcome to take part in it.', zh: '欢迎全体同学参加。通知里交代参加对象。' },
    { en: "Those who are interested are asked to sign up at the Students' Union office before Friday.", zh: '有兴趣的同学请在周五之前到学生会办公室报名。报名要求用被动语态更正式。' },
    { en: 'Please bring your student cards with you.', zh: '请随身携带学生卡。提醒类信息放在报名要求后面。' },
    { en: 'Everyone is expected to arrive on time.', zh: '请所有人准时到场。结尾提出小要求。' },
    { en: "the Students' Union / May 15th", zh: '右下角落款：先写发出通知的单位，再写日期，单位在上、日期在下，两行都靠右。', note: '通知不要用 do not 写成 don\'t、cannot 写成 can\'t 这类缩写，也别用 Come on! 这种口语。' },

    // ── 介绍类（人物 / 地方 / 活动）──
    { en: 'I am more than glad to introduce my hometown to you.', zh: '我非常乐意把我的家乡介绍给你。介绍类开头，结构是 introduce A to B，A 是被介绍的人或物。' },
    { en: 'It is my great pleasure to introduce our school to you.', zh: '很荣幸向你介绍我们学校。开头第二句备选，更正式。' },
    { en: 'He is a man of great patience, always ready to help others.', zh: '他是个很有耐心的人，总是乐于助人。介绍人物时写性格特点。' },
    { en: 'Our city is famous for its long history and beautiful scenery.', zh: '我们这座城市以悠久的历史和美丽的风景闻名。介绍地方，be famous for 后面接出名的原因。' },
    { en: 'It covers a wide range of topics, ranging from science to history.', zh: '它涉及的话题很广，从科学到历史都有。介绍事物时用 ranging from ... to ... 举例。' },
    { en: 'What makes it special is the warm atmosphere there.', zh: '它特别的地方在于那里温暖的氛围。用 What 引导的主语从句做强调。' },
    { en: 'I hope you will like it, and I am willing to tell you more if you are interested.', zh: '希望你会喜欢，如果你感兴趣，我很乐意再多讲一些。结尾收束。' },
    { en: 'I am sure you will have a better understanding of it after reading.', zh: '我相信你读完以后会对它有更深的了解。结尾备选。', note: 'be famous for 后面接出名的原因，be famous as 后面接身份：He is famous as a singer.' },

    // ── 感谢信 ──
    { en: 'I am writing to express my sincere thanks for your help.', zh: '我写信是为了对你的帮助表达我诚挚的谢意。感谢信开头固定句式。' },
    { en: 'I would like to thank you from the bottom of my heart.', zh: '我想从心底里感谢你。更深情的开头备选。' },
    { en: 'Without your help, I could not have got through the exam.', zh: '没有你的帮助，我不可能通过那场考试。could not have done 是对过去的假设，用来说明对方的帮助起了作用。' },
    { en: 'It was you who encouraged me when I was about to give up.', zh: '就在我快要放弃的时候，是你鼓励了我。强调句型 It was ... who ...。' },
    { en: 'Your timely help meant a lot to me.', zh: '你及时的帮助对我意义重大。mean a lot to sb 是对某人意义重大。' },
    { en: 'I will always remember your kindness, and I hope I can return the favour some day.', zh: '我会一直记得你的好意，希望有一天能回报你。return the favour 是回报恩情。' },
    { en: 'Thanks again for your time, and I wish you all the best.', zh: '再次感谢你花时间帮我，祝你一切都好。结尾第一句。' },
    { en: 'Please accept my sincere gratitude once more.', zh: '请再次接受我诚挚的感谢。更正式的结尾备选。', note: 'thanks for 后面接感谢的事或物；thanks to 是"多亏了某人某物"，表示原因：Thanks to your help, I passed the exam.' }
  ]
};
