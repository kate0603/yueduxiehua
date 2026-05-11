const imageTopics = {
  1: { 
    id: 1, 
    title: '公交车上的文明', 
    emoji: '🚌', 
    image: '/images/公交车上的文明.jpg',
    elements: {
      when: '放学后',
      where: '公交车上',
      who: '小明和老奶奶',
      what: '小明给老奶奶让座',
      result: '老奶奶感谢小明'
    },
    elementsQuestions: [
      { question: '故事发生在什么时候？', options: ['A. 放学后', 'B. 早上', 'C. 中午', 'D. 晚上'], answer: 'A' },
      { question: '故事发生在哪里？', options: ['A. 公交车上', 'B. 公园里', 'C. 学校里', 'D. 家里'], answer: 'A' },
      { question: '故事里有谁？', options: ['A. 小明和老奶奶', 'B. 小红和老师', 'C. 爸爸和妈妈', 'D. 同学和校长'], answer: 'A' },
      { question: '发生了什么事？', options: ['A. 小明给老奶奶让座', 'B. 小明在看书', 'C. 老奶奶在唱歌', 'D. 大家在跳舞'], answer: 'A' },
      { question: '结果怎么样？', options: ['A. 老奶奶感谢小明', 'B. 小明哭了', 'C. 公交车开走了', 'D. 下雨了'], answer: 'A' }
    ],
    senses: {
      see: '拥挤的公交车，一位老奶奶上车',
      hear: '公交车的报站声，老奶奶的感谢声',
      smell: '清新的空气',
      taste: '无',
      feel: '帮助他人很快乐'
    },
    sensesQuestions: [
      { question: '看到了什么？', options: ['A. 拥挤的公交车，一位老奶奶上车', 'B. 美丽的花朵', 'C. 飞翔的小鸟', 'D. 蓝蓝的天空'], answer: 'A' },
      { question: '听到了什么？', options: ['A. 公交车的报站声，老奶奶的感谢声', 'B. 小鸟的歌声', 'C. 下雨的声音', 'D. 闹钟的声音'], answer: 'A' },
      { question: '闻到了什么？', options: ['A. 清新的空气', 'B. 花香', 'C. 饭菜香', 'D. 香水味'], answer: 'A' },
      { question: '尝到了什么？', options: ['A. 无', 'B. 甜甜的糖果', 'C. 酸酸的苹果', 'D. 咸咸的饼干'], answer: 'A' },
      { question: '感觉到什么？', options: ['A. 帮助他人很快乐', 'B. 天气很冷', 'C. 肚子很饿', 'D. 很累'], answer: 'A' }
    ],
    sentences: [
      '放学后，小明坐上了回家的公交车。',
      '车上很拥挤，一位老奶奶慢慢走了上来。',
      '小明看到后，马上站起来给老奶奶让座。',
      '老奶奶笑着说："谢谢你，小朋友！"',
      '小明心里暖洋洋的，觉得帮助别人真开心！'
    ],
    sentencesFillBlank: [
      { sentence: '____后，小明坐上了回家的公交车。', blankAnswer: '放学', options: ['A. 上学', 'B. 放学', 'C. 吃饭', 'D. 睡觉'], answer: 'B' },
      { sentence: '车上很____，一位老奶奶慢慢走了上来。', blankAnswer: '拥挤', options: ['A. 宽敞', 'B. 拥挤', 'C. 安静', 'D. 热闹'], answer: 'B' },
      { sentence: '小明看到后，马上____起来给老奶奶让座。', blankAnswer: '站', options: ['A. 坐', 'B. 站', 'C. 跑', 'D. 跳'], answer: 'B' },
      { sentence: '老奶奶笑着说："____你，小朋友！"', blankAnswer: '谢谢', options: ['A. 谢谢', 'B. 你好', 'C. 再见', 'D. 对不起'], answer: 'A' },
      { sentence: '小明心里暖洋洋的，觉得____别人真开心！', blankAnswer: '帮助', options: ['A. 欺负', 'B. 帮助', 'C. 嘲笑', 'D. 忽视'], answer: 'B' }
    ],
    sample: '放学后，小明像往常一样坐上了回家的公交车。今天车上特别拥挤，连一个空位都没有。就在这时，一位白发苍苍的老奶奶慢慢走上车，她手里还拎着一个袋子，看起来很吃力。\n\n小明看到了，连忙站起来，笑着对老奶奶说："奶奶，您坐这里吧！"老奶奶感激地看着小明，连声道谢："谢谢你，小朋友，你真是个懂事的好孩子！"\n\n小明扶着老奶奶坐下，自己则站在一旁。虽然站着有点累，但小明心里却暖暖的。他想起老师说过，要做一个乐于助人的人，今天他做到了！'
  },
  2: { 
    id: 2, 
    title: '冬天堆雪人', 
    emoji: '⛄', 
    image: '/images/冬天堆雪人.jpg',
    elements: {
      when: '冬天的早晨',
      where: '院子里',
      who: '小红和小明',
      what: '堆雪人',
      result: '雪人堆好了，他们很开心'
    },
    elementsQuestions: [
      { question: '故事发生在什么时候？', options: ['A. 冬天的早晨', 'B. 夏天的中午', 'C. 秋天的下午', 'D. 春天的傍晚'], answer: 'A' },
      { question: '故事发生在哪里？', options: ['A. 院子里', 'B. 公园里', 'C. 学校里', 'D. 房间里'], answer: 'A' },
      { question: '故事里有谁？', options: ['A. 小红和小明', 'B. 爸爸和妈妈', 'C. 老师和同学', 'D. 爷爷和奶奶'], answer: 'A' },
      { question: '发生了什么事？', options: ['A. 堆雪人', 'B. 放风筝', 'C. 踢足球', 'D. 游泳'], answer: 'A' },
      { question: '结果怎么样？', options: ['A. 雪人堆好了，他们很开心', 'B. 雪融化了', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
    ],
    senses: {
      see: '白茫茫的雪，可爱的雪人',
      hear: '小伙伴的笑声',
      smell: '清新的雪味',
      taste: '冰凉的雪',
      feel: '寒冷但快乐'
    },
    sensesQuestions: [
      { question: '看到了什么？', options: ['A. 白茫茫的雪，可爱的雪人', 'B. 绿油油的草地', 'C. 五颜六色的花朵', 'D. 蓝蓝的大海'], answer: 'A' },
      { question: '听到了什么？', options: ['A. 小伙伴的笑声', 'B. 雷声', 'C. 风声', 'D. 雨声'], answer: 'A' },
      { question: '闻到了什么？', options: ['A. 清新的雪味', 'B. 饭菜香', 'C. 花香', 'D. 烟味'], answer: 'A' },
      { question: '尝到了什么？', options: ['A. 冰凉的雪', 'B. 甜甜的糖', 'C. 酸酸的柠檬', 'D. 苦苦的药'], answer: 'A' },
      { question: '感觉到什么？', options: ['A. 寒冷但快乐', 'B. 很热', 'C. 很饿', 'D. 很困'], answer: 'A' }
    ],
    sentences: [
      '冬天来了，外面下起了大雪。',
      '小红和小明在院子里堆雪人。',
      '他们滚了三个大雪球做雪人的身体。',
      '用胡萝卜做雪人的鼻子，用纽扣做眼睛。',
      '雪人堆好了，他们围着雪人开心地跳舞。'
    ],
    sentencesFillBlank: [
      { sentence: '____天来了，外面下起了大雪。', blankAnswer: '冬', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'D' },
      { sentence: '小红和小明在____里堆雪人。', blankAnswer: '院子', options: ['A. 房间', 'B. 院子', 'C. 教室', 'D. 商场'], answer: 'B' },
      { sentence: '他们滚了三个大雪球做雪人的____。', blankAnswer: '身体', options: ['A. 头', 'B. 身体', 'C. 手', 'D. 脚'], answer: 'B' },
      { sentence: '用____做雪人的鼻子，用纽扣做眼睛。', blankAnswer: '胡萝卜', options: ['A. 苹果', 'B. 香蕉', 'C. 胡萝卜', 'D. 土豆'], answer: 'C' },
      { sentence: '雪人堆好了，他们围着雪人____地跳舞。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' }
    ],
    sample: '冬天来了！一场大雪过后，整个世界都变成了白茫茫的一片。小红和小明兴奋地跑到院子里，决定堆一个大大的雪人。\n\n他们先滚了一个最大的雪球当雪人的身体，又滚了一个中等的雪球当雪人的肚子，最后滚了一个小雪球当雪人的头。小红从家里拿来胡萝卜当雪人的鼻子，小明找出两颗纽扣当雪人的眼睛。他们还找来了一顶帽子和一条围巾给雪人戴上。\n\n看着可爱的雪人，小红和小明开心地笑了。他们围着雪人唱歌跳舞，度过了一个快乐的冬天早晨。'
  },
  3: { 
    id: 3, 
    title: '放风筝', 
    emoji: '🪁', 
    image: '/images/放风筝.jpg',
    elements: {
      when: '春天的下午',
      where: '公园',
      who: '小朋友们',
      what: '放风筝',
      result: '风筝飞得很高'
    },
    elementsQuestions: [
      { question: '故事发生在什么时候？', options: ['A. 春天的下午', 'B. 冬天的早晨', 'C. 夏天的晚上', 'D. 秋天的中午'], answer: 'A' },
      { question: '故事发生在哪里？', options: ['A. 公园', 'B. 学校', 'C. 家里', 'D. 商场'], answer: 'A' },
      { question: '故事里有谁？', options: ['A. 小朋友们', 'B. 老师', 'C. 爸爸妈妈', 'D. 爷爷奶奶'], answer: 'A' },
      { question: '发生了什么事？', options: ['A. 放风筝', 'B. 堆雪人', 'C. 画画', 'D. 看书'], answer: 'A' },
      { question: '结果怎么样？', options: ['A. 风筝飞得很高', 'B. 风筝掉下来了', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
    ],
    senses: {
      see: '五颜六色的风筝在空中飞翔',
      hear: '孩子们的欢笑声',
      smell: '花草的香气',
      taste: '无',
      feel: '春风拂面很舒服'
    },
    sensesQuestions: [
      { question: '看到了什么？', options: ['A. 五颜六色的风筝在空中飞翔', 'B. 白雪皑皑', 'C. 落叶纷飞', 'D. 烈日炎炎'], answer: 'A' },
      { question: '听到了什么？', options: ['A. 孩子们的欢笑声', 'B. 雷声', 'C. 风声', 'D. 读书声'], answer: 'A' },
      { question: '闻到了什么？', options: ['A. 花草的香气', 'B. 饭菜香', 'C. 香水味', 'D. 烟味'], answer: 'A' },
      { question: '尝到了什么？', options: ['A. 无', 'B. 甜甜的冰淇淋', 'C. 酸酸的橘子', 'D. 咸咸的薯片'], answer: 'A' },
      { question: '感觉到什么？', options: ['A. 春风拂面很舒服', 'B. 很热', 'C. 很冷', 'D. 很闷'], answer: 'A' }
    ],
    sentences: [
      '春天来了，公园里的小草绿了。',
      '小朋友们拿着风筝来到公园。',
      '他们把风筝放上天空。',
      '风筝飞得高高的，像小鸟一样。',
      '大家开心地跑着、笑着。'
    ],
    sentencesFillBlank: [
      { sentence: '____天来了，公园里的小草绿了。', blankAnswer: '春', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'A' },
      { sentence: '小朋友们拿着____来到公园。', blankAnswer: '风筝', options: ['A. 风筝', 'B. 足球', 'C. 篮球', 'D. 书本'], answer: 'A' },
      { sentence: '他们把风筝放上____。', blankAnswer: '天空', options: ['A. 水里', 'B. 天空', 'C. 地上', 'D. 树上'], answer: 'B' },
      { sentence: '风筝飞得高高的，像____一样。', blankAnswer: '小鸟', options: ['A. 小鸟', 'B. 飞机', 'C. 蝴蝶', 'D. 蜜蜂'], answer: 'A' },
      { sentence: '大家____地跑着、笑着。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' }
    ],
    sample: '春天来了，公园里一片生机勃勃。小明和小伙伴们带着风筝来到草地上，准备放风筝。\n\n小明的风筝是一只漂亮的蝴蝶，小红的风筝是一只老鹰。他们拿着风筝线，迎着风跑了起来。风筝慢慢飞上了天空，越飞越高。蝴蝶风筝和老鹰风筝在天空中翩翩起舞，好像在比赛谁飞得更高。\n\n小朋友们一边跑一边笑，风筝线在他们手中轻轻晃动。看着自己的风筝飞得那么高，他们心里别提多高兴了！'
  },
  4: { 
    id: 4, 
    title: '教室打扫卫生', 
    emoji: '🧹', 
    image: '/images/教室打扫卫生.jpg',
    elements: {
      when: '放学后',
      where: '教室',
      who: '同学们',
      what: '打扫卫生',
      result: '教室变得干干净净'
    },
    elementsQuestions: [
      { question: '故事发生在什么时候？', options: ['A. 放学后', 'B. 上课前', 'C. 午休时', 'D. 早上'], answer: 'A' },
      { question: '故事发生在哪里？', options: ['A. 教室', 'B. 操场', 'C. 图书馆', 'D. 食堂'], answer: 'A' },
      { question: '故事里有谁？', options: ['A. 同学们', 'B. 老师', 'C. 校长', 'D. 家长'], answer: 'A' },
      { question: '发生了什么事？', options: ['A. 打扫卫生', 'B. 上课', 'C. 考试', 'D. 运动会'], answer: 'A' },
      { question: '结果怎么样？', options: ['A. 教室变得干干净净', 'B. 教室很乱', 'C. 下雨了', 'D. 放学了'], answer: 'A' }
    ],
    senses: {
      see: '同学们在认真打扫',
      hear: '扫地声、擦窗户声',
      smell: '灰尘的味道',
      taste: '无',
      feel: '劳动很快乐'
    },
    sensesQuestions: [
      { question: '看到了什么？', options: ['A. 同学们在认真打扫', 'B. 同学们在上课', 'C. 同学们在玩耍', 'D. 教室空无一人'], answer: 'A' },
      { question: '听到了什么？', options: ['A. 扫地声、擦窗户声', 'B. 读书声', 'C. 歌声', 'D. 笑声'], answer: 'A' },
      { question: '闻到了什么？', options: ['A. 灰尘的味道', 'B. 花香', 'C. 饭菜香', 'D. 香水味'], answer: 'A' },
      { question: '尝到了什么？', options: ['A. 无', 'B. 甜甜的糖', 'C. 酸酸的苹果', 'D. 咸咸的饼干'], answer: 'A' },
      { question: '感觉到什么？', options: ['A. 劳动很快乐', 'B. 很累', 'C. 很饿', 'D. 很困'], answer: 'A' }
    ],
    sentences: [
      '放学后，同学们开始打扫教室。',
      '有的扫地，有的擦窗户，有的整理桌椅。',
      '大家分工合作，干得很认真。',
      '不一会儿，教室就变得干干净净。',
      '看着整洁的教室，大家心里很开心。'
    ],
    sentencesFillBlank: [
      { sentence: '____后，同学们开始打扫教室。', blankAnswer: '放学', options: ['A. 上学', 'B. 放学', 'C. 吃饭', 'D. 睡觉'], answer: 'B' },
      { sentence: '有的扫____，有的擦窗户，有的整理桌椅。', blankAnswer: '地', options: ['A. 地', 'B. 桌子', 'C. 椅子', 'D. 黑板'], answer: 'A' },
      { sentence: '大家____合作，干得很认真。', blankAnswer: '分工', options: ['A. 分工', 'B. 争吵', 'C. 玩耍', 'D. 休息'], answer: 'A' },
      { sentence: '不一会儿，教室就变得干干____。', blankAnswer: '净净', options: ['A. 净净', 'B. 脏脏', 'C. 乱乱', 'D. 黑黑'], answer: 'A' },
      { sentence: '看着整洁的教室，大家心里很____。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' }
    ],
    sample: '放学铃声响了，同学们没有马上回家，而是留在教室里打扫卫生。大家分工合作，有的拿扫帚扫地，有的拿抹布擦窗户，有的整理课桌椅。\n\n小红负责擦窗户，她站在椅子上，把窗户擦得亮晶晶的。小明负责扫地，他把地上的纸屑和灰尘都扫进簸箕里。小丽则把课桌椅摆得整整齐齐。\n\n经过大家的努力，教室变得窗明几净。看着干净整洁的教室，同学们虽然有点累，但心里都很开心。他们知道，劳动创造美好环境！'
  },
  5: { 
    id: 5, 
    title: '植树节', 
    emoji: '🌱', 
    image: '/images/植树节.jpg',
    elements: {
      when: '植树节',
      where: '山上',
      who: '老师和同学们',
      what: '植树',
      result: '小树苗种好了'
    },
    elementsQuestions: [
      { question: '故事发生在什么时候？', options: ['A. 植树节', 'B. 儿童节', 'C. 国庆节', 'D. 春节'], answer: 'A' },
      { question: '故事发生在哪里？', options: ['A. 山上', 'B. 学校', 'C. 公园', 'D. 家里'], answer: 'A' },
      { question: '故事里有谁？', options: ['A. 老师和同学们', 'B. 爸爸妈妈', 'C. 爷爷奶奶', 'D. 校长'], answer: 'A' },
      { question: '发生了什么事？', options: ['A. 植树', 'B. 种花', 'C. 浇水', 'D. 拔草'], answer: 'A' },
      { question: '结果怎么样？', options: ['A. 小树苗种好了', 'B. 下雨了', 'C. 天黑了', 'D. 大家回家了'], answer: 'A' }
    ],
    senses: {
      see: '绿油油的山坡，小树苗',
      hear: '挖土声、浇水声',
      smell: '泥土的清香',
      taste: '无',
      feel: '希望和快乐'
    },
    sensesQuestions: [
      { question: '看到了什么？', options: ['A. 绿油油的山坡，小树苗', 'B. 白雪皑皑', 'C. 高楼大厦', 'D. 大海'], answer: 'A' },
      { question: '听到了什么？', options: ['A. 挖土声、浇水声', 'B. 读书声', 'C. 歌声', 'D. 笑声'], answer: 'A' },
      { question: '闻到了什么？', options: ['A. 泥土的清香', 'B. 花香', 'C. 饭菜香', 'D. 香水味'], answer: 'A' },
      { question: '尝到了什么？', options: ['A. 无', 'B. 甜甜的水果', 'C. 酸酸的柠檬', 'D. 咸咸的零食'], answer: 'A' },
      { question: '感觉到什么？', options: ['A. 希望和快乐', 'B. 很累', 'C. 很饿', 'D. 很困'], answer: 'A' }
    ],
    sentences: [
      '植树节到了，老师带同学们去山上植树。',
      '大家拿着铁锹挖坑。',
      '把小树苗放进坑里，填上土。',
      '给小树苗浇上水。',
      '看着小树苗，大家心里充满希望。'
    ],
    sentencesFillBlank: [
      { sentence: '____节到了，老师带同学们去山上植树。', blankAnswer: '植树', options: ['A. 中秋', 'B. 植树', 'C. 清明', 'D. 端午'], answer: 'B' },
      { sentence: '大家拿着____挖坑。', blankAnswer: '铁锹', options: ['A. 铁锹', 'B. 锄头', 'C. 铲子', 'D. 镰刀'], answer: 'A' },
      { sentence: '把小树____放进坑里，填上土。', blankAnswer: '苗', options: ['A. 苗', 'B. 花', 'C. 草', 'D. 果'], answer: 'A' },
      { sentence: '给小树苗____上水。', blankAnswer: '浇', options: ['A. 浇', 'B. 倒', 'C. 泼', 'D. 洒'], answer: 'A' },
      { sentence: '看着小树苗，大家心里充满____。', blankAnswer: '希望', options: ['A. 失望', 'B. 希望', 'C. 绝望', 'D. 迷茫'], answer: 'B' }
    ],
    sample: '三月十二日是植树节，老师带领同学们来到山上植树。大家拿着铁锹、水桶，兴高采烈地来到山坡上。\n\n老师先教大家怎么挖坑，同学们学得很认真。小明挖了一个深深的坑，小红小心翼翼地把小树苗放进坑里，然后大家一起把土填回去。小刚提着水桶，给小树苗浇上水。\n\n一棵、两棵、三棵……山坡上种满了小树苗。看着这些绿油油的小树苗，同学们心里充满了希望。他们知道，再过几年，这些小树苗就会长成参天大树，让山变得更绿！'
  }
};

Page({
  data: {
    topic: null,
    currentStep: 0,
    steps: ['观察图片', '回答问题', '选词填空', '查看范文'],
    currentQuestionIndex: 0,
    userAnswers: [],
    questionScore: 0,
    sentenceScore: 0,
    showResult: false,
    currentQuestion: null,
    questions: [],
    sentenceFillBlank: [],
    selectedOption: null,
    showAnswer: false,
    isCorrectAnswer: false,
    methods: [
      { id: 'elements', name: '五要素法', icon: '📝', desc: '时间、地点、人物、事件、结果', tips: ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] },
      { id: 'senses', name: '五感法', icon: '👀', desc: '视觉、听觉、嗅觉、味觉、触觉', tips: ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
    ]
  },

  onLoad() {
    const method = wx.getStorageSync('writingMethod');
    const image = wx.getStorageSync('writingImage');
    
    let imageId = 1;
    if (image && image.id) {
      imageId = image.id;
    } else {
      const imageIds = Object.keys(imageTopics);
      imageId = parseInt(imageIds[Math.floor(Math.random() * imageIds.length)]);
    }
    
    if (imageTopics[imageId]) {
      const topic = imageTopics[imageId];
      const methodId = method && method.id ? method.id : 'elements';
      const questions = methodId === 'elements' ? topic.elementsQuestions : topic.sensesQuestions;
      const currentMethod = this.data.methods.find(m => m.id === methodId);
      
      this.setData({ 
        topic: {
          ...topic,
          method: currentMethod || { id: methodId, name: methodId === 'elements' ? '五要素法' : '五感法', icon: methodId === 'elements' ? '📝' : '👀', tips: methodId === 'elements' ? ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] : ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
        },
        questions: questions,
        sentenceFillBlank: topic.sentencesFillBlank || [],
        currentQuestion: questions[0] || null
      });
    }
  },

  nextStep() {
    const currentStep = this.data.currentStep;
    if (currentStep < 3) {
      if (currentStep === 2) {
        const imageId = this.data.topic && this.data.topic.id;
        if (imageId) {
          const completed = wx.getStorageSync('completedImages') || [];
          if (!completed.includes(imageId)) {
            completed.push(imageId);
            wx.setStorageSync('completedImages', completed);
          }
        }
      }
      this.setData({ 
        currentStep: currentStep + 1, 
        currentQuestionIndex: 0,
        showResult: false,
        showAnswer: false,
        selectedOption: null
      });
    }
  },

  prevStep() {
    const { currentStep, questions, sentenceFillBlank } = this.data;
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      const data = { 
        currentStep: newStep, 
        currentQuestionIndex: 0,
        showResult: false,
        showAnswer: false,
        selectedOption: null
      };
      if (currentStep === 2) {
        data.userAnswers = [];
        data.questionScore = 0;
        data.currentQuestion = questions[0] || null;
      } else if (currentStep === 3) {
        data.sentenceScore = 0;
      }
      this.setData(data);
    }
  },

  selectOption(e) {
    const option = e.currentTarget.dataset.option;
    this.setData({ selectedOption: option });
  },

  submitAnswer() {
    const { currentQuestion, selectedOption, currentQuestionIndex, questions, userAnswers } = this.data;
    
    if (!selectedOption) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }

    if (userAnswers.length > currentQuestionIndex) {
      wx.showToast({ title: '这道题已经回答过了', icon: 'none' });
      return;
    }

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    const newAnswers = [...userAnswers, { question: currentQuestion.question, userAnswer: selectedOption, correctAnswer: currentQuestion.answer, isCorrect }];
    let newScore = this.data.questionScore;
    if (isCorrect) {
      newScore++;
    }

    this.setData({
      showAnswer: true,
      isCorrectAnswer: isCorrect,
      userAnswers: newAnswers,
      questionScore: newScore
    });
  },

  goToNextQuestion() {
    const { currentStep, currentQuestionIndex, questions, sentenceFillBlank } = this.data;
    
    if (currentStep === 1) {
      if (currentQuestionIndex < questions.length - 1) {
        this.setData({ 
          currentQuestionIndex: currentQuestionIndex + 1,
          currentQuestion: questions[currentQuestionIndex + 1],
          selectedOption: null,
          showAnswer: false,
          isCorrectAnswer: false
        });
      } else {
        this.setData({ 
          showAnswer: false,
          showResult: true 
        });
      }
    } else if (currentStep === 2) {
      if (currentQuestionIndex < sentenceFillBlank.length - 1) {
        this.setData({ 
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedOption: null,
          showAnswer: false,
          isCorrectAnswer: false
        });
      } else {
        this.nextStep();
      }
    }
  },

  selectSentenceOption(e) {
    const option = e.currentTarget.dataset.option;
    this.setData({ selectedOption: option });
  },

  submitSentence() {
    const { sentenceFillBlank, currentQuestionIndex, selectedOption } = this.data;
    const currentQuestion = sentenceFillBlank[currentQuestionIndex];
    
    if (!selectedOption) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }

    if (this.data.sentenceScore > currentQuestionIndex) {
      wx.showToast({ title: '这道题已经回答过了', icon: 'none' });
      return;
    }

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    let newScore = this.data.sentenceScore;
    if (isCorrect) {
      newScore++;
    }

    this.setData({
      showAnswer: true,
      isCorrectAnswer: isCorrect,
      sentenceScore: newScore
    });
  },

  goBack() {
    wx.navigateBack();
  },

  goToIndex() {
    wx.redirectTo({ url: '/pages/index/index' });
  }
});