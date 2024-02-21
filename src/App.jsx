import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'

import Trainers from './pages/trainers/Trainers'
import Notfound from './pages/notFound/Notfound'
import Menubar from './component/Menubar'
import Footer from './component/Footer'
const App = () => {
  return (
    
      <BrowserRouter>
      <Menubar/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='contact' element = {<Contact/>}/>
        <Route path='gallery' element = {<Gallery/>}/>
        
        <Route path='trainers' element = {<Trainers/>}/>
        <Route path='*' element = {<Notfound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App