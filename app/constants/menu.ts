/**
 * 네비게이션 메뉴 구조 정의
 */

export interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export const NAVIGATION_MENU: MenuItem[] = [
  {
    label: '게임구매',
    path: '/game-purchase',
    children: [
      { label: '구매 가능게임', path: '/game-purchase/available' },
      { label: '마감게임보기', path: '/game-purchase/closed' },
      { label: '게임일정', path: '/game-purchase/schedule' },
      { label: '적중결과', path: '/game-purchase/results' },
    ],
  },
  {
    label: '경기정보',
    path: '/game-info',
    children: [
      { label: 'LIVE 스코어', path: '/game-info/live-score' },
      { label: '축구', path: '/game-info/soccer' },
      { label: '야구', path: '/game-info/baseball' },
      { label: '농구', path: '/game-info/basketball' },
      { label: '배구', path: '/game-info/volleyball' },
      { label: '토토가이드', path: '/game-info/guide' },
    ],
  },
  {
    label: '토토카페',
    path: '/toto-cafe',
    children: [
      { label: '명예의전당', path: '/toto-cafe/hall-of-fame' },
      { label: '도전픽', path: '/toto-cafe/challenge-pick' },
      { label: '구매픽', path: '/toto-cafe/purchase-pick' },
      { label: '적중공유', path: '/toto-cafe/winning-share' },
      { label: '자유게시판', path: '/toto-cafe/free-board' },
      { label: '벳포인트', path: '/toto-cafe/bet-point' },
    ],
  },
  {
    label: '건전토토',
    path: '/sound-toto',
    children: [
      { label: '건전구매캠페인', path: '/sound-toto/campaign' },
      { label: '셀프 진단평가', path: '/sound-toto/self-diagnosis' },
      { label: '셀프 구매계획', path: '/sound-toto/self-purchase-plan' },
      { label: '셀프 휴식계획', path: '/sound-toto/self-rest-plan' },
      { label: '나의 건전상태', path: '/sound-toto/my-status' },
      { label: '건전구매 가이드', path: '/sound-toto/purchase-guide' },
      { label: '건전이용 가이드', path: '/sound-toto/usage-guide' },
    ],
  },
  {
    label: '고객센터',
    path: '/customer-center',
    children: [
      { label: '공지사항', path: '/customer-center/notice' },
      { label: 'FAQ', path: '/customer-center/faq' },
      { label: '이벤트/벳볼', path: '/customer-center/event' },
      { label: '1:1문의', path: '/customer-center/inquiry' },
      { label: '환급계산기', path: '/customer-center/calculator' },
      { label: '판매점찾기', path: '/customer-center/store' },
      { label: '이용약관', path: '/customer-center/terms' },
      { label: '운영정책', path: '/customer-center/policy' },
      { label: '개인정보처리방침', path: '/customer-center/privacy' },
      { label: '불법스포츠토토신고', path: '/customer-center/report' },
    ],
  },
];

