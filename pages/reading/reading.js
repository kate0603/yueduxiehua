const app = getApp();
const readingData = require('../../data/reading-data.js');

Page({
  data: {
    articles: [],
    currentCategory: 'all',
    currentGrade: 3,
    showWriting: true,
    activeTab: 'method',
    tabs: [
      { id: 'method', name: '精读方法', emoji: '📚' },
      { id: 'practice', name: '专项训练', emoji: '🎯' }
    ],
    categories: [
      { id: 'all', name: '全部', emoji: '🎯' },
      { id: 'story', name: '故事', emoji: '📖' },
      { id: 'nature', name: '自然', emoji: '🌿' },
      { id: 'science', name: '科普', emoji: '🔬' },
      { id: 'fable', name: '寓言', emoji: '🐰' },
      { id: 'poem', name: '诗歌', emoji: '📝' },
      { id: 'life', name: '生活', emoji: '🏠' }
    ],
    badges: ['🔥 热门', '💎 精选', '⭐ 推荐', '🎁 新上线', '🏆 经典'],
    completedArticles: [],
    readingMethods: [
      { 
        id: 1, 
        title: '圈点批注法', 
        icon: '✏️', 
        description: '在阅读时圈出关键词，批注自己的理解和感受',
        steps: ['通读全文了解大意', '圈出重点词语和句子', '在空白处写下批注', '总结文章主旨'],
        sampleArticleId: 1001
      },
      { 
        id: 2, 
        title: '提问阅读法', 
        icon: '❓', 
        description: '带着问题去阅读，主动思考文章内容',
        steps: ['阅读前提出问题', '边读边寻找答案', '记录不懂的地方', '读完后总结回答'],
        sampleArticleId: 1002
      },
      { 
        id: 3, 
        title: '思维导图法', 
        icon: '🧠', 
        description: '用思维导图梳理文章结构和内容',
        steps: ['确定文章中心主题', '梳理各段落要点', '建立知识点联系', '绘制思维导图'],
        sampleArticleId: 1003
      },
      { 
        id: 4, 
        title: '角色代入法', 
        icon: '🎭', 
        description: '想象自己是文中角色，体会人物的感受',
        steps: ['理解人物性格特点', '代入角色思考问题', '体会人物情感变化', '分析人物行为动机'],
        sampleArticleId: 1004
      },
      { 
        id: 5, 
        title: '复述法', 
        icon: '🗣️', 
        description: '读完后用自己的话复述文章内容',
        steps: ['分段阅读理解内容', '提炼段落核心意思', '串联各段形成整体', '用自己的话复述'],
        sampleArticleId: 1005
      },
      { 
        id: 6, 
        title: '对比阅读法', 
        icon: '🔄', 
        description: '对比多篇文章的相同点和不同点',
        steps: ['找出文章共同点', '分析文章差异', '比较写作手法', '总结阅读收获'],
        sampleArticleId: 1006
      }
    ]
  },

  onLoad() {
    const grade = app.globalData.currentGrade || 3;
    this.setData({
      currentGrade: grade,
      showWriting: grade <= 2,
      completedArticles: this.getCompletedArticles()
    });
    this.loadArticlesWithBadges();
  },

  onShow() {
    const grade = app.globalData.currentGrade || 3;
    this.setData({
      showWriting: grade <= 2,
      completedArticles: this.getCompletedArticles()
    });
    this.loadArticlesWithBadges();
  },

  getCompletedArticles() {
    try {
      const completed = wx.getStorageSync('completedArticles');
      return completed ? JSON.parse(completed) : [];
    } catch (e) {
      return [];
    }
  },

  saveCompletedArticle(id) {
    const completed = this.data.completedArticles;
    if (!completed.includes(id)) {
      completed.push(id);
      wx.setStorageSync('completedArticles', JSON.stringify(completed));
      this.setData({ completedArticles: completed });
    }
  },

  loadArticlesWithBadges() {
    const { currentGrade, currentCategory, completedArticles } = this.data;
    let filteredArticles = readingData.articles;
    
    filteredArticles = filteredArticles.filter(article => {
      const gradeMatch = article.grade === currentGrade;
      const categoryMatch = currentCategory === 'all' || article.category === currentCategory;
      return gradeMatch && categoryMatch;
    });

    const articles = filteredArticles.map((article, index) => ({
      ...article,
      badge: this.data.badges[index % this.data.badges.length],
      completed: completedArticles.includes(article.id)
    }));

    articles.sort((a, b) => {
      if (a.completed && !b.completed) return 1;
      if (!a.completed && b.completed) return -1;
      return 0;
    });

    this.setData({ articles });
  },

  selectTab(e) {
    const tabId = e.currentTarget.dataset.tab;
    this.setData({ activeTab: tabId });
  },

  selectCategory(e) {
    const category = e.currentTarget.dataset.category;
    const { currentGrade, completedArticles } = this.data;
    
    if (category === 'all') {
      this.loadArticlesWithBadges();
      this.setData({ currentCategory: 'all' });
    } else {
      let filtered = readingData.articles.filter(item => item.category === category);
      filtered = filtered.filter(article => article.grade === currentGrade);
      
      const articlesWithBadges = filtered.map((article, index) => ({
        ...article,
        badge: this.data.badges[index % this.data.badges.length],
        completed: completedArticles.includes(article.id)
      }));

      articlesWithBadges.sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
      });

      this.setData({
        currentCategory: category,
        articles: articlesWithBadges
      });
    }
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    
    wx.showToast({
      title: '📖 开始精读！',
      icon: 'none',
      duration: 800
    });
    
    setTimeout(() => {
      wx.navigateTo({
        url: `/pages/reading/detail?id=${id}`
      });
    }, 800);
  },

  goToIndex() {
    wx.redirectTo({ url: '/pages/index/index' });
  },

  goToWriting() {
    wx.redirectTo({ url: '/pages/writing/writing' });
  },

  showMethodDetail(e) {
    const method = e.currentTarget.dataset.method;
    
    wx.showToast({
      title: '📖 ' + method.title,
      icon: 'none',
      duration: 800
    });
    
    setTimeout(() => {
      wx.navigateTo({
        url: `/pages/reading/detail?id=${method.sampleArticleId}`
      });
    }, 800);
  }
});