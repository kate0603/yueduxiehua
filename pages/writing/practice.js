const { topics } = require('../../data/writing-data.js');

const seasonQuestions = {
  spring: [
    { question: '这是什么季节？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'A' },
    { question: '春天有什么花开了？', options: ['A. 桃花', 'B. 梅花', 'C. 菊花', 'D. 雪花'], answer: 'A' },
    { question: '春天的天气怎么样？', options: ['A. 温暖', 'B. 炎热', 'C. 凉爽', 'D. 寒冷'], answer: 'A' },
    { question: '春天可以做什么？', options: ['A. 春游', 'B. 游泳', 'C. 滑雪', 'D. 堆雪人'], answer: 'A' },
    { question: '春天的颜色是什么？', options: ['A. 绿色', 'B. 白色', 'C. 黄色', 'D. 红色'], answer: 'A' }
  ],
  summer: [
    { question: '这是什么季节？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'B' },
    { question: '夏天可以做什么？', options: ['A. 游泳', 'B. 堆雪人', 'C. 秋游', 'D. 赏花'], answer: 'A' },
    { question: '夏天的天气怎么样？', options: ['A. 炎热', 'B. 凉爽', 'C. 温暖', 'D. 寒冷'], answer: 'A' },
    { question: '夏天有什么水果？', options: ['A. 西瓜', 'B. 苹果', 'C. 橘子', 'D. 梨'], answer: 'A' },
    { question: '夏天人们穿什么？', options: ['A. 短袖', 'B. 棉袄', 'C. 毛衣', 'D. 羽绒服'], answer: 'A' }
  ],
  autumn: [
    { question: '这是什么季节？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'C' },
    { question: '秋天的树叶是什么颜色？', options: ['A. 黄色', 'B. 绿色', 'C. 红色', 'D. 白色'], answer: 'A' },
    { question: '秋天可以做什么？', options: ['A. 秋游', 'B. 游泳', 'C. 滑雪', 'D. 赏花'], answer: 'A' },
    { question: '秋天有什么水果？', options: ['A. 苹果', 'B. 西瓜', 'C. 草莓', 'D. 樱桃'], answer: 'A' },
    { question: '秋天的天气怎么样？', options: ['A. 凉爽', 'B. 炎热', 'C. 温暖', 'D. 寒冷'], answer: 'A' }
  ],
  winter: [
    { question: '这是什么季节？', options: ['A. 春天', 'B. 夏天', 'C. 秋天', 'D. 冬天'], answer: 'D' },
    { question: '冬天可以做什么？', options: ['A. 堆雪人', 'B. 游泳', 'C. 秋游', 'D. 赏花'], answer: 'A' },
    { question: '冬天的天气怎么样？', options: ['A. 寒冷', 'B. 炎热', 'C. 凉爽', 'D. 温暖'], answer: 'A' },
    { question: '冬天会下什么？', options: ['A. 雪', 'B. 雨', 'C. 冰雹', 'D. 霜'], answer: 'A' },
    { question: '冬天人们穿什么？', options: ['A. 棉袄', 'B. 短袖', 'C. 裙子', 'D. 短裤'], answer: 'A' }
  ]
};

const weatherQuestions = {
  rainy: [
    { question: '天气怎么样？', options: ['A. 下雨', 'B. 晴天', 'C. 下雪', 'D. 刮风'], answer: 'A' },
    { question: '下雨需要带什么？', options: ['A. 雨伞', 'B. 帽子', 'C. 围巾', 'D. 手套'], answer: 'A' },
    { question: '雨后会出现什么？', options: ['A. 彩虹', 'B. 星星', 'C. 月亮', 'D. 太阳'], answer: 'A' },
    { question: '雨点像什么？', options: ['A. 珍珠', 'B. 雪花', 'C. 树叶', 'D. 花瓣'], answer: 'A' },
    { question: '下雨天心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
  ],
  snowy: [
    { question: '天气怎么样？', options: ['A. 下雪', 'B. 晴天', 'C. 下雨', 'D. 刮风'], answer: 'A' },
    { question: '雪是什么颜色？', options: ['A. 白色', 'B. 红色', 'C. 黄色', 'D. 绿色'], answer: 'A' },
    { question: '下雪天可以做什么？', options: ['A. 堆雪人', 'B. 游泳', 'C. 赏花', 'D. 野餐'], answer: 'A' },
    { question: '雪人是什么做的？', options: ['A. 雪', 'B. 泥土', 'C. 沙子', 'D. 石头'], answer: 'A' },
    { question: '下雪天人们穿什么？', options: ['A. 棉袄', 'B. 短袖', 'C. 裙子', 'D. 短裤'], answer: 'A' }
  ]
};

const lifeQuestions = {
  helpMom: [
    { question: '小朋友在做什么？', options: ['A. 帮妈妈做家务', 'B. 玩耍', 'C. 睡觉', 'D. 学习'], answer: 'A' },
    { question: '妈妈会说什么？', options: ['A. 谢谢你', 'B. 快走开', 'C. 别捣乱', 'D. 去玩吧'], answer: 'A' },
    { question: '做家务是好孩子吗？', options: ['A. 是', 'B. 不是', 'C. 不知道', 'D. 不一定'], answer: 'A' },
    { question: '小明的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '这是什么精神？', options: ['A. 勤劳', 'B. 懒惰', 'C. 调皮', 'D. 自私'], answer: 'A' }
  ],
  helpGrandparents: [
    { question: '小朋友在做什么？', options: ['A. 给爷爷奶奶捶背', 'B. 玩耍', 'C. 睡觉', 'D. 学习'], answer: 'A' },
    { question: '爷爷奶奶会说什么？', options: ['A. 真孝顺', 'B. 别捣乱', 'C. 去玩吧', 'D. 走开'], answer: 'A' },
    { question: '这是什么精神？', options: ['A. 孝顺', 'B. 懒惰', 'C. 调皮', 'D. 自私'], answer: 'A' },
    { question: '小红的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '家人之间要怎么样？', options: ['A. 互相关爱', 'B. 互相争吵', 'C. 互相不理', 'D. 互相指责'], answer: 'A' }
  ],
  helpClassmate: [
    { question: '同学遇到了什么困难？', options: ['A. 搬不动书', 'B. 找不到路', 'C. 没带书包', 'D. 忘带课本'], answer: 'A' },
    { question: '小明是怎么做的？', options: ['A. 主动帮忙', 'B. 走开', 'C. 嘲笑他', 'D. 告诉老师'], answer: 'A' },
    { question: '这是什么精神？', options: ['A. 助人为乐', 'B. 自私自利', 'C. 调皮捣蛋', 'D. 玩耍'], answer: 'A' },
    { question: '同学会说什么？', options: ['A. 谢谢你', 'B. 不用你管', 'C. 真讨厌', 'D. 走开'], answer: 'A' },
    { question: '他们的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
  ],
  schoolLife: [
    { question: '这是在哪里？', options: ['A. 学校', 'B. 家里', 'C. 公园', 'D. 商店'], answer: 'A' },
    { question: '同学们在做什么？', options: ['A. 玩耍', 'B. 睡觉', 'C. 吃饭', 'D. 学习'], answer: 'A' },
    { question: '同学们的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '课间可以做什么？', options: ['A. 玩游戏', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '同学之间要怎么样？', options: ['A. 互相帮助', 'B. 互相争吵', 'C. 互相不理', 'D. 互相打架'], answer: 'A' }
  ],
  sportsDay: [
    { question: '这是在哪里？', options: ['A. 操场', 'B. 教室', 'C. 家里', 'D. 公园'], answer: 'A' },
    { question: '同学们在做什么？', options: ['A. 参加运动会', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '同学们的心情怎么样？', options: ['A. 激动', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '运动会有什么项目？', options: ['A. 跑步', 'B. 睡觉', 'C. 吃饭', 'D. 上课'], answer: 'A' },
    { question: '大家为什么加油？', options: ['A. 为班级争光', 'B. 没事干', 'C. 好玩', 'D. 吵闹'], answer: 'A' }
  ],
  goodHabits: [
    { question: '小明在做什么？', options: ['A. 节约用水', 'B. 浪费水', 'C. 玩耍', 'D. 睡觉'], answer: 'A' },
    { question: '为什么要节约用水？', options: ['A. 水资源宝贵', 'B. 水很多', 'C. 好玩', 'D. 不知道'], answer: 'A' },
    { question: '这是什么习惯？', options: ['A. 好习惯', 'B. 坏习惯', 'C. 不知道', 'D. 不好不坏'], answer: 'A' },
    { question: '小明的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '我们应该怎么做？', options: ['A. 节约用水', 'B. 浪费水', 'C. 不管它', 'D. 不知道'], answer: 'A' }
  ],
  protectNature: [
    { question: '小红在做什么？', options: ['A. 浇花', 'B. 摘花', 'C. 玩耍', 'D. 睡觉'], answer: 'A' },
    { question: '花草树木有什么作用？', options: ['A. 净化空气', 'B. 没用', 'C. 挡路', 'D. 不好看'], answer: 'A' },
    { question: '我们应该怎么样？', options: ['A. 爱护花草', 'B. 破坏花草', 'C. 不管它', 'D. 摘花'], answer: 'A' },
    { question: '小红的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '这是什么行为？', options: ['A. 环保', 'B. 破坏', 'C. 无聊', 'D. 调皮'], answer: 'A' }
  ],
  busPolite: [
    { question: '小明在做什么？', options: ['A. 让座', 'B. 抢座', 'C. 睡觉', 'D. 玩耍'], answer: 'A' },
    { question: '给谁让座？', options: ['A. 老奶奶', 'B. 小朋友', 'C. 叔叔', 'D. 阿姨'], answer: 'A' },
    { question: '这是什么行为？', options: ['A. 有礼貌', 'B. 没礼貌', 'C. 调皮', 'D. 无聊'], answer: 'A' },
    { question: '老奶奶会说什么？', options: ['A. 谢谢你', 'B. 不用你让', 'C. 走开', 'D. 真讨厌'], answer: 'A' },
    { question: '小明的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
  ],
  holiday: [
    { question: '小朋友在做什么？', options: ['A. 庆祝节日', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '这是什么节日？', options: ['A. 儿童节', 'B. 春节', 'C. 中秋节', 'D. 端午节'], answer: 'A' },
    { question: '同学们的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '节日可以做什么？', options: ['A. 表演节目', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '节日有什么装饰？', options: ['A. 气球', 'B. 书本', 'C. 桌子', 'D. 椅子'], answer: 'A' }
  ],
  weekend: [
    { question: '小朋友在哪里？', options: ['A. 公园', 'B. 学校', 'C. 家里', 'D. 商店'], answer: 'A' },
    { question: '他们在做什么？', options: ['A. 野餐', 'B. 上课', 'C. 睡觉', 'D. 吃饭'], answer: 'A' },
    { question: '和谁一起？', options: ['A. 爸爸妈妈', 'B. 老师同学', 'C. 爷爷奶奶', 'D. 陌生人'], answer: 'A' },
    { question: '心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
    { question: '周末可以做什么？', options: ['A. 出去玩', 'B. 上课', 'C. 睡觉', 'D. 做作业'], answer: 'A' }
  ]
};

const animalQuestions = {
  rabbit: [
    { question: '这是什么动物？', options: ['A. 小白兔', 'B. 小猫', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
    { question: '小白兔在做什么？', options: ['A. 采蘑菇', 'B. 钓鱼', 'C. 捉虫子', 'D. 筑巢'], answer: 'A' },
    { question: '小白兔在哪里？', options: ['A. 森林', 'B. 河边', 'C. 草地', 'D. 树上'], answer: 'A' },
    { question: '蘑菇是什么颜色？', options: ['A. 白色', 'B. 红色', 'C. 黄色', 'D. 绿色'], answer: 'A' },
    { question: '小白兔的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
  ],
  cat: [
    { question: '这是什么动物？', options: ['A. 小猫', 'B. 小白兔', 'C. 小狗', 'D. 小鸡'], answer: 'A' },
    { question: '小猫在做什么？', options: ['A. 钓鱼', 'B. 采蘑菇', 'C. 捉虫子', 'D. 筑巢'], answer: 'A' },
    { question: '小猫在哪里？', options: ['A. 河边', 'B. 森林', 'C. 草地', 'D. 树上'], answer: 'A' },
    { question: '小猫钓到鱼了吗？', options: ['A. 钓到了', 'B. 没钓到', 'C. 不知道', 'D. 不想钓'], answer: 'A' },
    { question: '这个故事告诉我们什么？', options: ['A. 要有耐心', 'B. 要着急', 'C. 要贪玩', 'D. 要放弃'], answer: 'A' }
  ],
  chick: [
    { question: '这是什么动物？', options: ['A. 小鸡', 'B. 小白兔', 'C. 小猫', 'D. 小狗'], answer: 'A' },
    { question: '小鸡在做什么？', options: ['A. 捉虫子', 'B. 钓鱼', 'C. 采蘑菇', 'D. 筑巢'], answer: 'A' },
    { question: '小鸡在哪里？', options: ['A. 草地', 'B. 河边', 'C. 森林', 'D. 树上'], answer: 'A' },
    { question: '谁陪着小鸡？', options: ['A. 鸡妈妈', 'B. 猫妈妈', 'C. 狗妈妈', 'D. 兔妈妈'], answer: 'A' },
    { question: '小鸡的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
  ],
  bird: [
    { question: '这是什么动物？', options: ['A. 小鸟', 'B. 小白兔', 'C. 小猫', 'D. 小鸡'], answer: 'A' },
    { question: '小鸟在做什么？', options: ['A. 筑巢', 'B. 钓鱼', 'C. 捉虫子', 'D. 采蘑菇'], answer: 'A' },
    { question: '小鸟在哪里？', options: ['A. 树上', 'B. 河边', 'C. 草地', 'D. 森林'], answer: 'A' },
    { question: '鸟巢是什么做的？', options: ['A. 树枝', 'B. 石头', 'C. 泥土', 'D. 沙子'], answer: 'A' },
    { question: '小鸟的心情怎么样？', options: ['A. 开心', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' }
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
  seasons: ['春', '夏', '秋', '冬'],
  adjectives: ['美丽', '难看', '枯萎', '凋谢', '开心', '难过', '生气', '无聊', '快乐', '美好', '糟糕', '温暖', '炎热', '凉爽', '寒冷'],
  verbs: ['飞舞', '飘落', '奔跑', '玩耍', '游泳', '戏水', '帮助', '搬', '拿', '找'],
  nouns: ['蝴蝶', '小鸟', '雪花', '雨滴', '花朵', '花园', '泳池', '房间', '教室', '草地', '森林', '河边', '雪人', '棉袄'],
  adverbs: ['翩翩', '慢慢', '静静', '悄悄', '开心', '伤心', '生气', '难过']
};

const generateFillBlankFromSample = (sample) => {
  const sentences = sample.split('。').filter(s => s.trim());
  const fillBlankList = [];
  const usedWords = new Set();
  
  for (const sentence of sentences) {
    if (fillBlankList.length >= 5) break;
    
    const matches = sentence.match(/([\u4e00-\u9fa5]{2,4})/g);
    if (!matches || matches.length < 2) continue;
    
    const candidates = matches.filter(word => {
      if (usedWords.has(word)) return false;
      if (word.length < 2) return false;
      if (['的', '了', '是', '在', '有', '和', '我', '你', '他', '她', '它', '们', '都', '很', '不', '这', '那', '什么', '怎么', '为什么'].includes(word)) return false;
      return true;
    });
    
    if (candidates.length === 0) continue;
    
    const randomIndex = Math.floor(Math.random() * candidates.length);
    const targetWord = candidates[randomIndex];
    usedWords.add(targetWord);
    
    const distractorList = distractors.adjectives.includes(targetWord) ? distractors.adjectives :
                          distractors.verbs.includes(targetWord) ? distractors.verbs :
                          distractors.nouns.includes(targetWord) ? distractors.nouns :
                          distractors.adverbs.includes(targetWord) ? distractors.adverbs :
                          distractors.seasons;
    
    const options = [targetWord, ...distractorList.filter(d => d !== targetWord)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    
    const answerIndex = options.indexOf(targetWord);
    const answer = ['A', 'B', 'C', 'D'][answerIndex];
    
    fillBlankList.push({
      sentence: sentence.replace(targetWord, '____'),
      blankAnswer: targetWord,
      options: options.map((opt, idx) => `${['A', 'B', 'C', 'D'][idx]}. ${opt}`),
      answer: answer
    });
  }
  
  while (fillBlankList.length < 5) {
    const defaultWords = ['开心', '快乐', '美好', '美丽', '温暖'];
    const word = defaultWords[fillBlankList.length];
    const options = [word, ...distractors.adjectives.filter(d => d !== word)]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
    const answerIndex = options.indexOf(word);
    fillBlankList.push({
      sentence: `这里真____！`,
      blankAnswer: word,
      options: options.map((opt, idx) => `${['A', 'B', 'C', 'D'][idx]}. ${opt}`),
      answer: ['A', 'B', 'C', 'D'][answerIndex]
    });
  }
  
  return fillBlankList;
};

const getTopicFillBlank = (topic) => {
  const title = topic.title;
  
  if (title.includes('春天')) {
    return [
      { sentence: '____天来了，花儿都开了。', blankAnswer: '春', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'A' },
      { sentence: '花园里有____的花朵。', blankAnswer: '美丽', options: ['A. 美丽', 'B. 难看', 'C. 枯萎', 'D. 凋谢'], answer: 'A' },
      { sentence: '蝴蝶在花丛中____起舞。', blankAnswer: '翩翩', options: ['A. 翩翩', 'B. 慢慢', 'C. 静静', 'D. 悄悄'], answer: 'A' },
      { sentence: '小朋友们____地赏花。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '春天真是____的季节！', blankAnswer: '美好', options: ['A. 糟糕', 'B. 美好', 'C. 无聊', 'D. 难过'], answer: 'B' }
    ];
  }
  
  if (title.includes('夏天')) {
    return [
      { sentence: '____天来了，太阳火辣辣的。', blankAnswer: '夏', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'B' },
      { sentence: '小朋友们在____里开心玩耍。', blankAnswer: '泳池', options: ['A. 泳池', 'B. 教室', 'C. 花园', 'D. 房间'], answer: 'A' },
      { sentence: '天气____，大家都去游泳。', blankAnswer: '很热', options: ['A. 很热', 'B. 很冷', 'C. 凉爽', 'D. 温暖'], answer: 'A' },
      { sentence: '小朋友们____地戏水。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '夏天真是____的季节！', blankAnswer: '快乐', options: ['A. 糟糕', 'B. 快乐', 'C. 无聊', 'D. 难过'], answer: 'B' }
    ];
  }
  
  if (title.includes('秋天')) {
    return [
      { sentence: '____天来了，树叶变黄了。', blankAnswer: '秋', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'C' },
      { sentence: '树叶从树上____下来。', blankAnswer: '飘落', options: ['A. 飘落', 'B. 长出来', 'C. 不动', 'D. 消失'], answer: 'A' },
      { sentence: '落叶像____一样飞舞。', blankAnswer: '蝴蝶', options: ['A. 蝴蝶', 'B. 小鸟', 'C. 雪花', 'D. 雨滴'], answer: 'A' },
      { sentence: '秋天是____的季节。', blankAnswer: '金黄', options: ['A. 金黄', 'B. 翠绿', 'C. 雪白', 'D. 火红'], answer: 'A' },
      { sentence: '秋天真是____的季节！', blankAnswer: '丰收', options: ['A. 丰收', 'B. 贫瘠', 'C. 无聊', 'D. 寒冷'], answer: 'A' }
    ];
  }
  
  if (title.includes('冬天')) {
    return [
      { sentence: '____天来了，北风呼呼吹。', blankAnswer: '冬', options: ['A. 春', 'B. 夏', 'C. 秋', 'D. 冬'], answer: 'D' },
      { sentence: '天空飘起了____花。', blankAnswer: '雪', options: ['A. 雪', 'B. 雨', 'C. 霜', 'D. 雾'], answer: 'A' },
      { sentence: '小朋友们在____雪人。', blankAnswer: '堆', options: ['A. 堆', 'B. 拆', 'C. 看', 'D. 画'], answer: 'A' },
      { sentence: '冬天____的，要穿棉袄。', blankAnswer: '寒冷', options: ['A. 寒冷', 'B. 炎热', 'C. 温暖', 'D. 凉爽'], answer: 'A' },
      { sentence: '冬天真是____的季节！', blankAnswer: '美丽', options: ['A. 美丽', 'B. 糟糕', 'C. 无聊', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('下雨')) {
    return [
      { sentence: '____啦啦，下雨了。', blankAnswer: '哗啦', options: ['A. 哗啦', 'B. 呼呼', 'C. 叮咚', 'D. 滴答'], answer: 'A' },
      { sentence: '小朋友们撑着____伞。', blankAnswer: '雨', options: ['A. 雨', 'B. 阳', 'C. 遮', 'D. 大'], answer: 'A' },
      { sentence: '雨点像____一样落下。', blankAnswer: '珍珠', options: ['A. 珍珠', 'B. 雪花', 'C. 树叶', 'D. 花瓣'], answer: 'A' },
      { sentence: '雨后会出现____。', blankAnswer: '彩虹', options: ['A. 彩虹', 'B. 星星', 'C. 月亮', 'D. 太阳'], answer: 'A' },
      { sentence: '下雨天____极了！', blankAnswer: '美', options: ['A. 美', 'B. 糟', 'C. 无聊', 'D. 烦'], answer: 'A' }
    ];
  }
  
  if (title.includes('下雪')) {
    return [
      { sentence: '____雪啦，小朋友们真开心。', blankAnswer: '下', options: ['A. 下', 'B. 停', 'C. 化', 'D. 晴'], answer: 'A' },
      { sentence: '小朋友们在____雪人。', blankAnswer: '堆', options: ['A. 堆', 'B. 拆', 'C. 看', 'D. 画'], answer: 'A' },
      { sentence: '雪是____色的。', blankAnswer: '白', options: ['A. 白', 'B. 红', 'C. 黄', 'D. 绿'], answer: 'A' },
      { sentence: '小朋友们____地打雪仗。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '下雪天真____！', blankAnswer: '好玩', options: ['A. 好玩', 'B. 无聊', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('公园')) {
    return [
      { sentence: '____天，小朋友们去公园。', blankAnswer: '星期', options: ['A. 星期', 'B. 今', 'C. 明', 'D. 昨'], answer: 'A' },
      { sentence: '公园里有____的大树。', blankAnswer: '高高', options: ['A. 高高', 'B. 矮矮', 'C. 小小', 'D. 细细'], answer: 'A' },
      { sentence: '公园里有美丽的____。', blankAnswer: '花朵', options: ['A. 花朵', 'B. 房子', 'C. 汽车', 'D. 书本'], answer: 'A' },
      { sentence: '小朋友们____地玩耍。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '公园真是____的地方！', blankAnswer: '美丽', options: ['A. 美丽', 'B. 糟糕', 'C. 无聊', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('妈妈')) {
    return [
      { sentence: '小明帮____做家务。', blankAnswer: '妈妈', options: ['A. 妈妈', 'B. 爸爸', 'C. 老师', 'D. 同学'], answer: 'A' },
      { sentence: '他____起抹布擦桌子。', blankAnswer: '拿', options: ['A. 拿', 'B. 放', 'C. 扔', 'D. 看'], answer: 'A' },
      { sentence: '妈妈夸小明____。', blankAnswer: '懂事', options: ['A. 懂事', 'B. 调皮', 'C. 懒惰', 'D. 淘气'], answer: 'A' },
      { sentence: '小明____极了。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '帮助妈妈真____！', blankAnswer: '快乐', options: ['A. 快乐', 'B. 无聊', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('爷爷') || title.includes('奶奶')) {
    return [
      { sentence: '小红给____捶背。', blankAnswer: '爷爷奶奶', options: ['A. 爷爷奶奶', 'B. 爸爸妈妈', 'C. 老师同学', 'D. 小朋友'], answer: 'A' },
      { sentence: '她端来一杯____茶。', blankAnswer: '热', options: ['A. 热', 'B. 冷', 'C. 凉', 'D. 冰'], answer: 'A' },
      { sentence: '爷爷奶奶夸小红____。', blankAnswer: '孝顺', options: ['A. 孝顺', 'B. 调皮', 'C. 懒惰', 'D. 淘气'], answer: 'A' },
      { sentence: '一家人____极了。', blankAnswer: '幸福', options: ['A. 幸福', 'B. 难过', 'C. 生气', 'D. 无聊'], answer: 'A' },
      { sentence: '关爱老人真____！', blankAnswer: '温暖', options: ['A. 温暖', 'B. 寒冷', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('同学')) {
    return [
      { sentence: '小明看到同学____不动书。', blankAnswer: '搬', options: ['A. 搬', 'B. 拿', 'C. 看', 'D. 扔'], answer: 'A' },
      { sentence: '他主动过去____忙。', blankAnswer: '帮', options: ['A. 帮', 'B. 看', 'C. 走', 'D. 笑'], answer: 'A' },
      { sentence: '同学说____你！', blankAnswer: '谢谢', options: ['A. 谢谢', 'B. 不用', 'C. 走开', 'D. 讨厌'], answer: 'A' },
      { sentence: '他们____开心。', blankAnswer: '很', options: ['A. 不', 'B. 很', 'C. 没', 'D. 不'], answer: 'B' },
      { sentence: '助人为乐真____！', blankAnswer: '快乐', options: ['A. 快乐', 'B. 无聊', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('兔')) {
    return [
      { sentence: '小____兔提着篮子去采蘑菇。', blankAnswer: '白', options: ['A. 白', 'B. 黑', 'C. 灰', 'D. 花'], answer: 'A' },
      { sentence: '她来到____林里。', blankAnswer: '森', options: ['A. 森', 'B. 公', 'C. 草', 'D. 河'], answer: 'A' },
      { sentence: '她挑选____又大又新鲜的蘑菇。', blankAnswer: '着', options: ['A. 着', 'B. 了', 'C. 过', 'D. 的'], answer: 'A' },
      { sentence: '小白兔____极了。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '采蘑菇真____！', blankAnswer: '有趣', options: ['A. 有趣', 'B. 无聊', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('猫')) {
    return [
      { sentence: '小____在河边钓鱼。', blankAnswer: '猫', options: ['A. 猫', 'B. 狗', 'C. 兔', 'D. 鸡'], answer: 'A' },
      { sentence: '一开始它很____急。', blankAnswer: '着', options: ['A. 着', 'B. 不', 'C. 没', 'D. 很'], answer: 'A' },
      { sentence: '后来它____心等待。', blankAnswer: '耐', options: ['A. 耐', 'B. 着', 'C. 急', 'D. 开'], answer: 'A' },
      { sentence: '终于钓到了一条____鱼。', blankAnswer: '大', options: ['A. 大', 'B. 小', 'C. 死', 'D. 坏'], answer: 'A' },
      { sentence: '做事要有____心！', blankAnswer: '耐', options: ['A. 耐', 'B. 着', 'C. 急', 'D. 开'], answer: 'A' }
    ];
  }
  
  if (title.includes('鸡')) {
    return [
      { sentence: '鸡____妈带着小鸡们来到草地。', blankAnswer: '妈', options: ['A. 妈', 'B. 爸', 'C. 爸', 'D. 奶'], answer: 'A' },
      { sentence: '小鸡们叽叽____喳找虫子。', blankAnswer: '喳', options: ['A. 喳', 'B. 叫', 'C. 闹', 'D. 吵'], answer: 'A' },
      { sentence: '它们____到了很多虫子。', blankAnswer: '找', options: ['A. 找', 'B. 丢', 'C. 吃', 'D. 看'], answer: 'A' },
      { sentence: '小鸡们____极了。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '小鸡捉虫真____！', blankAnswer: '可爱', options: ['A. 可爱', 'B. 无聊', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  if (title.includes('鸟')) {
    return [
      { sentence: '小____们在树上筑巢。', blankAnswer: '鸟', options: ['A. 鸟', 'B. 猫', 'C. 兔', 'D. 鸡'], answer: 'A' },
      { sentence: '它们用____枝和草叶搭窝。', blankAnswer: '树', options: ['A. 树', 'B. 花', 'C. 草', 'D. 叶'], answer: 'A' },
      { sentence: '鸟巢是____们温暖的家。', blankAnswer: '它', options: ['A. 它', 'B. 我', 'C. 你', 'D. 他'], answer: 'A' },
      { sentence: '小鸟们____极了。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
      { sentence: '小鸟筑巢真____！', blankAnswer: '勤劳', options: ['A. 勤劳', 'B. 懒惰', 'C. 糟糕', 'D. 难过'], answer: 'A' }
    ];
  }
  
  return [
    { sentence: '____天来了，天气很好。', blankAnswer: '今', options: ['A. 昨', 'B. 今', 'C. 明', 'D. 后'], answer: 'B' },
    { sentence: '小朋友们____到这里。', blankAnswer: '来', options: ['A. 来', 'B. 去', 'C. 回', 'D. 离'], answer: 'A' },
    { sentence: '他们____地玩耍。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
    { sentence: '大家都很____。', blankAnswer: '快乐', options: ['A. 难过', 'B. 快乐', 'C. 生气', 'D. 无聊'], answer: 'B' },
    { sentence: '这真是____的一天！', blankAnswer: '美好', options: ['A. 糟糕', 'B. 美好', 'C. 无聊', 'D. 难过'], answer: 'B' }
  ];
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
  
  const sensesQuestions = [
    { question: '看到了什么？', options: ['A. ' + topic.title, 'B. 美丽的风景', 'C. 有趣的事情', 'D. 可爱的动物'], answer: 'A' },
    { question: '听到了什么？', options: ['A. 欢笑声', 'B. 风声', 'C. 雨声', 'D. 歌声'], answer: 'A' },
    { question: '闻到了什么？', options: ['A. 清新的空气', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
    { question: '尝到了什么？', options: ['A. 甜甜的', 'B. 酸酸的', 'C. 咸咸的', 'D. 无'], answer: 'D' },
    { question: '感觉到什么？', options: ['A. 开心', 'B. 温暖', 'C. 快乐', 'D. 幸福'], answer: 'A' }
  ];
  
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
  }
});