import Chips from './Chips'
import products from '../../api/products.json'
function MakeChips() {
  const style = {
    watches: 'bg-gradient-to-r from-orange-400 to-yellow-300',
    shoes: 'bg-gradient-to-r from-pink-600 to-pink-400',
    bags: 'bg-gradient-to-r from-blue-400 to-green-400',
  }
  let data = products.reduce((acc, value) => {
    if (!acc.find((accVal) => value.category == accVal.category)) {
      console.log('klkl')
      acc = [
        ...acc,
        {
          category: value.category,
          imageUrl: `/images/products/${value.category}4.png`,
          gradient: style[value.category],
        },
      ]
    }
    return acc
  }, [])
  console.log(data, 'data')

  return (
    <div className="grid grid-cols-3 justify-center ms-2 mt-5">
      {data.map((obj, index) => {
        return <Chips key={index} chipsData={obj} />
      })}
    </div>
  )
}

export default MakeChips
