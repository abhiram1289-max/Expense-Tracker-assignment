const Transaction = require("../models/Transaction");

exports.addTransaction = async (req, res) => {
  const transaction = await Transaction.create({
    ...req.body,
    userId: req.user.id
  });

  res.json(transaction);
};

exports.getTransactions = async (req, res) => {
  const { page = 1, limit = 10, search, category } = req.query;

  const query = { userId: req.user.id };

  if (search) {
    query.title = { $regex: search, $options: "i" };
  }

  if (category) {
    query.category = category;
  }

  const transactions = await Transaction.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ date: -1 });

  res.json(transactions);
};

exports.deleteTransaction = async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

