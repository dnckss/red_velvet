'use client';

import { COLORS } from '../constants/colors';

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2" style={{ borderColor: COLORS.PRIMARY }}>
      {/* Top Bar */}
      <div className="w-full bg-white border-b" style={{ borderColor: '#eeeeee' }}>
        <div className="max-w-[1080px] mx-auto px-4 flex justify-end">
          <nav className="flex items-center gap-4 h-7">
            <a 
              href="#" 
              className="text-sm"
              style={{ color: COLORS.TEXT_SECONDARY }}
            >
              로그인
            </a>
            <a 
              href="#" 
              className="text-sm"
              style={{ color: COLORS.TEXT_SECONDARY }}
            >
              회원가입
            </a>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white">
        <div className="max-w-[1080px] mx-auto px-4 flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ color: COLORS.PRIMARY }}>
              betman
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a 
              href="#" 
              className="text-lg font-extrabold"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              게임구매
            </a>
            <a 
              href="#" 
              className="text-lg font-extrabold"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              경기정보
            </a>
            <a 
              href="#" 
              className="text-lg font-extrabold"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              토토카페
            </a>
            <a 
              href="#" 
              className="text-lg font-extrabold"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              건전토토
            </a>
            <a 
              href="#" 
              className="text-lg font-extrabold"
              style={{ color: COLORS.TEXT_PRIMARY }}
            >
              고객센터
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button 
              className="px-4 py-2 text-xs border rounded"
              style={{ 
                color: COLORS.TEXT_BLACK,
                borderColor: '#bbbbbb'
              }}
            >
              이용안내
            </button>
            <button 
              className="w-7 h-7 border rounded"
              style={{ borderColor: '#bbbbbb' }}
            >
              {/* Search Icon */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

