import { Navbar} from 'flowbite-react'
import CartIcon from './CartIcon'

function NavBar() {
  return (
    <div className="grid grid-cols-12 mt-2  justify-between bg-slate-200 rounded-md">
      <Navbar className="bg-slate-200 font-sans py-5 grid col-span-10 "  rounded>
        <div className="flex md:order-2"></div>
       
        <Navbar.Toggle className='order-first'/>
        <Navbar.Collapse>
          <Navbar.Link className="font-bold" href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Shoes</Navbar.Link>
          <Navbar.Link href="#">Backpack</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        
      </Navbar>
      <div className='grid col-span-2 md:justify-end justify-center md:me-4 md:items-center mt-6 md:mt-0'>
     <CartIcon />
      </div>
    </div>
  )
}

export default NavBar
