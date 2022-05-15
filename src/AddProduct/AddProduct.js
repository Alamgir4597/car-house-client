import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useMyItem from '../MyItemHooks/MyItemHooks';

const AddProduct = () => {
    const [user] = useAuthState(auth);
  
    console.log(user)
    const handleSubmit=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name=e.target.name.value;
        const image = e.target.image.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const phone = e.target.phone.value;
        const products={email, name,image,description,price,quantity,supplier,phone};
        
        fetch('https://desolate-hamlet-80016.herokuapp.com/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=> console.log ('success',data))
    }
    return (
       
        <div className='container'>
            <div >

                <form onSubmit={handleSubmit} className='w-50 mx-auto' >
                    <input type="text" name='email' placeholder={user.email} required /> <br />
                    <input type="text" name='name' placeholder='ProName' required/> <br />
                    <input type="text" name='image' placeholder='Image_Url' required/>  <br />
                    <input type="text" name='description' placeholder='short_description' required/>  <br />
                    <input type="text" name='price' placeholder='Price' required/>  <br />
                    <input type="number" name='quantity' placeholder='quantity' required/>  <br />
                    <input type="text" name='supplier' placeholder='supplier_Name' required/> <br />
                    <input type="text" name='phone' placeholder='Phone_Number' required/><br />

                    <input type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;