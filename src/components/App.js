import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import TransactionList from "./TransactionsList";

function App() {
  const [searchTerm, setSearchTerm, ] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSearch = (filteredTransactions) => {
    setSearchTerm(searchTerm);
  };

  const fetchTransactions = () => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  };

  const addTransaction = (newTransaction) => {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => response.json())
      .then((data) => {
        setTransactions([...transactions, data]);
      })
      .catch((error) => console.error("Error adding transaction:", error));
  };

  const sortTransactions = (sortBy) => {
    const sortedTransactions = [...transactions].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
    setTransactions(sortedTransactions);
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedTransactions = transactions.filter(
          (transaction) => transaction.id !== id
        );
        setTransactions(updatedTransactions);
      })
      .catch((error) => console.error("Error deleting transaction:", error));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>The Royal Bank of Flatiron</h1>
      <Search onSearch={handleSearch} />
      <AddTransactionForm onAddTransaction={addTransaction} />
      <TransactionList
        transactions={filteredTransactions}
        onSort={sortTransactions}
        onDelete={deleteTransaction}
      />
    </div>
  );
}

export default App;
