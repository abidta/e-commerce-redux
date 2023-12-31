function Chips({ category }) {
  return (
    <div className="p-3 inline-flex w-3/12 mt-5 rounded-md bg-gradient-to-r from-orange-400 to-yellow-300 me-20 ">
      <h1 className="text-2xl font-bold text-white">{category?.name}</h1>
    </div>
  )
}

export default Chips
