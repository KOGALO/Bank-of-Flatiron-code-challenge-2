import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import AccountContainer from "./AccountContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [transactions, setTransaction] = useState([]);

  const [handleSearch] = (searchTerm) => {
    setSearchTerm(searchTerm);
  }; 

  const fetchTransactions = () => {
    fetch("http://localhost:8001/transactions")
    .then((Response)=> Response.json())
    .then ((data) =>setTransactions(data))
    .catch((error) => console.error("Error fetching transactions:", error))      
  };

  const AddTransaction = (newTransaction) => {
    fetch("http://localhost:8001/transactions"), {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
    }
  }


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
        <Search onSearch={handleSearch}/>
        <AddTransactionForm onAddTransaction={onAddTransaction}/>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
