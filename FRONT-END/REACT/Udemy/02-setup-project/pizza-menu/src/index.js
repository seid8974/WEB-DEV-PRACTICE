import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "darkgreen", fontSize: "37px",  textDecoration: "underline"};
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>FAST REACT PIZZA CO.-</h1>
    </header>
  );
}

function Menu() {
  let pizzas = pizzaData;
  // let pizzas = [];
  let numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzaData.length} creative dishes to
            choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                key={pizza.name}
                name={pizza.name}
                photoName={pizza.photoName}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. please come back later:</p>
      )}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              photoName={pizza.photoName}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))}
        </ul>
      )} */}
      {/* <Pizza
        photoName="pizzaData"
        name="Funghi"
        description="Bread with italian olive oil and rosemary"
        price={14}
      />
      <Pizza
        photoName="pizzas/focaccia.jpg"
        name="Focaccia"
        description="Bread with italian olive oil and rosemary"
        price={27}
      />
      <Pizza />
      <Pizza />
      <Pizza /> */}
    </main>
  );
}

function Pizza(props) {
  // console.log(props.soldOut);
  // if (props.soldOut) return null;

  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getDate();
  const openHour = 12;
  const closeHour = 18;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (isOpen) alert("We're Open!");
  //   else alert("We're Closed!");

  return (
    <div className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're Happy to Wellcome you between {openHour}:00 and {closeHour}
          :00{" "}
        </p>
      )}

      {/* {isOpen && (
        <div className="order">
          <p>
            We're Open until {closeHour} Come Visit us Or
            Order Online!
          </p>
          <Button />
        </div>
      )} */}
    </div>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour} to until {closeHour}:00 Come Visit us Or
        Order Online!
      </p>
      <Button />
    </div>
  );
}

function Button() {
  return <button className="btn">Order Now</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
