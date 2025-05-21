import React from 'react'
import Card  from '@/components/Flowbite/Card'

const Products = () => {
  return (
    <section className='mt-[135px] py-10'>
      <h1 className='text-5xl font-bold carousel-special-2 text-center pb-16'>Our Products</h1>
        
        <div className='flex flex-wrap w-10/12 mx-auto justify-start'>
            {
            Array.from({length:20}).map((item,index)=>(
                <Card key={index}/>
            ))
        }
        </div>
    </section>
  
        )}

export default Products;
