import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MyItem = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://desolate-hamlet-80016.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <h1>my Items</h1>
            <h1>{Products.length}</h1>
            <div className='d-flex' >
                {Products.map(my =>
                    <div key={Products._id} className="">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Products.image} />
                            <Card.Body>
                                <Card.Title>{Products.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                )}
           </div>
        </div>
    );
};

export default MyItem;