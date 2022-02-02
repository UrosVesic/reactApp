import React from 'react';

const Car = () => {
    return (
        <div className="card">
          <img className="card-img-top" src="https://picsum.photos/200" alt="Neka slika"/>
          <div className="card-body">
            <h3 className="card-title">Car name</h3>
            <p className="card-text">
              Car description.
            </p>
            <a className="btn">Rent</a>
          </div>
        </div>
    
    )};

export default Car;
