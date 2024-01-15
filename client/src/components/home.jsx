import React from "react";
import NavBar from "../sub-components/navBar";
import "../styles/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTree, faLeaf, faWater, faMountainSun, faSeedling } from '@fortawesome/free-solid-svg-icons'
import Card from "../sub-components/card";
import fruitData from "../../data.json";
export default function Home() {
  return (
    <>
      <div className="section" id="home">
        <div className="nav">
          <NavBar />
        </div>
        <div className="image">
          <div className="logo"></div>
          <div className="call-to-action">
            Discover freshness at your fingertips! Click to start shopping and
            add a burst of nature's sweetness to your cart now.
          </div>
        </div>
        <div className="container">
          <div className="quality">
            <div className="element">
              <FontAwesomeIcon icon={faTree} size="2xl" style={{color : "#1d7738"}} className="icon"/>
              <div className="text">100% Natural</div>
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faLeaf} size="2xl" style={{color : "#63e6be"}} className="icon"/>
              <div className="text">Eco-friendly</div>
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faWater} size="2xl" style={{color : "#74c0fc"}} className="icon"/>
              <div className="text">Fresh Water grown</div>
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faMountainSun} size="2xl" style={{color : "#ffd43b"}} className="icon"/>
              <div className="text">100% Organic</div>
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faSeedling} size="2xl" style={{color : "#77ee44"}} className="icon"/>
              <div className="text">Regional Seedlings</div>
            </div>
          </div>
          <div className="recommended ">
            <div className="page-head">Recommendations</div>
            <div className="card-container">
              <Card fruit={fruitData.fruit}/>
              <Card fruit={fruitData.fruit}/>
              <Card fruit={fruitData.fruit}/>
              <Card fruit={fruitData.fruit}/>
              <Card fruit={fruitData.fruit}/>
              <Card fruit={fruitData.fruit}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
