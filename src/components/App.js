import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import AccountContainer from "./AccountContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
