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
      { id: 2, name: '必修二 遗传与进化', chapters: [] },
      { id: 3, name: '选择性必修一 稳态与调节', chapters: [] },
      { id: 4, name: '选择性必修二 生物与环境', chapters: [] },
      { id: 5, name: '选择性必修三 生物技术与工程', chapters: [] }
    ]
  },
  { id: 'chinese', name: '语文', books: [] },
  { id: 'math', name: '数学', books: [] },
  { id: 'english', name: '英语', books: [] },
  { id: 'physics', name: '物理', books: [] },
  { id: 'chemistry', name: '化学', books: [] }
];
