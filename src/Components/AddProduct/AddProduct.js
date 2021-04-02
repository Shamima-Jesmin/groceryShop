import React ,{ useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
  
      const productData = {
        imageURL: imageURL,
        name: data.name,
        quantity: data.quantity,
        price: data.price
      };
      const url = `https://enigmatic-lake-81107.herokuapp.com/addProducts`
      console.log(productData)
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
        .then(res => console.log('server side res', res))
    }
  
  
    const handleImageUpload = product => {
      console.log(product.target.files[0]);
      const imageData = new FormData();
      imageData.set('key', '740ba90058cd098400a7143b2d3cf41b')
      imageData.append('image', product.target.files[0]);
  
      axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
        <div>
            

      <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'50px', padding:'20px'}}>
        <input name="name" defaultValue="Product Name" ref={register} />
        <br />
        <input name="quantity" defaultValue="kg/gm" ref={register} />
        <br />
        <input name="price" defaultValue="price" ref={register} />
        <br />
        <input name="exampleRequired" type='file' onChange={handleImageUpload} />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
        </div>
    );
};

export default AddProduct;