// import Message from './Message';
import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import NavBar from "./components/NavBar.tsx";
import Cart from "./components/Cart.tsx";
import Form from "./components/Form.tsx";
import ExpenseList from "./Expense-tracker/components/ExpenseList.tsx";
import ExpenseFilter from "./Expense-tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./Expense-tracker/components/ExpenseForm.tsx";
import allCategory from "./Expense-tracker/allCategory.ts";
import User from "./components/User.tsx";
// import './App.css';




function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["product1", "product2"]);

  const [selectedCatagory, setSelectedCatagory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCatagory ? expenses.filter((e) => e.category === selectedCatagory) : expenses ;

  let items = ["NEW YORK", "SAN FRANCISCO", "TOKYO", "LONDON", "PARIS"];

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

        {/* <Form /> */}
      </div>

      {/* <div>
        <div className="mb-5">
          <ExpenseForm onSubmit={ expense => setExpenses([ ...expenses, { ...expense, id: expenses.length + 1 }])}/>
        </div>
        <div className="mb-3">
          <ExpenseFilter
            onSelectCatagory={(catagory) => setSelectedCatagory(catagory)}
          />
        </div>
        <ExpenseList
          expenses={ visibleExpenses }
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      </div> */}

      <div>
        <User />
      </div>
    </>
  );
}

export default App;
