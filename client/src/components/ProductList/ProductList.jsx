import { useQuery } from 'urql'
import CardComponent from './CardComponent'
import { GET_PPRODUCTS } from '../../api/graphql'
import { useState } from 'react'
import { useEffect } from 'react'

function ProductList({ category }) {
  const [page, setPage] = useState(1)

  const [result, reexecuteQuery] = useQuery({
    query: GET_PPRODUCTS,
    variables: { filter: { category: category } },
  })
  const { data, fetching, error } = result
  useEffect(() => {
    reexecuteQuery({ requestPolicy: 'network-only' })
    return () => {}
  }, [page])

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1)
  }
  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1)
    }
  }
  if (error) {
    return <p>error:{error.message}</p>
  }
  if (fetching) {
    return <p>Loading...</p>
  }
  if (data) {
    console.log(data, 'products')
  }

  return (
    <div id={category} className="mt-10">
      <p className="text-2xl font-bold mb-3 ms-2 md:ms-0">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 ">
        {result.data.getProducts.map((obj) => {
          if (obj.category === category) {
            return <CardComponent key={obj._id} product={obj} />
          }
        })}
      </div>
    </div>
  )
}

export default ProductList
