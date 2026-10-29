/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F4EFE9', // 메인 배경 (웜 베이지)
          sub: '#DDD0C5',     // 보조 배경 / 구분선 (웜 샌드 그레이)
          card: '#FAF7F4',    // 카드 내부 배경 (부드러운 크림 오프화이트)
          pure: '#FFFFFF',    // 순백색
        },
        ink: {
          DEFAULT: '#302B28', // 본문 및 제목 (다크 웜 차콜)
          muted: '#685F58',   // 보조 텍스트
          subtle: '#8F847C',  // 연한 캡션
          faint: '#B8ACA3',   // 가장 연한 라벨
        },
        slate: {
          DEFAULT: '#A66C57', // 주요 강조 컬러 (테라코타 웜 시에나)
          hover: '#8E5743',
          dark: '#744433',
          light: '#BF826D',
          subtle: '#F2E4DC',
          tint: '#F9F3EF',
        },
        line: {
          DEFAULT: '#DDD0C5', // 구분선 (보조 컬러)
          dark: '#C2B2A5',
          subtle: '#EBE3DC',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"SF Pro"',
          'system-ui',
          '"Apple SD Gothic Neo"',
          '"Helvetica Neue"',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      letterSpacing: {
        tighter: '-0.035em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        widest: '0.08em',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(37, 43, 51, 0.04), 0 1px 2px -1px rgba(37, 43, 51, 0.04)',
        'card-hover': '0 8px 24px -4px rgba(37, 43, 51, 0.08)',
        'subtle': '0 1px 2px 0 rgba(37, 43, 51, 0.03)',
      }
    },
  },
  plugins: [],
}
