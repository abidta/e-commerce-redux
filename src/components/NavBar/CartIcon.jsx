import { useSelector } from 'react-redux'

function CartIcon() {
  const { cartList = [] } = useSelector((state) => state.cart)
  return (
    <div className=" order-last cursor-pointer ">
      {cartList.length !== 0 && (
        <div className="flex absolute font-bold ms-4  bg-pink-500 rounded-full h-4 w-4  items-center justify-center">
          {cartList.length}
        </div>
      )}
      <img
        className="h-7 w-7 "
        src="/images/blue-shopping-cart-10910.svg"
        alt=""
      />
    </div>
  )
}

export default CartIcon
