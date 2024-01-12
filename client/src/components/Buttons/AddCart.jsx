import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart'

function AddCart({ product ,classes, name }) {
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(addToCart(product))} className={classes??"bg-black"}>
      {name??'Add To Cart'}
    </Button>
  )
}

export default AddCart
