import React from "react";
import "../styles/cart.css";
import NavBar from "../sub-components/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Cart() {
  return (
    <>
      <div className="section" id="cart">
        <div className="nav">
          <NavBar />
        </div>
        <div className="sub-container cart-container">
          <div className="shopping-list-container inner-container">
            <div className="item-container">
              <div className="img"></div>
              <div className="text">
                <div className="name-id-icon">
                  <div className="name-id">
                    <div className="name" style={{padding: '0vw 0.5vw'}}>Cherry</div>
                    <div className="id" style={{padding: '0vw 0.5vw'}}>3</div>
                    <div className="price" style={{padding: '0vw 0.5vw'}}>3$</div>
                  </div>
                  <div className="delete">
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faTrash}
                        size="lg"
                        style={{ color: "#e23b03" }}
                        className="delete-icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="description">
                  A fedsl weidg erog wetokgv wesk tkohr
                </div>
              </div>
            </div>
          </div>
          <div className="user-info-container inner-container">
            <div className="name">Yash Kanjaryia</div>
            <div className="shipping-address">
              Shipping Address : <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tempor nec feugiat nisl.
            </div>
            <div className="billing-address">
              Billing Address : <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
              tempor nec feugiat nisl.
            </div>
            <div className="delivery-date">
              Delivery on :<br></br>18th Jan 2024
            </div>
            <div className="cod">Cash on delivery</div>
          </div>
        </div>
      </div>
    </>
  );
}
