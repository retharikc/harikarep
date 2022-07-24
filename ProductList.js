import React from 'react';

export default function ProductList(props){

    return(
    <table border='5'>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Brand</th>
            </tr>
        </thead>
        <tbody>
            {props.productData.length >0 ?(
                props.productData.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td> 
                        <td>{product.name}</td>
                        <td>{product.price}</td> 
                        <td>{product.brand}</td>
                        <td><button 
                onClick={()=>{props.editProduct(product)}}
                        className="button muted-button">Edit</button></td>
                        <td><button 
                onClick={()=>props.deleteProduct(product.id)}
                className="button muted-button">Delete</button></td>
            </tr>))):(
                <tr>
                    <td colSpan={4}>No Products</td>
                </tr>
            )}
        </tbody>
                
            
    </table>
    )
}