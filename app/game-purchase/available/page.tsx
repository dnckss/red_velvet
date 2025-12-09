'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { COLORS } from '../../constants/colors';
import { DESIGN } from '../../constants/design';

// 프로토 게임 데이터
const PROTO_GAMES = [
  {
    id: 1,
    sport: '프로토',
    gameName: '승부식',
    round: '145회차',
    deadline: '25.12.10(수) 10:30',
  },
  {
    id: 2,
    sport: '프로토',
    gameName: '기록식',
    round: '145회차',
    deadline: '25.12.10(수) 10:30',
  },
];

// 토토 게임 데이터
const TOTO_GAMES = [
  {
    id: 1,
    sport: '축구',
    gameName: '승무패',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '1,354,866,000',
    firstPlaceWinnings: '943,168,750',
    rolloverAmount: '604,452,250',
  },
  {
    id: 2,
    sport: '축구',
    gameName: '스페셜 트리플',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '2,100,500,000',
    firstPlaceWinnings: '1,850,000,000',
    rolloverAmount: '500,000,000',
  },
  {
    id: 3,
    sport: '축구',
    gameName: '스페셜 더블',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '950,200,000',
    firstPlaceWinnings: '800,000,000',
    rolloverAmount: '200,000,000',
  },
  {
    id: 4,
    sport: '농구',
    gameName: '승무패',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '800,500,000',
    firstPlaceWinnings: '650,000,000',
    rolloverAmount: '150,000,000',
  },
  {
    id: 5,
    sport: '농구',
    gameName: '매치',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '600,300,000',
    firstPlaceWinnings: '500,000,000',
    rolloverAmount: '100,000,000',
  },
  {
    id: 6,
    sport: '배구',
    gameName: 'W매치',
    round: '81회차',
    deadline: '25.12.09(화) 23:00',
    totalSales: '450,100,000',
    firstPlaceWinnings: '380,000,000',
    rolloverAmount: '80,000,000',
  },
];

const getSportIconColor = (sport: string) => {
  switch (sport) {
    case '축구':
      return '#10B981'; // Green
    case '농구':
      return '#3B82F6'; // Blue
    case '배구':
      return '#F59E0B'; // Orange
    default:
      return COLORS.PRIMARY;
  }
};

export default function AvailableGamesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: COLORS.BG_GRAY_50 }}>
      <Header />

      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-primary"
                  style={{
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  홈
                </Link>
              </li>
              <li style={{ color: COLORS.BORDER_MEDIUM }}>/</li>
              <li>
                <Link
                  href="/game-purchase"
                  className="transition-colors hover:text-primary"
                  style={{
                    color: COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                >
                  게임구매
                </Link>
              </li>
              <li style={{ color: COLORS.BORDER_MEDIUM }}>/</li>
              <li style={{ color: COLORS.TEXT_PRIMARY }}>구매가능게임</li>
            </ol>
          </nav>

          {/* Page Title */}
          <h1
            className="text-3xl font-bold mb-8"
            style={{ color: COLORS.TEXT_PRIMARY }}
          >
            구매가능게임
          </h1>

          {/* Proto Section */}
          <div
            className="mb-8 rounded-xl bg-white overflow-hidden"
            style={{
              boxShadow: COLORS.SHADOW_MD,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            <div
              className="px-6 py-4 border-b"
              style={{
                backgroundColor: COLORS.BG_GRAY_50,
                borderColor: COLORS.BORDER_LIGHT,
              }}
            >
              <h2
                className="text-xl font-bold"
                style={{ color: COLORS.TEXT_PRIMARY }}
              >
                프로토
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    style={{
                      backgroundColor: COLORS.BG_GRAY_50,
                      borderBottom: `1px solid ${COLORS.BORDER_LIGHT}`,
                    }}
                  >
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      종목
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      게임명
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      회차
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      회차 마감일시
                    </th>
                    <th
                      className="px-4 py-3 text-center text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      게임구매
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {PROTO_GAMES.map((game) => (
                    <tr
                      key={game.id}
                      className="border-b transition-all hover:bg-gray-50"
                      style={{
                        borderColor: COLORS.BORDER_LIGHT,
                        transition: DESIGN.TRANSITION_FAST,
                      }}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                            style={{ backgroundColor: COLORS.PRIMARY }}
                          >
                            P
                          </div>
                          <span
                            className="text-sm font-medium"
                            style={{ color: COLORS.TEXT_PRIMARY }}
                          >
                            {game.sport}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_PRIMARY }}
                        >
                          {game.gameName}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_PRIMARY }}
                        >
                          {game.round}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_SECONDARY }}
                        >
                          {game.deadline}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          className="px-4 py-2 rounded-lg font-semibold transition-all hover:shadow-sm"
                          style={{
                            backgroundColor: COLORS.PRIMARY,
                            color: COLORS.TEXT_WHITE,
                            transition: DESIGN.TRANSITION_FAST,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.PRIMARY_DARK;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                          }}
                        >
                          게임구매
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Toto Section */}
          <div
            className="mb-8 rounded-xl bg-white overflow-hidden"
            style={{
              boxShadow: COLORS.SHADOW_MD,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            <div
              className="px-6 py-4 border-b"
              style={{
                backgroundColor: COLORS.BG_GRAY_50,
                borderColor: COLORS.BORDER_LIGHT,
              }}
            >
              <h2
                className="text-xl font-bold"
                style={{ color: COLORS.TEXT_PRIMARY }}
              >
                토토
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    style={{
                      backgroundColor: COLORS.BG_GRAY_50,
                      borderBottom: `1px solid ${COLORS.BORDER_LIGHT}`,
                    }}
                  >
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      종목
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      게임명
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      회차
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      회차 마감일시
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      총 발매금액
                    </th>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      1등 총 예상적중금액<br />[전회차이월금액]
                    </th>
                    <th
                      className="px-4 py-3 text-center text-sm font-semibold"
                      style={{ color: COLORS.TEXT_PRIMARY }}
                    >
                      게임구매
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TOTO_GAMES.map((game) => (
                    <tr
                      key={game.id}
                      className="border-b transition-all hover:bg-gray-50"
                      style={{
                        borderColor: COLORS.BORDER_LIGHT,
                        transition: DESIGN.TRANSITION_FAST,
                      }}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                            style={{ backgroundColor: getSportIconColor(game.sport) }}
                          >
                            {game.sport === '축구' ? '축' : game.sport === '농구' ? '농' : '배'}
                          </div>
                          <span
                            className="text-sm font-medium"
                            style={{ color: COLORS.TEXT_PRIMARY }}
                          >
                            {game.sport}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_PRIMARY }}
                        >
                          {game.round}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_SECONDARY }}
                        >
                          {game.deadline}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className="text-sm font-medium"
                          style={{ color: COLORS.TEXT_PRIMARY }}
                        >
                          {parseInt(game.totalSales).toLocaleString()} 원
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col gap-1">
                          <span
                            className="text-sm font-medium"
                            style={{ color: COLORS.TEXT_PRIMARY }}
                          >
                            {parseInt(game.firstPlaceWinnings).toLocaleString()} 원
                          </span>
                          <span
                            className="text-xs"
                            style={{ color: COLORS.TEXT_SECONDARY }}
                          >
                            [{parseInt(game.rolloverAmount).toLocaleString()} 원]
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          className="px-4 py-2 rounded-lg font-semibold transition-all hover:shadow-sm"
                          style={{
                            backgroundColor: COLORS.PRIMARY,
                            color: COLORS.TEXT_WHITE,
                            transition: DESIGN.TRANSITION_FAST,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.PRIMARY_DARK;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                          }}
                        >
                          게임구매
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notice Section */}
          <div
            className="mb-6 rounded-lg p-4"
            style={{
              backgroundColor: COLORS.BG_GRAY_100,
              border: `1px solid ${COLORS.BORDER_LIGHT}`,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: COLORS.STATUS_WARNING }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: COLORS.TEXT_PRIMARY }}
                >
                  베트맨 사이트에서는 1일 6회차까지 구매하실 수 있습니다.
                </p>
                <ul className="space-y-1 text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                  <li>• 게임구매는 회차별로 구분되며, 각 회차는 독립적으로 운영됩니다.</li>
                  <li>• 회차 마감일시 이전에 구매를 완료해야 합니다.</li>
                  <li>• 예를 들어, 1일 6회차까지 구매 가능하며, 각 회차는 별도로 구매할 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* View Closed Games Button */}
          <div className="text-center">
            <Link
              href="/game-purchase/closed"
              className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
              style={{
                backgroundColor: COLORS.PRIMARY,
                color: COLORS.TEXT_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY_DARK;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              }}
            >
              마감게임보기
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

