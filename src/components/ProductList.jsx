import products from '../api/products.json'
import CardComponent from './CardComponent'

function ProductList({ category }) {
  return (
    <div className="mt-10 ">
      <p className="text-2xl font-bold mb-3">{category.charAt(0).toUpperCase()+category.slice(1)}</p>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-col-1 '>{products.map((obj, key) => {
        if (obj.category === category) {
          return <CardComponent key={key} product={obj} />
        }
      })}</div>
      
    </div>
  )
}

export default ProductList
