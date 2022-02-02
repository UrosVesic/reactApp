import React from 'react';

function formatiraj(car){
    return "Cubic capacity: "+car.cc + " " +"Horse powers: "+ car.hp;
}

var today = new Date(),
            date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
            console.log(date);

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
            <input type="date" id="start" name="rent-start"
                    min={date}></input>
          </div>
        </div>
    
    )};

export default Car;
