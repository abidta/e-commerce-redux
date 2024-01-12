import { Modal, Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { setCartModal } from '../../redux/cart'
import Modalitems from './Modalitems'

function CartListModal({ openModal, cartList, totalCount }) {
  let totalPrice = cartList.reduce((acc, val) => {
    return (acc += val.count * val.price)
  }, 0)
  let isCart = cartList?.length !== 0
  const dispatch = useDispatch()
  return (
    <>
      <Modal
        show={openModal}
        onClose={() => dispatch(setCartModal(!openModal))}
      >
        <Modal.Header>Cart</Modal.Header>
        <Modal.Body>
          {isCart ? (
            <>
              <Modalitems label={'Total items :'} total={totalCount} />
              <Modalitems label={'Total price'} total={`$${totalPrice}`} />
            </>
          ) : (
            <div>
              <h1>Cart is empty</h1>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="justify-end">
          <Button disabled={!isCart}>Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CartListModal
