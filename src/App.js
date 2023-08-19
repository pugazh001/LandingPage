import React from "react";
import Contact from "./component/Contact";
import Players from "./component/Players";
import Home from "./component/Home";
import About from "./component/About";
import {Link,Routes,Route} from "react-router-dom"; 
import "./App.css"
function App() {
  return (
    <div className="app">
       <nav>
        <ul>
          <li><Link to='/'><h3>Home</h3></Link></li>
          <li><Link to="/about" ><h3>About</h3></Link></li>
          <li><Link to="/player"><h3>Players</h3></Link></li>
          <li><Link to="/contact"><h3>Contact</h3></Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/player" element={<Players />}/>
      </Routes>
    </div>
  );
}

export default App;