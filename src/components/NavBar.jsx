import { Navbar } from 'flowbite-react'

function NavBar() {
  return (
    <div className=" mt-2">
      <Navbar className="bg-slate-200 font-sans py-4" fluid rounded>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="font-bold" href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Shoes</Navbar.Link>
          <Navbar.Link href="#">Backpack</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        <div className=' order-last'>
          <img
            className="h-7 w-7 "
            src="/images/blue-shopping-cart-10910.svg"
            alt=""
          />
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar
