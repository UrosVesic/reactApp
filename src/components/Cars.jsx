import React from 'react';
import Car from "./Car.jsx";

const Cars = ({cars}) => {
  return (
    <div className="all-cars">
      {cars.map((car) => (
        <Car car={car} />
      ))}

    </div>
  );

};

export default Cars;
