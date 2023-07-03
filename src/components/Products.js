import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
                Shopping everyday
            </h1>
            <span className='w-20 h-[1px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
            “One key benefit of personalizing messages is that it recognizes the customers as individuals. By marketing one way to prospects, another way to those that have already purchased a product, and another way to long-term, high-value customers you can make your marketing messages far more compelling and effective. Customers will also appreciate the personal touch, and you’ll stop them driving them away by bombarding them with messages which aren’t relevant to them.” 
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {products.map((item) => (
              <ProductsCard key={item._id} product={item} />
            ))}
        </div>
    </div>
  )
}

export default Products