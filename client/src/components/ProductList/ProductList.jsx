import { useQuery } from 'urql'
import CardComponent from './CardComponent'
import { GET_PPRODUCTS_PAGINATED } from '../../api/graphql'
import { useState } from 'react'
import { useEffect } from 'react'
import { Pagination } from 'flowbite-react'
import Loader from '../Loader'

function ProductList({ category, sortType }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [result, reexecuteQuery] = useQuery({
    query: GET_PPRODUCTS_PAGINATED,
    variables: { filter: { category: category, sort: sortType, page: currentPage, limit: 4 } },
  })
  const { data, fetching, error } = result
  const hasNext = data?.getProductsPaginated?.hasNext
  useEffect(() => {
    reexecuteQuery({ requestPolicy: 'network-only' })
    return () => {}
  }, [currentPage])

  const onPageChange = (page) => setCurrentPage(page)
  if (error) {
    return <p>error:{error.message}</p>
  }
  if (fetching) {
    return <Loader />
  }
  if (data) {
    console.log(data, 'products')
  }

  return (
    <>
      {!!data?.getProductsPaginated?.products?.length && (
        <div id={category} className="mt-10">
          <p className="text-2xl font-bold mb-3 ms-2 md:ms-0">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 ">
            {data.getProductsPaginated.products.map((obj) => {
              if (obj.category === category) {
                return <CardComponent key={obj._id} product={obj} />
              }
            })}
          </div>
          <div className="flex overflow-x-auto md:mt-5 mt-3 justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={hasNext ? currentPage + 1 : currentPage}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductList
