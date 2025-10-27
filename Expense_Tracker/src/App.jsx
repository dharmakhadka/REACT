import { useState } from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4caf50", "#ff9800", "#2196f3", "#f44336", "#9c27b0", "#00bcd4"];

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (item.trim() === "" || amount.trim() === "") return;

    const newExpense = {
      name: item,
      price: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setItem("");
    setAmount("");
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.price, 0);

  return (
    <div className="expense-container">
      <h1 className="heading">Expense Tracker</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="input-box"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-box"
        />
        <button onClick={addExpense} className="add-btn">
          Add
        </button>
      </div>

      <ul className="expense-list">
        {expenses.map((exp, index) => (
          <li key={index} className="expense-item">
            <span>
              {exp.name} - ₹{exp.price}
            </span>
            <button
              onClick={() => deleteExpense(index)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="total">Total: ₹{total}</h3>

      {/* PIE CHART */}
      {expenses.length > 0 && (
        <div className="chart-container">
          <h3>Spending Breakdown (Pie Chart)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={expenses}
                dataKey="price"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* BAR CHART */}
      {expenses.length > 0 && (
        <div className="chart-container">
          <h3>Spending Overview (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={expenses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#4caf50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default App;
