const app = getApp();

Page({
  data: {
    currentGrade: 1,
    showWriting: true,
    dailyTip: '每天坚持阅读和写作，你的语文会越来越棒！',
    funFact: '你知道吗？"聪明"的"聪"字，左边是"耳"，右边是"总"，意思是要用耳朵听，用心记，才能变聪明！',
    readingProgress: 30,
    writingProgress: 20,
    funFacts: [
      '你知道吗？"聪明"的"聪"字，左边是"耳"，右边是"总"，意思是要用耳朵听，用心记，才能变聪明！',
      '中国的文字很有趣，"休"字是"人"靠在"木"上，意思就是休息！',
      '"好"字是"女"和"子"组成的，代表一个幸福的家庭！',
      '"火"字就像一团火焰在燃烧，上面是火苗，下面是火堆！',
      '"山"字就像三座山峰，高高地耸立着！'
    ],
    tips: [
      '每天坚持阅读和写作，你的语文会越来越棒！',
      '读书破万卷，下笔如有神！多读书，写作文就会更简单！',
      '遇到不认识的字，记得查字典哦！',
      '写作文要多用形容词，让句子更生动！',
      '保持好奇心，多观察身边的事物！'
    ]
  },

  onLoad() {
    this.loadRandomContent();
    this.loadGrade();
  },

  loadRandomContent() {
    const randomTip = this.data.tips[Math.floor(Math.random() * this.data.tips.length)];
    const randomFact = this.data.funFacts[Math.floor(Math.random() * this.data.funFacts.length)];
    
    this.setData({
      dailyTip: randomTip,
      funFact: randomFact
    });
  },

  loadGrade() {
    const grade = app.globalData.currentGrade || 1;
    this.setData({
      currentGrade: grade,
      showWriting: grade <= 2
    });
    this.updateProgressForGrade(grade);
  },

  updateProgressForGrade(grade) {
    const baseProgress = grade * 15;
    const readingProgress = Math.min(baseProgress + Math.floor(Math.random() * 10), 100);
    const writingProgress = Math.min(baseProgress - 5 + Math.floor(Math.random() * 10), 100);
    
    this.setData({
      readingProgress,
      writingProgress
    });
  },

  goToGrade() {
    wx.setStorageSync('currentGrade', null);
    app.globalData.currentGrade = null;
    
    wx.showToast({
      title: '请选择新的难度',
      icon: 'none',
      duration: 1000
    });
    
    setTimeout(() => {
      wx.redirectTo({
        url: '/pages/index/index'
      });
    }, 1000);
  },

  goToModule(e) {
    const path = e.currentTarget.dataset.path;
    
    wx.showToast({
      title: '出发！🚀',
      icon: 'none',
      duration: 1000
    });
    
    setTimeout(() => {
      wx.navigateTo({
        url: path
      });
    }, 1000);
  }
});
