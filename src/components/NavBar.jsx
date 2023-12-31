import { Navbar } from 'flowbite-react'

function NavBar() {
  return (
    <div className='container m-auto mt-2'>
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
    </Navbar>
    </div>
  )
}

export default NavBar
