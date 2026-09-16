window.QUIZ_DATA = {
  subject: '英语', subjectId: 'english',
  bookId: 4, bookName: '读后续写',
  chapterId: 1, chapterName: '读后续写',
  questions: [
    // ── 四步法 · 第一步：读原文 ──
    { k: '读原文', q: '读后续写第一步做什么？', a: '把原文通读一遍，边读边圈三样东西：人物（有谁、什么关系）、矛盾（出了什么事、卡在哪）、伏笔（前文出现过的物件、天气、人物性格）。后面两段的内容全都从这三样里来。' },
    { k: '读原文', q: '题目给的两段开头句怎么用？', a: '给的第一段开头句要照抄下来，当作第一段的第一句，紧接着的第二句就要"接得上"——不跳场景、不换人。第二段开头句同理。' },
    { k: '读原文', q: '【易错】续写能不能自己新加一个人物或者新造一个矛盾？', a: '尽量别加。续写是"接着原文往下写"，人物、物件、情节都要从原文里来。原文提过的伞、小狗、旧照片这类细节，正是最该用起来的伏笔。' },
    { k: '读原文', q: '怎么一眼看出"矛盾"在哪里？', a: '问自己两句：①主人公最想要什么？②他现在办不到什么？这两者的差就是矛盾。续写第二段的任务，就是让人物把这件事办成。' },
    { k: '读原文', q: '原文里的"伏笔"怎么找？找出来有什么用？', a: '留意反复出现或特意描写的东西：一件物品、一句话、一个习惯动作。伏笔要在第二段用上——前文给的线索被你用回来了，阅卷时最容易被看出来。' },

    // ── 四步法 · 第二步：第一段写"动作 + 反应" ──
    { k: '第一段', q: '续写第一段主要写什么？', a: '写"动作 + 反应"：人物做了什么（动作），别人或环境有什么反应（反应）。第一段负责把情节往前推，一直推到最紧张的那一步。' },
    { k: '第一段', q: '第一段写多少、写几件事合适？', a: '只写一到两件事，写到最紧张处收住。两段总共150词左右，第一段约70–80词。情节一多就写不细，反而失分。' },
    { k: '第一段', q: '第一段结尾怎么留钩子？', a: '在最紧要的一刻停住。例：Just then, a familiar voice came from behind. 中文：就在这时，身后传来一个熟悉的声音。让读者非看第二段不可。' },
    { k: '第一段', q: '【易错】第一段一上来能不能先写一大段心里想什么？', a: '不能。开头就用心理描写会把情节停住。正确做法是开头就让人物动起来，心理描写放在动作之后，一两句就够。' },

    // ── 四步法 · 第三步：第二段解决矛盾 + 情感升华 ──
    { k: '第二段', q: '续写第二段主要写什么？', a: '先解决矛盾（人把事情办成了），再写情感升华（人物心里的变化或领悟）。顺序别反：先"事"后"情"。' },
    { k: '第二段', q: '第二段怎么把整个故事收住？', a: '让矛盾落地：原文那个卡住人的东西被解决了；然后用人物的一句心理活动或一句台词点出变化，不要用旁白讲道理。' },
    { k: '第二段', q: '情感升华怎么写才不空？', a: '落到实处：写他做了什么、表情怎么变、对谁说了什么。例：She hugged the old man and finally called him "Dad". 中文：她抱住那位老人，终于喊了他一声"爸"。' },

    // ── 四步法 · 第四步：结尾主题句 ──
    { k: '结尾主题句', q: '结尾主题句怎么写才不俗？', a: '用一个具体画面或一句台词代替抽象道理。例：Watching the little dog run back to him, he smiled—some gifts are not wrapped. 中文：看着小狗跑回他身边，他笑了——有些礼物是用不着包装的。' },
    { k: '结尾主题句', q: '【易错】结尾能不能写 "This story tells us that we should be brave."？', a: '能不用就不用。这是跳出来讲道理，读着像议论文。改成让主人公自己动一下、说一句，道理自己就浮出来了。' },

    // ── 动作描写 ──
    { k: '动作描写', q: '写"快步走"的高分句式？', a: 'She quickened her pace, her heart pounding against her ribs. 中文：她加快了脚步，心砰砰地撞着肋骨。（用独立主格补一个身体反应，比只写 walk fast 强）' },
    { k: '动作描写', q: '写"跑/冲过去"的句式？', a: 'He dashed towards the gate, not daring to look back. 中文：他朝大门冲去，不敢回头。（dash 比 run 更急；not daring 表伴随）' },
    { k: '动作描写', q: '写"抓/握住"的句式？', a: 'She seized his hand and held it tight, as if she would never let go. 中文：她抓住他的手，紧紧握着，好像再也不肯松开。' },
    { k: '动作描写', q: '写"手发抖"的句式？', a: 'His hands were trembling so much that he could hardly hold the pen. 中文：他的手抖得几乎握不住笔。（so ... that ... 表程度）' },
    { k: '动作描写', q: '写"屏住呼吸、轻手轻脚"的句式？', a: 'Holding his breath, he tiptoed to the door and pressed his ear against it. 中文：他屏住呼吸，踮着脚走到门边，把耳朵贴上去。（现在分词开头，动作连贯）' },
    { k: '动作描写', q: '写"抬头/抬眼对视"的句式？', a: 'He raised his head slowly, his eyes meeting hers. 中文：他慢慢抬起头，目光遇上了她的。（独立主格写"目光"同时发生）' },
    { k: '动作描写', q: '写"流泪"的句式？', a: 'Tears welled up in her eyes and rolled down her cheeks before she could wipe them away. 中文：泪水涌上她的眼眶，还没等她擦，就顺着脸颊滚了下来。' },
    { k: '动作描写', q: '写"拥抱、拍背"这类温暖动作的句式？', a: 'She threw her arms around him and patted him gently on the back. 中文：她张开双臂抱住他，轻轻拍了拍他的背。（pat sb on the back，中间用 the，不用 his）' },
    { k: '动作描写', q: '写"犹豫了一下才做"的句式？', a: 'He hesitated for a moment, then made up his mind and stepped forward. 中文：他犹豫了一下，然后下定决心走上前去。' },
    { k: '动作描写', q: '写"两个人合力做一件事"的句式？', a: 'Together they pushed the heavy box, inch by inch, until it moved. 中文：他们一起推那个沉重的箱子，一寸一寸地，直到它动起来。' },

    // ── 心理描写 ──
    { k: '心理描写', q: '写"紧张"的心理句式？', a: 'A wave of nervousness swept over him. 中文：一阵紧张涌上他的心头。（a wave of + 情绪 + sweep over sb，套用很省事）' },
    { k: '心理描写', q: '写"害怕"的心理句式？', a: 'His heart raced, and a cold fear crept up his spine. 中文：他心跳加速，一股冰冷的恐惧顺着脊背爬了上来。' },
    { k: '心理描写', q: '写"松了一口气"的句式？', a: 'He let out a long breath, a heavy weight lifting from his chest. 中文：他长长地出了一口气，仿佛胸口的重担落了地。' },
    { k: '心理描写', q: '写"后悔"的心理句式？', a: 'Regret washed over her; how she wished she had listened to him. 中文：悔意涌上她的心头；她多希望自己当初听了他的话。（wish + had done 表示对过去的后悔）' },
    { k: '心理描写', q: '写"愣住了"的句式？', a: 'He stood rooted to the spot, too stunned to say a word. 中文：他愣在原地，惊得一个字也说不出来。（rooted to the spot 钉在原地；too ... to 太……以至于不能）' },
    { k: '心理描写', q: '写"心里暖暖的"的句式？', a: 'Warmth spread through her chest, and the corners of her mouth turned up. 中文：暖意在她胸口散开，她的嘴角扬了起来。' },
    { k: '心理描写', q: '写"自责"的句式？', a: 'He blamed himself again and again for not being there when she needed him. 中文：她需要他的时候他不在，他一遍遍地责怪自己。（blame sb for doing sth）' },
    { k: '心理描写', q: '写"下定决心"的句式？', a: 'Something inside him hardened; he would not give up this time. 中文：他心里有什么东西变坚定了；这一次他不会再放弃。' },
    { k: '心理描写', q: '写"激动、期待"的句式？', a: 'Her eyes lit up and her heart beat faster with excitement. 中文：她眼睛一亮，激动得心跳都变快了。' },
    { k: '心理描写', q: '【易错】心理描写能不能整段都写"他想……"？', a: '不能。整段写想法会让情节停住，字数也堆得虚。心理描写一两句就够，后面要马上接一个动作。' },

    // ── 环境描写 ──
    { k: '环境描写', q: '写"下大雨"的句式？', a: 'The rain beat against the windows, as if the sky had lost its temper. 中文：雨点打在窗上，好像天发了脾气。（拟人一下就有味道）' },
    { k: '环境描写', q: '写"风声"的句式？', a: 'The wind howled through the trees, shaking the branches. 中文：风在树林里呼啸，把树枝摇得乱晃。' },
    { k: '环境描写', q: '写"夕阳"的句式？', a: 'The setting sun painted the sky orange, and the lake turned into gold. 中文：落日把天空染成橙色，湖面变成了金色。' },
    { k: '环境描写', q: '写"天冷"的句式？', a: 'The cold air bit at his cheeks, and his breath came out in white clouds. 中文：寒气刺着他的脸颊，他呼出的气变成了白雾。' },
    { k: '环境描写', q: '写"夜色和星空"的句式？', a: 'Stars scattered across the dark sky, and the whole village fell silent. 中文：星星撒在暗下来的天上，整个村子安静了下来。' },
    { k: '环境描写', q: '写"春天的清晨"的句式？', a: 'Morning light slipped through the curtains, and birds were singing outside the window. 中文：晨光透过窗帘滑进来，窗外鸟儿在唱。' },
    { k: '环境描写', q: '写"下雪"的句式？', a: 'Snowflakes drifted down slowly, covering the street in a soft white blanket. 中文：雪花缓缓飘落，给街道盖上一层柔和的白毯。' },
    { k: '环境描写', q: '写"街上人群"的句式？', a: 'The street was crowded with people, their voices mixing into a noisy stream. 中文：街上挤满了人，说话声汇成一片喧闹的河流。' },
    { k: '环境描写', q: '写"安静得可怕"的句式？', a: 'The room was so quiet that he could hear his own heartbeat. 中文：屋子里静得他能听见自己的心跳。' },
    { k: '环境描写', q: '【易错】环境描写写太多有什么问题？', a: '续写里的环境是为人物和情节服务的：天气要能衬心情、能推动情节（下雨要打伞、天黑得找路）。纯粹堆风景又空又占字数。' },

    // ── 段落衔接与结尾句式 ──
    { k: '段内衔接', q: '同一段里连两件事，用什么连接词？', a: 'At first ... Then ... / After what seemed like a century ... / Before he knew it ... 中文：起初……然后…… / 仿佛过了一个世纪之后…… / 不知不觉间……' },
    { k: '段内衔接', q: '想写"就在这时"，用什么？', a: 'Just at that moment, ... / All of a sudden, ... / Out of nowhere, ... 中文：就在那一刻…… / 突然…… / 不知从哪里……' },
    { k: '段内衔接', q: '想写"不知过了多久"，用什么？', a: 'After what felt like ages, ... 中文：仿佛过了很久之后……（用来跳过一段等待，省字数又不显得跳跃）' },
    { k: '段落衔接', q: '第一段末尾怎么顺到第二段？', a: '第一段结尾留一个"没做完的动作"或"刚出现的东西"，第二段开头紧接它。例：第一段末 He held the letter, afraid to open it.；第二段就从拆信写起。' },
    { k: '段落衔接', q: '两段之间怎么写才不重复？', a: '第一段写"做事的过程和紧张"，第二段写"结果和心里的变化"。时间、地点接着往下走，别回到第一段已经写过的场景里去。' },
    { k: '段落衔接', q: '【易错】两段续写篇幅怎么分？', a: '大致两部分各一半，每段70–80词。常见毛病是第一段写得又长又满，第二段剩两句话草草收尾，矛盾没解决就结束了。' },
    { k: '结尾句式', q: '结尾想表达"经历让他明白了什么"，用什么句式？', a: 'It was then that he understood what really mattered. 中文：就在那时，他明白了什么才是真正重要的。（It was then that ... 强调句，比平铺直叙有力）' },
    { k: '结尾句式', q: '结尾想表达"从那天起他变了"，用什么句式？', a: 'From that day on, he was no longer the boy who was afraid to speak. 中文：从那天起，他不再是那个不敢开口的男孩了。（From that day on + 定语从句）' },
    { k: '结尾句式', q: '结尾想"以景收尾"，怎么写？', a: 'The sun was setting, and the two of them walked home side by side, saying nothing. 中文：太阳正在落下，两个人并肩走回家，什么也没说。以画面收尾，不点破。' },
    { k: '结尾句式', q: '【易错】两段续写的最后能不能加一句议论？', a: '最好别加。"这个故事告诉我们……"式的议论是跳出故事说的。改成人物的一句台词或一个动作，效果好得多。' }
  ]
};
