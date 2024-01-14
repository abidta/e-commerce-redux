import { useState } from 'react'
import Dropdown from '../Dropdown'
import ProductList from './ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, removeCategory } from '../../redux/category'

function ProductContainer() {
  const [sortTyoe, setsortType] = useState('createdAt')
  const { active } = useSelector((state) => state.category)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log(e.target.checked,'target');
    if (e.target.checked) {
    return  dispatch(addCategory(e.target.id))
    }
    dispatch(removeCategory(e.target.id))
  }
  const handleClick = (type) => {
    setsortType(type)
  }
  return (
    <>
      <div className="flex mt-2 justify-end items-center">
        <div className="mx-3">
          <Dropdown onChange={handleChange} filter text={'Filter'} />
        </div>
        <div>
          <Dropdown onClick={handleClick} sort text={'Sort'} />
        </div>
      </div>
      {active.map((value, index) => (
        <ProductList key={index} sortType={sortTyoe} category={value} />
      ))}
    </>
  )
}

export default ProductContainer
