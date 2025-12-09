/**
 * 현대적이고 전문적인 디자인 시스템 색상 팔레트
 * 토스와 팔란티어 스타일을 반영한 색상 체계
 */

export const COLORS = {
  // Primary Colors - Redvelvet 브랜드 빨간색
  PRIMARY: '#DC2626', // 진한 빨강 (Redvelvet 메인 컬러)
  PRIMARY_DARK: '#B91C1C', // 더 진한 빨강
  PRIMARY_LIGHT: '#EF4444', // 밝은 빨강
  PRIMARY_SUBTLE: '#FEE2E2', // 연한 빨강 배경
  
  // Text Colors - 명확한 계층 구조
  TEXT_PRIMARY: '#1A1A1A',
  TEXT_SECONDARY: '#6B7280',
  TEXT_TERTIARY: '#9CA3AF',
  TEXT_DISABLED: '#D1D5DB',
  TEXT_WHITE: '#FFFFFF',
  
  // Background Colors - 깔끔하고 밝은 배경
  BG_WHITE: '#FFFFFF',
  BG_GRAY_50: '#F9FAFB',
  BG_GRAY_100: '#F3F4F6',
  BG_GRAY_200: '#E5E7EB',
  BG_PRIMARY_SUBTLE: '#FDF2F8',
  
  // Border Colors - 부드러운 경계선
  BORDER_LIGHT: '#E5E7EB',
  BORDER_MEDIUM: '#D1D5DB',
  BORDER_DARK: '#9CA3AF',
  BORDER_SUBTLE: '#F3F4F6',
  
  // Table Header - 전문적인 느낌
  TABLE_HEADER: '#1F2937',
  TABLE_HEADER_LIGHT: '#374151',
  
  // Game Type Colors - 명확하고 차별화된 색상
  GAME_TYPE_NORMAL: '#6B7280',
  GAME_TYPE_HANDICAP: '#F59E0B',
  GAME_TYPE_UNDER_OVER: '#10B981',
  GAME_TYPE_SUM: '#3B82F6',
  
  // Status Colors - 직관적인 상태 표시
  STATUS_ACTIVE: '#DC2626',
  STATUS_SUCCESS: '#10B981',
  STATUS_WARNING: '#F59E0B',
  STATUS_ERROR: '#EF4444',
  STATUS_DEFAULT: '#6B7280',
  
  // Shadow Colors - 부드러운 그림자
  SHADOW_SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  SHADOW_MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  SHADOW_LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  SHADOW_XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

