import { forwardRef } from "react"

const FormRow = forwardRef(function FormRow(props, ref) {
  const { children, id, isTextArea, ...restProps } = props
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={id}>{children}</label>
      {isTextArea ? <textarea id={id} ref={ref} {...restProps} className="border-2" /> : <input id={id} ref={ref} {...restProps} className="border-2 mb-4" />}
    </div>
  )
})

export default FormRow
