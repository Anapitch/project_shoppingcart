import React from 'react';
import logo from '../images/shopping.png';
import icon from '../images/cart.png';

export default function Header(props) {
  return (
    <header style={{blockSize:"350px"}} className="block row center" id="nameheader">
      <div>
        <a href="#/">
          <img src={logo} style={{blockSize:"650px"}}/>
        </a>
      </div>
      <div>
        <h2 href="#/cart" id="icon">
          <img src={icon} style={{blockSize:"100px"}}/>
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </h2>
      </div>
    </header>
  );
}
