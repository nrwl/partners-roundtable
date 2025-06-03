import { useEffect, useState } from 'react';
import './App.css';
import { Slides } from './Slides';
import { slides } from './2025/q2/slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = slides.length;

  const handleNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePreviousSlide();
      if (e.key === 'ArrowRight' || e.key === ' ') handleNextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePreviousSlide, handleNextSlide]);

  return (
    <>
     <div className="logo">
        <img src="/logo.png" alt="Nx Logo" style={{height: '100px', width: 'auto'}} />
      </div>
    <div className="slide-counter">
        <span id="current-slide">{currentSlide}</span> / <span id="total-slides">{totalSlides}</span>
    </div>
    
    <div className="slideshow-container">
        <Slides currentSlide={currentSlide} slides={slides} />
    </div>
      
    <div className="controls">
        {currentSlide > 1 && <button className="btn" id="prevBtn" onClick={handlePreviousSlide}>Previous</button>}
        {currentSlide < totalSlides && <button className="btn" id="nextBtn" onClick={handleNextSlide}>Next</button>}
    </div>
    </>
  );
}

export default App;
