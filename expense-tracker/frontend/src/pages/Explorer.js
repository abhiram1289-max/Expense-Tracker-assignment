import { useState, useEffect } from "react";
import API from "../api/axios";

function Explorer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await API.get(`/transactions?search=${search}`);
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <div>
      <h2>Transaction Explorer</h2>

      <input
        placeholder="Search..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      {transactions.map(t => (
        <div key={t._id}>
          <p>{t.title} - ₹ {t.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default Explorer;
