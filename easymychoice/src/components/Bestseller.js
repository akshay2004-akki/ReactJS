import React, { useState, useEffect, useRef } from "react";

function Bestseller() {
  const [products, setProducts] = useState([]); // State to store fetched products
  const containerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      handleScroll("forward");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (scrollDirection) => {
    const container = containerRef.current;
    // const scrollWidth = container.scrollWidth;
    const scrollLeft = container.scrollLeft;
    const scrollBy = window.innerWidth;

    if (scrollDirection === "forward") {
      if (scrollLeft > container.scrollWidth - container.clientWidth) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
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

  // API fetching
  const fetchData = async () => {
    const url =
      "https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=2&country=IN&category_id=aps";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cac67db0f1mshd481c4a651bea42p11b092jsn7781490d5532",
        "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data.products);
      setProducts(result.data.products)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
      <div style={{ transform: "translateY(100px)" }}>
        <div
          className="top-text mx-4 my-4"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Dosis",
          }}
        >
          <h3>Best Sellers And Trending</h3>
        </div>
        <div
          className="mx-1 my-1"
          style={{
            width: "99.7%",
            overflowX: "auto",
            display: "flex",
            gap: "10px",
          }}
          ref={containerRef}
        >
          {products.map((item) => {
            return (
              <div
                key={item.asin}
                style={{ display: "inline-block", whiteSpace: "normal" }}
              >
                <div
                  className="card catdeal_c"
                  style={{ width: "300px", display: "inline-block" }}
                >
                  <img
                    src={item.product_photo}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "300px" }}
                  />
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "130px",
                      fontFamily: "Dosis",
                    }}
                  >
                    <h6 className="text-color-tertiary">{item.product_title.slice(0,30)}</h6>
                    <div className="d-flex justify-content-between">
                    <b style={{ fontSize: "19px" }}>
                      {item.product_price}
                    </b>
                    <b style={{ fontSize: "19px" }}>
                        {item.product_star_rating} <i class="fa-solid fa-star"></i> Rating
                    </b>
                    </div>
                    <button className="btn btn-danger">Buy now</button>
                  </div>
                  <span>{item.sales_volume}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Bestseller;
