import './destination.css';
import Navbar from "../../components/Navbar";
import { destinations } from "../../data/destinations";
import { useState } from "react";

const Destination = () => {
  const [value, setValue] = useState(0);


  const { name, description, distance, travel, images } = destinations[value];

  return (
    <section className="destination__section">
      <Navbar />
      <div className="container-section destination__container">
        <div className="destination__body">
          <h1 className="title"> <span>01</span> Pick Your Destination</h1>
          <article className="destination__img">
            {
              <img src={images.png} className="destination__img" alt="" />
            }
          </article>
        </div>
        <div className="destination__info-container">
          <div className="btn__container">
            {
              destinations.map((item, index) => {
                return <p
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >{item.name}</p>;
              })
            }
          </div>
          <div className="destination__info">
            {
              <article>
                <p>{name}</p>
                <p>{description}</p>
                <div className="distance-travel-time">
                  <div className="distance">
                    <small>Avg. Distance</small>
                    <p>{distance}</p>
                  </div>
                  <div className="travel">
                    <small>Est. Travel Time</small>
                    <p>{travel}</p>
                  </div>
                </div>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;