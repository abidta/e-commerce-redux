//import { useSelector } from 'react-redux'
import AddCart from '../Buttons/AddCart'
import AfterCart from '../Buttons/AfterCart'
import { useEffect, useState } from 'react'

function CartButtons({ product, classes, name }) {
  useEffect(() => {
    console.log('effect')
    return () => {
      console.log('return')
    }
  })
  const [cartCount, setcount] = useState(0)
  // const { cartList } = useSelector((state) => state.cart)
  // console.log(cartList, 'cart list')
  // let cartCount = cartList?.find((item) => item?.id === product?.id)?.count
  
  return (
    <>
      {cartCount > 0 ? (
        <AfterCart
          productId={product.id}
          cartCount={cartCount}
          setCount={setcount}
          classes={classes}
        />
      ) : (
        <AddCart setCount={setcount} product={product} classes={classes} name={name} />
      )}
    </>
  )
}

export default CartButtons
