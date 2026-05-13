const writingData = require('../../data/writing-data.js');

Page({
  data: {
    subCategories: writingData.subCategories,
    topics: writingData.topics,
    selectedSubCategory: 'all',
    selectedTopic: null,
    completedTopics: [],
    pendingTopics: [],
    doneTopics: []
  },

  onLoad() {
    const completed = wx.getStorageSync('completedTopics') || [];
    this.setData({ completedTopics: completed });
    this.updateTopics();
  },

  updateTopics() {
    const completed = this.data.completedTopics;
    const filtered = this.getFilteredTopics('single', 'all', completed);
    this.setData({ 
      pendingTopics: filtered.pending,
      doneTopics: filtered.done
    });
  },

  getFilteredTopics(category, subCategory, completed) {
    const allTopics = this.data.topics;
    const filtered = [];
    for (let i = 0; i < allTopics.length; i++) {
      const topic = allTopics[i];
      if (topic.category === category) {
        if (subCategory === 'all' || topic.subCategory === subCategory) {
          filtered.push(topic);
        }
      }
    }
    const pending = [];
    const done = [];
    for (let i = 0; i < filtered.length; i++) {
      if (completed.indexOf(filtered[i].id) >= 0) {
        done.push(filtered[i]);
      } else {
        pending.push(filtered[i]);
      }
    }
    return {
      pending: pending,
      done: done
    };
  },

  selectSubCategory(e) {
    const subCategoryId = e.currentTarget.dataset.subcategory;
    const completed = this.data.completedTopics;
    const filtered = this.getFilteredTopics('single', subCategoryId, completed);
    this.setData({ 
      selectedSubCategory: subCategoryId,
      pendingTopics: filtered.pending,
      doneTopics: filtered.done,
      selectedTopic: null
    });
  },

  selectTopic(e) {
    const topicId = parseInt(e.currentTarget.dataset.id);
    this.setData({ selectedTopic: topicId });
  },

  startPractice() {
    if (!this.data.selectedTopic) {
      wx.showToast({ title: '请选择一个主题', icon: 'none' });
      return;
    }

    const topic = this.data.topics.find(t => t.id === this.data.selectedTopic);
    wx.setStorageSync('writingTopic', topic);

    const completed = [...this.data.completedTopics];
    if (!completed.includes(this.data.selectedTopic)) {
      completed.push(this.data.selectedTopic);
      wx.setStorageSync('completedTopics', completed);
    }

    wx.showToast({
      title: '✍️ 开始练习！',
      icon: 'none',
      duration: 800
    });
    
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/writing/practice'
      });
    }, 800);
  },

  goBack() {
    wx.navigateBack();
  }
});