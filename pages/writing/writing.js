const writingData = require('../../data/writing-data.js');

Page({
  data: {
    categories: writingData.categories
  },

  handleCategoryTap(e) {
    const categoryId = e.currentTarget.dataset.category;
    
    if (categoryId !== 'single') {
      wx.showToast({
        title: '该功能开发中',
        icon: 'none',
        duration: 1500
      });
      return;
    }
    
    const category = writingData.categories.find(c => c.id === categoryId);
    wx.setStorageSync('writingCategory', category);
    
    wx.navigateTo({
      url: '/pages/writing/method'
    });
  },

  goBack() {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      wx.navigateBack();
    } else {
      wx.redirectTo({ url: '/pages/index/index' });
    }
  }
});