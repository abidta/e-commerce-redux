import { useNavigate } from 'react-router-dom'
import Button from '../components/Buttons/Button'

function Success() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin')
  }
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-11/12 md:w-8/12 p-4 text-center">
        <h1 className="text-3xl text-green-400 mb-5 ">Item added successfully</h1>
        <Button
          child={'Add more Product'}
          type={'button'}
          className={'md:w-8/12 w-full'}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default Success
