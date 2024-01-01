import { Button } from 'flowbite-react'

function AfterCart({count,setCount}) {
  return (
    <div className='flex justify-center items-center '>
      <Button size={'xs'} className='h-fit bg-black' onClick={()=>setCount(-1)}>-</Button>
      <p className='mx-4'>{count}</p>
      <Button size={'xs'} className='h-fit bg-black' onClick={()=>setCount(1)}>+</Button>
    </div>
  )
}

export default AfterCart
