
import MainHeader from '../../component/MainHeader';
import HeaderImg from '../../images/member bgground.png';
import { trainers } from '../../data';
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Trainer from '../../component/Trainer';
import './trainer.css';


const Trainers = () => {
  return (
    <>
      <MainHeader title = "Members" image = {HeaderImg}>
        Those who put everything in this project...
      </MainHeader>

      <section className="trainers">
        <div className="containers trainers__container">
          {
            trainers.map(({id,image,name,job,socials})=>{
              return <Trainer key={id} image = {image} name = {name} job = {job} socials = {
                    [
                        {icon:<BiLogoGmail/>, link: socials[0]},
                        {icon:<FaWhatsapp/>, link: socials[1]}
                        
                        
                    ]
                }/>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers