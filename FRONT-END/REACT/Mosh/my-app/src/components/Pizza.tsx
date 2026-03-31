import React, { useState } from 'react'

const Pizza = () => {
    const [pizza,setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushroom']
    })

const handlePizzaClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings,'seid']})
}

  return (
    <div>Pizza</div>
  )
}

export default Pizza