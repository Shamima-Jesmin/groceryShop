import React, { useEffect, useState } from 'react';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import Product from '../Product/Product';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
  
    const fetchProducts =() =>{
        fetch('https://enigmatic-lake-81107.herokuapp.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)
        })
    }
    useEffect(()=>{
        fetchProducts()
    } ,[])
   
    return (
        <div>
            <h4 className='mb-5'>Manage product</h4>
          {
              products.map(pd =><ManageAllProducts pd={pd}></ManageAllProducts>)
              
          }
       
        </div>
    );
};

export default ManageProduct;