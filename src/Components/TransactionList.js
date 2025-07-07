import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDelete, darkMode }) => {
  const bg = darkMode ? 'dark' : 'light';
  const text = darkMode ? 'light' : 'dark';

  return (
    <Card bg={bg} text={text} className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="fs-5">📄 Transaction History</Card.Title>
        <ListGroup variant="flush">
          {transactions.length === 0 ? (
            <ListGroup.Item>No transactions yet.</ListGroup.Item>
          ) : (
            transactions.map((t) => (
              <TransactionItem key={t.id} transaction={t} onDelete={onDelete} />
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TransactionList;