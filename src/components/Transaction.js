import React from "react";

function Transaction({ Transaction }) {
  const { date, description, category, amount} = Transaction;

  return (
    <tr>
      <td>{"date"}</td>
      <td>{"description"}</td>
      <td>{"category"}</td>
      <td>{"amount"}</td>
    </tr>
  );
}

export default Transaction;
