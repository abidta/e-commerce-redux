function Chips({ chipsData }) {
  return (
    <div
      className={`sm:p-3 ps-1  inline-flex justify-between items-center w-auto  rounded-md ${chipsData?.gradient} me-2 `}
    >
      <h1 className="sm:text-2xl font-bold text-white">
        {chipsData?.category.charAt(0).toUpperCase() +
          chipsData?.category.slice(1)}
      </h1>
      <div className=" ">
        <img
          className="sm:h-12 h-5 me-2"
          src={chipsData?.imageUrl}
          alt={`${chipsData?.category}`}
        />
      </div>
    </div>
  )
}

export default Chips
