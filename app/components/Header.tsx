'use client';

import { useState } from 'react';
import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';
import { NAVIGATION_MENU, MenuItem } from '../constants/menu';

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header 
      className="w-full bg-white sticky top-0 z-50"
      style={{ 
        boxShadow: COLORS.SHADOW_SM,
        borderBottom: `1px solid ${COLORS.BORDER_LIGHT}`
      }}
    >
      {/* Top Bar */}
      <div 
        className="w-full bg-white border-b"
        style={{ 
          borderColor: COLORS.BORDER_SUBTLE,
          backgroundColor: COLORS.BG_GRAY_50
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex justify-end">
          <nav className="flex items-center gap-6 h-9">
            <a 
              href="#" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ 
                color: COLORS.TEXT_SECONDARY,
                transition: DESIGN.TRANSITION_FAST
              }}
            >
              로그인
            </a>
            <a 
              href="#" 
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ 
                color: COLORS.TEXT_SECONDARY,
                transition: DESIGN.TRANSITION_FAST
              }}
            >
              회원가입
            </a>
          </nav>
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <h1 
                className="text-2xl font-bold tracking-tight"
                style={{ color: COLORS.PRIMARY }}
              >
                Redvelvet
              </h1>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1 relative">
            {NAVIGATION_MENU.map((menu) => {
              const isHovered = hoveredMenu === menu.label;
              const isActive = activeMenu === menu.label;
              
              return (
                <div
                  key={menu.label}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(menu.label)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a
                    href={menu.path}
                    className="px-4 py-2 text-base font-semibold rounded-lg transition-all relative block"
                    style={{
                      color: isHovered || isActive ? COLORS.PRIMARY : COLORS.TEXT_PRIMARY,
                      backgroundColor: isHovered || isActive ? COLORS.PRIMARY_SUBTLE : 'transparent',
                      transition: DESIGN.TRANSITION_FAST,
                    }}
                  >
                    {menu.label}
                    {/* 빨간색 밑줄 */}
                    {(isHovered || isActive) && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5"
                        style={{
                          backgroundColor: COLORS.PRIMARY,
                          transition: DESIGN.TRANSITION_FAST,
                        }}
                      />
                    )}
                  </a>

                  {/* 드롭다운 메뉴 */}
                  {isHovered && menu.children && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border overflow-hidden"
                      style={{
                        boxShadow: COLORS.SHADOW_LG,
                        borderColor: COLORS.BORDER_LIGHT,
                        minWidth: '200px',
                        zIndex: 1000,
                      }}
                      onMouseEnter={() => setHoveredMenu(menu.label)}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      {menu.children.map((child) => (
                        <a
                          key={child.path}
                          href={child.path}
                          className="block px-5 py-3 text-sm font-medium transition-colors hover:bg-gray-50"
                          style={{
                            color: COLORS.TEXT_PRIMARY,
                            transition: DESIGN.TRANSITION_FAST,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_50;
                            e.currentTarget.style.color = COLORS.PRIMARY;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = COLORS.TEXT_PRIMARY;
                          }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              className="px-4 py-2 text-sm font-medium rounded-lg border transition-all hover:shadow-sm"
              style={{ 
                color: COLORS.TEXT_PRIMARY,
                borderColor: COLORS.BORDER_LIGHT,
                backgroundColor: COLORS.BG_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
            >
              이용안내
            </button>
            <button 
              className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all hover:shadow-sm"
              style={{ 
                borderColor: COLORS.BORDER_LIGHT,
                backgroundColor: COLORS.BG_WHITE,
                transition: DESIGN.TRANSITION_FAST,
              }}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none"
                style={{ color: COLORS.TEXT_SECONDARY }}
              >
                <path 
                  d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

