module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'display' : ['Open Sans']
      },
      spacing:{
        '13.5':'54px',
        "text": '0.165rem',
        '0.25':"0.5px",
        '100' : "25rem",
        '140' : "35rem"
      },
      maxWidth:{
        "city":'19.25rem',
        "src-modal-w":'46.50rem',
        "edit-search-modal-w":'45.50rem',
      },
      rotate: {
        "0": "0deg",
        "45": "45deg",
        "-45": "-45deg",
        "60": "60deg",
        "-60": "-60deg",
        "90": "90deg",
        "-90": "-90deg"
      },
      screens: {
        sm: '480px',
        smm: '568px',
        sml: '640px',        
        md: '768px',
        mdl: '769px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        red:"#FC4040",
        black:"#000000",
        white:"#ffffff",
        yellow: {
          100: "#ffff00",
          200: "#f0dc82"
        },
        gray:{
          100:"#f5f5f5",
          200:"#EFEFF0",
          300:"#a0a0a0",
          400:"#9D9FA2",
          500:"#869b66",
          600:"#3a393a",
          700:"#212122",
          800: "#1d2024"
        },
        green:{
          100:"#D1E8DF",
          200:"#A3D1C0",
          300:"#76BAA0",
          400:"#48A380",
          500:"#388367",
          600:"#21624C",
          700:"#02402F",                    
        },
        blue:{
          100:"#F0F8FF",
          200:"#DAE3EF",
          300: "#518bbd",
          400: "#3b4356",
          500: "#92c9e0",
          600: "#4988c2"
          // 300:"#36c5f0",
          // 400:"#2f77ae",
          // 500:"#204A82",
          // 600:"#113362",
          // 700:"#001740",                
        },
        purple:{
          100:"#EADDED",
          200:"#D5BCDA",
          300:"#C09AC8",
          400:"#AB78B5",
          500:"#885F90",
          600:"#66456C",
          700:"#4a154b",
          800: "#bca4bd"
        },
        orange:{
          100:"#FCEBD4",
          200:"#F9D8A9",
          300:"#F5C47E",
          400:"#F2B053",
          500:"#BC8A40",
          600:"#8B662B",
          700:"#5D4212",                    
        },
        maroon:{
          100:"#F7CED8",
          200:"#EF9CB1",
          300:"#E76B89",
          400:"#DF3962",
          500:"#B02A4C",
          600:"#831835",
          700:"#58001A",                    
        },
        brown:{
          100:"#EBD7D0",
          200:"#D8AFA1",
          300:"#C48671",
          400:"#B05E42",
          500:"#8A4831",
          600:"#5B2B17",
          700:"#391000",                    
        },
        white: {
          100: "#ffffff",
          200: "#f8f7f8"
        }
      },
      opacity: {
        '35': '0.35',        
      },
      letterSpacing: {
        wider: '.1em',
        widest: '.22em',
      },   
      zIndex: {
        '-10' : '-10',
        '5' : '5',
        '500': 500,
        '1000': 1000,
      },
      boxShadow: {
        default: '0px -2px 10px 5px rgba(0,0,0,0.05)',
        'input': '5px 10px 10px rgba(0,0,0,.1)',
        'search-modal':'0px 0px 12px -2px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 0 0 2px rgba(81, 153, 181, 1)',
      }
    },    
  },
  // plugins: [
  //   require('@tailwindcss/line-clamp'),
  // ],
}