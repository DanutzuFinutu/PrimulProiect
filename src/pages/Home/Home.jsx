import React from "react";
import "./Home.scss";
import image from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import Button from "../../components/Button/Button";
import Confetti from "../../components/Confetti";

const Home = () => {
  return (
    <div className="container">
      <div>
        <div className="left-side">
          <h1>
            Quality apparel <br /> without the price tag
          </h1>
          <p>
            No need to spend $xxx on apparel just for the <br /> name’s sake.{" "}
            <br /> Our premium apparel is made from the same stuff.
          </p>
          <div className="buttons">
            <Button type="button-browse">Browse our collection</Button>
            <Button type="button-spring">
              Spring ‘23 Collection
              <svg
                width="30"
                height="8"
                viewBox="0 0 30 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.3536 4.35355C29.5488 4.15829 29.5488 3.84171 29.3536 3.64645L26.1716 0.464466C25.9763 0.269204 25.6597 0.269204 25.4645 0.464466C25.2692 0.659728 25.2692 0.976311 25.4645 1.17157L28.2929 4L25.4645 6.82843C25.2692 7.02369 25.2692 7.34027 25.4645 7.53553C25.6597 7.7308 25.9763 7.7308 26.1716 7.53553L29.3536 4.35355ZM0 4.5H29V3.5H0V4.5Z"
                  fill="black"
                />
              </svg>
            </Button>
          </div>
          <div className="footer-container">
            <p className="p-number">50K</p>
            <p className="p-text">
              We’re proud to announce that we now employ <br />a workforce of
              50,000. It’s all possible because <br />
              of you.{" "}
            </p>
            <Confetti className="confetti" />
          </div>
        </div>

        <div className="right-side">
          <div className="first-container">
            <img src={image} alt="boots" />
            <div>
              <p>Fauxica Boots</p>
              <p>Winter Boots</p>
              <p>$59</p>
            </div>
          </div>
          <div className="second-row">
            <div className="second-container">
              <img src={image2} alt="tshirt" />
              <div>
                <p>White T-shirt</p>
                <p>T-shirt</p>
                <p>9.99$</p>
              </div>
            </div>
            <div className="third-container">
              <img src={image3} alt="socks" />
              <div>
                <p>Left & Right </p>
                <p>Socks</p>
                <p>$4.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
