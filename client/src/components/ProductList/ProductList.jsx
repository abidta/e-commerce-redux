import { useQuery } from 'urql'
import products from '../../api/products.json'
import CardComponent from './CardComponent'
import { GET_PPRODUCTS } from '../../api/graphql'


function ProductList({ category }) {
  const [result,reexecuteQuery]= useQuery({query:GET_PPRODUCTS})
  const {data,fetching,error}= result
  if (error) {
    return <p>error:{error.message}</p>
  }
  if (fetching) {
    return<p>Loading...</p>
  }
  if (data) {
    console.log(data,'products');
  }
  
  return (
    <div id={category} className="mt-10">
      <p className="text-2xl font-bold mb-3 ms-2 md:ms-0">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 ">
        {products.map((obj, key) => {
          if (obj.category === category) {
            return <CardComponent key={key} product={obj} />
          }
        })}
      </div>
    </div>
  )
}

export default ProductList
