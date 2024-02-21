import Image from '../images/lov.png'
import SectionHead from './SectionHead'
import { TbComponents } from "react-icons/tb";
import { values } from '../data';
import Card from '../UI/Card';

const Vals = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Val Img" />
                </div>
            </div>
            <div className="values__right">
              
              <SectionHead icon={<TbComponents/>} className= "kcom" title = "Key Components"/>
              <p>We used these components for our hardware project...</p>
              <div className="values__wrapper">
                {
                    values.map(({id,icon,title,desc}) =>{
                        return <Card key={id} className="values__value">
                             <span>{icon}</span>
                             <h4>{title}</h4>
                             <small>{desc}</small>
                        </Card>
                    })
                }
              </div>
            </div>
        </div>
    </section>
  )
}

export default Vals