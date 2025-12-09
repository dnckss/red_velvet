'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignup?: () => void;
}

export default function LoginModal({ isOpen, onClose, onOpenSignup }: LoginModalProps) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 로그인 로직 구현
    console.log('Login:', { userId, password, rememberMe });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
        }}
      >
        {/* Modal */}
        <div
          className="relative w-full max-w-md rounded-2xl bg-white overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow: COLORS.SHADOW_XL,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{
              backgroundColor: COLORS.BG_WHITE,
              borderColor: COLORS.BORDER_LIGHT,
            }}
          >
            <h2
              className="text-xl font-bold"
              style={{ color: COLORS.PRIMARY }}
            >
              로그인
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:bg-gray-100"
              style={{
                color: COLORS.TEXT_SECONDARY,
                transition: DESIGN.TRANSITION_FAST,
              }}
              aria-label="닫기"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* User ID Input */}
              <div>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: COLORS.BORDER_LIGHT,
                    backgroundColor: COLORS.BG_WHITE,
                    color: COLORS.TEXT_PRIMARY,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = COLORS.PRIMARY;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${COLORS.PRIMARY_SUBTLE}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = COLORS.BORDER_LIGHT;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  placeholder="아이디를 입력해주세요"
                  required
                />
              </div>

              {/* Password Input */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg border transition-all focus:outline-none focus:ring-2"
                    style={{
                      borderColor: COLORS.BORDER_LIGHT,
                      backgroundColor: COLORS.BG_WHITE,
                      color: COLORS.TEXT_PRIMARY,
                      transition: DESIGN.TRANSITION_FAST,
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = COLORS.PRIMARY;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${COLORS.PRIMARY_SUBTLE}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = COLORS.BORDER_LIGHT;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    placeholder="비밀번호를 입력해주세요"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                    style={{ color: COLORS.TEXT_SECONDARY }}
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border mr-2"
                    style={{
                      borderColor: COLORS.BORDER_MEDIUM,
                      accentColor: COLORS.PRIMARY,
                    }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: COLORS.TEXT_SECONDARY }}
                  >
                    아이디 저장
                  </span>
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.TEXT_WHITE,
                  transition: DESIGN.TRANSITION_FAST,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.PRIMARY_DARK;
                  e.currentTarget.style.boxShadow = COLORS.SHADOW_MD;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                로그인
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 pt-6 border-t flex items-center justify-center gap-3" style={{ borderColor: COLORS.BORDER_LIGHT }}>
              <Link
                href="/find-id"
                className="text-sm font-medium transition-colors"
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
                onClick={onClose}
              >
                아이디 찾기
              </Link>
              <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
              <Link
                href="/find-password"
                className="text-sm font-medium transition-colors"
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
                onClick={onClose}
              >
                비밀번호 재설정
              </Link>
              <span style={{ color: COLORS.BORDER_MEDIUM }}>|</span>
              <button
                type="button"
                className="text-sm font-medium transition-colors"
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
                onClick={() => {
                  onClose();
                  if (onOpenSignup) {
                    onOpenSignup();
                  }
                }}
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

