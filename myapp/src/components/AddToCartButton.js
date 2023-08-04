
import React from 'react';
import { Button, notification } from 'antd';
import productsData from './productsData.js';


const AddToCartButton = ({ productId }) => {
  const handleAddToCart = () => {
    const product = productsData.find((item) => item.id === productId);
    if (product) {
      notification.success({
        message: 'Added to Cart',
        description: `${product.title} has been added to the cart!`,
      });
    }
  };

  return (
    
    <Button type="" onClick={handleAddToCart}
    className='text-[#e97407] hover:text-[#e97407]/80 flex content-center'
    >
      Add to Cart
    </Button>
    
  );
};



export default AddToCartButton;
  