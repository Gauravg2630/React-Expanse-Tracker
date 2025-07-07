import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TransactionItem = ({ transaction, onDelete }) => {
  return (
    <ListGroup.Item
      className="d-flex justify-content-between align-items-center"
      variant={transaction.amount < 0 ? 'danger' : 'success'}
    >
      <div>
        <strong>{transaction.title}</strong>
        <div style={{ fontSize: '0.85rem' }}>₹{transaction.amount}</div>
      </div>
      <Button variant="outline-light" size="sm" onClick={() => onDelete(transaction.id)}>
        ❌
      </Button>
    </ListGroup.Item>
  );
};

export default TransactionItem;