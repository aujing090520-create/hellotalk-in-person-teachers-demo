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

const state = { city: '深圳', mapCity: '深圳', rootPage: 'partner', myRoute: 'courses', myIdentity: 'teacher', studentCoursePage: false, studentInPersonSheet: false, studentInPersonTab: 'pending', studentCheckinCourseId: '', studentInPersonAttendance: {}, studentCompletedClasses: [], studentReviewCourseId: '', studentRating: 0, creatorPlacePage: false, vip: false, activeLanguage: '中文（简体）', sheet: false, cityMenu: false, sheetCityMenu: false, mapFilter: '全部', mapLanguage: '全部', activeVenue: null, mapTeacherId: null, profileId: null, profileRoute: 'profile', profileTab: 'archive', profileMore: false, profileVenueIndex: 0, profileScrollTop: 0, creatorScrollTop: 0, coursePicker: false, courseFilter: 'all', courseManageType: 'offline', creatorCourseState: '有课程', courseOrigin: 'profile', selectedCourse: 'conversation', selectedVenue: '', selectedDate: '今天', selectedSlot: '19:00', bookingConfirmed: false, introVideoPlaying: false, paymentSheet: false, paymentMethod: '支付宝', courseDelivery: '线下课程', courseDeliverySheet: false, courseFormat: 'offline', creatorCity: '深圳', creatorSheet: '', creatorVenueQuery: '', creatorVenueResults: [], creatorPlaceHistory: [], courseType: '1v1', editingCourseId: '', courseLifecycle: {}, courseTitle: '', courseTags: [], courseLanguage: '', courseDuration: '', courseSessions: '', courseDescription: '', coursePrice: '', courseSalesMode: 'none', coursePackSessions: '', coursePackPrice: '', courseFirstDiscount: '', courseVenues: [], courseAvailability: [], teachingInfoOrigin: 'courses', teacherProfile: { photos: ['sarah-lifestyle-0', 'sarah-lifestyle-1', 'sarah-lifestyle-2'], introVideo: { title: 'Sarah 的介绍视频', duration: '00:42', cover: 'assets/sarah-lifestyle-triptych.png' }, language: '中文', alsoSpeakList: ['English', '中文'], intro: '一对一面授中文课，地点和时间可协商。', types: ['FreeTalk', '实用口语', '旅行口语'], experience: '5 年中文教学经验，擅长会话与发音训练。', materials: 'PPT文件', certificate: 'Other', certificateImage: false, education: '暂不设置', email: 'teacher@example.com', phone: '138 0000 0000' }, followed: false, toast: '', consoleScenario: '', consoleMode: 'discovery', uiLanguage: 'zh' };
state.studentRatedCourses = {};
const initialDemoState = JSON.parse(JSON.stringify(state));
const app = document.querySelector('#app');

function openTeacherProfile(id) {
  const teacher = teachers.find((item) => item.id === id);
  if (!teacher) return;
  state.profileId = teacher.id;
  state.profileRoute = 'profile';
  state.profileTab = 'archive';
  state.profileVenueIndex = 0;
  state.profileMore = false;
  state.profilePhotoIndex = null;
  state.sheet = false;
  state.selectedCourse = 'conversation';
  state.selectedVenue = courseVenues(teacher)[0]?.venue || '';
  render();
}
// The nearby-teacher rail uses this dedicated direct entry. It deliberately does
// not share the generic action dispatcher used by cards, sheets and map markers.
window.openTeacherProfile = openTeacherProfile;

function resetDemoState() {
  Object.assign(state, JSON.parse(JSON.stringify(initialDemoState)));
  render();
}

const interfaceCopy = {
  en: { '搜索课程、地点或老师': 'Search courses, places or teachers', '搜索附近位置': 'Search nearby locations', '已选上课地点': 'Selected locations', '可选授课地点': 'Available class locations', '面授场所': 'Class locations', '面授地点': 'In-person locations', '面授老师': 'In-person Teachers', '附近地点': 'Nearby locations', '最近搜索': 'Recent searches', '我的课程': 'My Courses', '创建新课': 'Create Course', '课程标题': 'Course title', '课程标签': 'Course tags', '课程语言': 'Course language', '课程时长': 'Course duration', '课程次数': 'Sessions', '课程描述': 'Course description', '设定单价': 'Price per session', '授课方式': 'Delivery mode', '线下课程': 'In-person course', '线上课程': 'Online course', '可选上课地点': 'Available locations', '最多 3 处': 'Up to 3 locations', '搜索并选择地点': 'Search and select locations', '课程预约与支付': 'Book and pay', '支付方式': 'Payment method', '立即预约': 'Book now', '确认支付': 'Confirm payment', '选择地点': 'Select location', '查看地图': 'View map', '查看更多': 'See more', '更多': 'More', '找语伴': 'Find Partners', '附近': 'Nearby', '全部语言': 'All languages', '任意时间': 'Any time', '今天可约': 'Available today', '本周有课': 'Classes this week', '有课城市': 'Cities with classes', '暂无相关课程': 'No matching classes', '中文（简体）': 'Chinese', '英语': 'English', '日语': 'Japanese', '韩语': 'Korean', '中文': 'Chinese', '全部': 'All', '今天': 'Today', '周六': 'Saturday', '周日': 'Sunday', '课程介绍': 'Course overview', '上课时间': 'Class time', '上课次数': 'Sessions', '返回': 'Back', '关闭': 'Close', '提交创建': 'Submit', '预览课程': 'Preview' },
  ja: { '搜索课程、地点或老师': 'コース・場所・講師を検索', '搜索附近位置': '近くの場所を検索', '已选上课地点': '選択済みの場所', '可选授课地点': '選べる受講場所', '面授场所': '対面レッスンの場所', '面授地点': '対面レッスンの場所', '面授老师': '対面レッスン講師', '附近地点': '近くの場所', '最近搜索': '最近の検索', '我的课程': 'マイコース', '创建新课': '新しいコースを作成', '课程标题': 'コース名', '课程标签': 'コースタグ', '课程语言': 'レッスン言語', '课程时长': 'レッスン時間', '课程次数': '回数', '课程描述': 'コース紹介', '设定单价': '1回の料金', '授课方式': 'レッスン形式', '线下课程': '対面レッスン', '线上课程': 'オンラインレッスン', '可选上课地点': '選べる場所', '最多 3 处': '最大3か所', '搜索并选择地点': '場所を検索して選択', '课程预约与支付': '予約と支払い', '支付方式': '支払い方法', '立即预约': '今すぐ予約', '确认支付': '支払いを確認', '选择地点': '場所を選択', '查看地图': '地図を見る', '查看更多': 'もっと見る', '更多': 'もっと', '找语伴': '語学パートナー', '附近': '近く', '全部语言': 'すべての言語', '任意时间': 'いつでも', '今天可约': '今日予約可', '本周有课': '今週のレッスン', '有课城市': 'レッスンのある都市', '暂无相关课程': '該当するコースはありません', '中文（简体）': '中国語', '英语': '英語', '日语': '日本語', '韩语': '韓国語', '中文': '中国語', '全部': 'すべて', '今天': '今日', '周六': '土曜', '周日': '日曜', '课程介绍': 'コース紹介', '上课时间': 'レッスン時間', '上课次数': '回数', '返回': '戻る', '关闭': '閉じる', '提交创建': '作成して提出', '预览课程': 'プレビュー' }
};

// Interface chrome is intentionally separate from course, teacher and place data.
// These phrases cover labels embedded in dynamic strings such as “深圳面授课程”.
const interfacePhrases = {
  '认证面授老师': { en: 'Verified In-person Teacher', ja: '認定対面レッスン講師' },
  '面授老师': { en: 'In-person Teachers', ja: '対面レッスン講師' },
  '面授课程': { en: 'In-person Courses', ja: '対面レッスン' },
  '线下课程': { en: 'In-person Course', ja: '対面レッスン' },
  '个人档案': { en: 'Profile', ja: 'プロフィール' },
  '老师风采': { en: 'Teacher highlights', ja: '講師の魅力' },
  '教学类型': { en: 'Teaching focus', ja: '指導カテゴリー' },
  '老师自我介绍': { en: 'About the teacher', ja: '講師紹介' },
  '课程列表': { en: 'Course list', ja: 'コース一覧' },
  '课程详情': { en: 'Course details', ja: 'コース詳細' },
  '课程介绍': { en: 'Course overview', ja: 'コース紹介' },
  '可选上课地点': { en: 'Available locations', ja: '選べる受講場所' },
  '可选地点': { en: 'Available locations', ja: '選べる場所' },
  '上课地点': { en: 'Class location', ja: '受講場所' },
  '上课时间': { en: 'Class time', ja: 'レッスン時間' },
  '上课次数': { en: 'Sessions', ja: '回数' },
  '单节课程': { en: 'Single session', ja: '単発レッスン' },
  '首购专享': { en: 'First purchase', ja: '初回限定' },
  '首购立省': { en: 'First purchase saves', ja: '初回限定割引' },
  '首购每节省': { en: 'First-purchase savings per session', ja: '初回は1回あたり割引' },
  '每节省': { en: 'Save per session', ja: '1回あたりお得' },
  '课包优惠': { en: 'Package offer', ja: 'コースパック割引' },
  '服务条款': { en: 'Terms of service', ja: '利用規約' },
  '立即预约': { en: 'Book now', ja: '今すぐ予約' },
  '预约老师': { en: 'Book teacher', ja: '講師を予約' },
  '联系老师': { en: 'Contact teacher', ja: '講師に連絡' },
  '返回老师资料': { en: 'Back to teacher profile', ja: '講師プロフィールへ戻る' },
  '预约成功': { en: 'Booking confirmed', ja: '予約完了' },
  '支付方式': { en: 'Payment method', ja: '支払い方法' },
  '确认支付': { en: 'Confirm payment', ja: '支払いを確認' },
  '支付宝': { en: 'Alipay', ja: 'Alipay' },
  '微信': { en: 'WeChat Pay', ja: 'WeChat Pay' },
  '课程预约与支付': { en: 'Booking & payment', ja: '予約と支払い' },
  '查看老师时间': { en: 'View teacher availability', ja: '講師の空き時間を見る' },
  '创建新课': { en: 'Create course', ja: '新しいコースを作成' },
  '授课方式': { en: 'Delivery mode', ja: 'レッスン形式' },
  '课程语言': { en: 'Lesson language', ja: 'レッスン言語' },
  '课程时长': { en: 'Lesson length', ja: 'レッスン時間' },
  '课程次数': { en: 'Sessions', ja: '回数' },
  '课程描述': { en: 'Course description', ja: 'コース紹介' },
  '设定单价': { en: 'Price per session', ja: '1回の料金' },
  '提交创建': { en: 'Submit', ja: '作成して提出' },
  '预览课程': { en: 'Preview course', ja: 'コースをプレビュー' },
  '添加课程封面/预览视频': { en: 'Add course cover / preview video', ja: 'コースカバー／プレビュー動画を追加' },
  '推荐上传2分钟内横屏视频': { en: 'Recommended: landscape video under 2 minutes', ja: '推奨：2分以内の横長動画' },
  '选择要预约的课程': { en: 'Choose a course to book', ja: '予約するコースを選択' },
  '可预约面授课程': { en: 'bookable in-person courses', ja: '予約可能な対面レッスン' },
  '已为你保留课程名额': { en: 'Your course spot is reserved', ja: 'コース枠を確保しました' },
  '面授场所': { en: 'Class locations', ja: '対面レッスンの場所' },
  '搜索课程、地点或老师': { en: 'Search courses, places or teachers', ja: 'コース・場所・講師を検索' },
  '搜索附近位置': { en: 'Search nearby locations', ja: '近くの場所を検索' },
  '最近搜索': { en: 'Recent searches', ja: '最近の検索' },
  '附近地点': { en: 'Nearby places', ja: '近くの場所' },
  '找语伴': { en: 'Find Partners', ja: '語学パートナー' },
  '付费陪练': { en: 'Paid practice', ja: '有料レッスン' },
  '认真学习': { en: 'Study seriously', ja: 'しっかり学ぶ' },
  '性别': { en: 'Gender', ja: '性別' },
  '动态': { en: 'Moments', ja: 'モーメンツ' },
  '评价': { en: 'Reviews', ja: 'レビュー' },
  '兴趣爱好': { en: 'Interests', ja: '趣味' },
  '个人信息': { en: 'Personal info', ja: 'プロフィール情報' },
  '想去的地方': { en: 'Places to visit', ja: '行ってみたい場所' },
  '职业': { en: 'Occupation', ja: '職業' },
  '面授地点': { en: 'In-person locations', ja: '対面レッスンの場所' },
  '查看更多': { en: 'See more', ja: 'もっと見る' },
  '更多': { en: 'More', ja: 'もっと' },
  '全部语言': { en: 'All languages', ja: 'すべての言語' },
  '任意时间': { en: 'Any time', ja: 'いつでも' },
  '今天可约': { en: 'Available today', ja: '今日予約可' },
  '本周有课': { en: 'Classes this week', ja: '今週のレッスン' },
  '暂无相关课程': { en: 'No matching courses', ja: '該当するコースはありません' }
  , '西班牙语': { en: 'Spanish', ja: 'スペイン語' }
  , '城市': { en: 'City', ja: '都市' }
  , '语言课': { en: 'Language lesson', ja: '語学レッスン' }
  , '教学：': { en: 'Teaches: ', ja: '指導：' }
  , '上课(次)': { en: 'Lessons', ja: 'レッスン回数' }
  , '学生(个)': { en: 'Students', ja: '受講者数' }
  , '好评率': { en: 'Positive rating', ja: '高評価率' }
  , '关注': { en: 'Follow', ja: 'フォロー' }
  , '已关注': { en: 'Following', ja: 'フォロー中' }
  , '聊天': { en: 'Chat', ja: 'チャット' }
  , '分钟/节课': { en: 'min/session', ja: '分／回' }
  , 'min/节课': { en: 'min/session', ja: '分／回' }
  , '节课包': { en: '-session package', ja: '回パック' }
  , '合计¥': { en: 'Total ¥', ja: '合計¥' }
  , '今天 ': { en: 'Today ', ja: '今日 ' }
  , '本周日': { en: 'This Sunday', ja: '今週日曜' }
  , '周六 ': { en: 'Saturday ', ja: '土曜 ' }
  , '周日 ': { en: 'Sunday ', ja: '日曜 ' }
  , '时间管理': { en: 'Time management', ja: '時間管理' }
  , '授课管理': { en: 'Course management', ja: 'レッスン管理' }
  , '课时收入': { en: 'Lesson income', ja: 'レッスン収入' }
  , '近期待上': { en: 'Upcoming classes', ja: '近日開講' }
  , '暂无数据': { en: 'No data yet', ja: 'データがありません' }
  , '在售课程': { en: 'Courses for sale', ja: '販売中コース' }
  , '下架课程': { en: 'Unlisted courses', ja: '非公開コース' }
  , '下架': { en: 'Unlist', ja: '非公開にする' }
  , '编辑': { en: 'Edit', ja: '編集' }
  , '推广': { en: 'Promote', ja: '宣伝' }
  , '重新上架': { en: 'Relist', ja: '再公開' }
  , '完善教学信息': { en: 'Complete teaching profile', ja: '講師情報を完成' }
  , '视频介绍': { en: 'Video introduction', ja: '動画紹介' }
  , '重新上传': { en: 'Upload again', ja: '再アップロード' }
  , '教授语言': { en: 'Teaching languages', ja: '指導言語' }
  , '同时会说': { en: 'Also speaks', ja: '話せる言語' }
  , '个人介绍': { en: 'About me', ja: '自己紹介' }
  , '教学经验': { en: 'Teaching experience', ja: '指導経験' }
  , '教学资料': { en: 'Teaching materials', ja: '教材' }
  , '获得证书': { en: 'Certificates', ja: '取得資格' }
  , '证书图片': { en: 'Certificate image', ja: '資格証明書' }
  , '学历背景': { en: 'Education', ja: '学歴' }
  , '常用邮箱': { en: 'Email', ja: 'メールアドレス' }
  , '手机号': { en: 'Phone number', ja: '携帯電話番号' }
  , '确认提交': { en: 'Confirm submit', ja: '送信する' }
  , '批量关课': { en: 'Close classes in bulk', ja: '一括休講' }
  , '批量开课': { en: 'Open classes in bulk', ja: '一括開講' }
  , '全部打开': { en: 'Open all', ja: 'すべて開く' }
  , '保存时间表': { en: 'Save timetable', ja: '時間割を保存' }
  , '请选择': { en: 'Please select', ja: '選択してください' }
  , '暂不设置': { en: 'Not set now', ja: '今は設定しない' }
  , '点击查看视频': { en: 'Tap to watch video', ja: 'タップして動画を見る' }
  , '购买后立即观看': { en: 'Watch immediately after purchase', ja: '購入後すぐに視聴可能' }
  , '购买后立即观看，随时回看': { en: 'Watch immediately after purchase, anytime', ja: '購入後すぐに視聴でき、いつでも見返せます' }
  , '已解锁，点击播放课程': { en: 'Unlocked, tap to play', ja: '視聴可能です。タップして再生' }
  , '可直接观看视频': { en: 'Ready to watch', ja: 'すぐに動画を視聴できます' }
  , '视频时长': { en: 'Video duration', ja: '動画時間' }
  , '观看方式': { en: 'Viewing method', ja: '視聴方法' }
  , '课程视频已就绪': { en: 'Course video is ready', ja: 'コース動画の準備ができました' }
  , '点击下方按钮开始播放': { en: 'Tap the button below to start', ja: '下のボタンをタップして再生' }
  , '我的课程': { en: 'My courses', ja: 'マイコース' }
  , '课程分类': { en: 'Course category', ja: 'コース分類' }
  , '线下课': { en: 'In-person', ja: '対面レッスン' }
  , '在售课程': { en: 'Courses for sale', ja: '販売中コース' }
  , '下架课程': { en: 'Unlisted courses', ja: '非公開コース' }
  , '暂无线下课': { en: 'No in-person courses', ja: '対面レッスンはありません' }
  , '暂无下架线下课': { en: 'No unlisted in-person courses', ja: '非公開の対面レッスンはありません' }
  , '暂无课程，创建新课后将在此展示': { en: 'No courses yet. Create a course to show it here.', ja: 'コースはまだありません。新しいコースを作成するとここに表示されます。' }
  , '重新上架课程': { en: 'Relist course', ja: 'コースを再公開' }
  , '删除课程': { en: 'Delete course', ja: 'コースを削除' }
  , '保存': { en: 'Save', ja: '保存' }
  , '课程形式': { en: 'Course format', ja: 'コース形式' }
  , '选择课程形式': { en: 'Select course format', ja: 'コース形式を選択' }
  , '在可选地点与老师面对面上课': { en: 'Meet the teacher at a selected location', ja: '選択した場所で講師と対面受講' }
  , '老师上传视频，购买后立即观看': { en: 'Teacher-uploaded video, watch after purchase', ja: '講師が動画をアップロード。購入後すぐに視聴可能' }
  , '可选授课地点': { en: 'Available teaching locations', ja: '選べるレッスン場所' }
  , '每日可授课时段': { en: 'Available time slots', ja: '受講可能時間帯' }
  , '请选择可授课时段': { en: 'Select available time slots', ja: '受講可能時間帯を選択' }
  , '设置可授课时段': { en: 'Set available time slots', ja: '受講可能時間帯を設定' }
  , '暂未设置可授课时段': { en: 'No available time slots set', ja: '受講可能時間帯は未設定です' }
  , '每组可设置适用星期与时间范围；学员预约时仅展示匹配的可约时段。': { en: 'Set weekdays and time ranges for each slot. Learners only see matching times when booking.', ja: '各時間帯に曜日と時間範囲を設定できます。予約時は該当する時間帯のみ表示されます。' }
  , '添加时段': { en: 'Add time slot', ja: '時間帯を追加' }
  , '完成': { en: 'Done', ja: '完了' }
  , '选择售卖方案': { en: 'Select sales plan', ja: '販売プランを選択' }
  , '售卖方案': { en: 'Sales plan', ja: '販売プラン' }
  , '不设优惠': { en: 'No discount', ja: '割引なし' }
  , '按单节原价售卖': { en: 'Sell at the regular per-session price', ja: '通常の1回料金で販売' }
  , '首购优惠': { en: 'First-purchase offer', ja: '初回購入割引' }
  , '仅单节课首购享优惠价': { en: 'Discounted price for the first single-session purchase', ja: '単発レッスンの初回購入限定価格' }
  , '课包售卖': { en: 'Package sale', ja: 'パック販売' }
  , '按多节课设置打包最终售价': { en: 'Set one final price for multiple sessions', ja: '複数回の最終パック料金を設定' }
  , '设置课包售价': { en: 'Set package price', ja: 'パック料金を設定' }
  , '设置课包节数和最终总售价；原价按单节原价自动计算。': { en: 'Set sessions and final package price. The regular price is calculated from the per-session price.', ja: '回数と最終パック料金を設定します。通常価格は1回料金から自動計算されます。' }
  , '课包节数': { en: 'Package sessions', ja: 'パック回数' }
  , '课包最终售价': { en: 'Final package price', ja: 'パック最終料金' }
  , '设置首购售价': { en: 'Set first-purchase price', ja: '初回購入価格を設定' }
  , '仅适用于单节课首购；填写用户实际支付的最终售价。': { en: 'For first single-session purchases only. Enter the final amount paid by the learner.', ja: '単発レッスンの初回購入のみ対象です。ユーザーが支払う最終価格を入力します。' }
  , '首购最终售价': { en: 'First-purchase final price', ja: '初回購入の最終価格' }
  , '单节原价': { en: 'Regular price per session', ja: '1回の通常価格' }
  , '请输入': { en: 'Enter amount', ja: '入力してください' }
  , '有效课程单价': { en: 'Valid course price', ja: '有効なコース料金' }
  , '至少 1 个可选地点': { en: 'At least one available location', ja: '選べる場所を1つ以上設定' }
  , '至少 1 个可授课时段': { en: 'At least one available time slot', ja: '受講可能時間帯を1つ以上設定' }
  , '请设置首购最终售价': { en: 'Set the first-purchase final price', ja: '初回購入の最終価格を設定してください' }
  , '单节原价需高于首购实际售价，请重新设置': { en: 'The regular per-session price must be higher than the first-purchase price.', ja: '1回の通常価格は初回購入価格より高く設定してください。' }
  , '请设置课包节数和最终售价': { en: 'Set package sessions and final price', ja: 'パック回数と最終料金を設定してください' }
  , '单节原价需高于课包实际单节售价，请重新设置': { en: 'The regular per-session price must be higher than the package per-session price.', ja: '1回の通常価格はパックの1回あたり料金より高く設定してください。' }
  , '待购买': { en: 'Not purchased', ja: '未購入' }
  , '已购买': { en: 'Purchased', ja: '購入済み' }
  , '视频页': { en: 'Video page', ja: '動画ページ' }
  , '课程售价': { en: 'Course price', ja: 'コース料金' }
  , '购买状态': { en: 'Purchase status', ja: '購入状況' }
  , '当前页面': { en: 'Current page', ja: '現在の画面' }
  , '未购买': { en: 'Not purchased', ja: '未購入' }
  , '学习课堂': { en: 'Learning class', ja: '学習レッスン' }
  , '第 1 节': { en: 'Lesson 1', ja: '第1回' }
  , '发音训练 · Pronunciation': { en: 'Pronunciation training', ja: '発音トレーニング' }
  , '中文声调与口型': { en: 'Chinese tones and mouth shapes', ja: '中国語の声調と口の形' }
  , '跟随老师，听辨并模仿四个声调': { en: 'Follow the teacher to hear and imitate four tones', ja: '講師と一緒に四声を聞き分けてまねしましょう' }
  , '真人老师讲解': { en: 'Teacher instruction', ja: '講師による解説' }
  , '发音示范': { en: 'Pronunciation demo', ja: '発音デモ' }
  , '课后跟读': { en: 'Post-class repetition', ja: 'レッスン後の音読' }
  , '验证场景': { en: 'Test scenarios', ja: '検証シナリオ' }
  , '当前场景参数': { en: 'Current scenario parameters', ja: '現在のシナリオ設定' }
  , '界面语言': { en: 'Interface language', ja: '表示言語' }
  , '重置为默认场景': { en: 'Reset to default scenario', ja: '標準シナリオにリセット' }
  , '预期结果': { en: 'Expected result', ja: '期待する結果' }
  , '线下课程、时段与地点': { en: 'In-person courses, time slots and locations', ja: '対面コース・時間帯・場所' }
  , '我的课程': { en: 'My courses', ja: 'マイコース' }
  , '课程所在城市': { en: 'Course city', ja: 'コースの都市' }
  , '课程字段': { en: 'Course fields', ja: 'コース項目' }
  , '实际售价': { en: 'Actual sale price', ja: '実際の販売価格' }
  , '有课程': { en: 'Has courses', ja: 'コースあり' }
  , '暂无课程': { en: 'No courses', ja: 'コースなし' }
  , '待设置': { en: 'Not set', ja: '未設定' }
  , '未设置': { en: 'Not set', ja: '未設定' }
  , '可提交': { en: 'Ready to submit', ja: '送信可能' }
  , '待补': { en: 'Missing', ja: '未入力' }
  , '个时段': { en: ' time slots', ja: '件の時間帯' }
  , '搜索范围与筛选': { en: 'Search scope and filters', ja: '検索範囲とフィルター' }
  , '预约与支付': { en: 'Booking and payment', ja: '予約と支払い' }
  , '模块展示条件': { en: 'Module display conditions', ja: 'モジュール表示条件' }
};

function localizeDemoUI() {
  const copy = interfaceCopy[state.uiLanguage];
  document.documentElement.lang = state.uiLanguage === 'ja' ? 'ja' : state.uiLanguage === 'en' ? 'en' : 'zh-CN';
  if (!copy) return;
  const phrases = Object.entries(interfacePhrases)
    .map(([source, localized]) => [source, localized[state.uiLanguage]])
    .filter(([, localized]) => localized)
    .sort(([left], [right]) => right.length - left.length);
  const replace = (value) => {
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    const content = value.trim();
    if (Object.hasOwn(copy, content)) return `${leading}${copy[content]}${trailing}`;
    // Only replace multi-character interface phrases inside dynamic labels.
    // Names, venue names and course titles are intentionally left as authored data.
    let localized = content;
    phrases.forEach(([source, target]) => { localized = localized.replaceAll(source, target); });
    return localized === content ? value : `${leading}${localized}${trailing}`;
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

function localizeConsoleUI() {
  const copy = interfaceCopy[state.uiLanguage];
  const panel = document.querySelector('.qa-panel');
  if (!copy || !panel) return;
  const phrases = Object.entries(interfacePhrases)
    .map(([source, localized]) => [source, localized[state.uiLanguage]])
    .filter(([, localized]) => localized)
    .sort(([left], [right]) => right.length - left.length);
  const replace = (value) => {
    const leading = value.match(/^\s*/)?.[0] || '';
    const trailing = value.match(/\s*$/)?.[0] || '';
    const content = value.trim();
    if (Object.hasOwn(copy, content)) return `${leading}${copy[content]}${trailing}`;
    let localized = content;
    phrases.forEach(([source, target]) => { localized = localized.replaceAll(source, target); });
    return localized === content ? value : `${leading}${localized}${trailing}`;
  };
  const walker = document.createTreeWalker(panel, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { node.nodeValue = replace(node.nodeValue); });
  panel.querySelectorAll('[aria-label]').forEach((element) => {
    element.setAttribute('aria-label', replace(element.getAttribute('aria-label') || ''));
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
    'map-japanese': () => { state.consoleMode = 'map'; state.rootPage = 'partner'; state.sheet = true; state.mapCity = '深圳'; state.mapLanguage = '日语'; state.consoleScenario = '日语面授 · 跨城'; },
    'map-empty': () => { state.consoleMode = 'map'; state.rootPage = 'partner'; state.sheet = true; state.mapCity = '广州'; state.mapLanguage = '日语'; state.consoleScenario = '日语面授 · 当前城无结果'; },
    'teacher-map-focus': () => { state.consoleMode = 'teacher-map'; state.rootPage = 'partner'; state.city = '深圳'; state.mapCity = '深圳'; state.mapTeacherId = 'sarah'; state.activeVenue = '南山慢咖啡'; state.selectedVenue = '南山慢咖啡'; state.mapFilter = '今天可约'; state.mapLanguage = '日语'; state.sheet = true; state.consoleScenario = '老师聚焦地图'; },
    'teacher-payment': () => { state.consoleMode = 'booking'; state.profileId = 'sarah'; state.profileRoute = 'course-detail'; state.selectedCourse = 'conversation'; state.selectedVenue = '南山慢咖啡'; state.selectedDate = '今天'; state.selectedSlot = '19:00'; state.paymentMethod = '支付宝'; state.paymentSheet = true; state.consoleScenario = '课程预约与支付'; },
    'intro-video': () => { state.consoleMode = 'intro-video'; state.profileId = 'sarah'; state.profileRoute = 'intro-video'; state.courseOrigin = 'profile'; state.introVideoPlaying = true; state.consoleScenario = '老师介绍视频'; },
    'creator-offline': () => { state.consoleMode = 'creator'; state.rootPage = 'mine'; state.myRoute = 'create'; state.creatorCity = '深圳'; state.courseDelivery = '线下课程'; state.courseTitle = '一对一中文面授'; state.courseTags = ['日常会话', '发音纠正']; state.courseLanguage = '中文'; state.courseDuration = '50 分钟/节'; state.courseSessions = '2 节'; state.courseDescription = '适合想提升日常中文表达的学习者。'; state.coursePrice = '50'; state.courseSalesMode = 'pack'; state.coursePackSessions = '2'; state.coursePackPrice = '90'; state.courseFirstDiscount = ''; state.courseVenues = shenzhenPlaces; state.courseAvailability = ['周一至周五 14:00–18:00', '周六、周日 19:00–21:00']; state.consoleScenario = '完整线下课程'; },
    'creator-search': () => { state.consoleMode = 'creator'; state.rootPage = 'mine'; state.myRoute = 'create'; state.creatorPlacePage = true; state.creatorCity = '深圳'; state.courseDelivery = '线下课程'; state.creatorVenueQuery = '咖啡'; state.creatorVenueResults = [{ name: '南山慢咖啡', district: '南山区', address: '南山大道 88 号' }]; state.creatorPlaceHistory = [{ name: '南山慢咖啡', district: '南山区', address: '南山大道 88 号', city: '深圳' }, { name: '华侨城创意文化园', district: '南山区', address: '恩平街 1 号', city: '深圳' }]; state.consoleScenario = '地点搜索记录'; },
    'student-center': () => { state.consoleMode = 'student'; state.rootPage = 'mine'; state.myIdentity = 'student'; state.studentCoursePage = false; state.studentInPersonSheet = false; state.studentInPersonTab = 'pending'; state.studentCheckinCourseId = ''; state.studentReviewCourseId = ''; state.studentRating = 0; state.consoleScenario = '学生端 · 我的页面'; }
  };
  presets[scenario]?.();
  render();
}

function hasLiveOfflineCourse(teacher, city = state.city) {
  return teacherCourses(teacher, city).some((course) => course.format === 'offline' && course.live && course.venues.length > 0);
}

function eligibleTeachers(city = state.city) {
  return teachers.filter((teacher) => hasLiveOfflineCourse(teacher, city));
}

function showTeacherModule() { return eligibleTeachers().length > 3; }

function teacherModuleTitle() {
  if (state.uiLanguage === 'en') return `${state.city} ${interfaceCopy.en['面授老师']}`;
  if (state.uiLanguage === 'ja') return `${state.city}の${interfaceCopy.ja['面授老师']}`;
  return `${state.city}面授老师`;
}

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
  return `<button type="button" class="avatar ${size} photo-${person.photo} ${teacher ? 'teacher-avatar' : ''}" data-action="${teacher ? 'profile' : 'noop'}" data-id="${person.id || ''}" aria-label="${teacher ? `查看${person.name}的资料` : person.name}">${teacher ? `<i class="flag">${flag(person.country)}</i><b class="teacher-verify">✓</b>` : ''}</button>`;
}

function teacherRailItem(teacher) {
  const labels = { sarah: '中文', david: '英语', yuki: '日语', minji: '韩语', lucas: '西班牙语' };
  return `<button type="button" class="teacher-rail-item" data-action="profile" data-id="${teacher.id}" aria-label="查看${teacher.name}的资料"><span class="avatar small teacher-rail-avatar photo-${teacher.photo}"><i class="flag">${flag(teacher.country)}</i><i class="teacher-cap" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5z"></path><path d="M6.5 11.6v4.1c2.8 2.4 8.2 2.4 11 0v-4.1"></path><path d="M21.5 9.5v6"></path></svg></i><b class="teacher-location" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s6-5.6 6-11a6 6 0 0 0-12 0c0 5.4 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.1"></circle></svg></b></span><b>${teacher.name}</b><small>${labels[teacher.id] || '语言课'}</small></button>`;
}

function renderTeacherModule() {
  if (!showTeacherModule()) return '';
  const visible = eligibleTeachers();
  const title = teacherModuleTitle();
  return `<section class="teacher-module" aria-label="${title}">
    <div class="module-head"><strong>${title}</strong><button data-action="open-sheet" class="more">更多 <span>›</span></button></div>
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
  return `<div class="screen moments-home"><div class="moments-island" aria-hidden="true"></div>${systemStatus('moments-status')}<nav class="moments-top moments-native-toolbar"><button class="moments-rank" aria-label="榜单">${momentsIcon('rank')}</button><button class="moments-target" aria-label="目标">${momentsIcon('target')}</button><label class="moments-search">${momentsIcon('search')}<span>绕口令挑战</span></label><button class="moments-bell" aria-label="通知">${momentsIcon('bell')}<b>3</b></button><button class="moments-write" aria-label="发布动态">${momentsIcon('write')}</button></nav><nav class="moments-tabs"><button>最新</button><button>推荐</button><button>互助</button><button>自拍⌄</button><button class="selected">♛ 附近</button><button>关注<i></i></button><button class="moments-filter" aria-label="筛选">${momentsIcon('filter')}</button></nav><main class="moments-scroll"><article class="moment-post"><header class="moment-head"><span class="moment-avatar photo-${teacher.photo}"><i>${flag(teacher.country)}</i></span><div><h1>${teacher.name}<mark>✓</mark><em>认证面授老师</em></h1><p>CN　⇄　JP　EN</p></div><button class="moment-more" aria-label="更多">•••</button><time>刚刚</time></header><p class="moment-copy">这周在深圳开设一对一中文面授课。<br />想更自然地开口说中文，欢迎来一起练习。</p><button class="shared-course-card" data-action="open-post-course" aria-label="查看${course.title}"><img src="${course.cover}" alt="${course.title}" /><div><b>${course.title}</b><p><span>${courseIcon('mic')}${course.language}</span><span>${courseIcon('book')}${course.sessions} 节课</span></p><p><span>${courseIcon('clock')}${course.duration}</span></p><strong>${courseOfferText(course)}${course.firstDiscount ? ` · 首购减¥${course.firstDiscount}` : ''}</strong></div><i>›</i></button><div class="shared-course-locations"><span>⌖ 可选地点：${course.venues.map((venue) => venue.venue).join('、')}</span></div><footer class="moment-foot"><span>⌖ 深圳市，南山区</span><div><button>♡ 12</button><button>◯ 3</button><button>↗</button></div></footer></article></main>${renderBottomTab('moments')}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderBottomTab(active = 'partner') {
  const items = [{ tab: 'HelloTalk', icon: 'tab_chat_active.png', key: 'chat' }, { tab: '找语伴', icon: active === 'partner' ? 'tab_partner_active.png' : 'tab_partner.png', key: 'partner' }, { tab: '动态', icon: 'tab_moment.png', key: 'moments' }, { tab: '语聊 / 直播', icon: 'tab_live.png', key: 'live' }, { tab: '我', icon: 'tab_mine.png', key: 'mine' }];
  const native = active === 'moments' ? 'moments-native-tabbar' : active === 'mine' ? 'student-native-tabbar' : 'partner-native-tabbar';
  const reference = active === 'moments' ? 'ht-native-moments-tabbar.jpg' : active === 'partner' ? 'ht-bottom-tab-partner-active.png' : '';
  return `<nav class="bottom-tab ${native}" aria-label="主导航">${reference ? `<img class="bottom-native-reference" src="assets/${reference}" alt="" />` : ''}${items.map((item) => `<button class="bottom-item ${active === item.key ? 'selected' : ''}" data-action="tab-root" data-tab="${item.tab}">${active === 'moments' && item.key === 'moments' ? bottomMomentActiveIcon() : `<img src="assets/${item.icon}" alt="" />`}<small>${item.tab}</small></button>`).join('')}</nav>`;
}

function renderCityMenu(inSheet) { return `<div class="city-menu ${inSheet ? 'sheet-city-menu' : ''}">${['深圳', '上海', '东京', '广州'].map((city) => `<button data-action="select-city" data-city="${city}"><span>${city}</span>${city === state.mapCity ? '✓' : ''}</button>`).join('')}</div>`; }

function normalizeSearch(value) {
  return String(value || '').toLocaleLowerCase().replace(/[\s·・,，、/\\-]/g, '');
}

function venueRows(city = state.city) {
  const focusedTeacher = teachers.find((teacher) => teacher.id === state.mapTeacherId);
  const todayOnly = state.mapFilter === '今天可约';
  const weekOnly = state.mapFilter === '本周有课';
  const scopedTeachers = focusedTeacher ? [focusedTeacher] : eligibleTeachers(city);
  return scopedTeachers.flatMap((teacher) => {
    const courses = teacherCourses(teacher, city).filter((course) => course.format === 'offline' && course.live);
    return courses.flatMap((course) => course.venues.map((venue) => ({ ...venue, teacher, course, sessionTime: course.id === 'weekend' ? course.schedule : venue.slots })));
  }).filter((item) => {
    if (focusedTeacher) return true;
    const timingOk = state.mapFilter === '全部' || (todayOnly && item.sessionTime.includes('今天')) || (weekOnly && !item.sessionTime.includes('今天'));
    const languageOk = state.mapLanguage === '全部' || item.course.language === state.mapLanguage;
    return timingOk && languageOk;
  });
}

function citySearchCounts() {
  if (state.mapTeacherId) return [];
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
  return `<div class="static-map-tiles static-map-fallback" data-city="${city}" aria-hidden="true"></div>`;
}

function renderVenueMapTiles(venue, city = state.city) {
  return `<div class="static-map-tiles static-map-fallback profile-venue-tiles" data-city="${city}" data-venue="${venue}" aria-hidden="true"></div>`;
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
  return `<div class="venue-list">${venues.map((item) => `<button data-action="select-venue" data-venue="${item.venue}" class="venue-card ${item.venue === active ? 'selected' : ''}"><span class="venue-dot"></span><div><strong>${item.course.title}</strong><b>${item.venue}</b><small>${state.mapTeacherId ? item.sessionTime : `${item.teacher.name} · ${item.sessionTime}`}</small></div><em>${courseOfferText(item.course)}</em></button>`).join('') || '<div class="empty">没有符合条件的课程</div>'}</div>`;
}

function renderGlobalCourseList(venues, active) {
  const grouped = [...new Map(venues.map((item) => [`${item.teacher.id}:${item.course.id}`, { teacher: item.teacher, course: item.course, venues: venues.filter((row) => row.teacher.id === item.teacher.id && row.course.id === item.course.id) }])).values()];
  const orderedGroups = active ? [...grouped].sort((a, b) => Number(b.venues.some((venue) => venue.venue === active)) - Number(a.venues.some((venue) => venue.venue === active))) : grouped;
  return `<div class="course-map-list global-course-list">${orderedGroups.map(({ teacher, course, venues: courseVenues }) => `<article class="map-course-card ${courseVenues.some((venue) => venue.venue === active) ? 'selected' : ''}"><div class="map-course-head"><div><strong>${course.title}</strong><small class="course-teacher-meta"><button class="course-teacher-avatar photo-${teacher.photo}" data-action="profile" data-id="${teacher.id}" aria-label="查看${teacher.name}的资料"></button><span>${teacher.name} · ${course.duration}</span></small></div><em>${courseOfferText(course)}</em></div><div class="map-course-venues">${courseVenues.map((venue) => `<button data-action="select-global-course-venue" data-course="${course.id}" data-venue="${venue.venue}" class="${venue.venue === active ? 'selected' : ''}"><b>${venue.venue}</b><small>${venue.sessionTime}</small></button>`).join('')}</div></article>`).join('') || '<div class="empty">没有符合条件的课程</div>'}</div>`;
}

function renderTeacherCourseList(teacher, venues, active) {
  const courses = [...new Map(venues.map((item) => [item.course.id, { course: item.course, venues: venues.filter((row) => row.course.id === item.course.id) }])).values()];
  return `<div class="teacher-course-list"><p>课程与可选上课地点</p>${courses.map(({ course, venues: courseVenues }) => `<article class="teacher-course-card ${course.id === state.selectedCourse ? 'selected' : ''}"><button class="teacher-course-head" data-action="open-course-from-map" data-course="${course.id}"><div><strong>${course.title}</strong><small>${course.sessions} 节课 · ${course.duration}</small></div><em>${courseOfferText(course)}</em><span>›</span></button><div class="teacher-course-venues">${courseVenues.map((venue) => `<button data-action="select-teacher-course-venue" data-course="${course.id}" data-venue="${venue.venue}" class="${course.id === state.selectedCourse && venue.venue === active ? 'selected' : ''}"><b>${venue.venue}</b><small>${course.id === 'weekend' ? course.schedule : venue.slots}</small></button>`).join('')}</div></article>`).join('')}</div>`;
}

function renderMapStage(venues, active, focusedTeacher) {
  if (!venues.length && !focusedTeacher) {
    const suggestions = citySearchCounts();
    return `<div class="map-empty-city"><strong>${state.mapCity}暂无相关课程</strong><p>试试其他有课城市</p><div>${suggestions.map(({ city, count }) => `<button data-action="select-search-city" data-city="${city}">${city} <b>${count}</b></button>`).join('')}</div></div>`;
  }
  return `<div class="real-map" aria-label="${state.mapCity}面授场所概览">${renderStaticMapTiles(state.mapCity)}<div class="map-marker-layer" data-map-markers>${renderMapMarkers(mapLocations(venues), active)}</div><small class="map-attribution">© OpenStreetMap contributors</small></div><div data-map-results>${focusedTeacher ? renderTeacherCourseList(focusedTeacher, venues, active) : renderGlobalCourseList(venues, active)}</div>`;
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
  const globalControls = `<div class="map-filters"><div class="map-filter-row">${['全部', '今天可约', '本周有课'].map((filter) => `<button data-action="map-filter" data-filter="${filter}" class="${filter === state.mapFilter ? 'selected' : ''}">${filter === '全部' ? '任意时间' : filter}</button>`).join('')}</div><div class="map-filter-row language-filter-row">${['全部', '中文', '英语', '日语', '韩语'].map((language) => `<button data-action="map-language" data-language="${language}" class="${language === state.mapLanguage ? 'selected' : ''}">${language === '全部' ? '全部语言' : language}</button>`).join('')}</div></div>`;
  return `<div class="sheet-layer"><button class="scrim" data-action="close-sheet" aria-label="关闭地图抽屉"></button><section class="map-sheet ${focusedTeacher ? 'focused-teacher' : ''}" aria-label="面授场所地图"><div class="sheet-handle"></div><div class="sheet-title"><strong>${focusedTeacher ? `${focusedTeacher.name} 在${state.mapCity}的面授课程` : '面授场所'}</strong>${focusedTeacher ? '' : `<button data-action="sheet-city-menu" class="city-switch">${state.mapCity}⌄</button>`}<button data-action="close-sheet" class="close">×</button></div>${!focusedTeacher && state.sheetCityMenu ? renderCityMenu(true) : ''}
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
  const primary = { ...profileCourse(teacher, venues[0]), format: 'offline' };
  const courses = [
    { id: 'conversation', ...primary, sessions: 1, firstDiscount: 10, venues, availability: ['周一至周五 14:00–18:00', '周六、周日 10:00–12:00'], description: `在真实场景中练习 ${primary.language}，适合希望开口交流的学习者。`, times: '1 次', schedule: '周一至周五 14:00–18:00', cover: 'assets/course-cover-reference.png' },
    { id: 'weekend', ...primary, venues: weekendVenues, title: `${primary.language} 周末面授会话课`, sessions: 2, duration: '60 min/节课', pack: { sessions: 2, price: primary.price * 2 - 10 }, availability: ['周六、周日 10:00–12:00'], description: `围绕日常话题展开面授会话练习。`, times: '2 次', schedule: '周六、周日 10:00–12:00', cover: 'assets/course-cover-reference.png' }
  ];
  const offlineCourses = teacher.cityCourseCount?.[city] === 1 ? courses.slice(0, 1) : courses.slice(0, 2);
  return offlineCourses
    .filter((course) => state.courseLifecycle[course.id] !== 'deleted')
    .map((course) => ({ ...course, status: state.courseLifecycle[course.id] || 'live', live: state.courseLifecycle[course.id] !== 'offline' }));
}

function resetCourseDraft() {
  state.editingCourseId = '';
  state.courseDelivery = '线下课程';
  state.courseFormat = 'offline';
  state.courseTitle = '';
  state.courseTags = [];
  state.courseLanguage = '';
  state.courseDuration = '';
  state.courseSessions = '';
  state.courseDescription = '';
  state.coursePrice = '';
  state.courseSalesMode = 'none';
  state.coursePackSessions = '';
  state.coursePackPrice = '';
  state.courseFirstDiscount = '';
  state.courseVenues = [];
  state.courseAvailability = [];
}

function openCourseEditor(courseId, fallbackTitle = '') {
  const teacher = teachers.find((teacherItem) => teacherItem.id === 'sarah');
  const course = teacherCourses(teacher).find((item) => item.id === courseId)
    || creatorCourses.find((item) => item.title === fallbackTitle);
  if (!course) return;
  const pricing = coursePricing(course);
  const sourceVenues = course.venues || [];
  state.editingCourseId = course.id || course.title;
  state.courseFormat = 'offline';
  state.courseDelivery = '线下课程';
  state.courseTitle = course.title;
  state.courseTags = ['日常会话'];
  state.courseLanguage = course.language || '中文';
  state.courseDuration = course.duration || '60 min/节课';
  state.courseSessions = `${pricing.sessions} 次`;
  state.courseDescription = course.description || '适合希望提升中文表达能力的学习者。';
  state.coursePrice = String(course.price || 0);
  state.courseSalesMode = pricing.sessions > 1 ? 'pack' : pricing.firstDiscount ? 'first' : 'none';
  state.coursePackSessions = pricing.sessions > 1 ? String(pricing.sessions) : '';
  state.coursePackPrice = pricing.sessions > 1 ? String(pricing.finalTotal) : '';
  state.courseFirstDiscount = pricing.firstDiscount ? String(pricing.finalTotal) : '';
  state.courseVenues = sourceVenues.map((venue) => ({ name: venue.venue || venue.name, area: venue.area || '', city: state.creatorCity }));
  state.courseAvailability = ['周一至周五 14:00–18:00', '周六、周日 10:00–12:00'];
  state.creatorScrollTop = 0;
  state.myRoute = 'create';
}

function selectedCourse() { return teacherCourses(teacherForProfile()).find((item) => item.id === state.selectedCourse) || teacherCourses(teacherForProfile())[0]; }

function coursePricing(course) {
  const sessions = Number(course?.pack?.sessions) || Number(course?.sessions) || 1;
  const regularTotal = (Number(course?.price) || 0) * sessions;
  const packTotal = Number(course?.pack?.price) || regularTotal;
  const firstDiscount = sessions === 1 ? Math.min(Math.max(Number(course?.firstDiscount) || 0, 0), packTotal) : 0;
  const finalTotal = packTotal - firstDiscount;
  return { sessions, regularTotal, packTotal, firstDiscount, finalTotal, unitPrice: finalTotal / sessions };
}

function courseOfferText(course) {
  const pricing = coursePricing(course);
  return pricing.sessions > 1 ? `${pricing.sessions} 节课包 ¥${pricing.finalTotal}` : `¥${pricing.finalTotal}/节课`;
}

function courseVenueLabel(course) {
  const venues = course.venues || [];
  if (!venues.length) return '暂未设置上课地点';
  return venues.length > 1 ? `${venues[0].venue}等 ${venues.length} 处` : venues[0].venue;
}

function renderCoursePrice(course) {
  const pricing = coursePricing(course);
  const isPackage = pricing.sessions > 1;
  const unitPrice = Number.isInteger(pricing.unitPrice) ? pricing.unitPrice : pricing.unitPrice.toFixed(1);
  const regularUnitPrice = Number.isInteger(pricing.regularTotal / pricing.sessions) ? pricing.regularTotal / pricing.sessions : (pricing.regularTotal / pricing.sessions).toFixed(1);
  if (isPackage) return `<div class="course-package-price course-package-price--bundle"><div class="course-bundle-offer"><i>${pricing.sessions} 节课包</i><span>每节省¥${Math.round((pricing.regularTotal - pricing.finalTotal) / pricing.sessions)}</span></div><div class="course-bundle-price"><b>¥${unitPrice}/节</b><del>¥${regularUnitPrice}/节</del><em>合计¥${pricing.finalTotal}</em></div></div>`;
  return `<div class="course-package-price"><b>¥${pricing.finalTotal}/节</b>${pricing.firstDiscount ? `<del>¥${pricing.packTotal}/节</del><i class="first-purchase-badge">首购专享</i>` : ''}</div>`;
}

function renderTeacherTrustStats() {
  return `<section class="teacher-trust-stats" aria-label="老师教学数据"><div><strong>257</strong><small>上课(次)</small></div><div><strong>28</strong><small>学生(个)</small></div><div><strong>96%</strong><small>好评率</small></div></section>`;
}

function teacherLifestylePhotoClass(teacher, index) {
  return teacher.id === 'sarah' ? `teacher-lifestyle-photo ${state.teacherProfile.photos[index]}` : `photo-${teacher.photo} portrait-shot-${index}`;
}

function renderTeacherMediaShowcase(teacher) {
  const labels = ['日常照片', '备课时刻', '课堂留影'];
  const video = teacher.id === 'sarah' ? state.teacherProfile.introVideo : { title: `${teacher.name} 的介绍视频`, duration: '00:42', cover: 'assets/sarah-lifestyle-triptych.png' };
  return `<section class="teacher-portrait-showcase teacher-media-showcase" aria-label="${teacher.name}的老师风采"><h3>老师风采</h3><div class="teacher-showcase-grid"><button class="teacher-showcase-photo teacher-showcase-video" data-action="play-intro-video" aria-label="播放${video.title}"><img src="${video.cover}" alt="${teacher.name}上传的介绍视频封面" /><i>▶</i><small>${video.duration}</small></button>${labels.map((label, index) => `<button class="teacher-showcase-photo" data-action="open-profile-photo" data-photo-index="${index}" aria-label="查看${teacher.name}的${label}"><span class="teacher-showcase-image ${teacherLifestylePhotoClass(teacher, index)}"></span></button>`).join('')}</div></section>`;
}

function renderProfilePhotoViewer(teacher) {
  if (state.profilePhotoIndex === null) return '';
  const index = Math.max(0, Math.min(Number(state.profilePhotoIndex) || 0, 2));
  const labels = ['日常照片', '备课时刻', '课堂留影'];
  return `<div class="profile-photo-viewer" role="dialog" aria-modal="true" aria-label="${teacher.name}的${labels[index]}"><button class="profile-photo-scrim" data-action="close-profile-photo" aria-label="关闭大图"></button><section class="profile-photo-stage"><button class="profile-photo-close" data-action="close-profile-photo" aria-label="关闭">×</button><div class="profile-photo-large ${teacherLifestylePhotoClass(teacher, index)}" role="img" aria-label="${teacher.name}的${labels[index]}"></div><p>${teacher.name} · ${labels[index]} <span>${index + 1}/3</span></p></section></div>`;
}

function renderProfileCoursePicker(teacher) {
  if (!state.coursePicker) return '';
  const courses = teacherCourses(teacher);
  return `<div class="profile-course-picker" role="dialog" aria-modal="true" aria-label="选择预约课程"><button class="profile-course-picker-scrim" data-action="close-profile-course-picker" aria-label="关闭"></button><section class="profile-course-picker-panel"><i class="profile-course-picker-handle" aria-hidden="true"></i><header><strong>选择要预约的课程</strong><button data-action="close-profile-course-picker" aria-label="关闭">×</button></header><p>${teacher.name} 有 ${courses.length} 门可预约面授课程</p><div class="profile-course-picker-list">${courses.map((course) => `<article class="profile-course-picker-item"><button class="profile-course-picker-summary" data-action="select-profile-course" data-course="${course.id}"><img src="${course.cover}" alt="" /><span><b>${course.title}</b><small>${course.language} · ${course.sessions} 节课 · ${course.duration}</small><em>${courseOfferText(course)}${course.firstDiscount ? ` · 首购减¥${course.firstDiscount}` : ''}</em></span></button><button class="course-booking-cta" data-action="select-profile-course" data-course="${course.id}">预约课时</button></article>`).join('')}</div></section></div>`;
}

function renderTeacherOverview(teacher) {
  const profile = teacher.id === 'sarah' ? state.teacherProfile : { types: ['FreeTalk', '实用口语', '旅行口语'], intro: `你好，我是 ${teacher.name}。在深圳开设一对一中文面授课，擅长把日常场景、旅行和工作沟通带入练习。我们可以先从你的学习目标聊起，再一起约定方便的上课地点。` };
  return `<section class="teacher-profile-overview"><section class="teacher-types"><h3>教学类型</h3><div>${profile.types.map((type) => `<span>${type}</span>`).join('')}</div></section><section class="teacher-self-intro"><h3>老师自我介绍</h3><p>${profile.intro}</p></section>${renderTeacherMediaShowcase(teacher)}</section>`;
}

function renderTeacherArchive() {
  const tags = (items) => items.map((item) => `<button data-action="tag">${item}</button>`).join('');
  return `<section class="profile-tab-panel teacher-archive" aria-label="个人档案"><section class="profile-stats teacher-learning-stats"><div><b>▣ 加入 1557 天</b><span>▱ 2281 学习点数</span></div><hr /><div class="study-icons"><span>文A<small>1511</small></span><span>▱<small>113</small></span><span>Abc⌄<small>243</small></span><span>♟A<small>398</small></span><span>◖))<small>4</small></span><span>⟳<small>12</small></span></div></section><section class="archive-panel"><h3>兴趣爱好</h3><div class="interest-tags">${tags(['dance', 'music', 'food', 'sports', 'reading', 'painting', 'movie', 'languages'])}</div><h3>个人信息</h3><div class="archive-info-grid"><div><b>ENTJ</b><small>MBTI</small></div><div><b>♑</b><small>摩羯座</small></div><div><b>AB</b><small>血型</small></div></div><h3>想去的地方</h3><div class="interest-tags">${tags(['New Zealand', 'France', 'U.S.', 'U.K.', 'Pakistan', 'Netherlands'])}</div><h3>职业</h3><div class="interest-tags"><button data-action="tag">language teacher</button></div></section></section>`;
}

function renderProfileTab(teacher) {
  if (state.profileTab === 'moments') return `<section class="profile-tab-panel"><article class="moment-card"><div class="moment-author"><div class="mini-avatar photo-${teacher.photo}"></div><div><b>${teacher.name}</b><small>刚刚</small></div></div><p>本周在 ${state.city} 的面授课程开放预约，期待和大家见面。</p><button data-action="open-post">查看动态 <span>›</span></button></article></section>`;
  if (state.profileTab === 'reviews') return `<section class="profile-tab-panel teacher-reviews"><div class="review-summary"><b>学生评价（5）</b><span>好评率 100%</span></div><article><div class="review-head"><div class="mini-avatar photo-p3"></div><b>キノコ</b><span>★★★★★</span></div><p>Sarah 老师很亲切，面授时会根据我的进度调整练习，课程讲解也很清楚。</p><small>2026-08-18</small></article></section>`;
  return renderTeacherArchive();
}

function renderProfileMore() {
  const options = ['添加备注', '分享', '不看他的动态', '屏蔽', '举报'];
  return `<div class="profile-more-layer"><button class="scrim" data-action="close-profile-more" aria-label="关闭更多操作"></button><section class="profile-more-sheet">${options.map((option) => `<button data-action="profile-more-action" data-label="${option}">${option}</button>`).join('')}<button class="profile-more-cancel" data-action="close-profile-more">取消</button></section></div>`;
}

function renderCourseVenueBlock(teacher) {
  const venues = courseVenues(teacher);
  const venue = currentVenue(teacher);
  const venueLabel = venues.length > 1 ? `${venue.venue}等 ${venues.length} 处` : venue.venue;
  return `<div class="course-venue-inline"><button data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}" aria-label="查看${venueLabel}的上课地点"><i class="venue-pin" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg></i><span>${venueLabel}</span><b aria-hidden="true">›</b></button></div>`;
}

function renderCourseVenueSection(teacher, venue) {
  const venues = courseVenues(teacher);
  return `<section class="course-venue-section"><div class="course-venue-section-head"><b>可选上课地点</b><button data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}">查看地图 ›</button></div><div class="course-venue-chips">${venues.map((item) => `<button data-action="select-course-venue" data-venue="${item.venue}" class="${item.venue === venue.venue ? 'selected' : ''}">${item.venue}<small>${item.area}</small></button>`).join('')}</div></section>`;
}

function renderProfileVenueHero(teacher) {
  const venue = currentVenue(teacher);
  return `<section class="profile-map-hero profile-teacher-hero" aria-label="${teacher.name}的认证面授老师资料">
    ${systemStatus('profile-map-status')}
    <button class="map-nav-back" data-action="back-profile" aria-label="返回">‹</button>
    <button class="map-nav-more" data-action="open-profile-more" aria-label="更多操作">•••</button>
    <button type="button" class="profile-teacher-city" data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}" aria-label="查看${state.city}可面授地点"><span class="profile-teacher-city-icon" aria-hidden="true">⌖</span><b>${state.city}</b><small>可面授</small><i aria-hidden="true">›</i></button>
    <div class="profile-academic-ribbon" aria-hidden="true"><svg viewBox="0 0 360 34" preserveAspectRatio="none"><path class="ribbon-fill" d="M0 0H360V13C289 11 247 23 180 31 113 23 71 11 0 13Z"/><path class="ribbon-gold" d="M0 4H360"/><path class="ribbon-line" d="M0 13c71-2 113 10 180 18 67-8 109-20 180-18"/><path class="ribbon-laurel" d="M153 14c8 0 14 3 20 8m34-8c-8 0-14 3-20 8"/></svg></div>
  </section>`;
}

function renderProfileVenueDetail(teacher) {
  const venues = courseVenues(teacher);
  const total = venues.length;
  const index = total ? Math.min(state.profileVenueIndex, total - 1) : 0;
  const venue = venues[index] || { venue: '暂未设置上课地点', area: '', slots: '' };
  return `<div class="profile-venue-detail"><button class="profile-venue-anchor" data-action="profile-venue-next" aria-label="切换上课地点，当前为${venue.venue}，共${total}处"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg><span class="profile-venue-copy"><strong>${venue.venue}</strong><small>${venue.slots} 可约</small></span><span class="profile-venue-switch" aria-hidden="true"><b>›</b></span></button></div>`;
}

function renderProfile() {
  const teacher = teacherForProfile();
  const offlineCourses = teacherCourses(teacher);
  const selectedOfflineCourse = offlineCourses.find((item) => item.id === state.selectedCourse);
  const course = selectedOfflineCourse || offlineCourses[Math.min(state.profileVenueIndex, offlineCourses.length - 1)] || offlineCourses[0];
  const pricing = coursePricing(course);
  const isPackage = pricing.sessions > 1;
  return `<div class="screen ht-profile map-profile"><main class="profile-scroll">${renderProfileVenueHero(teacher)}
    <section class="map-profile-summary"><div class="map-profile-avatar teacher-profile-avatar photo-${teacher.photo}"><i class="flag">${flag(teacher.country)}</i><i class="teacher-cap" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m2.5 9.5 9.5-5 9.5 5-9.5 5z"></path><path d="M6.5 11.6v4.1c2.8 2.4 8.2 2.4 11 0v-4.1"></path><path d="M21.5 9.5v6"></path></svg></i><b class="teacher-location" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s6-5.6 6-11a6 6 0 0 0-12 0c0 5.4 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.1"></circle></svg></b></div><div class="map-profile-name"><h1>${teacher.name} <span>♀24</span></h1><div class="map-profile-meta"><p class="map-profile-teaching">教学：${teacher.id === 'sarah' ? state.teacherProfile.language : '中文'}</p><p class="map-profile-teacher"><i>✦</i>认证面授老师</p></div></div>${renderTeacherTrustStats()}<i class="teacher-companion-watermark" aria-hidden="true"></i></section>${renderTeacherOverview(teacher)}
    ${renderTeacherMediaShowcase(teacher)}
    <section class="course-section inserted-course"><div class="course-section-head"><h2>${state.city}面授课程</h2><button data-action="open-course-list">查看更多 <span>›</span></button></div><div class="profile-course-carousel ${state.courseSlideDirection ? `slide-${state.courseSlideDirection}` : ''}"><article class="course-card offline-map-card"><button class="course-card-summary ${isPackage ? '' : 'course-card-summary--single'}" data-action="open-course-detail" data-course="${course.id}" aria-label="查看${course.title}"><div class="course-card-title"><strong>${course.title}</strong><span class="in-person-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg>线下课程</span></div><div class="course-card-body"><img src="${course.cover}" alt="${course.title}课程封面" /><div class="course-meta">${isPackage ? `<p class="course-meta-line"><span>${courseIcon('mic')}${course.language}</span><em>${courseIcon('clock')}${course.duration}</em></p>` : `<p class="course-meta-line"><span>${courseIcon('mic')}${course.language}</span></p><p class="course-meta-line"><em>${courseIcon('clock')}${course.duration}</em></p>`}${renderCoursePrice(course)}</div></div></button>${renderCourseVenueBlock(teacher)}</article></div><div class="course-pagination" aria-label="切换其他课程">${offlineCourses.map((item, index) => `<button type="button" class="${item.id === course.id ? 'active' : ''}" data-action="select-profile-course-page" data-course="${item.id}" aria-label="切换到第 ${index + 1} 门课程"></button>`).join('')}</div></section>
    <nav class="profile-tabs"><button data-action="profile-tab" data-tab="archive" class="${state.profileTab === 'archive' ? 'selected' : ''}">个人档案</button><button data-action="profile-tab" data-tab="moments" class="${state.profileTab === 'moments' ? 'selected' : ''}">动态 63</button><button data-action="profile-tab" data-tab="reviews" class="${state.profileTab === 'reviews' ? 'selected' : ''}">评价</button></nav>${renderProfileTab(teacher)}</main>
    <div class="profile-actions map-profile-actions"><button class="relationship ${state.followed ? 'followed' : ''}" data-action="follow" aria-label="${state.followed ? '已关注' : '关注'}">${state.followed ? '已关注' : '关注'}</button><button class="primary" data-action="${state.bookingConfirmed ? 'consult-teacher' : 'open-profile-booking'}">${state.bookingConfirmed ? '咨询' : '预约老师'}</button></div>${renderProfilePhotoViewer(teacher)}${renderProfileCoursePicker(teacher)}${state.profileMore ? renderProfileMore() : ''}${state.sheet ? renderMapSheet() : ''}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderCourseList() {
  const teacher = teacherForProfile();
  const courses = teacherCourses(teacher);
  const visibleCourses = state.courseFilter === 'all' ? courses : courses.filter((course) => course.id === 'conversation');
  return `<div class="screen course-list-page"><header class="detail-nav"><button data-action="back-to-profile" aria-label="返回">‹</button><strong>课程列表</strong><button data-action="share-course" aria-label="分享">⌑</button></header><main class="detail-scroll"><div class="course-list-filter"><button class="${state.courseFilter === 'all' ? 'selected' : ''}" data-action="filter-courses" data-filter="all">全部</button><button class="${state.courseFilter === 'short' ? 'selected' : ''}" data-action="filter-courses" data-filter="short">${courses[0].duration.replace('/节课', '')}</button></div>${visibleCourses.map((course) => `<article class="course-list-item"><button class="course-list-summary" data-action="select-course" data-course="${course.id}"><img src="${course.cover}" alt="" /><div><b>${course.title}</b><p>${courseIcon('mic')}${course.language}<em>${courseIcon('clock')}${course.duration}</em></p><small>⌖ ${courseVenueLabel(course)}</small>${renderCoursePrice(course)}</div></button><button class="course-booking-cta" data-action="select-course" data-course="${course.id}">预约课时</button></article>`).join('')}</main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderPaymentSheet(course) {
  const methods = [{ name: '支付宝', icon: '支', type: 'alipay' }, { name: '微信', icon: '●', type: 'wechat' }];
  const pricing = coursePricing(course);
  return `<div class="payment-layer" aria-label="支付方式"><button class="payment-scrim" data-action="close-payment" aria-label="关闭支付方式"></button><section class="payment-sheet"><div class="payment-handle"></div><header><strong>支付方式</strong><button data-action="close-payment" aria-label="关闭">×</button></header><div class="payment-price-note"><span>${pricing.sessions > 1 ? `${pricing.sessions} 节课包 · 原价 ¥${pricing.packTotal}` : `单节课程 · 原价 ¥${pricing.packTotal}`}</span>${pricing.firstDiscount ? `<b>首购立减 ¥${pricing.firstDiscount}</b>` : ''}</div><div class="payment-methods">${methods.map((method) => `<button data-action="select-payment" data-method="${method.name}" class="${state.paymentMethod === method.name ? 'selected' : ''}"><span class="payment-icon ${method.type}">${method.icon}</span><b>${method.name}</b><i>${state.paymentMethod === method.name ? '✓' : ''}</i></button>`).join('')}</div><button class="payment-confirm" data-action="confirm-payment">确认支付 ¥${pricing.finalTotal}</button></section></div>`;
}

function renderCourseDetail() {
  const teacher = teacherForProfile();
  const course = selectedCourse();
  const venue = currentVenue(teacher);
  const pricing = coursePricing(course);
  const isPackage = pricing.sessions > 1;
  const unitPrice = Number.isInteger(pricing.unitPrice) ? pricing.unitPrice : pricing.unitPrice.toFixed(1);
  const savings = pricing.regularTotal - pricing.finalTotal;
  const pricingCard = isPackage
    ? `<section class="course-pricing-card course-pricing-card--bundle"><p class="course-pricing-ribbon">${pricing.sessions} 节课包${savings ? ` · 原价 ¥${pricing.regularTotal}` : ''}</p><div class="course-pricing-panel"><div class="course-pricing-copy"><small>${pricing.sessions} 节课包</small><p><b>¥${pricing.finalTotal}</b>${savings ? `<del>¥${pricing.regularTotal}</del>` : ''}<span>约¥${unitPrice}/节</span></p>${savings ? `<em>每节省¥${Math.round(savings / pricing.sessions)}</em>` : ''}</div>${savings ? '<i class="course-pricing-tag">课包优惠</i>' : ''}</div></section>`
    : pricing.firstDiscount
      ? `<section class="course-pricing-card course-pricing-card--single"><p class="course-pricing-ribbon">单节原价 ¥${pricing.packTotal}</p><div class="course-pricing-panel"><div class="course-pricing-copy"><small>单节课程</small><p><b>¥${pricing.finalTotal}/节</b><del>¥${pricing.packTotal}/节</del></p><em>首购立省¥${pricing.firstDiscount}</em></div><i class="course-pricing-tag">首购专享</i></div></section>`
      : `<section class="course-pricing-card course-pricing-card--single"><p class="course-pricing-ribbon">单节课程</p><div class="course-pricing-panel"><div class="course-pricing-copy"><small>单节售价</small><p><b>¥${pricing.finalTotal}/节</b></p></div></div></section>`;
  const bookingNote = isPackage ? `${pricing.sessions} 节课包 · 约¥${unitPrice}/节` : pricing.firstDiscount ? '首购专享价' : '单节课程';
  return `<div class="screen course-detail-page"><header class="detail-nav overlay"><button data-action="back-from-course-detail" aria-label="返回">‹</button><div class="course-owner" data-action="back-to-profile"><span class="mini-avatar photo-${teacher.photo}"></span><b>${teacher.name}</b></div><button data-action="share-course" aria-label="分享">⌑</button></header><main class="detail-scroll"><div><img class="course-hero" src="${course.cover}" alt="${course.title}课程封面" /></div><section class="course-detail-main"><h1>${course.title}</h1><button class="course-teacher-row" data-action="back-to-profile"><span class="mini-avatar photo-${teacher.photo}"></span><div><b>${teacher.name}</b><small>● ${course.language}</small></div><span>›</span></button>${pricingCard}<button class="course-info-row" data-action="course-info"><span>◉</span><div><b>课程介绍</b><small>${course.description}</small></div><i>›</i></button>${renderCourseVenueSection(teacher, venue)}<button class="course-info-row" data-action="course-info"><span>◷</span><div><b>上课时间</b><small>${course.duration} · ${course.schedule}</small></div><i>›</i></button><button class="course-info-row" data-action="course-info"><span>▮</span><div><b>上课次数</b><small>${course.times}</small></div><i>›</i></button><p class="service-tip">预约即表示已阅读 <button data-action="support">服务条款</button></p></section></main><div class="booking-bar"><div><b>¥${pricing.finalTotal}</b><small>${bookingNote}</small></div><button data-action="open-booking">立即预约</button></div>${state.sheet ? renderMapSheet() : ''}${state.paymentSheet ? renderPaymentSheet(course) : ''}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderBooking() {
  const teacher = teacherForProfile();
  const course = selectedCourse();
  const venue = currentVenue(teacher);
  const pricing = coursePricing(course);
  const bookingDays = bookingAvailability(course);
  const activeDay = bookingDays.find((item) => item.label === state.selectedDate) || bookingDays[0];
  const activeSlots = activeDay?.slots || [];
  if (state.bookingConfirmed) return `<div class="screen booking-page"><header class="detail-nav"><button data-action="back-to-course-detail" aria-label="返回">‹</button><strong>预约成功</strong><span></span></header><main class="booking-success"><div>✓</div><h1>已为你保留课程名额</h1><p>${course.title}<br />${venue.venue} · ${state.selectedDate} ${state.selectedSlot}</p><button data-action="contact-teacher" class="booking-confirm">联系老师</button></main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
  return `<div class="screen booking-page"><header class="detail-nav"><button data-action="back-to-course-detail" aria-label="返回">‹</button><strong>确认预约</strong><span></span></header><main class="detail-scroll booking-main"><section><h2>${course.title}</h2><p>${venue.venue} · ${venue.area}</p></section><section class="booking-venue"><h3>上课地点</h3><div class="booking-chips">${course.venues.map((item) => `<button data-action="select-course-venue" data-venue="${item.venue}" class="${item.venue === venue.venue ? 'selected' : ''}">${item.venue}</button>`).join('')}</div><button class="booking-map-link" data-action="open-venue-map" data-id="${teacher.id}" data-venue="${venue.venue}">在地图中查看 ›</button></section><section><h3>选择日期</h3><div class="booking-chips">${bookingDays.map((item) => `<button data-action="select-date" data-date="${item.label}" class="${item.label === activeDay?.label ? 'selected' : ''}">${item.label}</button>`).join('')}</div></section><section><h3>选择时间</h3><div class="booking-chips">${activeSlots.length ? activeSlots.map((slot) => `<button data-action="select-slot" data-slot="${slot}" class="${slot === state.selectedSlot ? 'selected' : ''}">${slot}</button>`).join('') : '<p class="booking-empty-slots">该日期暂无可预约时段</p>'}</div></section><section class="booking-summary"><b>${pricing.sessions > 1 ? '课包金额' : '课程金额'}</b><strong>¥${pricing.finalTotal}</strong><small>${pricing.sessions > 1 ? `${pricing.sessions} 节课包 · 约¥${pricing.unitPrice}/节` : '单节课程'}</small>${pricing.firstDiscount ? `<p>首购优惠 <em>-¥${pricing.firstDiscount}</em></p>` : ''}</section></main><div class="booking-bar"><div><b>¥${pricing.finalTotal}</b><small>${activeSlots.length ? `已选 ${activeDay.label} ${state.selectedSlot}` : '请选择有可约时段的日期'}</small></div><button data-action="confirm-booking" ${activeSlots.length ? '' : 'disabled'}>确认预约</button></div>${state.sheet ? renderMapSheet() : ''}${state.paymentSheet ? renderPaymentSheet(course) : ''}</div>`;
}

function bookingAvailability(course) {
  const dayLabels = { 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六', 7: '周日' };
  const slotsByDay = new Map();
  (course.availability || []).forEach((value) => {
    const { days, start, end } = availabilitySlot(value);
    const startHour = Number(start.slice(0, 2));
    const endHour = Number(end.slice(0, 2));
    const slots = Array.from({ length: Math.max(endHour - startHour, 0) }, (_, index) => `${String(startHour + index).padStart(2, '0')}:00`);
    days.forEach((day) => slotsByDay.set(day, [...new Set([...(slotsByDay.get(day) || []), ...slots]) ]));
  });
  return [...slotsByDay.entries()].sort(([a], [b]) => a - b).map(([day, slots]) => ({ label: dayLabels[day], slots }));
}

function renderIntroVideo() {
  const teacher = teacherForProfile();
  const video = teacher.id === 'sarah' ? state.teacherProfile.introVideo : { title: `${teacher.name} 的介绍视频`, duration: '00:42' };
  const playbackIcon = state.introVideoPlaying
    ? '<rect x="7.5" y="6" width="3.5" height="12" rx="1"/><rect x="13" y="6" width="3.5" height="12" rx="1"/>'
    : '<path d="m9 6 8 6-8 6V6Z"/>';
  return `<div class="screen trial-video-page"><header class="trial-video-nav"><button data-action="back-from-intro-video" aria-label="返回"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 5-7 7 7 7"/></svg></button></header><main class="trial-video-player" aria-label="${video.title}播放页"><section class="trial-video-frame"><div class="trial-lesson-slide" role="img" aria-label="${teacher.name}的老师介绍视频"><div class="trial-slide-brand"><span>${teacher.name} · 老师介绍</span><small>面授老师</small></div><div class="trial-slide-content"><div class="trial-slide-teacher"><i></i><b></b><em></em></div><div class="trial-slide-ppt"><small>${teacher.id === 'sarah' ? state.teacherProfile.language : '中文'}面授 · In-person</small><strong>认识你的老师</strong><div><span>你好</span><span>Hello</span><span>はじめまして</span></div><p>我会结合你的目标和节奏，一起练习自然表达。</p></div></div><div class="trial-slide-footer"><span>真人老师</span><span>面授课程</span><span>免费介绍</span></div></div><button class="trial-video-toggle" data-action="toggle-intro-video" aria-label="${state.introVideoPlaying ? '暂停视频' : '播放视频'}"><svg viewBox="0 0 24 24" aria-hidden="true">${playbackIcon}</svg></button></section><section class="trial-video-controls" aria-label="介绍视频播放控制"><div class="trial-video-control-row"><svg class="trial-video-volume" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h3l4 3V7l-4 3H4Z"/><path d="M15 9.2a4 4 0 0 1 0 5.6M18 6a8.5 8.5 0 0 1 0 12"/></svg><svg class="trial-video-fullscreen" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4H4v4M16 4h4v4M20 16v4h-4M4 16v4h4"/></svg></div><div class="trial-video-timeline"><time>00:02</time><div class="trial-video-track" aria-hidden="true"><i></i></div><time>${video.duration}</time></div></section></main></div>`;
}

const creatorCourses = [
  { title: '一对一中文面授', meta: '2 节课包 ¥90　首购再减 ¥10', total: '¥80', cover: 'assets/course-cover-reference.png', live: true },
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
  return `<article class="creator-course-card ${course.live ? '' : 'offline'}"><img src="${course.cover}" alt="${course.title}" /><div class="creator-course-copy"><b>${course.title}</b><small>${course.meta}</small><strong>${course.total}</strong></div><button class="creator-analytics" data-action="creator-toast" aria-label="课程数据">${creatorIcon('analytics')}</button><footer>${course.live ? `<button class="danger" data-action="creator-toast">${creatorIcon('archive')}<span>下架</span></button><button data-action="edit-course" data-course-title="${course.title}">${creatorIcon('edit')}<span>编辑</span></button><button data-action="creator-toast">${creatorIcon('share')}<span>推广</span></button>` : `<button class="relist" data-action="creator-toast">${creatorIcon('archive')}<span>重新上架</span></button>`}</footer></article>`;
}

function normalizeCreatorCourse(course) {
  const price = Number(course.total.replace(/[^\d.]/g, '')) || 0;
  const duration = course.meta.match(/(\d+)\s*分钟/)?.[1] || '60';
  const id = `creator:${course.title}`;
  return { ...course, id, format: 'offline', language: '中文', duration: `${duration} 分钟`, sessions: 1, price, venues: [], live: state.courseLifecycle[id] === 'deleted' ? false : state.courseLifecycle[id] === 'live' || course.live };
}

function creatorProfileCourseCard(course) {
  const pricing = coursePricing(course);
  const isPackage = pricing.sessions > 1;
  const unitPrice = Number.isInteger(pricing.unitPrice) ? pricing.unitPrice : pricing.unitPrice.toFixed(1);
  const regularUnitPrice = Number.isInteger(pricing.regularTotal / pricing.sessions) ? pricing.regularTotal / pricing.sessions : (pricing.regularTotal / pricing.sessions).toFixed(1);
  const price = `<p class="creator-sale-price">${pricing.regularTotal > pricing.finalTotal ? `<s>¥${regularUnitPrice}/节</s>` : ''}<b>¥${unitPrice}/节</b></p>`;
  const meta = isPackage
    ? `<p class="course-meta-line"><span>${courseIcon('mic')}${course.language}</span><em>${courseIcon('clock')}${course.duration}</em></p>`
    : `<p class="course-meta-line"><span>${courseIcon('mic')}${course.language}</span></p><p class="course-meta-line"><em>${courseIcon('clock')}${course.duration}</em></p>`;
  const badge = `<span class="in-person-badge"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z"></path><circle cx="12" cy="9" r="2"></circle></svg>线下课程</span>`;
  const footer = course.status === 'offline'
    ? `<div class="course-venue-inline creator-offline-inline"><span>可选地点：${course.venues.map((venue) => venue.venue).join('、')}</span><div class="creator-offline-inline-actions"><button data-action="relist-course" data-course-id="${course.id}" aria-label="重新上架课程">${creatorIcon('archive')}</button><button class="creator-offline-delete" data-action="prepare-delete-course" data-course-id="${course.id}" aria-label="删除课程"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5"/></svg></button></div></div>`
    : `<div class="course-venue-inline"><span>可选地点：${course.venues.map((venue) => venue.venue).join('、')}</span><button data-action="edit-course" data-course-id="${course.id}">编辑 ›</button></div>`;
  return `<article class="course-card offline-map-card creator-profile-course-card"><button class="course-card-summary ${isPackage ? '' : 'course-card-summary--single'}" data-action="edit-course" data-course-id="${course.id}" aria-label="编辑${course.title}"><div class="course-card-title"><strong>${course.title}</strong>${badge}</div><div class="course-card-body"><img src="${course.cover}" alt="${course.title}课程封面" /><div class="course-meta">${meta}${price}</div></div></button>${footer}</article>`;
}

function renderMyCourses() {
  const hasCourses = state.creatorCourseState === '有课程';
  const allTeacherCourses = hasCourses ? teacherCourses(teachers.find((teacher) => teacher.id === 'sarah')) : [];
  const matchesCategory = (course) => state.courseManageType === 'all' || course.format === state.courseManageType;
  const onSale = allTeacherCourses.filter((course) => course.status === 'live' && matchesCategory(course));
  const offline = allTeacherCourses.filter((course) => course.status === 'offline' && matchesCategory(course));
  const emptySale = '暂无线下课';
  const emptyOffline = '暂无下架线下课';
  const courseContent = hasCourses
    ? `<h2>在售课程</h2>${onSale.length ? `<section class="creator-sale-course-list map-profile">${onSale.map(creatorProfileCourseCard).join('')}</section>` : `<section class="creator-empty creator-course-empty"><p>${emptySale}</p></section>`}<h2>下架课程</h2>${offline.length ? `<section class="creator-sale-course-list map-profile">${offline.map(creatorProfileCourseCard).join('')}</section>` : `<section class="creator-empty creator-course-empty"><p>${emptyOffline}</p></section>`}`
    : `<section class="creator-empty creator-course-empty"><p>暂无课程，创建新课后将在此展示</p></section>`;
  return `<div class="screen creator-courses"><header class="creator-hero">${systemStatus('creator-status')}<div class="creator-title">${creatorBack()}<strong>我的课程</strong><span><button aria-label="完善教学信息" data-action="open-teaching-info">${creatorIcon('cap')}</button><button aria-label="通知" data-action="creator-toast">${creatorIcon('bell')}</button></span></div></header><main class="creator-scroll"><section class="creator-tools"><button data-action="create-course"><i class="tool-plus">+</i><b>创建新课</b></button><button data-action="manage-courses"><i class="tool-notebook">${creatorIcon('notebook')}</i><b>授课管理</b></button><button data-action="creator-toast"><i class="tool-wallet">${creatorIcon('wallet')}</i><b>课时收入</b></button></section>${courseContent}</main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderStudentCenter() {
  const shortcutIcons = {
    boost: '<svg viewBox="0 0 40 48" aria-hidden="true"><defs><linearGradient id="student-bolt" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eb5be5"/><stop offset=".46" stop-color="#8b54f7"/><stop offset="1" stop-color="#27b9ef"/></linearGradient></defs><path fill="url(#student-bolt)" d="M25 1 4 27h14L14 47l23-29H23z"/></svg>',
    heat: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M36 11A16 16 0 1 0 42 28" fill="none" stroke="#f66faf" stroke-width="6" stroke-linecap="round"/><circle cx="24" cy="24" r="7" fill="none" stroke="#f66faf" stroke-width="5"/><path d="m30 18 12-12v14z" fill="#df59ec"/></svg>',
    shop: '<span aria-hidden="true">🐈‍⬛</span>'
  };
  const courses = [
    ['hello', 'HelloWords', '<span class="student-letter">◔A</span>'],
    ['foreign', '英语外教课', '<span class="student-letter">Aa</span>'],
    ['talk', '英语口语陪练', '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="23" cy="24" r="9" fill="#fff"/><circle cx="43" cy="24" r="9" fill="#fff"/><path d="M9 51c1-12 27-12 28 0M27 51c1-12 27-12 28 0" fill="#fff"/></svg>'],
    ['ai', 'Ai 学英语', '<span class="student-ai-face">AI</span>'],
    ['learn', '学英语', '<span class="student-letter">EN</span>'],
    ['audio', '从零学外语', '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M15 36V31a17 17 0 0 1 34 0v5M14 35h9v15h-5a4 4 0 0 1-4-4zm36 0h-9v15h5a4 4 0 0 0 4-4z" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/><path d="m28 39 4-6 4 11 4-6" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    ['book', '有声外语书', '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 15c12-5 20-1 24 5v30c-7-7-15-8-24-4zm48 0c-12-5-20-1-24 5v30c7-7 15-8 24-4z" fill="#fff"/></svg>'],
    ['more', '更多课程', '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M16 12h34v13H28c-7 0-12 5-12 12v15H8V20c0-5 3-8 8-8Z" fill="#fff"/><path d="M17 38h32v14H17z" fill="none" stroke="#fff" stroke-width="6" stroke-linejoin="round"/></svg>']
  ];
  const navIcons = [
    ['HelloTalk', '<svg viewBox="0 0 28 28"><path d="M6 5h16a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H13l-5 4v-4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z"/><path d="M9 14c2 2 8 2 10-2"/></svg>', '316'],
    ['找语伴', '<svg viewBox="0 0 28 28"><circle cx="9" cy="8" r="3"/><circle cx="19" cy="8" r="3"/><path d="M4 23v-7c0-3 10-3 10 0v7M14 23v-7c0-3 10-3 10 0v7"/></svg>', ''],
    ['动态', '<svg viewBox="0 0 28 28"><path d="M3 16c4-9 13-11 22-7-4 9-13 11-22 7Z"/><path d="M7 20c4 3 10 3 15-1"/></svg>', ''],
    ['语聊 / 直播', '<svg viewBox="0 0 28 28"><rect x="10" y="3" width="8" height="14" rx="4"/><path d="M6 13a8 8 0 0 0 16 0M14 21v4M9 25h10"/></svg>', ''],
    ['我', '<svg viewBox="0 0 28 28"><circle cx="14" cy="9" r="5"/><path d="M4 25c1-7 19-7 20 0"/></svg>', '']
  ];
  return `<div class="screen student-center student-me-tab">${systemStatus('student-status')}<main class="student-me-scroll"><header class="student-me-profile"><button class="student-me-avatar" data-action="student-toast" aria-label="查看个人资料"></button><span class="student-me-coins"><i>HT</i><b>4258</b></span><i class="student-me-vip" aria-hidden="true">⌣</i><div class="student-me-identity"><h1>Calina is is</h1><p><b>177</b> 正在关注　 <b>178</b> 粉丝</p></div><button class="student-me-action student-me-share" data-action="student-toast" aria-label="分享"><svg viewBox="0 0 30 30"><path d="M9 15v9h12v-9M15 4v15M10 9l5-5 5 5"/></svg></button><button class="student-me-action student-me-settings" data-action="student-toast" aria-label="设置"><svg viewBox="0 0 30 30"><path d="M15 3l3 3 4-1 1 4 4 2-2 4 2 4-4 2-1 4-4-1-3 3-3-3-4 1-1-4-4-2 2-4-2-4 4-2 1-4 4 1z"/><circle cx="15" cy="15" r="4"/></svg></button></header><button class="student-me-class" data-action="student-toast"><b>语伴畅聊：1 课时待上课</b><span>去上课</span></button><section class="student-me-stats"><button data-action="student-toast"><b><i>🔥</i>781</b><span>连胜天数</span><em>🪐</em></button><button data-action="student-toast"><b>4.9k</b><span>想认识你</span><i class="student-me-people"><u class="photo-p1"></u><u class="photo-p4"></u><u class="photo-p6"></u></i></button></section><button class="student-me-moments" data-action="student-toast"><svg viewBox="0 0 32 32"><path d="M2 20c5-13 18-17 28-10-5 13-18 17-28 10Z"/><path d="M6 25c6 3 13 2 19-3"/></svg><b>动态</b><span>25</span></button><section class="student-me-tools">${[['boost','超级曝光'],['heat','帖文加热'],['shop','商城']].map(([key,label]) => `<button class="student-me-tool ${key}" data-action="student-toast"><i>${shortcutIcons[key]}</i><b>${label}</b></button>`).join('')}</section><h2>课程中心</h2><section class="student-me-courses">${courses.map(([kind,label,icon]) => `<button class="student-me-course ${kind}" data-action="student-toast"><i>${icon}</i><b>${label}</b></button>`).join('')}<button class="student-me-record" data-action="student-toast"><b>课程学习记录</b><span>›</span></button></section></main><nav class="student-me-nav" aria-label="主导航">${navIcons.map(([label,icon,badge]) => `<button class="${label === '我' ? 'selected' : ''}" data-action="tab-root" data-tab="${label}"><i>${icon}${badge ? `<em>${badge}</em>` : ''}</i><small>${label}</small></button>`).join('')}</nav>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

/* v8：学生端「我」页仅用矢量图标与原生导航资源，避免字符图标在手机画布中失真。 */
function studentMeIcon(name) {
  const icons = {
    bag: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 12h18v12a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V12Z" fill="#fff"/><path d="M11 12a5 5 0 0 1 10 0" fill="none" stroke="#ffae2c" stroke-width="2.4" stroke-linecap="round"/></svg>',
    share: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 5v16M10 11l6-6 6 6M8 18v7h16v-7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    gear: '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 5 2 3 3.5-.2.8 3.4 3 1.8-1.8 3 1.8 3-3 1.8-.8 3.4-3.5-.2-2 3-2-3-3.5.2-.8-3.4-3-1.8 1.8-3-1.8-3 3-1.8.8-3.4L14 8l2-3Z" fill="currentColor"/><circle cx="16" cy="16" r="4" fill="#fff"/></svg>',
    planet: '<svg viewBox="0 0 38 30" aria-hidden="true"><ellipse cx="19" cy="15" rx="16" ry="6" fill="none" stroke="currentColor" stroke-width="2.6" transform="rotate(-23 19 15)"/><circle cx="19" cy="15" r="8" fill="currentColor"/><circle cx="29" cy="5" r="2.5" fill="#ffbd53"/></svg>',
    bolt: '<svg viewBox="0 0 36 42" aria-hidden="true"><path d="M21 1 5 24h12l-2 17 16-25H19L21 1Z" fill="url(#bolt)"/><defs><linearGradient id="bolt" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#4c88ff"/><stop offset="1" stop-color="#db55ef"/></linearGradient></defs></svg>',
    heat: '<svg viewBox="0 0 38 38" aria-hidden="true"><circle cx="17" cy="18" r="12" fill="none" stroke="#f66da6" stroke-width="4"/><circle cx="17" cy="18" r="5" fill="none" stroke="#f66da6" stroke-width="3"/><path d="m25 27 10-8M29 27l5-8" fill="none" stroke="#e85bdd" stroke-width="4" stroke-linecap="round"/></svg>',
    shop: '<svg viewBox="0 0 38 38" aria-hidden="true"><path d="M8 30V17c0-6 4-10 11-10s11 4 11 10v13H8Z" fill="#d14b77"/><path d="M13 8c0-4 2-6 4-7l2 7m2 0 4-7c2 1 4 3 4 7" fill="#d14b77"/><circle cx="15" cy="19" r="2" fill="#fff"/><circle cx="23" cy="19" r="2" fill="#fff"/><path d="M16 25c2 1 4 1 6 0" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>',
    hello: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 36c0-14 10-24 24-24 8 0 14 4 18 10-1 14-11 26-26 26-9 0-16-5-16-12Z" fill="#fff"/><circle cx="27" cy="28" r="3" fill="#06c985"/><path d="M31 38c5 2 10 0 12-4" fill="none" stroke="#06c985" stroke-width="3" stroke-linecap="round"/><path d="m43 14 7 7-7 4" fill="#fff"/></svg>',
    foreign: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 12h40v31a7 7 0 0 1-7 7H28l-9 6v-6h0a7 7 0 0 1-7-7V12Z" fill="#fff"/><text x="18" y="39" fill="#368cf7" font-size="27" font-family="Georgia,serif" font-weight="700">Aa</text></svg>',
    talk: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="24" cy="27" r="9" fill="#fff"/><circle cx="42" cy="27" r="9" fill="#fff"/><path d="M10 51c1-9 8-14 14-14s13 5 14 14H10Zm16 0c1-9 8-14 16-14s11 5 12 14H26Z" fill="#fff"/></svg>',
    ai: '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="33" r="18" fill="#bd7e55"/><path d="M16 28c1-14 30-18 34 1-6-4-8-7-11-11-8 8-14 10-23 10Z" fill="#5c301e"/><text x="24" y="39" fill="#fff" font-size="13" font-weight="800">AI</text></svg>',
    learn: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 12h40v31a7 7 0 0 1-7 7H29l-8 6v-6h-2a7 7 0 0 1-7-7V12Z" fill="#fff"/><text x="18" y="40" fill="#368cf7" font-size="24" font-weight="800">EN</text></svg>',
    audio: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 37v-7a19 19 0 0 1 38 0v7M13 34h9v15h-5a4 4 0 0 1-4-4V34Zm29 0h9v11a4 4 0 0 1-4 4h-5V34Z" fill="#fff"/><path d="M28 38c2 3 6 3 8 0m-6 8 2-10 3 10" fill="none" stroke="#ff8528" stroke-width="2.5" stroke-linecap="round"/></svg>',
    book: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 14c10-3 16 0 20 6 4-6 10-9 20-6v35c-9-3-14-1-20 5-6-6-11-8-20-5V14Z" fill="#fff"/><path d="M32 20v31" stroke="#dd0dba" stroke-width="3"/></svg>',
    more: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M16 13h32v14H28c-6 0-10 4-10 10v14H9V20c0-4 3-7 7-7Z" fill="#fff"/><path d="M19 38h29v13H19z" fill="none" stroke="#fff" stroke-width="5" stroke-linejoin="round"/></svg>'
  };
  return icons[name] || '';
}

function renderStudentCenter() {
  const courseApps = [['hello', 'HelloWords'], ['foreign', '英语外教课'], ['talk', '英语口语陪练'], ['ai', 'Ai 学英语'], ['learn', '学英语'], ['audio', '从零学外语'], ['book', '有声外语书'], ['more', '更多课程']];
  const nav = [['HelloTalk', 'assets/tab_chat_active.png', '316', 'muted-chat'], ['找语伴', 'assets/tab_partner.png', '', ''], ['动态', 'assets/tab_moment.png', '', ''], ['语聊 / 直播', 'assets/tab_live.png', '', ''], ['我', 'assets/tab_mine_active.png', '', 'active']];
  const pendingInPerson = studentPurchasedOfflineCourses().reduce((total, course) => total + course.remainingSessions, 0);
  return `<div class="screen student-center student-target-me student-target-v8">${systemStatus('student-status')}<main class="student-target-scroll">
    <header class="student-target-head"><div class="student-target-tools"><button class="student-target-coin" data-action="student-toast"><i>HT</i><b>4258</b></button><button class="student-target-bag" data-action="student-toast" aria-label="背包">${studentMeIcon('bag')}</button></div><div><button class="student-target-head-action" data-action="student-toast" aria-label="分享">${studentMeIcon('share')}</button><button class="student-target-head-action gear" data-action="student-toast" aria-label="设置">${studentMeIcon('gear')}</button></div></header>
    <section class="student-target-profile"><button class="student-target-lime" data-action="student-toast" aria-label="查看个人资料"><i></i></button><div class="student-target-copy"><h1>菜菜爱吃菜 <mark>VIP+</mark><em>✧ 24</em></h1><p>@caicai1515 <span class="student-copy-code">▧</span></p><div><b>177</b><span>正在关注</span><b>178</b><span>粉丝</span></div></div><button class="student-target-next" data-action="student-toast" aria-label="查看个人资料">›</button></section>
    <button class="student-target-class" data-action="open-student-courses"><b>面授课程：${pendingInPerson}课时待上课</b><span>查看</span></button>
    <section class="student-target-stats"><button data-action="student-toast"><b><i class="student-flame">🔥</i><strong>781</strong></b><span>连胜天数</span><i class="student-orbit">${studentMeIcon('planet')}</i></button><button data-action="student-toast"><b>4.9k</b><span>想认识你</span><i><u class="photo-p1"></u><u class="photo-p4"></u><u class="photo-p6"></u></i><mark>+1</mark></button></section>
    <button class="student-target-moments" data-action="student-toast"><i>${studentMeIcon('planet')}</i><b>动态</b><span>25</span></button>
    <section class="student-target-shortcuts">${[['lightning', 'bolt', '超级曝光'], ['heat', 'heat', '帖文加热'], ['shop', 'shop', '商城']].map(([kind, icon, label]) => `<button class="${kind}" data-action="student-toast"><i>${studentMeIcon(icon)}</i><b>${label}</b></button>`).join('')}</section>
    <h2>课程中心</h2><section class="student-target-course-grid">${courseApps.map(([kind, label], index) => `<button class="${kind}" data-action="student-toast"><i>${studentMeIcon(kind)}${index === 0 || index === 3 ? '<em></em>' : ''}</i><b>${label}</b></button>`).join('')}</section>
  </main><nav class="student-target-nav" aria-label="HelloTalk 主导航">${nav.map(([label, icon, badge, cls]) => `<button class="${cls}" data-action="${label === '我' ? 'student-toast' : 'tab-root'}" data-tab="${label}"><i><img src="${icon}" alt=""/>${badge ? `<em>${badge}</em>` : ''}</i><small>${label}</small></button>`).join('')}</nav>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

/* HT 资源库 mine.home.default 的组件化重建：保持原生层级，使用可点击 DOM 而非参考截图切片。 */
function renderStudentCenterNativeBaseline() {
  const nav = [['◔', 'HelloTalk', '11'], ['♙', '找语伴', ''], ['◌', '动态', '3'], ['♟', '语聊 / 直播', ''], ['●', '我', '']];
  return `<div class="screen student-center student-native-me">
    ${systemStatus('student-status')}
    <main class="student-native-scroll">
      <header class="student-native-header">
        <div class="student-native-header-left"><button class="student-native-points" data-action="student-toast"><i>HT</i><b>4258</b></button><button class="student-native-header-icon student-native-store" data-action="student-toast" aria-label="商城">▰</button><button class="student-native-header-icon student-native-bag" data-action="student-toast" aria-label="背包">⌑</button></div>
        <div class="student-native-header-right"><button class="student-native-round-icon" data-action="student-toast" aria-label="分享">⇧</button><button class="student-native-round-icon student-native-gear" data-action="student-toast" aria-label="设置">⚙</button></div>
      </header>
      <section class="student-native-profile">
        <button class="student-native-avatar" data-action="student-toast" aria-label="查看个人资料"><span>45%</span></button>
        <div class="student-native-profile-copy"><h1>Calina is is <small>VIP 体验期</small></h1><p>@Calina</p><div><b>177</b><span>正在关注</span><b>178</b><span>粉丝</span></div></div>
        <button class="student-native-edit" data-action="student-toast">✎ 编辑<i></i></button>
      </section>
      <section class="student-native-insights"><button data-action="student-toast"><strong><i>🔥</i> 781</strong><span>连胜天数</span><em>🎁</em></button><button data-action="student-toast"><strong><i class="student-native-orbs"></i> 4.9k</strong><span>看过我</span><em>49</em></button></section>
      <button class="student-native-vip-banner" data-action="student-toast"><span>查看 VIP 专属特权</span><b>立即查看</b></button>
      <section class="student-native-vip-card"><div class="student-native-vip-tabs"><b>VIP</b><span>VIP+</span></div><div class="student-native-vip-content"><div><strong>特权名称</strong><span>无限翻译特权</span><span>解锁访客特权</span><span>搜索附近的人</span></div><div><strong>非会员</strong><span>5次/天</span><span>🔒</span><span>🔒</span></div><div class="student-native-vip-level"><b>VIP</b><span>无限</span><span>✓</span><span>✓</span></div></div><button data-action="student-toast">成为 VIP</button></section>
      <button class="student-native-moments" data-action="student-toast"><i>◒</i><b>动态</b><span>25</span></button>
      <button class="student-native-bottom-banner" data-action="student-toast"><span>更多个人服务</span><b>›</b></button>
    </main>
    <nav class="student-native-nav" aria-label="HelloTalk 主导航">${nav.map(([icon, label, badge]) => `<button class="${label === '我' ? 'active' : ''}" data-action="${label === '我' ? 'student-toast' : 'tab-root'}" data-tab="${label}"><i>${icon}${badge ? `<em>${badge}</em>` : ''}</i><small>${label}</small></button>`).join('')}</nav>
    ${state.toast ? `<div class="toast">${state.toast}</div>` : ''}
  </div>`;
}

/* 旧版学生端「我」页保留作回归参考，不参与当前渲染。 */
function renderStudentCenterLegacyV7() {
  const courseApps = [['hello','◔A','HelloWords'],['foreign','Aa','英语外教课'],['talk','●●','英语口语陪练'],['ai','AI','Ai 学英语'],['learn','EN','学英语'],['audio','♬','从零学外语'],['book','▰','有声外语书'],['more','▱','更多课程']];
  const tabs = [['◔','HelloTalk','316'],['♙','找语伴',''],['◌','动态',''],['♟','语聊 / 直播',''],['●','我','']];
  return `<div class="screen student-center student-target-me">${systemStatus('student-status')}<main class="student-target-scroll">
    <header class="student-target-head"><div class="student-target-tools"><button class="student-target-coin" data-action="student-toast"><i>HT</i><b>4258</b></button><button class="student-target-bag" data-action="student-toast" aria-label="背包">⌣</button></div><div><button class="student-target-head-action" data-action="student-toast" aria-label="分享">⇧</button><button class="student-target-head-action gear" data-action="student-toast" aria-label="设置">⚙</button></div></header>
    <section class="student-target-profile"><button class="student-target-lime" data-action="student-toast" aria-label="查看个人资料"></button><div class="student-target-copy"><h1>菜菜爱吃菜 <mark>VIP+</mark><em>✧ 24</em></h1><p>@caicai1515　▧</p><div><b>177</b><span>正在关注</span><b>178</b><span>粉丝</span></div></div><button class="student-target-next" data-action="student-toast" aria-label="查看个人资料">›</button></section>
    <button class="student-target-class" data-action="student-toast"><b>语伴畅聊：1 课时待上课</b><span>去上课</span></button>
    <section class="student-target-stats"><button data-action="student-toast"><b>🔥<strong>781</strong></b><span>连胜天数</span><em>🪐</em></button><button data-action="student-toast"><b>4.9k</b><span>想认识你</span><i><u class="photo-p1"></u><u class="photo-p4"></u><u class="photo-p6"></u></i><mark>+1</mark></button></section>
    <button class="student-target-moments" data-action="student-toast"><i>◒</i><b>动态</b><span>25</span></button>
    <section class="student-target-shortcuts">${[['lightning','ϟ','超级曝光'],['heat','◎','帖文加热'],['shop','♟','商城']].map(([kind,icon,label]) => `<button class="${kind}" data-action="student-toast"><i>${icon}</i><b>${label}</b></button>`).join('')}</section>
    <h2>课程中心</h2><section class="student-target-course-grid">${courseApps.map(([kind, icon, label], index) => `<button class="${kind}" data-action="student-toast"><i>${icon}${index === 0 || index === 3 ? '<em></em>' : ''}</i><b>${label}</b></button>`).join('')}</section>
  </main><nav class="student-target-nav" aria-label="HelloTalk 主导航">${tabs.map(([icon,label,badge]) => `<button class="${label === '我' ? 'active' : ''}" data-action="${label === '我' ? 'student-toast' : 'tab-root'}" data-tab="${label}"><i>${icon}${badge ? `<em>${badge}</em>` : ''}</i><small>${label}</small></button>`).join('')}</nav>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
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

const availabilityWeekdays = [{ value: 1, label: '一' }, { value: 2, label: '二' }, { value: 3, label: '三' }, { value: 4, label: '四' }, { value: 5, label: '五' }, { value: 6, label: '六' }, { value: 7, label: '日' }];

function availabilityWeekdayLabel(days) {
  const sorted = [...days].sort((a, b) => a - b);
  if (sorted.length === 7) return '每天';
  if (sorted.length === 5 && sorted.every((day, index) => day === index + 1)) return '周一至周五';
  if (sorted.length === 2 && sorted[0] === 6 && sorted[1] === 7) return '周六、周日';
  return sorted.map((day) => `周${availabilityWeekdays.find((item) => item.value === day)?.label}`).join('、');
}

function availabilitySlot(slot) {
  const text = String(slot || '');
  const range = text.match(/(\d{2}:\d{2})\s*[–-]\s*(\d{2}:\d{2})/);
  const weekText = text.slice(0, range?.index).replace(/\s/g, '');
  const weekRange = weekText.match(/周([一二三四五六日])至周([一二三四五六日])/);
  const rangeDays = weekRange
    ? availabilityWeekdays.filter(({ value }) => value >= availabilityWeekdays.find((item) => item.label === weekRange[1]).value && value <= availabilityWeekdays.find((item) => item.label === weekRange[2]).value).map(({ value }) => value)
    : [];
  const days = rangeDays.length ? rangeDays : availabilityWeekdays.filter(({ label }) => weekText.includes(`周${label}`)).map(({ value }) => value);
  return { days: days.length ? days : availabilityWeekdays.map(({ value }) => value), start: range?.[1] || '09:00', end: range?.[2] || '12:00' };
}

function availabilityRange(slot) {
  const { start, end } = availabilitySlot(slot);
  return [start, end];
}

function formatAvailabilitySlot(days, start, end) {
  return `${availabilityWeekdayLabel(days)} ${start}–${end}`;
}

function availabilityConflicts(index, days, start, end) {
  return state.courseAvailability.some((slot, itemIndex) => {
    if (itemIndex === index) return false;
    const other = availabilitySlot(slot);
    return days.some((day) => other.days.includes(day)) && start < other.end && end > other.start;
  });
}

function nextAvailabilitySlot() {
  const candidates = [['09:00', '12:00'], ['14:00', '18:00'], ['19:00', '21:00'], ['07:00', '09:00'], ['21:00', '22:00']];
  const weekdays = [1, 2, 3, 4, 5];
  const next = candidates.find(([start, end]) => !availabilityConflicts(-1, weekdays, start, end));
  return formatAvailabilitySlot(weekdays, ...(next || ['09:00', '10:00']));
}

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
  if (sheet === 'availability') {
    const ranges = state.courseAvailability.map(availabilitySlot);
    const rows = ranges.length
      ? ranges.map(({ days, start, end }, index) => `<div class="availability-range-row"><div class="availability-range-heading"><span>时段 ${index + 1}</span><button data-action="remove-course-availability" data-index="${index}" aria-label="删除时段 ${index + 1}">×</button></div><div class="availability-days">${availabilityWeekdays.map(({ value, label }) => `<button class="${days.includes(value) ? 'selected' : ''}" data-action="toggle-availability-day" data-index="${index}" data-day="${value}">周${label}</button>`).join('')}</div><div class="availability-times"><label><input type="time" value="${start}" data-availability-index="${index}" data-availability-part="start" aria-label="时段 ${index + 1} 开始时间" /></label><i>至</i><label><input type="time" value="${end}" data-availability-index="${index}" data-availability-part="end" aria-label="时段 ${index + 1} 结束时间" /></label></div></div>`).join('')
      : '<p class="availability-empty">暂未设置可授课时段</p>';
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet availability-sheet" role="dialog" aria-modal="true" aria-label="设置可授课时段" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>设置可授课时段</strong>${close}</header><p class="creator-pricing-note">每组可设置适用星期与时间范围；学员预约时仅展示匹配的可约时段。</p><div class="availability-range-list">${rows}</div><button class="availability-add" data-action="add-course-availability">＋ 添加时段</button><button class="creator-sheet-confirm" data-action="close-creator-sheet">完成</button></section></div>`;
  }
  if (sheet === 'sales-mode') return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet" role="dialog" aria-modal="true" aria-label="选择售卖方案" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>选择售卖方案</strong>${close}</header>${option('不设优惠', 'none', state.courseSalesMode === 'none', '按单节原价售卖')}${option('首购优惠', 'first', state.courseSalesMode === 'first', '仅单节课首购享优惠价')}${option('课包售卖', 'pack', state.courseSalesMode === 'pack', '按多节课设置打包最终售价')}</section></div>`;
  if (sheet === 'pack') {
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet creator-input-sheet" role="dialog" aria-modal="true" aria-label="设置课包售价" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>设置课包售价</strong>${close}</header><p class="creator-pricing-note">设置课包节数和最终总售价；原价按单节原价自动计算。</p><label>课包节数<input data-creator-input="coursePackSessions" inputmode="numeric" value="${state.coursePackSessions}" placeholder="例如：2" /></label><label>课包最终售价<input data-creator-input="coursePackPrice" inputmode="decimal" value="${state.coursePackPrice}" placeholder="例如：90" /></label><button class="creator-sheet-confirm" data-action="close-creator-sheet">完成</button></section></div>`;
  }
  if (sheet === 'first-discount') {
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet creator-input-sheet" role="dialog" aria-modal="true" aria-label="设置首购售价" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>设置首购售价</strong>${close}</header><p class="creator-pricing-note">仅适用于单节课首购；填写用户实际支付的最终售价。</p><label>首购最终售价<input data-creator-input="courseFirstDiscount" inputmode="decimal" value="${state.courseFirstDiscount}" placeholder="例如：90" /></label><button class="creator-sheet-confirm" data-action="close-creator-sheet">完成</button></section></div>`;
  }
  if (sheet === 'delete-course') {
    return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet creator-delete-sheet" role="dialog" aria-modal="true" aria-label="删除课程确认" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>删除课程</strong>${close}</header><p>删除后课程将无法恢复，已购用户不受影响。</p><button class="creator-delete-confirm" data-action="confirm-delete-course">确认删除</button></section></div>`;
  }
  const field = sheet === 'title' ? 'courseTitle' : sheet === 'description' ? 'courseDescription' : 'coursePrice';
  const meta = sheet === 'title' ? ['课程标题', '例如：一对一中文面授'] : sheet === 'description' ? ['课程描述', '介绍课程内容、适合的学习者'] : ['设置单节原价', '请输入每节课程的原价'];
  const input = sheet === 'description' ? `<textarea data-creator-input="${field}" placeholder="${meta[1]}">${state[field]}</textarea>` : `<input data-creator-input="${field}" ${sheet === 'price' ? 'inputmode="decimal"' : ''} value="${state[field]}" placeholder="${meta[1]}" />`;
  return `<div class="delivery-sheet-mask" data-action="close-creator-sheet"><section class="delivery-sheet creator-input-sheet" role="dialog" aria-modal="true" aria-label="${meta[0]}" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>${meta[0]}</strong>${close}</header>${input}<button class="creator-sheet-confirm" data-action="close-creator-sheet">完成</button></section></div>`;
}

function renderCreateCourse() {
  const editing = Boolean(state.editingCourseId);
  const title = creatorValue(state.courseTitle, '请输入课程标题');
  const tags = state.courseTags.length ? state.courseTags.join('、') : '请选择';
  const salesMode = state.courseSalesMode || 'none';
  const salesModeLabel = { none: '不设优惠', first: '首购优惠', pack: '课包售卖' }[salesMode];
  const packValue = state.coursePackSessions && state.coursePackPrice ? `${state.coursePackSessions} 节 ¥${state.coursePackPrice}` : '暂不设置';
  const firstPriceValue = state.courseFirstDiscount ? `¥${state.courseFirstDiscount}` : '暂不设置';
  const availabilityValue = state.courseAvailability.length ? state.courseAvailability.join('、') : '请选择可授课时段';
  const formActions = editing
    ? '<div class="creator-form-actions creator-form-actions--editing"><button class="creator-delete-course" data-action="open-creator-sheet" data-sheet="delete-course" aria-label="删除课程"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14M9 7V4h6v3m-8 0 1 13h8l1-13M10 11v5m4-5v5"/></svg></button><button class="creator-unpublish-course" data-action="unpublish-course">下架</button><button class="creator-save-course" data-action="submit-course">保存</button></div>'
    : '<div class="creator-form-actions"><button class="creator-submit-course" data-action="submit-course">提交创建</button></div>';
  const pricingFields = `<button data-action="open-creator-sheet" data-sheet="sales-mode"><small>售卖方案 <i>可选</i></small><b>${salesModeLabel}</b>${formChevron()}</button>${salesMode === 'pack'
      ? `<button data-action="open-creator-sheet" data-sheet="pack"><small>课包最终售价</small><b class="${state.coursePackPrice ? '' : 'placeholder'}">${packValue}</b>${formChevron()}</button>`
      : salesMode === 'first'
        ? `<button data-action="open-creator-sheet" data-sheet="first-discount"><small>首购最终售价 <i>仅首购</i></small><b class="${state.courseFirstDiscount ? '' : 'placeholder'}">${firstPriceValue}</b>${formChevron()}</button>`
        : ''}`;
  return `<div class="screen creator-form-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>${editing ? '编辑课程' : '创建新课'}</strong><span></span></div></header><main class="creator-form-scroll"><button class="creator-cover" data-action="creator-toast"><i>+</i><span>添加课程封面/预览视频<br />推荐上传2分钟内横屏视频</span></button><button class="creator-field single creator-venue-field" data-action="open-creator-place"><small>可选授课地点</small><b class="${state.courseVenues.length ? '' : 'placeholder'}">${state.courseVenues.length ? `已选 ${state.courseVenues.length} 处` : '搜索并选择地点'}</b>${formChevron()}</button><button class="creator-field single" data-action="open-creator-sheet" data-sheet="availability"><small>每日可授课时段</small><b class="${state.courseAvailability.length ? '' : 'placeholder'}">${availabilityValue}</b>${formChevron()}</button><button class="creator-field title-field" data-action="open-creator-sheet" data-sheet="title"><span><small>课程标题</small><b class="${state.courseTitle ? '' : 'placeholder'}">${title}</b></span><em>修改</em></button><section class="creator-field-group"><button data-action="open-creator-sheet" data-sheet="tags"><small>课程标签</small><b class="${state.courseTags.length ? '' : 'placeholder'}">${tags}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="language"><small>课程语言</small><b class="${state.courseLanguage ? '' : 'placeholder'}">${creatorValue(state.courseLanguage)}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="duration"><small>课程时长</small><b class="${state.courseDuration ? '' : 'placeholder'}">${creatorValue(state.courseDuration)}</b>${formChevron()}</button><button data-action="open-creator-sheet" data-sheet="sessions"><small>课程次数</small><b class="${state.courseSessions ? '' : 'placeholder'}">${creatorValue(state.courseSessions)}</b>${formChevron()}</button></section><button class="creator-field single" data-action="open-creator-sheet" data-sheet="description"><small>课程描述</small><b class="${state.courseDescription ? '' : 'placeholder'}">${creatorValue(state.courseDescription, '请输入内容')}</b>${formChevron()}</button><section class="creator-field-group creator-pricing-fields"><button data-action="open-creator-sheet" data-sheet="price"><small>单节原价</small><b class="${state.coursePrice ? '' : 'placeholder'}">${creatorValue(state.coursePrice, '请输入')}</b><em>¥</em></button>${pricingFields}</section>${formActions}</main>${renderCreatorSheet()}</div>`;
}

function renderCreatorPlacePage() {
  const selected = state.courseVenues.map((venue) => venue.name).join('、');
  return `<div class="screen creator-place-page">${systemStatus('creator-place-status')}<main class="creator-place-surface"><header><button data-action="close-creator-place" aria-label="关闭">×</button><label><span>⌕</span><input data-creator-place-page-search value="${state.creatorVenueQuery}" placeholder="搜索附近位置" /></label></header><section class="creator-place-scroll">${state.courseVenues.length ? `<button class="creator-place-current" data-action="clear-creator-places"><span><b>已选上课地点</b><small>${selected}</small></span><i>✓</i></button>` : `<button class="creator-place-current" data-action="close-creator-place"><span><b>暂不添加地点</b><small>线下课程提交前仍需至少选择 1 处</small><em>你仍可随时回来添加</em></span><i></i></button>`}<div class="creator-place-page-results" data-creator-place-page-results>${state.creatorVenueQuery.trim() ? renderCreatorPlaceResults() : renderCreatorPlaceBrowse()}</div></section></main></div>`;
}

function renderTeachingInfoSheet() {
  const sheet = state.creatorSheet;
  if (!sheet.startsWith('teaching-')) return '';
  const close = '<button data-action="close-teaching-sheet" aria-label="关闭">×</button>';
  const profile = state.teacherProfile;
  const option = (label, selected, field, value = label) => `<button class="delivery-option ${selected ? 'selected' : ''}" data-action="select-teaching-value" data-field="${field}" data-value="${value}"><span><b>${label}</b></span><i>${selected ? '✓' : ''}</i></button>`;
  if (sheet === 'teaching-types') {
    const types = ['实用口语', '旅游口语', '商务谈判', '雅思考试', '面试技巧', '文化风俗', '学术口语', 'FreeTalk'];
    return `<div class="delivery-sheet-mask" data-action="close-teaching-sheet"><section class="delivery-sheet teaching-types-sheet" role="dialog" aria-modal="true" aria-label="选择教学类型" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><span><strong>教学类型</strong><small>最多选择 3 个</small></span>${close}</header><div class="teaching-types-grid">${types.map((type) => `<button class="${state.teacherProfile.types.includes(type) ? 'selected' : ''}" data-action="toggle-teaching-type" data-value="${type}">${type}</button>`).join('')}</div><button class="creator-sheet-confirm" data-action="close-teaching-sheet">确定（${state.teacherProfile.types.length}/3）</button></section></div>`;
  }
  if (sheet === 'teaching-also-speaks') {
    const languages = ['中文', 'English', '日本語', '한국어', 'Español'];
    return `<div class="delivery-sheet-mask" data-action="close-teaching-sheet"><section class="delivery-sheet teaching-types-sheet" role="dialog" aria-modal="true" aria-label="选择同时会说的语言" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><span><strong>同时会说</strong><small>最多选择 3 种</small></span>${close}</header><div class="teaching-types-grid">${languages.map((language) => `<button class="${profile.alsoSpeakList.includes(language) ? 'selected' : ''}" data-action="toggle-teaching-speaking" data-value="${language}">${language}</button>`).join('')}</div><button class="creator-sheet-confirm" data-action="close-teaching-sheet">确定（${profile.alsoSpeakList.length}/3）</button></section></div>`;
  }
  if (sheet === 'teaching-experience') return `<div class="delivery-sheet-mask" data-action="close-teaching-sheet"><section class="delivery-sheet creator-input-sheet" role="dialog" aria-modal="true" aria-label="编辑教学经验" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>教学经验</strong>${close}</header><textarea data-teaching-input="experience" placeholder="请输入教学经历、年限与擅长方向">${profile.experience}</textarea><button class="creator-sheet-confirm" data-action="close-teaching-sheet">完成</button></section></div>`;
  const configs = {
    'teaching-language': { title: '教授语言', values: ['中文', '英语', '日语', '韩语'], key: 'language' },
    'teaching-intro': { title: '个人介绍', values: ['一对一面授中文课，地点和时间可协商。', '专注日常会话与发音训练，帮助你建立真实表达能力。', '结合你的学习目标，安排可落地的中文练习与反馈。'], key: 'intro' },
    'teaching-materials': { title: '教学资料', values: ['PPT文件', 'PDF讲义', 'Word练习册', '图片素材'], key: 'materials' },
    'teaching-certificate': { title: '获得证书', values: ['CELTA', 'TESOL', 'CTCSOL', 'Other'], key: 'certificate' },
    'teaching-education': { title: '学历背景', values: ['本科 · 汉语言文学', '硕士 · 对外汉语', '暂不设置'], key: 'education' },
    'teaching-email': { title: '常用邮箱', values: ['teacher@example.com', 'sarah.teacher@example.com'], key: 'email' },
    'teaching-phone': { title: '手机号', values: ['138 0000 0000', '139 0000 0000'], key: 'phone' }
  };
  const config = configs[sheet];
  return `<div class="delivery-sheet-mask" data-action="close-teaching-sheet"><section class="delivery-sheet" role="dialog" aria-modal="true" aria-label="选择${config.title}" onclick="event.stopPropagation()"><i class="sheet-handle"></i><header><strong>${config.title}</strong>${close}</header>${config.values.map((value) => option(value, profile[config.key] === value, sheet)).join('')}</section></div>`;
}

function renderTeachingInfo() {
  const profile = state.teacherProfile;
  return `<div class="screen teaching-info-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>完善教学信息</strong><span></span></div></header><main class="teaching-info-scroll"><section class="teaching-section"><h2>个人照片 <i>*</i><small>（最多 3 张）</small><button data-action="rotate-teaching-photos">更换照片</button></h2><div class="teaching-photo-grid">${profile.photos.map((photo, index) => `<button class="teaching-photo teacher-lifestyle-photo ${photo}" data-action="rotate-teaching-photos" aria-label="更换第 ${index + 1} 张个人照片"></button>`).join('')}</div></section><section class="teaching-section"><h2>教授语言<i>*</i></h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-language">${profile.language} <span>›</span></button><h2>同时会说</h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-also-speaks">${profile.alsoSpeakList.join('、')} <span>›</span></button><h2>教学类型<i>*</i><small>（最多 3 个）</small></h2><button class="teaching-select teaching-types-value" data-action="open-teaching-sheet" data-sheet="teaching-types"><b>${profile.types.join('、')}</b><span>›</span></button><h2>个人介绍<i>*</i></h2><button class="teaching-textarea" data-action="open-teaching-sheet" data-sheet="teaching-intro">${profile.intro}</button><h2>教学经验<i>*</i></h2><button class="teaching-textarea" data-action="open-teaching-sheet" data-sheet="teaching-experience">${profile.experience}</button></section><section class="teaching-section"><h2>教学资料<i>*</i><small>（可用于教学的文件类型）</small></h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-materials">${profile.materials} <span>›</span></button><h2>获得证书<i>*</i><small>（推荐上传 CELTA、TESOL、CTCSOL 等证书）</small></h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-certificate">${profile.certificate} <span>›</span></button><h2>证书图片<i>*</i></h2><button class="certificate-upload ${profile.certificateImage ? 'uploaded' : ''}" data-action="upload-certificate" aria-label="上传证书图片">${profile.certificateImage ? '✓' : '▧'}<b>${profile.certificateImage ? '' : '+'}</b></button><h2>学历背景</h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-education">${profile.education} <span>›</span></button><h2>常用邮箱 <i>*</i></h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-email">${profile.email} <span>›</span></button><h2>手机号</h2><button class="teaching-select" data-action="open-teaching-sheet" data-sheet="teaching-phone">${profile.phone} <span>›</span></button></section></main><button class="teaching-submit" data-action="finish-teaching-info">确认提交</button>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}${renderTeachingInfoSheet()}</div>`;
}

function renderTimeManagement() {
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dates = ['', '', '', '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
  const slots = Array.from({ length: 30 }, (_, index) => `${String(Math.floor(index / 2)).padStart(2,'0')}:${index % 2 ? '30' : '00'}`);
  return `<div class="screen time-page"><header class="creator-form-nav">${systemStatus('creator-status creator-form-status')}<div class="creator-nav-row">${creatorBack()}<strong>时间管理</strong><button class="time-settings" data-action="creator-toast">⎔</button></div></header><main class="time-scroll"><section class="calendar-card"><div class="calendar-top"><button data-action="creator-toast">‹</button><b>2026/9</b><button data-action="creator-toast">›</button><span><button data-action="creator-toast">批量关课</button><button data-action="creator-toast">批量开课</button></span></div><div class="calendar-week">${days.map((day) => `<b>${day}</b>`).join('')}</div><div class="calendar-days">${dates.map((day) => `<button data-action="creator-toast" class="${day === '2' ? 'selected' : ''}">${day}</button>`).join('')}</div></section><button class="open-all" data-action="open-all-slots">全部打开</button><section class="time-grid">${slots.map((slot) => `<button data-action="toggle-slot"><b>${slot}</b><small>Closed</small></button>`).join('')}</section></main><button class="save-time" data-action="save-time">保存时间表</button>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderStudentMyCourses() {
  const purchasedOffline = studentPurchasedOfflineCourses();
  const pendingInPerson = purchasedOffline.reduce((total, course) => total + course.remainingSessions, 0);
  const cards = [
    ['foreign', '外教口语课', '#eef2ff', '78', '34'],
    ['partner', '语伴畅聊', '#fff0e3', '1', '4'],
    ['group', '英语精选语伴', '#edf8f8', '', ''],
    ['live', '热门主播课', '#eef2ff', '0', '1'],
    ['group', '日语精选语伴', '#edf8f8', '', ''],
    ['group', '韩语精选语伴', '#edf8f8', '', '']
  ];
  const icon = (kind) => kind === 'foreign' ? studentMeIcon('foreign') : kind === 'partner' ? '<svg viewBox="0 0 42 42"><path d="M9 7h24v20a7 7 0 0 1-7 7H17l-6 5v-5h-2a7 7 0 0 1-7-7V14a7 7 0 0 1 7-7Z" fill="#ff8230"/><text x="10" y="25" fill="#fff" font-size="14" font-weight="900">HI</text></svg>' : kind === 'live' ? '<svg viewBox="0 0 42 42"><rect x="7" y="10" width="28" height="25" rx="7" fill="#4296f7"/><path d="M17 18l10 5-10 5Z" fill="#fff"/><path d="M21 6v5m-5-2 2 3m8-3-2 3" stroke="#4296f7" stroke-width="2.5" stroke-linecap="round"/></svg>' : '<svg viewBox="0 0 42 42"><circle cx="16" cy="17" r="6" fill="#00868a"/><circle cx="27" cy="17" r="6" fill="#00868a"/><path d="M5 34c1-7 8-10 12-10s11 3 12 10H5Zm13 0c1-7 7-10 12-10s10 3 11 10H18Z" fill="#00868a"/></svg>';
  return `<div class="screen student-course-page">${systemStatus('student-status')}<header class="student-course-nav"><button data-action="back-student-courses" aria-label="返回">‹</button><strong>我的课程</strong><span></span></header><main class="student-course-scroll"><button class="student-course-summary student-inperson-summary" data-action="open-student-inperson-sheet" style="--student-course-bg:#f1ebff"><i class="inperson"><svg viewBox="0 0 42 42" aria-hidden="true"><path d="m5 18 16-10 16 10-16 10L5 18Z" fill="#6f4de9"/><path d="M11 22v10c5 4 15 4 20 0V22" fill="none" stroke="#6f4de9" stroke-width="3" stroke-linecap="round"/><path d="M37 18v11" fill="none" stroke="#6f4de9" stroke-width="3" stroke-linecap="round"/></svg></i><b>面授课程</b><em>›</em><div class="student-course-counts single"><span><strong>${pendingInPerson}</strong>待上课</span></div></button>${cards.map(([kind, title, color, active, booking]) => `<button class="student-course-summary" data-action="student-toast" style="--student-course-bg:${color}"><i class="${kind}">${icon(kind)}</i><b>${title}</b><em>›</em>${active ? `<div class="student-course-counts"><span><strong>${active}</strong>待上课</span><i></i><span><strong>${booking}</strong>待预约</span></div>` : '<small>学习记录</small>'}</button>`).join('')}<article class="student-course-promo"><i>IT</i><div><b>HelloItalian</b><span>适合语言等级：A1-B2</span><em>9个主题　 134节课</em></div><button data-action="student-toast">立即学习</button></article></main>${state.studentInPersonSheet ? renderStudentInPersonSheet(purchasedOffline) : ''}${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function studentPurchasedOfflineCourses() {
  const teacher = teachers.find((item) => item.id === 'sarah');
  return teacherCourses(teacher).filter((course) => course.format === 'offline' && course.live).map((course) => {
    const totalSessions = course.pack?.sessions || Number(course.sessions) || 1;
    const attendedSessions = state.studentInPersonAttendance[course.id] || 0;
    return { ...course, remainingSessions: Math.max(0, totalSessions - attendedSessions) };
  });
}

function renderStudentInPersonSheet(courses) {
  const checkinCourse = courses.find((course) => course.id === state.studentCheckinCourseId);
  const completed = state.studentCompletedClasses;
  const pendingCourses = courses.filter((course) => course.remainingSessions > 0);
  const isPending = state.studentInPersonTab === 'pending';
  const pendingContent = `<p>共 ${pendingCourses.reduce((total, course) => total + course.remainingSessions, 0)} 节待上课</p>${pendingCourses.length ? `<div class="student-inperson-list">${pendingCourses.map((course) => `<article class="student-inperson-card"><div class="student-inperson-card-main"><b>${course.title}</b><p>${courseIcon('mic')}${course.language}　${courseIcon('clock')}${course.duration}</p><small>剩余 ${course.remainingSessions} 节 · ${course.schedule}</small><div class="student-inperson-actions"><button class="student-inperson-checkin" data-action="request-student-checkin" data-course="${course.id}">签到</button><button class="student-inperson-contact" data-action="contact-teacher">联系</button></div></div><img src="${course.cover}" alt="${course.title}课程封面"/><footer>可选地点：${course.venues.map((venue) => venue.venue).join('、')}</footer></article>`).join('')}</div>` : `<div class="student-completed-empty"><b>暂无待上课程</b><span>已完成的课程可在「已上课」中查看</span></div>`}`;
  const completedContent = completed.length ? `<p>共 ${completed.length} 节已上课</p><div class="student-completed-list">${completed.map((item) => `<article class="student-completed-card"><div class="student-completed-card-head"><b>${item.title}</b><small>已完成</small></div><div class="student-completed-teacher"><span class="mini-avatar photo-${item.teacherPhoto}"></span><b>${item.teacherName}</b><span>·</span><em>${item.language}</em></div><p>上课时间：${item.time}</p><div><button data-action="rate-student-course" data-course="${item.courseId}" ${state.studentRatedCourses[item.courseId] ? 'disabled' : ''}>${state.studentRatedCourses[item.courseId] ? '已评价' : '评价'}</button><button data-action="contact-teacher">联系</button></div></article>`).join('')}</div>` : `<div class="student-completed-empty"><b>暂无已上课程</b><span>完成签到后，课程记录会展示在这里</span></div>`;
  return `<div class="student-inperson-layer"><button class="student-inperson-scrim" data-action="close-student-inperson-sheet" aria-label="关闭"></button><section class="student-inperson-sheet" aria-label="已购面授课程"><div class="student-inperson-handle"></div><header><strong>已购面授课程</strong><button data-action="close-student-inperson-sheet" aria-label="关闭">×</button></header><div class="student-inperson-tabs"><button class="${isPending ? 'active' : ''}" data-action="select-student-inperson-tab" data-tab="pending">待上课</button><button class="${isPending ? '' : 'active'}" data-action="select-student-inperson-tab" data-tab="completed">已上课</button></div>${isPending ? pendingContent : completedContent}</section>${checkinCourse ? renderStudentCheckinConfirm(checkinCourse) : ''}</div>`;
}

function renderStudentCheckinConfirm(course) {
  return `<div class="student-checkin-confirm" role="dialog" aria-modal="true" aria-label="签到确认"><section><strong>确认签到？</strong><p>签到后将扣减「${course.title}」1 节课时，剩余 ${Math.max(0, course.remainingSessions - 1)} 节。</p><div><button data-action="cancel-student-checkin">取消</button><button data-action="confirm-student-checkin">确认签到</button></div></section></div>`;
}

function renderStudentCourseReview() {
  const course = state.studentCompletedClasses.find((item) => item.courseId === state.studentReviewCourseId) || state.studentCompletedClasses[0];
  const ratings = ['😎', '😎', '😎', '😎', '😎'];
  return `<div class="screen student-review-page"><div class="student-review-blue">${systemStatus('student-review-status')}<button class="student-review-back" data-action="back-student-review" aria-label="返回">‹</button><div class="student-review-illustration"><span>😊</span><i>◢</i><i>◣</i></div></div><main class="student-review-sheet"><p class="student-review-course">${course ? course.title : '面授课程'} · ${course ? course.teacherName : 'Sarah'}</p><h1>你觉得本节课的收获如何？</h1><section class="student-review-rating">${ratings.map((emoji, index) => `<button class="${state.studentRating === index + 1 ? 'selected' : ''}" data-action="select-student-rating" data-rating="${index + 1}" aria-label="${index + 1}星评价">${emoji}</button>`).join('')}</section><h2>写下你对本节课的评价吧！</h2><textarea placeholder="分享一下你的学习收获，帮助老师持续改进"></textarea><button class="student-review-submit" data-action="submit-student-review">提交反馈</button><button class="student-review-share" data-action="share-student-review">🎁 提交并分享</button></main>${state.toast ? `<div class="toast">${state.toast}</div>` : ''}</div>`;
}

function renderCreatorRoute() {
  if (state.myIdentity === 'student') return state.studentReviewCourseId ? renderStudentCourseReview() : state.studentCoursePage ? renderStudentMyCourses() : renderStudentCenter();
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
  else if (state.profileRoute === 'intro-video') app.innerHTML = renderIntroVideo();
  else if (state.profileRoute === 'booking') app.innerHTML = renderBooking();
  else app.innerHTML = renderProfile();
  if (state.profileId && state.profileRoute === 'profile' && state.profileScrollTop > 0) {
    const profileScroll = app.querySelector('.profile-scroll');
    if (profileScroll) profileScroll.scrollTop = state.profileScrollTop;
    state.profileScrollTop = 0;
  }
  if (!state.profileId && state.rootPage === 'mine' && state.myRoute === 'create' && state.creatorScrollTop > 0) {
    const creatorScroll = app.querySelector('.creator-form-scroll');
    if (creatorScroll) creatorScroll.scrollTop = state.creatorScrollTop;
  }
  localizeDemoUI();
  const singleCourseMeta = app.querySelector('.course-card-summary--single .course-meta');
  if (singleCourseMeta) {
    const metaLines = singleCourseMeta.querySelectorAll('.course-meta-line');
    const languageLine = metaLines[0];
    const durationLine = metaLines[1];
    const firstPurchaseBadge = singleCourseMeta.querySelector('.first-purchase-badge');
    if (languageLine && durationLine) {
      const duration = durationLine.querySelector('em');
      if (duration) languageLine.append(duration);
      durationLine.remove();
    }
    if (languageLine && firstPurchaseBadge) {
      const promotionLine = document.createElement('p');
      promotionLine.className = 'course-meta-promo';
      promotionLine.append(firstPurchaseBadge);
      languageLine.after(promotionLine);
    }
  }
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
  if (state.consoleMode === 'map') {
    title = '地图筛选与城市';
    parameters = `<label>当前城市<select data-console-field="mapCity">${cityOptions}</select></label><label>课程语言<select data-console-field="mapLanguage">${options(['全部', '中文', '英语', '日语', '韩语'], state.mapLanguage)}</select></label><label>可约时间<select data-console-field="mapFilter">${options(['全部', '今天可约', '本周有课'], state.mapFilter)}</select></label>`;
    const count = venueRows(state.mapCity).length;
    expected = count ? `当前城市展示 ${count} 个课程地点；支持按课程语言和可约时间筛选。` : `当前城市不展示空点位；显示“${state.mapCity} 暂无相关课程”及其他有课城市入口。`;
  } else if (state.consoleMode === 'teacher-map') {
    title = '老师聚焦地图';
    const teacher = teachers.find((item) => item.id === state.mapTeacherId);
    const count = venueRows(state.mapCity).length;
    parameters = `<div class="console-metric"><span>当前老师<b>${teacher?.name || '未选择'}</b></span><span>当前城市<b>${state.mapCity}</b></span><span>课程地点<b>${count} 个</b></span><span>全局筛选<b>不继承</b></span></div>`;
    expected = `${teacher?.name || '该老师'} 的 Profile 地图仅展示其在 ${state.mapCity} 的在售线下课程与地点；不显示城市切换、时间/语言筛选或其他老师课程。`;
  } else if (state.consoleMode === 'booking') {
    title = '预约与支付';
    parameters = `<label>教师<select data-console-field="profileId">${options(['sarah', 'david', 'yuki', 'minji', 'lucas'], state.profileId || 'sarah')}</select></label><label>预约日期<select data-console-field="selectedDate">${options(['今天', '周六', '周日'], state.selectedDate)}</select></label><label>预约时段<select data-console-field="selectedSlot">${options(['19:00', '14:00', '10:00'], state.selectedSlot)}</select></label><label>支付方式<select data-console-field="paymentMethod">${options(['支付宝', '微信'], state.paymentMethod)}</select></label>`;
    expected = `课程详情显示可选地点；点击立即预约后，以 ${state.paymentMethod} 为默认选中项打开支付半窗。`;
  } else if (state.consoleMode === 'intro-video') {
    title = '老师介绍视频';
    parameters = `<div class="console-metric"><span>视频来源<b>老师上传</b></span><span>播放权限<b>免费</b></span><span>当前页面<b>${state.profileRoute === 'intro-video' ? '视频页' : '老师 Profile'}</b></span></div>`;
    expected = state.profileRoute === 'intro-video' ? '介绍视频可直接播放，无需购买或支付。' : '从老师 Profile 点击介绍视频卡片，直接进入视频播放页。';
  } else if (state.consoleMode === 'creator') {
    title = '线下课程、时段与地点';
    const salesMode = state.courseSalesMode || 'none';
    const salesModeLabel = { none: '按单节原价', first: '首购优惠', pack: '课包售卖' }[salesMode];
    const finalSaleLabel = salesMode === 'pack'
      ? state.coursePackSessions && state.coursePackPrice ? `${state.coursePackSessions} 节 ¥${state.coursePackPrice}` : '待设置'
      : salesMode === 'first'
        ? state.courseFirstDiscount ? `¥${state.courseFirstDiscount}` : '待设置'
        : state.coursePrice ? `¥${state.coursePrice}/节` : '待设置';
    const availabilityLabel = state.courseAvailability.length ? `${state.courseAvailability.length} 个时段` : '未设置';
    parameters = `<label>我的课程<select data-console-field="creatorCourseState">${options(['有课程', '暂无课程'], state.creatorCourseState)}</select></label><label>课程所在城市<select data-console-field="creatorCity">${cityOptions}</select></label><div class="console-metric"><span>我的课程<b>${state.creatorCourseState}</b></span><span>课程字段<b>${creatorMissingFields().length ? `待补 ${creatorMissingFields().length} 项` : '可提交'}</b></span><span>可选地点<b>${state.courseVenues.length}/3 处</b></span><span>可授课时段<b>${availabilityLabel}</b></span><span>售卖方案<b>${salesModeLabel}</b></span><span>实际售价<b>${finalSaleLabel}</b></span></div>`;
    expected = state.creatorCourseState === '暂无课程' ? '“我的课程”展示空状态，保留创建新课入口；不展示课程分类和在售/下架列表。' : state.creatorPlacePage ? `已进入地点搜索，保留“咖啡”的搜索记录与最近搜索；用户可继续搜索并选择地点。` : `线下课程最多可选 3 个地点，且至少设置 1 个每日可授课时段；预约页仅展示老师设置的时段。`;
  } else if (state.consoleMode === 'student') {
    title = '学生端我的页面';
    parameters = `<label>进入身份<select data-console-field="myIdentity">${options(['student', 'teacher'], state.myIdentity)}</select></label><div class="console-metric"><span>用户资料<b>已展示</b></span><span>权益入口<b>VIP</b></span><span>动态入口<b>可查看</b></span><span>当前身份<b>学生</b></span></div>`;
    expected = '选择学生身份后，底部“我”进入 HT 原生层级的个人页：资料、VIP 权益、动态与底部导航；不展示老师创建、授课管理与收入入口。';
  } else {
    const count = eligibleTeachers(state.city).length;
    parameters = `<label>用户所在城市<select data-console-field="city">${cityOptions}</select></label><div class="console-metric"><span>符合条件老师<b>${count} 位</b></span><span>模块状态<b>${count >= 4 ? '展示' : '不展示'}</b></span></div>`;
    expected = count >= 4 ? `该城市满足“认证面授老师 + 已开设线下课程 + 数量 ≥ 4”，在语言 Tab 下方展示面授老师模块。` : `该城市老师数不足 4，模块不占位，语伴列表直接承接语言 Tab。`;
  }
  if (name) name.textContent = state.consoleScenario || title;
  if (parameterSurface) parameterSurface.innerHTML = parameters;
  if (expectation) expectation.innerHTML = `<b>预期结果</b><span>${expected}</span>`;
  localizeConsoleUI();
}

function saveCreatorScroll() {
  const creatorScroll = app.querySelector('.creator-form-scroll');
  if (creatorScroll) state.creatorScrollTop = creatorScroll.scrollTop;
}

function creatorMissingFields() {
  const fields = [];
  if (!state.courseTitle.trim()) fields.push('课程标题');
  if (!state.courseLanguage) fields.push('课程语言');
  if (!state.courseDuration) fields.push('课程时长');
  if (!state.courseSessions) fields.push('课程次数');
  if (!(Number(state.coursePrice) > 0)) fields.push('有效课程单价');
  if (!state.courseVenues.length) fields.push('至少 1 个可选地点');
  if (!state.courseAvailability.length) fields.push('至少 1 个可授课时段');
  return fields;
}

function creatorPriceValidationMessage() {

  const originalPrice = Number(state.coursePrice);
  const salesMode = state.courseSalesMode || 'none';
  if (salesMode === 'first') {
    const firstPrice = Number(state.courseFirstDiscount);
    if (!(firstPrice > 0)) return '请设置首购最终售价';
    if (!(originalPrice > firstPrice)) return '单节原价需高于首购实际售价，请重新设置';
  }
  if (salesMode === 'pack') {
    const sessions = Number(state.coursePackSessions);
    const packagePrice = Number(state.coursePackPrice);
    if (!(sessions > 0) || !(packagePrice > 0)) return '请设置课包节数和最终售价';
    if (!(originalPrice > packagePrice / sessions)) return '单节原价需高于课包实际单节售价，请重新设置';
  }
  return '';
}

function bindEvents() {
  app.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', (event) => {
    const action = event.currentTarget.dataset.action;
    if (action === 'open-sheet') { state.sheet = true; state.mapTeacherId = null; state.activeVenue = null; }
    if (action === 'close-sheet') { state.sheet = false; state.cityMenu = false; state.sheetCityMenu = false; state.mapTeacherId = null; state.activeVenue = null; }
    if (action === 'sheet-city-menu') state.sheetCityMenu = !state.sheetCityMenu;
    if (action === 'select-city') { state.mapCity = event.currentTarget.dataset.city; state.sheetCityMenu = false; state.activeVenue = null; state.mapTeacherId = null; }
    if (action === 'select-search-city') { state.mapCity = event.currentTarget.dataset.city; state.sheetCityMenu = false; state.activeVenue = null; state.mapTeacherId = null; }
    if (action === 'profile') {
      openTeacherProfile(event.currentTarget.dataset.id);
      return;
    }
    if (action === 'profile-course-next' || action === 'profile-course-prev') {
      const courses = teacherCourses(teacherForProfile());
      const index = Math.max(0, courses.findIndex((course) => course.id === state.selectedCourse));
      const nextIndex = (index + (action === 'profile-course-next' ? 1 : -1) + courses.length) % courses.length;
      state.selectedCourse = courses[nextIndex].id;
      state.selectedVenue = courses[nextIndex].venues[0]?.venue || '';
    }
    if (action === 'select-profile-course-page') {
      const scrollTop = app.querySelector('.profile-scroll')?.scrollTop || 0;
      const course = teacherCourses(teacherForProfile()).find((item) => item.id === event.currentTarget.dataset.course);
      state.selectedCourse = course?.id || state.selectedCourse;
      state.selectedVenue = course?.venues[0]?.venue || '';
      state.courseSlideDirection = 'jump';
      render();
      const profileScroll = app.querySelector('.profile-scroll');
      if (profileScroll) profileScroll.scrollTop = scrollTop;
      state.courseSlideDirection = '';
      return;
    }
    if (action === 'back-profile') { state.profileId = null; state.profilePhotoIndex = null; state.coursePicker = false; }
    if (action === 'language') state.activeLanguage = event.currentTarget.dataset.language;
    if (action === 'map-filter') { state.mapFilter = event.currentTarget.dataset.filter; refreshMapResults(); return; }
    if (action === 'map-language') { state.mapLanguage = event.currentTarget.dataset.language; refreshMapResults(); return; }
    if (action === 'select-venue') { state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'select-teacher-course-venue') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = event.currentTarget.dataset.venue; state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'select-global-course-venue') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = event.currentTarget.dataset.venue; state.activeVenue = event.currentTarget.dataset.venue; refreshMapResults(); return; }
    if (action === 'open-course-from-map') { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = state.activeVenue || selectedCourse().venues[0]?.venue || ''; state.sheet = false; state.profileRoute = 'course-detail'; }
    if (action === 'open-venue-map') {
      event.preventDefault();
      event.stopPropagation();
      state.mapCity = state.city;
      state.mapTeacherId = event.currentTarget.dataset.id;
      state.selectedVenue = event.currentTarget.dataset.venue;
      state.activeVenue = event.currentTarget.dataset.venue;
      state.mapFilter = '全部';
      state.mapLanguage = '全部';
      state.sheetCityMenu = false;
      state.sheet = true;
      render();
      return;
    }
    if (action === 'open-teacher-certification') { state.toast = '认证面授老师：已完成平台教师认证，可开设线下面授课程'; setTimeout(() => { state.toast = ''; render(); }, 2400); }
    if (action === 'student-toast') { state.toast = '该学生端入口已保留'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-student-courses') { state.studentCoursePage = true; render(); return; }
    if (action === 'back-student-courses') { state.studentCoursePage = false; render(); return; }
    if (action === 'open-student-inperson-sheet') { state.studentInPersonSheet = true; state.studentInPersonTab = 'pending'; render(); return; }
    if (action === 'close-student-inperson-sheet') { state.studentInPersonSheet = false; state.studentInPersonTab = 'pending'; state.studentCheckinCourseId = ''; render(); return; }
    if (action === 'select-student-inperson-tab') { state.studentInPersonTab = event.currentTarget.dataset.tab; render(); return; }
    if (action === 'request-student-checkin') { state.studentCheckinCourseId = event.currentTarget.dataset.course; render(); return; }
    if (action === 'cancel-student-checkin') { state.studentCheckinCourseId = ''; render(); return; }
    if (action === 'rate-student-course') { state.studentReviewCourseId = event.currentTarget.dataset.course; state.studentRating = 0; render(); return; }
    if (action === 'back-student-review') { state.studentReviewCourseId = ''; state.studentCoursePage = true; state.studentInPersonSheet = true; state.studentInPersonTab = 'completed'; render(); return; }
    if (action === 'select-student-rating') { state.studentRating = Number(event.currentTarget.dataset.rating); render(); return; }
    if (action === 'submit-student-review' || action === 'share-student-review') { state.studentRatedCourses[state.studentReviewCourseId] = true; state.toast = action === 'share-student-review' ? '已提交评价并分享' : '已提交课程评价'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'confirm-student-checkin') {
      const course = studentPurchasedOfflineCourses().find((item) => item.id === state.studentCheckinCourseId);
      if (!course || !course.remainingSessions) { state.studentCheckinCourseId = ''; render(); return; }
      state.studentInPersonAttendance[course.id] = (state.studentInPersonAttendance[course.id] || 0) + 1;
      const teacher = teachers.find((item) => item.id === 'sarah');
      const completedIndex = state.studentCompletedClasses.filter((item) => item.courseId === course.id).length;
      const classTimes = course.id === 'weekend' ? ['2026年9月28日 10:00–11:00', '2026年9月21日 10:00–11:00'] : ['2026年9月30日 14:00–14:50'];
      state.studentCompletedClasses.unshift({ courseId: course.id, title: course.title, teacherName: teacher.name, teacherPhoto: teacher.photo, language: course.language, time: classTimes[completedIndex] || classTimes[classTimes.length - 1] });
      state.studentCheckinCourseId = '';
      state.toast = `${course.title} 已签到，剩余 ${course.remainingSessions - 1} 节`;
      setTimeout(() => { state.toast = ''; render(); }, 1800);
      render();
      return;
    }
    if (action === 'clear-map-teacher') { state.mapTeacherId = null; state.activeVenue = null; render(); return; }
    if (action === 'hi') { state.toast = '已向对方打招呼'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'tab-root') { const tab = event.currentTarget.dataset.tab; if (tab === '找语伴') state.rootPage = 'partner'; else if (tab === '动态') state.rootPage = 'moments'; else if (tab === '我') { state.rootPage = 'mine'; state.myRoute = 'courses'; } else { state.toast = `${tab} 页面暂未纳入本次 Demo`; setTimeout(() => { state.toast = ''; render(); }, 1800); } }
    if (action === 'my-back') {
      if (state.myRoute === 'teaching-info') state.myRoute = state.teachingInfoOrigin;
      else if (state.myRoute === 'create' || state.myRoute === 'time') state.myRoute = 'courses';
      else { state.rootPage = 'partner'; state.myRoute = 'courses'; }
    }
    if (action === 'create-course') { resetCourseDraft(); state.myRoute = 'create'; state.creatorScrollTop = 0; }
    if (action === 'open-course-delivery') { state.creatorSheet = 'delivery'; render(); return; }
    if (action === 'close-course-delivery') { state.creatorSheet = ''; state.courseDeliverySheet = false; render(); return; }
    if (action === 'select-course-delivery') { state.courseDelivery = event.currentTarget.dataset.delivery; state.creatorSheet = ''; state.courseDeliverySheet = false; if (state.courseDelivery === '线上课程') state.courseVenues = []; render(); return; }
    if (action === 'open-creator-sheet') { saveCreatorScroll(); state.creatorSheet = event.currentTarget.dataset.sheet; render(); return; }
    if (action === 'open-creator-place') { state.creatorPlacePage = true; state.creatorVenueQuery = ''; state.creatorVenueResults = []; render(); return; }
    if (action === 'close-creator-place') { state.creatorPlacePage = false; render(); return; }
    if (action === 'clear-creator-places') { state.courseVenues = []; render(); return; }
    if (action === 'clear-creator-place-history') { state.creatorPlaceHistory = state.creatorPlaceHistory.filter((place) => place.city !== state.creatorCity); render(); return; }
    if (action === 'close-creator-sheet') { saveCreatorScroll(); state.creatorSheet = ''; state.courseDeliverySheet = false; render(); return; }
    if (action === 'add-course-availability') {
      saveCreatorScroll();
      state.courseAvailability = [...state.courseAvailability, nextAvailabilitySlot()];
      render();
      return;
    }
    if (action === 'remove-course-availability') {
      saveCreatorScroll();
      const index = Number(event.currentTarget.dataset.index);
      state.courseAvailability = state.courseAvailability.filter((_, itemIndex) => itemIndex !== index);
      render();
      return;
    }
    if (action === 'toggle-availability-day') {
      saveCreatorScroll();
      const index = Number(event.currentTarget.dataset.index);
      const day = Number(event.currentTarget.dataset.day);
      const slot = availabilitySlot(state.courseAvailability[index]);
      const days = slot.days.includes(day) ? slot.days.filter((item) => item !== day) : [...slot.days, day].sort((a, b) => a - b);
      if (!days.length) {
        state.toast = '至少选择一天';
        render();
        setTimeout(() => { state.toast = ''; render(); }, 1800);
        return;
      }
      if (availabilityConflicts(index, days, slot.start, slot.end)) {
        state.toast = '同一天的时段不能重叠';
        render();
        setTimeout(() => { state.toast = ''; render(); }, 1800);
        return;
      }
      state.courseAvailability[index] = formatAvailabilitySlot(days, slot.start, slot.end);
      render();
      return;
    }
    if (action === 'select-creator-option') {
      saveCreatorScroll();
      const { field, value } = event.currentTarget.dataset;
      if (field === 'format') { state.courseFormat = 'offline'; state.courseDelivery = '线下课程'; state.creatorSheet = ''; }
      else if (field === 'delivery') { state.courseDelivery = value; if (value === '线上课程') state.courseVenues = []; state.creatorSheet = ''; }
      else if (field === 'sales-mode') {
        state.courseSalesMode = value;
        if (value !== 'pack') { state.coursePackSessions = ''; state.coursePackPrice = ''; }
        if (value !== 'first') state.courseFirstDiscount = '';
        state.creatorSheet = '';
      }
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
    if (action === 'submit-course') {
      const missing = creatorMissingFields();
      if (missing.length) {
        state.toast = `请先填写：${missing.join('、')}`;
        setTimeout(() => { state.toast = ''; render(); }, 2400);
      } else if (creatorPriceValidationMessage()) {
        state.toast = creatorPriceValidationMessage();
        setTimeout(() => { state.toast = ''; render(); }, 2400);
      } else if (state.editingCourseId) {
        state.editingCourseId = '';
        state.myRoute = 'courses';
        state.toast = '课程已保存';
        setTimeout(() => { state.toast = ''; render(); }, 1800);
      } else { state.teachingInfoOrigin = 'create'; state.myRoute = 'teaching-info'; }
    }
    if (action === 'unpublish-course') {
      if (state.editingCourseId) state.courseLifecycle[state.editingCourseId] = 'offline';
      state.editingCourseId = '';
      state.myRoute = 'courses';
      state.toast = '课程已下架';
      setTimeout(() => { state.toast = ''; render(); }, 1800);
    }
    if (action === 'confirm-delete-course') {
      if (state.editingCourseId) state.courseLifecycle[state.editingCourseId] = 'deleted';
      state.creatorSheet = '';
      state.editingCourseId = '';
      state.myRoute = 'courses';
      state.toast = '课程已删除';
      setTimeout(() => { state.toast = ''; render(); }, 1800);
    }
    if (action === 'relist-course') {
      state.courseLifecycle[event.currentTarget.dataset.courseId] = 'live';
      state.toast = '课程已重新上架';
      setTimeout(() => { state.toast = ''; render(); }, 1800);
    }
    if (action === 'set-course-filter') {
      state.courseManageType = event.currentTarget.dataset.filter;
      const currentScrollTop = app.querySelector('.creator-scroll')?.scrollTop || 0;
      render();
      const restoredCreatorScroll = app.querySelector('.creator-scroll');
      if (restoredCreatorScroll) restoredCreatorScroll.scrollTop = currentScrollTop;
      return;
    }
    if (action === 'prepare-delete-course') {
      state.editingCourseId = event.currentTarget.dataset.courseId;
      state.creatorSheet = 'delete-course';
      render();
      return;
    }
    if (action === 'manage-time') state.myRoute = 'time';
    if (action === 'manage-courses') { state.myRoute = 'courses'; state.toast = '当前展示全部在售与下架课程'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'edit-course') {
      openCourseEditor(event.currentTarget.dataset.courseId, event.currentTarget.dataset.courseTitle);
      render();
      return;
    }
    if (action === 'open-teaching-info') { state.teachingInfoOrigin = 'courses'; state.myRoute = 'teaching-info'; }
    if (action === 'open-teaching-sheet') { state.creatorSheet = event.currentTarget.dataset.sheet; render(); return; }
    if (action === 'close-teaching-sheet') { state.creatorSheet = ''; render(); return; }
    if (action === 'select-teaching-value') { const { field, value } = event.currentTarget.dataset; const key = { 'teaching-language': 'language', 'teaching-intro': 'intro', 'teaching-materials': 'materials', 'teaching-certificate': 'certificate', 'teaching-education': 'education', 'teaching-email': 'email', 'teaching-phone': 'phone' }[field]; state.teacherProfile[key] = value; state.creatorSheet = ''; render(); return; }
    if (action === 'toggle-teaching-type') { const value = event.currentTarget.dataset.value; if (state.teacherProfile.types.includes(value)) state.teacherProfile.types = state.teacherProfile.types.filter((type) => type !== value); else if (state.teacherProfile.types.length < 3) state.teacherProfile.types = [...state.teacherProfile.types, value]; else { state.toast = '最多选择 3 个教学类型'; setTimeout(() => { state.toast = ''; render(); }, 1800); } render(); return; }
    if (action === 'toggle-teaching-speaking') { const value = event.currentTarget.dataset.value; if (state.teacherProfile.alsoSpeakList.includes(value)) state.teacherProfile.alsoSpeakList = state.teacherProfile.alsoSpeakList.filter((language) => language !== value); else if (state.teacherProfile.alsoSpeakList.length < 3) state.teacherProfile.alsoSpeakList = [...state.teacherProfile.alsoSpeakList, value]; else { state.toast = '最多选择 3 种语言'; setTimeout(() => { state.toast = ''; render(); }, 1800); } render(); return; }
    if (action === 'rotate-teaching-photos') { state.teacherProfile.photos = [...state.teacherProfile.photos.slice(1), state.teacherProfile.photos[0]]; state.toast = '已更新老师个人照片'; render(); setTimeout(() => { state.toast = ''; render(); }, 1500); return; }
    if (action === 'upload-certificate') { state.teacherProfile.certificateImage = true; state.toast = '证书图片已上传'; render(); setTimeout(() => { state.toast = ''; render(); }, 1500); return; }
    if (action === 'finish-teaching-info') { state.creatorSheet = ''; state.myRoute = 'courses'; state.toast = '教学信息已保存'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'toggle-slot') { const slot = event.currentTarget; slot.classList.toggle('opened'); slot.querySelector('small').textContent = slot.classList.contains('opened') ? 'Open' : 'Closed'; return; }
    if (action === 'open-all-slots') { app.querySelectorAll('.time-grid button').forEach((slot) => { slot.classList.add('opened'); slot.querySelector('small').textContent = 'Open'; }); return; }
    if (action === 'save-time') { state.toast = '时间表已保存'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'creator-toast') { state.toast = '该功能已保留入口'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-post-course') { state.profileId = 'sarah'; state.profileRoute = 'course-detail'; state.courseOrigin = 'moments'; state.selectedCourse = 'conversation'; state.selectedVenue = teacherCourses(teachers.find((item) => item.id === 'sarah'))[0].venues[0]?.venue || ''; }
    if (action === 'follow') { state.followed = !state.followed; state.toast = state.followed ? '已关注对方' : '已取消关注'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-profile-booking') {
      const courses = teacherCourses(teacherForProfile());
      state.courseOrigin = 'profile';
      if (courses.length > 1) state.coursePicker = true;
      else { state.selectedCourse = courses[0]?.id || state.selectedCourse; state.selectedVenue = courses[0]?.venues[0]?.venue || ''; state.profileRoute = 'course-detail'; }
    }
    if (action === 'close-profile-course-picker') { state.coursePicker = false; render(); return; }
    if (action === 'select-profile-course') {
      const course = teacherCourses(teacherForProfile()).find((item) => item.id === event.currentTarget.dataset.course);
      state.selectedCourse = course?.id || state.selectedCourse;
      state.selectedVenue = course?.venues[0]?.venue || '';
      state.coursePicker = false;
      state.courseOrigin = 'profile';
      state.profileRoute = 'course-detail';
    }
    if (action === 'consult-teacher') { state.toast = '已进入咨询'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'contact-teacher') { state.toast = '视为进入老师聊天页'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'wish') { state.toast = '已打开礼物面板'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'like-profile') { state.toast = '已点赞对方资料'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'profile-venue-prev') { const total = courseVenues(teacherForProfile()).length; state.profileVenueIndex = (state.profileVenueIndex - 1 + total) % total; }
    if (action === 'profile-venue-next') { const total = courseVenues(teacherForProfile()).length; state.profileVenueIndex = (state.profileVenueIndex + 1) % total; }
    if (action === 'profile-venue-select') state.profileVenueIndex = Number(event.currentTarget.dataset.index);
    if (action === 'copy-id') { state.toast = '用户 ID 已复制'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'translate-bio') { state.toast = '已翻译简介'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'tag') { state.toast = `已筛选相关兴趣`; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-post') { state.toast = '已打开动态详情'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-profile-more') state.profileMore = true;
    if (action === 'close-profile-more') state.profileMore = false;
    if (action === 'open-profile-photo') { state.profilePhotoIndex = Number(event.currentTarget.dataset.photoIndex); render(); return; }
    if (action === 'close-profile-photo') { state.profilePhotoIndex = null; render(); return; }
    if (action === 'profile-more-action') { state.profileMore = false; state.toast = event.currentTarget.dataset.label === '分享' ? '已打开分享面板' : `已执行：${event.currentTarget.dataset.label}`; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'profile-tab') {
      const currentScrollTop = app.querySelector('.profile-scroll')?.scrollTop || 0;
      state.profileTab = event.currentTarget.dataset.tab;
      render();
      const restoredProfileScroll = app.querySelector('.profile-scroll');
      if (restoredProfileScroll) restoredProfileScroll.scrollTop = currentScrollTop;
      return;
    }
    if (action === 'open-teacher-time') { state.profileScrollTop = app.querySelector('.profile-scroll')?.scrollTop || 0; state.courseOrigin = 'profile'; state.profileRoute = 'course-detail'; }
    if (action === 'open-course-list') { state.profileScrollTop = app.querySelector('.profile-scroll')?.scrollTop || 0; state.courseOrigin = 'profile'; state.profileRoute = 'course-list'; }
    if (action === 'filter-courses') state.courseFilter = event.currentTarget.dataset.filter;
    if (action === 'open-course-detail') { state.profileScrollTop = app.querySelector('.profile-scroll')?.scrollTop || 0; state.courseOrigin = 'profile'; if (event.currentTarget.dataset.course) { state.selectedCourse = event.currentTarget.dataset.course; state.selectedVenue = ''; } state.profileRoute = 'course-detail'; }
    if (action === 'select-course') { state.selectedCourse = event.currentTarget.dataset.course; state.courseOrigin = 'course-list'; state.profileRoute = 'course-detail'; }
    if (action === 'play-intro-video') { state.introVideoPlaying = true; state.profileRoute = 'intro-video'; }
    if (action === 'back-from-intro-video') { state.introVideoPlaying = false; state.profileRoute = 'profile'; }
    if (action === 'toggle-intro-video') state.introVideoPlaying = !state.introVideoPlaying;
    if (action === 'back-to-profile') { state.profileRoute = 'profile'; state.profileMore = false; }
    if (action === 'back-from-course-detail') { if (state.courseOrigin === 'moments') { state.profileId = null; state.rootPage = 'moments'; } else state.profileRoute = state.courseOrigin === 'course-list' ? 'course-list' : 'profile'; }
    if (action === 'back-to-course-detail') { state.profileRoute = 'course-detail'; state.bookingConfirmed = false; state.paymentSheet = false; }
    if (action === 'share-course') { state.toast = '已打开分享面板'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'course-info') { state.toast = '已展开课程说明'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'support') { state.toast = '已打开服务条款'; setTimeout(() => { state.toast = ''; render(); }, 1800); }
    if (action === 'open-booking') {
      const availability = bookingAvailability(selectedCourse());
      const firstDay = availability[0];
      state.selectedDate = firstDay?.label || '';
      state.selectedSlot = firstDay?.slots[0] || '';
      state.bookingConfirmed = false;
      state.profileRoute = 'booking';
      state.paymentSheet = false;
      state.paymentMethod = '支付宝';
    }
    if (action === 'select-course-venue') state.selectedVenue = event.currentTarget.dataset.venue;
    if (action === 'select-date') {
      state.selectedDate = event.currentTarget.dataset.date;
      const selectedDay = bookingAvailability(selectedCourse()).find((item) => item.label === state.selectedDate);
      state.selectedSlot = selectedDay?.slots[0] || '';
    }
    if (action === 'select-slot') state.selectedSlot = event.currentTarget.dataset.slot;
    if (action === 'close-payment') state.paymentSheet = false;
    if (action === 'select-payment') state.paymentMethod = event.currentTarget.dataset.method;
    if (action === 'confirm-payment') { state.paymentSheet = false; state.profileRoute = 'booking'; state.bookingConfirmed = true; }
    if (action === 'confirm-booking' && state.selectedSlot) state.paymentSheet = true;
    render();
  }));
  app.querySelectorAll('[data-creator-input]').forEach((input) => input.addEventListener('input', (event) => {
    const field = event.currentTarget.dataset.creatorInput;
    state[field] = event.currentTarget.value;
    if (field === 'courseFirstDiscount') {
      state.courseSalesMode = 'first';
      state.coursePackSessions = '';
      state.coursePackPrice = '';
    }
    if (field === 'coursePackSessions' || field === 'coursePackPrice') {
      state.courseSalesMode = 'pack';
      state.courseFirstDiscount = '';
    }
    syncCreatorConsole();
  }));
  app.querySelectorAll('[data-teaching-input]').forEach((input) => input.addEventListener('input', (event) => {
    state.teacherProfile[event.currentTarget.dataset.teachingInput] = event.currentTarget.value;
  }));
  app.querySelectorAll('[data-availability-index]').forEach((input) => input.addEventListener('change', (event) => {
    const index = Number(event.currentTarget.dataset.availabilityIndex);
    const part = event.currentTarget.dataset.availabilityPart;
    const slot = availabilitySlot(state.courseAvailability[index]);
    const start = part === 'start' ? event.currentTarget.value : slot.start;
    const end = part === 'end' ? event.currentTarget.value : slot.end;
    const error = !start || !end || start >= end
      ? '结束时间需晚于开始时间'
      : availabilityConflicts(index, slot.days, start, end)
        ? '同一天的时段不能重叠'
        : '';
    if (error) {
      saveCreatorScroll();
      state.toast = error;
      render();
      setTimeout(() => { state.toast = ''; render(); }, 1800);
      return;
    }
    state.courseAvailability[index] = formatAvailabilitySlot(slot.days, start, end);
    syncCreatorConsole();
  }));
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
  if (field === 'mapLanguage') { state.mapLanguage = value; state.sheet = true; }
  if (field === 'mapFilter') { state.mapFilter = value; state.sheet = true; }
  if (field === 'profileId') { state.profileId = value; state.profileRoute = 'course-detail'; state.rootPage = 'partner'; state.selectedCourse = 'conversation'; state.selectedVenue = teacherCourses(teacherForProfile())[0]?.venues[0]?.venue || ''; state.paymentSheet = true; }
  if (field === 'selectedDate') state.selectedDate = value;
  if (field === 'selectedSlot') state.selectedSlot = value;
  if (field === 'paymentMethod') state.paymentMethod = value;
  if (field === 'creatorCity') { state.creatorCity = value; state.courseVenues = []; state.creatorVenueQuery = ''; state.creatorVenueResults = []; }
  if (field === 'courseDelivery') { state.courseDelivery = value; if (value === '线上课程') state.courseVenues = []; }
  if (field === 'creatorCourseState') {
    state.creatorCourseState = value;
    if (value === '有课程') {
      state.courseLifecycle = {};
      state.courseManageType = 'offline';
    }
    state.rootPage = 'mine';
    state.myRoute = 'courses';
    state.creatorPlacePage = false;
    state.consoleMode = 'creator';
    state.consoleScenario = `我的课程 · ${value}`;
  }
  if (field === 'myIdentity') {
    state.myIdentity = value;
    state.studentCoursePage = false;
    state.studentInPersonSheet = false;
    state.studentInPersonTab = 'pending';
    state.studentCheckinCourseId = '';
    state.studentReviewCourseId = '';
    state.studentRating = 0;
    state.rootPage = 'mine';
    state.myRoute = 'courses';
    state.consoleMode = value === 'student' ? 'student' : 'creator';
    state.consoleScenario = value === 'student' ? '学生端 · 我的页面' : '老师端 · 我的课程';
  }
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
