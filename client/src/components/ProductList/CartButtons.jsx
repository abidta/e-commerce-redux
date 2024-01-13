import { useSelector } from 'react-redux'
import AddCart from '../Buttons/AddCart'
import AfterCart from '../Buttons/AfterCart'
import { useEffect } from 'react'
import { useMemo } from 'react'

function CartButtons({ product, classes, name }) {
  useEffect(() => {
    console.log('effect')
    return () => {
      console.log('return')
    }
  })
  const { cartList } = useSelector((state) => state.cart)
  let cartCount = useMemo(() => {
    console.log(cartList)
    return cartList?.find((item) => item?._id === product?._id)?.count
  }, [cartList, product?._id])
  return (
    <>
      {console.log('new things')}
      {cartCount > 0 ? (
        <AfterCart productId={product._id} cartCount={cartCount} classes={classes} />
      ) : (
        <AddCart product={product} classes={classes} name={name} />
      )}
    </>
  )
}

export default CartButtons
