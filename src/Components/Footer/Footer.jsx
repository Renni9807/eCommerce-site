import whatsapp_icon from "../Assets/whatsapp_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import instagram_icon from "../Assets/instagram_icon.png";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>REPPOHS</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" />
          <img src={pintester_icon} alt="pintester" />
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};
