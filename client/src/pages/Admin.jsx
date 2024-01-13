import { useMutation } from 'urql'
import Button from '../components/Buttons/Button'
import Form from '../components/FormComponent'
import Input from '../components/Input'
import { ADD_PRODUCT, SAVE_FILE } from '../api/graphql'
import { useState } from 'react'

function Admin() {
  const [file, setfile] = useState()
  const [result, uploadProduct] = useMutation(ADD_PRODUCT)
  const { error, fetching } = result

  let responseBody = {}
  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    formdata.forEach((value, proprety) => (responseBody[proprety] = value))
    uploadProduct({
      productInfo: {
        name: responseBody.name,
        description: responseBody.description,
        price: responseBody.price,
        category: responseBody.category,
        image: file,
      },
    })
  }
  const handleFile = (e) => {
    console.log(e.target?.files[0])
    setfile(e.target.files[0])
  }
  if (error) {
    return <>{error.stack}</>
  }
  return (
    <>
      <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
        <div className="mb-5 mt-5 md:mt-0 md:ms-5">
          <h1 className="text-3xl  border p-1 rounded-md">
            Admin <span className="bg-blue-700 text-3xl text-white p-1 rounded-md">Panel</span>
          </h1>
        </div>
        <Form
          onSubmit={handleSubmit}
          child={
            <>
              <h1 className="text-3xl mb-2 text-blue-950 font-bold">Add Product</h1>
              <div>
                <Input label="Product Name" type="text" name="name" required />
                <Input label="Description" type="text" name="description" required />
                <Input label="Price" type="text" name="price" required />
                <label className="text-blue-950"> Category</label>
                <select
                  className="p-1 pl-2 mb-2 border border-solid border-slate-200 rounded-md shadow-sm w-full"
                  name="category"
                  id=""
                >
                  <option value="bags">Bags</option>
                  <option value="watches">Watches</option>
                  <option value="shoes">Shoes</option>
                </select>
                <Input onchange={handleFile} label="Image" type="file" name="image" required />
              </div>
              <Button className="mt-6 w-full" type="submit" child={'Create Product'} />
            </>
          }
        />
      </div>
    </>
  )
}

export default Admin
