import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import instagramSocial from "../../assets/images/instagramSocial.png";
import linkedinSocial from "../../assets/images/linkedinSocial.png";
import whatsappSocial from "../../assets/images/whatsappSocial.png";

export const Footer = () => {
  return (
    <Wrapper>
      <div className="containerOne">
        <div className="subContainerTwo">
          <div className="subContainerThree">
            <div className="name">
              <h1>Santiago Dev</h1>
              <p className="tagline">Backend Developer · Python & APIs</p>
            </div>

            <div className="menu">
              <h2>Navegación</h2>
              <Link to={"inicio"} spy={true} smooth={true} offset={-200} duration={100}>
                <h3>Inicio</h3>
              </Link>
              <Link to={"aboutMe"} spy={true} smooth={true} offset={-400} duration={100}>
                <h3>Acerca de mí</h3>
              </Link>
              <Link to={"trayectoria"} spy={true} smooth={true} offset={-150} duration={100}>
                <h3>Trayectoria</h3>
              </Link>
              <Link to={"skills"} spy={true} smooth={true} offset={-150} duration={100}>
                <h3>Stack</h3>
              </Link>
              <Link to={"proyects"} spy={true} smooth={true} offset={-100} duration={100}>
                <h3>Proyectos</h3>
              </Link>
            </div>

            <div className="contact">
              <h2>Contacto</h2>
              <Link to={"contactme"} spy={true} smooth={true} offset={-85} duration={300}>
                <h3>Formulario</h3>
              </Link>
              <a href="https://www.linkedin.com/in/santiago-schroh-350099221/" target="_blank" rel="noreferrer">
                <h3>LinkedIn</h3>
              </a>
              <a href="https://github.com/SchrohSantiago" target="_blank" rel="noreferrer">
                <h3>GitHub</h3>
              </a>
            </div>

            <div className="containerSocial">
              <div className="social">
                <h2>Social</h2>
              </div>
              <div className="containerIcon">
                <a href="https://www.instagram.com/schrohsanti/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <img src={instagramSocial} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/santiago-schroh-350099221/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <img src={linkedinSocial} alt="LinkedIn" />
                </a>
                <a href="https://wa.me/5492915131087" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <img src={whatsappSocial} alt="WhatsApp" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h4Container">
        <div className="h4SubContainer">
          <h4 className="containerTwo">© 2026 Santiago Schroh · Bahía Blanca, Argentina</h4>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 60px;

  a {
    color: #ffffff;
  }
  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    margin: 0;
  }
  .tagline {
    font-family: "DM Sans";
    font-size: 11px;
    color: rgba(var(--accent-rgb), 0.7);
    letter-spacing: 0.5px;
    margin: 0 0 8px 0;
  }
  h2 {
    color: var(--accent);
    font-size: 13px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.25px;
    transition: color 200ms ease-in-out;
    cursor: pointer;
    margin: 0;
  }
  h3:hover {
    color: var(--accent);
  }
  h4 {
    font-family: "DM Sans";
    font-style: italic;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.6px;
    color: rgba(255, 255, 255, 0.4);
  }
  img {
    transition: 200ms;
    opacity: 0.8;
  }
  img:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  .containerOne {
    border-top: 1px solid rgba(63, 58, 58, 0.3);
    border-bottom: 1px solid rgba(63, 58, 58, 0.3);
  }
  .containerTwo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
  }
  .containerSocial {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 35px;
  }
  .containerIcon {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 47%;
    padding-left: 6px;
    gap: 16px;
  }

  @media screen and (min-width: 1024px) {
    h1 {
      font-size: 30px;
      line-height: 44px;
    }
    .tagline {
      font-size: 12px;
    }
    h2 {
      font-size: 12px;
      line-height: 36px;
    }
    h3 {
      font-size: 16px;
      line-height: 32px;
    }
    h4 {
      font-size: 13px;
    }
    .name {
      margin-top: -11px;
    }
    .containerOne {
      display: flex;
      justify-content: center;
      min-height: 260px;
      align-items: center;
    }
    .subContainerTwo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      align-items: center;
      width: 90%;
    }
    .subContainerThree {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: flex-start;
      padding: 32px 0;
    }
    .containerSocial {
      padding-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      width: 120px;
    }
    .social {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    .h4Container {
      display: flex;
      justify-content: center;
      width: 100%;
    }
    .h4SubContainer {
      width: 90%;
      text-align: left;
    }
    .containerTwo {
      justify-content: flex-start;
    }
    .containerIcon {
      justify-content: flex-start;
      width: 100%;
      padding-left: 0;
    }
  }
`;
