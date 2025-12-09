'use client';

import { useState, useEffect } from 'react';
import { COLORS } from '../constants/colors';
import { DESIGN } from '../constants/design';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BANKS = [
  '===은행 선택===',
  'KB국민은행',
  '신한은행',
  '우리은행',
  '하나은행',
  'NH농협은행',
  '카카오뱅크',
  '토스뱅크',
  'SC제일은행',
  '씨티은행',
  'IBK기업은행',
  'BNK부산은행',
  'DGB대구은행',
  'KDB산업은행',
  '새마을금고',
  '신협',
  '우체국',
];

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    phone: '',
    bank: '',
    accountNumber: '',
    accountHolder: '',
    registrationCode: '7899',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userIdChecked, setUserIdChecked] = useState(false);
  const [nicknameChecked, setNicknameChecked] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // 중복확인 초기화
    if (field === 'userId') setUserIdChecked(false);
    if (field === 'nickname') setNicknameChecked(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup:', formData);
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
          className="relative w-full max-w-3xl rounded-2xl bg-white overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            boxShadow: COLORS.SHADOW_XL,
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-3 border-b"
            style={{
              backgroundColor: COLORS.BG_WHITE,
              borderColor: COLORS.BORDER_LIGHT,
            }}
          >
            <h2
              className="text-xl font-bold"
              style={{ color: COLORS.PRIMARY }}
            >
              회원가입
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
          <div className="p-5">
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* 아이디 */}
              <div className="grid grid-cols-[1fr_auto] gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                    *아이디
                  </label>
                  <input
                    type="text"
                    value={formData.userId}
                    onChange={(e) => handleChange('userId', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                    placeholder="4~12자의 영문, 숫자를 입력해주세요."
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setUserIdChecked(true)}
                  className="px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: COLORS.BG_GRAY_100,
                    color: COLORS.TEXT_PRIMARY,
                    border: `1px solid ${COLORS.BORDER_LIGHT}`,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_200;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_100;
                  }}
                >
                  중복확인
                </button>
              </div>

              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *비밀번호 (#&+ 은 보안상 입력 불가)
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className="w-full px-3 py-2 pr-10 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                    placeholder="비밀번호를 입력해주세요."
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

              {/* 비밀번호 확인 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *비밀번호 확인
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    className="w-full px-3 py-2 pr-10 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                    placeholder="다시 한번 비밀번호를 입력해주세요."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                    style={{ color: COLORS.TEXT_SECONDARY }}
                  >
                    {showConfirmPassword ? (
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

              {/* 닉네임 */}
              <div className="grid grid-cols-[1fr_auto] gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                    *닉네임
                  </label>
                  <input
                    type="text"
                    value={formData.nickname}
                    onChange={(e) => handleChange('nickname', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                    placeholder="2~6자의 한글 닉네임을 입력해주세요."
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setNicknameChecked(true)}
                  className="px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: COLORS.BG_GRAY_100,
                    color: COLORS.TEXT_PRIMARY,
                    border: `1px solid ${COLORS.BORDER_LIGHT}`,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_200;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_100;
                  }}
                >
                  중복확인
                </button>
              </div>

              {/* 휴대폰 번호 */}
              {/* <div className="grid grid-cols-[1fr_auto] gap-2 items-end">
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                    *휴대폰 번호(-없이)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                    placeholder="휴대폰 번호를 입력해주세요."
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setVerificationSent(true)}
                  className="px-3 py-2 rounded-lg font-semibold transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: COLORS.BG_GRAY_100,
                    color: COLORS.TEXT_PRIMARY,
                    border: `1px solid ${COLORS.BORDER_LIGHT}`,
                    transition: DESIGN.TRANSITION_FAST,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_200;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = COLORS.BG_GRAY_100;
                  }}
                >
                  인증번호발송
                </button>
              </div> */}

              {/* 은행명 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *은행명
                </label>
                <select
                  value={formData.bank}
                  onChange={(e) => handleChange('bank', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                  required
                >
                  {BANKS.map((bank) => (
                    <option key={bank} value={bank === '===은행 선택===' ? '' : bank}>
                      {bank}
                    </option>
                  ))}
                </select>
              </div>

              {/* 계좌번호 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *계좌번호(-없이)
                </label>
                <input
                  type="text"
                  value={formData.accountNumber}
                  onChange={(e) => handleChange('accountNumber', e.target.value.replace(/[^0-9]/g, ''))}
                  className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                  placeholder="계좌번호를 입력해주세요."
                  required
                />
              </div>

              {/* 예금주 */}
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *예금주(한글만)
                </label>
                <input
                  type="text"
                  value={formData.accountHolder}
                  onChange={(e) => handleChange('accountHolder', e.target.value.replace(/[^가-힣]/g, ''))}
                  className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                  placeholder="계좌 예금주를 입력해주세요."
                  required
                />
              </div>

              {/* 가입코드 */}
              {/* <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: COLORS.TEXT_PRIMARY }}>
                  *가입코드 [가입코드가 없는경우 "000" 를 입력해주세요]
                </label>
                <input
                  type="text"
                  value={formData.registrationCode}
                  onChange={(e) => handleChange('registrationCode', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2"
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
                  required
                />
              </div> */}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold transition-all mt-4"
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
                회원가입
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

