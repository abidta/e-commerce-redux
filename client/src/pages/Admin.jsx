import Button from '../components/Buttons/Button'
import Form from '../components/FormComponent'
import Input from '../components/Input'
function Admin() {
  let responseBody = {}
  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData(e.currentTarget)
    formdata.forEach((value, proprety) => (responseBody[proprety] = value))
    console.log(JSON.stringify(responseBody))
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
                <Input label="Category" type="select" name="category" required />
                <Input label="Price" type="text" name="price" required />
                <Input label="Image" type="file" name="image" required />
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
