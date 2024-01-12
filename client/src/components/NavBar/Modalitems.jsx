function Modalitems({ label, total }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl font-bold flex justify-end">{label}</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{total}</h1>
        </div>
      </div>
    </>
  )
}

export default Modalitems
