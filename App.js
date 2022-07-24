import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddProductForm from "./Components/AddProductForm";
import ProductList from "./Components/ProductList";
import EditProductForm from "./Components/EditProductForm";
import apiClient from './http-common'
import NavBar from "./Components/NavBarComponent";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Pricing from "./Components/Pricing";
import PageNotFound from "./Components/PageNotFound";



const App=()=>{

  useEffect(()=>{apiClient.get('/products').then((response)=>{
    setProducts(response.data);
  })},[])

  const productData =[
    {id:1,name:'mouse',price:1000,brand:'microsoft'},
    {id:2,name:'keyboard',price:3000,brand:'acer'},
    {id:3,name:'pen',price:7000,brand:'apple'},
    {id:4,name:'monitor',price:10000,brand:'hp'},
  ]

const [products,setProducts]=useState([]);

const[editing,setEditing]=useState(false);
const initialFormState={
  id:0,
  name:'',
  price:0,
  brand:''
}

const[currentProduct,setCurrentProduct]=useState(initialFormState);

const addProduct=(product)=>{
  console.log('product added'+product.id);
  apiClient.post('/products',product).then((response)=>{
    console.log('data added'+response.data)
  setProducts([...products,response.data]);
  console.log(products);

})
}

const deleteProduct=(id)=>{
  apiClient.delete(`/products/${id}`).then(()=>{
    console.log('product with id '+id+'deleted');
  setProducts(products.filter((product)=>product.id !==id));
})
}

const editProduct=(product)=>{

  setEditing(true);
  setCurrentProduct({id:product.id,name:product.name,price:product.price,brand:product.brand})
}

const updateProduct=(id,updateProduct)=>{

  setEditing(false);
  apiClient.put(`/products/${id}`,updateProduct).then((response)=>{
    console.log('product updated');
  setProducts(products.map((product)=>(product.id===id ? updateProduct : product)));
})
}

  return(<>

    <BrowserRouter>
    <NavBar/>
        <Routes>
        <Route path='AboutUs' element={<AboutUs/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Pricing' element={<Pricing/>}></Route>
        
      <Route path='*' element={<PageNotFound/>}></Route>
      <Route path='ProductList' element={<ProductList/>}></Route>
        </Routes>
        </BrowserRouter>
       
  

    <div className='container'>
      <h1>Product Crud app with hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <div>
              <h2>Edit Product Form </h2>
              <EditProductForm
              setEditing={setEditing}
              currentProduct={currentProduct}
              updateProduct={updateProduct}/>
        </div> ):

(<div>
        <h2>Add Product</h2>
        
        
        <AddProductForm addProduct={addProduct}/>
      
    <div className='flex-large'>
      <h2>View Products</h2>
      <ProductList 
      productData={products} 
      editProduct={editProduct}
      deleteProduct={deleteProduct}/>
    
      </div>
    </div>
    
        )
}
  </div></div></div>
  
</>)
}
export default App;
