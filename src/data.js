
import { GiRadarSweep } from "react-icons/gi";
import { TbMathXy } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHands } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { MdSensors } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { CgDisplayFullwidth } from "react-icons/cg";


export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    
    {
        name: "Members",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <GiRadarSweep/>,
        title: "Live Detection",
        info: "Live Detection means we can easily be able to see the led blinking for any kind of obstacles",
        
    },
    {
        id: 2,
        icon: <TbMathXy/>,
        title: "Instant Reading",
        info: "Instant reading is shown in the lcd screen",
        
    },
    {
        id: 3,
        icon: <GiTakeMyMoney/>,
        title: "Low Budget",
        info: "This project is initially low budget as we used arduino and us sensors",
        
    },
    {
        id: 4,
        icon: <FaHands/>,
        title: "Simple Implementation",
        info: "The implementation of the project is simple so its easily understandable",
        
    }
]








export const values = [
    {
        id: 1,
        icon: <SiArduino/>,
        title: "Arduino UNO",
        desc: "The Arduino Uno is an open-source microcontroller board widely used for prototyping and DIY electronics projects."
    },
    {
        id: 2,
        icon: <MdSensors/>,
        title: "Ultrasonic Sensor",
        desc: "Ultrasonic sensors are devices that use sound waves to measure distance, often employed in robotics, automation, and security systems for proximity detection."
    },
    {
        id: 3,
        icon: <FaArrowsRotate/>,
        title: "Servo Motor",
        desc: "A servo motor is a rotary actuator that precisely controls angular position, velocity, and acceleration, commonly utilized in robotics, RC vehicles, and automation applications for precise motion control."
    },
    {
        id: 4,
        icon: <CgDisplayFullwidth/>,
        title: "LCD Module",
        desc: "An LCD module, or liquid crystal display module, is a compact screen device that utilizes liquid crystals to display alphanumeric characters or graphical information, commonly integrated into electronic devices for visual output and user interaction."
    }
]








const Trainer1 = require('./images/arnab ch.jpg')
const Trainer2 = require('./images/arnab pl main.jpg')
const Trainer3 = require('./images/aniket.jpg')
const Trainer4 = require('./images/chirenjeb.jpg')
const Trainer5 = require('./images/rameshsir.png')
const Trainer6 = require('./images/ivymam.png')



export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Arnab Chatterjee',
        job: 'Lead Hardware Master',
        socials: ['mailto:arnab.ece320076@bppimt.ac.in', 'https://wa.link/cwf7xy']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Arnab Paul',
        job: 'Software Lead',
        socials: ['mailto:arnab2181@gmail.com', 'https://wa.link/oxv7js' ]
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Aniket Das',
        job: 'Networking Lead',
        socials: ['mailto:aniket.ece320080@bppimt.ac.in', 'https://wa.link/8k9ivf']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Chiranjeeb Halder',
        job: 'Core Member',
        socials: ['mailto:chiranjeeb.ece320053@bppimt.ac.in', 'https://wa.link/kqpmse' ]
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Mr. Ramesh Kumar',
        job: 'Mentor and Superviser',
        socials: ['mailto:ramesh.kumar@bppimt.ac.in', 'https://wa.link/to4g3t']
    },

    {
        id: 6,
        image: Trainer6,
        name: 'Dr. Ivy Majumder',
        job: 'HOD OF ECE dept. BPPIMT',
        socials: ['mailto:ivym-ece@bppimt.ac.in', 'https://wa.link/94348u']
    }
]