'use client';

import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';

export default function Footer() {
  return (
    <footer 
      className="w-full"
      style={{ 
        backgroundColor: COLORS.BG_GRAY_50,
        borderTop: `1px solid ${COLORS.BORDER_LIGHT}`,
      }}
    >
      {/* Top Links */}
      <div 
        className="border-b"
        style={{ 
          borderColor: COLORS.BORDER_LIGHT,
          backgroundColor: COLORS.BG_WHITE,
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav className="flex items-center gap-6 flex-wrap">
            {[
              '사업소개',
              '수탁사업자 소개',
              '투표권시스템 (K-TOS)',
              '이용약관',
              '개인정보처리방침',
              '운영정책',
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-6">
                <a
                  href="#"
                  className={`text-sm font-medium transition-colors ${
                    index === 4 ? 'font-semibold' : ''
                  }`}
                  style={{
                    color: index === 4 ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.PRIMARY;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = index === 4 ? COLORS.TEXT_PRIMARY : COLORS.TEXT_SECONDARY;
                  }}
                >
                  {item}
                </a>
                {index < 5 && (
                  <span 
                    className="text-xs"
                    style={{ color: COLORS.BORDER_MEDIUM }}
                  >
                    |
                  </span>
                )}
              </div>
            ))}
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all hover:shadow-sm ml-auto"
              style={{
                backgroundColor: COLORS.TABLE_HEADER,
                color: COLORS.TEXT_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
            >
              불법스포츠토토신고
            </a>
          </nav>
        </div>
      </div>

      {/* Company Info */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        <p 
          className="text-sm font-medium mb-3"
          style={{ color: COLORS.TEXT_SECONDARY }}
        >
          체육진흥투표권 인터넷발매 수탁사업자 한국스포츠레저㈜
        </p>
        <div 
          className="flex items-center gap-3 flex-wrap text-sm mb-2"
          style={{ color: COLORS.TEXT_TERTIARY }}
        >
          <span>대표자명 박용철</span>
          <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
          <span>사업자등록번호 172-87-03278</span>
          <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
          <span>통신판매번호 제 2025-서울중구-1005 호</span>
        </div>
        <p 
          className="text-sm mb-2"
          style={{ color: COLORS.TEXT_TERTIARY }}
        >
          서울특별시 중구 세종대로12길 12 해남2빌딩 4~5층
        </p>
        <div 
          className="flex items-center gap-3 flex-wrap text-sm mb-4"
          style={{ color: COLORS.TEXT_TERTIARY }}
        >
          <span>고객센터 1588-4900</span>
          <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
          <span>팩스번호 02-6969-6195</span>
          <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
          <span>문의메일 helpdesk@betman.co.kr</span>
        </div>
        <p 
          className="text-sm font-medium"
          style={{ color: COLORS.TEXT_TERTIARY }}
        >
          ©2020 국민체육진흥공단. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

