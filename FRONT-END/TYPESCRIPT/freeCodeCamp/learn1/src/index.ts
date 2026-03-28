type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];


// function addNewPizza(pizzaObj: Pizza): void {
//   menu.push(pizzaObj);
// }

// function addNewPizza(
//   pizzaObj: Omit<Pizza, "id">
// ): Pizza {
//   const newPizza = {
//     id: nextPizzaId++,
//     ...pizzaObj
//   };

//   menu.push(newPizza);
//   return newPizza;
// }

function addNewPizza(pizzaObj: Pizza): Pizza {
    menu.push(pizzaObj);
    return pizzaObj;
}

// function placeOrder(pizzaName: string): Order | undefined {
//   const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);

//   if (!selectedPizza) {
//     console.error(`&{ pizzaName } does not found in the menu.`);
//     return;
//   }

//   cashInRegister += selectedPizza.price;

//   const newOrder: Order = {
//     id: nextOrderId++,
//     pizza: selectedPizza,
//     status: "ordered",
//   };

//   orderQueue.push(newOrder);

//   return newOrder;
// }

function placeOrder(pizza: Pizza): Order | undefined {
    const newOrder: Order = { 
        id: nextOrderId++, 
        pizza: pizza, 
        status: "ordered" 
    };
    orderQueue.push(newOrder);
    cashInRegister += pizza.price;
    return newOrder;
}



// Define a generic function using <T>
function addToArray<T>(array: T[], item: T): T[] {
    array.push(item);
    return array;
}



function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} does not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    );
  } else if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError(
      "parameter 'identifier' must be either String or Number! ",
    );
  }
}


// // Usage examples:
// addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ name: "BBQ Chicken", price: 12 });
// addNewPizza({ name: "Spicy Sausage", price: 11 });

// addNewPizza({ id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12 });
// addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

// console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);


// Usage from your image:
addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" });

console.log(menu);
console.log(orderQueue);