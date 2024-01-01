import { useSelector } from 'react-redux'
import AddCart from '../Buttons/AddCart'
import AfterCart from '../Buttons/AfterCart'
import { useEffect } from 'react'

function CartButtons({ product }) {
    useEffect(()=>{
        console.log('effect');
        return ()=>{
            console.log('return');
        }
    })
  const { cartList } = useSelector((state) => state.cart)
  console.log(cartList, 'cart list')
  let cartCount = cartList?.find((item) => item?.id === product?.id)?.count
  return (
    <>
      {console.log('new things')}
      {cartCount > 0 ? (
        <AfterCart productId={product.id} cartCount={cartCount} />
      ) : (
        <AddCart product={product} />
      )}
    </>
  )
}

export default CartButtons
