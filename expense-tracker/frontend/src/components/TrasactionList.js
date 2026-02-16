import API from "../api/axios";

function TransactionList({ transactions, refresh }) {

  const handleDelete = async (id) => {
    await API.delete(`/transactions/${id}`);
    refresh();
  };

  return (
    <div>
      {transactions.map((t) => (
        <div key={t._id}>
          <h4>{t.title}</h4>
          <p>₹ {t.amount}</p>
          <p>{t.category}</p>
          <button onClick={()=>handleDelete(t._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
