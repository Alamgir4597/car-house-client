import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import { useNavigate, useParams } from 'react-router-dom';


const ProductsDetails = () => {
    const {id}= useParams();
    
    const [ProductDls, setProductDls] = useState({});
    
    useEffect(()=>{
        const url =`http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProductDls(data))
    },[ProductDls]);
    const reduceHandle = () => {
        let newqty = parseInt(ProductDls.quantity) - 1;
        // const moreNew=newqty-1;
        console.log(typeof (newqty));
        // console.log(typeof (moreNew));

        const productQty = newqty;
        console.log(productQty)

        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productQty })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        };

    const reStockHandle = (e) => {
        e.preventDefault();
        let newqty = e.target.quantity.value;;
        // const moreNew=newqty-1;
        console.log(typeof (newqty));
        // console.log(typeof (moreNew));

        const productQty = newqty;
        console.log(productQty)

        fetch(`http://localhost:5000/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productQty })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
const navigate=useNavigate();
const goAllProduct=()=>{
    navigate('/allProduct')
}
    
    return (
        <div className=' d-flex justify-content-center'>
            <Card style={{ width: '32rem' }}>
                <Card.Img variant="top" src={ProductDls.image} />
                <Card.Body>
                    <Card.Title>Name: {ProductDls.name}</Card.Title>
                    <Card.Title  id='test'>Quantity : {ProductDls.quantity}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-around '>
                        <Button onClick={reduceHandle} variant="outline-success" size="sm" className='me-2 btn-sm '>delivered</Button>
                        
                        <form onSubmit={reStockHandle}>
                            <input type="number" name='quantity' placeholder='quantity' required></input>
                            <input className='btn btn-outline-success ms-2' type="submit" value='Restock Product' />
                        </form>
                   </div>
                    <Button onClick={goAllProduct} variant="dark" size="lg" className='mt-3'>
                       Manage Inventory
                    </Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default ProductsDetails;