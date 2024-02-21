import Card from "../UI/Card"

const Trainer = ({image,name,job,socials}) => {
  return (
    <Card className= "trainer__container">
        <div className="trainer__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">{

             socials.map(({icon,link},index)=>{
                return <a key={index} href= {link} target="_blank" rel = "noopener noreferrer">{icon}</a>
             })
          }
          </div>
    </Card>
  )
}

export default Trainer