import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/cart'

function AfterCart({ productId, cartCount, classes, setCount }) {
  const dispatch = useDispatch()
  return (
    <div
      className={
        classes ? 'flex  items-center ' : 'justify-center flex  items-center'
      }
    >
      <Button
        size={'xs'}
        className={classes ?? 'h-fit bg-black'}
        onClick={() => {
          setCount(cartCount - 1)
          dispatch(decrement(productId))
        }}
      >
        -
      </Button>
      <p className="mx-4">{cartCount}</p>
      <Button
        size={'xs'}
        className={classes ?? 'h-fit bg-black'}
        onClick={() => {
          setCount(cartCount + 1)
          dispatch(increment(productId))
        }}
      >
        +
      </Button>
    </div>
  )
}

export default AfterCart
