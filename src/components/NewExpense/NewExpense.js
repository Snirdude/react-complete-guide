import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);
    toggleShowFormHandler();
    // console.log(expense);
  };

  const toggleShowFormHandler = () => {
    if(!showExpenseForm){
      setShowExpenseForm(true);
    } else {
      setShowExpenseForm(false)
    }
  }

  return (
    <div className="new-expense">
      {!showExpenseForm && <button onClick={toggleShowFormHandler}>Add New Expense</button>}
      {showExpenseForm && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={toggleShowFormHandler}/>}
    </div>
  );
};

export default NewExpense;
