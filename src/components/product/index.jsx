import React from 'react'

export const Product = () => {
  return (
    <div className="flex m-8">
      <div className=" mr-4 border-2 border-black rounded-lg min-w-[120px] min-h-[120px] flex items-center justify-center">
        <img  src="" alt="Imagem" />
      </div>
      <div>
        <div className="mt-4">
            <a className="text-blue-400" >Fort Knight</a>
            <p className="font-semibold">Authentic renaissance actors, delivered in just two weeks.</p>
        </div>
        <div className="mt-4 flex">
            <span>Submitted by:</span>
            <img className="ml-4" src="" alt="submit img" />
        </div>
      </div>
    </div>
  )
}


