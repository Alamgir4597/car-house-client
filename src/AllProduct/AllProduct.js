import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import useProduct from '../ProductHook/ProductHook';

const AllProduct = () => {
   
    const [allProduct,  setAllProduct]= useProduct([])
    
    const navigate= useNavigate();
    const goAddNewProduct=()=>{
        navigate('/add')
    }
    const deleteProduct=(id)=>{
console.log('delete btn clicked',id);
const proceed= window.confirm('Are You Want To Delete?');
if(proceed){
    fetch(`http://localhost:5000/product/${id}`, {
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
                                    <th scope="col">Day</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Article Name</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Words</th>
                                    <th scope="col">Shares</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">  {showAll._id} </th>
                                    <td className="w-25">
                                        <img src={showAll.image} className="img-fluid img-thumbnail" alt="Sheep" />
                                    </td>
                                    <td>Bootstrap 4 CDN and Starter Template</td>
                                    <td>Cristina</td>
                                    <td>{showAll.quantity}</td>
                                    <td>
                                         <Button  onClick={()=>deleteProduct(showAll._id)} className='mb-1'>delete</Button> <br/>
                                        <Link to={`/add/${showAll._id}`}><Button>my item</Button></Link>

                                     </td>
                                    
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div> )}
            <Button >Add New Product</Button>
        </div>
    );
};

export default AllProduct;