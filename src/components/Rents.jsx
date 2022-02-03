import React from 'react';
import Car from "./Car.jsx";

const Rents = ({rents}) => {
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
      

    </div>);
};

export default Rents;
