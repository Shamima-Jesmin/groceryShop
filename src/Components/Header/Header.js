import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
             <Navbar bg="light" variant="light">
    <Navbar.Brand to="/home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Link style={{marginLeft:'20px'}} to="/home">Home</Link>
      <Link style={{marginLeft:'20px'}} to="/orders">Orders</Link>
      <Link style={{marginLeft:'20px'}} to="/admin">Admin</Link>
      <Link style={{marginLeft:'20px'}} to="/deals">Deals</Link>
      <Link style={{marginLeft:'20px'}} to="/login">Login</Link>
       
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
     
    </Form>
  </Navbar>
        </div>
    );
};

export default Home;