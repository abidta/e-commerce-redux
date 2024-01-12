function Button({ className, child, type }) {
  // const navigate = useNavigate()
  return (
    <>
      <button
        type={type}
        //onClick={() => navigate(paths[path!])}
        className={`${className} bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700`}
      >
        {child}
      </button>
    </>
  )
}

export default Button
