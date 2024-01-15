import React, { useRef } from "react";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";
export default function Card(props) {
  const fruit = props.fruit;
  const ref = useRef(null);
  const visible = useRef(null);
  const navigate = useNavigate();
  function handleClick(fruit) {
    try {
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }
  }
  function handleHoverOver() {
    ref.current.style.right = "0";
  }
  function handleHoverDown() {
    ref.current.style.right = "-30vw";
  }
  return (
    <>
      <div
        className="card"
        onClick={() => handleClick(fruit.name)}
        onMouseEnter={handleHoverOver}
        onMouseLeave={handleHoverDown}
      >
        <div className="visible" ref={visible}>
          <div className="card-image">
            <img src={fruit.image}></img>
          </div>
          <div className="data">
            <div className="text">
              <div className="name">{fruit.name}</div>
              <div className="description">{fruit.description}</div>
            </div>
            <div className="price">{fruit.price}</div>
          </div>
        </div>
        <div className="buy" ref={ref}>
          <div className="addtocart">Add to Cart</div>
        </div>
      </div>
    </>
  );
}
