import { COLORS } from '../constants/colors';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Links */}
      <div className="border-b" style={{ borderColor: COLORS.BORDER_LIGHT }}>
        <div className="max-w-[1080px] mx-auto px-4 py-3">
          <nav className="flex items-center gap-4 flex-wrap">
            <a href="#" className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
              사업소개
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a href="#" className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
              수탁사업자 소개
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a href="#" className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
              투표권시스템 (K-TOS)
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a href="#" className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
              이용약관
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a href="#" className="text-sm font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
              개인정보처리방침
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a href="#" className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
              운영정책
            </a>
            <span className="text-xs" style={{ color: COLORS.BORDER_DARK_GRAY }}>|</span>
            <a 
              href="#" 
              className="px-3 py-1 text-sm rounded"
              style={{ 
                backgroundColor: COLORS.TABLE_HEADER,
                color: COLORS.TEXT_WHITE
              }}
            >
              불법스포츠토토신고
            </a>
          </nav>
        </div>
      </div>

      {/* Company Info */}
      <div className="max-w-[1080px] mx-auto px-4 py-4">
        <p className="text-xs mb-2" style={{ color: COLORS.TEXT_TERTIARY }}>
          체육진흥투표권 인터넷발매 수탁사업자 한국스포츠레저㈜
        </p>
        <div className="flex items-center gap-2 flex-wrap text-xs mb-2" style={{ color: COLORS.TEXT_TERTIARY }}>
          <span>대표자명 박용철</span>
          <span>|</span>
          <span>사업자등록번호 172-87-03278</span>
          <span>|</span>
          <span>통신판매번호 제 2025-서울중구-1005 호</span>
        </div>
        <p className="text-xs mb-2" style={{ color: COLORS.TEXT_TERTIARY }}>
          서울특별시 중구 세종대로12길 12 해남2빌딩 4~5층
        </p>
        <div className="flex items-center gap-2 flex-wrap text-xs mb-2" style={{ color: COLORS.TEXT_TERTIARY }}>
          <span>고객센터 1588-4900</span>
          <span>|</span>
          <span>팩스번호 02-6969-6195</span>
          <span>|</span>
          <span>문의메일 helpdesk@betman.co.kr</span>
        </div>
        <p className="text-xs" style={{ color: COLORS.TEXT_TERTIARY }}>
          ©2020 국민체육진흥공단. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

