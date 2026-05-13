const app = getApp();

Page({
  data: {
    methods: [
      {
        id: 'elements',
        name: '五要素法',
        icon: '📝',
        desc: '时间、地点、人物、事件、结果',
        tips: ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'],
        color: 'linear-gradient(135deg, #FFD54F 0%, #FFA726 100%)'
      },
      {
        id: 'senses',
        name: '五感法',
        icon: '👀',
        desc: '视觉、听觉、嗅觉、味觉、触觉',
        tips: ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'],
        color: 'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)'
      }
    ]
  },

  selectMethod(e) {
    const methodId = e.currentTarget.dataset.method;
    const method = this.data.methods.find(m => m.id === methodId);
    
    wx.setStorageSync('writingMethod', method);
    
    wx.showToast({
      title: '✍️ 开始练习',
      icon: 'none',
      duration: 600
    });
    
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/writing/topic'
      });
    }, 600);
  },

  goBack() {
    wx.navigateBack();
  }
});