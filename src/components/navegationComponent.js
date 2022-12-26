import React from "react";
import '../assets/css/style.css'
import {About_me} from "../pages/About_me"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import ReactDom from "react-dom/client";

function Navegation(){
    return(
      // <>
      // <nav class="navegation">
      //          <NavLink to="/" class="navegation--link">Inicio</NavLink>
      //          <NavLink to="" class="navegation--link">Portafolio</NavLink>
      //          <NavLink to="/about_me" class="navegation--link">Sobre mi</NavLink>
      //          <NavLink to="#" class="navegation--link">Contacto</NavLink>
      //          <NavLink to="#" class="navegation--link">Iniciar Sesion</NavLink>
      //     </nav>
      // <Router>
       
      //     <Routes>
      //     <Route path="/about_me" element={<About_me />}>
           
      //     </Route>
       
      //   </Routes>
      // </Router>
  //  </>
  <>

  <Router>

  </Router>
   <nav class="navegation">
     <NavLink to="/" className="navegation--link">Inicio</NavLink>
      <NavLink to="" className="navegation--link">Portafolio</NavLink>
     <NavLink to="/about_me" className="navegation--link">Sobre mi</NavLink>
         <NavLink to="#" className="navegation--link">Contacto</NavLink>
         <NavLink to="#" className="navegation--link">Iniciar Sesion</NavLink>
    </nav>
  </>
      
);
}

export {Navegation}