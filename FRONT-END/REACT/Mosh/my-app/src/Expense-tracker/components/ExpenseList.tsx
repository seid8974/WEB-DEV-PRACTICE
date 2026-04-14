import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
if(expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expence) => (
          <tr key={expence.id}>
            <td>{expence.description}</td>
            <td>{expence.amount}</td>
            <td>{expence.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expence.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc,expence) => expence.amount + acc,0).toFixed(2)}</td>
            <td></td>
            <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
