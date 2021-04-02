import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App'
import Orders from '../Orders/Orders';

const Checkout = () => {
  let { id } = useParams();
  console.log(id)


  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(`https://enigmatic-lake-81107.herokuapp.com/product/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProduct(data)

      })
  }, [])


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleOrders = () => {
    console.log('checkout clicked')
    const newOrders = { ...loggedInUser, ...product, date: new Date() }
    fetch('http://localhost:5000/addOrders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrders)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
  }

  return (
    <div style={{ height: '400px', width: '400px', marginLeft: '500px', marginTop: '20px' }}>
     
      <Card className="text-center" >
        <Card.Header>Checkout</Card.Header>
        <Card.Body>
          <Card.Title>Name:{product.name}</Card.Title>
          <Card.Text>
            Price:{product.price},
          Weight:{product.quantity}
          </Card.Text>
          <Link to='/orders' onClick={handleOrders} class='btn-btn-danger'>Checkout</Link>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Checkout;