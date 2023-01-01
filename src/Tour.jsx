import React from "react";
const maxTextNo = 200;
function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = React.useState(true);
  return (
    <div className="card">
      <div className="price">${price}</div>
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info-container">
        <h4>{name}</h4>
        <p>
          {readMore ? `${info.substring(0, maxTextNo)}...` : info}{" "}
          <button className="show-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show More" : "Show Less"}
          </button>
        </p>
        <button className="interest-btn" onClick={() => removeTour(id)}>
          {" "}
          Not interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
