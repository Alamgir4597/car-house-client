import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import useMyItem from '../MyItemHooks/MyItemHooks';

const AddProduct = () => {
    const [user] = useAuthState(auth);
   const {id}=useParams();
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
        const products={name,image,description,price,quantity,supplier};
        fetch(`http://localhost:5000/product/${id}`,{
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
            <div className='w-50 mx-auto'>

                <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                    <input type="text" name='email' placeholder={user.email} required readOnly></input> <br />
                    <input type="text" name='name' placeholder='ProName' required></input> <br />
                    <input type="text" name='image' placeholder='Image_Url' required></input>  <br />
                    <input type="text" name='description' placeholder='short_description' required></input>  <br />
                    <input type="text" name='price' placeholder='Price' required></input>  <br />
                    <input type="number" name='quantity' placeholder='quantity' required></input>  <br />
                    <input type="text" name='supplier' placeholder='supplier_Name' required></input>  <br />
                    <input type="text" name='phone' placeholder='Phone_Number' required></input> <br />

                    <input type="submit" value='Add Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;