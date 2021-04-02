import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllProducts = (props) => {
    const {_id, name, price, quantity} = props.pd;
    console.log(_id)
   
    const [del, setDel] =useState()
    const deleteProduct =(_id) =>{
        console.log(_id)
        fetch(`https://enigmatic-lake-81107.herokuapp.com/delete/`+_id,{
            method:'DELETE',
          
        })
        .then(res =>res.json())
        .then (data=>setDel( data))
        }
    return (
        <div className='col-sm-9'>
        <Table>
            <thead>
                <tr>
                    <th>{name}</th>
                    <th>{quantity}</th>
                    <th>{price}</th>
                    <th><button>Add</button>
                    <button onClick={()=>deleteProduct(_id)}>Delete</button>
                    </th>
                </tr>
            </thead>
        </Table>
          


        </div>
    );
};

export default ManageAllProducts;