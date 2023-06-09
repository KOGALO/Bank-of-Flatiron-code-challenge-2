import React, { useState } from "react";

function Transaction({ transaction }) {
  const { date, description, category, amount } = transaction;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

function AddTransaction({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      date,
      description,
      category,
      amount,
    };
    onAddTransaction(newTransaction);
    // Reset the form fields
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export { Transaction, AddTransaction };
