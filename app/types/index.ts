/**
 * 공통 타입 정의
 */

export interface GameMatch {
  id: string;
  number: string;
  deadline: string;
  category: string;
  gameType: '일반' | '핸디캡' | '언더오버' | 'SUM';
  homeTeam: string;
  awayTeam: string;
  odds: {
    win?: string;
    draw?: string;
    lose?: string;
    under?: string;
    over?: string;
    odd?: string;
    even?: string;
  };
  handicap?: string;
  matchTime: string;
  venue: string;
}

export interface DateTab {
  date: string;
  day: string;
  isActive: boolean;
}

export interface GameSchedule {
  id: string;
  category: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
}

export interface NoticeItem {
  id: string;
  title: string;
  isBold?: boolean;
}

export interface AvailableGame {
  id: string;
  title: string;
  deadline: string;
  icon?: string;
}

