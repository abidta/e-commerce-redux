import { Button } from "flowbite-react"

function AddCart({change}) {
  return (
    <Button onClick={()=>{
        console.log('hi');
        change(1)
    }}  className='bg-black'>Add To Cart</Button>
  )
}

export default AddCart