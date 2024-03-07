import { forwardRef } from "react"

const FormRow = forwardRef(function FormRow(props, ref) {
  const { children, id, isTextArea, ...restProps } = props
  const inputClassNames = "border-2"
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={id}>{children}</label>
      {isTextArea ? <textarea id={id} ref={ref} {...restProps} className="border-2 p-3 text-lg rounded-lg" /> : <input id={id} ref={ref} {...restProps} className="border-2 p-3 text-lg rounded-lg" />}
    </div>
  )
})

export default FormRow
