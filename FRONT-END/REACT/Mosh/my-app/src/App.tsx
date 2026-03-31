// import Message from './Message';
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import Cart from "./components/Cart.tsx";
import Form from "./components/form.tsx";
// import './App.css';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  let items = ["NEW TORK", "SAN FRANCISCO", "TOKYO", "LONDON", "PARIS"];

  let handleSelectItem = (item: string) => {
    console.log(item);
  };
  // return <div><Message /> </div>;
  return (
    <>
      <div>
        {/* <ListGroup
        items={items}
        header={"Cities"}
        onSelectItem={handleSelectItem}
      /> */}

        {/* {alertVisible && <Alert onClose={() => setAlertVisible(false)}>A simple primary alert—check it out!</Alert>} */}

        {/* <Button color="primary" onClick={() => setAlertVisible(true)}>primary</Button> */}
      </div>
      <div>
        {/* <NavBar cartItemsCount={cartItems.length}/> */}
        {/* <Cart cartItems={cartItems} onClear={() => setCartItems([])} /> */}

        <Form />
      </div>
    </>
  );
}

export default App;
