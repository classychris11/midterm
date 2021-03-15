import {BrowserRouter, Route} from "react-router-dom"

//import styles
import Styles from "./CSS/styles.css"

//import Navbar
import Navbar from "./components/Navbar"

//import Components
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Route exact path= "/" component={Home}/>
      <Route path= "/about" component={About}/>
      <Route path= "/services" component={Services}/>
      <Route path= "/contact" component={Contact}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
