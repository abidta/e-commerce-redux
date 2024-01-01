import { Banner, TextInput, Label, Button } from 'flowbite-react'

function Footer() {
  return (
    <Banner className="mt-12 bg-red-100 rounded-md my-5  ">
      <div className="flex w-full items-center justify-between border-b border-gray-200  p-4 py-12 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto  w-full  items-center sm:w-auto text-center">
          <h1 className="md:text-2xl text-1xl font-bold mb-5 ">
            LET&apos;S STAY IN TOUCH
          </h1>
          <form
            action="#"
            method='post'
            className=" w-full flex-col items-center md:flex-row md:gap-x-3"
          >
            <Label
              htmlFor="email"
              className="mr-auto flex-shrink-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:m-0 md:mb-0"
            >
              Sign up for our newsletter
            </Label>
            <TextInput
            className='mt-2'
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
            <Button className='mt-1 bg-pink-500' type="submit">Subscribe</Button>
          </form>
        </div>
       
      </div>
    </Banner>
  )
}

export default Footer
