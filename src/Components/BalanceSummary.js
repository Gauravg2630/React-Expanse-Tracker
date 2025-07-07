import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const BalanceSummary = ({ balance, income, expense, darkMode }) => {
  const bg = darkMode ? 'dark' : 'light';
  const text = darkMode ? 'light' : 'dark';

  return (
    <Card bg={bg} text={text} className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="text-center fs-4 mb-3">💼 Your Balance</Card.Title>

        <h2 className="text-center mb-4">₹{balance}</h2>

        <Row className="text-center">
          <Col>
            <div>
              <strong className="text-success">Income</strong>
              <div>₹{income}</div>
            </div>
          </Col>
          <Col>
            <div>
              <strong className="text-danger">Expense</strong>
              <div>₹{expense}</div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BalanceSummary;
