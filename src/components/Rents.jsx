import React from 'react';
import Car from "./Car.jsx";

const Rents = ({rents, removeAllRents}) => {
  return (<div className="rent-container">
      <h1>Your rents</h1>
      {rents.map((car) => (
         <Car 
         key = {car.id}
         car = {car}
         rented = {1}
         //onAdd = {onAdd}
         //onUndo = {onUndo}
         />
         
      ))}
      
      <button onClick={(e)=>{e.preventDefault();removeAllRents()}}>Remove all rents</button>
    </div>);
};

export default Rents;
