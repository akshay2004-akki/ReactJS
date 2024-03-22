import React, { useState, useEffect, useRef } from "react";
import logo12 from "./images/logo12.png";
import logo13 from "./images/logo13.png";
import logo14 from "./images/logo14.png";
import logo15 from "./images/logo15.png";
import logo16 from "./images/logo16.png";
import logo17 from "./images/logo17.jpg";
import logo18 from "./images/logo18.jpg";
import logo19 from "./images/logo19.jpg";
import logo20 from "./images/logo20.png";
import logo21 from "./images/logo21.png";

function Finance() {
  const [time, setTime] = useState();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(intervalId); // Cleanup function to clear the interval
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const containerRef = useRef();

  useEffect(()=>{
    const interval = setInterval(()=>{
      handleScroll('forward');
    },5000)
    return ()=> clearInterval(interval)
  },[])

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current
    // const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const scrollBy = window.innerWidth;

    if (scrollDirection === "forward") {
      if(scrollLeft > container.scrollWidth - container.clientWidth){
        container.scrollTo({
          left:0,
          behavior:"smooth"
        })
      }
      else{
        container.scrollTo({
          left: scrollLeft + scrollBy,
          behavior: "smooth",
        });
      }
    } else if (scrollDirection === "backward") {
      container.scrollTo({
        left: scrollLeft - scrollBy,
        behavior: "smooth",
      });
    }
  };

  const handleWidth = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <>
      <div className="mx-4 my-3" style={{ transform: "translateY(70px)" }}>
        <div
          className="top-text"
          style={{ display: "flex", justifyContent: "space-between", fontFamily:"Dosis" }}
        >
          <h3>BEST IN FINANCE</h3>
          <u style={{ color: "blue" }}>
            <h6>
              <button style={{border:"none", backgroundColor:"lightgray"}}> <u>View All</u> <i className="fa-solid fa-arrow-right"></i>{" "}</button>
            </h6>
          </u>
        </div>
        <div
          className="mx-1 my-1"
          style={{
            width: "100%", 
            overflowX: "auto", 
            display:"flex",
            gap:"10px"
          }}
          ref={containerRef}
        >
          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo12} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>EXTRAAAAA REWARDS</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo13} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>INCREASED REWARDS</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo14} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo15} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>JUST ARRIVED</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo16} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>LIFETIME FREE</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo17} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>JUST ARRIVED</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo18} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>EXTRA REWARDS</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo19} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>INCREASED REWARDS</b></span>
            </div>
          </div>

          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo20} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between align-items-center">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
            </div>
          </div>
          <div style={{ display: "inline-block", whiteSpace: "normal" }}>
            <div
              className="card catdeal_c"
              style={{ width: "300px", display: "inline-block" }}
            >
              <img src={logo21} className="card-img-top" alt="..." />
              <div className="card-body d-flex justify-content-between align-items-center">
                <button className="btn btn-danger">{time}</button>
                <button className="btn btn-warning">Apply Now</button>
              </div>
              <span><b>JUST ARRIVED</b></span>
            </div>
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
                zIndex:"9999"
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
                zIndex:"9999"
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </>
        )}
        </div>
      </div>
    </>
  );
}

export default Finance;
