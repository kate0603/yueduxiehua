const app = getApp();

Page({
  data: {
    selectedMode: '',
    showReadingOptions: false,
    readingDifficulties: [
      { id: 1, name: '简单', emoji: '😊', grade: 1 },
      { id: 2, name: '中等', emoji: '🤔', grade: 2 },
      { id: 3, name: '困难', emoji: '💪', grade: 3 }
    ],
    selectedReadingDifficulty: null
  },

  selectMode(e) {
    const mode = e.currentTarget.dataset.mode;
    this.setData({
      selectedMode: mode,
      showReadingOptions: mode === 'reading',
      selectedReadingDifficulty: null
    });
  },

  selectReadingDifficulty(e) {
    const difficulty = e.currentTarget.dataset;
    this.setData({ selectedReadingDifficulty: difficulty });
  },

  confirmReading() {
    if (!this.data.selectedReadingDifficulty) {
      wx.showToast({ title: '请选择难度', icon: 'none' });
      return;
    }

    const { grade, name } = this.data.selectedReadingDifficulty;
    app.globalData.currentGrade = grade;
    wx.setStorageSync('currentGrade', grade);

    wx.showToast({
      title: `已选择${name}难度！`,
      icon: 'none',
      duration: 1500
    });

    setTimeout(() => {
      wx.redirectTo({ url: '/pages/reading/reading' });
    }, 1500);
  },

  goToWriting() {
    wx.navigateTo({ url: '/pages/writing/writing' });
  },

  goBack() {
    this.setData({
      selectedMode: '',
      showReadingOptions: false,
      selectedReadingDifficulty: null
    });
  }
});