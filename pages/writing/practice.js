const { topics } = require('../../data/writing-data.js');

const generateTopicData = (topic) => {
  const elements = {
    when: '根据图片确定',
    where: '根据图片确定',
    who: '根据图片确定',
    what: '根据图片确定',
    result: '根据图片确定'
  };
  
  const elementsQuestions = [
    { question: '故事发生在什么时候？', options: ['A. 早上', 'B. 中午', 'C. 下午', 'D. 晚上'], answer: 'C' },
    { question: '故事发生在哪里？', options: ['A. 家里', 'B. 学校', 'C. 公园', 'D. 路上'], answer: 'B' },
    { question: '故事里有谁？', options: ['A. 小朋友', 'B. 爸爸妈妈', 'C. 老师同学', 'D. 爷爷奶奶'], answer: 'A' },
    { question: '发生了什么事？', options: ['A. 学习', 'B. 玩耍', 'C. 劳动', 'D. 帮助他人'], answer: 'B' },
    { question: '结果怎么样？', options: ['A. 很开心', 'B. 很难过', 'C. 很生气', 'D. 很无聊'], answer: 'A' }
  ];
  
  const senses = {
    see: topic.description || '观察图片',
    hear: '根据图片想象',
    smell: '根据图片想象',
    taste: '无',
    feel: '根据图片感受'
  };
  
  const sensesQuestions = [
    { question: '看到了什么？', options: ['A. ' + topic.title, 'B. 美丽的风景', 'C. 有趣的事情', 'D. 可爱的动物'], answer: 'A' },
    { question: '听到了什么？', options: ['A. 欢笑声', 'B. 风声', 'C. 雨声', 'D. 歌声'], answer: 'A' },
    { question: '闻到了什么？', options: ['A. 清新的空气', 'B. 花香', 'C. 饭菜香', 'D. 无'], answer: 'A' },
    { question: '尝到了什么？', options: ['A. 甜甜的', 'B. 酸酸的', 'C. 咸咸的', 'D. 无'], answer: 'D' },
    { question: '感觉到什么？', options: ['A. 开心', 'B. 温暖', 'C. 快乐', 'D. 幸福'], answer: 'A' }
  ];
  
  const sentences = topic.sample ? topic.sample.split('。').filter(s => s.trim()).slice(0, 5).map(s => s + '。') : [
    '今天天气很好。',
    '小朋友们来到这里。',
    '他们开心地玩耍。',
    '大家都很快乐。',
    '这真是美好的一天！'
  ];
  
  const sentencesFillBlank = [
    { sentence: '____天天气很好。', blankAnswer: '今', options: ['A. 昨', 'B. 今', 'C. 明', 'D. 后'], answer: 'B' },
    { sentence: '小朋友们____到这里。', blankAnswer: '来', options: ['A. 来', 'B. 去', 'C. 回', 'D. 离'], answer: 'A' },
    { sentence: '他们____地玩耍。', blankAnswer: '开心', options: ['A. 伤心', 'B. 开心', 'C. 生气', 'D. 难过'], answer: 'B' },
    { sentence: '大家都很____。', blankAnswer: '快乐', options: ['A. 难过', 'B. 快乐', 'C. 生气', 'D. 无聊'], answer: 'B' },
    { sentence: '这真是____的一天！', blankAnswer: '美好', options: ['A. 糟糕', 'B. 美好', 'C. 无聊', 'D. 难过'], answer: 'B' }
  ];
  
  return {
    ...topic,
    elements,
    elementsQuestions,
    senses,
    sensesQuestions,
    sentences,
    sentencesFillBlank
  };
};

const imageTopics = {};
topics.forEach(topic => {
  imageTopics[topic.id] = generateTopicData(topic);
});

Page({
  data: {
    topic: null,
    currentStep: 0,
    steps: ['观察图片', '回答问题', '选词填空', '查看范文'],
    currentQuestionIndex: 0,
    userAnswers: [],
    questionScore: 0,
    sentenceScore: 0,
    showResult: false,
    currentQuestion: null,
    questions: [],
    sentenceFillBlank: [],
    selectedOption: null,
    showAnswer: false,
    isCorrectAnswer: false,
    imageLoading: true,
    imageError: false,
    methods: [
      { id: 'elements', name: '五要素法', icon: '📝', desc: '时间、地点、人物、事件、结果', tips: ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] },
      { id: 'senses', name: '五感法', icon: '👀', desc: '视觉、听觉、嗅觉、味觉、触觉', tips: ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
    ]
  },

  onLoad() {
    const method = wx.getStorageSync('writingMethod');
    const topic = wx.getStorageSync('writingTopic');
    
    let imageId = 1;
    if (topic && topic.id) {
      imageId = topic.id;
    } else {
      const imageIds = Object.keys(imageTopics);
      imageId = parseInt(imageIds[Math.floor(Math.random() * imageIds.length)]);
    }
    
    if (imageTopics[imageId]) {
      const topicData = imageTopics[imageId];
      const methodId = method && method.id ? method.id : 'elements';
      const questions = methodId === 'elements' ? topicData.elementsQuestions : topicData.sensesQuestions;
      const currentMethod = this.data.methods.find(m => m.id === methodId);
      
      this.setData({ 
        topic: {
          ...topicData,
          method: currentMethod || { id: methodId, name: methodId === 'elements' ? '五要素法' : '五感法', icon: methodId === 'elements' ? '📝' : '👀', tips: methodId === 'elements' ? ['什么时候？', '在哪里？', '谁？', '发生了什么？', '结果怎么样？'] : ['看到了什么？', '听到了什么？', '闻到了什么？', '尝到了什么？', '感觉到什么？'] }
        },
        questions: questions,
        sentenceFillBlank: topicData.sentencesFillBlank || [],
        currentQuestion: questions[0] || null,
        imageLoading: false
      });
    }
  },

  nextStep() {
    const currentStep = this.data.currentStep;
    if (currentStep < 3) {
      if (currentStep === 2) {
        const imageId = this.data.topic && this.data.topic.id;
        if (imageId) {
          const completed = wx.getStorageSync('completedImages') || [];
          if (!completed.includes(imageId)) {
            completed.push(imageId);
            wx.setStorageSync('completedImages', completed);
          }
        }
      }
      this.setData({ 
        currentStep: currentStep + 1, 
        currentQuestionIndex: 0,
        showResult: false,
        showAnswer: false,
        selectedOption: null
      });
    }
  },

  prevStep() {
    const { currentStep, questions, sentenceFillBlank } = this.data;
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      const data = { 
        currentStep: newStep, 
        currentQuestionIndex: 0,
        showResult: false,
        showAnswer: false,
        selectedOption: null
      };
      if (currentStep === 2) {
        data.userAnswers = [];
        data.questionScore = 0;
        data.currentQuestion = questions[0] || null;
      } else if (currentStep === 3) {
        data.sentenceScore = 0;
      }
      this.setData(data);
    }
  },

  selectOption(e) {
    const option = e.currentTarget.dataset.option;
    this.setData({ selectedOption: option });
  },

  submitAnswer() {
    const { currentQuestion, selectedOption, currentQuestionIndex, questions, userAnswers } = this.data;
    
    if (!selectedOption) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }

    if (userAnswers.length > currentQuestionIndex) {
      wx.showToast({ title: '这道题已经回答过了', icon: 'none' });
      return;
    }

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    const newAnswers = [...userAnswers, { question: currentQuestion.question, userAnswer: selectedOption, correctAnswer: currentQuestion.answer, isCorrect }];
    let newScore = this.data.questionScore;
    if (isCorrect) {
      newScore++;
    }

    this.setData({
      showAnswer: true,
      isCorrectAnswer: isCorrect,
      userAnswers: newAnswers,
      questionScore: newScore
    });
  },

  goToNextQuestion() {
    const { currentStep, currentQuestionIndex, questions, sentenceFillBlank } = this.data;
    
    if (currentStep === 1) {
      if (currentQuestionIndex < questions.length - 1) {
        this.setData({ 
          currentQuestionIndex: currentQuestionIndex + 1,
          currentQuestion: questions[currentQuestionIndex + 1],
          selectedOption: null,
          showAnswer: false,
          isCorrectAnswer: false
        });
      } else {
        this.setData({ 
          showAnswer: false,
          showResult: true 
        });
      }
    } else if (currentStep === 2) {
      if (currentQuestionIndex < sentenceFillBlank.length - 1) {
        this.setData({ 
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedOption: null,
          showAnswer: false,
          isCorrectAnswer: false
        });
      } else {
        this.nextStep();
      }
    }
  },

  selectSentenceOption(e) {
    const option = e.currentTarget.dataset.option;
    this.setData({ selectedOption: option });
  },

  submitSentence() {
    const { sentenceFillBlank, currentQuestionIndex, selectedOption } = this.data;
    const currentQuestion = sentenceFillBlank[currentQuestionIndex];
    
    if (!selectedOption) {
      wx.showToast({ title: '请选择答案', icon: 'none' });
      return;
    }

    if (this.data.sentenceScore > currentQuestionIndex) {
      wx.showToast({ title: '这道题已经回答过了', icon: 'none' });
      return;
    }

    const selectedAnswer = selectedOption.charAt(0);
    const isCorrect = selectedAnswer === currentQuestion.answer;
    
    let newScore = this.data.sentenceScore;
    if (isCorrect) {
      newScore++;
    }

    this.setData({
      showAnswer: true,
      isCorrectAnswer: isCorrect,
      sentenceScore: newScore
    });
  },

  goBack() {
    wx.navigateBack();
  },

  goToIndex() {
    wx.redirectTo({ url: '/pages/index/index' });
  },

  onImageLoad() {
    this.setData({
      imageLoading: false,
      imageError: false
    });
  },

  onImageError() {
    this.setData({
      imageLoading: false,
      imageError: true
    });
  },

  refreshImage() {
    const topic = this.data.topic;
    if (topic && topic.image) {
      this.setData({
        imageLoading: true,
        imageError: false
      });
      
      const timestamp = Date.now();
      const refreshedUrl = topic.image + (topic.image.includes('?') ? '&' : '?') + 'refresh=' + timestamp;
      
      this.setData({
        topic: {
          ...topic,
          image: refreshedUrl
        },
        imageLoading: false
      });
      
      wx.showToast({ title: '正在刷新图片', icon: 'loading', duration: 1000 });
    }
  }
});