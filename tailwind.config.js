module.exports = {
  content: ['./resources/**/*.jsx', './resources/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB', // blue-600
        secondary: '#1F2937', // slate-900 (dark)
        surface: '#F9FAFB', // slate-50 (light background)
        accent: {
          info: '#3B82F6', // blue-500
          success: '#10B981', // emerald-500
          warning: '#F59E0B', // amber-500
          danger: '#EF4444', // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem', // 12px rounded corners
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.05)',
        hover: '0 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};
