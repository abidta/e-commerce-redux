function Button({ className, child, type, onClick, id }) {
  // const navigate = useNavigate()
  return (
    <>
      <button
        type={type}
        onClick={() => {
          if (onClick) {
            onClick(id)
          }
        }}
        className={`${className} bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700`}
      >
        {child}
      </button>
    </>
  )
}

export default Button
