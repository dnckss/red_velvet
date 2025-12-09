'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';
import { DATE_TABS, GAME_SCHEDULES, GAME_MATCHES, NOTICES, AVAILABLE_GAMES } from '../constants/data';
import { GameMatch } from '../types';

export default function Article() {
  const [selectedTab, setSelectedTab] = useState('전체');
  const [selectedDate, setSelectedDate] = useState('12.09.화');
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: 앞으로, -1: 뒤로

  const banners = [
    '/레드벨벳_배너1.svg',
    '/레드벨벳_배너2.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => {
        const nextIndex = prev + direction;
        // 끝에 도달하면 방향 전환
        if (nextIndex >= banners.length) {
          setDirection(-1);
          return banners.length - 1;
        }
        // 시작에 도달하면 방향 전환
        if (nextIndex < 0) {
          setDirection(1);
          return 0;
        }
        return nextIndex;
      });
    }, 5000); // 5초마다 변경

    return () => clearInterval(interval);
  }, [direction, banners.length]);

  const getGameTypeColor = (gameType: string) => {
    switch (gameType) {
      case '핸디캡':
        return COLORS.GAME_TYPE_HANDICAP;
      case '언더오버':
        return COLORS.GAME_TYPE_UNDER_OVER;
      case 'SUM':
        return COLORS.GAME_TYPE_SUM;
      default:
        return COLORS.GAME_TYPE_NORMAL;
    }
  };

  return (
    <article className="w-full overflow-hidden" style={{ backgroundColor: COLORS.BG_GRAY_50 }}>
      <div className="w-full max-w-[1400px] mx-auto px-6 py-6">
        <div className="flex justify-center gap-6">
          {/* Sidebar - 구매가능 게임 */}
          <aside 
            className="w-[240px] flex-shrink-0 rounded-xl bg-white flex flex-col"
            style={{ 
              boxShadow: COLORS.SHADOW_MD,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            <div 
              className="p-4 border-b text-sm font-bold text-center"
              style={{ 
                borderColor: COLORS.BORDER_LIGHT,
                color: COLORS.TEXT_PRIMARY
              }}
            >
              구매가능 게임
            </div>
            <div 
              className="p-3 border-b"
              style={{ 
                borderColor: COLORS.BORDER_LIGHT,
                backgroundColor: COLORS.BG_GRAY_50
              }}
            >
              <div className="flex items-center gap-2 text-xs flex-nowrap overflow-x-auto">
                <button 
                  className="px-3 py-1.5 font-semibold rounded-md transition-all flex-shrink-0"
                  style={{ 
                    color: COLORS.PRIMARY,
                    backgroundColor: COLORS.PRIMARY_SUBTLE,
                  }}
                >
                  ALL
                </button>
                {['프로토', '농구', '배구'].map((item) => (
                  <button 
                    key={item}
                    className="px-3 py-1.5 font-medium rounded-md transition-all hover:bg-white flex-shrink-0 whitespace-nowrap"
                    style={{ 
                      color: COLORS.TEXT_SECONDARY,
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {AVAILABLE_GAMES.map((game) => (
                <a
                  key={game.id}
                  href="#"
                  className="block p-4 border-b transition-all hover:bg-gray-50"
                  style={{ 
                    borderColor: COLORS.BORDER_LIGHT,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <div 
                    className="text-sm font-semibold mb-1.5" 
                    style={{ color: COLORS.TEXT_PRIMARY }}
                  >
                    {game.title}
                  </div>
                  <div 
                    className="text-xs font-medium" 
                    style={{ color: COLORS.PRIMARY }}
                  >
                    {game.deadline}
                  </div>
                </a>
              ))}
            </div>
            <div 
              className="p-4 border-t text-center"
              style={{ borderColor: COLORS.BORDER_LIGHT }}
            >
              <button 
                className="text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-sm"
                style={{ 
                  color: COLORS.TEXT_PRIMARY,
                  backgroundColor: COLORS.BG_GRAY_100,
                  transition: DESIGN.TRANSITION_FAST,
                }}
              >
                새로 고침
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-[810px] space-y-6">
            {/* Top Banner */}
            <div 
              className="relative rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
                height: '130px',
              }}
            >
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentBannerIndex * 100}%)`,
                }}
              >
                {banners.map((banner, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ minWidth: '100%' }}
                  >
                    <Image
                      src={banner}
                      alt={`배너 ${index + 1}`}
                      width={810}
                      height={130}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              
              {/* Banner Indicators */}
              {/* <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentBannerIndex(index);
                      // 클릭 시 방향 조정
                      if (index > currentBannerIndex) {
                        setDirection(1);
                      } else if (index < currentBannerIndex) {
                        setDirection(-1);
                      }
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentBannerIndex ? 'w-6' : 'w-2'
                    }`}
                    style={{
                      backgroundColor: index === currentBannerIndex 
                        ? COLORS.PRIMARY 
                        : 'rgba(255, 255, 255, 0.5)',
                    }}
                    aria-label={`배너 ${index + 1}로 이동`}
                  />
                ))}
              </div> */}
            </div>

            {/* Date Tabs */}
            <div 
              className="rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <div className="flex items-center">
                <button 
                  className="px-3 py-3 text-sm transition-all hover:bg-gray-50"
                  style={{ 
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="flex-1 flex">
                  {DATE_TABS.map((tab) => (
                    <button
                      key={tab.date}
                      onClick={() => setSelectedDate(`${tab.date}.${tab.day}`)}
                      className={`flex-1 py-3 text-center text-sm font-medium transition-all ${
                        tab.isActive ? 'font-semibold' : ''
                      }`}
                      style={{
                        color: tab.isActive ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY,
                        backgroundColor: tab.isActive ? COLORS.PRIMARY_SUBTLE : 'transparent',
                        borderRight: `1px solid ${COLORS.BORDER_LIGHT}`,
                        transition: DESIGN.TRANSITION_FAST,
                      }}
                      onMouseEnter={(e) => {
                        if (!tab.isActive) {
                          e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_50;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!tab.isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {tab.date}.{tab.day}
                    </button>
                  ))}
                </div>
                <button 
                  className="px-3 py-3 text-sm transition-all hover:bg-gray-50"
                  style={{ 
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Game Schedule Slider */}
            <div 
              className="p-5 rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {GAME_SCHEDULES.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="p-4 rounded-lg text-center transition-all hover:shadow-md"
                    style={{ 
                      border: `1px solid ${COLORS.BORDER_LIGHT}`,
                      backgroundColor: COLORS.BG_WHITE,
                      transition: DESIGN.TRANSITION_FAST,
                    }}
                  >
                    <div 
                      className="flex items-center justify-center gap-2 mb-3 text-xs font-medium" 
                      style={{ color: COLORS.TEXT_TERTIARY }}
                    >
                      <span>{schedule.category}</span>
                      <span className="w-px h-3" style={{ backgroundColor: COLORS.BORDER_MEDIUM }}></span>
                      <span>{schedule.time}</span>
                    </div>
                    <div 
                      className="text-base font-semibold mb-2" 
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      {schedule.homeTeam}
                    </div>
                    <div 
                      className="text-sm font-bold mb-2" 
                      style={{ color: COLORS.PRIMARY }}
                    >
                      vs
                    </div>
                    <div 
                      className="text-base font-semibold" 
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      {schedule.awayTeam}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Table */}
            <div 
              className="rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              {/* Table Header */}
              <div 
                className="flex items-center justify-between p-5 border-b"
                style={{ 
                  borderColor: COLORS.BORDER_LIGHT,
                  backgroundColor: COLORS.BG_GRAY_50,
                }}
              >
                  <div className="flex items-center gap-6 flex-wrap">
                    <span 
                      className="text-xl font-bold whitespace-nowrap"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      승부식 145회차
                    </span>
                    <div className="flex items-center gap-1 flex-nowrap">
                      {['전체', '축구', '농구', '배구'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                          selectedTab === tab ? 'font-semibold' : ''
                        }`}
                        style={{
                          color: selectedTab === tab ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY,
                          backgroundColor: selectedTab === tab ? COLORS.PRIMARY_SUBTLE : 'transparent',
                          transition: DESIGN.TRANSITION_FAST,
                        }}
                        onMouseEnter={(e) => {
                          if (selectedTab !== tab) {
                            e.currentTarget.style.backgroundColor = COLORS.BG_WHITE;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (selectedTab !== tab) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border transition-all hover:shadow-sm"
                  style={{ 
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BG_WHITE,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Table */}
              <div className="w-full">
                <table className="w-full" style={{ tableLayout: 'fixed' }}>
                  <thead>
                    <tr style={{ backgroundColor: COLORS.TABLE_HEADER }}>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[40px]">번호</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[90px]">마감시간</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[80px]">종목/대회</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[80px]">게임유형</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white">홈팀 vs 원정팀</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[200px]">배당률선택</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[90px]">대상경기<br />개최시간</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[50px]">장소</th>
                      <th className="px-2 py-4 text-xs font-semibold text-center text-white w-[50px]">정보</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GAME_MATCHES.map((match) => (
                      <tr 
                        key={match.id} 
                        className="border-b transition-all hover:bg-gray-50"
                        style={{ 
                          borderColor: COLORS.BORDER_LIGHT,
                          transition: DESIGN.TRANSITION_FAST,
                        }}
                      >
                        <td className="px-2 py-4 text-center text-sm font-medium" style={{ color: COLORS.TEXT_PRIMARY }}>
                          {match.number}
                        </td>
                        <td className="px-2 py-4 text-center text-xs whitespace-pre-line font-medium" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.deadline}
                        </td>
                        <td className="px-2 py-4 text-center text-xs font-medium" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.category}
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex flex-col items-center gap-2">
                            <div 
                              className="w-6 h-6 border rounded-md text-xs flex items-center justify-center font-semibold" 
                              style={{ 
                                borderColor: COLORS.BORDER_MEDIUM, 
                                color: COLORS.TEXT_SECONDARY,
                                backgroundColor: COLORS.BG_GRAY_50,
                              }}
                            >
                              S
                            </div>
                            <div 
                              className="px-2.5 py-1 border rounded-md text-xs font-medium" 
                              style={{ 
                                borderColor: getGameTypeColor(match.gameType), 
                                color: getGameTypeColor(match.gameType),
                                backgroundColor: `${getGameTypeColor(match.gameType)}15`,
                              }}
                            >
                              {match.gameType}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex items-center justify-center gap-1 flex-wrap">
                            <span className="text-xs font-semibold" style={{ color: COLORS.TEXT_PRIMARY }}>
                              {match.homeTeam}
                            </span>
                            <span className="text-xs font-semibold" style={{ color: COLORS.TEXT_TERTIARY }}>:</span>
                            <span className="text-xs font-semibold" style={{ color: COLORS.TEXT_PRIMARY }}>
                              {match.awayTeam}
                            </span>
                            {match.handicap && (
                              <span 
                                className="px-1.5 py-0.5 rounded text-xs font-semibold" 
                                style={{ 
                                  backgroundColor: `${COLORS.GAME_TYPE_SUM}15`, 
                                  color: COLORS.GAME_TYPE_SUM 
                                }}
                              >
                                {match.handicap}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex items-center justify-center gap-1 flex-wrap">
                            {match.odds.win && (
                              <button 
                                className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                style={{ 
                                  borderColor: COLORS.BORDER_LIGHT, 
                                  color: COLORS.TEXT_PRIMARY,
                                  backgroundColor: COLORS.BG_WHITE,
                                  transition: DESIGN.TRANSITION_FAST,
                                }}
                              >
                                승<br />{match.odds.win}
                              </button>
                            )}
                            {match.odds.draw && (
                              <button 
                                className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                style={{ 
                                  borderColor: COLORS.BORDER_LIGHT, 
                                  color: COLORS.TEXT_PRIMARY,
                                  backgroundColor: COLORS.BG_WHITE,
                                  transition: DESIGN.TRANSITION_FAST,
                                }}
                              >
                                무<br />{match.odds.draw}
                              </button>
                            )}
                            {match.odds.lose && (
                              <button 
                                className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                style={{ 
                                  borderColor: COLORS.BORDER_LIGHT, 
                                  color: COLORS.TEXT_PRIMARY,
                                  backgroundColor: COLORS.BG_WHITE,
                                  transition: DESIGN.TRANSITION_FAST,
                                }}
                              >
                                패<br />{match.odds.lose}
                              </button>
                            )}
                            {match.odds.under && (
                              <>
                                <button 
                                  className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                  style={{ 
                                    borderColor: COLORS.BORDER_LIGHT, 
                                    color: COLORS.TEXT_PRIMARY,
                                    backgroundColor: COLORS.BG_WHITE,
                                    transition: DESIGN.TRANSITION_FAST,
                                  }}
                                >
                                  U<br />{match.odds.under}
                                </button>
                                <span className="text-xs" style={{ color: COLORS.TEXT_TERTIARY }}>-</span>
                                <button 
                                  className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                  style={{ 
                                    borderColor: COLORS.BORDER_LIGHT, 
                                    color: COLORS.TEXT_PRIMARY,
                                    backgroundColor: COLORS.BG_WHITE,
                                    transition: DESIGN.TRANSITION_FAST,
                                  }}
                                >
                                  O<br />{match.odds.over}
                                </button>
                              </>
                            )}
                            {match.odds.odd && (
                              <>
                                <button 
                                  className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                  style={{ 
                                    borderColor: COLORS.BORDER_LIGHT, 
                                    color: COLORS.TEXT_PRIMARY,
                                    backgroundColor: COLORS.BG_WHITE,
                                    transition: DESIGN.TRANSITION_FAST,
                                  }}
                                >
                                  홀<br />{match.odds.odd}
                                </button>
                                <span className="text-xs" style={{ color: COLORS.TEXT_TERTIARY }}>-</span>
                                <button 
                                  className="px-2 py-1.5 border rounded text-xs font-medium transition-all hover:shadow-sm hover:border-primary"
                                  style={{ 
                                    borderColor: COLORS.BORDER_LIGHT, 
                                    color: COLORS.TEXT_PRIMARY,
                                    backgroundColor: COLORS.BG_WHITE,
                                    transition: DESIGN.TRANSITION_FAST,
                                  }}
                                >
                                  짝<br />{match.odds.even}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-4 text-center text-xs whitespace-pre-line font-medium" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.matchTime}
                        </td>
                        <td className="px-2 py-4 text-center">
                          {/* Venue Icon */}
                        </td>
                        <td className="px-2 py-4 text-center">
                          {/* Info Icon */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* More Button */}
              <div className="p-5 text-center border-t" style={{ borderColor: COLORS.BORDER_LIGHT }}>
                <button 
                  className="px-6 py-3 text-sm font-semibold rounded-lg transition-all hover:shadow-md"
                  style={{ 
                    color: COLORS.TEXT_PRIMARY,
                    backgroundColor: COLORS.BG_GRAY_50,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  더보기 (5/40)
                </button>
              </div>
            </div>

            {/* Notice Section */}
            <div 
              className="rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <div 
                className="flex items-center justify-between p-5 border-b"
                style={{ 
                  borderColor: COLORS.BORDER_LIGHT,
                  backgroundColor: COLORS.BG_GRAY_50,
                }}
              >
                <h3 className="text-lg font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>공지사항</h3>
                <div className="flex items-center gap-1">
                  {['전체', '알림', '프로토', '토토'].map((tab, index) => (
                    <button
                      key={tab}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                        index === 0 ? 'font-semibold' : ''
                      }`}
                      style={{
                        color: index === 0 ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY,
                        backgroundColor: index === 0 ? COLORS.PRIMARY_SUBTLE : 'transparent',
                        transition: DESIGN.TRANSITION_FAST,
                      }}
                      onMouseEnter={(e) => {
                        if (index !== 0) {
                          e.currentTarget.style.backgroundColor = COLORS.BG_WHITE;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (index !== 0) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border transition-all hover:shadow-sm"
                  style={{ 
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BG_WHITE,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-5">
                <ul className="space-y-4">
                  {NOTICES.map((notice) => (
                    <li key={notice.id}>
                      <a
                        href="#"
                        className={`text-sm block transition-colors hover:text-primary ${
                          notice.isBold ? 'font-semibold' : 'font-medium'
                        }`}
                        style={{ 
                          color: COLORS.TEXT_SECONDARY,
                          transition: DESIGN.TRANSITION_FAST,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = COLORS.PRIMARY;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = COLORS.TEXT_SECONDARY;
                        }}
                      >
                        {notice.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result Section */}
            <div 
              className="rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <div 
                className="flex items-center justify-between p-5 border-b"
                style={{ 
                  borderColor: COLORS.BORDER_LIGHT,
                  backgroundColor: COLORS.BG_GRAY_50,
                }}
              >
                <h3 className="text-lg font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>적중결과</h3>
                <button 
                  className="w-10 h-10 flex items-center justify-center rounded-lg border transition-all hover:shadow-sm"
                  style={{ 
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BG_WHITE,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="p-5" style={{ backgroundColor: COLORS.BG_GRAY_50 }}>
                <div className="text-sm font-medium" style={{ color: COLORS.TEXT_SECONDARY }}>
                  프로토 기록식 101…
                </div>
              </div>
            </div>

            {/* Toto Cafe Section */}
            <div 
              className="rounded-xl bg-white overflow-hidden"
              style={{ 
                boxShadow: COLORS.SHADOW_MD,
                border: `1px solid ${COLORS.BORDER_LIGHT}`,
              }}
            >
              <div 
                className="flex items-center justify-between p-5 border-b"
                style={{ 
                  borderColor: COLORS.BORDER_LIGHT,
                  backgroundColor: COLORS.BG_GRAY_50,
                }}
              >
                <h3 className="text-lg font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>토토카페</h3>
              </div>
              <div className="p-5" style={{ backgroundColor: COLORS.BG_GRAY_50 }}>
                <div className="text-sm font-medium" style={{ color: COLORS.TEXT_SECONDARY }}>
                  Best of Best
                </div>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <aside 
            className="w-[280px] flex-shrink-0 rounded-xl bg-white flex flex-col"
            style={{ 
              boxShadow: COLORS.SHADOW_MD,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            <div className="flex border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <button 
                className="flex-1 py-4 text-sm font-semibold text-center border-r transition-all"
                style={{ 
                  color: COLORS.PRIMARY, 
                  borderColor: COLORS.BORDER_LIGHT, 
                  borderBottom: `3px solid ${COLORS.PRIMARY}`,
                  backgroundColor: COLORS.PRIMARY_SUBTLE,
                  transition: DESIGN.TRANSITION_FAST,
                }}
              >
                구매하기
              </button>
              <button 
                className="flex-1 py-4 text-sm font-medium text-center transition-all hover:bg-gray-50"
                style={{ 
                  color: COLORS.TEXT_PRIMARY,
                  transition: DESIGN.TRANSITION_FAST,
                }}
              >
                카트내역{' '}
                <span 
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-semibold text-white ml-1"
                  style={{ backgroundColor: COLORS.PRIMARY }}
                >
                  0
                </span>
              </button>
            </div>
            <div className="flex-1 p-6 min-h-[600px]">
              <div className="text-center py-16">
                <p 
                  className="text-lg font-bold mb-4 leading-relaxed" 
                  style={{ color: COLORS.TEXT_PRIMARY }}
                >
                  즐거운 스포츠, 즐거운 토토,<br />
                  소액으로 건전하게 즐기세요.
                </p>
                <p 
                  className="text-xs leading-relaxed font-medium" 
                  style={{ color: COLORS.TEXT_TERTIARY }}
                >
                  베트맨 이외의 사이트를 통한<br />
                  투표권 발행 유사행위는 법으로 금지되며,<br />
                  미성년자 및 발행대상 운동경기 관계자는<br />
                  구매하거나 환급받을 수 없습니다.<br />
                  (출금은 본인명의 계좌만 가능합니다.)
                </p>
              </div>
            </div>
            <div 
              className="p-5 border-t"
              style={{ 
                borderColor: COLORS.BORDER_LIGHT,
                backgroundColor: COLORS.BG_GRAY_50,
              }}
            >
              <div 
                className="flex items-center justify-between mb-4 text-sm font-semibold" 
                style={{ color: COLORS.TEXT_PRIMARY }}
              >
                <span>구매가능금액</span>
                <span style={{ color: COLORS.PRIMARY }}>100,000원</span>
              </div>
              <div className="flex gap-3">
                <button 
                  className="flex-1 py-3 text-sm font-semibold border rounded-lg transition-all hover:shadow-sm"
                  style={{ 
                    borderColor: COLORS.BORDER_LIGHT, 
                    color: COLORS.TEXT_SECONDARY,
                    backgroundColor: COLORS.BG_WHITE,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  카트담기
                </button>
                <button 
                  className="flex-1 py-3 text-sm font-semibold rounded-lg transition-all hover:shadow-md"
                  style={{ 
                    backgroundColor: COLORS.PRIMARY,
                    color: COLORS.TEXT_WHITE,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  바로구매
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

