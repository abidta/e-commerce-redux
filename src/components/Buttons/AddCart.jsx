import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart'

function AddCart({ product ,classes, name ,setCount}) {
  
  const dispatch = useDispatch()
  return (
    <Button onClick={() => {
      setCount(1)
      return dispatch(addToCart(product))}} className={classes??"bg-black"}>
      {name??'Add To Cart'}
    </Button>
  )
}

export default AddCart
