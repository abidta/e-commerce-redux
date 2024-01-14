import { Card } from 'flowbite-react'
import CartButtons from './CartButtons'
import { stringReducer } from '../../utils/utils'
import { BASE_URI } from '../../api/graphql'
import Button from '../Buttons/Button'

function CardComponent({ product, isAdmin, onDelete }) {
  console.log(product.description.length, 'length')
  return (
    <div className="text-center me-2 mb-2 md:mb-0 ms-2 md:ms-0">
      <Card className="max-w-sm mx-auto grid justify-items-center ">
        <img src={`${product?.image?.url}`} className="h-40 aspect-square object-contain" alt="product img" />
        <div>
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{stringReducer(product.description)}</p>
          <h2 className="text-2xl ">{`$${product.price}`}</h2>
        </div>
        {isAdmin ? (
          <Button
            child={'Delete Product'}
            className={'hover:bg-red-800 bg-red-600'}
            onClick={onDelete}
            type={'button'}
            id={product._id}
          />
        ) : (
          <CartButtons product={product} />
        )}
      </Card>
    </div>
  )
}
export default CardComponent
