const readingData = require('../../data/reading-data.js');

Page({
  data: {
    article: null,
    contentParagraphs: [],
    currentIndex: 0,
    userAnswers: [],
    openAnswers: [],
    showResult: false,
    showAnswer: [],
    score: 0,
    correctCount: 0,
    optionIcons: ['🔴', '🟡', '🟢', '🔵'],
    resultEmoji: '',
    resultMessage: '',
    resultStars: '',
    optionStates: [],
    readingProgress: 0,
    answeredQuestions: [],
    showWrongQuestions: false,
    wrongQuestions: []
  },

  onLoad(options) {
    const id = parseInt(options.id);
    const article = readingData.articles.find(item => item.id === id);
    if (article) {
      const userAnswers = new Array(article.questions.length).fill('');
      const openAnswers = new Array(article.questions.length).fill('');
      const showAnswer = new Array(article.questions.length).fill(false);
      const answeredQuestions = new Array(article.questions.length).fill(false);
      const optionStates = article.questions.map((q, qIndex) => {
        if (q.type === 'open') return [];
        return q.options.map((opt, optIndex) => ({
          text: opt,
          isSelected: false,
          isCorrect: opt.charAt(0) === q.correctAnswer,
          isWrong: false
        }));
      });
      const contentParagraphs = article.content.split('\n\n');
      this.setData({
        article,
        contentParagraphs,
        userAnswers,
        openAnswers,
        showAnswer,
        optionStates,
        answeredQuestions,
        readingProgress: this.calculateReadingProgress(contentParagraphs)
      });
    }
  },

  calculateReadingProgress(paragraphs) {
    return Math.round((1 / paragraphs.length) * 100);
  },

  selectAnswer(e) {
    const questionIndex = e.currentTarget.dataset.questionIndex;
    const selectedAnswer = e.currentTarget.dataset.answer;
    const article = this.data.article;
    const correctAnswer = article.questions[questionIndex].correctAnswer;
    
    const userAnswers = this.data.userAnswers;
    const showAnswer = this.data.showAnswer;
    const optionStates = this.data.optionStates;
    const answeredQuestions = this.data.answeredQuestions;
    
    const previousAnswer = userAnswers[questionIndex];
    const previousCorrect = previousAnswer && previousAnswer.charAt(0) === correctAnswer;
    
    userAnswers[questionIndex] = selectedAnswer;
    showAnswer[questionIndex] = true;
    answeredQuestions[questionIndex] = true;
    
    let correctCount = this.data.correctCount;
    const selectedLetter = selectedAnswer.charAt(0);
    const isCorrect = selectedLetter === correctAnswer;
    
    optionStates[questionIndex] = optionStates[questionIndex].map((opt, idx) => {
      const isThisSelected = opt.text === selectedAnswer;
      return {
        ...opt,
        isSelected: isThisSelected,
        isWrong: isThisSelected && !opt.isCorrect
      };
    });
    
    if (isCorrect && !previousCorrect) {
      correctCount++;
      wx.showToast({
        title: '回答正确！🎉',
        icon: 'success',
        duration: 800
      });
    } else if (!isCorrect && previousCorrect) {
      correctCount--;
      wx.showToast({
        title: '回答错误 😢',
        icon: 'none',
        duration: 800
      });
    } else if (isCorrect && previousCorrect) {
      wx.showToast({
        title: '你已经选过正确答案啦！✅',
        icon: 'none',
        duration: 800
      });
    } else {
      wx.showToast({
        title: '回答错误 😢',
        icon: 'none',
        duration: 800
      });
    }
    
    this.setData({
      userAnswers,
      showAnswer,
      correctCount,
      optionStates,
      answeredQuestions
    });
  },

  onOpenAnswerChange(e) {
    const questionIndex = e.currentTarget.dataset.questionIndex;
    const answer = e.detail.value;
    const openAnswers = this.data.openAnswers;
    const answeredQuestions = this.data.answeredQuestions;
    openAnswers[questionIndex] = answer;
    answeredQuestions[questionIndex] = answer.trim().length > 0;
    this.setData({
      openAnswers,
      answeredQuestions
    });
  },

  submitAnswers() {
    const { article, correctCount, openAnswers, userAnswers } = this.data;
    const choiceQuestions = article.questions.filter(q => q.type !== 'open');
    const openQuestions = article.questions.filter(q => q.type === 'open');
    
    const answeredOpenCount = openQuestions.reduce((count, q, idx) => {
      const qIndex = article.questions.indexOf(q);
      return count + (openAnswers[qIndex] && openAnswers[qIndex].trim().length > 0 ? 1 : 0);
    }, 0);
    
    const totalCorrect = correctCount + answeredOpenCount;
    const totalQuestions = article.questions.length;
    
    this.saveCompleted(article.id);

    let emoji, message, stars;
    
    if (totalCorrect === totalQuestions) {
      emoji = '🏆';
      message = '太棒了！你是阅读理解小天才！🎉';
      stars = '⭐⭐⭐⭐⭐';
    } else if (totalCorrect >= totalQuestions * 0.75) {
      emoji = '🌟';
      message = '非常棒！继续加油！💪';
      stars = '⭐⭐⭐⭐';
    } else if (totalCorrect >= totalQuestions * 0.5) {
      emoji = '👍';
      message = '不错哦！再努力一点就更好了！💡';
      stars = '⭐⭐⭐';
    } else {
      emoji = '💪';
      message = '别灰心，多练习一定会进步的！📚';
      stars = '⭐⭐';
    }

    const wrongQuestions = article.questions.map((q, index) => {
      const userAnswer = q.type === 'open' ? openAnswers[index] : userAnswers[index];
      const isCorrect = q.type === 'open' ? 
        userAnswer && userAnswer.trim().length > 0 :
        (userAnswer && userAnswer.charAt(0) === q.correctAnswer);
      
      if (!isCorrect) {
        return {
          question: q.question,
          correct: q.correctAnswer || '(开放性题目)',
          user: userAnswer || '未作答',
          tips: q.tips || '仔细阅读文章，找到相关信息作答。'
        };
      }
      return null;
    }).filter(q => q !== null);

    this.setData({
      showResult: true,
      score: totalCorrect,
      resultEmoji: emoji,
      resultMessage: message,
      resultStars: stars,
      wrongQuestions
    });
  },

  saveCompleted(articleId) {
    try {
      const completed = wx.getStorageSync('completedArticles');
      const completedArticles = completed ? JSON.parse(completed) : [];
      if (!completedArticles.includes(articleId)) {
        completedArticles.push(articleId);
        wx.setStorageSync('completedArticles', JSON.stringify(completedArticles));
      }
    } catch (e) {
      console.error('保存已完成文章失败', e);
    }
  },

  prevQuestion() {
    if (this.data.currentIndex > 0) {
      this.setData({
        currentIndex: this.data.currentIndex - 1
      });
    }
  },

  nextQuestion() {
    const { currentIndex, article } = this.data;
    if (currentIndex < article.questions.length - 1) {
      this.setData({
        currentIndex: currentIndex + 1
      });
    }
  },

  jumpToQuestion(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentIndex: index
    });
  },

  restart() {
    const userAnswers = new Array(this.data.article.questions.length).fill('');
    const openAnswers = new Array(this.data.article.questions.length).fill('');
    const showAnswer = new Array(this.data.article.questions.length).fill(false);
    const answeredQuestions = new Array(this.data.article.questions.length).fill(false);
    const optionStates = this.data.article.questions.map((q, qIndex) => {
      if (q.type === 'open') return [];
      return q.options.map((opt, optIndex) => ({
        text: opt,
        isSelected: false,
        isCorrect: opt.charAt(0) === q.correctAnswer,
        isWrong: false
      }));
    });
    
    this.setData({
      currentIndex: 0,
      userAnswers,
      openAnswers,
      showAnswer,
      answeredQuestions,
      optionStates,
      showResult: false,
      score: 0,
      correctCount: 0,
      showWrongQuestions: false,
      wrongQuestions: []
    });
  },

  toggleWrongQuestions() {
    this.setData({
      showWrongQuestions: !this.data.showWrongQuestions
    });
  },

  goBack() {
    wx.navigateBack();
  },

  goToIndex() {
    wx.redirectTo({ url: '/pages/index/index' });
  },

  goToWriting() {
    wx.redirectTo({ url: '/pages/writing/writing' });
  },

  getQuestionType(type) {
    const types = {
      'choice': '选择题',
      'open': '问答题',
      'fill': '填空题'
    };
    return types[type] || '练习题';
  },

  locateInArticle() {
    wx.showToast({
      title: '定位原文功能开发中',
      icon: 'none',
      duration: 1000
    });
  }
});