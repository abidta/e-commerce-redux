import { Card } from 'flowbite-react'
import CartButtons from './CartButtons'
import { stringReducer } from '../../utils/utils'

function CardComponent({ product }) {
  console.log(product.description.length, 'length')
  return (
    <div className="text-center me-2 mb-2 md:mb-0 ms-2 md:ms-0">
      <Card className="max-w-sm mx-auto grid justify-items-center ">
        <img
          src={`http://localhost:3000/${product.image}`}
          className="h-auto aspect-square"
          alt=""
        />
        <div>
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {stringReducer(product.description)}
          </p>
          <h2 className="text-2xl ">{`$${product.price}`}</h2>
        </div>
        <CartButtons product={product} />
      </Card>
    </div>
  )
}
export default CardComponent
