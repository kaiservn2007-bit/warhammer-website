import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Armies from './pages/Armies';

import logoImg from './assets/White-Warhammerlogo.png'; 
import storesImg from './assets/OurWarhammerStores_2020.png';
import finderImg from './assets/StoreFinder_2020.png';
import worldImg from './assets/GW-warhammerworld-logo@2x.png';
import libraryImg from './assets/GW-blacklibrary-logo@2x.png';
import merchImg from './assets/WH-Merch-logo-V4-WHT.png';
import flagEsImg from './assets/Flags_Language/Flag_of_Spain.png';
import flagItImg from './assets/Flags_Language/Flag_of_Italy.svg.png';
import flagJpImg from './assets/Flags_Language/Flag_of_Japan.svg.webp';
import flagUsUkImg from './assets/Flags_Language/Flag_of_the_United_States_and_United_Kingdom.png';
import flagVnImg from './assets/Flags_Language/Flag_of_Vietnam_(16-9).svg.png';
import subHeaderLogoImg from './assets/warhammer40k.png';      
import facebookLogo from './assets/Media_logos/facebook_logo.png';
import twitchLogo from './assets/Media_logos/twitch.png';
import youtubeLogo from './assets/Media_logos/youtube-logo-png-46016.png';
import footerLogoImg from './assets/tm.png';

function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSubNavOpen, setIsMobileSubNavOpen] = useState(false);

  const languages = [
    { code: 'usuk', name: 'English', flag: flagUsUkImg },
    { code: 'es', name: 'Español', flag: flagEsImg },
    { code: 'it', name: 'Italiano', flag: flagItImg },
    { code: 'jp', name: '日本語', flag: flagJpImg },
    { code: 'vn', name: 'Tiếng Việt', flag: flagVnImg },
  ];
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const toggleLang = () => setIsLangOpen(!isLangOpen);
  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsLangOpen(false);
  };
  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) setActiveMenu(null);
    else setActiveMenu(menuName);
  };

  return (
    <BrowserRouter>
      <div className="warhammer-layout">
        
        {/* HEADER CHÍNH CỐ ĐỊNH */}
        <header className="main-header">
           <div className="header-top">
            
            {/* Cột trái: Nút Mobile & Logo */}
            <div className="header-left">
              <button className="mobile-toggle-btn" onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
                ☰
              </button>
              <Link to="/" className="logo-container">
                <img src={logoImg} alt="Warhammer Logo" className="logo-img" />
              </Link>
            </div>

            {/* Cột giữa: Dải Menu ngang */}
            <nav className={`navbar ${isMobileNavOpen ? 'mobile-open' : ''}`}>
              <a href="#new">New to Warhammer</a><span className="separator hidden-mobile">|</span>
              <a href="#explore">Explore our Games</a><span className="separator hidden-mobile">|</span>
              <a href="#paint">Paint Warhammer</a><span className="separator hidden-mobile">|</span>
              <a href="#community">Warhammer Community</a><span className="separator hidden-mobile">|</span>
              <button className={`menu-btn ${activeMenu === 'visit' ? 'active' : ''}`} onClick={() => toggleMenu('visit')}>
                Visit Us <span className="arrow">{activeMenu === 'visit' ? '∧' : '∨'}</span>
              </button>
              <div className={`mobile-sub-menu ${activeMenu === 'visit' ? 'open' : ''}`}>
                 <img src={storesImg} alt="Our Warhammer Stores" />
                 <img src={finderImg} alt="Store Finder" />
                 <img src={worldImg} alt="Warhammer World" />
              </div>
              <span className="separator hidden-mobile">|</span>
              <button className={`menu-btn ${activeMenu === 'shop' ? 'active' : ''}`} onClick={() => toggleMenu('shop')}>
                Shop Online <span className="arrow">{activeMenu === 'shop' ? '∧' : '∨'}</span>
              </button>
              <div className={`mobile-sub-menu ${activeMenu === 'shop' ? 'open' : ''}`}>
                 <span className="com-text-mobile">WARHAMMER.COM</span>
                 <img src={libraryImg} alt="Black Library" />
                 <img src={merchImg} alt="Merchandise" />
              </div>
              <span className="separator hidden-mobile">|</span>
              <a href="#plus">Warhammer+</a>
            </nav>

            {/* Cột phải: Chỉ hiển thị Cờ ngôn ngữ */}
            <div className="header-right">
              <div className="lang-selector-container">
                <button className="lang-display-btn" onClick={toggleLang}>
                  {/* Bỏ thẻ text, chỉ giữ lại lá cờ và mũi tên */}
                  <img src={currentLanguage.flag} alt="Current Language" className="current-flag" />
                  <span className="arrow-small">{isLangOpen ? '∧' : '∨'}</span>
                </button>
                {isLangOpen && (
                  <div className="lang-dropdown">
                    <div className="lang-list-inner">
                      {languages.map((lang) => (
                        <div key={lang.code} className={`lang-option ${lang.code === currentLanguage.code ? 'is-selected' : ''}`} onClick={() => handleLanguageChange(lang)}>
                          <img src={lang.flag} alt={lang.name} className="option-flag" />
                          <span className="option-lang-name">{lang.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* MEGA MENU VỚI HIỆU ỨNG ANIMATION */}
          {activeMenu === 'visit' && (
            <div className="mega-menu">
               <div className="mega-menu-content">
                  <div className="menu-item-box">
                     <img src={storesImg} alt="Our Warhammer Stores" />
                  </div>
                  <div className="menu-item-box">
                     <img src={finderImg} alt="Store Finder" />
                  </div>
                  <div className="menu-item-box">
                     <img src={worldImg} alt="Warhammer World" />
                  </div>
               </div>
            </div>
          )}
          
          {activeMenu === 'shop' && (
            <div className="mega-menu">
               <div className="mega-menu-content">
                  <div className="menu-item-box">
                     <span className="com-text">WARHAMMER.COM</span>
                  </div>
                  <div className="menu-item-box">
                     <img src={libraryImg} alt="Black Library" />
                  </div>
                  <div className="menu-item-box">
                     <img src={merchImg} alt="Merchandise" />
                  </div>
               </div>
            </div>
          )}
        </header>

        {/* SUB-HEADER CÓ ĐIỀU HƯỚNG */}
        <div className="sub-header">
          <div className="sub-header-inner">
            <img src={logoImg} alt="Icon" className="mobile-sub-icon" />
            
            <Link to="/" className="sub-logo-40k">
              <img src={subHeaderLogoImg} alt="Warhammer 40k Logo" className="sub-logo-img" />
            </Link>
            
            <button className={`mobile-toggle-btn sub-toggle hidden-desktop ${isMobileSubNavOpen ? 'active' : ''}`}  onClick={() => setIsMobileSubNavOpen(!isMobileSubNavOpen)}>
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            </button>
            
            <nav className={`sub-nav ${isMobileSubNavOpen ? 'mobile-open' : ''}`}>
              <NavLink to="/starting" className={({ isActive }) => isActive ? "active-link" : ""}>
                STARTING<br className="hidden-mobile"/>WARHAMMER 40,000
              </NavLink>
              <NavLink to="/discover" className={({ isActive }) => isActive ? "active-link" : ""}>
                DISCOVER THE 41ST<br className="hidden-mobile"/>MILLENNIUM
              </NavLink>
              <NavLink to="/armies" className={({ isActive }) => isActive ? "active-link" : ""}>
                THE<br className="hidden-mobile"/>ARMIES
              </NavLink>
              <NavLink to="/games" className={({ isActive }) => isActive ? "active-link" : ""}>
                OTHER<br className="hidden-mobile"/>GAMES
              </NavLink>
            </nav>
          </div>
        </div>

        {/* ================= ĐÂY LÀ NƠI TRÁO RUỘT TRANG WEB ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armies" element={<Armies />} />
        </Routes>
        {/* ==================================================================== */}

        {/* FOOTER CỐ ĐỊNH */}
        <footer className="site-footer">
          <div className="footer-content">
            <div className="footer-top-mobile-wrapper">
              <div className="footer-logo">
                <img src={footerLogoImg} alt="Warhammer TM" />
              </div>
              <div className="footer-social">
                <a href="https://facebook.com" className="footer-social-box fb-link"><img src={facebookLogo} alt="Facebook" /></a>
                <a href="https://twitch.tv" className="footer-social-box twitch-link"><img src={twitchLogo} alt="Twitch" /></a>
                <a href="https://youtube.com" className="footer-social-box youtube-link"><img src={youtubeLogo} alt="YouTube" /></a>
                <div className="footer-social-box empty-link"></div>
              </div>
            </div>
            <div className="footer-center">
              <div className="footer-links">
                <a href="#games">GAMES WORKSHOP</a> <span className="divider">|</span>
                <a href="#forge">FORGE WORLD</a> <span className="divider">|</span>
                <a href="#black">BLACK LIBRARY</a>
              </div>
              <div className="footer-links">
                <a href="#cookie">COOKIE NOTICE</a> <span className="divider">|</span>
                <a href="#privacy">PRIVACY NOTICE</a> <span className="divider">|</span>
                <a href="#settings">COOKIES SETTINGS</a>
              </div>
              <p className="copyright-text">GW, Games Workshop, Citadel, White Dwarf, Space Marine, 40K, Warhammer, Warhammer 40,000, the ‘Aquila’ Double-headed Eagle logo, Warhammer Age of Sigmar, Battletome, Stormcast Eternals, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likenesses thereof, are either ® or ™, and/or © Games Workshop Limited, variably registered around the world. All Rights Reserved.</p>
            </div>
          </div>
          <div className="mobile-bottom-pill hidden-desktop">
            <a href="https://warhammer40000.com" target="_blank" rel="noopener noreferrer">warhammer40000.com</a>
          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;