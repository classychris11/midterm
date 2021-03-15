import React from "react"
import AboutUs1 from '../AboutUs1.jpg';
import AboutUs2 from '../AboutUs2.jpg';
import AboutUs3 from '../AboutUs3.jpg';
import AboutUs4 from '../AboutUs4.jpg';
import AboutUs6 from '../AboutUs6.jpg';

const About = () => {
    return (
        <div className="container">
            <h3 className= "center-align">About Us</h3>
            <h6 class="center-align">In New Venice, from the islands to the mainland, we are burdened with the weight of our responsibility. To ensure humanity’s prosperity and survival at the edge of the world, is no simple task, and one that leaves many bruised, tired, and broken. Seeing this, we sought to mend the wounded among us. The electro-stimulated water that maintains the flow of our canals and gondolas became the center of our interest, as we saw its potential to transform as well as transport.
                <br/><br/>
                Since then, we have devoted ourselves to exploring Aqua-Pura’s restorative abilities, with great restraint and respect for its power. Studies have shown that over-consumption or inhalation of Aqua-Pura can be deadly, but at a lesser intensity, can heal wounds physical, emotional, and mental.
                <br/><br/>
                Listed below are our house technicians heralded for their ability to assess pain in whatever form it manifests and knead it from the body.</h6>
                <br/><br/>
                <body class="center-align">
                <img src={AboutUs1} width="380" height="270" alt="ab1"/>
                <h4>    Doriyana Alvys – Hostess/Consultation Specialist </h4>
                <br/>
                <img src={AboutUs2} width="380" height="270" alt="ab2"/>
                <h4>    Lena Delmar – Head Masseuse/Drip Treatment Specialist </h4>
                <br/>
                <img src={AboutUs3} width="380" height="270" alt="ab3"/>
                <h4>    Alex Raynn – Head Masseur/Tank Specialist </h4>
                <br/>
                <img src={AboutUs4} width="380" height="270" alt="ab4"/>
                 <h4>   Donna Deluge – Manager/Guided Meditation Specialist </h4>
                <br/>
                <img src={AboutUs6} width="380" height="270" alt="ab6"/>
                <h4>    Giovanni Esposito – Owner/Research Specialist </h4>
                </body>
                <footer class="page-footer center teal lighten-1">AP Restoration Clinic ©2021</footer>



        </div>
    )
}

export default About