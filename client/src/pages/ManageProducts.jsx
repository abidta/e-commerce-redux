import { useNavigate } from 'react-router-dom'
import AdminLogo from '../components/AdminLogo'
import Button from '../components/Buttons/Button'
import { useMutation, useQuery } from 'urql'
import { DELETE_PRODUCT, GET_PPRODUCTS } from '../api/graphql'
import CardComponent from '../components/ProductList/CardComponent'
import { useEffect } from 'react'
import Loader from '../components/Loader'

function ManageProducts() {
  const [resultMutation, deleteOne] = useMutation(DELETE_PRODUCT)
  const [result, reexecuteQuery] = useQuery({ query: GET_PPRODUCTS, variables: { filter: {} } })
  const { error: errorMutation, fetching: fetchingMutation, data: dataMutation } = resultMutation
  const { fetching, data, error } = result
  const refresh = () => {
    // Refetch the query and skip the cache
    reexecuteQuery({ requestPolicy: 'network-only' })
  }
  useEffect(() => {
    console.log('kl')

    return () => {
      refresh()
    }
  }, [dataMutation])

  console.log(result)

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin')
  }

  const handleDelete = (id) => {
    deleteOne({ _id: id })
  }

  if (fetching || fetchingMutation) {
    return<><Loader/></> 
    
  }
  if (error || errorMutation) {
    return <div>{error?.message || errorMutation?.message}</div>
  }
  return (
    <div className="h-[100vh] ">
      <div className="flex justify-between w-full mt-5">
        <AdminLogo />
        <Button
          child={'Add Product'}
          onClick={handleClick}
          type={'button'}
          className={'h-10 '}
        />
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 ">
        {data &&
          data.getProducts.map((obj) => (
            <CardComponent product={obj} key={obj._id} isAdmin onDelete={handleDelete} />
          ))}
      </div>
    </div>
  )
}

export default ManageProducts
