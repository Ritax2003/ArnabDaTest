import {Link} from 'react-router-dom'
import Image from '../images/vaps main.png'

const Header = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                 <h4>
                 Drive Safely into the Future
                 
                 </h4>
                 <h2>
                    VEHICLE ACCIDENT PREVENTION SYSTEM

                 </h2>
                 <p>
                 Introducing Our State-of-the-Art Vehicle Accident Prevention System!!!!
                 </p>

                 <Link to = "https://www.canva.com/design/DAF5fbjm46U/VB0dolab3ae4UsLbTwBPtg/view?utm_content=DAF5fbjm46U&utm_campaign=designshare&utm_medium=link&utm_source=editor" className = 'btn lg' target='_blank'>Explore</Link>
            </div>

            <div className="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-img">
                    <img src={Image} alt="HeaderImage" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header