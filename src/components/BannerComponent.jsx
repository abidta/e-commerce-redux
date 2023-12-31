import { Banner, Button } from 'flowbite-react'

function BannerComponent() {
  return (
    <Banner className="mt-12 bg-red-100 rounded-md">
      <div className=" w-full  border-b border-gray-200  p-4 py-12 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto  ">
          <div className="grid grid-cols-7 gap-4 mx-2">
            <div className="col-span-4 ">
              <h1 className="font-bold text-3xl">X-Box For Your Living Room</h1>
              <p className="text-sm mt-3">
                Xbox is a video gaming brand that consists of five home video
                game consoles, as well as applications (games), streaming
                service Xbox Cloud Gaming,
              </p>
              <h1 className="font-bold text-2xl text-pink-600 mt-4">$1000</h1>
              <Button className="bg-pink-600 mt-2">Buy now</Button>
            </div>
            <div className='col-span-3'>
              <img  src="/images/kindpng_4997998.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default BannerComponent
