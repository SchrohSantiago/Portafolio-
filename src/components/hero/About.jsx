import React from "react";
import styled from "styled-components";
import { useRecruiterMode } from "../../context/RecruiterMode";
import Yo from "../../assets/images/yo.png";
import arrow from "../../assets/images/arrow.png";

export const About = () => {
  const { isRecruiterMode } = useRecruiterMode();
  return (
    <Wrapper>
      <div className="subContainer">
        <div className="imageMobileContainer">
          <img src={Yo} alt="Foto de Santiago Schroh" />
        </div>
        <div className="imageContainer">
          <img src={Yo} alt="Santiago Schroh" className="imgYoBiggest" />
        </div>
        <div className="textContainer" id="aboutMe">
          <h1>Acerca de mí</h1>
          <h3>
            Soy Santiago, Backend Developer con 2 años de experiencia
            desarrollando sistemas productivos de alta criticidad utilizados por
            miles de usuarios reales.
            <br /><br />
            Actualmente en <strong>Leafnoise</strong>, desarrollo y coordino la
            plataforma gubernamental <strong>Timbó/Moorea</strong> del Gobierno
            de Santa Fe —con más de 15.000 usuarios activos. Gestiono entre 30 y
            60 incidentes bajo SLA mensualmente, lidero un equipo de 4 personas
            y orquesto releases on-demand vía Jenkins sobre 4 ambientes
            productivos.
            <br /><br />
            Mi perfil es híbrido: programo, coordino y comunico. Cuento con la
            Tecnicatura en Programación de la <strong>UTN</strong>, experiencia
            en proyectos colaborativos en No Country y un proyecto freelance
            productivo —una PWA de gestión de gimnasio que construí y desplegué
            end-to-end.
          </h3>

          {!isRecruiterMode && <div className="chipRow">
            <span className="chip highlight">Python</span>
            <span className="chip highlight">Flask</span>
            <span className="chip highlight">FastAPI</span>
            <span className="chip">MongoDB</span>
            <span className="chip">MySQL</span>
            <span className="chip">Jenkins</span>
            <span className="chip">Docker</span>
            <span className="chip">React</span>
            <span className="chip ai">Claude Code</span>
          </div>}

          <div className="buttonContainer">
            <a href="https://www.linkedin.com/in/santiago-schroh-350099221/" target="_blank" rel="noreferrer">
              <button className="effectButton">
                Más acerca de mí
                <img src={arrow} className="arrow" alt="arrow" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  a {
    color: #fff;
  }
  strong {
    color: var(--accent);
    font-weight: 500;
  }
  .subContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #141516;
    width: 94%;
    border-radius: 12px;
    height: auto;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  .imageContainer {
    display: none;
  }
  .textContainer {
    width: 90%;
    align-items: center;
    justify-content: center;
  }
  .textContainer h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .textContainer h3 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.3px;
    color: rgba(255, 255, 255, 0.8);
  }

  .chipRow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border: 1px solid rgba(var(--accent-rgb), 0.3);
    border-radius: 100px;
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(var(--accent-rgb), 0.04);
    transition: all 200ms ease;
  }
  .chip.highlight {
    border-color: rgba(var(--accent-rgb), 0.55);
    color: var(--accent);
    background: rgba(var(--accent-rgb), 0.08);
  }
  .chip.ai {
    border-color: rgba(168, 100, 255, 0.45);
    color: rgba(200, 150, 255, 0.9);
    background: rgba(168, 100, 255, 0.07);
  }

  .buttonContainer {
    display: block;
  }
  button {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    width: auto;
    min-width: 180px;
    height: 48px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    color: #ffffff;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    transition: border-color 200ms ease;
  }
  button:hover {
    border-color: rgba(var(--accent-rgb), 0.5);
  }
  .effectButton {
    color: rgba(0, 0, 0, 0) !important;
    transition: all 0.3s ease;
    text-shadow: 0 0 0 #fff, -200px 0 0 var(--accent);
    overflow: hidden;
  }
  .effectButton:hover {
    text-shadow: 200px 0 0 #fff, 0 0 0 var(--accent);
  }
  .imageMobileContainer {
    filter: drop-shadow(0px 5px 7px var(--accent));
    margin-bottom: 20px;
    width: 180px;
    max-width: 60%;
    border-radius: 12px;
    overflow: hidden;
  }
  .imageMobileContainer img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
  .arrow {
    margin-left: 8px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 60px;
    .subContainer {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      background-color: #141516;
      width: 88%;
      max-width: 1200px;
      height: auto;
    }
    .imageMobileContainer {
      display: none;
    }
    .imageContainer {
      display: block;
      margin-left: 30px;
      margin-right: 40px;
      margin-top: 20px;
      filter: drop-shadow(12px 5px 7px var(--accent));
      transition: 600ms ease-in-out;
      flex-shrink: 0;
      width: 320px;
      border-radius: 16px;
      overflow: hidden;
    }
    .imageContainer img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 16px;
    }
    .imageContainer:hover {
      transform: scale(1.03);
      filter: drop-shadow(12px 5px 7px #ffffff);
    }
    .textContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 40px 0;
      gap: 0;
    }
    .textContainer h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 1.1;
      margin-bottom: 20px;
    }
    .textContainer h3 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      width: 90%;
      letter-spacing: 0.3px;
    }
    .chipRow {
      margin-top: 24px;
      margin-bottom: 28px;
    }
    .chip {
      font-size: 13px;
      padding: 5px 14px;
    }
    .arrow {
      margin-left: 8px;
    }
    .buttonContainer {
      margin-top: 4px;
    }
  }
`;
