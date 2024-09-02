import React from 'react'
import { Product } from '../product'
import {Seed} from '../../data/seed'

export const ProductList = () => {

   const  handleProductUpVote = (productId) => {

        console.log(productId +"was upvoted.");
    }

  return (
    <div>
      <div>
        {
             Seed.map((product) =>(

                <Product 
                    key={'product-' +product.id}
                    id={product.id}
                    title ={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitterAvatarUrl={product.submitterAvatarUrl}
                    productImageUrl={product.productImageUrl}
                    onVote={handleProductUpVote}
                />
            ))
        }
      </div>
    </div>
  )
}


