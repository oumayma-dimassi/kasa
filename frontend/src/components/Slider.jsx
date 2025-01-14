import { useState } from "react";
import arrowLeft from "../assets/arrow_back.png"
import arrowRight from "../assets/arrow_forward.png"


function Slider({ slides }) {

  const [position, setPosition] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setPosition(position === (slides.length - 1) ? 0 : position + 1);
    } else if (direction === 'left') {
      setPosition(position === 0 ? slides.length - 1 : position - 1);
    }
  };


  return (
    <div id="banner">
      <img id="banner-img" src={`${slides[position]}`} alt="Banner Print-it" className="banner-img" />
      <img id="arrow_right" src={arrowRight} className="arrow arrow_right" onClick={() => handleArrowClick('right')} />
      <img id="arrow_left" src={arrowLeft} className="arrow arrow_left" onClick={() => handleArrowClick('left')} />

      <h2 id="counter"> {position + 1} / {slides.length}</h2>

    </div>

  );
}

export default Slider;