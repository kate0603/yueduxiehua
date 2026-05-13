App({
  globalData: {
    userInfo: null,
    currentGrade: 3
  },

  onLaunch() {
    console.log('小程序启动');
    
    // 初始化云开发
    wx.cloud.init({
      env: 'cloud1-d6gjbueoz9cc8d8ea'
    });
  }
});
