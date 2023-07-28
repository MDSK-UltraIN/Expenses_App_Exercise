import React, {useState} from 'react'
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSE = [
  {
    id: "41",
    title: "Toilet Peeehua?",
    amount: 934.12,
    date: new Date(2020, 9, 14),
  },
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      console.log([expense, ...prevExpenses]);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2>Let's get started peeehua!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}></Expense>
      <p>This is also peehua</p>
    </div>
  );
}

export default App;
