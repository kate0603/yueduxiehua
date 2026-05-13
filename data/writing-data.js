module.exports = {
  categories: [
    { id: 'single', name: '单图写话', icon: '🖼️', desc: '观察一幅图，写一段话', suitable: '1-2年级' },
    { id: 'multi', name: '多图连贯', icon: '📷📷', desc: '观察多幅图，写完整故事', suitable: '2-3年级' },
    { id: 'continue', name: '续写故事', icon: '✏️', desc: '给出开头，续写内容', suitable: '3-4年级' },
    { id: 'fill', name: '看图填空', icon: '🔤', desc: '根据图片补全句子', suitable: '1年级' },
    { id: 'diary', name: '看图写日记', icon: '📔', desc: '用日记格式写作', suitable: '3-4年级' }
  ],
  subCategories: [
    { id: 'scenery', name: '写景类', icon: '🌄', count: 10 },
    { id: 'life', name: '记事生活类', icon: '📝', count: 12 },
    { id: 'animal', name: '动物童话类', icon: '🐰', count: 10 },
    { id: 'people', name: '人物描写类', icon: '👤', count: 6 },
    { id: 'object', name: '状物物品类', icon: '🎒', count: 6 },
    { id: 'imagine', name: '想象创编类', icon: '✨', count: 4 }
  ],
  topics: [
    {
      id: 1,
      title: '美丽的春天',
      emoji: '🌸',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20spring%20garden%20with%20colorful%20flowers%20and%20butterflies%20cartoon%20style%20for%20kids&image_size=square',
      description: '春天来了，花园里开满了五颜六色的花朵，蝴蝶在花丛中翩翩起舞。',
      hint: '春天是美丽的季节，你可以写写花朵的颜色、蝴蝶的样子，还有小朋友们在春天里做什么。',
      keywords: ['春天', '花朵', '蝴蝶', '快乐', '美丽'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '图中有什么颜色的花？', options: ['A. 红色', 'B. 黄色', 'C. 五颜六色', 'D. 黑色'], answer: 'C' },
        { question: '蝴蝶在做什么？', options: ['A. 睡觉', 'B. 飞舞', 'C. 吃饭', 'D. 看书'], answer: 'B' },
        { question: '这是什么季节？', options: ['A. 夏天', 'B. 秋天', 'C. 冬天', 'D. 春天'], answer: 'D' }
      ],
      sentenceFillBlank: [
        { sentence: '春天来了，______开了。', options: ['A. 花朵', 'B. 雪花', 'C. 树叶', 'D. 石头'], answer: 'A' },
        { sentence: '______在花丛中飞舞。', options: ['A. 小狗', 'B. 蝴蝶', 'C. 小猫', 'D. 小鸡'], answer: 'B' }
      ],
      sample: '春天来了！花园里的花都开了，有红的、黄的、粉的，五颜六色真好看。蝴蝶在花丛中飞来飞去，好像在跳舞。小朋友们也来花园里玩，他们笑着、跑着，开心极了。春天真是个美丽的季节！'
    },
    {
      id: 2,
      title: '炎热的夏天',
      emoji: '☀️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/炎热的夏天',
      description: '夏天到了，太阳火辣辣的，小朋友们在游泳池里开心地玩耍。',
      hint: '夏天有什么特点？小朋友们喜欢做什么？你最喜欢夏天的什么？',
      keywords: ['夏天', '热', '游泳', '冰淇淋', '西瓜'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '夏天的太阳怎么样？', options: ['A. 凉凉的', 'B. 火辣辣的', 'C. 暖暖的', 'D. 冷冷的'], answer: 'B' },
        { question: '小朋友们在做什么？', options: ['A. 堆雪人', 'B. 游泳', 'C. 爬山', 'D. 打雪仗'], answer: 'B' },
        { question: '夏天人们喜欢吃什么？', options: ['A. 火锅', 'B. 冰淇淋', 'C. 热汤', 'D. 烤红薯'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '夏天到了，______很大。', options: ['A. 雨水', 'B. 阳光', 'C. 雪花', 'D. 树叶'], answer: 'B' },
        { sentence: '小朋友们在______里游泳。', options: ['A. 游泳池', 'B. 小河', 'C. 大海', 'D. 浴缸'], answer: 'A' }
      ],
      sample: '夏天到了，太阳火辣辣地照着大地。小朋友们穿着泳衣，在游泳池里开心地玩耍。他们有的在打水仗，有的在学游泳，还有的在水里漂来漂去。游累了，他们就坐在岸边吃冰淇淋，甜甜的，凉凉的，真舒服！'
    },
    {
      id: 3,
      title: '金色的秋天',
      emoji: '🍂',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/金色的秋天',
      description: '秋天来了，树叶变黄了，一片片从树上飘落下来，像一只只蝴蝶在飞舞。',
      hint: '秋天是什么颜色的？秋天有哪些水果成熟了？小朋友们在秋天会做什么？',
      keywords: ['秋天', '落叶', '金黄', '丰收', '凉爽'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '秋天的树叶是什么颜色？', options: ['A. 绿色', 'B. 红色', 'C. 金黄色', 'D. 蓝色'], answer: 'C' },
        { question: '树叶像什么在飞舞？', options: ['A. 小鸟', 'B. 蝴蝶', 'C. 飞机', 'D. 小船'], answer: 'B' },
        { question: '秋天天气怎么样？', options: ['A. 炎热', 'B. 寒冷', 'C. 凉爽', 'D. 温暖'], answer: 'C' }
      ],
      sentenceFillBlank: [
        { sentence: '秋天来了，树叶______了。', options: ['A. 变绿', 'B. 变黄', 'C. 变红', 'D. 变蓝'], answer: 'B' },
        { sentence: '小朋友们在______树叶。', options: ['A. 收集', 'B. 扔掉', 'C. 吃掉', 'D. 踩碎'], answer: 'A' }
      ],
      sample: '秋天来了，树上的叶子变黄了。秋风一吹，金黄的树叶一片片飘落下来，像一只只美丽的蝴蝶。小朋友们来到公园里，捡起一片片漂亮的树叶，有的像扇子，有的像小船。秋天真是个美丽的季节！'
    },
    {
      id: 4,
      title: '寒冷的冬天',
      emoji: '❄️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/寒冷的冬天',
      description: '冬天到了，北风呼呼地吹，天空飘起了雪花，大地披上了银装。',
      hint: '冬天是什么样子的？小朋友们在冬天会做什么游戏？',
      keywords: ['冬天', '雪', '寒冷', '雪人', '棉袄'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '冬天天空飘着什么？', options: ['A. 雨滴', 'B. 雪花', 'C. 树叶', 'D. 花瓣'], answer: 'B' },
        { question: '小朋友们穿什么衣服？', options: ['A. 短袖', 'B. 棉袄', 'C. 裙子', 'D. 短裤'], answer: 'B' },
        { question: '冬天可以堆什么？', options: ['A. 沙堡', 'B. 雪人', 'C. 泥人', 'D. 积木'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '冬天到了，______飘飘。', options: ['A. 雪花', 'B. 树叶', 'C. 花瓣', 'D. 雨滴'], answer: 'A' },
        { sentence: '小朋友们在雪地里______。', options: ['A. 游泳', 'B. 堆雪人', 'C. 种花', 'D. 乘凉'], answer: 'B' }
      ],
      sample: '冬天到了，北风呼呼地吹。天上飘起了雪花，一片片雪花像棉花糖一样。小朋友们穿着厚厚的棉袄，来到雪地里。他们堆了一个大大的雪人，还给雪人戴上了帽子和围巾。冬天真好玩！'
    },
    {
      id: 5,
      title: '下雨啦',
      emoji: '🌧️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/下雨啦',
      description: '哗啦啦，下雨了！小朋友们撑着五颜六色的伞，走在放学的路上。',
      hint: '下雨前天空是什么样子的？雨点像什么？雨后会出现什么？',
      keywords: ['下雨', '伞', '水坑', '彩虹', '雨声'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '小朋友们撑着什么？', options: ['A. 帽子', 'B. 伞', 'C. 书包', 'D. 衣服'], answer: 'B' },
        { question: '伞是什么颜色的？', options: ['A. 黑色', 'B. 白色', 'C. 五颜六色', 'D. 灰色'], answer: 'C' },
        { question: '下雨后可能会出现什么？', options: ['A. 太阳', 'B. 彩虹', 'C. 星星', 'D. 月亮'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '下雨了，小朋友们撑着______。', options: ['A. 伞', 'B. 雨衣', 'C. 帽子', 'D. 书包'], answer: 'A' },
        { sentence: '雨点像______一样落下来。', options: ['A. 雪花', 'B. 珍珠', 'C. 树叶', 'D. 石头'], answer: 'B' }
      ],
      sample: '哗啦啦，下雨了！天空灰蒙蒙的，雨点像珍珠一样落下来。小朋友们撑着五颜六色的伞，走在放学的路上。他们踩着水坑，水花溅得高高的，开心极了。雨停了，天边出现了一道美丽的彩虹。'
    },
    {
      id: 6,
      title: '下雪天',
      emoji: '🌨️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/下雪天',
      description: '下雪啦！小朋友们穿上厚厚的棉袄，跑到院子里堆雪人、打雪仗。',
      hint: '雪是什么颜色的？雪地上可以玩什么游戏？堆的雪人是什么样子的？',
      keywords: ['雪', '雪人', '打雪仗', '冬天', '快乐'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '雪是什么颜色的？', options: ['A. 红色', 'B. 白色', 'C. 蓝色', 'D. 绿色'], answer: 'B' },
        { question: '小朋友们在做什么？', options: ['A. 游泳', 'B. 堆雪人', 'C. 种花', 'D. 放风筝'], answer: 'B' },
        { question: '雪人有眼睛吗？', options: ['A. 没有', 'B. 有，用石头做的', 'C. 有，用树叶做的', 'D. 有，用花朵做的'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '下雪啦，小朋友们在______雪人。', options: ['A. 堆', 'B. 画', 'C. 吃', 'D. 扔'], answer: 'A' },
        { sentence: '雪人戴着______和围巾。', options: ['A. 帽子', 'B. 眼镜', 'C. 书包', 'D. 鞋子'], answer: 'A' }
      ],
      sample: '下雪啦！大地一片白茫茫的。小朋友们穿上厚厚的棉袄，跑到院子里。他们滚了三个大雪球，堆成了一个雪人。他们给雪人戴上帽子，围上围巾，还用胡萝卜做雪人的鼻子。雪人看起来可爱极了！'
    },
    {
      id: 7,
      title: '美丽的公园',
      emoji: '🌳',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/美丽的公园',
      description: '星期天，小朋友们来到公园玩耍，公园里有高高的大树、五颜六色的花朵，还有一个美丽的小湖。',
      hint: '公园里有什么？小朋友们在公园里做什么？公园美在哪里？',
      keywords: ['公园', '大树', '花朵', '玩耍', '美丽'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '公园里有什么？', options: ['A. 高楼', 'B. 大树和花朵', 'C. 汽车', 'D. 商店'], answer: 'B' },
        { question: '公园里有小湖吗？', options: ['A. 没有', 'B. 有', 'C. 不知道', 'D. 可能有'], answer: 'B' },
        { question: '小朋友们在公园里做什么？', options: ['A. 睡觉', 'B. 玩耍', 'C. 上课', 'D. 工作'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '星期天，小朋友们去______玩。', options: ['A. 公园', 'B. 学校', 'C. 超市', 'D. 医院'], answer: 'A' },
        { sentence: '公园里有______的花朵。', options: ['A. 黑色', 'B. 五颜六色', 'C. 白色', 'D. 灰色'], answer: 'B' }
      ],
      sample: '星期天，阳光明媚。小朋友们来到美丽的公园。公园里有高高的大树，五颜六色的花朵，还有一个清澈的小湖。小朋友们有的在草地上奔跑，有的在湖边看小鱼，还有的在荡秋千。公园里真热闹！'
    },
    {
      id: 8,
      title: '快乐的春游',
      emoji: '🚌',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/快乐的春游',
      description: '春天来了，老师带着同学们去春游，大家背着书包，唱着歌，开心极了。',
      hint: '春游去哪里？同学们看到了什么？大家玩得开心吗？',
      keywords: ['春游', '春天', '同学', '开心', '游玩'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 2,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '谁带着同学们去春游？', options: ['A. 妈妈', 'B. 爸爸', 'C. 老师', 'D. 校长'], answer: 'C' },
        { question: '同学们背着什么？', options: ['A. 书包', 'B. 篮子', 'C. 箱子', 'D. 帽子'], answer: 'A' },
        { question: '大家的心情怎么样？', options: ['A. 难过', 'B. 开心', 'C. 生气', 'D. 害怕'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '春天来了，老师带我们去______。', options: ['A. 春游', 'B. 秋游', 'C. 冬游', 'D. 夏游'], answer: 'A' },
        { sentence: '我们背着______，唱着歌。', options: ['A. 书包', 'B. 雨伞', 'C. 帽子', 'D. 水壶'], answer: 'A' }
      ],
      sample: '春天来了！老师带着我们全班同学去春游。我们背着书包，唱着欢快的歌，坐上了大巴车。一路上，我们看到了绿油油的田野和五颜六色的花朵。到了目的地，我们在草地上做游戏、野餐，开心极了！'
    },
    {
      id: 9,
      title: '迷人的郊外',
      emoji: '🏞️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/迷人的郊外',
      description: '周末，爸爸妈妈带我去郊外玩，那里有清清的小河、绿绿的草地，空气特别新鲜。',
      hint: '郊外是什么样子的？你在郊外看到了什么？心情怎么样？',
      keywords: ['郊外', '田野', '小河', '新鲜', '快乐'],
      difficulty: 'medium',
      difficultyText: '⭐⭐ 中等',
      grade: 2,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '谁带我去郊外玩？', options: ['A. 老师', 'B. 同学', 'C. 爸爸妈妈', 'D. 爷爷奶奶'], answer: 'C' },
        { question: '郊外有什么？', options: ['A. 高楼大厦', 'B. 小河和草地', 'C. 商店', 'D. 学校'], answer: 'B' },
        { question: '郊外的空气怎么样？', options: ['A. 浑浊', 'B. 新鲜', 'C. 难闻', 'D. 刺鼻'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '周末，爸爸妈妈带我去______玩。', options: ['A. 郊外', 'B. 公园', 'C. 超市', 'D. 商场'], answer: 'A' },
        { sentence: '郊外有______的小河。', options: ['A. 黑黑', 'B. 清清', 'C. 脏脏', 'D. 臭臭'], answer: 'B' }
      ],
      sample: '周末，爸爸妈妈带我去郊外玩。郊外的风景真美啊！有清清的小河，绿绿的草地，还有连绵的小山。我们在草地上铺了一块布，拿出准备好的食物开始野餐。我还看到了几只小兔子在草地上蹦蹦跳跳，可爱极了！'
    },
    {
      id: 10,
      title: '秋天的落叶',
      emoji: '🍁',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=写景类/秋天的落叶',
      description: '秋天到了，树叶纷纷从树上落下来，有的像蝴蝶，有的像小船，美丽极了。',
      hint: '落叶是什么颜色的？落叶像什么？小朋友们会用落叶做什么？',
      keywords: ['落叶', '秋天', '金黄', '收集', '美丽'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'scenery',
      questions: [
        { question: '落叶是什么颜色的？', options: ['A. 绿色', 'B. 金黄色', 'C. 蓝色', 'D. 紫色'], answer: 'B' },
        { question: '落叶像什么？', options: ['A. 飞机', 'B. 蝴蝶和小船', 'C. 汽车', 'D. 房子'], answer: 'B' },
        { question: '小朋友们在做什么？', options: ['A. 睡觉', 'B. 收集落叶', 'C. 看电视', 'D. 吃饭'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '秋天到了，______从树上落下来。', options: ['A. 苹果', 'B. 树叶', 'C. 花朵', 'D. 小鸟'], answer: 'B' },
        { sentence: '落叶像______一样飞舞。', options: ['A. 蝴蝶', 'B. 石头', 'C. 书本', 'D. 书包'], answer: 'A' }
      ],
      sample: '秋天到了，树上的叶子变黄了。秋风一吹，树叶纷纷飘落下来。有的像蝴蝶在飞舞，有的像小船在飘荡。小朋友们捡起一片片落叶，有的夹在书里做书签，有的拼成美丽的图画。秋天的落叶真美丽！'
    },
    {
      id: 11,
      title: '帮妈妈做家务',
      emoji: '🧹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/帮妈妈做家务',
      description: '周末的早上，小明看见妈妈在打扫房间，他主动拿起抹布帮妈妈擦桌子。',
      hint: '想想小明是怎么帮助妈妈的？妈妈会说什么？小明的心情怎么样？',
      keywords: ['帮助', '妈妈', '打扫', '开心', '懂事'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '谁在做家务？', options: ['A. 小明', 'B. 爸爸', 'C. 爷爷', 'D. 奶奶'], answer: 'A' },
        { question: '小明用什么擦桌子？', options: ['A. 毛巾', 'B. 抹布', 'C. 纸巾', 'D. 衣服'], answer: 'B' },
        { question: '小明是个什么样的孩子？', options: ['A. 调皮', 'B. 懂事', 'C. 懒惰', 'D. 粗心'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '小明帮______做家务。', options: ['A. 爸爸', 'B. 妈妈', 'C. 爷爷', 'D. 奶奶'], answer: 'B' },
        { sentence: '小明用______擦桌子。', options: ['A. 抹布', 'B. 牙刷', 'C. 梳子', 'D. 勺子'], answer: 'A' }
      ],
      sample: '周末的早上，妈妈在打扫房间。小明看见了，主动跑过去说："妈妈，我来帮你！"他拿起抹布，认真地擦桌子。妈妈笑着说："小明真是个懂事的好孩子！"小明听了，心里美滋滋的。'
    },
    {
      id: 12,
      title: '给爷爷奶奶捶背',
      emoji: '❤️',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/给爷爷奶奶捶背',
      description: '爷爷奶奶辛苦了一天，小红端来一杯热茶，还给他们捶捶背。',
      hint: '小红是怎么做的？爷爷奶奶说了什么？一家人的心情怎么样？',
      keywords: ['孝顺', '爷爷奶奶', '捶背', '关爱', '温暖'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '谁给爷爷奶奶捶背？', options: ['A. 爸爸', 'B. 妈妈', 'C. 小红', 'D. 哥哥'], answer: 'C' },
        { question: '小红还端来了什么？', options: ['A. 咖啡', 'B. 热茶', 'C. 果汁', 'D. 牛奶'], answer: 'B' },
        { question: '小红是个什么样的孩子？', options: ['A. 调皮', 'B. 孝顺', 'C. 懒惰', 'D. 粗心'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '小红给______捶背。', options: ['A. 爸爸妈妈', 'B. 爷爷奶奶', 'C. 老师', 'D. 同学'], answer: 'B' },
        { sentence: '小红端来一杯______。', options: ['A. 热茶', 'B. 冷水', 'C. 可乐', 'D. 果汁'], answer: 'A' }
      ],
      sample: '晚上，爷爷奶奶辛苦了一天，坐在沙发上休息。小红看到了，端来一杯热茶给爷爷奶奶。然后她轻轻地给爷爷捶背，又给奶奶捶背。爷爷奶奶笑着说："我们的小红长大了，真孝顺！"一家人都很开心。'
    },
    {
      id: 13,
      title: '放学路上',
      emoji: '👫',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/放学路上',
      description: '放学了，小明和小红一起走在回家的路上，他们开心地聊着今天在学校发生的事情。',
      hint: '放学路上有什么？他们在聊什么？心情怎么样？',
      keywords: ['放学', '路上', '同学', '聊天', '开心'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '谁一起走在放学路上？', options: ['A. 小明和小红', 'B. 爸爸和妈妈', 'C. 老师和同学', 'D. 爷爷和奶奶'], answer: 'A' },
        { question: '他们在做什么？', options: ['A. 睡觉', 'B. 聊天', 'C. 跑步', 'D. 吃饭'], answer: 'B' },
        { question: '他们的心情怎么样？', options: ['A. 难过', 'B. 生气', 'C. 开心', 'D. 害怕'], answer: 'C' }
      ],
      sentenceFillBlank: [
        { sentence: '放学了，小明和______一起回家。', options: ['A. 小红', 'B. 小刚', 'C. 小丽', 'D. 小强'], answer: 'A' },
        { sentence: '他们开心地______着。', options: ['A. 睡觉', 'B. 聊天', 'C. 跑步', 'D. 吃饭'], answer: 'B' }
      ],
      sample: '放学了，小明和小红一起走在回家的路上。他们开心地聊着今天在学校发生的事情。小明说："今天数学课真有趣！"小红说："我最喜欢美术课了！"他们一边走一边笑，不知不觉就到家了。'
    },
    {
      id: 14,
      title: '课间十分钟',
      emoji: '⚽',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/课间十分钟',
      description: '下课铃响了，同学们像小鸟一样飞出教室，操场上顿时热闹起来。',
      hint: '操场上有哪些活动？同学们在玩什么游戏？大家的心情怎么样？',
      keywords: ['课间', '操场', '游戏', '快乐', '同学'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '下课铃响后同学们去哪里？', options: ['A. 图书馆', 'B. 操场', 'C. 教室', 'D. 办公室'], answer: 'B' },
        { question: '同学们像什么一样飞出教室？', options: ['A. 小鸟', 'B. 小猫', 'C. 小狗', 'D. 小兔'], answer: 'A' },
        { question: '操场上怎么样？', options: ['A. 安静', 'B. 热闹', 'C. 冷清', 'D. 黑暗'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '下课铃响了，同学们像______一样飞出教室。', options: ['A. 小鸟', 'B. 乌龟', 'C. 蜗牛', 'D. 蚂蚁'], answer: 'A' },
        { sentence: '操场上顿时______起来。', options: ['A. 安静', 'B. 热闹', 'C. 冷清', 'D. 黑暗'], answer: 'B' }
      ],
      sample: '下课铃响了！同学们像小鸟一样飞出教室，跑到操场上。操场上顿时热闹起来。有的同学在跳绳，有的在踢毽子，还有的在玩老鹰捉小鸡。大家笑着、跑着，度过了快乐的课间十分钟。'
    },
    {
      id: 15,
      title: '打扫教室值日',
      emoji: '🧹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/打扫教室值日',
      description: '放学后，值日生们留下来打扫教室，他们分工合作，把教室打扫得干干净净。',
      hint: '同学们在做什么？谁在扫地？谁在擦黑板？教室打扫完后是什么样子？',
      keywords: ['值日', '打扫', '教室', '责任', '合作'],
      difficulty: 'medium',
      difficultyText: '⭐⭐ 中等',
      grade: 2,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '什么时候打扫教室？', options: ['A. 上课前', 'B. 放学后', 'C. 午休时', 'D. 早上'], answer: 'B' },
        { question: '谁在打扫教室？', options: ['A. 老师', 'B. 值日生', 'C. 校长', 'D. 家长'], answer: 'B' },
        { question: '教室打扫完后怎么样？', options: ['A. 乱七八糟', 'B. 干干净净', 'C. 脏兮兮', 'D. 空荡荡'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '放学后，______留下来打扫教室。', options: ['A. 值日生', 'B. 老师', 'C. 校长', 'D. 家长'], answer: 'A' },
        { sentence: '他们______合作，把教室打扫干净。', options: ['A. 分工', 'B. 各自', 'C. 单独', 'D. 随便'], answer: 'A' }
      ],
      sample: '放学后，值日生们开始打扫教室。小明负责扫地，小红负责擦黑板，小刚负责擦桌子，小丽负责倒垃圾。他们分工合作，不一会儿就把教室打扫得干干净净。看着整洁的教室，大家都开心地笑了。'
    },
    {
      id: 16,
      title: '运动会比赛',
      emoji: '🏃',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/运动会比赛',
      description: '学校举行秋季运动会，操场上人山人海，同学们都在为自己班的运动员加油。',
      hint: '运动会上有哪些比赛项目？你参加了什么？比赛的结果怎么样？',
      keywords: ['运动会', '比赛', '加油', '团结', '荣誉'],
      difficulty: 'medium',
      difficultyText: '⭐⭐ 中等',
      grade: 2,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '学校举行什么运动会？', options: ['A. 春季', 'B. 夏季', 'C. 秋季', 'D. 冬季'], answer: 'C' },
        { question: '同学们在做什么？', options: ['A. 睡觉', 'B. 为运动员加油', 'C. 上课', 'D. 吃饭'], answer: 'B' },
        { question: '操场上怎么样？', options: ['A. 冷冷清清', 'B. 人山人海', 'C. 空空荡荡', 'D. 安安静静'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '学校举行______运动会。', options: ['A. 春季', 'B. 秋季', 'C. 冬季', 'D. 夏季'], answer: 'B' },
        { sentence: '同学们在为______加油。', options: ['A. 运动员', 'B. 老师', 'C. 校长', 'D. 家长'], answer: 'A' }
      ],
      sample: '学校举行秋季运动会！操场上人山人海，热闹极了。跑道上，运动员们在奋力奔跑；看台上，同学们挥舞着彩旗，大声喊着："加油！加油！"每个班级都团结一心，为了班级的荣誉努力拼搏。运动会真精彩！'
    },
    {
      id: 17,
      title: '节约用水',
      emoji: '💧',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/节约用水',
      description: '小明洗完手后，发现水龙头没有关好，他赶紧跑过去把水龙头拧紧。',
      hint: '为什么要节约用水？小明是怎么做的？你平时是怎么节约用水的？',
      keywords: ['节约', '用水', '环保', '珍惜', '好习惯'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 2,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '小明发现什么没关好？', options: ['A. 窗户', 'B. 水龙头', 'C. 门', 'D. 灯'], answer: 'B' },
        { question: '小明是怎么做的？', options: ['A. 不管它', 'B. 拧紧水龙头', 'C. 走开', 'D. 告诉老师'], answer: 'B' },
        { question: '这是一个什么好习惯？', options: ['A. 节约用水', 'B. 浪费水', 'C. 调皮捣蛋', 'D. 粗心大意'], answer: 'A' }
      ],
      sentenceFillBlank: [
        { sentence: '小明洗完手，发现______没关好。', options: ['A. 水龙头', 'B. 窗户', 'C. 门', 'D. 灯'], answer: 'A' },
        { sentence: '他赶紧把水龙头______。', options: ['A. 拧紧', 'B. 打开', 'C. 打碎', 'D. 不管'], answer: 'A' }
      ],
      sample: '小明洗完手后，发现水龙头没有关好，水在滴滴答答地流着。他赶紧跑过去，把水龙头拧紧。妈妈看到了，笑着说："小明真懂事，知道节约用水！"小明说："我们要珍惜每一滴水。"节约用水是个好习惯！'
    },
    {
      id: 18,
      title: '爱护花草树木',
      emoji: '🌱',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/爱护花草树木',
      description: '小红看到公园里的小花小草渴了，她提着水桶给它们浇水。',
      hint: '花草树木有什么作用？小红是怎么爱护它们的？我们应该怎么做？',
      keywords: ['爱护', '花草', '树木', '环保', '绿化'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '小红在做什么？', options: ['A. 摘花', 'B. 浇水', 'C. 拔草', 'D. 踩花'], answer: 'B' },
        { question: '小红提着什么浇水？', options: ['A. 杯子', 'B. 水桶', 'C. 书包', 'D. 帽子'], answer: 'B' },
        { question: '我们应该怎么样对待花草？', options: ['A. 爱护', 'B. 破坏', 'C. 采摘', 'D. 踩踏'], answer: 'A' }
      ],
      sentenceFillBlank: [
        { sentence: '小红提着______给小花浇水。', options: ['A. 水桶', 'B. 书包', 'C. 帽子', 'D. 雨伞'], answer: 'A' },
        { sentence: '我们要______花草树木。', options: ['A. 爱护', 'B. 破坏', 'C. 采摘', 'D. 踩踏'], answer: 'A' }
      ],
      sample: '春天来了，公园里的小花小草都发芽了。小红看到它们渴了，就提着水桶给它们浇水。她轻轻地浇着水，生怕把小花弄坏了。花草树木是我们的好朋友，我们要好好爱护它们！'
    },
    {
      id: 19,
      title: '助人为乐帮同学',
      emoji: '🤝',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/助人为乐帮同学',
      description: '小明看到同学搬不动书，主动过去帮忙，他们一起把书搬到了教室。',
      hint: '同学遇到了什么困难？小明是怎么帮助他的？他们的心情怎么样？',
      keywords: ['帮助', '同学', '助人为乐', '友谊', '团结'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 2,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '同学遇到了什么困难？', options: ['A. 搬不动书', 'B. 找不到路', 'C. 没带书包', 'D. 忘带课本'], answer: 'A' },
        { question: '小明是怎么做的？', options: ['A. 走开', 'B. 主动帮忙', 'C. 嘲笑他', 'D. 告诉老师'], answer: 'B' },
        { question: '这是什么精神？', options: ['A. 助人为乐', 'B. 自私自利', 'C. 调皮捣蛋', 'D. 粗心大意'], answer: 'A' }
      ],
      sentenceFillBlank: [
        { sentence: '小明看到同学______，主动去帮忙。', options: ['A. 搬不动书', 'B. 在睡觉', 'C. 在吃饭', 'D. 在玩耍'], answer: 'A' },
        { sentence: '他们一起把书______到教室。', options: ['A. 搬', 'B. 扔', 'C. 踢', 'D. 踩'], answer: 'A' }
      ],
      sample: '放学了，小刚抱着一摞厚厚的书，累得满头大汗。小明看到了，赶紧跑过去说："我来帮你！"他们一人抱一半，一起把书搬到了教室。小刚感激地说："谢谢你！"小明笑着说："不用谢，我们是同学嘛！"助人为乐真快乐！'
    },
    {
      id: 20,
      title: '过六一儿童节',
      emoji: '🎉',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/过六一儿童节',
      description: '六一儿童节到了，教室里挂满了气球和彩带，同学们穿着漂亮的衣服，一起庆祝节日。',
      hint: '六一儿童节是什么日子？同学们是怎么庆祝的？大家开心吗？',
      keywords: ['儿童节', '快乐', '庆祝', '表演', '礼物'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '什么节日到了？', options: ['A. 春节', 'B. 六一儿童节', 'C. 中秋节', 'D. 国庆节'], answer: 'B' },
        { question: '教室里挂满了什么？', options: ['A. 衣服', 'B. 气球和彩带', 'C. 书本', 'D. 书包'], answer: 'B' },
        { question: '同学们心情怎么样？', options: ['A. 难过', 'B. 开心', 'C. 生气', 'D. 害怕'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '______儿童节到了！', options: ['A. 六一', 'B. 五一', 'C. 十一', 'D. 元旦'], answer: 'A' },
        { sentence: '教室里挂满了______和彩带。', options: ['A. 气球', 'B. 书本', 'C. 书包', 'D. 衣服'], answer: 'A' }
      ],
      sample: '六一儿童节到了！教室里挂满了五颜六色的气球和彩带，漂亮极了！同学们穿着漂亮的衣服，有的唱歌，有的跳舞，还有的表演魔术。老师还给我们发了礼物。今天真是开心的一天！'
    },
    {
      id: 21,
      title: '快乐的周末',
      emoji: '🎈',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/快乐的周末',
      description: '周末到了，爸爸妈妈带我去公园野餐，我们带了好吃的食物，玩得非常开心。',
      hint: '周末你喜欢做什么？和谁一起？发生了什么有趣的事情？',
      keywords: ['周末', '快乐', '家人', '野餐', '玩耍'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '谁带我去公园？', options: ['A. 老师', 'B. 爸爸妈妈', 'C. 同学', 'D. 爷爷奶奶'], answer: 'B' },
        { question: '我们去公园做什么？', options: ['A. 上课', 'B. 野餐', 'C. 睡觉', 'D. 工作'], answer: 'B' },
        { question: '我们的心情怎么样？', options: ['A. 难过', 'B. 开心', 'C. 生气', 'D. 害怕'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '周末到了，爸爸妈妈带我去______野餐。', options: ['A. 公园', 'B. 学校', 'C. 超市', 'D. 医院'], answer: 'A' },
        { sentence: '我们带了______的食物。', options: ['A. 好吃', 'B. 难吃', 'C. 过期', 'D. 冰冷'], answer: 'A' }
      ],
      sample: '周末到了，天气真好！爸爸妈妈带我去公园野餐。我们带了三明治、水果和饮料。我在草地上跑啊跑，还和爸爸妈妈一起玩游戏。中午我们坐在垫子上吃东西，说说笑笑，开心极了！'
    },
    {
      id: 22,
      title: '公交车上',
      emoji: '🚌',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=生活记事类/公交车上',
      description: '小明乘坐公交车去外婆家，看到一位老奶奶上车，他马上站起来让座。',
      hint: '车上还有哪些人？老奶奶说了什么？小明的心情怎么样？',
      keywords: ['公交车', '让座', '礼貌', '尊老', '善良'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 2,
      category: 'single',
      subCategory: 'life',
      questions: [
        { question: '小明在做什么？', options: ['A. 开车', 'B. 让座', 'C. 睡觉', 'D. 吃东西'], answer: 'B' },
        { question: '小明给谁让座？', options: ['A. 小朋友', 'B. 老奶奶', 'C. 叔叔', 'D. 阿姨'], answer: 'B' },
        { question: '小明是个什么样的孩子？', options: ['A. 调皮', 'B. 有礼貌', 'C. 自私', 'D. 懒惰'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '小明在______上给老奶奶让座。', options: ['A. 公交车', 'B. 火车', 'C. 飞机', 'D. 自行车'], answer: 'A' },
        { sentence: '小明是个______的孩子。', options: ['A. 有礼貌', 'B. 调皮', 'C. 自私', 'D. 懒惰'], answer: 'A' }
      ],
      sample: '小明坐公交车去外婆家。一位老奶奶上车了，车上已经没有座位了。小明马上站起来说："奶奶，您坐这里吧！"老奶奶笑着说："谢谢你，小朋友！"小明说："不用谢！"车上的人都夸小明是个有礼貌的好孩子。'
    },
    {
      id: 23,
      title: '小白兔采蘑菇',
      emoji: '🐰',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=动物童话类/小白兔采蘑菇',
      description: '小白兔提着篮子来到森林里采蘑菇，她仔细地挑选着又大又新鲜的蘑菇。',
      hint: '小白兔在哪里采蘑菇？蘑菇是什么样子的？她采了多少蘑菇？',
      keywords: ['小白兔', '蘑菇', '森林', '采蘑菇', '可爱'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'animal',
      questions: [
        { question: '谁在采蘑菇？', options: ['A. 小猫', 'B. 小白兔', 'C. 小狗', 'D. 小鸡'], answer: 'B' },
        { question: '小白兔在哪里采蘑菇？', options: ['A. 花园', 'B. 森林', 'C. 家里', 'D. 学校'], answer: 'B' },
        { question: '小白兔提着什么？', options: ['A. 书包', 'B. 篮子', 'C. 帽子', 'D. 雨伞'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '______提着篮子去采蘑菇。', options: ['A. 小白兔', 'B. 小猫', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
        { sentence: '她在______里采蘑菇。', options: ['A. 森林', 'B. 花园', 'C. 家里', 'D. 学校'], answer: 'A' }
      ],
      sample: '一天，小白兔提着篮子来到森林里采蘑菇。森林里的蘑菇真多啊！有红的、黄的、白的。小白兔仔细地挑选着又大又新鲜的蘑菇，放进篮子里。不一会儿，篮子就装满了。小白兔开心地提着篮子回家了。'
    },
    {
      id: 24,
      title: '小猫钓鱼',
      emoji: '🐱',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=动物童话类/小猫钓鱼',
      description: '小猫坐在河边钓鱼，一开始它很着急，后来它耐心等待，终于钓到了一条大鱼。',
      hint: '小猫一开始是怎么做的？后来它怎么钓到鱼的？这个故事告诉我们什么道理？',
      keywords: ['小猫', '钓鱼', '耐心', '坚持', '故事'],
      difficulty: 'medium',
      difficultyText: '⭐⭐ 中等',
      grade: 2,
      category: 'single',
      subCategory: 'animal',
      questions: [
        { question: '谁在钓鱼？', options: ['A. 小狗', 'B. 小猫', 'C. 小兔', 'D. 小鸟'], answer: 'B' },
        { question: '小猫一开始怎么样？', options: ['A. 耐心', 'B. 着急', 'C. 开心', 'D. 难过'], answer: 'B' },
        { question: '小猫最后钓到鱼了吗？', options: ['A. 没有', 'B. 钓到了', 'C. 不知道', 'D. 可能'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '小猫在______边钓鱼。', options: ['A. 河', 'B. 海', 'C. 湖', 'D. 池'], answer: 'A' },
        { sentence: '钓鱼需要______。', options: ['A. 耐心', 'B. 着急', 'C. 粗心', 'D. 调皮'], answer: 'A' }
      ],
      sample: '小猫坐在河边钓鱼。一开始它很着急，总想着马上钓到鱼。后来妈妈告诉它："钓鱼需要耐心。"小猫听了，安静地等待着。终于，鱼漂动了！小猫用力一提，钓到了一条大鱼。这个故事告诉我们：做事情要有耐心。'
    },
    {
      id: 25,
      title: '小鸡捉虫子',
      emoji: '🐥',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=动物童话类/小鸡捉虫子',
      description: '鸡妈妈带着小鸡们来到草地上，小鸡们叽叽喳喳地找虫子吃。',
      hint: '小鸡们是怎么捉虫子的？它们捉到虫子了吗？鸡妈妈在哪里？',
      keywords: ['小鸡', '虫子', '草地', '可爱', '觅食'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'animal',
      questions: [
        { question: '谁带着小鸡们？', options: ['A. 鸡爸爸', 'B. 鸡妈妈', 'C. 鸭妈妈', 'D. 鹅妈妈'], answer: 'B' },
        { question: '小鸡们在做什么？', options: ['A. 睡觉', 'B. 捉虫子', 'C. 唱歌', 'D. 跳舞'], answer: 'B' },
        { question: '小鸡们在哪里捉虫子？', options: ['A. 水里', 'B. 草地上', 'C. 树上', 'D. 天上'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '鸡妈妈带着______们捉虫子。', options: ['A. 小鸡', 'B. 小鸭', 'C. 小狗', 'D. 小猫'], answer: 'A' },
        { sentence: '它们在______上找虫子。', options: ['A. 草地', 'B. 水里', 'C. 树上', 'D. 天上'], answer: 'A' }
      ],
      sample: '鸡妈妈带着小鸡们来到草地上。小鸡们叽叽喳喳地叫着，在草地上找虫子吃。它们用尖尖的嘴巴啄来啄去，不一会儿就捉到了好多虫子。鸡妈妈在旁边看着，开心地笑了。小鸡们吃得饱饱的，真可爱！'
    },
    {
      id: 26,
      title: '小鸟筑巢',
      emoji: '🐦',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20illustration%20cartoon%20style%20education%20colorful&image_size=square&topic=动物童话类/小鸟筑巢',
      description: '春天来了，小鸟们忙着在树上筑巢，它们用树枝和草叶搭了一个温暖的家。',
      hint: '小鸟在哪里筑巢？它们用什么材料筑巢？鸟巢是什么样子的？',
      keywords: ['小鸟', '筑巢', '春天', '家', '温暖'],
      difficulty: 'easy',
      difficultyText: '⭐ 简单',
      grade: 1,
      category: 'single',
      subCategory: 'animal',
      questions: [
        { question: '小鸟在哪里筑巢？', options: ['A. 地上', 'B. 树上', 'C. 水里', 'D. 房子里'], answer: 'B' },
        { question: '小鸟用什么筑巢？', options: ['A. 石头', 'B. 树枝和草叶', 'C. 泥土', 'D. 羽毛'], answer: 'B' },
        { question: '鸟巢是什么样的？', options: ['A. 冰冷的', 'B. 温暖的', 'C. 透明的', 'D. 方形的'], answer: 'B' }
      ],
      sentenceFillBlank: [
        { sentence: '小鸟在______上筑巢。', options: ['A. 地上', 'B. 树上', 'C. 水里', 'D. 房子里'], answer: 'B' },
        { sentence: '小鸟用树枝和______筑巢。', options: ['A. 石头', 'B. 草叶', 'C. 泥土', 'D. 羽毛'], answer: 'B' }
      ],
      sample: '春天来了，小鸟们忙着在树上筑巢。它们用尖尖的嘴巴叼来树枝和草叶，一点一点搭起了一个温暖的家。鸟巢圆圆的，像一个小碗。鸟妈妈坐在巢里，等着鸟宝宝的出生。'
    }
  ]
};