import React, { useState } from 'react';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    event.preventDefault();
    setUserInput({ ...userInput, enteredTitle: event.target.value });

    const amountChangeHandler = (event) => {
      event.preventDefault();
      setUserInput({ ...userInput, enteredAmount: event.target.value });
    };

    const dateChangeHandler = (event) => {
      event.preventDefault();
      setUserInput({ ...userInput, enteredDate: event.target.value });
    };
  };
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'></div>
      <button type='submit'>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
