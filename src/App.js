import logo from "./assets/img/Logo_blanco.png";
import artBoart from "./assets/img/Yahoska_Artboard_Clean_Ful.jpg";
import img_yahoska from "./assets/img/Yahoska_Index.jpg";
// import "./App.css";
import "./assets/css/style.css";
import { BestWorkIndex } from "./components/BestWorkIndex";
import { PortafolioIndex } from "./components/portafolioIndex";
import { Navegation } from "./components/navegationComponent";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <header class="header">
        <div class="bar">
          <div class="bar-ico">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="bar-logo">
            <a href="/">
              <img
                loading="lazy"
                src={logo}
                alt="bar-logo--img"
                class="bar-logo--logo"
              />
            </a>
          </div>
          <Navegation />
        </div>
        <div class="hero">
          <div class="hero-logo">
            <img
              loading="lazy"
              src={artBoart}
              alt="Image of yahoska logo "
              class="hero-logo--img"
            />
            <a href="/" class="hero-logo--btn btn desktop">
              Ver Mas!
            </a>
          </div>
          <div class="hero-img">
            <img
              loading="lazy"
              src={img_yahoska}
              alt="yahoska`s image"
              class="hero-img--img desktop"
            />
          </div>
        </div>
      </header>
      <main class="container">
        <section className="best-work">
          <h2 class="best-work--title">Mejores trabajos</h2>
          <div className="best-work-cards">
            <BestWorkIndex />
          </div>
        </section>
        <section className="portafolio_index">
          <h1 class="portafolio_index--title">Portafolio</h1>
          <section className="portafolio_index-cards">
            <PortafolioIndex />
            <a className="btn portafolio_index--btn">Ver mas</a>
          </section>
        </section>
        <section class="stats">
          <h2 class="stats--title">Stats</h2>
          <div class="stats--img" id="stats--img"></div>
        </section>
      </main>
      <section class="information_footer">
        <i class="fa-brands fa-instagram information_footer--icon"></i>
        <p class="information_footer--hashtag">#YahoskaFM</p>
        <p class="information_footer--text">Sígueme en Instagram</p>
    </section>
    <footer class="footer">
        <div class="footer-information">
            <div class="footer-information--social-media">
                <a href="" class="footer-information--social-media--link"><i class="fa-brands fa-instagram"></i></a>
                <a href="" class="footer-information--social-media--link"><i class="fa-brands fa-square-facebook"></i></a>
            </div>
            <div class="footer-information--navegation">
                <img loading="lazy" src={logo}alt="logotipo" class="footer-information--navegation-logo-img" />
                <nav class="footer-information--navegation-nav">
                    <a href="index.html" class="footer-information--navegation-nav--link">Inicio</a>
                    <a href="portafolio.html" class="footer-information--navegation-nav--link">Portafolio</a>
                    <a href="" class="footer-information--navegation-nav--link">Sobre mi</a>
                    <a href="" class="footer-information--navegation-nav--link">Contacto</a>
                    <a href="" class="footer-information--navegation-nav--link">Iniciar Sesion</a>
                </nav>
                
            </div>
        </div>
        <div class="footer-copyright">Todos los derechos reservados.</div>
    </footer>
    </React.Fragment>
  );
}

export default App;
