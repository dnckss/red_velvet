'use client';

import { useState } from 'react';
import { COLORS } from '../constants/colors';
import { DATE_TABS, GAME_SCHEDULES, GAME_MATCHES, NOTICES, AVAILABLE_GAMES } from '../constants/data';
import { GameMatch } from '../types';

export default function Article() {
  const [selectedTab, setSelectedTab] = useState('전체');
  const [selectedDate, setSelectedDate] = useState('12.09.화');

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
    <article className="w-full bg-white">
      <div className="w-full px-4 py-4">
        <div className="flex justify-center gap-4">
          {/* Sidebar - 구매가능 게임 */}
          <aside className="w-[200px] border rounded flex-shrink-0" style={{ borderColor: COLORS.BORDER_LIGHT }}>
            <div className="p-3 border-b text-sm font-bold text-center" style={{ borderColor: COLORS.BORDER_GRAY }}>
              구매가능 게임
            </div>
            <div className="p-2 border-b bg-gray-50" style={{ borderColor: COLORS.BG_LIGHT }}>
              <div className="flex items-center gap-2 text-xs">
                <button className="font-bold border-b-2" style={{ borderColor: COLORS.TEXT_PRIMARY }}>
                  ALL
                </button>
                <button style={{ color: COLORS.TEXT_SECONDARY }}>프로토</button>
                <button style={{ color: COLORS.TEXT_SECONDARY }}>농구</button>
                <button style={{ color: COLORS.TEXT_SECONDARY }}>배구</button>
              </div>
            </div>
            <div className="divide-y" style={{ borderColor: COLORS.BORDER_GRAY }}>
              {AVAILABLE_GAMES.map((game) => (
                <a
                  key={game.id}
                  href="#"
                  className="block p-3 hover:bg-gray-50"
                >
                  <div className="text-sm font-bold mb-1" style={{ color: COLORS.TEXT_PRIMARY }}>
                    {game.title}
                  </div>
                  <div className="text-xs" style={{ color: COLORS.PRIMARY }}>
                    {game.deadline}
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 text-center">
              <button className="text-xs font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
                새로 고침
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full max-w-[810px] flex-shrink-0">
            {/* Top Banner */}
            <div className="mb-4 p-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <p className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                체육진흥투표권 '베트맨판매점' 구매한도 일원화 베트맨도 회차장 10만원까지 구매할 수 있습니다.
              </p>
            </div>

            {/* Date Tabs */}
            <div className="mb-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center">
                <button className="px-2 py-3 text-sm" style={{ color: COLORS.PRIMARY_DARK, backgroundColor: COLORS.PRIMARY_DARK, borderColor: COLORS.PRIMARY_LIGHT }}>
                  {/* Left Arrow */}
                </button>
                <div className="flex-1 flex">
                  {DATE_TABS.map((tab) => (
                    <button
                      key={tab.date}
                      onClick={() => setSelectedDate(`${tab.date}.${tab.day}`)}
                      className={`flex-1 py-3 text-center text-sm border-r ${tab.isActive ? 'font-bold' : ''}`}
                      style={{
                        color: tab.isActive ? COLORS.TEXT_PRIMARY : COLORS.TEXT_WHITE,
                        backgroundColor: tab.isActive ? COLORS.BG_WHITE : COLORS.PRIMARY,
                        borderColor: COLORS.PRIMARY_LIGHT,
                      }}
                    >
                      {tab.date}.{tab.day}
                    </button>
                  ))}
                </div>
                <button className="px-2 py-3 text-sm" style={{ color: COLORS.PRIMARY_DARK, backgroundColor: COLORS.PRIMARY_DARK, borderColor: COLORS.PRIMARY_LIGHT }}>
                  {/* Right Arrow */}
                </button>
              </div>
            </div>

            {/* Game Schedule Slider */}
            <div className="mb-4 p-4 border rounded bg-white" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center gap-2 overflow-x-auto">
                {GAME_SCHEDULES.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="flex-shrink-0 w-[154px] p-3 border-r text-center"
                    style={{ borderColor: COLORS.BORDER_DARK }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-2 text-xs" style={{ color: COLORS.TEXT_TERTIARY }}>
                      <span>{schedule.category}</span>
                      <span className="w-px h-2" style={{ backgroundColor: COLORS.BORDER_DIVIDER }}></span>
                      <span>{schedule.time}</span>
                    </div>
                    <div className="text-base font-semibold mb-1" style={{ color: COLORS.TEXT_PRIMARY }}>
                      {schedule.homeTeam}
                    </div>
                    <div className="text-sm font-bold mb-1" style={{ color: COLORS.PRIMARY }}>
                      vs
                    </div>
                    <div className="text-base font-semibold" style={{ color: COLORS.TEXT_PRIMARY }}>
                      {schedule.awayTeam}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Game Table */}
            <div className="mb-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              {/* Table Header */}
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold">승부식 145회차</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedTab('전체')}
                      className={`text-sm px-2 ${selectedTab === '전체' ? 'font-bold' : ''}`}
                      style={{
                        color: selectedTab === '전체' ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY,
                        borderBottom: selectedTab === '전체' ? `2px solid ${COLORS.PRIMARY}` : 'none',
                      }}
                    >
                      전체
                    </button>
                    <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                    <button
                      onClick={() => setSelectedTab('축구')}
                      className="text-sm px-2"
                      style={{ color: COLORS.TEXT_SECONDARY }}
                    >
                      축구
                    </button>
                    <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                    <button
                      onClick={() => setSelectedTab('농구')}
                      className="text-sm px-2"
                      style={{ color: COLORS.TEXT_SECONDARY }}
                    >
                      농구
                    </button>
                    <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                    <button
                      onClick={() => setSelectedTab('배구')}
                      className="text-sm px-2"
                      style={{ color: COLORS.TEXT_SECONDARY }}
                    >
                      배구
                    </button>
                  </div>
                </div>
                <button className="w-10 h-12 border rounded" style={{ borderColor: COLORS.BORDER_DARK }}>
                  {/* Plus Icon */}
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ backgroundColor: COLORS.TABLE_HEADER }}>
                      <th className="px-2 py-3 text-xs text-center text-white">번호</th>
                      <th className="px-2 py-3 text-xs text-center text-white">마감시간</th>
                      <th className="px-2 py-3 text-xs text-center text-white">종목/대회</th>
                      <th className="px-2 py-3 text-xs text-center text-white">게임유형</th>
                      <th className="px-2 py-3 text-xs text-center text-white">홈팀 vs 원정팀</th>
                      <th className="px-2 py-3 text-xs text-center text-white">배당률선택</th>
                      <th className="px-2 py-3 text-xs text-center text-white">대상경기<br />개최시간</th>
                      <th className="px-2 py-3 text-xs text-center text-white">장소</th>
                      <th className="px-2 py-3 text-xs text-center text-white">정보</th>
                    </tr>
                  </thead>
                  <tbody>
                    {GAME_MATCHES.map((match) => (
                      <tr key={match.id} className="border-b" style={{ borderColor: '#e0e0e0' }}>
                        <td className="px-2 py-4 text-center text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.number}
                        </td>
                        <td className="px-2 py-4 text-center text-xs whitespace-pre-line" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.deadline}
                        </td>
                        <td className="px-2 py-4 text-center text-xs" style={{ color: COLORS.TEXT_SECONDARY }}>
                          {match.category}
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-4 h-4 border rounded text-xs flex items-center justify-center" style={{ borderColor: '#4d4d4d', color: '#4d4d4d' }}>
                              S
                            </div>
                            <div className="px-2 py-1 border rounded text-xs" style={{ borderColor: getGameTypeColor(match.gameType), color: getGameTypeColor(match.gameType) }}>
                              {match.gameType}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex items-center justify-center gap-1">
                            <span className="text-sm font-bold" style={{ color: COLORS.TEXT_SECONDARY }}>
                              {match.homeTeam}
                            </span>
                            <span className="text-sm font-bold" style={{ color: COLORS.TEXT_SECONDARY }}>:</span>
                            <span className="text-sm font-bold" style={{ color: COLORS.TEXT_SECONDARY }}>
                              {match.awayTeam}
                            </span>
                            {match.handicap && (
                              <span className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: COLORS.BG_LIGHT_BLUE, color: COLORS.GAME_TYPE_SUM }}>
                                {match.handicap}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-4">
                          <div className="flex items-center justify-center gap-2">
                            {match.odds.win && (
                              <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                승<br />{match.odds.win}
                              </button>
                            )}
                            {match.odds.draw && (
                              <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                무<br />{match.odds.draw}
                              </button>
                            )}
                            {match.odds.lose && (
                              <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                패<br />{match.odds.lose}
                              </button>
                            )}
                            {match.odds.under && (
                              <>
                                <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                  U<br />{match.odds.under}
                                </button>
                                <span className="text-sm" style={{ color: COLORS.TEXT_BLACK }}>-</span>
                                <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                  O<br />{match.odds.over}
                                </button>
                              </>
                            )}
                            {match.odds.odd && (
                              <>
                                <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                  홀<br />{match.odds.odd}
                                </button>
                                <span className="text-sm" style={{ color: COLORS.TEXT_BLACK }}>-</span>
                                <button className="px-3 py-2 border rounded text-xs" style={{ borderColor: COLORS.BORDER_DARK_GRAY, color: COLORS.TEXT_SECONDARY }}>
                                  짝<br />{match.odds.even}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-4 text-center text-xs whitespace-pre-line" style={{ color: COLORS.TEXT_SECONDARY }}>
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
              <div className="p-4 text-center">
                <button className="px-8 py-3 text-sm font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
                  더보기 (5/40)
                </button>
              </div>
            </div>

            {/* Notice Section */}
            <div className="mb-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
                <h3 className="text-base font-bold">공지사항</h3>
                <div className="flex gap-2">
                  <button className="text-sm font-bold" style={{ color: COLORS.PRIMARY, borderBottom: `2px solid ${COLORS.PRIMARY}` }}>
                    전체
                  </button>
                  <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                  <button className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>알림</button>
                  <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                  <button className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>프로토</button>
                  <span className="text-xs" style={{ color: COLORS.BORDER_DIVIDER }}>|</span>
                  <button className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>토토</button>
                </div>
                <button className="w-10 h-11 border rounded" style={{ borderColor: COLORS.BORDER_DARK }}>
                  {/* Right Arrow */}
                </button>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {NOTICES.map((notice) => (
                    <li key={notice.id}>
                      <a
                        href="#"
                        className={`text-sm block ${notice.isBold ? 'font-bold' : ''}`}
                        style={{ color: COLORS.TEXT_SECONDARY }}
                      >
                        {notice.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Result Section */}
            <div className="mb-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
                <h3 className="text-base font-bold">적중결과</h3>
                <button className="w-10 h-11 border rounded" style={{ borderColor: COLORS.BORDER_DARK }}>
                  {/* Right Arrow */}
                </button>
              </div>
              <div className="p-4 bg-gray-50">
                {/* Calendar and Results */}
                <div className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                  프로토 기록식 101…
                </div>
              </div>
            </div>

            {/* Toto Cafe Section */}
            <div className="mb-4 border rounded" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
                <h3 className="text-base font-bold">토토카페</h3>
              </div>
              <div className="p-4 bg-gray-50">
                {/* Best of Best and Rankings */}
                <div className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                  Best of Best
                </div>
              </div>
            </div>
          </div>

          {/* Cart Sidebar */}
          <aside className="w-[260px] border rounded flex-shrink-0" style={{ borderColor: COLORS.BORDER_LIGHT }}>
            <div className="flex border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <button className="flex-1 py-3 text-sm font-bold text-center border-r" style={{ color: COLORS.PRIMARY, borderColor: COLORS.BORDER_LIGHT, borderBottom: `3px solid ${COLORS.PRIMARY}` }}>
                구매하기
              </button>
              <button className="flex-1 py-3 text-sm text-center" style={{ color: COLORS.TEXT_PRIMARY }}>
                카트내역 <span className="inline-block w-4 h-4 rounded-full text-xs text-white text-center leading-4" style={{ backgroundColor: COLORS.TEXT_PRIMARY }}>0</span>
              </button>
            </div>
            <div className="p-4 min-h-[1000px]">
              <div className="text-center py-20">
                <p className="text-base font-bold mb-4" style={{ color: '#2c4663' }}>
                  즐거운 스포츠, 즐거운 토토,<br />
                  소액으로 건전하게 즐기세요.
                </p>
                <p className="text-xs leading-relaxed" style={{ color: '#6d7d8e' }}>
                  베트맨 이외의 사이트를 통한<br />
                  투표권 발행 유사행위는 법으로 금지되며,<br />
                  미성년자 및 발행대상 운동경기 관계자는<br />
                  구매하거나 환급받을 수 없습니다.<br />
                  (출금은 본인명의 계좌만 가능합니다.)
                </p>
              </div>
            </div>
            <div className="p-4 border-t bg-gray-50" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <div className="flex items-center justify-between mb-4 text-xs" style={{ color: COLORS.TEXT_SECONDARY }}>
                <span>구매가능금액</span>
                <span>100,000원</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-sm border rounded bg-gray-50" style={{ borderColor: '#e6e6e6', color: '#888888' }}>
                  카트담기
                </button>
                <button className="flex-1 py-2 text-sm border rounded bg-gray-50" style={{ borderColor: '#e6e6e6', color: '#888888' }}>
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

