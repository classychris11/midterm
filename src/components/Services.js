import React from "react"
import Services1 from '../services1.jpg';
import Services5 from '../Services5.jpg';
import Services6 from '../Services6.jpg';
import Services7 from '../services7.jpg';

const Services = () => {
    return (
        <div className="container">
            <h3 className= "center-align">Services</h3>
            <body>
            <h6 class="center-align">Below, is a list of our highly heralded services, ordered by the intensity of treatment. We hope to find what brings out the best in you! <a href ="/src/images/"></a>
                <br/><br/>
                Salve Massage – A more hands-on approach to Aqua-Pura therapy, our Salve massages implement lotions and a light shower of Aqua-Pura for a full-body massage. Clients can choose between Light-Touch, and Deep Tissue massages, or opt for a Storm treatment, in which highly pressurized Aqua-Pura stimulates pressure points around the body, in lieu of human touch. 
                <br/><br/>
                Mist-Walking – a beautiful beginner’s option, our mist-walking sessions involve light aerobics, and lounging in a private Aqua-Pura Sauna, that exfoliates and moisturizes skin in half-hour to full-hour sessions. A perfect option for those with a busy afternoon ahead, or who just want to relax in their own sanctum of sweet solitude.
                <br/><br/>
                Lower Body Whirlpool Session – A perfect, in-depth option for those who work on their feet: Whirlpool Sessions involve brief immersion into our patented Aqua-Pura Whirlpools, that quickly stimulate and ease the tensions on the legs, feet, and lower back. A short series of 5-minute sessions will prove their effectiveness, most clients need a moment before they can even stand up!
                <br/><br/>
                Full-Body Immersion Therapy – Our most sought-after treatment option, Full-Body Immersion is usually suggested for those who have tried our other options and are left wanting. Full-Body Immersion, while requiring an equivalent amount of time to recuperate afterwards (30 minutes in, 30 minutes out), utilizes our Whirlpool technology to stimulate the entire body, when submerged, safely, into our AP tanks. This ground-breaking treatment will leave you feeling as though you’ve truly been born again, as the stresses and scars you brought in with you are washed away.
                <br/><br/><br/>
                <img src={Services1} width="266" height="250" alt="serv4"/>
                <img src={Services7} width="265" height="250" alt="serv7"/>
                <img src={Services6} width="265" height="250" alt="serv6"/>
                <img src={Services5} width="266" height="250" alt="serv5"/>
            </h6>
            </body>
            <footer class="page-footer center teal lighten-1">AP Restoration Clinic ©2021</footer>

        </div>
    )
}

export default Services