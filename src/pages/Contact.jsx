import { Helmet } from "react-helmet-async"
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <div className="flex flex-col flex-grow sm:mx-32 md:mx-44 lg:mx-60 xl:mx-96 min-h-[69dvh] md:min-h-[68.5dvh] xl:min-h-[71dvh]">
      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>alouiayoub.com | Contact</title>
        <meta name="description" content="Wanna get in touch? You can do so via the contact form below" />
        <link rel="canonical" href="https://alouiayoub.com/contact" />
      </Helmet>
      <ContactForm />
    </div>
  )
}

export default Contact
