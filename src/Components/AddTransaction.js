import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const AddTransaction = ({ onAdd, darkMode }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAdd({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
    });

    setTitle('');
    setAmount('');
  };

  const bg = darkMode ? 'dark' : 'light';
  const text = darkMode ? 'light' : 'dark';

  return (
    <Card bg={bg} text={text} className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5">➕ Add New Transaction</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Salary, Rent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Amount (use "-" for expense)</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" variant={darkMode ? 'light' : 'dark'}>
            Add Transaction
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddTransaction;