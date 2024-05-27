const questions = [
  {
    question: "以习近平同志为核心的是哪个组织？",
    options: ["中央纪律检查委员会", "中央军事委员会", "党中央", "国务院"],
    correct: ['C'],
    type: 'single'
  },
  {
    question: "“一岗双责”是指什么？",
    options: ["一人担任两个职务", "一个岗位，两项责任", "一项责任，双重奖惩", "两个岗位，一项责任"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "“两学一做”中的“两学”是指学什么？",
    options: ["学党章党规和习近平新时代中国特色社会主义思想", "学党章党规和党的历史", "学科学发展观和三个代表", "学习党的方针政策和社会主义核心价值观"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "“两个维护”指的是维护什么？",
    options: ["习近平总书记的核心地位和党中央的权威", "国家的安全和党的纯洁性", "国家的发展和人民的利益", "社会的和谐与法律的尊严"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "“三严三实”中的“三严”指的是什么？",
    options: ["严以修身、严以用权、严以律己", "严格自我要求、严格执法、严格自我管理", "严格学习、严格工作、严格生活", "严格纪律、严格道德、严格法制"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "中国共产党的最高理想和最终目标是什么？",
    options: ["实现社会主义现代化", "建设社会主义文化强国", "实现共产主义", "推动科技创新"],
    correct: ['C'],
    type: 'single'
  },
  {
    question: "全面建成小康社会的战略目标是在哪一阶段完成？",
    options: ["从2020年到2035年", "从2010年到2020年", "从2035年到本世纪中叶", "从2000年到2010年"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "中国特色社会主义的总体布局包括哪些方面？",
    options: ["经济建设、政治建设、文化建设、社会建设、生态文明建设", "政治建设、经济建设、文化发展、社会进步", "经济改革、政治开放、文化交流、社会发展", "经济调控、政治稳定、文化繁荣、社会和谐"],
    correct: ['A'],
    type: 'multi'
  },
  {
    question: "中国共产党的党徽是由哪些元素组成的？",
    options: ["镰刀和锤头", "星星和地球", "齿轮和稻穗", "桥梁和河流"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "“四个全面”战略布局包括哪些内容？",
    options: ["全面建设小康社会、全面深化改革、全面依法治国、全面从严治党", "全面改革开放、全面扩大内需、全面提高国防力量、全面增强党的纪律性", "全面推进科技进步、全面保障人民生活、全面加强国家安全、全面提升软实力", "全面发展经济、全面促进就业、全面改善环境、全面提升教育质量"],
    correct: ['A'],
    type: 'multi'
  },
  {
    question: "中共中央政治局常务委员会是如何组成的？",
    options: ["由中央委员会选举产生", "由全国人民代表大会选举", "由中央书记处任命", "由国务院任命"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "中国梦的核心内容是什么？",
    options: ["实现民族复兴", "建设法治国家", "经济持续发展", "文化繁荣兴盛"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "社会主义核心价值观的24个字包括哪些？",
    options: ["富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善"],
    correct: ['A'],
    type: 'multi'
  },
  {
    question: "新时代中国特色社会主义思想和基本方略的提出是在哪次会议？",
    options: ["十九大", "十八大", "二十大", "十七大"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "全面依法治国的总目标是什么？",
    options: ["建设社会主义法治国家", "实现国家长治久安", "建设民主法治国家", "实现国家治理体系和治理能力现代化"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "哪个不是社会主义现代化建设的战略目标？",
    options: ["经济繁荣", "民族复兴", "人民富裕", "文化兴盛"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "中国特色社会主义进入新时代，哪项不是新的历史方位？",
    options: ["改革开放再出发", "全面建设社会主义现代化国家", "继续推进全面建成小康社会", "全面深化改革开放"],
    correct: ['C'],
    type: 'single'
  },
  {
    question: "党的十九大报告中提出要建设什么样的网络强国？",
    options: ["科技强国", "网络强国", "教育强国", "文化强国"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "以下哪些属于‘五位一体’总体布局的组成部分？",
    options: ["经济建设", "政治建设", "文化建设", "社会建设", "生态文明建设"],
    correct: ['A', 'B', 'C', 'D', 'E'],
    type: 'multi'
  },
  {
    question: "哪个是中共中央对外事务委员会的主要职责？",
    options: ["处理外交事务", "处理内政事务", "负责经济管理", "监督法律实施"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "中华人民共和国的象征是什么？",
    options: ["国旗", "国徽", "国歌", "全部答案"],
    correct: ['D'],
    type: 'multi'
  },
  {
    question: "中国共产党领导的多党合作和政治协商制度通常称为什么？",
    options: ["多党制", "一党制", "联合政府", "新型政党制"],
    correct: ['D'],
    type: 'single'
  },
  {
    question: "下列哪些是中共中央直接领导的机构？",
    options: ["中央书记处", "中央政治局", "中央军事委员会", "中央纪律检查委员会"],
    correct: ['A', 'B', 'C', 'D'],
    type: 'multi'
  },
  {
    question: "‘四个意识’包括哪些？",
    options: ["政治意识", "大局意识", "核心意识", "看齐意识"],
    correct: ['A', 'B', 'C', 'D'],
    type: 'multi'
  },
  {
    question: "‘四个自信’指的是什么？",
    options: ["道路自信", "理论自信", "制度自信", "文化自信"],
    correct: ['A', 'B', 'C', 'D'],
    type: 'multi'
  }

  {
    question: "什么是'一个核心'所指的内容？",
    options: ["以习近平同志为核心的党中央", "以党的理论为核心", "以人民群众为核心", "以经济建设为核心"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "“一岗双责”指的是什么？",
    options: ["一个岗位两个职责", "一个岗位双重工作任务", "一个岗位负责两个部门", "干部既要负责经济又要负责政治"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "'一案双查'涉及哪些内容？",
    options: ["只调查案件事实", "同时调查案件相关责任", "同时审查两个无关案件", "检查案件的法律适用"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "“两学一做”中的“两学”指学习什么？",
    options: ["学党章党规和习近平新时代中国特色社会主义思想", "学党史和毛泽东思想", "学习和实践科学发展观", "学习改革开放政策"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "坚决维护的“两个维护”具体指什么？",
    options: ["维护党中央权威和集中统一领导", "维护国家安全和领土完整", "维护社会主义制度和人民民主", "维护经济发展和社会稳定"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "全面建成小康社会的战略目标应在哪个阶段完成？",
    options: ["2020年到2035年", "2010年到2020年", "2035年到2050年", "2000年到2010年"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "中国特色社会主义的总体布局包括哪些方面？",
    options: ["经济、政治、文化、社会、生态文明建设", "政治、经济、文化、教育、科技", "经济、文化、社会、教育、国防", "经济、政治、文化、卫生、民族"],
    correct: ['A'],
    type: 'multi'
  },
  {
    question: "“四个全面”战略布局包括什么？",
    options: ["全面建设社会主义现代化国家、全面深化改革、全面依法治国、全面从严治党", "全面推进改革开放、全面保障国家安全、全面提高人民生活水平、全面加强党的建设", "全面经济建设、全面政治建设、全面文化建设、全面社会建设", "全面发展经济、全面促进社会公正、全面提高人民素质、全面保障和改善民生"],
    correct: ['A'],
    type: 'multi'
  },
  {
    question: "中国共产党的党徽由哪些元素组成？",
    options: ["镰刀和锤头", "星星和旗帜", "齿轮和稻穗", "桥梁和河流"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "“两个一以贯之”是指坚持什么原则？",
    options: ["坚持党的领导和改革开放", "坚持社会主义道路和中国特色社会主义", "坚持理论联系实际和群众路线", "坚持党对国有企业的领导和建立现代企业制度"],
    correct: ['D'],
    type: 'single'
  },

  {
    question: "“一岗双责”指的是什么？",
    options: ["一个岗位承担两项责任", "干部既要负责经济又要负责政治", "一个岗位两个职责", "一个岗位双重工作任务"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "全面从严治党强调的重点是？",
    options: ["纪律建设", "反腐败斗争", "提高党的领导力", "干部教育培训"],
    correct: ['B'],
    type: 'single'
  },
  {
    question: "党的基本理论、基本路线、基本方略是指？",
    options: ["习近平新时代中国特色社会主义思想", "改革开放政策", "马克思列宁主义", "民主集中制"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "中国特色社会主义最本质的特征是？",
    options: ["党的领导", "人民民主", "社会主义市场经济", "社会主义法制"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "党的领导核心作用的体现是？",
    options: ["全党工作的领导", "党的基层组织建设", "群众路线的实施", "国家政策的执行"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "社会主义核心价值观包括？",
    options: ["民主、文明、和谐、自由", "平等、公正、法治、爱国", "富强、民主、文明、和谐", "诚信、友善、勤劳、简朴"],
    correct: ['C'],
    type: 'single'
  },
  {
    question: "新时代党的建设总要求的主题是什么？",
    options: ["坚持和加强党的全面领导", "深化改革开放", "推进社会主义现代化", "维护国家主权和安全"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "新时代党的组织路线是？",
    options: ["把党建设成世界一流政党", "建设高素质专业化干部队伍", "不断提高党的创造力、凝聚力、战斗力", "坚持党的民主集中制原则"],
    correct: ['C'],
    type: 'single'
  },
  {
    question: "习近平新时代中国特色社会主义思想的核心要义是？",
    options: ["人民是历史的创造者", "全面深化改革", "全面依法治国", "新发展理念"],
    correct: ['A'],
    type: 'single'
  },
  {
    question: "党在新时代的强军目标是？",
    options: ["全面建成世界一流军队", "实现中华民族伟大复兴", "建设现代化经济体系", "推进国防和军队现代化"],
    correct: ['D'],
    type: 'single'
  },
  // 更多题目，确保总数达到50道
];

let currentQuestionIndex = 0;
let answers = [];

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';

    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    questionDiv.innerHTML = `<p>${question.question}</p>`;

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';

    question.options.forEach((option, index) => {
      const optionLabel = document.createElement('label');
      const optionInput = document.createElement('input');
      optionInput.type = question.type === 'multi' ? 'checkbox' : 'radio';
      optionInput.name = `question${currentQuestionIndex}`;
      optionInput.value = option;
      optionInput.id = `option${index}`;

      optionLabel.appendChild(optionInput);
      optionLabel.append(document.createTextNode(option));
      optionsDiv.appendChild(optionLabel);
      optionsDiv.appendChild(document.createElement('br'));
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = '提交答案';
    submitButton.onclick = submitAnswer;

    questionDiv.appendChild(optionsDiv);
    questionDiv.appendChild(submitButton);
    container.appendChild(questionDiv);
  } else {
    displayResults();
  }
}

function submitAnswer() {
  const inputs = document.querySelectorAll(`input[name="question${currentQuestionIndex}"]:checked`);
  let userAnswers = Array.from(inputs).map(input => input.value);
  answers.push({ question: questions[currentQuestionIndex].question, userAnswers, correct: questions[currentQuestionIndex].correct });
  
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    displayQuestion();
  } else {
    displayResults();
  }
}

function displayResults() {
  const container = document.getElementById('quizContainer');
  container.innerHTML = '<h2>测试结果</h2>';
  
  answers.forEach((answer, index) => {
    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = `<p>问题 ${index + 1}: ${answer.question}</p>
                           <p>您的答案: ${answer.userAnswers.join(', ')}</p>
                           <p>正确答案: ${answer.correct.join(', ')}</p>`;
    container.appendChild(resultDiv);
  });
}

document.addEventListener('DOMContentLoaded', displayQuestion);
