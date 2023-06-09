import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, onSort, onDelete }) {
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => onSort("date")}>Sort by Date</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => onSort("description")}>Sort by Description</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => onSort("category")}>Sort by Category</button>
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              <button onClick={() => onSort("amount")}>Sort by Amount</button>
            </h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
