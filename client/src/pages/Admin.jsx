import { useMutation } from 'urql'
import Button from '../components/Buttons/Button'
import Form from '../components/FormComponent'
import Input from '../components/Input'
import { ADD_PRODUCT } from '../api/graphql'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLogo from '../components/AdminLogo'
import Toast from '../components/Toast'

function Admin() {
  const [file, setfile] = useState()
  const [result, uploadProduct] = useMutation(ADD_PRODUCT)
  const navigate = useNavigate()

  const { error, fetching } = result

  console.log(result)
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
    e.target.reset()
  }
  const handleFile = (e) => {
    console.log(e.target?.files[0])
    setfile(e.target.files[0])
  }
  const handleManageProduct = () => {
    navigate('/manage-products')
  }

  return (
    <>
      <div className="h-[100vh] flex md:flex-row flex-col justify-center items-center">
        <AdminLogo />
        <Form
          onSubmit={handleSubmit}
          child={
            <>
              <div className="flex justify-between">
                <h1 className="text-3xl mb-2 text-blue-950 font-bold">Add Product</h1>
                <Button child={'Manage Products'} onClick={handleManageProduct} type={'button'} />
              </div>

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
              <Button
                className="mt-6 w-full"
                type="submit"
                child={!fetching ? 'Create Product' : <div>Loading..</div>}
              />
              {error && (
                <div>
                  <p className="text-red-500">
                    {error.message}, check inputs, &apos;Price&apos; must be a Number
                  </p>
                </div>
              )}
            </>
          }
        />
        {!result.error && result.data && <Toast child={'Item created successfully'} />}
      </div>
    </>
  )
}

export default Admin
