import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import imageEng from "./assets/images/thanks-en.png"; 
import imageFr from "./assets/images/thanks-fr.png"; 
import imageAr from "./assets/images/thanks-ar.png"; 

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('fr')} >
            Francaix
          </button>
          <button onClick={()=>handleClick('ar')} >
            Arabe
         </button>
        </nav>

        <header className="App-header">
          <img src={ //
            localStorage.getItem('i18nextLng') === "en" ? imageEng : 
            localStorage.getItem("i18nextLng") === "fr" ? imageFr : 
            imageAr} alt="logo" />          
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
        </header>
    </div>
  );
}

export default App;
