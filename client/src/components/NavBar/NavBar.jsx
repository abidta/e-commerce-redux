import { Navbar } from 'flowbite-react'
import CartIcon from './CartIcon'

function NavBar() {
  return (
    <div className="grid grid-cols-12 justify-between bg-slate-200 rounded-md sticky top-0 z-50">
      <Navbar className="bg-slate-200 font-sans py-5 grid col-span-10 " rounded>
        <div className="flex md:order-2"></div>

        <Navbar.Toggle className="order-first" />
        <Navbar.Collapse>
          <Navbar.Link className="font-bold hover:text-black" href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#watches">Watches</Navbar.Link>
          <Navbar.Link href="#shoes">Shoes</Navbar.Link>
          <Navbar.Link href="#bags">Backpack</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="grid col-span-2 md:justify-end justify-center md:me-4 md:items-center  md:mt-0">
        <CartIcon />
      </div>
    </div>
  )
}

export default NavBar
