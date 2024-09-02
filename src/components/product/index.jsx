import React from 'react'

export const Product = ({title,description,url,votes,submitterAvatarUrl,productImageUrl}) => {
  return (
    <div className="flex m-8">
      <div className=" mr-4 border-2 border-black rounded-lg min-w-[150px] min-h-[70px] flex items-center justify-center">
        <img  src={productImageUrl} alt="Imagem" />
      </div>
      <div>
        <div className="mt-4">
            <a className="text-blue-400" >{url}</a>
            <p className="font-semibold">{title}</p>
        </div>
        <div className="mt-4">
            <a className="text-blue-400" >{votes}</a>
            <p className="font-semibold">{description}</p>
        </div>
        <div className="mt-4 flex">
            <span>Submitted by:</span>
            <img className="ml-4" src={submitterAvatarUrl} alt="submit img" />
        </div>
      </div>
    </div>
  )
}


