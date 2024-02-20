import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderFrame from "./components/HeaderFrame";

function App() {
  let state = {
    code: [
      {
        customCss: `
        /* CUSTOMIZE YOUR CSS WITH TAILWIND */
       
        @import 'tailwindcss/base';
         @import 'tailwindcss/components';
         @import 'tailwindcss/utilities';
                
         /* FONTS */
         @import url('https://db.onlinewebfonts.com/c/4cd7c95ebd9e972224a5473c6172b30a?family=Futura+Bold+Italic');
         @import url('https://fonts.cdnfonts.com/css/hind');
                
        :root {}
                
        @layer base {
          html {
            @apply font-hind font-semibold text-base text-grey;
          }
                
          h1,
          .h1 {
            @apply font-futura font-semibold md:text-md lg:text-xl italic leading-9;
          }
                  
          h4,
          .h4 {
            @apply font-futura font-semibold italic text-[20px] !important;
          }
        }
                
        @layer utilities {
            .gradient-filter::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8576680672268908) 6%, rgba(255, 255, 255, 0) 55%);
                pointer-events: none;
            }
        
            .custom-height-frame {
                height: calc(100vh - 64px);
            }
        }`,
      },
      {
        customConfig: `
      /* CUSTOMIZE YOUR CONFIGURATION */
     
      /** @type {import('tailwindcss').Config} */
export default {
content: [
  './public/index.html',
  "./src/**/*.{js,jsx,ts,tsx}",
  './src/**/*.js',
],
theme: {
  colors: {
    'primary': '#ec3655',
    'secondary': '#0d0d0d',
    'grey': 'hsla(0,0%,100%,.8);',
    'dark-grey': '#181818',
    'white': '#fff',
  },
  fontFamily: {
    'futura': ['Futura Bold Italic', "sans-serif"],
    'hind': ['Hind', "sans-serif"],
  },
  fontSize: {
    sm: '0.8rem',
    base: '1rem',
    md: '1,5rem',
    xl: '1.8rem',
  },
  borderRadius: {
    'none': '0',
    'sm': '0.125rem',
    'md': '0.1875rem',
    'lg': '0.25rem',
    'full': '0.375rem',
    'large': '0.5rem',
  },
  
  extend: {
    maxWidth: {
      '50%': '50%',
    }
  },
},
plugins: [],
}

`,
      },
      {
        htmlClasses: `
      /* TAILWIND CLASSES IN YOUR JSX RENDER */
     
      <div className="relative">
      <div className="w-[32px] h-[32px] cursor-pointer" onClick={toggleMenu}>
        <img src={UserIcon} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="absolute right-0 bg-dark-grey w-[20rem] rounded-lg">
        <div id="menudropdown" className="p-4 hidden">
          <div className="h4">Compte CANAL+</div>
          <p>Connectez-vous pour accéder à vos programmes et services</p>
          <div className="py-4">
            <Button> Se connecter </Button>
          </div>
          <hr className="opacity-50"></hr>
          <ul>
            <li className="py-1">
              <a href="">Nos offres </a>
            </li>
            <li className="py-1">
              <a href="">Espace client</a>
            </li>
            <li className="py-1">
              <a href="">Assistance</a>
            </li>
            <li className="py-1">
              <a href="">Fonctionnalités</a>
            </li>
            <li className="py-1">
              <a href="">CANAL+ Responsable</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

`,
      },
    ],
  };
  return (
    <div className="relative">
      <Header code={state.code} />
      <HeaderFrame code={state.code} />
    </div>
  );
}

export default App;
