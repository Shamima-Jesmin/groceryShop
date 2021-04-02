import { Button } from 'bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, imageURL, name, price, quantity } = props.product;
    console.log(_id)

    const history = useHistory();
    const handleBuyNow = () => {
        console.log('buy now clicked')
        history.push(`/checkout/${_id}`)

    }
    return (
        <div className='col-md-4'>

            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ height: '200px', width: '200px', padding: '20px' }} variant="top" src= {imageURL}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <p>{quantity}</p>
                    <h3>{price}</h3>    
                </Card.Text>
                <button onClick={handleBuyNow}>Buy Now</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;