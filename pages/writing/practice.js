const { topics } = require('../../data/writing-data.js');

const seasonQuestions = {
  spring: [
    { question: '故事发生在什么时候？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 花园', 'B. 河边', 'C. 雪地', 'D. 泳池'], answer: 'A' },
    { question: '谁在花园里？', options: ['A. 小朋友和蝴蝶', 'B. 小猫', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 花儿开放了', 'B. 树叶飘落', 'C. 雪花飞舞', 'D. 太阳落山'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很开心', 'B. 天气变冷', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
  ],
  summer: [
    { question: '故事发生在什么时候？', options: ['A. 夏天', 'B. 春天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 游泳池', 'B. 小河', 'C. 池塘', 'D. 大海'], answer: 'A' },
    { question: '谁在游泳？', options: ['A. 小朋友们', 'B. 大人', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小朋友在游泳', 'B. 下雪了', 'C. 下雨了', 'D. 刮大风'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很快乐', 'B. 天气变冷', 'C. 出太阳', 'D. 天黑了'], answer: 'A' }
  ],
  autumn: [
    { question: '故事发生在什么时候？', options: ['A. 秋天', 'B. 春天', 'C. 夏天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 田野', 'B. 花园', 'C. 河边', 'D. 雪地'], answer: 'A' },
    { question: '谁在田野里？', options: ['A. 农民伯伯', 'B. 小朋友', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 稻穗成熟了', 'B. 树叶发芽', 'C. 下雪了', 'D. 下雨了'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 庄稼丰收了', 'B. 天气变热', 'C. 出太阳', 'D. 天黑了'], answer: 'A' }
  ],
  winter: [
    { question: '故事发生在什么时候？', options: ['A. 冬天', 'B. 春天', 'C. 夏天', 'D. 秋天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 雪地里', 'B. 花园', 'C. 河边', 'D. 泳池'], answer: 'A' },
    { question: '谁在雪地里？', options: ['A. 小朋友们', 'B. 大人', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 堆雪人打雪仗', 'B. 游泳', 'C. 赏花', 'D. 摘果子'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 堆了一个大雪人', 'B. 天气变热', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
  ]
};

const weatherQuestions = {
  rainy: [
    { question: '故事发生在什么时候？', options: ['A. 下雨天', 'B. 晴天', 'C. 下雪天', 'D. 刮风天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 路上', 'B. 家里', 'C. 学校', 'D. 公园'], answer: 'A' },
    { question: '人们在做什么？', options: ['A. 撑伞走路', 'B. 跑步', 'C. 游泳', 'D. 睡觉'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 下雨了', 'B. 出太阳', 'C. 下雪了', 'D. 刮大风'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 雨后出现彩虹', 'B. 天气变冷', 'C. 天气变热', 'D. 起雾了'], answer: 'A' }
  ],
  snowy: [
    { question: '故事发生在什么时候？', options: ['A. 下雪天', 'B. 晴天', 'C. 下雨天', 'D. 刮风天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 院子里', 'B. 家里', 'C. 学校', 'D. 公园'], answer: 'A' },
    { question: '小朋友在做什么？', options: ['A. 堆雪人', 'B. 游泳', 'C. 赏花', 'D. 野餐'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 下雪了', 'B. 出太阳', 'C. 下雨了', 'D. 刮大风'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 堆了一个大雪人', 'B. 天气变暖', 'C. 天气变冷', 'D. 起雾了'], answer: 'A' }
  ]
};

const sceneryQuestions = {
  park: [
    { question: '故事发生在什么季节？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 公园', 'B. 学校', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '公园里有什么？', options: ['A. 花朵和大树', 'B. 书本和笔', 'C. 雨伞和雨衣', 'D. 雪人'], answer: 'A' },
    { question: '小朋友们在做什么？', options: ['A. 在公园里玩耍', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '他们的心情怎么样？', options: ['A. 很开心', 'B. 很难过', 'C. 很生气', 'D. 很无聊'], answer: 'A' }
  ],
  springOuting: [
    { question: '故事发生在什么时候？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 郊外', 'B. 教室', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '谁在郊外？', options: ['A. 老师和同学们', 'B. 大人', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 同学们在春游', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家玩得很开心', 'B. 天气变冷', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
  ],
  countryside: [
    { question: '故事发生在什么时候？', options: ['A. 周末', 'B. 周一', 'C. 周三', 'D. 周五'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 郊外', 'B. 城市', 'C. 学校', 'D. 商店'], answer: 'A' },
    { question: '谁在郊外？', options: ['A. 小朋友和爸爸妈妈', 'B. 大人', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 在郊外玩耍野餐', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很愉快', 'B. 天气变冷', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
  ],
  autumnLeaves: [
    { question: '故事发生在什么时候？', options: ['A. 秋天', 'B. 春天', 'C. 夏天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 树林里', 'B. 教室', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '谁在树林里？', options: ['A. 小朋友们', 'B. 大人', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 捡落叶做书签', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 做了美丽的书签', 'B. 天气变冷', 'C. 下雨了', 'D. 天黑了'], answer: 'A' }
  ]
};

const lifeQuestions = {
  helpMom: [
    { question: '故事发生在什么时候？', options: ['A. 周末', 'B. 周一', 'C. 周三', 'D. 周五'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 家里', 'B. 学校', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在做家务？', options: ['A. 小朋友和妈妈', 'B. 爸爸', 'C. 爷爷', 'D. 奶奶'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小朋友帮妈妈做家务', 'B. 玩耍', 'C. 睡觉', 'D. 学习'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 妈妈夸孩子懂事', 'B. 妈妈生气', 'C. 妈妈难过', 'D. 妈妈无聊'], answer: 'A' }
  ],
  helpGrandparents: [
    { question: '故事发生在什么时候？', options: ['A. 晚上', 'B. 早上', 'C. 中午', 'D. 下午'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 家里', 'B. 学校', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在捶背？', options: ['A. 小朋友给爷爷奶奶', 'B. 妈妈', 'C. 爸爸', 'D. 叔叔'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小朋友给爷爷奶奶捶背', 'B. 玩耍', 'C. 睡觉', 'D. 学习'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 爷爷奶奶很开心', 'B. 爷爷奶奶生气', 'C. 爷爷奶奶难过', 'D. 爷爷奶奶无聊'], answer: 'A' }
  ],
  helpClassmate: [
    { question: '故事发生在什么时候？', options: ['A. 放学后', 'B. 上课', 'C. 午休', 'D. 课间'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 学校', 'B. 家里', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在帮忙？', options: ['A. 小明帮同学', 'B. 老师', 'C. 妈妈', 'D. 爸爸'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小明帮同学搬书', 'B. 玩耍', 'C. 睡觉', 'D. 学习'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 同学很感谢', 'B. 同学生气', 'C. 同学难过', 'D. 同学无聊'], answer: 'A' }
  ],
  schoolLife: [
    { question: '故事发生在什么时候？', options: ['A. 课间', 'B. 上课', 'C. 放学', 'D. 午休'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 学校', 'B. 家里', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在学校里？', options: ['A. 同学们', 'B. 老师', 'C. 家长', 'D. 校长'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 同学们在玩游戏', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很开心', 'B. 同学生气', 'C. 同学难过', 'D. 同学无聊'], answer: 'A' }
  ],
  sportsDay: [
    { question: '故事发生在什么时候？', options: ['A. 运动会', 'B. 上课', 'C. 放学', 'D. 午休'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 操场', 'B. 教室', 'C. 家里', 'D. 公园'], answer: 'A' },
    { question: '谁在操场上？', options: ['A. 运动员和同学', 'B. 老师', 'C. 家长', 'D. 校长'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 参加运动会比赛', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很激动', 'B. 同学失望', 'C. 同学难过', 'D. 同学无聊'], answer: 'A' }
  ],
  goodHabits: [
    { question: '故事发生在什么时候？', options: ['A. 洗手后', 'B. 吃饭前', 'C. 睡觉前', 'D. 放学后'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 家里', 'B. 学校', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在节约用水？', options: ['A. 小明', 'B. 妈妈', 'C. 爸爸', 'D. 爷爷'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小明拧紧水龙头', 'B. 浪费水', 'C. 玩耍', 'D. 睡觉'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 妈妈夸小明懂事', 'B. 妈妈生气', 'C. 妈妈难过', 'D. 妈妈无聊'], answer: 'A' }
  ],
  protectNature: [
    { question: '故事发生在什么时候？', options: ['A. 早上', 'B. 中午', 'C. 下午', 'D. 晚上'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 公园', 'B. 学校', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '谁在浇花？', options: ['A. 小红', 'B. 妈妈', 'C. 爸爸', 'D. 爷爷'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小红给花浇水', 'B. 摘花', 'C. 玩耍', 'D. 睡觉'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 花儿长得更好', 'B. 花儿枯萎', 'C. 花儿凋谢', 'D. 花儿死亡'], answer: 'A' }
  ],
  busPolite: [
    { question: '故事发生在什么时候？', options: ['A. 坐公交车时', 'B. 上课时', 'C. 睡觉时', 'D. 吃饭时'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 公交车上', 'B. 家里', 'C. 学校', 'D. 公园'], answer: 'A' },
    { question: '谁在让座？', options: ['A. 小明', 'B. 妈妈', 'C. 爸爸', 'D. 爷爷'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小明给老奶奶让座', 'B. 抢座', 'C. 睡觉', 'D. 玩耍'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 老奶奶很感谢', 'B. 老奶奶生气', 'C. 老奶奶难过', 'D. 老奶奶无聊'], answer: 'A' }
  ],
  holiday: [
    { question: '故事发生在什么时候？', options: ['A. 儿童节', 'B. 春节', 'C. 中秋节', 'D. 端午节'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 教室', 'B. 家里', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '谁在庆祝节日？', options: ['A. 同学们', 'B. 老师', 'C. 家长', 'D. 校长'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 同学们庆祝儿童节', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 大家很开心', 'B. 同学生气', 'C. 同学难过', 'D. 同学无聊'], answer: 'A' }
  ],
  weekend: [
    { question: '故事发生在什么时候？', options: ['A. 周末', 'B. 周一', 'C. 周三', 'D. 周五'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 公园', 'B. 学校', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '谁在公园？', options: ['A. 小朋友和爸爸妈妈', 'B. 老师', 'C. 同学', 'D. 陌生人'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 在公园野餐', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 一家人很开心', 'B. 家人失望', 'C. 家人难过', 'D. 家人无聊'], answer: 'A' }
  ]
};

const animalQuestions = {
  rabbit: [
    { question: '故事发生在什么时候？', options: ['A. 早上', 'B. 中午', 'C. 下午', 'D. 晚上'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 森林', 'B. 河边', 'C. 草地', 'D. 树上'], answer: 'A' },
    { question: '谁在森林里？', options: ['A. 小白兔', 'B. 小猫', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小白兔采蘑菇', 'B. 钓鱼', 'C. 捉虫子', 'D. 筑巢'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 采了满满一篮蘑菇', 'B. 没采到蘑菇', 'C. 迷路了', 'D. 累了'], answer: 'A' }
  ],
  cat: [
    { question: '故事发生在什么时候？', options: ['A. 下午', 'B. 早上', 'C. 中午', 'D. 晚上'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 河边', 'B. 森林', 'C. 草地', 'D. 树上'], answer: 'A' },
    { question: '谁在河边？', options: ['A. 小猫', 'B. 小白兔', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小猫在钓鱼', 'B. 采蘑菇', 'C. 捉虫子', 'D. 筑巢'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 钓到了一条大鱼', 'B. 没钓到鱼', 'C. 鱼跑了', 'D. 鱼竿断了'], answer: 'A' }
  ],
  chick: [
    { question: '故事发生在什么时候？', options: ['A. 早上', 'B. 中午', 'C. 下午', 'D. 晚上'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 草地', 'B. 河边', 'C. 森林', 'D. 树上'], answer: 'A' },
    { question: '谁在草地上？', options: ['A. 小鸡和鸡妈妈', 'B. 小白兔', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小鸡在捉虫子', 'B. 钓鱼', 'C. 采蘑菇', 'D. 筑巢'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 捉到了很多虫子', 'B. 没捉到虫子', 'C. 迷路了', 'D. 累了'], answer: 'A' }
  ],
  bird: [
    { question: '故事发生在什么时候？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '故事发生在哪里？', options: ['A. 树上', 'B. 河边', 'C. 草地', 'D. 森林'], answer: 'A' },
    { question: '谁在树上？', options: ['A. 小鸟', 'B. 小白兔', 'C. 小猫', 'D. 小鸡'], answer: 'A' },
    { question: '发生了什么事情？', options: ['A. 小鸟在筑巢', 'B. 钓鱼', 'C. 捉虫子', 'D. 采蘑菇'], answer: 'A' },
    { question: '结果怎么样？', options: ['A. 筑好了温暖的鸟巢', 'B. 没筑好巢', 'C. 鸟巢掉了', 'D. 累了'], answer: 'A' }
  ]
};

const getTopicQuestions = (topic) => {
  const title = topic.title;
  const subCategory = topic.subCategory;
  
  if (title.includes('春天')) return seasonQuestions.spring;
  if (title.includes('夏天')) return seasonQuestions.summer;
  if (title.includes('秋天')) return seasonQuestions.autumn;
  if (title.includes('冬天')) return seasonQuestions.winter;
  if (title.includes('下雨')) return weatherQuestions.rainy;
  if (title.includes('下雪')) return weatherQuestions.snowy;
  
  if (subCategory === 'scenery') {
    if (title.includes('公园')) return sceneryQuestions.park;
    if (title.includes('春游')) return sceneryQuestions.springOuting;
    if (title.includes('郊外')) return sceneryQuestions.countryside;
    if (title.includes('落叶')) return sceneryQuestions.autumnLeaves;
  }
  
  if (subCategory === 'life') {
    if (title.includes('妈妈')) return lifeQuestions.helpMom;
    if (title.includes('爷爷') || title.includes('奶奶')) return lifeQuestions.helpGrandparents;
    if (title.includes('同学')) return lifeQuestions.helpClassmate;
    if (title.includes('放学') || title.includes('课间') || title.includes('值日') || title.includes('打扫')) return lifeQuestions.schoolLife;
    if (title.includes('运动')) return lifeQuestions.sportsDay;
    if (title.includes('节约')) return lifeQuestions.goodHabits;
    if (title.includes('爱护') || title.includes('花草')) return lifeQuestions.protectNature;
    if (title.includes('公交')) return lifeQuestions.busPolite;
    if (title.includes('儿童')) return lifeQuestions.holiday;
    if (title.includes('周末')) return lifeQuestions.weekend;
    return lifeQuestions.schoolLife;
  }
  
  if (subCategory === 'animal') {
    if (title.includes('兔')) return animalQuestions.rabbit;
    if (title.includes('猫')) return animalQuestions.cat;
    if (title.includes('鸡')) return animalQuestions.chick;
    if (title.includes('鸟')) return animalQuestions.bird;
    return animalQuestions.rabbit;
  }
  
  return seasonQuestions.spring;
};

const distractors = {
  seasons: ['春天', '夏天', '秋天', '冬天'],
  adjectives: ['美丽', '漂亮', '可爱', '勤劳', '勇敢', '善良', '快乐', '开心', '幸福', '美好', '温暖', '炎热', '凉爽', '寒冷', '金黄', '雪白', '翠绿', '火红', '清新', '宁静', '热闹', '安静', '清澈', '五颜六色', '淡淡', '红红', '黄黄', '漂亮的'],
  verbs: ['飞舞', '飘落', '奔跑', '玩耍', '游泳', '戏水', '帮助', '采摘', '钓鱼', '捉虫', '筑巢', '堆雪', '浇水', '打扫', '唱歌', '欢笑', '欣赏', '庆祝', '野餐', '赏花', '流淌', '倒映', '蹦蹦跳跳', '弯下腰', '捡起', '夹在', '做成'],
  nouns: ['蝴蝶', '小鸟', '雪花', '雨滴', '花朵', '花园', '泳池', '教室', '草地', '森林', '河边', '雪人', '雨伞', '彩虹', '西瓜', '萤火虫', '蘑菇', '稻穗', '树叶', '树枝', '郊外', '小兔子', '小河', '小花', '清香', '蓝天', '白云', '风景', '落叶', '公园', '枫叶', '银杏叶', '扇子', '小伞', '书签', '季节'],
  adverbs: ['翩翩', '慢慢', '静静', '悄悄', '认真', '仔细', '耐心', '开心', '快乐', '幸福', '自由', '欢快', '辛勤', '开心极了']
};

const generateFillBlankFromSample = (sample) => {
  const allSentences = sample.split('。').filter(s => s.trim());
  const selectedSentences = allSentences.length > 5 
    ? allSentences.slice(0, 5)
    : [...allSentences];
  
  const fillBlankList = [];
  const usedWords = new Set();
  
  const allDictionary = [
    ...distractors.adjectives,
    ...distractors.verbs,
    ...distractors.nouns,
    ...distractors.adverbs,
    ...distractors.seasons
  ];
  
  for (const sentence of selectedSentences) {
    if (sentence.length < 15) continue;
    
    const candidates = [];
    
    for (const word of allDictionary) {
      if (usedWords.has(word)) continue;
      if (sentence.includes(word)) {
        candidates.push(word);
      }
    }
    
    if (candidates.length === 0) continue;
    
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const targetWord = candidates[randomIndex];
    usedWords.add(targetWord);
    
    let distractorList = [];
    if (distractors.adjectives.includes(targetWord)) {
      distractorList = distractors.adjectives.filter(d => d !== targetWord);
    } else if (distractors.verbs.includes(targetWord)) {
      distractorList = distractors.verbs.filter(d => d !== targetWord);
    } else if (distractors.nouns.includes(targetWord)) {
      distractorList = distractors.nouns.filter(d => d !== targetWord);
    } else if (distractors.adverbs.includes(targetWord)) {
      distractorList = distractors.adverbs.filter(d => d !== targetWord);
    } else if (distractors.seasons.includes(targetWord)) {
      distractorList = distractors.seasons.filter(d => d !== targetWord);
    } else {
      distractorList = [...distractors.adjectives, ...distractors.verbs, ...distractors.nouns].filter(d => d !== targetWord);
    }
    
    const shuffledDistractors = distractorList.sort(() => Math.random() - 0.5);
    const selectedDistractors = shuffledDistractors.slice(0, 3);
    
    const options = [targetWord, ...selectedDistractors].sort(() => Math.random() - 0.5);
    
    const answerIndex = options.indexOf(targetWord);
    const answer = ['A', 'B', 'C', 'D'][answerIndex];
    
    const blankSentence = sentence.replace(targetWord, '____') + '。';
    
    fillBlankList.push({
      sentence: blankSentence,
      blankAnswer: targetWord,
      options: options.map((opt, idx) => `${['A', 'B', 'C', 'D'][idx]}. ${opt}`),
      answer: answer
    });
  }
  
  const defaultSentences = [
    '这里的景色真____！',
    '小朋友们玩得很____。',
    '秋天的落叶真____。',
    '蝴蝶在空中____。',
    '这个季节真____！'
  ];
  
  const defaultWords = ['美丽', '开心', '金黄', '飞舞', '美好'];
  
  while (fillBlankList.length < 5) {
    const index = fillBlankList.length;
    const word = defaultWords[index];
    const sentence = defaultSentences[index];
    
    const filteredDistractors = distractors.adjectives.filter(d => d !== word && d.length >= 2);
    const shuffledDistractors = filteredDistractors.sort(() => Math.random() - 0.5);
    const selectedDistractors = shuffledDistractors.slice(0, 3);
    const options = [word, ...selectedDistractors].sort(() => Math.random() - 0.5);
    const answerIndex = options.indexOf(word);
    
    fillBlankList.push({
      sentence: sentence,
      blankAnswer: word,
      options: options.map((opt, idx) => `${['A', 'B', 'C', 'D'][idx]}. ${opt}`),
      answer: ['A', 'B', 'C', 'D'][answerIndex]
    });
  }
  
  return fillBlankList;
};

const getTopicFillBlank = (topic) => {
  return [];
};

const generateTopicData = (topic) => {
  const elements = {
    when: '根据图片确定',
    where: '根据图片确定',
    who: '根据图片确定',
    what: '根据图片确定',
    result: '根据图片确定'
  };
  
  const elementsQuestions = topic.questions || getTopicQuestions(topic);
  
  const senses = {
    see: topic.description || '观察图片',
    hear: '根据图片想象',
    smell: '根据图片想象',
    taste: '无',
    feel: '根据图片感受'
  };
  
  const getSensesQuestions = (topic) => {
    const title = topic.title;
    
    if (title.includes('春天')) {
      return [
        { question: '看到了什么？', options: ['A. 五颜六色的花朵', 'B. 金黄的落叶', 'C. 白白的雪花', 'D. 红红的太阳'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 小鸟的歌声', 'B. 蝉的叫声', 'C. 北风的呼啸', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 花香', 'B. 稻香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的花蜜', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'D' },
        { question: '感觉到什么？', options: ['A. 温暖的春风', 'B. 炎热的阳光', 'C. 凉爽的秋风', 'D. 寒冷的北风'], answer: 'A' }
      ];
    } else if (title.includes('夏天')) {
      return [
        { question: '看到了什么？', options: ['A. 红红的太阳', 'B. 金黄的落叶', 'C. 白白的雪花', 'D. 五颜六色的花朵'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 蝉的叫声', 'B. 小鸟的歌声', 'C. 北风的呼啸', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 西瓜的香味', 'B. 花香', 'C. 稻香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的西瓜', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'A' },
        { question: '感觉到什么？', options: ['A. 炎热的阳光', 'B. 温暖的春风', 'C. 凉爽的秋风', 'D. 寒冷的北风'], answer: 'A' }
      ];
    } else if (title.includes('秋天')) {
      return [
        { question: '看到了什么？', options: ['A. 金黄的落叶', 'B. 红红的太阳', 'C. 白白的雪花', 'D. 五颜六色的花朵'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 落叶的沙沙声', 'B. 蝉的叫声', 'C. 北风的呼啸', 'D. 小鸟的歌声'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 稻香', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的苹果', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'A' },
        { question: '感觉到什么？', options: ['A. 凉爽的秋风', 'B. 温暖的春风', 'C. 炎热的阳光', 'D. 寒冷的北风'], answer: 'A' }
      ];
    } else if (title.includes('冬天')) {
      return [
        { question: '看到了什么？', options: ['A. 白白的雪花', 'B. 红红的太阳', 'C. 金黄的落叶', 'D. 五颜六色的花朵'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 北风的呼啸', 'B. 蝉的叫声', 'C. 小鸟的歌声', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 烤红薯的香味', 'B. 花香', 'C. 稻香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的糖葫芦', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'A' },
        { question: '感觉到什么？', options: ['A. 寒冷的北风', 'B. 温暖的春风', 'C. 炎热的阳光', 'D. 凉爽的秋风'], answer: 'A' }
      ];
    } else if (title.includes('下雨')) {
      return [
        { question: '看到了什么？', options: ['A. 下雨的场景', 'B. 下雪的场景', 'C. 晴天的场景', 'D. 阴天的场景'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 雨点的声音', 'B. 小鸟的歌声', 'C. 北风的呼啸', 'D. 蝉的叫声'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 泥土的清香', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的雨水', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'D' },
        { question: '感觉到什么？', options: ['A. 凉爽的雨水', 'B. 温暖的春风', 'C. 炎热的阳光', 'D. 寒冷的北风'], answer: 'A' }
      ];
    } else if (title.includes('下雪')) {
      return [
        { question: '看到了什么？', options: ['A. 白白的雪花', 'B. 金黄的落叶', 'C. 红红的太阳', 'D. 五颜六色的花朵'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 踩雪的咯吱声', 'B. 小鸟的歌声', 'C. 蝉的叫声', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 清新的空气', 'B. 花香', 'C. 稻香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 凉凉的雪', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'A' },
        { question: '感觉到什么？', options: ['A. 冰冷的雪花', 'B. 温暖的春风', 'C. 炎热的阳光', 'D. 凉爽的秋风'], answer: 'A' }
      ];
    } else if (title.includes('公园')) {
      return [
        { question: '看到了什么？', options: ['A. 公园的美景', 'B. 家里的场景', 'C. 学校的场景', 'D. 商店的场景'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 小朋友的欢笑声', 'B. 小鸟的歌声', 'C. 北风的呼啸', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 花香', 'B. 饭菜香', 'C. 稻香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的零食', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'D' },
        { question: '感觉到什么？', options: ['A. 开心的心情', 'B. 温暖的阳光', 'C. 凉爽的微风', 'D. 幸福的感觉'], answer: 'A' }
      ];
    } else if (title.includes('兔') || title.includes('猫') || title.includes('鸡') || title.includes('鸟')) {
      return [
        { question: '看到了什么？', options: ['A. 可爱的小动物', 'B. 美丽的风景', 'C. 有趣的事情', 'D. 五颜六色的花朵'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 小动物的叫声', 'B. 小鸟的歌声', 'C. 北风的呼啸', 'D. 雨点的声音'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 青草的香味', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的食物', 'B. 酸酸的果子', 'C. 咸咸的饭菜', 'D. 无'], answer: 'D' },
        { question: '感觉到什么？', options: ['A. 快乐的心情', 'B. 温暖的感觉', 'C. 开心的感觉', 'D. 幸福的感觉'], answer: 'A' }
      ];
    } else {
      return [
        { question: '看到了什么？', options: ['A. ' + topic.title, 'B. 美丽的风景', 'C. 有趣的事情', 'D. 可爱的动物'], answer: 'A' },
        { question: '听到了什么？', options: ['A. 欢笑声', 'B. 风声', 'C. 雨声', 'D. 歌声'], answer: 'A' },
        { question: '闻到了什么？', options: ['A. 清新的空气', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
        { question: '尝到了什么？', options: ['A. 甜甜的', 'B. 酸酸的', 'C. 咸咸的', 'D. 无'], answer: 'D' },
        { question: '感觉到什么？', options: ['A. 开心', 'B. 温暖', 'C. 快乐', 'D. 幸福'], answer: 'A' }
      ];
    }
  };
  
  const sensesQuestions = getSensesQuestions(topic);
  
  const category = topic.subCategory;
  const title = topic.title;
  let defaultSample;
  
  if (title.includes('春天')) {
    defaultSample = `${topic.title}。春天来了，万物复苏，花园里的花儿竞相开放，红的、黄的、紫的，五彩缤纷。蝴蝶在花丛中翩翩起舞，蜜蜂忙着采蜜。小朋友们脱掉厚重的棉衣，来到户外感受春天的温暖。春风轻轻吹拂，小草探出嫩绿的脑袋，柳树垂下柔软的枝条。春天真是一个生机勃勃的季节！`;
  } else if (title.includes('夏天')) {
    defaultSample = `${topic.title}。夏天到了，太阳像一个大火球挂在天上。小朋友们穿着短袖短裤，来到游泳池里游泳。水花四溅，笑声阵阵。傍晚时分，大家坐在院子里吃西瓜、听蝉鸣。夜空中星星闪烁，萤火虫提着小灯笼飞来飞去。夏天真是一个充满活力的季节！`;
  } else if (title.includes('秋天')) {
    defaultSample = `${topic.title}。秋天来了，树叶变黄了，一片片从树上飘落下来，像一只只金色的蝴蝶。果园里硕果累累，苹果红了，梨子黄了，葡萄紫了。田野里稻穗沉甸甸的，农民伯伯忙着收割。小朋友们在铺满落叶的草地上奔跑嬉戏。秋天真是一个丰收的季节！`;
  } else if (title.includes('冬天')) {
    defaultSample = `${topic.title}。冬天到了，北风呼呼地吹，天空飘起了鹅毛大雪。大地披上了银装，树木、房屋都变白了。小朋友们穿上厚厚的棉袄，戴上帽子和手套，跑到雪地里堆雪人、打雪仗。红红的脸蛋像苹果一样可爱。冬天真是一个银装素裹的季节！`;
  } else if (title.includes('下雨')) {
    defaultSample = `${topic.title}。哗啦啦，下雨了！天空乌云密布，雨点像断了线的珍珠一样落下来。小朋友们撑着五颜六色的雨伞，走在湿漉漉的路上。雨点打在窗户上，发出滴答滴答的声音。雨后，天空出现了一道美丽的彩虹，空气也变得格外清新。下雨天真是太有趣了！`;
  } else if (title.includes('下雪')) {
    defaultSample = `${topic.title}。下雪啦！洁白的雪花纷纷扬扬地从天空飘落下来，像棉花糖一样柔软。小朋友们穿上厚厚的棉袄，戴上帽子和手套，跑到院子里堆雪人、打雪仗。他们滚了一个大大的雪球当雪人的身体，又滚了一个小雪球当雪人的头。雪人戴着胡萝卜做的鼻子，笑眯眯地站在雪地里。下雪天真好玩！`;
  } else if (title.includes('公园')) {
    defaultSample = `${topic.title}。星期天，小朋友们来到公园玩耍。公园里有高高的大树、五颜六色的花朵，还有一个清澈的小湖。有的小朋友在荡秋千，有的在玩滑梯，还有的在湖边喂小鱼。公园里到处都是欢笑声，真是一个美丽又好玩的地方！`;
  } else if (title.includes('春游')) {
    defaultSample = `${topic.title}。春天来了，老师带着同学们去春游。大家背着书包，唱着歌，开心极了。他们来到郊外，看到了嫩绿的小草、鲜艳的野花，还听到了小鸟的歌声。同学们在草地上野餐，分享着美味的食物。春游真是一次快乐的旅行！`;
  } else if (title.includes('郊外')) {
    defaultSample = `${topic.title}。周末，爸爸妈妈带我去郊外玩。那里有清清的小河、绿绿的草地，空气特别新鲜。我在草地上奔跑，捉蝴蝶，还和爸爸妈妈一起野餐。夕阳西下，我们依依不舍地离开了。郊外的风景真美！`;
  } else if (title.includes('落叶')) {
    defaultSample = `${topic.title}。秋天到了，树叶纷纷从树上落下来，有的像蝴蝶，有的像小船，美丽极了。小朋友们捡起一片片金黄的落叶，夹在书里做书签。落叶给大地铺上了一层金色的地毯，踩上去沙沙作响。秋天真是一个美丽的季节！`;
  } else if (title.includes('妈妈')) {
    defaultSample = `${topic.title}。周末的早上，小明看见妈妈在打扫房间。他主动拿起抹布，帮妈妈擦桌子、擦窗户。妈妈笑着说："你真是个懂事的好孩子！"小明听了，心里甜滋滋的。帮助妈妈做家务，真是一件快乐的事情！`;
  } else if (title.includes('爷爷') || title.includes('奶奶')) {
    defaultSample = `${topic.title}。爷爷奶奶辛苦了一天，小红端来一杯热茶，还给他们捶捶背。爷爷奶奶开心地说："我们的小红长大了，真孝顺！"一家人围坐在一起，有说有笑，温暖极了。关爱老人是我们应该做的！`;
  } else if (title.includes('放学')) {
    defaultSample = `${topic.title}。放学了，小明和小红一起走在回家的路上。他们开心地聊着今天在学校发生的事情，分享着彼此的快乐。夕阳的余晖洒在他们身上，把影子拉得长长的。放学路上真是一段美好的时光！`;
  } else if (title.includes('课间')) {
    defaultSample = `${topic.title}。下课铃响了，同学们像小鸟一样飞出教室，操场上顿时热闹起来。有的在踢毽子，有的在跳绳，还有的在玩老鹰捉小鸡。欢笑声、叫喊声充满了整个校园。课间十分钟真是太快乐了！`;
  } else if (title.includes('值日')) {
    defaultSample = `${topic.title}。放学后，值日生们留下来打扫教室。他们分工合作，有的扫地，有的擦黑板，有的整理桌椅。不一会儿，教室就被打扫得干干净净。看着整洁的教室，同学们心里都很自豪。劳动真光荣！`;
  } else if (title.includes('运动')) {
    defaultSample = `${topic.title}。学校举行秋季运动会，操场上人山人海，热闹非凡。运动员们在跑道上奋力奔跑，同学们在看台上大声加油。"加油！加油！"的声音此起彼伏。运动会不仅锻炼了身体，还增强了班级的凝聚力！`;
  } else if (title.includes('节约')) {
    defaultSample = `${topic.title}。小明洗完手后，发现水龙头没有关好，水在哗哗地流。他赶紧跑过去把水龙头拧紧。妈妈夸他是个节约用水的好孩子。水是生命之源，我们每个人都要珍惜！`;
  } else if (title.includes('爱护') || title.includes('花草')) {
    defaultSample = `${topic.title}。小红看到公园里的小花小草渴了，她提着水桶给它们浇水。花草树木是我们的好朋友，它们能净化空气、美化环境。我们要像爱护自己一样爱护它们！`;
  } else if (title.includes('同学')) {
    defaultSample = `${topic.title}。放学了，小刚抱着一摞厚厚的书，累得满头大汗。小明看到了，赶紧跑过去说："我来帮你！"他们一人抱一半，一起把书搬到了教室。小刚感激地说："谢谢你！"小明笑着说："不用谢，我们是同学嘛！"助人为乐真快乐！`;
  } else if (title.includes('儿童节')) {
    defaultSample = `${topic.title}。六一儿童节到了，教室里挂满了气球和彩带，同学们穿着漂亮的衣服，一起庆祝节日。大家表演节目、玩游戏，还收到了精美的礼物。欢声笑语充满了整个教室，这真是一个难忘的节日！`;
  } else if (title.includes('周末')) {
    defaultSample = `${topic.title}。周末到了，爸爸妈妈带我去公园野餐。我们带了好吃的三明治、水果和饮料。我在草地上奔跑玩耍，爸爸妈妈在一旁聊天。阳光明媚，微风轻拂，真是一个快乐的周末！`;
  } else if (title.includes('公交')) {
    defaultSample = `${topic.title}。小明乘坐公交车去外婆家，看到一位老奶奶上车，他马上站起来让座。老奶奶笑着说："谢谢你，小朋友！"小明说："不用谢，这是我应该做的。"车上的乘客都夸小明是个有礼貌的好孩子！`;
  } else if (title.includes('兔')) {
    defaultSample = `${topic.title}。小白兔提着篮子来到森林里采蘑菇，她仔细地挑选着又大又新鲜的蘑菇。蘑菇有白色的、棕色的，像一把把小伞。小白兔采了满满一篮子蘑菇，开开心心地回家了。森林里真是一个神奇的地方！`;
  } else if (title.includes('猫')) {
    defaultSample = `${topic.title}。小猫坐在河边钓鱼，一开始它很着急，总是想看看有没有鱼上钩。后来它耐心等待，眼睛一动不动地盯着水面。终于，一条大鱼上钩了！小猫开心极了。这个故事告诉我们：做事情要有耐心！`;
  } else if (title.includes('鸡')) {
    defaultSample = `${topic.title}。鸡妈妈带着小鸡们来到草地上，小鸡们叽叽喳喳地找虫子吃。它们用尖尖的嘴巴在草地上啄来啄去，捉到了很多小虫子。鸡妈妈在一旁守护着它们，一家人其乐融融。小鸡们真是可爱极了！`;
  } else if (title.includes('鸟')) {
    defaultSample = `${topic.title}。春天来了，小鸟们忙着在树上筑巢。它们用树枝和草叶搭了一个温暖的家。鸟巢圆圆的，像一个小摇篮。小鸟们飞来飞去，嘴里叼着一根根树枝，忙得不亦乐乎。它们真是勤劳的小家伙！`;
  } else if (category === 'animal') {
    defaultSample = `${topic.title}。${topic.description}小动物们在大自然里快乐地生活，它们各有各的本领，真是太有趣了！`;
  } else if (category === 'life') {
    defaultSample = `${topic.title}。${topic.description}小朋友们学会了帮助他人，懂得了关爱和分享，大家都很开心！`;
  } else {
    defaultSample = `${topic.title}。${topic.description}小朋友们欣赏着美丽的风景，开心极了！这真是美好的一天！`;
  }
  const sample = topic.sample || defaultSample;
  const sentences = sample.split('。').filter(s => s.trim()).slice(0, 5).map(s => s + '。');
  
  const sentencesFillBlank = topic.sentenceFillBlank || generateFillBlankFromSample(sample);
  
  return {
    ...topic,
    elements,
    elementsQuestions,
    senses,
    sensesQuestions,
    sentences,
    sentencesFillBlank,
    sample
  };
};

const imageTopics = {};
topics.forEach(topic => {
  imageTopics[topic.id] = generateTopicData(topic);
});

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
    imageLoading: true,
    imageError: false,
    methods: [
      { id: 'elements', name: '五要素法', icon: '📝', desc: '时间、地点、人物、事件、结果', tips: ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] },
      { id: 'senses', name: '五感法', icon: '👀', desc: '视觉、听觉、嗅觉、味觉、触觉', tips: ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
    ]
  },

  onLoad() {
    const method = wx.getStorageSync('writingMethod');
    const topic = wx.getStorageSync('writingTopic');
    
    let imageId = 1;
    if (topic && topic.id) {
      imageId = topic.id;
    } else {
      const imageIds = Object.keys(imageTopics);
      imageId = parseInt(imageIds[Math.floor(Math.random() * imageIds.length)]);
    }
    
    if (imageTopics[imageId]) {
      const topicData = imageTopics[imageId];
      const methodId = method && method.id ? method.id : 'elements';
      const questions = methodId === 'elements' ? topicData.elementsQuestions : topicData.sensesQuestions;
      const currentMethod = this.data.methods.find(m => m.id === methodId);
      
      this.setData({ 
        topic: {
          ...topicData,
          method: currentMethod || { id: methodId, name: methodId === 'elements' ? '五要素法' : '五感法', icon: methodId === 'elements' ? '📝' : '👀', tips: methodId === 'elements' ? ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] : ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
        },
        questions: questions,
        sentenceFillBlank: topicData.sentencesFillBlank || [],
        currentQuestion: questions[0] || null,
        imageLoading: false
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

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    let newAnswers;
    let newScore = this.data.questionScore;
    
    if (userAnswers.length > currentQuestionIndex) {
      newAnswers = [...userAnswers];
      const oldCorrect = newAnswers[currentQuestionIndex].isCorrect;
      newAnswers[currentQuestionIndex] = { question: currentQuestion.question, userAnswer: selectedOption, correctAnswer: currentQuestion.answer, isCorrect };
      newScore = newScore - (oldCorrect ? 1 : 0) + (isCorrect ? 1 : 0);
    } else {
      newAnswers = [...userAnswers, { question: currentQuestion.question, userAnswer: selectedOption, correctAnswer: currentQuestion.answer, isCorrect }];
      if (isCorrect) {
        newScore++;
      }
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
    const { sentenceFillBlank, currentQuestionIndex, selectedOption, sentenceScore } = this.data;
    const currentQuestion = sentenceFillBlank[currentQuestionIndex];
    
    if (!selectedOption) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    let newScore = sentenceScore;
    
    if (sentenceScore > currentQuestionIndex) {
      const previousCorrectCount = sentenceScore;
      const questionsBeforeCount = currentQuestionIndex;
      const previousCorrectBefore = previousCorrectCount - 1;
      newScore = questionsBeforeCount + (isCorrect ? 1 : 0);
    } else {
      if (isCorrect) {
        newScore++;
      }
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
  },

  onImageLoad() {
    this.setData({
      imageLoading: false,
      imageError: false
    });
  },

  onImageError() {
    this.setData({
      imageLoading: false,
      imageError: true
    });
  },

  refreshImage() {
    const topic = this.data.topic;
    if (topic && topic.image) {
      this.setData({
        imageLoading: true,
        imageError: false
      });
      
      const timestamp = Date.now();
      const refreshedUrl = topic.image + (topic.image.includes('?') ? '&' : '?') + 'refresh=' + timestamp;
      
      this.setData({
        topic: {
          ...topic,
          image: refreshedUrl
        },
        imageLoading: false
      });
      
      wx.showToast({ title: '正在刷新图片', icon: 'loading', duration: 1000 });
    }
  },

  onShareAppMessage() {
    const topic = this.data.topic;
    return {
      title: topic ? `${topic.title} - 看图写话练习` : '看图写话练习',
      desc: topic ? topic.description : '一起来练习看图写话吧！',
      path: '/pages/index/index'
    };
  }
});