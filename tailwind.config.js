/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        number: ['"Lato"', "sans-serif"],
      },
      colors: {
        "primary-color": "#44d62c",
        "secundary-color": "#000000",
        "dark-color": "#111111",
        "dark-light": "#252525",
        "dark-extra": "#888",
        "light-color": "#f0f4f8",
        theme: {
          background: "var(--background)",
          text: "var(--text)",
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          accent: "var(--accent)",
          sidebar: "var(--sidebar-bg)",
        },
      },
      backgroundImage: {
        "banner-home":
          "url('https://raw.githubusercontent.com/Eduardoaguic/fondos.idk/main/imagen/c633c20ede82f0e0ced7d570dbe3a1f3.gif')",
        "banner-curso":
          "url('https://github.com/Eduardoaguic/fondos.idk/blob/main/kyrby.gif?raw=true')",
        "banner-beca":
          "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1732879201/2pWQ6Ow6dNYGyA11WGCSfkPXdxy_e8mom6.svg')",
        "banner-js":
          "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1730265388/bannerJS_suetv9.svg')",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root, .theme01": {
          "--background": "#ffffff", 
          "--text": "#2d3748", 
          "--primary": "#f6e05e", 
          "--secondary": "#63b3ed", 
          "--accent": "#f97316", 
          "--sidebar-bg": "#ffffff", 
        },
        ".theme02": {
          "--background": "#1a202c",
          "--text": "#f7fafc",
          "--primary": "#63b3ed",
          "--secondary": "#ecc94b",
          "--accent":"#f97316",
          "--sidebar-bg": "#2d3748",
        },
        ".theme03": {
          "--background": "#000000",
          "--text": "#f0f4f8",
          "--primary": "#44d62c",
          "--secondary": "#111111",
          "--accent": "#888",
          "--sidebar-bg": "#252525",
        },
      });
    },
  ],
};
