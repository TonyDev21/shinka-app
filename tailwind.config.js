/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat' : ['"Montserrat"', 'sans-serif'],
        'number' : ['"Lato"' , 'sans-serif']
      },
      colors:{
        theme01: {
          background: '#1a202c',
          text: '#edf2f7',
        },
        theme02: {
          background: '#f7fafc',
          text: '#2d3748',
        },
        theme03: {
          background: '#f9c74f', 
          text: '#2d2d2d', 
        },
        
          'primary-color' : '#44d62c',
          'secundary-color' : '#000000',
          'dark-color' : '#111111',
          'dark-light':'#252525',
          'dark-extra':'#888',
          'light-color':'#f0f4f8',
          'extra-color':'#a3f296',
          
      },
      backgroundImage:{
        'banner-home' : "url('https://raw.githubusercontent.com/Eduardoaguic/fondos.idk/main/imagen/c633c20ede82f0e0ced7d570dbe3a1f3.gif')",
        'banner-curso': "url('https://github.com/Eduardoaguic/fondos.idk/blob/main/kyrby.gif?raw=true')",
        'banner-beca': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1732879201/2pWQ6Ow6dNYGyA11WGCSfkPXdxy_e8mom6.svg')",
        'banner-js': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1730265388/bannerJS_suetv9.svg')"
      }
    },
  },
  plugins: [],
}

