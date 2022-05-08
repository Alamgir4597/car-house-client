import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (product) => {
    const { _id, name, image, price, quantity, supplier, description
}=product.product;
    
    const navigate= useNavigate();

    const navigateHandle = (id) => {
      
        navigate(`/Product/${id}`)
        
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Name: {name}</Card.Title>
                <Card.Title>price: {price}</Card.Title>
                <Card.Title>Quantity:{quantity}</Card.Title>
                
                <Card.Text>
                   {description}
                </Card.Text>
                <Card.Title>supplier: {supplier}</Card.Title>
                <Button onClick={() => navigateHandle(_id)} variant="primary">Update</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;