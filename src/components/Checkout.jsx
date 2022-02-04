import React from 'react';
import { useState } from "react";

function validation(){
    
    if(document.getElementById("name").value.length === 0){
        return false;
    }
    if(document.getElementById("surname").value.length === 0){
        return false;
    }
    if(document.getElementById("email").value.length === 0){
        return false;
    }
    if(document.getElementById("phNum").value.length === 0){
        return false;
    }
    return true;
}

const Checkout = ({rents}) => {
    function checkout(){
        document.getElementById("checkout").innerHTML=`
            <h3>${name}</h3>
            <h3>${surname}</h3>
            <h3>${email}</h3>
            <h3>${phNumber}</h3>
            `;   
        }
        
        function totalPrice(){
            let totalPrice = 0;
            rents.map((car) => {
                totalPrice+=car.amount*car.priceperday;
              });
              return totalPrice;
        }
        const [name,setName]=useState("");
        const[surname,setSurname]=useState("");
        const[email,setEmail]=useState("");
        const[phNumber,setPhNumber]=useState("");
        
        return (
            <div className="checkout" id="checkout">
           
               <form >
               <h3>Fill form: </h3>
                   <input type="text" placeholder='Name' id="name" required onInput={(e)=>{setName(e.target.value); console.log(e.target.value);}}/>
                   <input type="text" placeholder='Surname' id="surname" required onInput={(e)=>{setSurname(e.target.value);console.log(e.target.value)}}/>
                   <input type="email" placeholder='Email' id ="email" required onInput={(e)=>{setEmail(e.target.value);console.log(e.target.value)}}/>
                   <input type="text" placeholder='Phone number' id = "phNum" required onInput={(e)=>{setPhNumber(e.target.value);console.log(e.target.value)}}/>
                   <h4>Total price: {totalPrice()}</h4>
                   {totalPrice() === 0 ? <h4>You have no rents</h4>:<button type='submit' onClick={(e)=>{e.preventDefault();validation()===true ? checkout():alert("Fill all fields")}} >Place order</button>}
                   
               </form>
            </div>
        )
};

export default Checkout;
