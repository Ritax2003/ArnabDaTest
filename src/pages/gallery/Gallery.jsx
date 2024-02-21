import './gallery.css'
import HeaderImage from '../../images/gallerytop.jpg'
import MainHeader from '../../component/MainHeader'
const Gallery = () => {
  const galLen = 5;
  const images =[]

  for (let i = 1;i<galLen;i++){
    images.push(require(`../../images/vaps${i}.jpg`))
  }

  return (
   <>
       <MainHeader title = "Our Gallery" image={HeaderImage}>
       Some Images to Show---:)
       </MainHeader>

       <section className="gallery">
        <div className="gallery__container">
          {
            images.map((image,index)=>{
              return <article key={index}>
                <img src={image} alt={`gal img ${index+1}`} />
              </article>
            })
          }

         

         

        </div>
       </section>
       <h3 className='ender'>To check out more videos and content, Contact Us!</h3>
   </>
  )
}

export default Gallery