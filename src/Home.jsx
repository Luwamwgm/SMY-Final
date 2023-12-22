import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import "./Home.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const auth = useContext(AuthContext);
  let name = "";
  if (auth && auth.currentUser) {
    const { displayName, email } = auth.currentUser;
    name = displayName || email;
  }

  const carouselImages = [
    "/book1.jpg",
    "/IMG_20201115_171652.jpg",
    "/image.png",
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="home-container">
        <h1>Welcome to SMY Books and Toys</h1>
        <div className="cta-buttons">
          <NavLink to="/SellingPage" className="cta-button">
            Sell Your Items
          </NavLink>
          <NavLink to="/BuyingPage" className="cta-button">
            Explore Products
          </NavLink>
        </div>
        <p>
          This platform is created to help families sell gently used children's
          toys and books. Users can buy and sell items, contributing to
          environmental sustainability by reusing items and providing affordable
          options for families.
        </p>
        <Slider {...carouselSettings} className="carousel">
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Carousel Item ${index + 1}`} />
            </div>
          ))}
        </Slider>
        <p>
          Families who want to donate for free can upload items and set the
          price to free. This helps those in need access items at a lower cost
          or for free, promoting a sense of community and sustainability.
        </p>
        <footer>© 2023 SMY Children's Toys and Books Store</footer>
      </div>
    </>
  );
}
