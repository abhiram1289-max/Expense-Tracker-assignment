import { useState } from "react";
import API from "../api/axios";

function TransactionForm({ refresh }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
    notes: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/transactions", form);
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title"
        onChange={(e)=>setForm({...form,title:e.target.value})} />
      <input placeholder="Amount" type="number"
        onChange={(e)=>setForm({...form,amount:e.target.value})} />
      <input placeholder="Category"
        onChange={(e)=>setForm({...form,category:e.target.value})} />
      <input type="date"
        onChange={(e)=>setForm({...form,date:e.target.value})} />
      <input placeholder="Notes"
        onChange={(e)=>setForm({...form,notes:e.target.value})} />
      <button>Add</button>
    </form>
  );
}

export default TransactionForm;
