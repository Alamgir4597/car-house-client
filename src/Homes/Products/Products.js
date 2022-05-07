import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


import useProduct from '../../ProductHook/ProductHook';
import Product from '../Product/Product';

const Products = () => {

    const [Products, setProducts] = useProduct([]);

    // useEffect(() => {
    //     const url =`http://localhost:5000/products`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    Products.slice(0,6);
    const navigate=useNavigate();
    const goAllProduct = () => {
        navigate('/allProduct')
    }

    return (
        <div className='container'>
            

            <div className='row' >
                <h1 className='m-3'>Inventory</h1>
                {Products.map(product => <Product key={product._id}
                product={product}
                ></Product>
                    
                    
                    
                    )}
            </div>
            <Button onClick={goAllProduct} variant="dark" size="lg" className='mt-3'>
                Manage Inventory
            </Button>
        </div>
    );
};

export default Products;