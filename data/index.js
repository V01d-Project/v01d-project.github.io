/* 全站目录：加科目/加章节只改这一个文件。live:true 表示这一章已经录入。 */
window.SITE_INDEX = [
  {
    id: 'bio', name: '生物',
    books: [
      { id: 1, name: '必修一 分子与细胞', chapters: [
        { id: 1, name: '第1章 走近细胞', live: true },
        { id: 2, name: '第2章 组成细胞的分子', live: true },
        { id: 3, name: '第3章 细胞的基本结构', live: true },
        { id: 4, name: '第4章 物质的输入和输出', live: true },
        { id: 5, name: '第5章 能量的供应和利用', live: true },
        { id: 6, name: '第6章 细胞的生命历程', live: true }
      ]},
      { id: 2, name: '必修二 遗传与进化', chapters: [
        { id: 1, name: '第1章 遗传因子的发现', live: true },
        { id: 2, name: '第2章 基因和染色体的关系', live: true },
        { id: 3, name: '第3章 基因的本质', live: true },
        { id: 4, name: '第4章 基因的表达', live: true },
        { id: 5, name: '第5章 基因突变及其他变异', live: true },
        { id: 6, name: '第6章 生物的进化', live: true }
      ]},
      { id: 3, name: '选择性必修一 稳态与调节', chapters: [
        { id: 1, name: '第1章 人体的内环境与稳态', live: true },
        { id: 2, name: '第2章 神经调节', live: true },
        { id: 3, name: '第3章 体液调节', live: true },
        { id: 4, name: '第4章 免疫调节', live: true },
        { id: 5, name: '第5章 植物生命活动的调节', live: true }
      ]},
      { id: 4, name: '选择性必修二 生物与环境', chapters: [
        { id: 1, name: '第1章 种群及其动态', live: true },
        { id: 2, name: '第2章 群落及其演替', live: true },
        { id: 3, name: '第3章 生态系统及其稳定性', live: true },
        { id: 4, name: '第4章 人与环境', live: true }
      ]},
      { id: 5, name: '选择性必修三 生物技术与工程', chapters: [
        { id: 1, name: '第1章 发酵工程', live: true },
        { id: 2, name: '第2章 细胞工程', live: true },
        { id: 3, name: '第3章 基因工程', live: true },
        { id: 4, name: '第4章 生物技术的安全性与伦理问题', live: true }
      ]}
    ]
  },
  { id: 'chinese', name: '语文', books: [
    { id: 1, name: '古诗文默写（60 篇）', noReview: true, chapters: [
      { id: 1, name: '文言文 · 挖空', live: true },
      { id: 2, name: '诗词曲 · 挖空', live: true },
      { id: 3, name: '情景默写 · 文言文', live: true },
      { id: 4, name: '情景默写 · 诗词曲', live: true },
      { id: 5, name: '大总结 · 综合情景', live: true },
      { id: 6, name: '开放性默写', live: true }
    ]},
    { id: 2, name: '文言实词虚词', noReview: true, chapters: [
      { id: 1, name: '翻译题写法 · 教程', live: true },
      { id: 2, name: '120 个实词 · 语境', live: true },
      { id: 3, name: '18 个虚词 · 语境', live: true }
    ]}
  ] },
  { id: 'math', name: '数学', books: [] },
  { id: 'english', name: '英语', books: [
    { id: 1, name: '语法填空', noReview: true, chapters: [
      { id: 1, name: '判断法 · 教程', live: true },
      { id: 2, name: '十个抽屉 · 背', live: true }
    ]},
    { id: 2, name: '完形词块', noReview: true, chapters: [
      { id: 1, name: '四类线索 · 教程', live: true },
      { id: 2, name: '词块辨析 · 背', live: true },
      { id: 3, name: '真题拆解 · 教程', live: true }
    ]},
    { id: 3, name: '应用文', noReview: true, chapters: [
      { id: 1, name: '写作教程', live: true },
      { id: 2, name: '邀请信 · 背', live: true },
      { id: 3, name: '建议信 · 背', live: true },
      { id: 4, name: '申请信 · 背', live: true },
      { id: 5, name: '通知 · 背', live: true },
      { id: 6, name: '介绍 · 背', live: true },
      { id: 7, name: '感谢信 · 背', live: true },
      { id: 8, name: '范文拆解 · 教程', live: true },
      { id: 9, name: '审题 · 教程', live: true },
      { id: 10, name: '道歉信 · 背', live: true },
      { id: 11, name: '投诉信 · 背', live: true },
      { id: 12, name: '求助信 · 背', live: true }
    ]},
    { id: 4, name: '读后续写', noReview: true, chapters: [
      { id: 1, name: '四步法 · 教程', live: true },
      { id: 2, name: '高分句式 · 背', live: true },
      { id: 3, name: '真题拆解 · 教程', live: true }
    ]},
    { id: 5, name: '七选五', noReview: true, chapters: [
      { id: 1, name: '四个抓手 · 教程', live: true }
    ]},
    { id: 6, name: '阅读干扰项', noReview: true, chapters: [
      { id: 1, name: '五类陷阱 · 教程', live: true }
    ]}
  ] },
  { id: 'physics', name: '物理', books: [] },
  { id: 'chemistry', name: '化学', books: [] }
];
