const app = getApp();
const readingData = require('../../data/reading-data.js');

Page({
  data: {
    articles: [],
    currentCategory: 'all',
    currentGrade: 3,
    showWriting: true,
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
    completedArticles: []
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
      title: '📖 开始阅读！',
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
  }
});
