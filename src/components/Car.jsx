import React from 'react';

function formatiraj(car){
    return "Cubic capacity: "+car.cc + " " +"Horse powers: "+ car.hp;
}

const Car = ({car}) => {
    return (
        <div className="card">
          <img className="card-img-top" src={car.imageLink} alt="Neka slika"/>
          <div className="card-body">
            <h3 className="card-title">{car.brand} {car.model}</h3>
            <p className="card-text">
              {formatiraj(car)}
            </p>
            <a className="btn">Rent</a>
          </div>
        </div>
    
    )};

export default Car;
