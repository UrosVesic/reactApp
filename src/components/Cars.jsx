import React from 'react';
import Car from "./Car.jsx";

const Cars = ({cars, onAdd, onUndo}) => {
  return (
    <div className="all-cars">
      {cars.map((car) => (
        <Car 
        key = {car.id}
        car = {car}
        onAdd = {onAdd}
        onUndo = {onUndo}
        />
      ))}

    </div>
  );

};

export default Cars;
