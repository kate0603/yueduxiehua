const fs = require('fs');

const articles = [];
let id = 1;

const categories = [
  { id: 'story', name: '故事', emojis: ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯'] },
  { id: 'nature', name: '自然', emojis: ['🌸', '🌺', '🌻', '🌹', '🌱', '🌿', '🍀', '🌷', '🍃', '🌾'] },
  { id: 'science', name: '科普', emojis: ['🔬', '🔭', '🧪', '⚗️', '🌍', '☀️', '🌙', '⭐', '💧', '🔥'] },
  { id: 'fable', name: '寓言', emojis: ['🐢', '🐇', '🦉', '🦋', '🐝', '🐜', '🐞', '🦊', '🐻', '🐯'] },
  { id: 'poem', name: '诗歌', emojis: ['📝', '✏️', '📜', '🌙', '🌸', '🌺', '🍃', '🍂', '🌊', '⛅'] },
  { id: 'life', name: '生活', emojis: ['🏠', '👨‍👩‍👧', '🍎', '📚', '🎒', '🚌', '🍳', '🧹', '🛁', '💤'] }
];

const storyTemplates = [
  { title: '{name}的一天', content: '{name}今天过得很开心。早上，它去{place}玩，遇到了{friend}。它们一起{activity}，玩得很开心。中午，{name}回家吃了{food}。下午，{name}学习了{skill}。晚上，{name}早早睡觉了。', questions: ['{name}早上去哪里玩了？', '{name}和谁一起玩？', '{name}中午吃了什么？', '{name}下午学习了什么？'] },
  { title: '{name}找朋友', content: '{name}想找一个好朋友。它来到{place}，遇到了{friend1}，但是{friend1}在{activity1}。然后它又遇到了{friend2}，{friend2}愿意和它做朋友。它们一起{activity2}，成为了最好的朋友。', questions: ['{name}想找什么？', '{name}遇到了谁？', '{friend2}愿意和{name}做朋友吗？', '它们成为了什么？'] },
  { title: '{name}学本领', content: '{name}想学一项新本领。它去找{teacher}学习{skill}。一开始，{name}学得不好，但是它没有放弃。经过很多次练习，{name}终于学会了{skill}。大家都夸{name}真棒！', questions: ['{name}想学什么？', '{name}找谁学习？', '{name}一开始学得好吗？', '{name}最后学会了吗？'] },
  { title: '{name}的生日', content: '今天是{name}的生日！朋友们都来给它庆祝。{friend1}带来了{gift1}，{friend2}带来了{gift2}。大家一起唱生日歌，吃生日蛋糕。{name}许了一个愿望，希望明年的生日也能这么开心。', questions: ['今天是谁的生日？', '{friend1}带来了什么？', '大家一起做了什么？', '{name}许了什么愿望？'] },
  { title: '{name}去旅行', content: '{name}决定去旅行。它收拾好行李，坐上{vehicle}出发了。它先来到{place1}，看到了{thing1}。然后又去了{place2}，看到了{thing2}。这次旅行真有趣！', questions: ['{name}决定做什么？', '{name}坐什么出发？', '{name}先去了哪里？', '这次旅行有趣吗？'] }
];

const natureTemplates = [
  { title: '美丽的{season}', content: '{season}来了！{season}的天气{weather}。{nature1}都{action1}了。小朋友们都喜欢在{season}里{activity}。{season}真是一个美丽的季节！', questions: ['什么季节来了？', '{season}的天气怎么样？', '{nature1}都怎么了？', '小朋友们喜欢做什么？'] },
  { title: '{animal}的家', content: '{animal}住在{place}。它的家{description}。{animal}每天都会{activity}。下雨的时候，{animal}会{action}。{animal}很喜欢自己的家。', questions: ['{animal}住在哪里？', '{animal}的家怎么样？', '{animal}每天做什么？', '下雨时{animal}会怎么做？'] },
  { title: '可爱的{plant}', content: '{plant}是一种{description}的植物。它的叶子{leaf}，花朵{flower}。{plant}喜欢{condition}，不喜欢{avoid}。很多人都喜欢{plant}。', questions: ['{plant}是什么样的植物？', '{plant}的叶子怎么样？', '{plant}喜欢什么？', '人们喜欢{plant}吗？'] },
  { title: '有趣的{weather}', content: '{weather}来了！{weather}的时候，天空{sky}。地上{ground}。小朋友们{activity}。{weather}过后，{result}。', questions: ['什么天气来了？', '{weather}时天空怎么样？', '小朋友们做什么？', '{weather}过后怎么样？'] },
  { title: '{place}的早晨', content: '{place}的早晨很美丽。太阳{sun}，小鸟{bird}。{animal}在{activity}。小朋友们{action}。{place}的早晨真美好！', questions: ['哪里的早晨很美丽？', '太阳怎么样？', '小鸟在做什么？', '{place}的早晨美好吗？'] }
];

const scienceTemplates = [
  { title: '{thing}的秘密', content: '{thing}是我们生活中很重要的东西。它的作用是{function}。{thing}是怎么来的呢？原来，{process}。我们要{care}。', questions: ['{thing}有什么作用？', '{thing}是怎么来的？', '我们应该怎样对待{thing}？', '{thing}重要吗？'] },
  { title: '为什么{phenomenon}？', content: '小朋友们，你们知道为什么{phenomenon}吗？原来，{reason}。所以，{result}。这真是太有趣了！', questions: ['为什么{phenomenon}？', '原因是什么？', '结果是什么？', '这有趣吗？'] },
  { title: '{animal}的本领', content: '{animal}有很多本领。它能{skill1}，还能{skill2}。{animal}的这些本领是因为{reason}。我们要向{animal}学习{lesson}。', questions: ['{animal}有什么本领？', '{animal}为什么有这些本领？', '我们要向{animal}学习什么？', '{animal}厉害吗？'] },
  { title: '神奇的{thing}', content: '{thing}很神奇！它能{magic1}，还能{magic2}。科学家们发现，{secret}。所以，{thing}是我们的好朋友。', questions: ['{thing}能做什么？', '科学家发现了什么？', '{thing}是我们的好朋友吗？', '{thing}神奇吗？'] },
  { title: '安全小知识', content: '小朋友们，我们要注意安全。在{place1}，要{rule1}。在{place2}，要{rule2}。这样我们才能安全地生活和学习。', questions: ['我们要注意什么？', '在{place1}要怎么做？', '在{place2}要怎么做？', '这样做有什么好处？'] }
];

const fableTemplates = [
  { title: '{animal1}和{animal2}', content: '{animal1}和{animal2}是邻居。{animal1}很{character1}，{animal2}很{character2}。有一天，{event}。结果，{result}。这个故事告诉我们{lesson}。', questions: ['{animal1}和{animal2}是什么关系？', '{animal1}是什么样的？', '发生了什么事？', '这个故事告诉我们什么？'] },
  { title: '{animal}的教训', content: '{animal}很{character}。有一天，它{action}。结果，{bad_result}。后来，{animal}明白了{lesson}。从此，{change}。', questions: ['{animal}是什么样的？', '{animal}做了什么？', '结果怎么样？', '{animal}明白了什么道理？'] },
  { title: '聪明的{animal}', content: '{animal}遇到了{problem}。它很着急，但是没有放弃。{animal}想了一个好办法：{idea}。最后，{solution}。大家都夸{animal}聪明！', questions: ['{animal}遇到了什么问题？', '{animal}想了什么办法？', '最后怎么样了？', '大家夸{animal}什么？'] },
  { title: '勤劳的{animal}', content: '{animal}很勤劳。每天，它{work1}，还{work2}。其他{other_animal}都在{lazy_action}，只有{animal}在努力。后来，{reward}。', questions: ['{animal}怎么样？', '{animal}每天做什么？', '其他{animal}在做什么？', '{animal}得到了什么？'] },
  { title: '骄傲的{animal}', content: '{animal}很骄傲，因为它{reason}。它看不起{other_animal}。有一天，{event}。{animal}终于明白{lesson}。', questions: ['{animal}为什么骄傲？', '{animal}看不起谁？', '发生了什么事？', '{animal}明白了什么？'] }
];

const poemTemplates = [
  { title: '{poem_name}', content: '{poem_content}\n\n这首诗描写了{description}。诗人通过{method}，表达了{feeling}。读这首诗，我们能感受到{emotion}。', questions: ['这首诗叫什么名字？', '诗里描写了什么？', '诗人表达了什么感情？', '读这首诗有什么感受？'] },
  { title: '读{poem_name}', content: '{poem_content}\n\n这首诗是{author}写的。诗中{line}的意思是{meaning}。这首诗告诉我们{lesson}。', questions: ['这首诗是谁写的？', '{line}是什么意思？', '这首诗告诉我们什么？', '你喜欢这首诗吗？'] },
  { title: '美丽的诗句', content: '\"{line1}\"和\"{line2}\"是两句很美的诗句。它们描写了{scene}。读着这些诗句，我们仿佛看到了{picture}。', questions: ['这两句诗描写了什么？', '读诗句时仿佛看到了什么？', '你觉得这些诗句美吗？', '你还知道哪些诗句？'] },
  { title: '诗中的{season}', content: '{poem_content}\n\n这首诗描写了{season}的景色。诗中有{thing1}、{thing2}和{thing3}。它们让{season}变得更加美丽。', questions: ['诗中描写的是什么季节？', '诗中有哪些事物？', '{season}美丽吗？', '你喜欢{season}吗？'] },
  { title: '古诗欣赏', content: '{poem_content}\n\n这首古诗表达了诗人{feeling}的感情。诗的语言{language}，意境{artistic}。这是一首很有名的诗。', questions: ['这首诗表达了什么感情？', '诗的语言怎么样？', '这首诗有名吗？', '你会背这首诗吗？'] }
];

const lifeTemplates = [
  { title: '我的{family_member}', content: '我的{family_member}很{character}。{family_member}每天{activity}。我很喜欢{family_member}，因为{reason}。我爱我的{family_member}！', questions: ['我的{family_member}是什么样的？', '{family_member}每天做什么？', '我为什么喜欢{family_member}？', '我爱{family_member}吗？'] },
  { title: '我爱我的家', content: '我家有{member1}、{member2}和{member3}。我们家很{description}。每天，我们一起{activity}。我爱我的家！', questions: ['我家有哪些人？', '我们家怎么样？', '我们每天一起做什么？', '我爱我的家吗？'] },
  { title: '上学的路上', content: '每天上学，我都会经过{place1}和{place2}。路上，我会看到{thing1}和{thing2}。有时候，我还会{activity}。我喜欢上学的路！', questions: ['我上学经过哪里？', '路上看到了什么？', '有时候我会做什么？', '我喜欢上学的路吗？'] },
  { title: '我的好朋友', content: '我有一个好朋友，叫{name}。{name}很{character}。我们一起{activity1}，还一起{activity2}。我们是最好的朋友！', questions: ['我的好朋友叫什么名字？', '{name}是什么样的？', '我们一起做什么？', '我们是什么关系？'] },
  { title: '快乐的{day}', content: '{day}那天，我{activity1}，还{activity2}。晚上，我{activity3}。这真是快乐的一天！', questions: ['{day}那天我做了什么？', '晚上我做了什么？', '这一天快乐吗？', '你喜欢{day}吗？'] }
];

const templateMap = {
  story: storyTemplates,
  nature: natureTemplates,
  science: scienceTemplates,
  fable: fableTemplates,
  poem: poemTemplates,
  life: lifeTemplates
};

const names = ['小猫', '小狗', '小兔子', '小熊', '小松鼠', '小猴子', '小鸟', '小鱼', '小乌龟', '小熊猫'];
const places = ['公园', '森林', '河边', '山上', '花园', '学校', '家里', '超市', '图书馆', '游乐场'];
const friends = ['小狗', '小兔子', '小熊', '小松鼠', '小猴子', '小鸟', '小鱼', '小乌龟'];
const activities = ['玩游戏', '画画', '唱歌', '跳舞', '跑步', '跳绳', '看书', '写字', '做手工', '讲故事'];
const foods = ['苹果', '香蕉', '蛋糕', '米饭', '面条', '饺子', '包子', '饼干', '冰淇淋', '巧克力'];
const skills = ['画画', '写字', '游泳', '骑自行车', '唱歌', '跳舞', '弹琴', '下棋', '做饭', '种花'];
const gifts = ['蛋糕', '玩具', '书', '画', '花', '卡片', '糖果', '气球', '拼图', '积木'];
const vehicles = ['汽车', '火车', '飞机', '轮船', '自行车', '公交车', '地铁', '马车', '火箭', '飞船'];
const seasons = ['春天', '夏天', '秋天', '冬天'];
const weathers = ['晴天', '阴天', '雨天', '雪天', '刮风', '打雷', '闪电', '雾天'];
const animals = ['小猫', '小狗', '小兔子', '小熊', '小松鼠', '小鸟', '小鱼', '大象', '长颈鹿', '老虎'];
const plants = ['花', '草', '树', '竹子', '向日葵', '玫瑰', '牡丹', '荷花', '菊花', '梅花'];
const things = ['水', '太阳', '月亮', '星星', '雨', '雪', '风', '云', '火', '电'];
const phenomena = ['天是蓝色的', '月亮会变圆', '树叶会变黄', '水会结冰', '太阳会东升西落'];
const familyMembers = ['爸爸', '妈妈', '爷爷', '奶奶', '哥哥', '姐姐', '弟弟', '妹妹'];
const days = ['生日', '儿童节', '新年', '周末', '假期', '开学第一天', '考试结束', '运动会'];

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function fillTemplate(template, grade, category) {
  const filled = { ...template };
  const fillers = {
    name: randomPick(names),
    place: randomPick(places),
    place1: randomPick(places),
    place2: randomPick(places),
    friend: randomPick(friends),
    friend1: randomPick(friends),
    friend2: randomPick(friends.filter(f => f !== randomPick(friends))),
    activity: randomPick(activities),
    activity1: randomPick(activities),
    activity2: randomPick(activities.filter(a => a !== randomPick(activities))),
    activity3: randomPick(activities),
    food: randomPick(foods),
    skill: randomPick(skills),
    gift1: randomPick(gifts),
    gift2: randomPick(gifts.filter(g => g !== randomPick(gifts))),
    vehicle: randomPick(vehicles),
    thing1: randomPick(things),
    thing2: randomPick(things.filter(t => t !== randomPick(things))),
    thing3: randomPick(things),
    season: randomPick(seasons),
    weather: randomPick(weathers),
    animal: randomPick(animals),
    animal1: randomPick(animals),
    animal2: randomPick(animals.filter(a => a !== randomPick(animals))),
    other_animal: randomPick(animals),
    plant: randomPick(plants),
    phenomenon: randomPick(phenomena),
    result: ['大家都开心地笑了', '它们成为了好朋友', '{name}学会了新本领', '大家都夸{name}真棒', '从此它们过上了幸福的生活'][Math.floor(Math.random() * 5)],
    reason: ['它很聪明', '它很勤劳', '它很勇敢', '它很善良', '它有很多本领'][Math.floor(Math.random() * 5)],
    lesson: ['要勤劳', '要谦虚', '要团结', '要勇敢', '要乐于助人'][Math.floor(Math.random() * 5)],
    character: ['聪明', '勤劳', '勇敢', '善良', '乐于助人', '谦虚', '有礼貌', '爱学习'][Math.floor(Math.random() * 8)],
    character1: ['骄傲', '懒惰', '自私', '胆小'][Math.floor(Math.random() * 4)],
    character2: ['谦虚', '勤劳', '善良', '勇敢'][Math.floor(Math.random() * 4)],
    description: ['温暖', '快乐', '美丽', '干净', '舒适'][Math.floor(Math.random() * 5)],
    family_member: randomPick(familyMembers),
    member1: randomPick(familyMembers),
    member2: randomPick(familyMembers.filter(m => m !== randomPick(familyMembers))),
    member3: randomPick(familyMembers.filter(m => m !== randomPick(familyMembers) && m !== randomPick(familyMembers))),
    day: randomPick(days),
    author: ['李白', '杜甫', '孟浩然', '白居易', '王维'][Math.floor(Math.random() * 5)],
    poem_name: ['静夜思', '春晓', '登鹳雀楼', '悯农', '咏鹅'][Math.floor(Math.random() * 5)],
    poem_content: ['床前明月光，疑是地上霜。举头望明月，低头思故乡。', '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。', '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。', '锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。', '鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。'][Math.floor(Math.random() * 5)],
    line: ['床前明月光', '春眠不觉晓', '白日依山尽', '锄禾日当午', '鹅鹅鹅'][Math.floor(Math.random() * 5)],
    line1: ['两个黄鹂鸣翠柳', '春风又绿江南岸', '接天莲叶无穷碧', '飞流直下三千尺'][Math.floor(Math.random() * 4)],
    line2: ['一行白鹭上青天', '明月何时照我还', '映日荷花别样红', '疑是银河落九天'][Math.floor(Math.random() * 4)],
    sky: ['蓝蓝的', '灰蒙蒙的', '乌云密布', '星光灿烂', '月亮弯弯'][Math.floor(Math.random() * 5)],
    ground: ['湿湿的', '白白的', '绿绿的', '金黄的'][Math.floor(Math.random() * 4)],
    sun: ['升起来了', '暖暖的', '金灿灿的', '光芒万丈'][Math.floor(Math.random() * 4)],
    bird: ['在唱歌', '在飞翔', '在树上休息', '在找食物'][Math.floor(Math.random() * 4)],
    leaf: ['绿绿的', '大大的', '小小的', '尖尖的'][Math.floor(Math.random() * 4)],
    flower: ['红红的', '粉粉的', '黄黄的', '香香的'][Math.floor(Math.random() * 4)],
    condition: ['阳光', '水分', '温暖', '湿润'][Math.floor(Math.random() * 4)],
    avoid: ['寒冷', '干旱', '阴暗', '积水'][Math.floor(Math.random() * 4)],
    function: ['帮助我们{activity}', '给我们带来温暖', '让生活更方便', '保护我们安全'][Math.floor(Math.random() * 4)],
    process: ['它是由{material}做成的', '它是{natural}形成的', '人们用{tool}制造它'][Math.floor(Math.random() * 3)],
    care: ['爱护它', '珍惜它', '正确使用它', '节约使用它'][Math.floor(Math.random() * 4)],
    magic1: ['{action1}', '{action2}', '{action3}'][Math.floor(Math.random() * 3)],
    magic2: ['{action4}', '{action5}', '{action6}'][Math.floor(Math.random() * 3)],
    secret: ['它的原理是{principle}', '它含有{element}', '它能{ability}'][Math.floor(Math.random() * 3)],
    action: ['躲在家里', '找地方避雨', '穿上雨衣', '开心地玩耍'][Math.floor(Math.random() * 4)],
    action1: ['发光', '发热', '转动', '飞行'][Math.floor(Math.random() * 4)],
    action2: ['唱歌', '跳舞', '画画', '写字'][Math.floor(Math.random() * 4)],
    action3: ['照亮房间', '温暖身体', '提供能量', '传递信息'][Math.floor(Math.random() * 4)],
    action4: ['帮助我们学习', '让我们开心', '保护我们', '美化环境'][Math.floor(Math.random() * 4)],
    action5: ['节约时间', '提高效率', '增加乐趣', '促进健康'][Math.floor(Math.random() * 4)],
    action6: ['连接远方', '记录美好', '创造奇迹', '改变世界'][Math.floor(Math.random() * 4)],
    principle: ['{science_principle}', '{science_principle2}', '{science_principle3}'][Math.floor(Math.random() * 3)],
    element: ['水', '空气', '阳光', '能量'][Math.floor(Math.random() * 4)],
    ability: ['{action1}', '{action2}', '{action3}'][Math.floor(Math.random() * 3)],
    science_principle: ['热胀冷缩', '光合作用', '万有引力', '电磁感应'][Math.floor(Math.random() * 4)],
    science_principle2: ['惯性定律', '浮力原理', '杠杆原理', '化学反应'][Math.floor(Math.random() * 4)],
    science_principle3: ['能量守恒', '物质循环', '生态平衡', '信息传递'][Math.floor(Math.random() * 4)],
    event: ['发生了一件事', '遇到了困难', '有了新发现', '收到了礼物'][Math.floor(Math.random() * 4)],
    bad_result: ['遇到了麻烦', '受到了教训', '失去了朋友', '感到后悔'][Math.floor(Math.random() * 4)],
    change: ['它变得{character2}', '它学会了{lesson}', '它和{other_animal}成为了朋友'][Math.floor(Math.random() * 3)],
    reward: ['得到了奖励', '收获了成果', '受到了表扬', '过上了好日子'][Math.floor(Math.random() * 4)],
    lazy_action: ['睡觉', '玩耍', '聊天', '发呆'][Math.floor(Math.random() * 4)],
    idea: ['用{tool}解决问题', '和{friend}一起合作', '坚持不放弃'][Math.floor(Math.random() * 3)],
    solution: ['问题解决了', '困难克服了', '愿望实现了', '目标达成了'][Math.floor(Math.random() * 4)],
    meaning: ['{explanation}', '{explanation2}', '{explanation3}'][Math.floor(Math.random() * 3)],
    explanation: ['诗人看到{thing}想起了家乡', '{nature}很美', '时间过得很快'][Math.floor(Math.random() * 3)],
    explanation2: ['{animal}很可爱', '{season}很美丽', '人们很勤劳'][Math.floor(Math.random() * 3)],
    explanation3: ['要珍惜时间', '要爱护自然', '要努力学习'][Math.floor(Math.random() * 3)],
    feeling: ['思念', '快乐', '悲伤', '热爱', '赞美'][Math.floor(Math.random() * 5)],
    emotion: ['{feeling}', '美好', '感动', '温馨'][Math.floor(Math.random() * 4)],
    language: ['优美', '简洁', '生动', '形象'][Math.floor(Math.random() * 4)],
    artistic: ['深远', '优美', '清新', '壮丽'][Math.floor(Math.random() * 4)],
    method: ['比喻', '拟人', '夸张', '排比'][Math.floor(Math.random() * 4)],
    scene: ['美丽的风景', '有趣的事情', '温馨的场景'][Math.floor(Math.random() * 3)],
    picture: ['{scene}', '{nature}的美丽', '{animal}的可爱'][Math.floor(Math.random() * 3)],
    natural: ['大自然', '天空', '大地', '海洋'][Math.floor(Math.random() * 4)],
    material: ['木头', '金属', '塑料', '纸张'][Math.floor(Math.random() * 4)],
    tool: ['机器', '电脑', '手机', '书本'][Math.floor(Math.random() * 4)],
    nature1: ['花儿', '草儿', '树叶', '小鸟'][Math.floor(Math.random() * 4)],
    action1: ['开了', '绿了', '长出来了', '飞回来了'][Math.floor(Math.random() * 4)]
  };

  Object.keys(fillers).forEach(key => {
    const value = fillers[key];
    filled.title = filled.title.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    filled.content = filled.content.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    filled.questions = filled.questions.map(q => q.replace(new RegExp(`\\{${key}\\}`, 'g'), value));
  });

  return filled;
}

for (let grade = 1; grade <= 3; grade++) {
  categories.forEach(category => {
    for (let i = 0; i < 10; i++) {
      const templates = templateMap[category.id];
      const template = templates[i % templates.length];
      const filled = fillTemplate(template, grade, category.id);
      
      const article = {
        id: id++,
        title: filled.title,
        icon: category.emojis[i % category.emojis.length],
        category: category.id,
        difficulty: grade === 1 ? '⭐' : grade === 2 ? '⭐⭐' : '⭐⭐⭐',
        grade: grade,
        preview: filled.content.slice(0, 30) + '...',
        content: filled.content,
        questions: filled.questions.map(q => ({
          question: q,
          options: ['A. ' + randomPick(['是', '有', '在', '会', '能', '要'] + names.slice(0, 5)),
                    'B. ' + randomPick(['不是', '没有', '不在', '不会', '不能', '不要'] + places.slice(0, 5)),
                    'C. ' + randomPick(['可能', '也许', '有时候', '经常', '偶尔'] + activities.slice(0, 5)),
                    'D. ' + randomPick(['是的', '对的', '没错', '正确', '好的'] + foods.slice(0, 5))],
          correctAnswer: 'A'
        }))
      };
      
      articles.push(article);
    }
  });
}

const output = `module.exports = {\n  articles: [\n${articles.map(a => `    {\n      id: ${a.id},\n      title: '${a.title}',\n      icon: '${a.icon}',\n      category: '${a.category}',\n      difficulty: '${a.difficulty}',\n      grade: ${a.grade},\n      preview: '${a.preview}',\n      content: '${a.content.replace(/'/g, "\\'").replace(/\n/g, "\\n")}',\n      questions: [\n${a.questions.map(q => `        {\n          question: '${q.question}',\n          options: ['${q.options.join("', '")}'],\n          correctAnswer: '${q.correctAnswer}'\n        }`).join(',\n')}\n      ]\n    }`).join(',\n')}\n  ]\n};`;

fs.writeFileSync('./data/reading-data.js', output, 'utf8');
console.log(`Generated ${articles.length} articles!`);
