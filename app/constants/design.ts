/**
 * 디자인 시스템 상수
 * 토스와 팔란티어 스타일의 현대적이고 전문적인 디자인 토큰
 */

export const DESIGN = {
  // Border Radius - 부드러운 둥근 모서리
  RADIUS_SM: '6px',
  RADIUS_MD: '8px',
  RADIUS_LG: '12px',
  RADIUS_XL: '16px',
  RADIUS_FULL: '9999px',
  
  // Spacing - 일관된 간격 시스템
  SPACING_XS: '4px',
  SPACING_SM: '8px',
  SPACING_MD: '16px',
  SPACING_LG: '24px',
  SPACING_XL: '32px',
  SPACING_2XL: '48px',
  
  // Typography Scale
  FONT_SIZE_XS: '12px',
  FONT_SIZE_SM: '14px',
  FONT_SIZE_BASE: '16px',
  FONT_SIZE_LG: '18px',
  FONT_SIZE_XL: '20px',
  FONT_SIZE_2XL: '24px',
  FONT_SIZE_3XL: '30px',
  
  // Font Weight
  FONT_WEIGHT_NORMAL: 400,
  FONT_WEIGHT_MEDIUM: 500,
  FONT_WEIGHT_SEMIBOLD: 600,
  FONT_WEIGHT_BOLD: 700,
  
  // Line Height
  LINE_HEIGHT_TIGHT: 1.25,
  LINE_HEIGHT_NORMAL: 1.5,
  LINE_HEIGHT_RELAXED: 1.75,
  
  // Transition
  TRANSITION_FAST: '150ms ease-in-out',
  TRANSITION_NORMAL: '200ms ease-in-out',
  TRANSITION_SLOW: '300ms ease-in-out',
  
  // Z-Index
  Z_DROPDOWN: 1000,
  Z_STICKY: 1020,
  Z_FIXED: 1030,
  Z_MODAL: 1040,
  Z_POPOVER: 1050,
  Z_TOOLTIP: 1060,
} as const;

