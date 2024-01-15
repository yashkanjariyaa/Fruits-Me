import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
export default function Landing() {
    const navigate = useNavigate();
    function handleClick(){
        navigate('/signin');
    }
  return (
    <>
      <div className="section" id="landing">
        <div className="head">Fruits & Me</div>
        <div className="intro">
          Welcome to our vibrant online fruit marketplace, where freshness meets
          convenience! Explore a bountiful selection of premium fruits sourced
          from the finest orchards, ensuring a delightful and nutritious
          shopping experience for fruit enthusiasts like you.
          <div className="button">
            <button className="landing-button" onClick={handleClick}>
                Get Started!
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
