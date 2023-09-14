import React from "react";
import ReactDOM from "react-dom/client";

const PizzaData = [
  {
    name: "Rocacica",
    ingredients: "Bread with Italian",
    price: "6",
    photoName: "x.jpg",
    soldout: false,
  },
  {
    name: "Margherita",
    ingredients: "Bread with Italian",
    price: "16",
    photoName: "y.jpg",
    soldout: false,
  },
  {
    name: "Spinaci",
    ingredients: "Bread with Italian",
    price: "26",
    photoName: "z.jpg",
    soldout: false,
  },
];
function Pizza() {
  return (
    <div>
      <img src="none" alt="Hello I'm image" />
      <h2>Pizza Name</h2>
      <p>Pizza Price : 6</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Pizza />
      <Pizza />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
