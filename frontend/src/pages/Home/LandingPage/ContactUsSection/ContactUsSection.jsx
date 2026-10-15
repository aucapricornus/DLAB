import { ContactForm } from './ContactForm'
import { Header } from './Header'

export const ContactUsSection = () => {
  return (
    <div className='flex justify-evenly my-14 py-10 px-20 screen600:flex-col screen600:p-0 screen1100:px-0 '>
      <Header />
      <ContactForm />
    </div>
  )
}