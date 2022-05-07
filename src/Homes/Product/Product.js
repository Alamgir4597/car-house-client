import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = (product) => {
    const { _id, name, image, price, quantity ,supplier}=product.product;
    
    const navigate= useNavigate();

    const navigateHandle = (id) => {
      
        navigate(`/Product/${id}`)
        
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{quantity}</Card.Title>
                
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button onClick={() => navigateHandle(_id)} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Product;