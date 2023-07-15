import './crew.css';
import { crew } from "../../data/crew";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { BsRecord, BsRecordFill } from "react-icons/bs";

const Crew = () => {

  const [value, setValue] = useState(0);

  const { name, images, role, bio } = crew[value];
  return (
    <section className="crew__section" >
      <Navbar />
      <h1 className="title"><span>02</span> Meet Your Crew</h1>
      <div className="crew__container">
        <div className="crew__img">
          <img src={images.webp} alt="" />
        </div>
        <div className="crew__info">
          <div className="circles__btn">
            {
              crew.map((item, index) => (
                <i
                  key={item.id}
                  className={`circles ${index === value && 'active-btn'}`}
                  onClick={() => setValue(index)}>
                  {index === value ? <BsRecordFill /> : <BsRecord />}
                </i>
              ))
            }
          </div>
          {
            <article className="crew">
              <small>{role}</small>
              <h4>{name}</h4>
              <p>{bio}</p>
            </article>
          }
        </div>
      </div>
    </section>
  );
};

export default Crew;