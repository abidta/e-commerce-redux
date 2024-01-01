import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart'

function AddCart({ product }) {
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(addToCart(product))} className="bg-black">
      Add To Cart
    </Button>
  )
}

export default AddCart
