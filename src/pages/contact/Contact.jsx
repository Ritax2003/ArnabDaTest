import './Contact.css'
import HeaderImage from '../../images/getintouch.jpg'
import {MdEmail} from 'react-icons/md'
import { FaLinkedin } from "react-icons/fa";
import {IoLogoWhatsapp} from 'react-icons/io'
import MainHeader from '../../component/MainHeader'

const Contact = () => {
  return (
    <>
    <MainHeader title ="Get in Touch" image = {HeaderImage}>
           Any Valuable Suggestions,Collaborations are always Welcome!

           <p>You can DM us in Whatsapp,Messenger,Mail..:)</p>
       </MainHeader>

       <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
               <a href="mailto:arnab2181@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
               <a href="https://www.linkedin.com/in/arnab-paul-09507022b/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
               <a href="https://wa.link/cwf7xy" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
       </section>
    </>
  )
}

export default Contact