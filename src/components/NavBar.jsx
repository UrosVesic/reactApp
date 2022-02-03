import React from 'react';
import { AiFillCar } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";

function NavBar({rentNum,rentPrice}) {
    return (
        <div className = "navBar">
            <a>Rent a car</a>
            <a className ="rent-items">
            <AiFillCar style={{ marginLeft: 10 }} />
            </a>
            <div className="rent-num">{rentNum}</div>
            <a className ="rent-items" id="rents">
            <FaMoneyBillAlt style={{ marginLeft: 10 }} />
            </a>
            <div className="rent-price" id ="price">{rentPrice}</div>
        </div>
    );
}

export default NavBar

