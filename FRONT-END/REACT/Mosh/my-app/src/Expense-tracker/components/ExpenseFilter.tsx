import React from 'react';
import allCategory from '../allCategory';

interface Props {
    onSelectCatagory: (catagory: string) => void
}

const ExpenseFilter = ({ onSelectCatagory }: Props) => {
  return (
    <select className="form-select" onChange={(event) => onSelectCatagory(event.target.value)}>
        <option value="">All Catagory</option>
        {/* <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertaiment">Entertaiment</option> */}
        {allCategory.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpenseFilter