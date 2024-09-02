import React, { useEffect, useState } from 'react'
import { Product } from '../product'
import {Seed} from '../../data/seed'

export const ProductList = () => {

    const [products,setProducts] = useState([])
    

   const  handleProductUpVote = (productId) => {

        console.log(productId +"was upvoted.");
    }

    useEffect(() =>{
        const seed = Seed.sort((a,b) =>(
            b.votes - a.votes
        ));

        setProducts(seed);
    },[])


  return (
    <div>
      <div>
        {
             products.map((product) =>(

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


