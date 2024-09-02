import React from 'react'
import { Product } from '../product'
import {Seed} from '../../data/seed'

export const ProductList = () => {
  return (
    <div>
      <div>
        {
             Seed.map((product) =>(

                <Product 
                    key={'product-' +product.id}
                    title ={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                />
            ))
        }
      </div>
    </div>
  )
}


