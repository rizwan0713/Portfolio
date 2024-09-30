/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "lightWhite" : "#f5f5f5",



        "para" : "#777777",

        "rich-purple-50" : "#f3f2ff",
        "rich-purple-100" : "#e9e8ff",
        "rich-purple-200" : "#d5d4ff",
        "rich-purple-300" : "#b7b1ff",
        "rich-purple-400" : "#9385ff",
        "rich-purple-500" : "#7b61ff",
        "rich-purple-600" : "#5d30f7",
        "rich-purple-700" : "#4f1ee3",
        "rich-purple-800" : "#4218bf",
        "rich-purple-900" : "#37169c",
        "rich-purple-950" : "#200b6a",

        "rich-black-5" : "#F1F2FF",
        "rich-black-25" : "#DBDDEA",
        "rich-black-50" : "#C5C7D4",
        "rich-black-100" : "#AFB2BF",
        "rich-black-200" : "#999DAA",
        "rich-black-300" : "#838894",
        "rich-black-400": "#6E727F",
        "rich-black-500": "#585D69",
        "rich-black-600": "#424854",
        "rich-black-700": "#2C333F",
        "rich-black-800": "#161D29",
        "rich-black-900": "#000814",
        
      },
   
      fontFamily:{
        "Inter" : "Inter"
      },
      boxShadow: {
        "3dBox" : "inset 7px 7px 14px #fbe2e3, inset -7px -7px 14px #dbd7fb;"
      },

      backgroundImage:{
        "hexagon": "url('/src/assets/bg/hexagon.svg')"
      }
      
    },
  },
  plugins: [],
}

