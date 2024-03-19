import { Helmet } from "react-helmet-async"
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <div className="flex flex-col flex-grow md:mx-56 min-h-[65vh]">
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>Web & IT Genius | Contact</title>
        <meta name="description" content="Wanna get in touch? You can do so via the contact form below" />
        <link rel="canonical" href="https://webitgenius.com/contact" />
      </Helmet>
      <ContactForm />
    </div>
  )
}

export default Contact
