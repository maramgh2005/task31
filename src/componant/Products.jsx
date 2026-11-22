import React from 'react'
import product from '../data/product'
import Product from './Product'

export default function Products() {
    return (
        <div className='max-w-7xl mx-auto grid grid-cols-3 gap-4  mt-20'>

            {product.map(function (p) {
                return <Product key={p.id} {...p} />
            })}

        </div>
    )
}



