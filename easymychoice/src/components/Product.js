import React, { useState, useRef, useEffect } from "react";

function Product() {
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
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=in&lang=en&currentpage=1&pagesize=30&categories=men_all&concepts=H%26M%20MAN";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cac67db0f1mshd481c4a651bea42p11b092jsn7781490d5532",
        "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setProducts(result.results)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      <div style={{ transform: "translateY(100px)" }}>
        <div
          className="top-text mx-4"
          style={{ display: "flex", justifyContent: "space-between", fontFamily:"Dosis" }}
        >
          <h3>Products</h3>
        </div>
        <div
          className="mx-1 my-1"
          style={{
            width: "99.8%",
            overflowX: "auto",
            display: "flex",
            gap: "10px",
          }}
          ref={containerRef}
        >
          {products.map((item) => {
            return (
              <div
                key={item.code}
                style={{ display: "inline-block", whiteSpace: "normal" }}
              >
                <div
                  className="card catdeal_c"
                  style={{ width: "300px", display: "inline-block", }}
                >
                  <img
                    src={item.images[0].url}
                    className="card-img-top"
                    alt="..."
                    style={{height:"300px"}}
                  />
                  <div
                    className="card-body"
                    style={{ display:"flex",flexDirection:"column", height: "130px", fontFamily:"Dosis" }}
                  >
                    <h6 className="text-color-tertiary">{item.name}</h6>
                    <b style={{fontSize:"19px"}}>{item.price.formattedValue}</b>
                    <button className="btn btn-danger">Buy now</button>
                  </div>
                  <span>{item.brandName}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;
