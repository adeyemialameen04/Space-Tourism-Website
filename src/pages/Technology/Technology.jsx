import './technology.css';
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { technology } from "../../data/technology";

const Technology = () => {
  const [value, setValue] = useState(0);

  const { name, images, description } = technology[value];
  return (
    <section className="technology__section">
      <Navbar />
      <h1 className="title"><span>03</span>Space Launch 101</h1>
      <div className="technology__container">
        <div className="technology__img">
          <img src={images.landscape} className="img__landscape" alt="" />
          <img src={images.portrait} className="img_portrait" alt="" />
        </div>
        <div className="technology__info">
          <div className="tech-btn__container">
            {
              technology.map((item, index) => (
                <button key={item.id}
                  className={`num-btn ${index === value && 'active-btn'}`}
                  onClick={() => setValue(index)}
                >{item.number}</button>
              ))
            }
          </div>
          <div>
            {
              <article>
                <small>The Terminology...</small>
                <h1>{name}</h1>
                <p>{description}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;