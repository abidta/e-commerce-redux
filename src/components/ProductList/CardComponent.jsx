import { Card } from 'flowbite-react'
import CartButtons from './CartButtons'

function CardComponent({ product }) {
  console.log('card compon');
  return (
    <div className="text-center me-2 mb-2 md:mb-0">
      <Card className="max-w-sm mx-auto grid justify-items-center ">
        <img src="/images/kindpng_4997998.png" alt="" />
        <div>
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <h2 className="text-2xl ">{`$${product.price}`}</h2>
        </div>
        <CartButtons product={product}/>
      </Card>
    </div>
  )
}

export default CardComponent
