import { Form } from 'react-router-dom'

function FormComponent({ child, onSubmit }) {
  return (
    <Form 
      onSubmit={onSubmit}
      action=""
      method="POST"
      className="md:w-8/12 w-11/12 mx-auto border border-slate-100 rounded-md shadow-sm p-7 bg-white"
    >
      {child}
    </Form>
  )
}

export default FormComponent
