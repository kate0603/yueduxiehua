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
        color: 'linear-gradient(135deg, #FFD54F 0%, #FFA726 100%)',
        disabled: false
      },
      {
        id: 'senses',
        name: '五感法',
        icon: '👀',
        desc: '视觉、听觉、嗅觉、味觉、触觉',
        tips: ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'],
        color: 'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
        disabled: false
      },
      {
        id: 'sequence',
        name: '顺序观察法',
        icon: '🔄',
        desc: '空间顺序或时间顺序描写',
        tips: [],
        color: 'linear-gradient(135deg, #90CAF9 0%, #64B5F6 100%)',
        disabled: true
      },
      {
        id: 'dynamic',
        name: '动静结合法',
        icon: '⚡',
        desc: '静态描写与动态描写结合',
        tips: [],
        color: 'linear-gradient(135deg, #CE93D8 0%, #BA68C8 100%)',
        disabled: true
      },
      {
        id: 'imagine',
        name: '想象拓展法',
        icon: '✨',
        desc: '根据画面线索展开想象',
        tips: [],
        color: 'linear-gradient(135deg, #FFAB91 0%, #FF8A65 100%)',
        disabled: true
      },
      {
        id: 'detail',
        name: '细节描写法',
        icon: '🔍',
        desc: '抓住细节特征细致描写',
        tips: [],
        color: 'linear-gradient(135deg, #A5D6A7 0%, #66BB6A 100%)',
        disabled: true
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