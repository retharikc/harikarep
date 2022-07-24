import React,{useState} from 'react'

export default function AddProductForm(props){
    
    const initialFormState={
        id:0,
        name:'',
        price:0,
        brand:''

    }

    const[product,setProduct]=useState(initialFormState);

    const handleInputChange=(event)=>{
        const {name,value}=event.target;

        setProduct({...product,[name]:value});
    }

    const submitHandler=(event)=>{event.preventDefault();
    if(!product.name || !product.price || !product.brand) return;
    console.log(product+'from addproductform')

    props.addProduct(product);
    setProduct(initialFormState);
    }

    
    return(
        <form onSubmit={submitHandler}>

            <label>Id</label>
            <input 
            type='number'
            name='id'
            value={product.id}
            onChange={handleInputChange}/>

            <label>Name</label>
            <input 
            type='text'
            name='name'
            value={product.name}
            onChange={handleInputChange}/>

            <label>Price</label>
            <input 
            type='number'
            name='price'
            value={product.price}
            onChange={handleInputChange}/>

            <label>Brand</label>
            <input 
            type='text'
            name='brand'
            value={product.brand}
            onChange={handleInputChange}/>

            <button>Add New Product</button>
        </form>
    )
}