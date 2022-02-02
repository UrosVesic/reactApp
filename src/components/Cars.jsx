import React from 'react';
import Car from "./Car.jsx";

const Cars = ({cars}) => {
  return (
    <div className="all-cars">
      <Car car = {cars[0]}/>
      <Car car = {cars[1]}/>
      <Car car = {cars[2]}/>
      <Car car = {cars[3]}/>
      <Car car = {cars[4]}/>
      <Car car = {cars[5]}/>
    </div>
  );

};

export default Cars;
