import React from 'react';
import { AiFillCar } from "react-icons/ai";

function NavBar() {
    return (
        <div className = "navBar">
            <a>Rent a car</a>
            <a className ="rent-items">
            <AiFillCar style={{ marginLeft: 10 }} />
            </a>
        </div>
    );
}

export default NavBar

