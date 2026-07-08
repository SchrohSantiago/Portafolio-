import React from "react";
import styled from "styled-components";
import { useRecruiterMode } from "../../context/RecruiterMode";
import download from "../../assets/images/download.png";
import instagram from "../../assets/images/instagram.png";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import curriculum from "../../assets/downloads/curriculumSchroh.pdf";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

export const Home = () => {
  const { isRecruiterMode } = useRecruiterMode();
  return (
    <HomeContainer id="inicio">
      <div className="nameContainer">
        {isRecruiterMode && (
          <div className="availableBadge">
            <span className="availableDot" />
            Disponible · Remoto LATAM y España
          </div>
        )}
        <div className="nameMobile">
          <span className="name">Santiago Schroh.</span>
          <span className="roleTag">Backend Developer</span>
        </div>
        {isRecruiterMode && (
          <div className="availableBadgeDesktop">
            <span className="availableDot" />
            Disponible · Remoto LATAM y España
          </div>
        )}
        <div className="nameDesktop">
          Soy <span className="colorNameDesktop">Santiago Schroh.</span>
        </div>
        <div className="nameDesktop2">
          <span className="colorNameDesktop">Backend</span> Developer
        </div>
        <div className="welcomeContainer">
          Python · FastAPI · Flask · MongoDB
        </div>
        <div className="buttonsContainer">
          <div className="subButtonsContainer">
            <div>
              <Link to={"proyects"} spy={true} smooth={true} offset={-150} duration={300}>
                <button className="buttonSeeProyects">
                  <span>Ver proyectos</span>
                </button>
              </Link>
            </div>
            <div>
              <a href={curriculum} download="CV Santiago Schroh">
                <button className="buttonDownloadCV">
                  <span className="center">
                    <img src={download} alt="downloadImage" />
                    <span className="downloadCvText">Descargar CV</span>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Redes sociales — visible en mobile Y desktop */}
        <div className="socialMobile">
          <a href="https://github.com/SchrohSantiago" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.instagram.com/schrohsanti/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-schroh-350099221/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src={linkedin} alt="LinkedIn" className="linkedinImage" />
          </a>
          <a href="https://wa.me/5492915131087" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="whatsappLink">
            <FaWhatsapp className="whatsappIcon" />
          </a>
        </div>
      </div>

      {/* Redes solo desktop (con los efectos hover originales) */}
      <div className="websitesContainer">
        <a href="https://github.com/SchrohSantiago" className="socialImagesGit" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/schrohsanti/" className="socialImagesInstagram" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/santiago-schroh-350099221/" className="socialImagesLinkedin" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" className="linkedinImage" />
        </a>
        <a href="https://wa.me/5492915131087" className="socialImagesWhatsapp" target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="whatsappIconDesktop" />
        </a>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 500px;
  margin-top: 70px;
  padding: 32px 0;

  .nameContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.25px;
  }
  .nameMobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .name {
    color: var(--accent);
  }
  .roleTag {
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 2px;
    text-transform: uppercase;
    border: 1px solid rgba(var(--accent-rgb), 0.3);
    border-radius: 100px;
    padding: 4px 16px;
    font-size: 12px;
  }
  .welcomeContainer {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
  .buttonsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 36px;
    cursor: pointer;
    width: 72%;
    gap: 10px;
  }
  .subButtonsContainer {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .buttonSeeProyects {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    border-color: transparent;
    background: var(--accent);
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    height: 48px;
    color: #0c0c0c;
    transition: background 200ms ease, transform 150ms ease;
  }
  .buttonSeeProyects:hover {
    background: #00d4c8;
    transform: translateY(-1px);
  }
  .buttonDownloadCV {
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    padding: 16px 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    color: rgba(0, 0, 0, 0) !important;
    overflow: hidden;
    transition: all 0.3s ease;
    text-shadow: 0 0 0 #fff, 0 45px 0 #000;
  }
  .downloadCvText {
    margin-left: 7px;
  }
  .buttonDownloadCV:hover {
    text-shadow: 0 -45px 0 #fff, 0 0 0 var(--accent);
    border-color: rgba(var(--accent-rgb), 0.5);
  }
  .center {
    align-items: center;
    display: flex;
  }

  /* Redes mobile */
  .socialMobile {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 36px;
  }
  .socialMobile img {
    width: 24px;
    height: 24px;
    opacity: 0.75;
    transition: opacity 200ms ease, transform 200ms ease;
  }
  .socialMobile img:hover {
    opacity: 1;
    transform: scale(1.15);
  }
  .whatsappLink {
    display: flex;
    align-items: center;
  }
  .whatsappIcon {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.75);
    transition: color 200ms ease, transform 200ms ease;
  }
  .whatsappIcon:hover {
    color: #25d366;
    transform: scale(1.15);
  }

  .availableBadge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border: 1px solid rgba(74, 222, 128, 0.4);
    border-radius: 100px;
    background: rgba(74, 222, 128, 0.07);
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 500;
    color: rgba(74, 222, 128, 0.9);
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  }
  .availableDot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 6px rgba(74, 222, 128, 0.7);
    animation: pulse-green 2s ease-in-out infinite;
    flex-shrink: 0;
  }
  @keyframes pulse-green {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .availableBadgeDesktop {
    display: none;
  }
  .nameDesktop {
    display: none;
  }
  .nameDesktop2 {
    display: none;
  }
  .websitesContainer {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    min-height: 800px;
    margin-top: 140px;
    padding: 0;

    .nameContainer {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 90px;
      text-align: center;
      letter-spacing: -0.5px;
      margin-bottom: 100px;
    }
    .nameMobile {
      display: none;
    }
    .socialMobile {
      display: none;
    }
    .nameDesktop {
      display: block;
    }
    .nameDesktop2 {
      display: block;
      white-space: nowrap;
      border-right: 1px solid;
      width: 15ch;
      animation: typing 2400ms steps(19), blink 0.5s infinite step-end alternate;
      overflow: hidden;
    }
    .availableBadge {
      display: none;
    }
    .availableBadgeDesktop {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 18px;
      border: 1px solid rgba(74, 222, 128, 0.4);
      border-radius: 100px;
      background: rgba(74, 222, 128, 0.07);
      font-family: "DM Sans";
      font-size: 13px;
      font-weight: 500;
      color: rgba(74, 222, 128, 0.9);
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }
    .linkedinImage {
      margin-top: 6px;
    }
    @keyframes typing {
      from {
        width: 0;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    .colorNameDesktop {
      color: var(--accent);
    }
    .welcomeContainer {
      font-size: 14px;
      letter-spacing: 3px;
      padding-top: 40px;
    }
    .buttonsContainer {
      flex-direction: row;
      justify-content: center;
      gap: 30px;
    }
    .subButtonsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 30px;
    }
    .buttonSeeProyects {
      font-size: 19px;
      padding: 20px 40px;
      display: flex;
      height: 63px;
      width: 218.567px;
      position: relative;
      background: black;
      border: 1px solid var(--accent);
      color: transparent;
    }
    .buttonSeeProyects span {
      display: none;
    }
    .buttonSeeProyects:hover {
      background: black;
      transform: none;
    }
    .buttonSeeProyects:before {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      content: "Espero que te gusten :)";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0c0c0c;
      background: var(--accent);
      top: 0;
      left: 100%;
      transition: all 1s;
      height: 100%;
      width: 100%;
      position: absolute;
      transform: scale(0) rotatey(0);
      opacity: 0;
    }
    .buttonSeeProyects:hover:before {
      transform: scale(1) rotatey(360deg);
      left: 0;
      opacity: 1;
    }
    .buttonSeeProyects:after {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 19px;
      content: "Ver Proyectos";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #0c0c0c;
      background: var(--accent);
      top: 0;
      left: 0;
      transition: all 1s;
      height: 100%;
      width: 100%;
      position: absolute;
      transform: scale(1) rotatey(0);
      opacity: 1;
    }
    .buttonSeeProyects:hover:after {
      transform: scale(0) rotatey(360deg);
      left: -100%;
      opacity: 0;
    }
    .buttonDownloadCV {
      font-size: 19px;
      width: 218.567px;
      height: 63px;
    }
    .downloadCvText {
      margin-left: 14px;
    }
    .websitesContainer {
      display: flex;
      width: 50%;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 100px;
    }
    .socialImagesLinkedin {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesLinkedin:hover {
      transform: scale(1.4);
      filter: drop-shadow(20px 12px 10px #4444dd);
    }
    .socialImagesInstagram {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesInstagram:hover {
      transform: scale(1.4);
      filter: drop-shadow(0px 15px 15px #bf467c);
    }
    .socialImagesGit {
      cursor: pointer;
      transition: all 800ms;
    }
    .socialImagesGit:hover {
      transform: scale(1.4);
      filter: drop-shadow(-20px 12px 10px #b8e2f296);
    }
    .socialImagesWhatsapp {
      cursor: pointer;
      transition: all 800ms;
      display: flex;
      align-items: center;
    }
    .whatsappIconDesktop {
      font-size: 32px;
      color: rgba(255, 255, 255, 0.8);
      transition: all 800ms;
    }
    .socialImagesWhatsapp:hover .whatsappIconDesktop {
      transform: scale(1.4);
      color: #25d366;
      filter: drop-shadow(0px 10px 10px #25d36660);
    }
  }
`;
