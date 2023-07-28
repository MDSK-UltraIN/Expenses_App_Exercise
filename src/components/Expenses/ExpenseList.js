import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpensesList = props => {

    // 產生 expense 內容，若 filterExpenses 沒有資料則顯示 No expenses data found.
    // let expensesContent = <p>No expenses data found.</p>;

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses data.</h2>
    }

    return <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>

}

export default ExpensesList;