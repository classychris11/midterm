import React from "react"
import home1 from '../home1.jpg';
import home2 from '../home2.jpg';
import home3 from '../home4.jpg';
import '../CSS/styles.css';

const Home = () => {
    return (
        <div className="container">
            <body>
            <h3 className= "center-align">Home</h3>
            <h6 class="center-align">Welcome to the New Venetian Aqua-Pura Restoration Clinic. <br/><br/>
                 We are the foremost experts on the city’s energy source, Aqua-Pura and have tempered its energetic qualities to ensure a restful and restorative experience for our clientele.
                  Serving from the inner capitol to the outer islands, we seek to offer peace of mind and body, through a series of water-borne treatments.
                   <br/><br/>
                   These range from more delicate therapy, such as Mist-walking, and Salve Massages, to more extensive procedures such as our House Special: Full-Body Immersion.
                   <br/>
                   <br/>
            At the APRC, we seek to heal, and to learn more about ourselves as we are born anew in the pure waters of change.
            <br/>
            <br/>
            <br/>
</h6>
<img src={home3} width="350" height="300" alt="home3"/>
<img src={home1} width="355" height="300" alt="home1"/>
<img src={home2} width="355" height="300" alt="home2"/>
</body>
<br/><br/><br/>


<footer class="page-footer  center teal lighten-1">AP Restoration Clinic ©2021</footer>

        </div>
    )
}

export default Home