import React, { useState, useEffect } from 'react';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png'; // Fixed typo
import img6 from './images/img6.png';
import img7 from './images/img7.png';
import img8 from './images/img8.png';
import img9 from './images/img9.png';

function Hero() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [forSmallScreen, setForSmallScreen] = useState('');
  const handleSize = () => {
    if (window.innerWidth < 990) {
      setForSmallScreen('my-5');
    } else {
      setForSmallScreen('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll('forward');
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (scrollDirection) => {
    const container = document.getElementById('imageContainer');
    const scrollLeft = container.scrollLeft;
    const scrollStep = window.innerWidth;
     if(scrollDirection==='forward'){
      if (scrollLeft >= container.scrollWidth - container.clientWidth) {
      
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      }
      else{
        container.scrollTo({
          left: scrollLeft + scrollStep,
          behavior: 'smooth',
        });
      }
    }if(scrollDirection==='backward'){
      container.scrollTo({
        left: scrollLeft + scrollStep,
        behavior: 'smooth',
      });
    }
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: 'relative',
          transform: 'translateY(70px)',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className={`d-flex image slider my-1 mx-1 ${forSmallScreen}`}
          style={{ width: '99.8%', overflow: 'scroll' }}
          id="imageContainer"
        >
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((item, index) => {
            return (
              <img
                className="mx-1"
                src={item}
                alt=""
                key={index}
                style={{ borderRadius: '0px' }}
              />
            );
          })}
        </div>
        {!isSmallScreen && (
          <>
            <button
              className="dis"
              onClick={() => handleScroll('backward')}
              style={{
                position: 'absolute',
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                height: '50px',
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="dis"
              onClick={() => handleScroll('forward')}
              style={{
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                height: '50px',
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Hero;
