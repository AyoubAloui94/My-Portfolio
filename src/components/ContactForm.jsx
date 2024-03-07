import { useRef, useState } from "react"
import FormRow from "./FormRow"
import emailjs from "@emailjs/browser"
import { toast } from "react-hot-toast"
import SpinnerMini from "./SpinnerMini"

function ContactForm() {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const formRef = useRef()

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setIsLoading(true)
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      })
      console.log("success")
      toast.success("Message successfully sent!")
      nameRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
    } catch (error) {
      toast.error("Something went wrong. Try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col justify-center " onSubmit={handleSubmit} ref={formRef}>
      <FormRow name="user_name" id="name" type="text" placeholder="Your name" ref={nameRef}>
        Name
      </FormRow>
      <FormRow name="user_email" id="email" type="text" placeholder="Your email address" ref={emailRef} required>
        Your email*
      </FormRow>
      <FormRow name="message" id="message" type="text" placeholder="Your message" ref={messageRef} isTextArea={true} required>
        Message*
      </FormRow>

      <button type="submit" className="bg-[#806065] text-gray-100 py-3 text-lg font-bold w-24 mx-7 rounded-md mt-4" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Submit"}
      </button>
    </form>
  )
}

export default ContactForm
