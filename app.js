const teachers = [
  { id: 'sarah', name: 'Sarah', photo: 'p1', country: 'CN', cityCourses: { 深圳: [{ venue: '南山慢咖啡', area: '南山区', slots: '今天 19:00' }, { venue: '海上世界书吧', area: '南山区', slots: '周六 14:00' }] }, weekendCityCourses: { 深圳: [{ venue: '南头古城语言屋', area: '南山区', slots: '周日 15:30' }, { venue: '蛇口海湾书房', area: '南山区', slots: '周六 10:30' }] } },
  { id: 'david', name: 'David', photo: 'p2', country: 'US', cityCourses: { 深圳: [{ venue: '福田语言角', area: '福田区', slots: '今天 20:00' }] }, weekendCityCourses: { 深圳: [{ venue: '莲花山城市客厅', area: '福田区', slots: '周六 16:00' }, { venue: '岗厦北阅读空间', area: '福田区', slots: '周日 11:00' }] } },
  { id: 'yuki', name: 'Yuki', photo: 'p5', country: 'JP', cityCourseCount: { 深圳: 2, 上海: 1, 东京: 1 }, cityCourses: { 深圳: [{ venue: '华侨城创意园', area: '南山区', slots: '本周日 10:00' }, { venue: '海上世界书吧', area: '南山区', slots: '周日 16:00' }, { venue: '南头古城阅文社', area: '南山区', slots: '今天 19:00' }], 上海: [{ venue: '静安语言空间', area: '静安区', slots: '周六 10:00' }, { venue: '徐汇会话馆', area: '徐汇区', slots: '今天 18:30' }, { venue: '前滩书屋', area: '浦东新区', slots: '本周日 15:00' }], 东京: [{ venue: '涩谷学习咖啡', area: '涩谷区', slots: '周六 13:00' }, { venue: '新宿语言角', area: '新宿区', slots: '周日 11:00' }] }, weekendCityCourses: { 深圳: [{ venue: '红树林自然教室', area: '南山区', slots: '周日 16:00' }, { venue: '后海语伴小屋', area: '南山区', slots: '周六 11:00' }, { venue: '华润大厦会客厅', area: '南山区', slots: '今天 20:00' }] } },
  { id: 'minji', name: 'Minji', photo: 'p3', country: 'KR', cityCourses: { 深圳: [{ venue: '车公庙读书会', area: '福田区', slots: '今天 18:30' }] }, weekendCityCourses: { 深圳: [{ venue: '下沙文化站', area: '福田区', slots: '周六 15:00' }, { venue: '香蜜湖会客厅', area: '福田区', slots: '周日 10:00' }] } },
  { id: 'lucas', name: 'Lucas', photo: 'p6', country: 'ES', cityCourses: { 深圳: [{ venue: '深圳湾公园驿站', area: '南山区', slots: '周六 16:00' }] }, weekendCityCourses: { 深圳: [{ venue: '前海演艺公园', area: '南山区', slots: '周日 14:00' }, { venue: '海岸城阅读角', area: '南山区', slots: '今天 19:30' }] } },
  { id: 'hana', name: 'Hana', photo: 'p4', country: 'CN', cityCourses: { 广州: [{ venue: '天河书店', area: '天河区', slots: '周日 15:00' }] }, weekendCityCourses: { 广州: [{ venue: '东山口文化客厅', area: '越秀区', slots: '周六 14:30' }, { venue: '珠江公园书屋', area: '天河区', slots: '今天 18:00' }] } },
  { id: 'mason', name: 'Mason', photo: 'p2', country: 'AU', cityCourses: { 广州: [{ venue: '珠江新城咖啡馆', area: '天河区', slots: '今天 18:00' }] }, weekendCityCourses: { 广州: [{ venue: '猎德桥下会话角', area: '天河区', slots: '周六 11:00' }, { venue: '太古仓读书社', area: '海珠区', slots: '周日 16:00' }] } },
  { id: 'sofia', name: 'Sofia', photo: 'p4', country: 'IT', cityCourses: { 广州: [{ venue: '越秀公园语言角', area: '越秀区', slots: '本周六 10:00' }] }, weekendCityCourses: { 广州: [{ venue: '永庆坊小剧场', area: '荔湾区', slots: '周六 15:00' }, { venue: '琶洲创意社区', area: '海珠区', slots: '周日 10:30' }] } }
];

const people = [
  { name: 'Alex', photo: 'p6', gender: '♂32', vip: 'VIP', lang: 'CN  ⇄  JP  EN  ES', city: '深圳市, 中国', distance: '3km', status: '8 分钟前\n活跃', intro: 'Chinese native speaker learning English. I’m happy to help with Mandarin.…', tags: ['ENFP', '电音', 'Drake', '健身', '流行音乐', '说唱'] },
  { name: 'ななみ', photo: 'p1', gender: '♀24', lang: 'CN  ⇄  JP', city: '深圳市, 中国', distance: '4km', status: '最近活跃', intro: 'こんにちは、我是ななみ。愿意结交更多朋友。', tags: ['ENFJ', '喵星人', '鬼灭之刃', '百变小樱'] },
  { name: 'Lynn', photo: 'p5', gender: '♀23', vip: 'VIP+', lang: 'CN  ⇄  JP  EN  KR', city: '深圳市, 中国', distance: '0.1km', status: '当前在线', intro: 'Hi everyone~ You can call me Lynn😊…', tags: ['ENTP', '兔子', '香水', '绘画', '手工DIY', '漫画'] },
  { name: '林霁', photo: 'p4', gender: '♀', city: '深圳市, 中国', distance: '5km', status: '7 分钟前活跃', intro: '想去：日本', tags: ['ISFJ', '火影忍者', '夏目友人帐', '堀与宫村', '王者荣耀'], newcomer: true, lang: 'CN  ⇄  JP' }
];

const state = { city: '深圳', mapCity: '深圳', rootPage: 'partner', myRoute: 'courses', creatorPlacePage: false, vip: false, activeLanguage: '中文（简体）', sheet: false, cityMenu: false, sheetCityMenu: false, mapFilter: '全部', mapLanguage: '全部', mapQuery: '', activeVenue: null, mapTeacherId: null, profileId: null, profileRoute: 'profile', profileTab: 'archive', profileMore: false, courseFilter: 'all', courseOrigin: 'profile', selectedCourse: 'conversation', selectedVenue: '', selectedDate: '今天', selectedSlot: '19:00', bookingConfirmed: false, paymentSheet: false, paymentMethod: '支付宝', courseDelivery: '', courseDeliverySheet: false, creatorCity: '深圳', creatorSheet: '', creatorVenueQuery: '', creatorVenueResults: [], creatorPlaceHistory: [], courseType: '1v1', courseTitle: '', courseTags: [], courseLanguage: '', courseDuration: '', courseSessions: '', courseDescription: '', coursePrice: '', courseVenues: [], followed: false, toast: '', consoleScenario: '', consoleMode: 'discovery', uiLanguage: 'zh' };
const initialDemoState = JSON.parse(JSON.stringify(state));
const app = document.querySelector('#app');

function resetDemoState() {
  Object.assign(state, JSON.parse(JSON.stringify(initialDemoState)));
  render();
}

const interfaceCopy = {
  en: { '搜索课程、地点或老师': 'Search courses, places or teachers', '搜索附近位置': 'Search nearby locations', '已选上课地点': 'Selected locations', '可选授课地点': 'Available class locations', '面授场所': 'Class locations', '面授地点': 'In-person locations', '面授老师': 'In-person Teachers', '附近地点': 'Nearby locations', '最近搜索': 'Recent searches', '我的课程': 'My Courses', '创建新课': 'Create Course', '课程标题': 'Course title', '课程标签': 'Course tags', '课程语言': 'Course language', '课程时长': 'Course duration', '课程次数': 'Sessions', '课程描述': 'Course description', '设定单价': 'Price per session', '授课方式': 'Delivery mode', '线下课程': 'In-person course', '线上课程': 'Online course', '可选上课地点': 'Available locations', '最多 3 处': 'Up to 3 locations', '搜索并选择地点': 'Search and select locations', '课程预约与支付': 'Book and pay', '支付方式': 'Payment method', '立即预约': 'Book now', '确认支付': 'Confirm payment', '选择地点': 'Select location', '查看地图': 'View map', '查看更多': 'See more', '更多': 'More', '找语伴': 'Find Partners', '附近': 'Nearby', '全部语言': 'All languages', '任意时间': 'Any time', '今天可约': 'Available today', '本周有课': 'Classes this week', '有课城市': 'Cities with classes', '暂无相关课程': 'No matching classes', '中文（简体）': 'Chinese', '英语': 'English', '日语': 'Japanese', '韩语': 'Korean', '中文': 'Chinese', '全部': 'All', '今天': 'Today', '周六': 'Saturday', '周日': 'Sunday', '课程介绍': 'Course overview', '上课时间': 'Class time', '上课次数': 'Sessions', '返回': 'Back', '关闭': 'Close', '提交创建': 'Submit', '预览课程': 'Preview' },
  ja: { '搜索课程、地点或老师': 'コース・場所・講師を検索', '搜索附近位置': '近くの場所を検索', '已选上课地点': '選択済みの場所', '可选授课地点': '選べる受講場所', '面授场所': '対面レッスンの場所', '面授地点': '対面レッスンの場所', '面授老师': '対面レッスン講師', '附近地点': '近くの場所', '最近搜索': '最近の検索', '我的课程': 'マイコース', '创建新课': '新しいコースを作成', '课程标题': 'コース名', '课程标签': 'コースタグ', '课程语言': 'レッスン言語', '课程时长': 'レッスン時間', '课程次数': '回数', '课程描述': 'コース紹介', '设定单价': '1回の料金', '授课方式': 'レッスン形式', '线下课程': '対面レッスン', '线上课程': 'オンラインレッスン', '可选上课地点': '選べる場所', '最多 3 处': '最大3か所', '搜索并选择地点': '場所を検索して選択', '课程预约与支付': '予約と支払い', '支付方式': '支払い方法', '立即预约': '今すぐ予約', '确认支付': '支払いを確認', '选择地点': '場所を選択', '查看地图': '地図を見る', '查看更多': 'もっと見る', '更多': 'もっと', '找语伴': '語学パートナー', '附近': '近く', '全部语言': 'すべての言語', '任意时间': 'いつでも', '今天可约': '今日予約可', '本周有课': '今週のレッスン', '有课城市': 'レッスンのある都市', '暂无相关课程': '該当するコースはありません', '中文（简体）': '中国語', '英语': '英語', '日语': '日本語', '韩语': '韓国語', '中文': '中国語', '全部': 'すべて', '今天': '今日', '周六': '土曜', '周日': '日曜', '课程介绍': 'コース紹介', '上课时间': 'レッスン時間', '上课次数': '回数', '返回': '戻る', '关闭': '閉じる', '提交创建': '作成して提出', '预览课程': 'プレビュー' }
};

function localizeDemoUI() {
  const copy = interfaceCopy[state.uiLanguage];
  document.documentElement.lang = state.uiLanguage === 'ja' ? 'ja' : state.uiLanguage === 'en' ? 'en' : 'zh-CN';
  if (!copy) return;
  const replace = (value) => {
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    const content = value.trim();
    return Object.hasOwn(copy, content) ? `${leading}${copy[content]}${trailing}` : value;
  };
  const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = replace(node.nodeValue); });
  app.querySelectorAll('[placeholder],[aria-label]').forEach((element) => {
    ['placeholder', 'aria-label'].forEach((attribute) => {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, replace(element.getAttribute(attribute)));
    });
  });
}

function applyConsoleScenario(scenario) {
  Object.assign(state, JSON.parse(JSON.stringify(initialDemoState)));
  const shenzhenPlaces = [
    { name: '南山慢咖啡', district: '南山区', address: '南山大道 88 号' },
    { name: '华侨城创意文化园', district: '南山区', address: '恩平街 1 号' },
    { name: '福田 CBD 中心书城', district: '福田区', address: '福中一路 2014 号' }
  ];
  const presets = {
    'partner-visible': () => { state.consoleMode = 'discovery'; state.city = '深圳'; state.consoleScenario = '展示条件满足'; },
    'partner-hidden': () => { state.consoleMode = 'discovery'; state.city = '广州'; state.consoleScenario = '展示条件不满足'; },
    'search-japanese': () => { state.consoleMode = 'search'; state.rootPage = 'partner'; state.sheet = true; state.mapCity = '深圳'; state.mapQuery = '日语面授'; state.mapLanguage = '日语'; state.consoleScenario = '日语面授 · 跨城'; },
    'search-chinese': () => { state.consoleMode = 'search'; state.rootPage = 'partner'; state.sheet = true; state.mapCity = '深圳'; state.mapQuery = '中文会话'; state.mapLanguage = '中文'; state.consoleScenario = '中文会话'; },
    'search-empty': () => { state.consoleMode = 'search'; state.rootPage = 'partner'; state.sheet = true; state.mapCity = '广州'; state.mapQuery = '日语面授'; state.mapLanguage = '日语'; state.consoleScenario = '日语面授 · 当前城无结果'; },
    'teacher-payment': () => { state.consoleMode = 'booking'; state.profileId = 'sarah'; state.profileRoute = 'course-detail'; state.selectedCourse = 'conversation'; state.selectedVenue = '南山慢咖啡'; state.selectedDate = '今天'; state.selectedSlot = '19:00'; state.paymentMethod = '支付宝'; state.paymentSheet = true; state.consoleScenario = '课程预约与支付'; },
    'creator-offline': () => { state.consoleMode = 'creator'; state.rootPage = 'mine'; state.myRoute = 'create'; state.creatorCity = '深圳'; state.courseDelivery = '线下课程'; state.courseTitle = '一对一中文面授'; state.courseTags = ['日常会话', '发音纠正']; state.courseLanguage = '中文'; state.courseDuration = '50 分钟/节'; state.courseSessions = '2 节'; state.courseDescription = '适合想提升日常中文表达的学习者。'; state.coursePrice = '50'; state.courseVenues = shenzhenPlaces; state.consoleScenario = '完整线下课程'; },
    'creator-search': () => { state.consoleMode = 'creator'; state.rootPage = 'mine'; state.myRoute = 'create'; state.creatorPlacePage = true; state.creatorCity = '深圳'; state.courseDelivery = '线下课程'; state.creatorVenueQuery = '咖啡'; state.creatorVenueResults = [{ name: '南山慢咖啡', district: '南山区', address: '南山大道 88 号' }]; state.creatorPlaceHistory = [{ name: '南山慢咖啡', district: '南山区', address: '南山大道 88 号', city: '深圳' }, { name: '华侨城创意文化园', district: '南山区', address: '恩平街 1 号', city: '深圳' }]; state.consoleScenario = '地点搜索记录'; }
  };
  presets[scenario]?.();
  render();
}

function eligibleTeachers(city = state.city) {
  return teachers.filter((teacher) => Array.isArray(teacher.cityCourses[city]) && teacher.cityCourses[city].length > 0);
}

function showTeacherModule() { return eligibleTeachers().length > 3; }

function flag(code) { return ({ CN: '🇨🇳', US: '🇺🇸', JP: '🇯🇵', KR: '🇰🇷', ES: '🇪🇸', AU: '🇦🇺', IT: '🇮🇹' })[code] || '🌐'; }

function courseIcon(name) {
  const icons = {
    mic: '<svg class="course-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"></rect><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17v4M8.5 21h7"></path></svg>',
    book: '<svg class="course-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5A3.5 3.5 0 0 1 8 5l4 1.8L16 5a3.5 3.5 0 0 1 4.5.5v13A3.5 3.5 0 0 0 16 18l-4 1.8L8 18a3.5 3.5 0 0 0-4.5.5z"></path><path d="M12 6.8V19.5"></path></svg>',
    clock: '<svg class="course-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="M12 7.5v5l3.2 1.8"></path></svg>'
  };
  return icons[name];
}

function avatar(person, size = 'medium', teacher = false) {
  return `<button class="avatar ${size} photo-${person.photo} ${teacher ? 'teacher-avatar' : ''}" data-action="${teacher ? 'profile' : 'noop'}" data-id="${person.id || ''}" aria-label="${teacher ? `查看${person.name}的资料` : person.name}">${teacher ? `<i class="flag">${flag(person.country)}</i><b class="teacher-verify">✓</b>` : ''}</button>`;
}

function teacherRailItem(teacher) {
  const labels = { sarah: '中文', david: '英语', yuki: '日语', minji: '韩语', lucas: '西班牙语' };
  return `<button class="teacher-rail-item" data-action="profile" data-id="${teacher.id}" aria-label="查看${teacher.name}的资料"><span class="avatar small photo-${teacher.photo}"><i class="flag">${flag(teacher.country)}</i><b class="teacher-verify">✓</b></span><b>${teacher.name}</b><small>${labels[teacher.id] || '语言课'}</small></button>`;
}

function renderTeacherModule() {
  if (!showTeacherModule()) return '';
  const visible = eligibleTeachers();
  return `<section class="teacher-module" aria-label="面授老师">
    <div class="module-head"><strong>面授老师</strong><button data-action="open-sheet" class="more">更多 <span>›</span></button></div>
    <div class="teacher-rail">${visible.map(teacherRailItem).join('')}</div>
  </section>`;
}

function systemStatus(className) {
  return `<header class="${className}"><span class="system-time">11:43<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.2 8a5.8 5.8 0 0 1 11.6 0H2.2Z"></path><path d="M2.2 8h11.6"></path></svg></span><span class="system-tray" aria-hidden="true"><svg viewBox="0 0 23 16"><path d="M1 14V9M6 14V6M11 14V3M16 14V1"></path></svg><svg viewBox="0 0 21 16"><path d="M1 5.5C6 1 15 1 20 5.5M4.5 9c3.3-3 8.7-3 12 0M8 12.5c1.3-1.2 3.7-1.2 5 0"></path><circle cx="10.5" cy="14" r="1"></circle></svg><svg viewBox="0 0 29 15"><rect x="1" y="1" width="24" height="13" rx="3"></rect><rect x="4" y="4" width="15" height="7" rx="1.5"></rect><path d="M27 5v5"></path></svg></span></header>`;
}

function bottomMomentActiveIcon() {
  return `<span class="tab-moment-active" aria-hidden="true"><svg viewBox="0 0 46 38"><path d="M14.5 23.8c2.3-6.3 9.1-9.6 15.3-7.4 5.4 1.9 8.2 7.8 6.3 13.1-1.8 5-7.4 7.6-12.5 5.8-4.3-1.6-6.6-6.3-5.1-10.5 1.2-3.5 5.1-5.3 8.6-4.1"></path><path d="M4.5 26.5c8.8.9 17.6-2.1 25.2-8.7 3.6-3.1 7.5-5.5 11.8-7.1"></path><circle cx="29.7" cy="17.6" r="2.3"></circle></svg><b>3</b></span>`;
}

function greetingHandIcon() {
  return `<svg class="greeting-hand" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.35 11.4V5.45a1.25 1.25 0 1 1 2.5 0v4.25-6.1a1.25 1.25 0 1 1 2.5 0v6.1V4.55a1.25 1.25 0 1 1 2.5 0v5.15V6.15a1.25 1.25 0 1 1 2.5 0v6.95l1.1-1.05a1.38 1.38 0 0 1 1.94 1.96l-2.95 3.14a6.17 6.17 0 0 1-4.49 1.96h-1.92a5.2 5.2 0 0 1-3.68-1.53l-2.56-2.56a1.37 1.37 0 1 1 1.94-1.94z"></path></svg>`;
}

function renderPerson(person) {
  return `<article class="person-row"><div class="person-side"><div class="person-avatar photo-${person.photo}"><i>🇨🇳</i></div><small><b>●</b>${person.status.replace('\n', '<br />')}</small></div><div class="person-main"><div class="person-name">${person.name} <span>${person.gender}</span>${person.vip ? `<em>${person.vip}</em>` : ''}${person.newcomer ? '<mark>新加入</mark>' : ''}</div><div class="language">${person.lang}</div><div class="person-location">${person.city}<i>${person.distance}</i></div><p>${person.intro}</p><div class="tags">${person.tags.map((tag) => `<em>${tag}</em>`).join('')}</div></div><button class="hi" data-action="hi" aria-label="向${person.name}打招呼">${greetingHandIcon()}</button></article>`;
}

function renderPartnerHome() {
  const module = renderTeacherModule();
  return `<div class="screen partner-home">
    <div class="partner-island" aria-hidden="true"></div>${systemStatus('status')}
    <nav class="topbar"><button class="vip-chip" aria-label="VIP+"><em>福利</em>VIP+</button><strong>找语伴</strong><span class="spark" aria-hidden="true"><svg viewBox="0 0 24 30"><defs><linearGradient id="spark-gradient" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8a59ff"/><stop offset=".48" stop-color="#3ecbff"/><stop offset=".52" stop-color="#f34dcc"/><stop offset="1" stop-color="#7a45f0"/></linearGradient></defs><path fill="url(#spark-gradient)" d="M13.6 1 4 15.2h6.4L9.5 29 20 12.9h-6.6z"/></svg></span><button class="settings" aria-label="筛选"><svg viewBox="0 0 30 30" aria-hidden="true"><path d="M3 7h24M3 15h24M3 23h24"></path><circle cx="11" cy="7" r="3"></circle><circle cx="19" cy="15" r="3"></circle><circle cx="10" cy="23" r="3"></circle></svg></button></nav>
    <div class="top-tabs"><button>全部</button><button class="active"><span>♛</span>附近</button><button>性别⌄</button><button>认真学习</button><button>付费陪练</button></div>
    <div class="language-tabs">${['中文（简体）', '英语', '韩语'].map((language) => `<button class="${language === state.activeLanguage ? 'selected' : ''}" data-action="language" data-language="${language}">${language}</button>`).join('')}</div>
    <div class="partner-scroll">${module}${people.map(renderPerson).join('')}</div>
    ${renderBottomTab()}
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ''}
    ${state.cityMenu ? renderCityMenu(false) : ''}
    ${state.sheet ? renderMapSheet() : ''}
  </div>`;
}

function momentsIcon(name) {
  const icons = {
    rank: '<svg viewBox="0 0 28 28" aria-hidden="true"><rect x="2" y="13" width="5" height="12" rx="1.5"></rect><rect x="11.5" y="6" width="5" height="19" rx="1.5"></rect><rect x="21" y="10" width="5" height="15" rx="1.5"></rect></svg>',
    target: '<svg viewBox="0 0 28 28" aria-hidden="true"><circle cx="14" cy="14" r="10.5"></circle><circle cx="14" cy="14" r="5.5"></circle><path d="m18.5 9.5 6-6M20.5 3.5h4v4"></path></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.3"></circle><path d="m14.5 14.5 4.3 4.3"></path></svg>',
    bell: '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M7 20h14l-2.1-2.5v-5.2a5 5 0 0 0-9.8 0v5.2z"></path><path d="M11.4 23a3 3 0 0 0 5.2 0"></path></svg>',
    write: '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="m5 21 1.6-5.3L19.7 2.6a2.7 2.7 0 0 1 3.8 3.8L10.4 19.5z"></path><path d="m16.8 5.5 4.2 4.2M4.5 23.2h12"></path></svg>',
    filter: '<svg viewBox="0 0 28 28" aria-hidden="true"><path d="M3 6h22M3 14h22M3 22h22"></path><circle cx="9" cy="6" r="2.2"></circle><circle cx="19" cy="14" r="2.2"></circle><circle cx="12" cy="22" r="2.2"></circle></svg>'
  };
  return icons[name];
}

function renderMomentsHome() {
  const teacher = teachers.find((item) => item.id === 'sarah');
  const course = teacherCourses(teacher)[0];
  return `<div class="screen moments-home"><div class="moments-island" aria-hidden="true"></div>${systemStatus('moments-status')}<nav class="moments-top moments-native-toolbar"><button class="moments-rank" aria-label="榜单">${momentsIcon('rank')}</button><button class="moments-target" aria-label="目标">${momentsIcon('target')}</button><label class="moments-search">${momentsIcon('search')}<span>绕口令挑战</span></label><button class="moments-bell" aria-label="通知">${momentsIcon('bell')}<b>3</b></button><button class="moments-write" aria-label="发布动态">${momentsIcon('write')}</button></nav><nav class="moments-tabs"><button>最新</button><button>推荐</button><button>互助</button><button>自拍⌄</button><button class="selected">♛ 附近</button><button>关注<i></i></button><button class="moments-filter" aria-label="筛选">${momentsIcon('filter')}</button></nav><main class="moments-scroll"><article class="moment-post"><header class="moment-head"><span class="moment-avatar photo-${teacher.photo}"><i>${flag(teacher.country)}</i></span><div><h1>${teacher.name}<mark>✓</mark><em>认证面授老师</em></h1><p>CN　⇄　JP　EN</p></div><button class="moment-more" aria-label="更多">•••</button><time>刚刚</time></header><p class="moment-copy">这周在深圳开设一对一中文面授课。<br />想更自然地开口说中文，欢迎来一起练习。</p><button class="shared-course-card" data-action="open-post-course" aria-label="查看${course.title}"><img src="${course.cover}" alt="${course.title}" /><div><b>${course.title}</b><p><span>${courseIcon('mic')}${course.language}</span><span>${courseIcon('book')}${course.sessions} 节课</span></p><p><span>${courseIcon('clock')}${course.duration}</span></p><strong>¥${course.price}/节课</strong></div><i>›</i></button><div class="shared-course-locations"><span>⌖ 可选地点：${course.venues.map((venue) => venue.venue).join('、')}</span></div><footer class="moment-foot"><span>⌖ 深圳市，南山区</span><div><button>♡ 12</button><button>◯ 3</button><button>↗</button></div></footer></article></main>${renderBottomTab('moments')}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderBottomTab(active = 'partner') {
  const items = [{ tab: 'HelloTalk', icon: 'tab_chat_active.png', key: 'chat' }, { tab: '找语伴', icon: active === 'partner' ? 'tab_partner_active.png' : 'tab_partner.png', key: 'partner' }, { tab: '动态', icon: 'tab_moment.png', key: 'moments' }, { tab: '语聊 / 直播', icon: 'tab_live.png', key: 'live' }, { tab: '我', icon: 'tab_mine.png', key: 'mine' }];
  const native = active === 'moments' ? 'moments-native-tabbar' : 'partner-native-tabbar';
  const reference = active === 'moments' ? 'ht-native-moments-tabbar.jpg' : 'ht-bottom-tab-partner-active.png';
  return `<nav class="bottom-tab ${native}" aria-label="主导航"><img class="bottom-native-reference" src="assets/${reference}" alt="" />${items.map((item) => `<button class="bottom-item ${active === item.key ? 'selected' : ''}" data-action="tab-root" data-tab="${item.tab}">${active === 'moments' && item.key === 'moments' ? bottomMomentActiveIcon() : `<img src="assets/${item.icon}" alt="" />`}<small>${item.tab}</small></button>`).join('')}</nav>`;
}

function renderCityMenu(inSheet) { return `<div class="city-menu ${inSheet ? 'sheet-city-menu' : ''}">${['深圳', '上海', '东京', '广州'].map((city) => `<button data-action="select-city" data-city="${city}"><span>${city}</span>${city === state.mapCity ? '✓' : ''}</button>`).join('')}</div>`; }

function normalizeSearch(value) {
  return String(value || '').toLocaleLowerCase().replace(/[\s·・,，、/\\-]/g, '');
}

function matchesCourseSearch(text, query) {
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery || text.includes(normalizedQuery)) return true;
  const intentTerms = normalizedQuery.match(/西班牙语|中文|英语|日语|韩语|面授|课程|会话|老师|地点/g) || [];
  return intentTerms.length > 1 && intentTerms.every((term) => text.includes(term));
}

function venueRows(city = state.city) {
  const todayOnly = state.mapFilter === '今天可约';
  const weekOnly = state.mapFilter === '本周有课';
  return eligibleTeachers(city).filter((teacher) => !state.mapTeacherId || teacher.id === state.mapTeacherId).flatMap((teacher) => {
    const courses = state.mapTeacherId ? teacherCourses(teacher, city) : teacherCourses(teacher, city);
    return courses.flatMap((course) => course.venues.map((venue) => ({ ...venue, teacher, course, sessionTime: course.id === 'weekend' ? course.schedule : venue.slots })));
  }).filter((item) => {
    const text = normalizeSearch(`${item.venue}${item.teacher.name}${item.area}${item.course.title}${item.course.language}`);
    const queryOk = matchesCourseSearch(text, state.mapQuery);
    const timingOk = state.mapFilter === '全部' || (todayOnly && item.sessionTime.includes('今天')) || (weekOnly && !item.sessionTime.includes('今天'));
    const languageOk = state.mapLanguage === '全部' || item.course.language === state.mapLanguage;
    return queryOk && timingOk && languageOk;
  });
}

function citySearchCounts() {
  if (!state.mapQuery || state.mapTeacherId) return [];
  return ['深圳', '上海', '东京', '广州'].map((city) => ({ city, count: venueRows(city).length })).filter((item) => item.count > 0);
}

function renderCitySearchResults() {
  const results = citySearchCounts();
  if (!results.length) return '';
  return `<div class="search-city-results" data-search-city-results><span>有课城市</span>${results.map(({ city, count }) => `<button data-action="select-search-city" data-city="${city}" class="${city === state.mapCity ? 'selected' : ''}"><b>${city}</b><em>${count}</em></button>`).join('')}</div>`;
}

function mapLocations(venues) {
  const grouped = new Map();
  venues.forEach((item) => {
    const existing = grouped.get(item.venue);
    if (existing) existing.prices.push(item.course.price);
    else grouped.set(item.venue, { ...item, prices: [item.course.price] });
  });
  return [...grouped.values()].map((item) => {
    const minimumPrice = Math.min(...item.prices);
    const maximumPrice = Math.max(...item.prices);
    return { ...item, priceLabel: maximumPrice > minimumPrice ? `¥${minimumPrice}起` : `¥${minimumPrice}` };
  });
}

const staticMapConfig = {
  深圳: { longitude: 113.995, latitude: 22.518, zoom: 10 },
  上海: { longitude: 121.475, latitude: 31.200, zoom: 10 },
  东京: { longitude: 139.742, latitude: 35.682, zoom: 11 },
  广州: { longitude: 113.315, latitude: 23.135, zoom: 11 }
};

const venueCoordinates = {
  '南山慢咖啡': [113.938, 22.533],
  '海上世界书吧': [113.919, 22.484],
  '福田语言角': [114.052, 22.543],
  '华侨城创意园': [113.987, 22.538],
  '车公庙读书会': [114.026, 22.529],
  '深圳湾公园驿站': [113.949, 22.516],
  '静安语言空间': [121.445, 31.227],
  '徐汇会话馆': [121.435, 31.195],
  '前滩书屋': [121.511, 31.151],
  '涩谷学习咖啡': [139.701, 35.661],
  '新宿语言角': [139.704, 35.694],
  '天河书店': [113.334, 23.133],
  '珠江新城咖啡馆': [113.328, 23.119],
  '越秀公园语言角': [113.263, 23.147],
  '南头古城语言屋': [113.925, 22.543],
  '蛇口海湾书房': [113.913, 22.489],
  '莲花山城市客厅': [114.057, 22.558],
  '岗厦北阅读空间': [114.060, 22.541],
  '科兴科学园共享空间': [113.968, 22.545],
  '南头古城阅文社': [113.927, 22.541],
  '红树林自然教室': [113.965, 22.526],
  '后海语伴小屋': [113.942, 22.518],
  '华润大厦会客厅': [113.962, 22.529],
  '下沙文化站': [114.031, 22.523],
  '香蜜湖会客厅': [114.038, 22.552],
  '前海演艺公园': [113.910, 22.527],
  '海岸城阅读角': [113.951, 22.520],
  '东山口文化客厅': [113.296, 23.121],
  '珠江公园书屋': [113.339, 23.126],
  '猎德桥下会话角': [113.337, 23.115],
  '太古仓读书社': [113.257, 23.099],
  '永庆坊小剧场': [113.238, 23.117],
  '琶洲创意社区': [113.368, 23.105]
};

function tilePoint(longitude, latitude, zoom) {
  const scale = 2 ** zoom;
  const latitudeRadians = latitude * Math.PI / 180;
  return {
    x: (longitude + 180) / 360 * scale,
    y: (1 - Math.asinh(Math.tan(latitudeRadians)) / Math.PI) / 2 * scale
  };
}

function renderStaticMapTiles(city) {
  const config = staticMapConfig[city] || staticMapConfig.深圳;
  const center = tilePoint(config.longitude, config.latitude, config.zoom);
  const tileX = Math.floor(center.x);
  const tileY = Math.floor(center.y);
  const centerX = 256 + (center.x - tileX) * 256;
  const centerY = 256 + (center.y - tileY) * 256;
  const tiles = [];
  for (let y = -1; y <= 1; y += 1) {
    for (let x = -1; x <= 1; x += 1) {
      tiles.push(`<img src="https://tile.openstreetmap.org/${config.zoom}/${tileX + x}/${tileY + y}.png" alt="" />`);
    }
  }
  return `<div class="static-map-tiles" style="--map-center-x:${centerX}px;--map-center-y:${centerY}px">${tiles.join('')}</div>`;
}

function markerPosition(venue, city) {
  const config = staticMapConfig[city] || staticMapConfig.深圳;
  const [longitude, latitude] = venueCoordinates[venue] || [config.longitude, config.latitude];
  const center = tilePoint(config.longitude, config.latitude, config.zoom);
  const point = tilePoint(longitude, latitude, config.zoom);
  return {
    left: `calc(50% + ${((point.x - center.x) * 256).toFixed(1)}px)`,
    top: `calc(50% + ${((point.y - center.y) * 256).toFixed(1)}px)`
  };
}

function renderMapMarkers(venues, active) {
  return venues.map((item) => {
    const position = markerPosition(item.venue, state.mapCity);
    const multipleCourses = item.prices.length > 1;
    return `<button data-action="select-venue" data-venue="${item.venue}" class="map-marker ${multipleCourses ? 'multi-course' : ''} ${item.venue === active ? 'active' : ''}" style="left:${position.left};top:${position.top}" aria-label="${item.venue}"><span></span></button>`;
  }).join('');
}

function renderVenueList(venues, active) {
  return `<div class="venue-list">${venues.map((item) => `<button data-action="select-venue" data-venue="${item.venue}" class="venue-card ${item.venue === active ? 'selected' : ''}"><span class="venue-dot"></span><div><strong>${item.course.title}</strong><b>${item.venue}</b><small>${state.mapTeacherId ? item.sessionTime : `${item.teacher.name} · ${item.sessionTime}`}</small></div><em>¥${item.course.price}/节课</em></button>`).join('') || '<div class="empty">没有符合条件的课程</div>'}</div>`;
}

function renderGlobalCourseList(venues, active) {
  const grouped = [...new Map(venues.map((item) => [`${item.teacher.id}:${item.course.id}`, { teacher: item.teacher, course: item.course, venues: venues.filter((row) => row.teacher.id === item.teacher.id && row.course.id === item.course.id) }])).values()];
  const orderedGroups = active ? [...grouped].sort((a, b) => Number(b.venues.some((venue) => venue.venue === active)) - Number(a.venues.some((venue) => venue.venue === active))) : grouped;
  return `<div class="course-map-list global-course-list">${orderedGroups.map(({ teacher, course, venues: courseVenues }) => `<article class="map-course-card ${courseVenues.some((venue) => venue.venue === active) ? 'selected' : ''}"><div class="map-course-head"><div><strong>${course.title}</strong><small class="course-teacher-meta"><button class="course-teacher-avatar photo-${teacher.photo}" data-action="profile" data-id="${teacher.id}" aria-label="查看${teacher.name}的资料"></button><span>${teacher.name} · ${course.duration}</span></small></div><em>¥${course.price}/节课</em></div><div class="map-course-venues">${courseVenues.map((venue) => `<button data-action="select-global-course-venue" data-course="${course.id}" data-venue="${venue.venue}" class="${venue.venue === active ? 'selected' : ''}"><b>${venue.venue}</b><small>${venue.sessionTime}</small></button>`).join('')}</div></article>`).join('') || '<div class="empty">没有符合条件的课程</div>'}</div>`;
}

function renderTeacherCourseList(teacher, active) {
  const courses = teacherCourses(teacher);
  return `<div class="teacher-course-list"><p>课程与可选上课地点</p>${courses.map((course) => `<article class="teacher-course-card ${course.id === state.selectedCourse ? 'selected' : ''}"><button class="teacher-course-head" data-action="open-course-from-map" data-course="${course.id}"><div><strong>${course.title}</strong><small>${course.sessions} 节课 · ${course.duration}</small></div><em>¥${course.price}/节课</em><span>›</span></button><div class="teacher-course-venues">${course.venues.map((venue) => `<button data-action="select-teacher-course-venue" data-course="${course.id}" data-venue="${venue.venue}" class="${course.id === state.selectedCourse && venue.venue === active ? 'selected' : ''}"><b>${venue.venue}</b><small>${course.id === 'weekend' ? course.schedule : venue.slots}</small></button>`).join('')}</div></article>`).join('')}</div>`;
}

function renderMapStage(venues, active, focusedTeacher) {
  if (!venues.length && !focusedTeacher) {
    const suggestions = citySearchCounts();
    return `<div class="map-empty-city"><strong>${state.mapCity}暂无相关课程</strong><p>试试其他有课城市</p><div>${suggestions.map(({ city, count }) => `<button data-action="select-search-city" data-city="${city}">${city} <b>${count}</b></button>`).join('')}</div></div>`;
  }
  return `<div class="real-map" aria-label="${state.mapCity}面授场所概览">${renderStaticMapTiles(state.mapCity)}<div class="map-marker-layer" data-map-markers>${renderMapMarkers(mapLocations(venues), active)}</div><small class="map-attribution">© OpenStreetMap contributors</small></div><div data-map-results>${focusedTeacher ? renderTeacherCourseList(focusedTeacher, active) : renderGlobalCourseList(venues, active)}</div>`;
}

function bindDynamicMapResults() {
  const focusedTeacher = teachers.find((teacher) => teacher.id === state.mapTeacherId);
  app.querySelectorAll('[data-map-markers] [data-action="select-venue"], [data-map-results] [data-action="select-venue"], [data-map-results] [data-action="select-teacher-course-venue"], [data-map-results] [data-action="select-global-course-venue"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      event.stopPropagation();
      const fromMapMarker = Boolean(event.currentTarget.closest('[data-map-markers]'));
      state.activeVenue = event.currentTarget.dataset.venue;
      if (event.currentTarget.dataset.course) {
        state.selectedCourse = event.currentTarget.dataset.course;
        state.selectedVenue = event.currentTarget.dataset.venue;
      } else if (fromMapMarker) {
        const selectedRow = venueRows(state.mapCity).find((item) => item.venue === state.activeVenue);
        if (selectedRow) {
          state.selectedCourse = selectedRow.course.id;
          state.selectedVenue = selectedRow.venue;
        }
      }
      refreshMapResults({ revealActiveResult: fromMapMarker });
    });
  });
  app.querySelectorAll('[data-map-results] [data-action="open-course-from-map"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      state.selectedCourse = event.currentTarget.dataset.course;
      state.selectedVenue = state.activeVenue || teacherCourses(focusedTeacher).find((course) => course.id === state.selectedCourse)?.venues[0]?.venue || '';
      state.sheet = false;
      state.profileRoute = 'course-detail';
      render();
    });
  });
  app.querySelectorAll('[data-search-city-results] [data-action="select-search-city"], .map-empty-city [data-action="select-search-city"]').forEach((element) => {
    element.addEventListener('click', (event) => {
      state.mapCity = event.currentTarget.dataset.city;
      state.activeVenue = null;
      state.mapTeacherId = null;
      render();
    });
  });
}

function revealActiveMapResult() {
  requestAnimationFrame(() => {
    const list = app.querySelector('.global-course-list, .teacher-course-list');
    const selected = list?.querySelector('.map-course-card.selected, .teacher-course-card.selected');
    if (!list || !selected) return;
    const targetTop = selected.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
    list.scrollTo({ top: Math.max(0, targetTop - 8), behavior: 'auto' });
  });
}

function refreshMapResults({ revealActiveResult = false } = {}) {
  const venues = venueRows(state.mapCity);
  const active = state.activeVenue || venues[0]?.venue || '';
  app.querySelectorAll('.map-filters [data-action="map-filter"]').forEach((button) => {
    button.classList.toggle('selected', button.dataset.filter === state.mapFilter);
  });
  app.querySelectorAll('.map-filters [data-action="map-language"]').forEach((button) => {
    button.classList.toggle('selected', button.dataset.language === state.mapLanguage);
  });
  const focusedTeacher = teachers.find((teacher) => teacher.id === state.mapTeacherId);
  const cityResults = app.querySelector('[data-search-city-results]');
  const stage = app.querySelector('[data-map-stage]');
  if (!stage) return;
  if (cityResults) cityResults.outerHTML = renderCitySearchResults() || '<div data-search-city-results></div>';
  stage.innerHTML = renderMapStage(venues, active, focusedTeacher);
  bindDynamicMapResults();
  if (revealActiveResult) revealActiveMapResult();
}

function renderMapSheet() {
  const venues = venueRows(state.mapCity);
  const active = state.activeVenue || venues[0]?.venue || '';
  const focusedTeacher = teachers.find((teacher) => teacher.id === state.mapTeacherId);
  const globalControls = `<label class="map-search">⌕<input data-action="map-search" value="${state.mapQuery}" placeholder="搜索课程、地点或老师" /></label><div class="map-filters"><div class="map-filter-row">${['全部', '今天可约', '本周有课'].map((filter) => `<button data-action="map-filter" data-filter="${filter}" class="${filter === state.mapFilter ? 'selected' : ''}">${filter === '全部' ? '任意时间' : filter}</button>`).join('')}</div><div class="map-filter-row language-filter-row">${['全部', '中文', '英语', '日语', '韩语'].map((language) => `<button data-action="map-language" data-language="${language}" class="${language === state.mapLanguage ? 'selected' : ''}">${language === '全部' ? '全部语言' : language}</button>`).join('')}</div></div>`;
  return `<div class="sheet-layer"><button class="scrim" data-action="close-sheet" aria-label="关闭地图抽屉"></button><section class="map-sheet ${focusedTeacher ? 'focused-teacher' : ''}" aria-label="面授场所地图"><div class="sheet-handle"></div><div class="sheet-title"><strong>${focusedTeacher ? `${focusedTeacher.name} 的面授课程` : '面授场所'}</strong>${focusedTeacher ? '' : `<button data-action="sheet-city-menu" class="city-switch">${state.mapCity}⌄</button>`}<button data-action="close-sheet" class="close">×</button></div>${!focusedTeacher && state.sheetCityMenu ? renderCityMenu(true) : ''}
    ${focusedTeacher ? '' : globalControls}
    ${focusedTeacher ? '' : renderCitySearchResults() || '<div data-search-city-results></div>'}
    <div data-map-stage>${renderMapStage(venues, active, focusedTeacher)}</div>
  </section></div>`;
}

function profileCourse(teacher, course) {
  const detailByTeacher = {
    sarah: { language: '中文', sessions: 2, duration: '50 min/节课', price: 50 },
    david: { language: '英语', sessions: 3, duration: '45 min/节课', price: 68 },
    yuki: { language: '日语', sessions: 2, duration: '60 min/节课', price: 72 },
    minji: { language: '韩语', sessions: 4, duration: '45 min/节课', price: 66 },
    lucas: { language: '西班牙语', sessions: 2, duration: '50 min/节课', price: 70 }
  };
  const detail = detailByTeacher[teacher.id] || { language: '语言', sessions: 2, duration: '50 min/节课', price: 60 };
  return { ...detail, title: `一对一 ${detail.language} 面授`, learningLanguage: detail.language === '中文' ? '英语' : '中文', venue: course?.venue || '暂未开设课程', area: course?.area || '' };
}

function teacherForProfile() { return teachers.find((item) => item.id === state.profileId); }

function courseVenues(teacher, city = state.city) { return (teacher?.cityCourses[city] || []).slice(0, 3); }

function currentVenue(teacher) {
  const venues = teacherCourses(teacher).find((course) => course.id === state.selectedCourse)?.venues || courseVenues(teacher);
  return venues.find((venue) => venue.venue === state.selectedVenue) || venues[0] || { venue: '暂未开设课程', area: '' };
}

function teacherCourses(teacher, city = state.city) {
  const venues = courseVenues(teacher, city);
  const weekendVenues = (teacher.weekendCityCourses?.[city] || venues).slice(0, 3);
  const primary = profileCourse(teacher, venues[0]);
  const courses = [
    { id: 'conversation', ...primary, venues, description: `在真实场景中练习 ${primary.language}，适合希望开口交流的学习者。`, times: '2 次', schedule: '今天 19:00', cover: 'assets/course-cover-reference.png' },
    { id: 'weekend', ...primary, venues: weekendVenues, title: `${primary.language} 周末面授会话课`, sessions: 3, duration: '60 min/节课', price: primary.price + 20, description: `围绕日常话题展开面授会话练习。`, times: '3 次', schedule: '周六 14:00', cover: 'assets/course-cover-reference.png' }
  ];
  return teacher.cityCourseCount?.[city] === 1 ? courses.slice(0, 1) : courses;
}

function selectedCourse() { return teacherCourses(teacherForProfile()).find((item) => item.id === state.selectedCourse) || teacherCourses(teacherForProfile())[0]; }

function renderProfileTab(teacher) {
  if (state.profileTab === 'moments') return `<section class="profile-tab-panel"><article class="moment-card"><div class="moment-author"><div class="mini-avatar photo-${teacher.photo}"></div><div><b>${teacher.name}</b><small>刚刚</small></div></div><p>本周在 ${state.city} 的面授课程开放预约，期待和大家见面。</p><button data-action="open-post">查看动态 <span>›</span></button></article></section>`;
  if (state.profileTab === 'honors') return `<section class="profile-tab-panel honor-panel"><div><b>✓</b><strong>认证面授老师</strong><small>已完成平台认证</small></div><div><b>★</b><strong>课程好评</strong><small>持续提供线下面授</small></div></section>`;
  return `<section class="profile-tab-panel archive-panel"><div class="profile-stats"><div><b>▣ 加入 1819 天</b><span>⌘ 1118 学习点数</span></div><hr /><div class="study-icons"><span>文<small>771</small></span><span>日<small>193</small></span><span>Abc<small>21</small></span><span>♩<small>30</small></span><span>◖<small>96</small></span><span>⟳<small>7</small></span></div></div><h3>兴趣爱好</h3><div class="interest-tags"><button data-action="tag">你好</button><button data-action="tag">花样滑冰</button><button data-action="tag">摄影</button><button data-action="tag">CORTIS</button><button data-action="tag">badminton</button><button data-action="tag">健身</button><button data-action="tag">羽毛球</button></div><h3>个人信息</h3><div class="mbti-card"><b>ENFP</b><small>MBTI</small></div></section>`;
}

function renderProfileMore() {
  const options = ['添加备注', '分享', '不看他的动态', '屏蔽', '举报'];
  return `<div class="profile-more-layer"><button class="scrim" data-action="close-profile-more" aria-label="关闭更多操作"></button><section class="profile-more-sheet">${options.map((option) => `<button data-action="profile-more-action" data-label="${option}">${option}</button>`).join('')}<button class="profile-more-cancel" data-action="close-profile-more">取消</button></section></div>`;
}

function renderCourseVenueBlock(teacher) {
  const venues = courseVenues(teacher);
  const venue = currentVenue(teacher);
  const venueLabel = venues.length > 1 ? `${venue.venue}等 ${venues.length} 处` : venue.venue;
  return `<div class="course-venue-inline"><span><i class="venue-pin" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg></i>${venueLabel}</span><button data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}">地图 ›</button></div>`;
}

function renderCourseVenueSection(teacher, venue) {
  const venues = courseVenues(teacher);
  return `<section class="course-venue-section"><div class="course-venue-section-head"><b>可选上课地点</b><button data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}">查看地图 ›</button></div><div class="course-venue-chips">${venues.map((item) => `<button data-action="select-course-venue" data-venue="${item.venue}" class="${item.venue === venue.venue ? 'selected' : ''}">${item.venue}<small>${item.area}</small></button>`).join('')}</div></section>`;
}

function renderProfile() {
  const teacher = teacherForProfile();
  const course = selectedCourse();
  return `<div class="screen ht-profile map-profile"><main class="profile-scroll"><section class="profile-map-hero"><button class="map-nav-back" data-action="back-profile" aria-label="返回">‹</button><button class="map-nav-more" data-action="open-profile-more" aria-label="更多操作">•••</button><button class="nearby-pill" data-action="nearby-teachers">♟ 566 人在附近</button></section>
    <section class="map-profile-summary"><div class="map-profile-avatar photo-${teacher.photo}"><i>${flag(teacher.country)}</i></div><button class="profile-like" data-action="like-profile">♧ 97</button><div class="map-profile-name"><h1>${teacher.name} <span>♀24</span><b>VIP+</b><em>Lv 23</em></h1><p>@${teacher.id}<button data-action="copy-id" aria-label="复制用户 ID">▣</button></p></div><div class="map-profile-languages"><div><b>CN</b><b>ES</b><span>⇄</span><b>JP</b><b>KR</b><b>EN</b><b>PT</b><b>IT</b></div><small>中文　西班牙语　　日语　韩语　英语　葡萄牙语　意大利语</small></div><p class="map-profile-streak"><strong>30 天</strong> 连胜　加入 <strong>1819 天</strong></p><p class="map-profile-intro">Chinese 🌟 🌟 🌟 🌟 🌟<br />Korean 🌟 🌟 🌟 🌟 🌟<br />English 🌟 🌟 🌟　<a data-action="open-profile-more">更多</a></p></section>
    <section class="course-section inserted-course"><div class="course-section-head"><h2>和我一起上课</h2><button data-action="open-course-list">查看更多 <span>›</span></button></div><article class="course-card offline-map-card"><button class="course-card-summary" data-action="open-course-detail" aria-label="查看${course.title}"><div class="course-card-title"><strong>${course.title}</strong><span class="in-person-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg>线下课程</span></div><div class="course-card-body"><img src="${course.cover}" alt="${course.title}课程封面" /><div class="course-meta"><p><span>${courseIcon('mic')}${course.language}</span><em>${courseIcon('book')}${course.sessions} 节课</em></p><p><span>${courseIcon('clock')}${course.duration}</span></p><b>¥${course.price}/节课</b></div></div></button>${renderCourseVenueBlock(teacher)}</article><div class="course-pagination"><b></b><i></i></div></section>
    <nav class="profile-tabs"><button data-action="profile-tab" data-tab="archive" class="${state.profileTab === 'archive' ? 'selected' : ''}">个人档案</button><button data-action="profile-tab" data-tab="moments" class="${state.profileTab === 'moments' ? 'selected' : ''}">动态 63</button><button data-action="profile-tab" data-tab="honors" class="${state.profileTab === 'honors' ? 'selected' : ''}">荣誉</button></nav>${renderProfileTab(teacher)}</main>
    <div class="profile-actions map-profile-actions"><button class="relationship" data-action="follow" aria-label="关注">♟</button><button class="primary" data-action="hi">聊天</button><button class="gift" data-action="wish" aria-label="预约日历">▣</button></div>${state.profileMore ? renderProfileMore() : ''}${state.sheet ? renderMapSheet() : ''}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderCourseList() {
  const teacher = teacherForProfile();
  const courses = teacherCourses(teacher);
  const visibleCourses = state.courseFilter === 'all' ? courses : courses.filter((course) => course.id === 'conversation');
  return `<div class="screen course-list-page"><header class="detail-nav"><button data-action="back-to-profile" aria-label="返回">‹</button><strong>课程列表</strong><button data-action="share-course" aria-label="分享">⌑</button></header><main class="detail-scroll"><div class="course-list-filter"><button class="${state.courseFilter === 'all' ? 'selected' : ''}" data-action="filter-courses" data-filter="all">全部</button><button class="${state.courseFilter === 'short' ? 'selected' : ''}" data-action="filter-courses" data-filter="short">${courses[0].duration.replace('/节课', '')}</button></div>${visibleCourses.map((course) => `<button class="course-list-item" data-action="select-course" data-course="${course.id}"><img src="${course.cover}" alt="" /><div><b>${course.title}</b><p>▮ ${course.sessions} 节课　◷ ${course.duration}</p><small>⌖ ${course.venues.map((venue) => venue.venue).join(' · ')}</small><strong>¥${course.price}/节课</strong></div><span>›</span></button>`).join('')}</main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderPaymentSheet(course) {
  const methods = [{ name: '支付宝', icon: '支', type: 'alipay' }, { name: '微信', icon: '●', type: 'wechat' }];
  return `<div class="payment-layer" aria-label="支付方式"><button class="payment-scrim" data-action="close-payment" aria-label="关闭支付方式"></button><section class="payment-sheet"><div class="payment-handle"></div><header><strong>支付方式</strong><button data-action="close-payment" aria-label="关闭">×</button></header><div class="payment-methods">${methods.map((method) => `<button data-action="select-payment" data-method="${method.name}" class="${state.paymentMethod === method.name ? 'selected' : ''}"><span class="payment-icon ${method.type}">${method.icon}</span><b>${method.name}</b><i>${state.paymentMethod === method.name ? '✓' : ''}</i></button>`).join('')}</div><button class="payment-confirm" data-action="confirm-payment">确认支付 ¥${course.price * course.sessions}</button></section></div>`;
}

function renderCourseDetail() {
  const teacher = teacherForProfile();
  const course = selectedCourse();
  const venue = currentVenue(teacher);
  return `<div class="screen course-detail-page"><header class="detail-nav overlay"><button data-action="back-from-course-detail" aria-label="返回">‹</button><div class="course-owner" data-action="back-to-profile"><span class="mini-avatar photo-${teacher.photo}"></span><b>${teacher.name}</b></div><button data-action="share-course" aria-label="分享">⌑</button></header><main class="detail-scroll"><img class="course-hero" src="${course.cover}" alt="${course.title}课程封面" /><section class="course-detail-main"><h1>${course.title}</h1><button class="course-teacher-row" data-action="back-to-profile"><span class="mini-avatar photo-${teacher.photo}"></span><div><b>${teacher.name}</b><small>● ${course.language}</small></div><span>›</span></button><button class="course-info-row" data-action="course-info"><span>◉</span><div><b>课程介绍</b><small>${course.description}</small></div><i>›</i></button>${renderCourseVenueSection(teacher, venue)}<button class="course-info-row" data-action="course-info"><span>◷</span><div><b>上课时间</b><small>${course.duration} · ${course.schedule}</small></div><i>›</i></button><button class="course-info-row" data-action="course-info"><span>▮</span><div><b>上课次数</b><small>${course.times}</small></div><i>›</i></button><p class="service-tip">购买可查看 <button data-action="support">服务条款</button></p></section></main><div class="booking-bar"><div><b>¥${course.price * course.sessions}</b><small>¥${course.price}/节课</small></div><button data-action="open-booking">立即预约</button></div>${state.sheet ? renderMapSheet() : ''}${state.paymentSheet ? renderPaymentSheet(course) : ''}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderBooking() {
  const teacher = teacherForProfile();
  const course = selectedCourse();
  const venue = currentVenue(teacher);
  if (state.bookingConfirmed) return `<div class="screen booking-page"><header class="detail-nav"><button data-action="back-to-course-detail" aria-label="返回">‹</button><strong>预约成功</strong><span></span></header><main class="booking-success"><div>✓</div><h1>已为你保留课程名额</h1><p>${course.title}<br />${venue.venue} · ${state.selectedDate} ${state.selectedSlot}</p><button data-action="back-to-profile" class="booking-confirm">返回老师资料</button></main></div>`;
  return `<div class="screen booking-page"><header class="detail-nav"><button data-action="back-to-course-detail" aria-label="返回">‹</button><strong>确认预约</strong><span></span></header><main class="detail-scroll booking-main"><section><h2>${course.title}</h2><p>${venue.venue} · ${venue.area}</p></section><section class="booking-venue"><h3>上课地点</h3><div class="booking-chips">${course.venues.map((item) => `<button data-action="select-course-venue" data-venue="${item.venue}" class="${item.venue === venue.venue ? 'selected' : ''}">${item.venue}</button>`).join('')}</div><button class="booking-map-link" data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}">在地图中查看 ›</button></section><section><h3>选择日期</h3><div class="booking-chips">${['今天', '明天', '周六'].map((date) => `<button data-action="select-date" data-date="${date}" class="${date === state.selectedDate ? 'selected' : ''}">${date}</button>`).join('')}</div></section><section><h3>选择时间</h3><div class="booking-chips">${['14:00', '16:00', '19:00'].map((slot) => `<button data-action="select-slot" data-slot="${slot}" class="${slot === state.selectedSlot ? 'selected' : ''}">${slot}</button>`).join('')}</div></section><section class="booking-summary"><b>课程金额</b><strong>¥${course.price * course.sessions}</strong><small>${course.sessions} 节课 · ¥${course.price}/节课</small></section></main><div class="booking-bar"><div><b>¥${course.price * course.sessions}</b><small>已选 ${state.selectedDate} ${state.selectedSlot}</small></div><button data-action="confirm-booking">确认预约</button></div>${state.sheet ? renderMapSheet() : ''}</div>`;
}

const creatorCourses = [
  { title: '一对一中文面授', meta: '¥50/50 分钟　共2次课', total: '¥100', cover: 'assets/course-cover-reference.png', live: true },
  { title: '中文周末会话课', meta: '¥70/60 分钟　共1次课', total: '¥70', cover: 'assets/course-cover-reference.png', live: true },
  { title: '中文发音练习', meta: '¥0/15 分钟　共1次课', total: '¥0', cover: 'assets/course-cover-reference.png', live: false },
  { title: '城市生活会话', meta: '¥200/30 分钟　共1次课', total: '¥200', cover: 'assets/course-cover-reference.png', live: false }
];

function creatorBack() { return `<button class="creator-back" data-action="my-back" aria-label="返回">‹</button>`; }

function creatorIcon(name) {
  const paths = {
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 16.5h.01M12 16.5h.01"/>',
    notebook: '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    wallet: '<path d="M4 7.5h15.5a1.5 1.5 0 0 1 1.5 1.5v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12v3.5"/><path d="M16 12.5h5v3h-5a1.5 1.5 0 0 1 0-3Z"/>',
    cap: '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M6.5 11.2v4.2c2.7 2.1 8.3 2.1 11 0v-4.2M20 10v5"/>',
    bell: '<path d="M6 16.5h12l-1.5-2.2v-4.1a4.5 4.5 0 0 0-9 0v4.1L6 16.5Z"/><path d="M10 19h4"/>',
    analytics: '<rect x="4" y="3.5" width="16" height="17" rx="2.5"/><path d="M8 16v-4M12 16V8M16 16v-6"/>',
    archive: '<path d="M5 3.5h14v16H5z"/><path d="M9 8h6M12 11v5M9.5 13.5 12 16l2.5-2.5"/>',
    edit: '<path d="m4 16.8-.6 3.8 3.8-.6L19 8.2l-3.2-3.2L4 16.8Z"/><path d="m13.8 7 3.2 3.2"/>',
    share: '<circle cx="6" cy="12" r="2"/><circle cx="17.5" cy="6" r="2"/><circle cx="17.5" cy="18" r="2"/><path d="m7.8 11 7.8-4M7.8 13l7.8 4"/>'
  };
  return `<svg class="creator-symbol" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`;
}

function creatorCourseCard(course) {
  return `<article class="creator-course-card ${course.live ? '' : 'offline'}"><img src="${course.cover}" alt="${course.title}" /><div class="creator-course-copy"><b>${course.title}</b><small>${course.meta}</small><strong>${course.total}</strong></div><button class="creator-analytics" data-action="creator-toast" aria-label="课程数据">${creatorIcon('analytics')}</button><footer>${course.live ? `<button class="danger" data-action="creator-toast">${creatorIcon('archive')}<span>下架</span></button><button data-action="edit-course">${creatorIcon('edit')}<span>编辑</span></button><button data-action="creator-toast">${creatorIcon('share')}<span>推广</span></button>` : `<button class="relist" data-action="creator-toast">${creatorIcon('archive')}<span>重新上架</span></button>`}</footer></article>`;
}

function renderMyCourses() {
  const onSale = creatorCourses.filter((course) => course.live);
  const offline = creatorCourses.filter((course) => !course.live);
  return `<div class="screen creator-courses"><header class="creator-hero">${systemStatus('creator-status')}<div class="creator-title">${creatorBack()}<strong>我的课程</strong><span><button aria-label="教师中心" data-action="creator-toast">${creatorIcon('cap')}</button><button aria-label="通知" data-action="creator-toast">${creatorIcon('bell')}</button></span></div></header><main class="creator-scroll"><section class="creator-tools"><button data-action="create-course"><i class="tool-plus">+</i><b>创建新课</b></button><button data-action="manage-time"><i class="tool-calendar">${creatorIcon('calendar')}</i><b>时间管理</b></button><button data-action="manage-courses"><i class="tool-notebook">${creatorIcon('notebook')}</i><b>授课管理</b></button><button data-action="creator-toast"><i class="tool-wallet">${creatorIcon('wallet')}</i><b>课时收入</b></button></section><h2>近期待上</h2><section class="creator-empty"><i><b></b><b></b><b></b></i><p>暂无数据</p></section><h2>在售课程</h2>${onSale.map(creatorCourseCard).join('')}<h2>下架课程</h2>${offline.map(creatorCourseCard).join('')}</main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function formChevron() { return '<span class="creator-chevron">›</span>'; }

const creatorPlaceDirectory = {
  深圳: [{ name: '深圳湾万象城', district: '南山区', address: '科苑南路 2888 号' }, { name: '华侨城创意文化园', district: '南山区', address: '恩平街 1 号' }, { name: '福田 CBD 中心书城', district: '福田区', address: '福中一路 2014 号' }],
  上海: [{ name: '上海图书馆', district: '徐汇区', address: '淮海中路 1555 号' }, { name: '静安嘉里中心', district: '静安区', address: '南京西路 1515 号' }, { name: '前滩太古里', district: '浦东新区', address: '东育路 500 号' }],
  东京: [{ name: '涩谷 Hikarie', district: '涩谷区', address: '涩谷 2 丁目 21-1' }, { name: '新宿住友大厦', district: '新宿区', address: '西新宿 2 丁目 6-1' }, { name: '东京站丸之内', district: '千代田区', address: '丸之内 1 丁目' }],
  广州: [{ name: '广州图书馆', district: '天河区', address: '珠江东路 4 号' }, { name: '太古汇', district: '天河区', address: '天河路 383 号' }, { name: '永庆坊', district: '荔湾区', address: '恩宁路 99 号' }]
};

function creatorPlaceResults(city = state.creatorCity, query = state.creatorVenueQuery) {
  const keyword = query.trim();
  if (!keyword) return [];
  const matches = (creatorPlaceDirectory[city] || []).filter((place) => `${place.name}${place.district}${place.address}`.includes(keyword));
  return matches.length ? matches : [{ name: keyword, district: city, address: '地图搜索结果 · 请确认具体门牌' }];
}

function creatorNearbyPlaces() {
  return (creatorPlaceDirectory[state.creatorCity] || []).slice(0, 3);
}

function creatorPlaceHistory() {
  return state.creatorPlaceHistory.filter((place) => place.city === state.creatorCity);
}

function renderCreatorPlaceRows(places, action) {
  return places.map((place, index) => `<button class="creator-place-result ${state.courseVenues.some((venue) => venue.name === place.name) ? 'selected' : ''}" data-action="${action}" data-index="${index}"><span><b>${place.name}</b><small>${place.district} · ${place.address}</small></span><i>${state.courseVenues.some((venue) => venue.name === place.name) ? '✓' : '+'}</i></button>`).join('');
}

function renderCreatorPlaceResults() {
  const results = state.creatorVenueResults;
  if (!state.creatorVenueQuery.trim()) return '<p class="creator-place-empty">搜索地点、商场或详细地址后，再选择加入课程</p>';
  return renderCreatorPlaceRows(results, 'select-creator-place');
}

function renderCreatorPlaceBrowse() {
  const nearby = creatorNearbyPlaces();
  const history = creatorPlaceHistory();
  return `${history.length ? `<section class="creator-place-section creator-place-history"><div class="creator-place-section-head"><b>最近搜索</b><button data-action="clear-creator-place-history">清除</button></div>${renderCreatorPlaceRows(history, 'select-creator-history-place')}</section>` : ''}<section class="creator-place-section"><div class="creator-place-section-head"><b>附近地点</b><span>根据当前位置推荐</span></div>${renderCreatorPlaceRows(nearby, 'select-creator-nearby-place')}</section>`;
}

function toggleCreatorPlace(index, source = 'search') {
  const place = state.creatorVenueResults[index];
  if (!place) return;
  const selected = state.courseVenues.some((venue) => venue.name === place.name);
  if (selected) state.courseVenues = state.courseVenues.filter((venue) => venue.name !== place.name);
  else if (state.courseVenues.length < 3) {
    state.courseVenues = [...state.courseVenues, place];
    if (source === 'search') {
      const historyPlace = { ...place, city: state.creatorCity };
      state.creatorPlaceHistory = [historyPlace, ...state.creatorPlaceHistory.filter((item) => !(item.city === historyPlace.city && item.name === historyPlace.name))].slice(0, 8);
    }
  }
  else { state.toast = '最多选择 3 个可选地点'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
  render();
}

function creatorValue(value, fallback = '请选择') { return value || fallback; }

function renderCreatorSheet() {
  const sheet = state.creatorSheet || (state.courseDeliverySheet ? 'delivery' : '');
  if (!sheet) return '';
  const close = '<button data-action="close-creator-sheet" aria-label="关闭">×</button>';
  const option = (label, value, selected, detail = '') => `<button class="delivery-option ${selected ? 'selected' : ''}" data-action="select-creator-option" data-field="${sheet}" data-value="${value}"><span><b>${label}</b>${detail ? `<small>${detail}</small>` : ''}</span><i>${selected ? '✓' : ''}</i></button>`;
  if (sheet === 'delivery') return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet" role="dialog" aria-modal="true" aria-label="选择授课方式" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>选择授课方式</strong>${close}</header>${option('线上课程', '线上课程', state.courseDelivery === '线上课程', '通过语音或视频完成授课')}${option('线下课程', '线下课程', state.courseDelivery === '线下课程', '在可选地点与学员面授')}</section></div>`;
  if (sheet === 'tags') {
    const tags = ['日常会话', '发音纠正', '商务沟通', '考试辅导', '文化交流'];
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet venue-picker" role="dialog" aria-modal="true" aria-label="选择课程标签" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><span><strong>选择课程标签</strong><small>最多选择 3 个</small></span>${close}</header>${tags.map((tag) => option(tag, tag, state.courseTags.includes(tag))).join('')}<button class="creator-sheet-confirm" data-action="close-creator-sheet">完成（${state.courseTags.length}/3）</button></section></div>`;
  }
  const presets = { type: ['1v1', '小班课'], language: ['中文', '英语', '日语', '韩语'], duration: ['25 分钟/节', '45 分钟/节', '50 分钟/节', '60 分钟/节'], sessions: ['1 节', '2 节', '4 节', '10 节'] };
  if (presets[sheet]) {
    const key = `course${sheet[0].toUpperCase()}${sheet.slice(1)}`;
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet" role="dialog" aria-modal="true" aria-label="选择课程信息" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>${{ type: '课程类型', language: '课程语言', duration: '课程时长', sessions: '课程次数' }[sheet]}</strong>${close}</header>${presets[sheet].map((value) => option(value, value, state[key] === value)).join('')}</section></div>`;
  }
  const field = sheet === 'title' ? 'courseTitle' : sheet === 'description' ? 'courseDescription' : 'coursePrice';
  const meta = sheet === 'title' ? ['课程标题', '例如：一对一中文面授'] : sheet === 'description' ? ['课程描述', '介绍课程内容、适合的学习者'] : ['设定单价', '请输入每节课程的价格'];
  const input = sheet === 'description' ? `<textarea data-creator-input="${field}" placeholder="${meta[1]}">${state[field]}</textarea>` : `<input data-creator-input="${field}" ${sheet === 'price' ? 'inputmode="decimal"' : ''} value="${state[field]}" placeholder="${meta[1]}" />`;
  return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet creator-input-sheet" role="dialog" aria-modal="true" aria-label="${meta[0]}" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>${meta[0]}</strong>${close}</header>${input}<button class="creator-sheet-confirm" data-action="close-creator-sheet">完成</button></section></div>`;
}

function renderCreateCourse() {
  const offline = state.courseDelivery === '线下课程';
  const title = creatorValue(state.courseTitle, '请输入课程标题');
  const tags = state.courseTags.length ? state.courseTags.join('、') : '请选择';
  return `<div class="screen creator-form-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>创建新课</strong><span></span></div></header><main class="creator-form-scroll"><button class="creator-cover" data-action="creator-toast"><i>+</i><span>添加课程封面/预览视频<br />推荐上传2分钟内横屏视频</span></button><button class="creator-field single" data-action="open-creator-sheet" data-sheet="type"><small>课程类型</small><b>${state.courseType}</b>${formChevron()}</button><button class="creator-field single" data-action="open-creator-sheet" data-sheet="delivery"><small>授课方式</small><b class="${state.courseDelivery ? '' : 'placeholder'}">${creatorValue(state.courseDelivery)}</b>${formChevron()}</button>${offline ? `<button class="creator-field single creator-venue-field" data-action="open-creator-place"><small>可选授课地点 <i>最多 3 处</i></small><b class="${state.courseVenues.length ? '' : 'placeholder'}">${state.courseVenues.length ? `已选 ${state.courseVenues.length} 处` : '搜索并选择地点'}</b>${formChevron()}</button>` : ''}<button class="creator-field title-field" data-action="open-creator-sheet" data-sheet="title"><span><small>课程标题</small><b class="${state.courseTitle ? '' : 'placeholder'}">${title}</b></span><em>修改</em></button><section class="creator-field-group"><button data-action="open-creator-sheet" data-sheet="tags"><small>课程标签</small><b class="${state.courseTags.length ? '' : 'placeholder'}">${tags}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="language"><small>课程语言</small><b class="${state.courseLanguage ? '' : 'placeholder'}">${creatorValue(state.courseLanguage)}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="duration"><small>课程时长</small><b class="${state.courseDuration ? '' : 'placeholder'}">${creatorValue(state.courseDuration)}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="sessions"><small>课程次数</small><b class="${state.courseSessions ? '' : 'placeholder'}">${creatorValue(state.courseSessions)}</b>${formChevron()}</button></section><button class="creator-field single" data-action="open-creator-sheet" data-sheet="description"><small>课程描述</small><b class="${state.courseDescription ? '' : 'placeholder'}">${creatorValue(state.courseDescription, '请输入内容')}</b>${formChevron()}</button><button class="creator-field single" data-action="open-creator-sheet" data-sheet="price"><small>设定单价</small><b class="${state.coursePrice ? '' : 'placeholder'}">${creatorValue(state.coursePrice, '0')}</b><em>¥</em></button><div class="creator-form-actions"><button data-action="preview-course">预览课程</button><button data-action="submit-course">提交创建</button></div></main>${renderCreatorSheet()}</div>`;
}

function renderCreatorPlacePage() {
  const selected = state.courseVenues.map((venue) => venue.name).join('、');
  return `<div class="screen creator-place-page">${systemStatus('creator-place-status')}<main class="creator-place-surface"><header><button data-action="close-creator-place" aria-label="关闭">×</button><label><span>⌕</span><input data-creator-place-page-search value="${state.creatorVenueQuery}" placeholder="搜索附近位置" /></label></header><section class="creator-place-scroll">${state.courseVenues.length ? `<button class="creator-place-current" data-action="clear-creator-places"><span><b>已选上课地点</b><small>${selected}</small></span><i>✓</i></button>` : `<button class="creator-place-current" data-action="close-creator-place"><span><b>暂不添加地点</b><small>线下课程提交前仍需至少选择 1 处</small><em>你仍可随时回来添加</em></span><i></i></button>`}<div class="creator-place-page-results" data-creator-place-page-results>${state.creatorVenueQuery.trim() ? renderCreatorPlaceResults() : renderCreatorPlaceBrowse()}</div></section></main></div>`;
}

function renderTeachingInfo() {
  return `<div class="screen teaching-info-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>完善教学信息</strong><span></span></div></header><main class="teaching-info-scroll"><section class="teaching-section"><h2>视频介绍 <i>*</i><button data-action="creator-toast">重新上传</button></h2><button class="teaching-video" data-action="creator-toast"><img src="assets/course-cover-reference.png" alt="视频封面" /><b>▶</b></button></section><section class="teaching-section"><h2>教授语言<i>*</i></h2><button class="teaching-select" data-action="creator-toast">中文 <span>›</span></button><h2>同时会说</h2><button class="teaching-select" data-action="creator-toast">English, 中文 <span>›</span></button><h2>个人介绍<i>*</i></h2><button class="teaching-textarea" data-action="creator-toast">一对一面授中文课，地点和时间可协商。</button><h2>教学经验<i>*</i></h2></section><section class="teaching-section"><h2>教学资料<i>*</i><small>（可用于教学的文件类型）</small></h2><button class="teaching-select" data-action="creator-toast">PPT文件 <span>›</span></button><h2>获得证书<i>*</i><small>（推荐上传 CELTA、TESOL、CTCSOL 等证书）</small></h2><button class="teaching-select" data-action="creator-toast">Other <span>›</span></button><h2>证书图片<i>*</i></h2><button class="certificate-upload" data-action="creator-toast">▧<b>+</b></button><h2>学历背景</h2><div class="education-row"><button data-action="creator-toast">开始时间</button><span>−</span><button data-action="creator-toast">结束时间</button></div><button class="school-field" data-action="creator-toast">学校名称</button><h2>常用邮箱 <i>*</i></h2><button class="teaching-select" data-action="creator-toast">teacher@example.com</button><h2>手机号</h2></section></main><button class="teaching-submit" data-action="finish-teaching-info">确认提交</button></div>`;
}

function renderTimeManagement() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dates = ['', '', '', '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  const slots = Array.from({ length: 30 }, (_, index) => `${String(Math.floor(index / 2)).padStart(2,'0')}:${index % 2 ? '30' : '00'}`);
  return `<div class="screen time-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>时间管理</strong><button class="time-settings" data-action="creator-toast">⎔</button></div></header><main class="time-scroll"><section class="calendar-card"><div class="calendar-top"><button data-action="creator-toast">‹</button><b>2026/9</b><button data-action="creator-toast">›</button><span><button data-action="creator-toast">批量关课</button><button data-action="creator-toast">批量开课</button></span></div><div class="calendar-week">${days.map((day) => `<b>${day}</b>`).join('')}</div><div class="calendar-days">${dates.map((day) => `<button data-action="creator-toast" class="${day === '2' ? 'selected' : ''}">${day}</button>`).join('')}</div></section><button class="open-all" data-action="open-all-slots">全部打开</button><section class="time-grid">${slots.map((slot) => `<button data-action="toggle-slot"><b>${slot}</b><small>Closed</small></button>`).join('')}</section></main><button class="save-time" data-action="save-time">保存时间表</button>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderCreatorRoute() {
  if (state.creatorPlacePage) return renderCreatorPlacePage();
  if (state.myRoute === 'create') return renderCreateCourse();
  if (state.myRoute === 'teaching-info') return renderTeachingInfo();
  if (state.myRoute === 'time') return renderTimeManagement();
  return renderMyCourses();
}

function render() {
  if (!state.profileId && state.rootPage === 'mine') app.innerHTML = renderCreatorRoute();
  else if (!state.profileId && state.rootPage === 'moments') app.innerHTML = renderMomentsHome();
  else if (!state.profileId) app.innerHTML = renderPartnerHome();
  else if (state.profileRoute === 'course-list') app.innerHTML = renderCourseList();
  else if (state.profileRoute === 'course-detail') app.innerHTML = renderCourseDetail();
  else if (state.profileRoute === 'booking') app.innerHTML = renderBooking();
  else app.innerHTML = renderProfile();
  localizeDemoUI();
  bindEvents();
  syncCreatorConsole();
}

function syncCreatorConsole() {
  const uiLanguage = document.querySelector('#console-ui-language');
  const parameterSurface = document.querySelector('#scenario-parameters');
  const name = document.querySelector('#console-scenario-name');
  const expectation = document.querySelector('#console-expectation');
  if (uiLanguage) uiLanguage.value = state.uiLanguage;
  const options = (items, value) => items.map((item) => `<option value="${item}" ${item === value ? 'selected' : ''}>${item}</option>`).join('');
  const cityOptions = options(['深圳', '上海', '东京', '广州'], state.consoleMode === 'discovery' ? state.city : state.consoleMode === 'creator' ? state.creatorCity : state.mapCity);
  let title = '模块展示条件';
  let parameters = '';
  let expected = '';
  if (state.consoleMode === 'search') {
    title = '搜索范围与筛选';
    parameters = `<label>当前城市<select data-console-field="mapCity">${cityOptions}</select></label><label>预设搜索<select data-console-field="mapQuery">${options(['日语面授', '中文会话', '英语面授'], state.mapQuery)}</select></label><label>课程语言<select data-console-field="mapLanguage">${options(['全部', '中文', '英语', '日语', '韩语'], state.mapLanguage)}</select></label><label>可约时间<select data-console-field="mapFilter">${options(['全部', '今天可约', '本周有课'], state.mapFilter)}</select></label>`;
    const count = venueRows(state.mapCity).length;
    expected = count ? `当前城市展示 ${count} 个课程地点；搜索“${state.mapQuery}”时，上方保留其他有课城市入口。` : `当前城市不展示空点位；显示“${state.mapCity} 暂无相关课程”及其他有课城市入口。`;
  } else if (state.consoleMode === 'booking') {
    title = '预约与支付';
    parameters = `<label>教师<select data-console-field="profileId">${options(['sarah', 'david', 'yuki', 'minji', 'lucas'], state.profileId || 'sarah')}</select></label><label>预约日期<select data-console-field="selectedDate">${options(['今天', '周六', '周日'], state.selectedDate)}</select></label><label>预约时段<select data-console-field="selectedSlot">${options(['19:00', '14:00', '10:00'], state.selectedSlot)}</select></label><label>支付方式<select data-console-field="paymentMethod">${options(['支付宝', '微信'], state.paymentMethod)}</select></label>`;
    expected = `课程详情显示可选地点；点击立即预约后，以 ${state.paymentMethod} 为默认选中项打开支付半窗。`;
  } else if (state.consoleMode === 'creator') {
    title = '线下课程与地点';
    parameters = `<label>课程所在城市<select data-console-field="creatorCity">${cityOptions}</select></label><label>授课方式<select data-console-field="courseDelivery">${options(['线上课程', '线下课程'], state.courseDelivery || '线下课程')}</select></label><div class="console-metric"><span>课程字段<b>${creatorMissingFields().length ? `待补 ${creatorMissingFields().length} 项` : '可提交'}</b></span><span>可选地点<b>${state.courseVenues.length}/3 处</b></span></div>`;
    expected = state.creatorPlacePage ? `已进入地点搜索，保留“咖啡”的搜索记录与最近搜索；用户可继续搜索并选择地点。` : `线下课程最多可选 3 个地点；保存的地点仅影响该课程，不影响找语伴页面。`;
  } else {
    const count = eligibleTeachers(state.city).length;
    parameters = `<label>用户所在城市<select data-console-field="city">${cityOptions}</select></label><div class="console-metric"><span>符合条件老师<b>${count} 位</b></span><span>模块状态<b>${count >= 4 ? '展示' : '不展示'}</b></span></div>`;
    expected = count >= 4 ? `该城市满足“认证面授老师 + 已开设线下课程 + 数量 ≥ 4”，在语言 Tab 下方展示面授老师模块。` : `该城市老师数不足 4，模块不占位，语伴列表直接承接语言 Tab。`;
  }
  if (name) name.textContent = state.consoleScenario || title;
  if (parameterSurface) parameterSurface.innerHTML = parameters;
  if (expectation) expectation.innerHTML = `<b>预期结果</b><span>${expected}</span>`;
}

function creatorMissingFields() {
  const fields = [];
  if (!state.courseTitle.trim()) fields.push('课程标题');
  if (!state.courseDelivery) fields.push('授课方式');
  if (!state.courseLanguage) fields.push('课程语言');
  if (!state.courseDuration) fields.push('课程时长');
  if (!state.courseSessions) fields.push('课程次数');
  if (!state.coursePrice) fields.push('课程单价');
  if (state.courseDelivery === '线下课程' && !state.courseVenues.length) fields.push('至少 1 个可选地点');
  return fields;
}

function bindEvents() {
  app.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', (event) => {
    const action = event.currentTarget.dataset.action;
    // The search field has its own input listener below. Re-rendering on click
    // would immediately remove focus and prevent typing.
    if (action === 'map-search') return;
    if (action === 'open-sheet') { state.sheet = true; state.mapTeacherId = null; state.activeVenue = null; }
    if (action === 'close-sheet') { state.sheet = false; state.cityMenu = false; state.sheetCityMenu = false; state.mapTeacherId = null; state.activeVenue = null; }
    if (action === 'sheet-city-menu') state.sheetCityMenu = !state.sheetCityMenu;
    if (action === 'select-city') { state.mapCity = event.currentTarget.dataset.city; state.sheetCityMenu = false; state.activeVenue = null; state.mapTeacherId = null; }
    if (action === 'select-search-city') { state.mapCity = event.currentTarget.dataset.city; state.sheetCityMenu = false; state.activeVenue = null; state.mapTeacherId = null; }
    if (action === 'profile') { state.profileId = event.currentTarget.dataset.id; state.profileRoute = 'profile'; state.profileTab = 'archive'; state.profileMore = false; state.sheet = false; state.selectedCourse = 'conversation'; state.selectedVenue = courseVenues(teacherForProfile())[0]?.venue || ''; }
    if (action === 'back-profile') state.profileId = null;
    if (action === 'language') state.activeLanguage = event.currentTarget.dataset.language;
    if (action === 'map-filter') { state.mapFilter = event.currentTarget.dataset.filter; refreshMapResults(); return; }
    if (action === 'map-language') { state.mapLanguage = event.currentTarget.dataset.language; refreshMapResults(); return; }
    if (action === 'select-venue') { state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'select-teacher-course-venue') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = event.currentTarget.dataset.venue; state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'select-global-course-venue') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = event.currentTarget.dataset.venue; state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'open-course-from-map') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = state.activeVenue || selectedCourse().venues[0]?.venue || ''; state.sheet = false; state.profileRoute = 'course-detail'; }
    if (action === 'open-venue-map') { state.mapCity = state.city; state.mapTeacherId = event.currentTarget.dataset.id; state.selectedVenue = event.currentTarget.dataset.venue; state.activeVenue = event.currentTarget.dataset.venue; state.mapFilter = '全部'; state.mapQuery = ''; state.sheet = true; }
    if (action === 'clear-map-teacher') { state.mapTeacherId = null; state.activeVenue = null; render(); return; }
    if (action === 'hi') { state.toast = '已向对方打招呼'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'tab-root') { const tab = event.currentTarget.dataset.tab; if (tab === '找语伴') state.rootPage = 'partner'; else if (tab === '动态') state.rootPage = 'moments'; else if (tab === '我') { state.rootPage = 'mine'; state.myRoute = 'courses'; } else { state.toast = `${tab} 页面暂未纳入本次 Demo`; setTimeout(() => { state.toast = ''; render(); }, 1800); } }
    if (action === 'my-back') {
      if (state.myRoute === 'teaching-info') state.myRoute = 'create';
      else if (state.myRoute === 'create' || state.myRoute === 'time') state.myRoute = 'courses';
      else { state.rootPage = 'partner'; state.myRoute = 'courses'; }
    }
    if (action === 'create-course') state.myRoute = 'create';
    if (action === 'open-course-delivery') { state.creatorSheet = 'delivery'; render(); return; }
    if (action === 'close-course-delivery') { state.creatorSheet = ''; state.courseDeliverySheet = false; render(); return; }
    if (action === 'select-course-delivery') { state.courseDelivery = event.currentTarget.dataset.delivery; state.creatorSheet = ''; state.courseDeliverySheet = false; if (state.courseDelivery === '线上课程') state.courseVenues = []; render(); return; }
    if (action === 'open-creator-sheet') { state.creatorSheet = event.currentTarget.dataset.sheet; render(); return; }
    if (action === 'open-creator-place') { state.creatorPlacePage = true; state.creatorVenueQuery = ''; state.creatorVenueResults = []; render(); return; }
    if (action === 'close-creator-place') { state.creatorPlacePage = false; render(); return; }
    if (action === 'clear-creator-places') { state.courseVenues = []; render(); return; }
    if (action === 'clear-creator-place-history') { state.creatorPlaceHistory = state.creatorPlaceHistory.filter((place) => place.city !== state.creatorCity); render(); return; }
    if (action === 'close-creator-sheet') { state.creatorSheet = ''; state.courseDeliverySheet = false; render(); return; }
    if (action === 'select-creator-option') {
      const { field, value } = event.currentTarget.dataset;
      if (field === 'delivery') { state.courseDelivery = value; if (value === '线上课程') state.courseVenues = []; state.creatorSheet = ''; }
      else if (field === 'venues') { return; }
      else if (field === 'tags') { const selected = state.courseTags.includes(value); if (selected) state.courseTags = state.courseTags.filter((tag) => tag !== value); else if (state.courseTags.length < 3) state.courseTags = [...state.courseTags, value]; else { state.toast = '最多选择 3 个课程标签'; setTimeout(() => { state.toast = ''; render(); }, 1800); } }
      else { const key = `course${field[0].toUpperCase()}${field.slice(1)}`; state[key] = value; state.creatorSheet = ''; }
      render(); return;
    }
    if (action === 'select-creator-place') {
      toggleCreatorPlace(Number(event.currentTarget.dataset.index)); return;
    }
    if (action === 'select-creator-nearby-place') {
      state.creatorVenueResults = creatorNearbyPlaces();
      toggleCreatorPlace(Number(event.currentTarget.dataset.index), 'nearby'); return;
    }
    if (action === 'select-creator-history-place') {
      state.creatorVenueResults = creatorPlaceHistory();
      toggleCreatorPlace(Number(event.currentTarget.dataset.index)); return;
    }
    if (action === 'preview-course') { const missing = creatorMissingFields(); state.toast = missing.length ? `请先填写：${missing.join('、')}` : `预览：${state.courseTitle}`; setTimeout(() => { state.toast = ''; render(); }, 2200); }
    if (action === 'submit-course') { const missing = creatorMissingFields(); if (missing.length) { state.toast = `请先填写：${missing.join('、')}`; setTimeout(() => { state.toast = ''; render(); }, 2400); } else state.myRoute = 'teaching-info'; }
    if (action === 'manage-time') state.myRoute = 'time';
    if (action === 'manage-courses') { state.myRoute = 'courses'; state.toast = '当前展示全部在售与下架课程'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'edit-course' || action === 'open-teaching-info') state.myRoute = 'teaching-info';
    if (action === 'finish-teaching-info') { state.myRoute = 'courses'; state.toast = '教学信息已保存'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'toggle-slot') { const slot = event.currentTarget; slot.classList.toggle('opened'); slot.querySelector('small').textContent = slot.classList.contains('opened') ? 'Open' : 'Closed'; return; }
    if (action === 'open-all-slots') { app.querySelectorAll('.time-grid button').forEach((slot) => { slot.classList.add('opened'); slot.querySelector('small').textContent = 'Open'; }); return; }
    if (action === 'save-time') { state.toast = '时间表已保存'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'creator-toast') { state.toast = '该功能已保留入口'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-post-course') { state.profileId = 'sarah'; state.profileRoute = 'course-detail'; state.courseOrigin = 'moments'; state.selectedCourse = 'conversation'; state.selectedVenue = teacherCourses(teachers.find((item) => item.id === 'sarah'))[0].venues[0]?.venue || ''; }
    if (action === 'follow') { state.followed = !state.followed; state.toast = state.followed ? '已关注对方' : '已取消关注'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'wish') { state.toast = '已打开礼物面板'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'like-profile') { state.toast = '已点赞对方资料'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'nearby-teachers') { state.toast = '已查看附近语伴'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'copy-id') { state.toast = '用户 ID 已复制'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'translate-bio') { state.toast = '已翻译简介'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'tag') { state.toast = `已筛选相关兴趣`; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-post') { state.toast = '已打开动态详情'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-profile-more') state.profileMore = true;
    if (action === 'close-profile-more') state.profileMore = false;
    if (action === 'profile-more-action') { state.profileMore = false; state.toast = event.currentTarget.dataset.label === '分享' ? '已打开分享面板' : `已执行：${event.currentTarget.dataset.label}`; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'profile-tab') state.profileTab = event.currentTarget.dataset.tab;
    if (action === 'open-course-list') { state.courseOrigin = 'profile'; state.profileRoute = 'course-list'; }
    if (action === 'filter-courses') state.courseFilter = event.currentTarget.dataset.filter;
    if (action === 'open-course-detail') { state.courseOrigin = 'profile'; state.profileRoute = 'course-detail'; }
    if (action === 'select-course') { state.selectedCourse = event.currentTarget.dataset.course; state.courseOrigin = 'course-list'; state.profileRoute = 'course-detail'; }
    if (action === 'back-to-profile') { state.profileRoute = 'profile'; state.profileMore = false; }
    if (action === 'back-from-course-detail') { if (state.courseOrigin === 'moments') { state.profileId = null; state.rootPage = 'moments'; } else state.profileRoute = state.courseOrigin === 'course-list' ? 'course-list' : 'profile'; }
    if (action === 'back-to-course-detail') { state.profileRoute = 'course-detail'; state.bookingConfirmed = false; state.paymentSheet = false; }
    if (action === 'share-course') { state.toast = '已打开分享面板'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'course-info') { state.toast = '已展开课程说明'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'support') { state.toast = '已打开服务条款'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-booking') { state.paymentSheet = true; state.paymentMethod = '支付宝'; }
    if (action === 'select-course-venue') state.selectedVenue = event.currentTarget.dataset.venue;
    if (action === 'select-date') state.selectedDate = event.currentTarget.dataset.date;
    if (action === 'select-slot') state.selectedSlot = event.currentTarget.dataset.slot;
    if (action === 'close-payment') state.paymentSheet = false;
    if (action === 'select-payment') state.paymentMethod = event.currentTarget.dataset.method;
    if (action === 'confirm-payment') { state.paymentSheet = false; state.profileRoute = 'booking'; state.bookingConfirmed = true; }
    if (action === 'confirm-booking') state.bookingConfirmed = true;
    render();
  }));
  const mapInput = app.querySelector('[data-action="map-search"]');
  if (mapInput) mapInput.addEventListener('input', (event) => { state.mapQuery = event.target.value; state.activeVenue = null; refreshMapResults(); });
  app.querySelectorAll('[data-creator-input]').forEach((input) => input.addEventListener('input', (event) => { state[event.currentTarget.dataset.creatorInput] = event.currentTarget.value; syncCreatorConsole(); }));
  const creatorPlaceInput = app.querySelector('[data-creator-place-search]');
  if (creatorPlaceInput) creatorPlaceInput.addEventListener('input', (event) => { state.creatorVenueQuery = event.currentTarget.value; state.creatorVenueResults = creatorPlaceResults(); const results = app.querySelector('[data-creator-place-results]'); if (results) { results.innerHTML = renderCreatorPlaceResults(); results.querySelectorAll('[data-action="select-creator-place"]').forEach((button) => button.addEventListener('click', () => toggleCreatorPlace(Number(button.dataset.index)))); } });
  const creatorPlacePageInput = app.querySelector('[data-creator-place-page-search]');
  if (creatorPlacePageInput) creatorPlacePageInput.addEventListener('input', (event) => { state.creatorVenueQuery = event.currentTarget.value; state.creatorVenueResults = creatorPlaceResults(); const results = app.querySelector('[data-creator-place-page-results]'); if (results) { results.innerHTML = state.creatorVenueQuery.trim() ? renderCreatorPlaceResults() : renderCreatorPlaceBrowse(); results.querySelectorAll('[data-action="select-creator-place"]').forEach((button) => button.addEventListener('click', () => toggleCreatorPlace(Number(button.dataset.index)))); results.querySelectorAll('[data-action="select-creator-nearby-place"]').forEach((button) => button.addEventListener('click', () => { state.creatorVenueResults = creatorNearbyPlaces(); toggleCreatorPlace(Number(button.dataset.index), 'nearby'); })); results.querySelectorAll('[data-action="select-creator-history-place"]').forEach((button) => button.addEventListener('click', () => { state.creatorVenueResults = creatorPlaceHistory(); toggleCreatorPlace(Number(button.dataset.index), 'history'); })); results.querySelectorAll('[data-action="clear-creator-place-history"]').forEach((button) => button.addEventListener('click', () => { state.creatorPlaceHistory = state.creatorPlaceHistory.filter((place) => place.city !== state.creatorCity); render(); })); } });
}

document.querySelectorAll('[data-scenario]').forEach((button) => button.addEventListener('click', () => applyConsoleScenario(button.dataset.scenario)));
document.querySelector('#console-ui-language').addEventListener('change', (event) => {
  state.uiLanguage = event.currentTarget.value;
  render();
});
document.querySelector('#scenario-parameters').addEventListener('change', (event) => {
  const field = event.target.dataset.consoleField;
  if (!field) return;
  const value = event.target.value;
  if (field === 'city') { state.city = value; state.sheet = false; state.profileId = null; }
  if (field === 'mapCity') { state.mapCity = value; state.activeVenue = null; state.mapTeacherId = null; state.sheet = true; state.rootPage = 'partner'; }
  if (field === 'mapQuery') { state.mapQuery = value; state.activeVenue = null; state.sheet = true; state.rootPage = 'partner'; }
  if (field === 'mapLanguage') { state.mapLanguage = value; state.sheet = true; }
  if (field === 'mapFilter') { state.mapFilter = value; state.sheet = true; }
  if (field === 'profileId') { state.profileId = value; state.profileRoute = 'course-detail'; state.rootPage = 'partner'; state.selectedCourse = 'conversation'; state.selectedVenue = teacherCourses(teacherForProfile())[0]?.venues[0]?.venue || ''; state.paymentSheet = true; }
  if (field === 'selectedDate') state.selectedDate = value;
  if (field === 'selectedSlot') state.selectedSlot = value;
  if (field === 'paymentMethod') state.paymentMethod = value;
  if (field === 'creatorCity') { state.creatorCity = value; state.courseVenues = []; state.creatorVenueQuery = ''; state.creatorVenueResults = []; }
  if (field === 'courseDelivery') { state.courseDelivery = value; if (value === '线上课程') state.courseVenues = []; }
  render();
});
document.querySelector('[data-console-action="reset"]').addEventListener('click', resetDemoState);
function syncDesktopPreviewScale() {
  const availableHeight = Math.max(0, window.innerHeight - 32);
  const scale = Math.min(1, availableHeight / 812);
  document.documentElement.style.setProperty('--desktop-preview-scale', Math.max(.72, scale).toFixed(3));
  const workbenchWidth = 715;
  const mobileScale = Math.min(1, window.innerWidth / workbenchWidth, window.innerHeight / 812);
  document.documentElement.style.setProperty('--mobile-workbench-scale', Math.max(.35, mobileScale).toFixed(3));
}
window.addEventListener('resize', syncDesktopPreviewScale);
syncDesktopPreviewScale();
render();
