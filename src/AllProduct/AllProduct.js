import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import useProduct from '../ProductHook/ProductHook';

const AllProduct = () => {
   
    const [allProduct,  setAllProduct]= useProduct([])
    
    const navigate= useNavigate();
    const goAddNewProduct=()=>{
        navigate('/addnewproduct')
    }
    const deleteProduct=(id)=>{
console.log('delete btn clicked',id);
const proceed= window.confirm('Are You Want To Delete?');
if(proceed){
    fetch(`https://desolate-hamlet-80016.herokuapp.com/product/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data=>{
            if (data.deletedCount>0){
                console.log('deleted');
                const remaining=allProduct.filter(u=>u._id !== id)
                setAllProduct(remaining);
            }
        })
}
    } 
 
    return (
        <div>
            <h1>All Products</h1>
            {allProduct.map(showAll => <div key={showAll._id} className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">description</th>
                                    <th scope="col">price</th>
                                    <th scope="col">quantity</th>
                                    <th scope="col">supplier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">  {showAll._id} </th>
                                    <td className="w-25">
                                        <img src={showAll.image} className="img-fluid img-thumbnail" alt="Sheep" />
                                    </td>
                                    <td>{showAll.name}</td>
                                    <td>{showAll.description}</td>
                                    <td>{showAll.price}</td>
                                    <td>{showAll.quantity}</td>
                                    <td>{showAll.supplier}</td>
                                    <td>
                                         <Button  onClick={()=>deleteProduct(showAll._id)} className='mb-1'>delete</Button> <br/>
                                        <Link to={`/add/${showAll._id}`}><Button>Add item</Button></Link>

                                     </td>
                                    
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div> )}
            <Button onClick={goAddNewProduct} >Add New Product</Button>
        </div>
    );
};

export default AllProduct;