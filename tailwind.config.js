/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'system-ui', 'sans-serif'],
        bison: ['Bison', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'system-ui', 'sans-serif'],
        jost: ['Jost', 'system-ui', 'sans-serif'],
      },
      textColor: {
        custom: '#FB491D',
        gray: '#696969',
        sblack: '#1F1F1F',
        grey: '#333333',
        


      },
      lineHeight: {
        '20.23': '20.23px',
        '20': '20px',
        '24': '24px',
        '16.23': '16.23px',
        '33': '33px',
        '42': '42px',
        '72': '72px',
      },
      fontWeight: {
        '300': 300,
        '400':400,
        '500':500,
        '700':700

      },

      fontSize: {
        '13.85': '13.85',
        '14': '14px',
        '42': '42px',
        '46':'46px',
        '80': '80px',
      },

      backgroundColor: {
        custom: '#FB491D',
      },

      width: {
        '42': '42',
        '175': '175px',
      },
      height: {
        '42': '42',
        '50': '50px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
