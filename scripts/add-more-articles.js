const fs = require('fs');

const categories = ['story', 'nature', 'science', 'fable', 'poem', 'life'];
const emojis = {
  story: ['🐱', '🐶', '🐰', '🐻', '🐭', '🐹', '🦊', '🐼', '🐨', '🐯'],
  nature: ['🌸', '🌺', '🌻', '🌹', '🌱', '🌿', '🍀', '🌷', '🍃', '🌾'],
  science: ['🔬', '🔭', '🧪', '⚗️', '🌍', '☀️', '🌙', '⭐', '💧', '🔥'],
  fable: ['🐢', '🐇', '🦉', '🦋', '🐝', '🐜', '🐞', '🦊', '🐻', '🐯'],
  poem: ['📝', '✏️', '📜', '🌙', '🌸', '🌺', '🍃', '🍂', '🌊', '⛅'],
  life: ['🏠', '👨‍👩‍👧', '🍎', '📚', '🎒', '🚌', '🍳', '🧹', '🛁', '💤']
};

const names = ['小猫', '小狗', '小兔子', '小熊', '小松鼠', '小猴子', '小鸟', '小鱼', '小乌龟', '小熊猫'];
const places = ['公园', '森林', '河边', '山上', '花园', '学校', '家里', '超市', '图书馆', '游乐场'];
const friends = ['小狗', '小兔子', '小熊', '小松鼠', '小猴子', '小鸟', '小鱼', '小乌龟'];
const activities = ['玩游戏', '画画', '唱歌', '跳舞', '跑步', '跳绳', '看书', '写字', '做手工', '讲故事'];

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateArticles(grade, startId) {
  const articles = [];
  let id = startId;
  
  categories.forEach(category => {
    for (let i = 0; i < 10; i++) {
      const name = randomPick(names);
      const place = randomPick(places);
      const friend = randomPick(friends);
      const activity = randomPick(activities);
      const emoji = emojis[category][i % emojis[category].length];
      const difficulty = grade === 1 ? '⭐' : grade === 2 ? '⭐⭐' : '⭐⭐⭐';
      
      let title, preview, content, questions;
      
      switch(category) {
        case 'story':
          title = `${name}的冒险`;
          preview = `${name}今天去${place}冒险，遇到了很多有趣的事情...`;
          content = `${name}今天去${place}冒险。它遇到了${friend}，它们一起${activity}。它们还发现了一个神秘的山洞，里面有很多宝藏！${name}和${friend}成为了最好的朋友。`;
          questions = [
            { q: `${name}去哪里冒险了？`, a: `A. ${place}` },
            { q: `${name}遇到了谁？`, a: `A. ${friend}` },
            { q: `${name}和${friend}一起做什么？`, a: `A. ${activity}` },
            { q: `它们发现了什么？`, a: `A. 神秘的山洞` }
          ];
          break;
        case 'nature':
          title = `${place}的美景`;
          preview = `${place}的景色非常美丽，有很多可爱的小动物...`;
          content = `${place}的景色非常美丽！春天来了，花儿都开了，小鸟在唱歌。${name}来到${place}，看到了蝴蝶在花丛中飞舞，小兔子在草地上奔跑。这里真是一个好地方！`;
          questions = [
            { q: `哪里的景色很美丽？`, a: `A. ${place}` },
            { q: `什么季节来了？`, a: `A. 春天` },
            { q: `谁在唱歌？`, a: `A. 小鸟` },
            { q: `${name}看到了什么在飞舞？`, a: `A. 蝴蝶` }
          ];
          break;
        case 'science':
          title = `${name}学科学`;
          preview = `${name}今天学习了一个有趣的科学知识...`;
          content = `${name}今天学习了一个有趣的科学知识！原来${activity}需要用到很多科学原理。比如，我们看到的彩虹，是因为阳光穿过水滴发生了折射。${name}觉得科学真有趣！`;
          questions = [
            { q: `${name}学习了什么？`, a: `A. 科学知识` },
            { q: `彩虹是怎么形成的？`, a: `A. 阳光穿过水滴折射` },
            { q: `${name}觉得科学怎么样？`, a: `A. 很有趣` },
            { q: `我们可以在哪里学习科学？`, a: `A. 学校` }
          ];
          break;
        case 'fable':
          title = `${name}和${friend}`;
          preview = `${name}和${friend}是好朋友，它们一起经历了很多事情...`;
          content = `${name}和${friend}是好朋友。有一天，${name}遇到了困难，${friend}主动帮助了它。${name}很感动，它明白了朋友之间要互相帮助的道理。`;
          questions = [
            { q: `${name}和谁是好朋友？`, a: `A. ${friend}` },
            { q: `${name}遇到了什么？`, a: `A. 困难` },
            { q: `谁帮助了${name}？`, a: `A. ${friend}` },
            { q: `这个故事告诉我们什么？`, a: `A. 朋友要互相帮助` }
          ];
          break;
        case 'poem':
          title = `美丽的${place}`;
          preview = `在${place}，我看到了很多美丽的景色，忍不住想写诗...`;
          content = `在${place}，我看到了很多美丽的景色。花儿开了，草儿绿了，小鸟在天上飞。我忍不住写下了一首诗，表达我对${place}的喜爱。`;
          questions = [
            { q: `在哪里看到了美丽的景色？`, a: `A. ${place}` },
            { q: `花儿怎么样了？`, a: `A. 开了` },
            { q: `小鸟在做什么？`, a: `A. 在天上飞` },
            { q: `我写下了什么？`, a: `A. 一首诗` }
          ];
          break;
        case 'life':
          title = `我的${activity}时光`;
          preview = `我最喜欢${activity}了，每次都很开心...`;
          content = `我最喜欢${activity}了！每天放学回家，我都会花时间${activity}。妈妈说我做得越来越好了，我听了很开心。${activity}让我的生活变得丰富多彩！`;
          questions = [
            { q: `我最喜欢做什么？`, a: `A. ${activity}` },
            { q: `我什么时候${activity}？`, a: `A. 放学回家后` },
            { q: `妈妈说我做得怎么样？`, a: `A. 越来越好了` },
            { q: `${activity}让我的生活变得怎么样？`, a: `A. 丰富多彩` }
          ];
          break;
      }
      
      articles.push({
        id: id++,
        title,
        icon: emoji,
        category,
        difficulty,
        grade,
        preview,
        content,
        questions: questions.map(q => ({
          question: q.q,
          options: [q.a, `B. 不是`, `C. 可能`, `D. 不知道`],
          correctAnswer: 'A'
        }))
      });
    }
  });
  
  return articles;
}

const grade2Articles = generateArticles(2, 61);
const grade3Articles = generateArticles(3, 121);

const data = fs.readFileSync('./data/reading-data.js', 'utf8');
const newData = data.replace('] }', `,\n${JSON.stringify([...grade2Articles, ...grade3Articles], null, 4).slice(1, -1)}\n] }`);

fs.writeFileSync('./data/reading-data.js', newData, 'utf8');
console.log(`Added ${grade2Articles.length + grade3Articles.length} articles!`);
