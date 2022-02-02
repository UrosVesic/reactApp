import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Cars from "./components/Cars.jsx";
import bmwx6 from "./slike/bmwx6.jpg";
import audia4 from "./slike/audia4.jpg";
import punto from "./slike/punto.jpg";
import stilo from "./slike/stilo.jpg";
import l from "./slike/500l.jpg";
import pg from "./slike/206.jpg";

function App() {
  const cars = [
    {
      id: 1,
      brand: "BMW",
      model: "X6",
      cc: 3000,
      hp: 300,
      imageLink: bmwx6,
      amount: 0,
    },
    {
      id: 2,
      brand: "Audi",
      model: "a4",
      cc: 3000,
      hp: 300,
      imageLink: audia4,
      amount: 0,
    },
    {
      id: 3,
      brand: "Fiat",
      model: "Punto",
      cc: 1200,
      hp: 90,
      imageLink: punto,
      amount: 0,
    },
    {
      id: 4,
      brand: "Fiat",
      model: "Stilo",
      cc: 1400,
      hp: 105,
      imageLink: stilo,
      amount: 0,
    },
    {
      id: 5,
      brand: "Fiat",
      model: "500L",
      cc: 1400,
      hp: 105,
      imageLink: l,
      amount: 0,
    },
    {
      id: 6,
      brand: "Peugeot",
      model: "206",
      cc: 1400,
      hp: 105,
      imageLink: pg,
      amount: 0,
    },
    {
      id: 7,
      brand: "Renault",
      model: "Clio",
      cc: 1400,
      hp: 105,
      imageLink: "",
      amount: 0,
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <Cars cars={cars} />
    </div>
  );
}

export default App;
