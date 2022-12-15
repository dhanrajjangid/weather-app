import React from "react";


function Card({tempInfo}) {
  const {temp} = tempInfo;

  return (
    <>
      <div className="card-parent">
        <div>
          <i className={"wi wi-day-sunny"}></i>
        </div>

        <div className="weather-info">
          <div className="temperature">
            <span>{temp} °C</span>
          </div>

          <div className="description">
                <div className="weather-condition">sunny</div>
                <div className="place">
                    Indore,India
                </div>
          </div>
        </div>

        <div className="date">{new Date().toLocaleString()}</div>


      </div>
    </>
  );
}

export default Card;
