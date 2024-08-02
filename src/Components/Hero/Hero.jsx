import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image2.jpg";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero">
        <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt="hand_icon" />
            </div>
          </div>
          <p>collection</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
        <div className="hero-right">
          <img src={hero_image} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};
