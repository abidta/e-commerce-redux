function Input({ type, label, required, name }) {
  return (
    <div>
      <label className="text-blue-950 ">{label}</label>
      <br />
      <input
        name={name}
        className="p-1 pl-2 mb-2 border border-solid border-slate-200 rounded-md shadow-sm w-full"
        type={type}
        required={required ?? false}
      />
    </div>
  )
}

export default Input
