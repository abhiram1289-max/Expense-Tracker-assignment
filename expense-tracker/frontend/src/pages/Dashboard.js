import { useEffect, useState } from "react";
import API from "../api/axios";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await API.get("/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const total = transactions.reduce(
    (sum, t) => sum + Number(t.amount), 0
  );

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Total Expense: ₹ {total}</h3>

      <TransactionForm refresh={fetchTransactions} />
      <TransactionList
        transactions={transactions}
        refresh={fetchTransactions}
      />
    </div>
  );
}

export default Dashboard;
