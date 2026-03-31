import React, { useState } from 'react'

const CartExample = () => {
const [cart,setCart] = useState({
    disCount: 1,
    items: [
        {id:1, title:'Product 1', quantity:1},
        {id:2, title:'Product 2', quantity:1},
    ]
});

const handleCartClick = () => {
    setCart({...cart,items: cart.items.map(item => item.id === 1 ? {...item,quantity : item.quantity + 1} : item)})
}

  return (
    <div>CartExample</div>
  )
}

export default CartExample