import React from 'react';
import { Navbar, Container, Form } from 'react-bootstrap';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <Navbar
      expand="lg"
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#">💸 Expense Tracker</Navbar.Brand>

        <Form className="ms-auto d-flex align-items-center">
          <Form.Check
            type="switch"
            id="theme-switch"
            label={darkMode ? 'Dark Mode' : 'Light Mode'}
            onChange={toggleTheme}
            checked={darkMode}
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
