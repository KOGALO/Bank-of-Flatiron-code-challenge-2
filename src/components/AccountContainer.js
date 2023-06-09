import React from "react";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";
import Search from "./Search";

function AccountContainer() {
  return (

    <div>
      <Search/>
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
