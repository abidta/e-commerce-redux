import { Button, Card } from 'flowbite-react'

function CardComponent({ product }) {
  return (
    <div className="text-center me-2">
      <Card href="#" className="max-w-sm  grid justify-items-center ">
        <img src="/images/kindpng_4997998.png" alt="" />
        <div> <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <h2 className="text-2xl ">{`$${product.price}`}</h2></div>
    <Button className='bg-black'>Add To Cart</Button>
       
      </Card>
    </div>
  )
}

export default CardComponent
