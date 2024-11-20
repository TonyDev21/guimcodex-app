/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat' : ['"Montserrat"', 'sans-serif'],
        'number' : ['"Lato"' , 'sans-serif']
      },
      colors:{
        'primary-color' : '#3967e1',
        'secundary-color' : '#2b2d42',
        'btn-color-primary' : '#ffd700',
        'btn-color-secondary':'#f45d48',   
        'light-color':'#f0f4f8',
        'extra-color':'#74c0fc'
      },
      backgroundImage:{
        'banner-curso': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1728301083/vlzoggbev4dgzvrpjpzu.jpg')",
        'banner-beca': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1728428608/banner-beca_qcy4tz.png')",
        'banner-js': "url('https://res.cloudinary.com/dxnx6awui/image/upload/v1730265388/bannerJS_suetv9.svg')"
      }
    },
  },
  plugins: [],
}

