import { Banner } from 'flowbite-react'
import bannerData from '../api/bannerData.json'
import CartButtons from './ProductList/CartButtons'

function BannerComponent() {
  return (
    <Banner className="mt-12 bg-red-100 rounded-md">
      <div className=" w-full  border-b border-gray-200  p-4 py-12 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto  ">
          <div className="grid grid-cols-7 gap-4 mx-2">
            <div className="col-span-7 md:col-span-4   ">
              <h1 className="font-bold text-3xl">{bannerData.tittle}</h1>
              <p className="text-sm mt-3">{bannerData.description}</p>
              <h1 className="font-bold text-2xl md:text-start text-center text-pink-600 mt-4">
                {`$${bannerData.price}`}
              </h1>
              <CartButtons product={bannerData} name={'Buy now'} classes={"bg-pink-600 mt-2 mx-auto md:mx-0  "}/>
            </div>
            <div className="order-first md:order-last col-span-7 md:col-span-3  ">
              <img src={bannerData.image_url} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default BannerComponent
