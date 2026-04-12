import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

// --- IMPORT LOGO & THUMBNAILS ---
import thumb1 from '../assets/Videos/cinematic.jpg';  
import thumb2 from '../assets/Videos/whatiswarhammer40.jpg'; 
import thumb3 from '../assets/Videos/armouring.jpg';       
import whatIsLogoImg from '../assets/warhammer40k.png';
import servitor1Img from '../assets/adeptus mecha 1.png';
import servitor2Img from '../assets/adeptus mecha 2.png';

export default function Home() {
 const slides = [
    { id: 0, title: "WHAT IS WARHAMMER 40,000", videoSrc: '/Videos new/Video1.mp4', thumbImg: thumb1 }, 
    { id: 1, title: "THE ARMOURING OF A SPACE MARINE", videoSrc: '/Videos new/Video2.mp4', thumbImg: thumb2 }, 
    { id: 2, title: "THE NEW EDITION CINEMATIC TRAILER", videoSrc: '/Videos new/Video3.mp4', thumbImg: thumb3 } 
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const videoBgRef = useRef(null);

  useEffect(() => {
    if (videoBgRef.current) {
      videoBgRef.current.load(); 
      const playPromise = videoBgRef.current.play(); 
      if (playPromise !== undefined) {
        playPromise.catch(error => console.log("Autoplay bị chặn:", error));
      }
    }
  }, [currentSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); 
        }
      });
    }, { threshold: 0.05 }); 

    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  const [modalVideoSrc, setModalVideoSrc] = useState(null);
  const openVideoModal = (src) => setModalVideoSrc(src);
  const closeVideoModal = () => setModalVideoSrc(null);
  const handleVideoEnd = () => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);

  return (
    <main className="main-content">
      <section className="hero-slider">
        <video ref={videoBgRef} className="video-bg" autoPlay muted playsInline onEnded={handleVideoEnd}>
          <source src={slides[currentSlide].videoSrc} type="video/mp4" />
        </video>
        <div className="slider-overlay"></div>
        <div className="thumbnails-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`video-thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => openVideoModal(slide.videoSrc)}
              style={{ backgroundImage: `url(${slide.thumbImg})` }}
            >
              <div className="thumbnail-overlay">
                <div className="play-btn">▶</div>
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="what-is-section">
        <img src={whatIsLogoImg} alt="Warhammer 40,000 Logo" className="what-is-logo" />
        <h2 className="what-is-title">A NEW EDITION IS<br/>ON ITS WAY</h2>
      </section>

      <section className="new-edition-section">
        <video className="new-edition-bg" src={'/Videos new/Video4.mp4'} autoPlay muted loop playsInline />
        <div className="new-edition-overlay"></div>
        <div className="new-edition-content">
          <h2>ARMAGEDDON: WARHAMMER<br/>40,000 NEW EDITION<br/>CINEMATIC TRAILER</h2>
          <button className="watch-video-btn" onClick={() => openVideoModal('/Videos new/Video4.mp4')}>
            <span className="play-icon-small">▶</span> WATCH VIDEO
          </button>
        </div>
      </section>

      <section className="grimdark-quote-section">
        <p className="advertise">A brand-new edition of Warhammer<br/>40,000 is on the way, starting with an<br/> incredible launch box, coming soon. It’s<br/>absolutely loaded with new miniatures,<br/>and marks a return to one of<br/>Warhammer 40,000’s most storied<br/>theatres of conflict</p>
        <p className="quote-intro">IN THE GRIM DARKNESS OF THE FAR FUTURE...</p>
        <h2 className="quote-main">THERE IS ONLY WAR!</h2>
      </section>

      <section className="find-out-more-section">
        <div className="find-out-container">
          <h2 className="section-title-left hidden-animate">FIND OUT MORE</h2>
          <div className="cards-wrapper">
            <div className="info-card hidden-animate">
              <div className="card-bg" style={{ backgroundImage: `url('${servitor1Img}')` }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="animate-delay-1">GET EXCITED</h3>
                <p className="animate-delay-2">Catch up with all the awesome Warhammer 40,000 reveal videos from AdeptiCon</p>
                <button className="card-btn yellow-pill animate-delay-3">WATCH NOW</button>
              </div>
            </div>
            <div className="info-card hidden-animate" style={{ transitionDelay: '0.2s' }}>
              <div className="card-bg" style={{ backgroundImage: `url('${servitor2Img}')` }}></div>
              <div className="card-overlay"></div>
              <div className="card-content">
                <h3 className="animate-delay-1">GET THE INTEL</h3>
                <p className="animate-delay-2">Sign up for the Warhammer newsletter to get all the latest updates to your inbox.</p>
                <button className="card-btn yellow-pill animate-delay-3">SUBSCRIBE NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalVideoSrc && (
        <div className="video-modal-backdrop" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeVideoModal}>✕</button>
            <video src={modalVideoSrc} className="modal-video-player" controls autoPlay />
          </div>
        </div>
      )}
    </main>
  );
}