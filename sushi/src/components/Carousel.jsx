import React, { useRef, useEffect } from "react";


const Carousel = () => {
  const sliderRef = useRef(null);



  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        if (scrollLeft + clientWidth >= scrollWidth) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          sliderRef.current.scrollBy({ left: 1440, behavior: "smooth" });
        }
      }
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">


      <div className="carousel" ref={sliderRef}>
        <div className="card combo-card">
            <div className="card-info">
                <h2>Set of the day – minus 20%</h2>
                <p>Every day, a new sushi set is 20% off. Great for attracting regular orders.</p>
                <a href="" className="buy-button">Buy now</a>
            </div>
        </div>
        <div className="card friends-card">
            <div className="card-info">
                <h2>Sushi for friends</h2>
                <p>Order a set for two and get a bonus dessert.</p>
                <a href="" className="buy-button">Buy now</a>
            </div>
        </div>
        <div className="card week-card">
            <div className="card-info">
                <h2>New of the week</h2>
                <p>Every week a new roll with a unique flavor, available for online ordering only.</p>
                <a href="" className="buy-button">Buy now</a>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Carousel;

