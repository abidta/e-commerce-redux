function Button({ className, child, type,onClick }) {
  // const navigate = useNavigate()
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${className} bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700`}
      >
        {child}
      </button>
    </>
  )
}

export default Button
