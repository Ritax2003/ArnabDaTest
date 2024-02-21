import MainHeader from '../../component/MainHeader'
import MainHeaderImage from '../../images/mainabt.png' 
import StoryImage from '../../images/structure.png'
import VisionImage from '../../images/top view.jpeg'
import MissionImage from '../../images/aboutbg.jpeg'
import './about.css'

import React from 'react'

const About = () => {
  return (
    <>
     <MainHeader title = "About ....." image ={MainHeaderImage}>
      Everything about the project
     </MainHeader>

     <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
             <img src={StoryImage} alt="" />
        </div>

        <div className="about__section-content">
          <h1>
            In the Beginning....
          </h1>

          <p>In our earlier days of project commencement, we thought of building a prototype on the concept of “Vehicle Accident Prevention System.” At first, we decided to include accelerometer, gyroscope and many more sensors, but then we found that the overall cost of the project would go beyond our limits. Then we started reducing the number of components and eventually made the list of final components which will precisely do the needful.
In our developing stages, we concluded that the ‘Arduino UNO’ microcontroller board would not be able to handle all those complex tasks simultaneously. So, we kept the ‘microcontroller board selection’ a decision to be made by our supervisor. Later, our supervisor instructed us to go for the Arduino UNO and if problem arises switch to Arduino Mega. 
</p>

          
        </div>
      </div>
     </section>


     <section className="about__Vision">
      <div className="container about__Vision-container">
        
        <div className="about__section-content">
          <h1>
            Good Planning But.....
          </h1>

          <p>As mentioned earlier, we went through the exact course of action as per our plan, but it seemed that difficulty and problems never cease to cast its dark shadow upon us. Initially, we decided to use SG90 Servo motor as it was low cost and a standard servo motor which can be used in any electronics and IoT projects. To our utter disappointment, the SG90 Servo motors were not working properly as they were of low quality. 

</p>

          <p>
          Secondly, there were not many pins available for the ultrasonic sensors. Since in our project we needed 4 ultrasonic sensors, but due to ‘pin non-availability’ in Arduino UNO.
          Finally, the main problem that came out was ‘task scheduling.’ We found that, when all the servo motors were rotating simultaneously, some of them were rotating beyond the required range: 0̊ degreeto 180 degrees. There were some other malfunctions that we observed, like some of them were rotating very slowly. We understood that microcontroller was not able to rotate all the four servo motors and at the same time taking input of distances from different ultrasonic sensors. 
          </p>
        </div>

        <div className="about__section-image">
             <img src={VisionImage} alt="" />
        </div>
      </div>
     </section>



     <section className="about__Mission">
      <div className="container about__Mission-container">
        <div className="about__section-image">
             <img src={MissionImage} alt="" />
        </div>

        <div className="about__section-content">
          <h1>
            The Implementation
          </h1>

          <p>Firstly, the problem with SG90 was solved just by replacing it with MG90. SG90 had plastic gears and in few cases, it showed difficulty in rotation. So, we thought to replace it with MG90 which has metal gears i.e., improved gear to gear contact, resulting in optimum speed of rotation.
          Our next problem of <b> ‘pin non-availability’ </b> in Arduino UNO was solved. We came up with a new idea of ‘pin sharing.’ In short, the trigger and echo pins of ultrasonic sensors 1&2 were shorted. Same has been done for 3&4.
         </p>
         <p>Lastly, the problem of ‘task scheduling’ was removed by changing some program flow in the Arduino program. We also added some delay after the rotation of each servo motor, so that the ultrasonic sensors of the respective servo motors can take the readings and display the with sufficient time.</p>
          
        </div>
      </div>

      <div className="report">
        Project Report is on Progress, We will update Shortly.
      </div>
     </section>
    </>
  )
}

export default About