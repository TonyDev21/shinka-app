/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"', 'sans-serif'],
        'number': ['"Lato"', 'sans-serif']
      },
      colors: {
        'primary-color': '#44d62c',
        'secundary-color': '#000000',
        'dark-color': '#111111',
        'dark-light': '#252525',
        'dark-extra': '#888',
        'light-color': '#f0f4f8',
        'extra-color': '#a3f296',
        theme: {
          background: 'var(--background)',
          text: 'var(--text)',
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
          sidebar: 'var(--sidebar-bg)',
        }
      },
      backgroundImage: {
        'banner-home': "url('https://raw.githubusercontent.com/Eduardoaguic/fondos.idk/main/imagen/c633c20ede82f0e0ced7d570dbe3a1f3.gif')",
        'banner-curso': "url('https://github.com/Eduardoaguic/fondos.idk/blob/main/kyrby.gif?raw=true')",
        'banner-beca': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1732879201/2pWQ6Ow6dNYGyA11WGCSfkPXdxy_e8mom6.svg')",
        'banner-js': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1730265388/bannerJS_suetv9.svg')"
      }
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        ':root, .theme01': {
          '--background': theme('colors.white'),
          '--text': theme('colors.gray.800'),
          '--primary': theme('colors.yellow.400'),
          '--secondary': theme('colors.blue.400'),
          '--accent': theme('colors.orange.500'),
          '--sidebar-bg': theme('colors.white'),
        },
        '.theme02': {
          '--background': theme('colors.gray.900'),
          '--text': theme('colors.gray.100'),
          '--primary': theme('colors.blue.400'),
          '--secondary': theme('colors.yellow.500'),
          '--accent': theme('colors.orange.400'),
          '--sidebar-bg': theme('colors.gray.800'),
        },
        '.theme03': {
          '--background': theme('colors.green.50'),
          '--text': theme('colors.green.900'),
          '--primary': theme('colors.green.500'),
          '--secondary': theme('colors.yellow.400'),
          '--accent': theme('colors.yellow.600'),
          '--sidebar-bg': theme('colors.green.100'),
        },
      });
    }
  ],
}