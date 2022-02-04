import React from 'react';

function formatiraj(car){
    return "Cubic capacity: "+car.cc +  + "Horse powers: "+ car.hp;
}

var today = new Date(),
date = today.getFullYear() + '-0' + (today.getMonth() + 1) + '-0' + today.getDate();
console.log(date);




const Car = ({car,onAdd,onUndo,rented}) => {
  
    return (
        <div className={rented === 0 ?"card":"card-rents"}>
          <img className="card-img-top" src={car.imageLink} alt="slika"/>
          <div className="card-body">
            <h3 className="card-title">{car.brand} {car.model}</h3>
            <p className="card-text">
            Cubic capacity: {car.cc} 
            <br/>
            Horse powers:  {car.hp}
            </p>
            {rented===0 ? <>
            <a className="btn" onClick={()=> onAdd(car.id)}>Rent</a>
            <a className="btn" onClick={()=> onUndo(car.id)}>Undo</a>
           </> : <> <input type="date" id={vratiDateId(car)} name="rent-start"
                    min={date}></input><h3>Amount:{car.amount} <br/> Price:{car.amount*car.priceperday}</h3></>}
            
          </div>
        </div>
    
    )
};
  
export default Car;
