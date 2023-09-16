import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Rocacica",
    ingredients: "Bread with Italian",
    price: "6",
    photoName: "pizza3.png",
    soldOut: false,
  },
  {
    name: "Margherita",
    ingredients: "Kind of cheese",
    price: "16",
    photoName: "pizza2.png",
    soldOut: true,
  },
  {
    name: "Spinaci",
    ingredients: "Hot and spicy",
    price: "26",
    photoName: "pizza.png",
    soldOut: false,
  },
];
function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <br />
      <div>
        <h3>{pizzaObj.name}</h3>
        <span>{pizzaObj.ingredients}</span>
        <p>
          {pizzaObj.soldOut
            ? "Sold Out"
            : "Pizza Price :" + pizzaObj.price + "₺"}
        </p>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header>
      <h2 className="header"> Pizzaria Cafe </h2>;
    </header>
  );
}

function Menu() {
  const pizzasLen = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzasLen > 0 ? (
        <>
          <p>Delicious and beautiful pizzas here</p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>There are no pizzas</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're not open right now.</p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
