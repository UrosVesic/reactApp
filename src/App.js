import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Cars from "./components/Cars.jsx";
import Rents from "./components/Rents.jsx";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import bmwx6 from "./slike/bmwx6.jpg";
import audia4 from "./slike/audia4.jpg";
import punto from "./slike/punto.jpg";
import stilo from "./slike/stilo.jpg";
import l from "./slike/500l.jpg";
import pg from "./slike/206.jpg";

function App() {
  const [rents, setRents] = useState([]);
  const [rentNum, setRentNum] = useState(0);
  const [rentPrice, setRentPrice] = useState(0);
  const [cars, setCars] = useState([
    {
      id: 1,
      brand: "BMW",
      model: "X6",
      cc: 3000,
      hp: 300,
      imageLink: bmwx6,
      amount: 0,
      priceperday: 1000,
    },
    {
      id: 2,
      brand: "Audi",
      model: "a4",
      cc: 3000,
      hp: 300,
      imageLink: audia4,
      amount: 0,
      priceperday: 1000,
    },
    {
      id: 3,
      brand: "Fiat",
      model: "Punto",
      cc: 1200,
      hp: 90,
      imageLink: punto,
      amount: 0,
      priceperday: 200,
    },
    {
      id: 4,
      brand: "Fiat",
      model: "Stilo",
      cc: 1400,
      hp: 105,
      imageLink: stilo,
      amount: 0,
      priceperday: 200,
    },
    {
      id: 5,
      brand: "Fiat",
      model: "500L",
      cc: 1400,
      hp: 105,
      imageLink: l,
      amount: 0,
      priceperday: 300,
    },
    {
      id: 6,
      brand: "Peugeot",
      model: "206",
      cc: 1400,
      hp: 105,
      imageLink: pg,
      amount: 0,
      priceperday: 150,
    },
    {
      id: 7,
      brand: "Renault",
      model: "Clio",
      cc: 1400,
      hp: 105,
      imageLink: "",
      amount: 0,
      priceperday: 200,
    },
  ]);
  const refreshRents = () => {
    const newRents = cars.filter((car) => car.amount > 0);
    setRents(newRents);
  };

  const addToRents = (id) => {
    cars.map((car) => {
      if (car.id === id) {
        car.amount++;
        const a = rentNum + 1;
        setRentNum(a);
        refreshRents();
        const b = rentPrice + car.priceperday;
        setRentPrice(b);
        console.log(
          "car=",
          car.brand,
          "amount=",
          car.amount,
          "total price= ",
          car.amount * car.priceperday
        );
      }
    });
  };
  const undoRent = (id) => {
    cars.map((car) => {
      if (car.id === id) {
        if (car.amount > 0) {
          car.amount--;
          const a = rentNum - 1;
          setRentNum(a);
          refreshRents();
          const b = rentPrice - car.priceperday;
          setRentPrice(b);
        } else {
          alert("You have not rented this car");
        }
        console.log(
          "car=",
          car.brand,
          "amount=",
          car.amount,
          "total price= ",
          car.amount * car.priceperday
        );
      }
    });
  };

  return (
    <BrowserRouter>
      <NavBar rentNum={rentNum} rentPrice={rentPrice} />
      <Routes>
        <Route
          path="/"
          element={<Cars cars={cars} onAdd={addToRents} onUndo={undoRent} />}
        />
        <Route path="/rent" element={<Rents rents={rents} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
