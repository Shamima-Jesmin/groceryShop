import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Admin = () => {

  return (
    <div>
      
      <Nav className="flex-column">
        <Link to="/manageProducts">Manage Product</Link>
        <Link to="/addProducts">Add Product</Link>
        <Link to="/editProducts">Edit Product</Link>
       
      </Nav>
    </div>
  );
};

export default Admin;