// import React, {useState} from "react";

// function Search({ onSearch, transactions }) {

//   const [filteredTransactions, setFilteredTransactions] = useState(transactions);


//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     setSearchTerm(searchTerm);
  
//     const filtered = transactions.filter((transaction) =>
//       transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredTransactions(filtered);
//     onSearch(filtered);
//   };
  
//   return (
//     <div className="ui large fluid icon input">
//       <input
//         type="text"
//         placeholder="Search your Recent Transactions"
//         value={filteredTransactions}
//         onChange={handleSearch}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   );
// export default Search;


import React, { useState } from "react";

function Search({ onSearch, transactions }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
    onSearch(filtered);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
