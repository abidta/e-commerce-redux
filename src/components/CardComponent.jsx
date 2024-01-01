import { Card } from 'flowbite-react'
import AddCart from './Buttons/AddCart'
import { useState } from 'react'
import AfterCart from './Buttons/AfterCart'

function CardComponent({ product }) {
  const cartBtn = (value) => {
    setCartCount(cartCount + value)
  }
  const [cartCount, setCartCount] = useState(0)
  return (
    <div className="text-center me-2">
      <Card className="max-w-sm  grid justify-items-center ">
        <img src="/images/kindpng_4997998.png" alt="" />
        <div>
          {' '}
          <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {product.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {product.description}
          </p>
          <h2 className="text-2xl ">{`$${product.price}`}</h2>
        </div>
        {cartCount > 0 ? (
          <AfterCart count={cartCount} setCount={cartBtn}/>
        ) : (
          <AddCart change={cartBtn} />
        )}
      </Card>
    </div>
  )
}

export default CardComponent
