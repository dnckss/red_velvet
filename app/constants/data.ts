/**
 * 샘플 데이터 상수
 * 실제로는 API에서 가져올 데이터
 */

import { DateTab, GameMatch, GameSchedule, NoticeItem, AvailableGame } from '../types';

export const DATE_TABS: DateTab[] = [
  { date: '12.06', day: '토', isActive: false },
  { date: '12.07', day: '일', isActive: false },
  { date: '12.08', day: '월', isActive: false },
  { date: '12.09', day: '화', isActive: true },
  { date: '12.10', day: '수', isActive: false },
  { date: '12.11', day: '목', isActive: false },
  { date: '12.12', day: '금', isActive: false },
];

export const GAME_SCHEDULES: GameSchedule[] = [
  { id: '1', category: 'NBA', time: '09:00', homeTeam: '인디페이', awayTeam: '새크킹스' },
  { id: '2', category: 'NBA', time: '09:30', homeTeam: '미네울브', awayTeam: '피닉선즈' },
  { id: '3', category: 'NBA', time: '10:00', homeTeam: '뉴올펠리', awayTeam: '샌안스퍼' },
  { id: '4', category: 'KOVO남', time: '19:00', homeTeam: 'OK저축', awayTeam: 'KB손보' },
  { id: '5', category: 'KOVO여', time: '19:00', homeTeam: '현대건설', awayTeam: '페퍼저축' },
];

export const GAME_MATCHES: GameMatch[] = [
  {
    id: '56',
    number: '56',
    deadline: '12.09 (화)\n19:00 마감',
    category: 'ACLE',
    gameType: '일반',
    homeTeam: '마치다',
    awayTeam: '울산HDFC',
    odds: { win: '1.47', draw: '3.70', lose: '4.70' },
    matchTime: '12.09 (화)\n19:00',
    venue: '',
  },
  {
    id: '57',
    number: '57',
    deadline: '12.09 (화)\n19:00 마감',
    category: 'ACLE',
    gameType: '핸디캡',
    homeTeam: '마치다',
    awayTeam: '울산HDFC',
    handicap: 'H -1.0',
    odds: { win: '2.45', draw: '3.35', lose: '2.13' },
    matchTime: '12.09 (화)\n19:00',
    venue: '',
  },
  {
    id: '58',
    number: '58',
    deadline: '12.09 (화)\n19:00 마감',
    category: 'ACLE',
    gameType: '핸디캡',
    homeTeam: '마치다',
    awayTeam: '울산HDFC',
    handicap: 'H -2.0',
    odds: { win: '4.80', draw: '4.50', lose: '1.34' },
    matchTime: '12.09 (화)\n19:00',
    venue: '',
  },
  {
    id: '59',
    number: '59',
    deadline: '12.09 (화)\n19:00 마감',
    category: 'ACLE',
    gameType: '언더오버',
    homeTeam: '마치다',
    awayTeam: '울산HDFC',
    handicap: 'U/O 2.5',
    odds: { under: '1.92', over: '1.59' },
    matchTime: '12.09 (화)\n19:00',
    venue: '',
  },
  {
    id: '60',
    number: '60',
    deadline: '12.09 (화)\n19:00 마감',
    category: 'ACLE',
    gameType: 'SUM',
    homeTeam: '마치다',
    awayTeam: '울산HDFC',
    odds: { odd: '1.75', even: '1.73' },
    matchTime: '12.09 (화)\n19:00',
    venue: '',
  },
];

export const NOTICES: NoticeItem[] = [
  { id: '1', title: '프로토승부식 136회차 축구 월드컵예선전 트리니다드토바고:…' },
  { id: '2', title: '농구 스페셜N 최종 득점대 조정 안내', isBold: true },
  { id: '3', title: 'Join Now Available for Foreign Residents' },
  { id: '4', title: 'MLS 샌디에이고FC:내슈빌SC 경기 결과 변경 관련 적중금 지…' },
];

export const AVAILABLE_GAMES: AvailableGame[] = [
  { id: '1', title: '승부식 145회차', deadline: '회차마감 21시간 38분 전' },
  { id: '2', title: '승부식(한경기) 145회차', deadline: '회차마감 21시간 38분 전' },
  { id: '3', title: '기록식 101회차', deadline: '게임별 마감 2일 전' },
  { id: '4', title: '매치 117회차', deadline: '마감 6시간 8분 전' },
  { id: '5', title: '스페셜 더블 29회차', deadline: '마감 6시간 8분 전' },
  { id: '6', title: '승무패 81회차', deadline: '마감 10시간 8분 전' },
  { id: '7', title: '매치 118회차', deadline: '마감 1일 전' },
  { id: '8', title: 'W매치 77회차', deadline: '마감 1일 전' },
  { id: '9', title: '스페셜 트리플 66회차', deadline: '마감 1일 전' },
  { id: '10', title: '스페셜 더블 66회차', deadline: '마감 1일 전' },
  { id: '11', title: '매치 119회차', deadline: '마감 2일 전' },
];

