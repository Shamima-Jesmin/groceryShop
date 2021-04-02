import React, { useContext, useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    useEffect(() => {
        fetch(`https://enigmatic-lake-81107.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [loggedInUser.email])
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h1 style={{ color: 'green', marginLeft:'300px' }}>Yay.... You Ordered Successfully</h1>
            <h4>You have: {orders.length} orders</h4>
            {
                 orders.map(order => 
                 <ListGroup.Item>Product Name:{order.name}
                    <ListGroup.Item>Weight: {order.quantity}</ListGroup.Item>
                    <ListGroup.Item>Price: {order.price}</ListGroup.Item>
                    <ListGroup.Item>Your Email: {order.email}</ListGroup.Item>
                    <ListGroup.Item>Your Time: {(new Date(order.date).toDateString('dd/MM/yyyy'))}</ListGroup.Item>
                    </ListGroup.Item>
                )
            }
            
        </div>
    );
};

export default Orders;