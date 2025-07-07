// App.js
import React, { useState } from 'react';
import Header from './Components/Header';
import BalanceSummary from './Components/BalanceSummary';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const calculateIncome = () =>
    transactions
      .filter((t) => t.amount > 0)
      .reduce((acc, t) => acc + t.amount, 0);

  const calculateExpense = () =>
    Math.abs(
      transactions
        .filter((t) => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0)
    );

  const calculateBalance = () =>
    transactions.reduce((acc, t) => acc + t.amount, 0);

  const handleAddTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const themeClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';

  return (
    <div className={`min-vh-100 ${themeClass}`}>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container className="py-4">
        <BalanceSummary
          balance={calculateBalance()}
          income={calculateIncome()}
          expense={calculateExpense()}
          darkMode={darkMode}
        />
        <AddTransaction onAdd={handleAddTransaction} darkMode={darkMode} />
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteTransaction}
          darkMode={darkMode}
        />
      </Container>
    </div>
  );
}

export default App;
