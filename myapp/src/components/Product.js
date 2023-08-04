import React from 'react';
import productsData from "./productsData.js";
import AddToCartButton from './AddToCartButton.js';

function Product() {
  
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productsData.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="h-auto w-full object-cover object-center  lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className='ml-2'>
                  <h2 className=" font-bold text-base font-serif">{product.title}</h2>                
                  <AddToCartButton productId={product.id} />
                  
                </div>
                <p className="text-sm font-medium text-gray-900 pr-4">{product.price}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}
export default Product;    