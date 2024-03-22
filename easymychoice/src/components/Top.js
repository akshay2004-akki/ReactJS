import React, { useState, useEffect } from "react";
import img10 from "./images/img10.png";
import img11 from "./images/img11.png";
import img12 from "./images/img12.png";
import img13 from "./images/img13.png";
import img14 from "./images/img14.png";
import img15 from "./images/img15.png";
import img16 from "./images/img16.png";
import img17 from "./images/img17.png";
import img18 from "./images/img18.png";
import img19 from "./images/img19.png";
import img20 from "./images/img20.png";

function Top() {
  // const [scrollPosition2, setScrollPosition2] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const handleScroll2 = (scrollDirection) => {
    const container = document.getElementById("imagecontainer2");
    const scrollWidth2 = container.scrollWidth;
    console.log(scrollWidth2);
    const scrollLeft2 = container.scrollLeft;
    const scrollBy2 = window.innerWidth;

    if (scrollDirection === "forward") {
      container.scrollTo({
        left: scrollLeft2 + scrollBy2,
        behavior: "smooth",
      });
      // setScrollPosition2(scrollLeft2 + scrollBy2);
    }
    if (scrollDirection === "backward") {
      container.scrollTo({
        left: scrollLeft2 - scrollBy2,
        behavior: "smooth",
      });
      // setScrollPosition2(scrollLeft2 - scrollBy2);
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
      <div className="my-2 mx-4" style={{ transform: "translateY(70px)" }}>
        <h3 className="my-3" style={{fontFamily:"Dosis"}}>Top Categories</h3>
        <div
          className="d-flex mx-1 my-1"
          style={{ width: "99.8%", overflow: "scroll" }}
          id="imagecontainer2"
        >
          {[
            img10,
            img11,
            img12,
            img13,
            img14,
            img15,
            img16,
            img17,
            img18,
            img19,
            img20,
          ].map((item, index) => {
            return <img className="mx-3" key={index} src={item} alt="" />;
          })}
          {!isSmallScreen && (
            <>
              <button
                className="dis"
                onClick={() => handleScroll2("backward")}
                style={{
                  position: "absolute",
                  left: "0",
                  top: "63%",
                  transform: "translateY(-50%)",
                  border: "none",
                  height: "50px",
                }}
              >
                {" "}
                <i className="fa-solid fa-arrow-left"></i>{" "}
              </button>
              <button
                className="dis"
                onClick={() => handleScroll2("forward")}
                style={{
                  position: "absolute",
                  right: "0",
                  top: "63%",
                  transform: "translateY(-50%)",
                  border: "none",
                  height: "50px",
                }}
              >
                {" "}
                <i className="fa-solid fa-arrow-right"></i>{" "}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Top;
