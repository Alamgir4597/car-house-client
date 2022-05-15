import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const AddNewProduct = () => {
    

    const handleSubmit = e => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        
        const products = {  name, image, description, price, quantity, supplier};

        fetch('https://desolate-hamlet-80016.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data =>{
                if (data.acknowledged === true){
                    alert('Product add is Success')
                }
            })
    }

   
    return (
        <div className='container'>
            <div >

                <form onSubmit={handleSubmit} className='w-50 mx-auto' >
                   
                    <input type="text" name='name' placeholder='ProName' required /> <br />
                    <input type="text" name='image' placeholder='Image_Url' required />  <br />
                    <input type="text" name='description' placeholder='short_description' required />  <br />
                    <input type="text" name='price' placeholder='Price' required />  <br />
                    <input type="number" name='quantity' placeholder='quantity' required />  <br />
                    <input type="text" name='supplier' placeholder='supplier_Name' required /> <br />
                    

                    <input type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddNewProduct;