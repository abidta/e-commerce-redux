import { useRouteError } from "react-router-dom"

function Error() {
    const error= useRouteError()
  return (
    <>
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <p className="text-3xl">Oops</p>
      <p>{error?.status}</p>
      <i>{error.statusText || error.message}</i>
    </div>
  </>
  )
}

export default Error