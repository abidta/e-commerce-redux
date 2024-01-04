import { useSelector, useDispatch } from 'react-redux'
import CartListModal from './CartListModal'
import { setCartModal } from '../../redux/cart'

function CartIcon() {
  const dispatch = useDispatch()
  const { cartList = [], cartModal } = useSelector((state) => state.cart)
  let totalCartCount = cartList.reduce((acc, val) => {
    return (acc += val.count)
  }, 0)
  return (
    <div
      className=" order-last cursor-pointer hover:bg-blue-300 hover:rounded-full p-1 md:my-auto my-auto mt-6 "
      onClick={() => dispatch(setCartModal(!cartModal))}
    >
      {cartList.length !== 0 && (
        <div className="flex absolute font-semibold ms-4 h-4 text-xs text-white bg-red-600 rounded-full px-1.5  items-center justify-center">
          {totalCartCount > 99 ? <>99+</> : totalCartCount}
        </div>
      )}
      <img
        className="h-7 w-7 aspect-square"
        src="/images/blue-shopping-cart-10910.svg"
        alt=""
      />
      <CartListModal
        openModal={cartModal}
        cartList={cartList}
        totalCount={totalCartCount}
      />
    </div>
  )
}

export default CartIcon
