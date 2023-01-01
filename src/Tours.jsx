import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <>
      <div className="main">
        <h1>Our Tours</h1>
      </div>
      <div className="ards-container">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </>
  );
}

export default Tours;
