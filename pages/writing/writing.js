const app = getApp();

Page({
  data: {
    step: 1,
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
    ],
    images: [
      { id: 1, name: '公交车上的文明', emoji: '🚌', path: '/images/公交车上的文明.jpg' },
      { id: 2, name: '冬天堆雪人', emoji: '⛄', path: '/images/冬天堆雪人.jpg' },
      { id: 3, name: '放风筝', emoji: '🪁', path: '/images/放风筝.jpg' },
      { id: 4, name: '教室打扫卫生', emoji: '🧹', path: '/images/教室打扫卫生.jpg' },
      { id: 5, name: '植树节', emoji: '🌱', path: '/images/植树节.jpg' }
    ],
    completedImages: [],
    selectedMethod: null,
    selectedImage: null
  },

  onLoad() {
    const completed = wx.getStorageSync('completedImages') || [];
    const images = this.data.images;
    const pendingImages = images.filter(img => !completed.includes(img.id));
    const doneImages = images.filter(img => completed.includes(img.id));
    this.setData({ 
      completedImages: completed,
      pendingImages: pendingImages,
      doneImages: doneImages
    });
  },

  selectMethod(e) {
    const methodId = e.currentTarget.dataset.method;
    this.setData({ selectedMethod: methodId });
  },

  selectImage(e) {
    const imageId = parseInt(e.currentTarget.dataset.id);
    this.setData({ selectedImage: imageId });
  },

  nextStep() {
    if (!this.data.selectedMethod) {
      wx.showToast({ title: '请选择写作方法', icon: 'none' });
      return;
    }
    this.setData({ step: 2 });
  },

  prevStep() {
    this.setData({ step: 1, selectedImage: null });
  },

  startPractice() {
    if (!this.data.selectedImage) {
      wx.showToast({ title: '请选择图片', icon: 'none' });
      return;
    }

    const method = this.data.methods.find(m => m.id === this.data.selectedMethod);
    const image = this.data.images.find(img => img.id === this.data.selectedImage);
    
    wx.setStorageSync('writingMethod', method);
    wx.setStorageSync('writingImage', image);

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
  },

  goToIndex() {
    wx.redirectTo({ url: '/pages/index/index' });
  }
});