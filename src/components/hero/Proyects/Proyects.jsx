import React from "react";
import styled from "styled-components";
import blackArrow from "../../../assets/images/blackArrow.png";
import digitize from "../../../assets/videos/digitize.mp4";
import ecoSport from "../../../assets/videos/ecoSport.mp4";
import city from "../../../assets/videos/appClima.mp4";
import {
  InterrogationModalRight,
  InterrogationModalRightTwo,
  InterrogationModalLeft,
} from "./InterrogationModals";

export const Proyects = () => {
  return (
    <Wrapper id="proyects">
      <div className="titleAndButton">
        <div className="moveTitleAndButton">
          <h1>Proyectos</h1>
          <button className="buttonDesktop">
            <span className="center">
              <a href="https://github.com/SchrohSantiago?tab=repositories" target="_blank" rel="noreferrer">
                Ver más en GitHub
              </a>
              <img src={blackArrow} alt="arrowBlack" className="arrowBlacksin" />
            </span>
          </button>
        </div>
      </div>

      <div className="videoContainer">
        {/* Proyecto 1: Digitize */}
        <div className="containerBoxOne">
          <div className="projectCardWrapper">
            <div className="boxOne">
              <video className="resolutionImage" controls>
                <source src={digitize} type="video/mp4" />
              </video>
            </div>
            <div className="projectInfo">
              <span className="projectName">Digitize</span>
              <span className="projectStack">React · Node.js · No Country</span>
            </div>
          </div>
          <div className="containerInterrogationOne">
            <InterrogationModalRight />
          </div>
        </div>

        {/* Proyecto 2: App Clima */}
        <div className="containerBoxTwo">
          <div className="containerInterrogationTwo">
            <InterrogationModalLeft />
          </div>
          <div className="projectCardWrapper">
            <div className="boxTwo">
              <video className="resolutionImage" controls>
                <source src={city} type="video/mp4" />
              </video>
            </div>
            <div className="projectInfo right">
              <span className="projectName">App Clima 2.0</span>
              <span className="projectStack">JavaScript · OpenWeather API</span>
            </div>
          </div>
        </div>

        {/* Proyecto 3: Eco-Sport */}
        <div className="containerBoxThree">
          <div className="projectCardWrapper">
            <div className="boxThree">
              <video className="resolutionImage" controls>
                <source src={ecoSport} type="video/mp4" />
              </video>
            </div>
            <div className="projectInfo">
              <span className="projectName">Eco-Sport</span>
              <span className="projectStack">React · Node.js · JWT · No Country</span>
            </div>
          </div>
          <div className="containerInterrogationOne">
            <InterrogationModalRightTwo />
          </div>
        </div>
      </div>

      <button className="buttonMobile">
        <span className="center">
          <a href="https://github.com/SchrohSantiago?tab=repositories" target="_blank" rel="noreferrer">
            Ver más en GitHub
          </a>
          <img src={blackArrow} alt="arrowBlack" className="arrowBlacksin" />
        </span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 70px;

  a {
    text-decoration: none;
    color: #171718;
  }
  h1 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 32px;
  }
  button {
    width: 280px;
    height: 48px;
    background: var(--accent);
    border-radius: 8px;
    border-color: transparent;
    margin-top: 20px;
    cursor: pointer;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    transition: background 200ms ease;
  }
  button:hover {
    background: #00d4c8;
  }

  .buttonDesktop {
    display: none;
  }
  .projectCardWrapper {
    display: flex;
    flex-direction: column;
  }
  .boxOne {
    width: 279px;
    height: 160px;
    border: 1px solid var(--accent);
    box-shadow: -6px -6px 4px 2px rgba(var(--accent-rgb), 0.45);
    border-radius: 4px;
    overflow: hidden;
  }
  .containerInterrogationOne {
    display: none;
  }
  .containerInterrogationTwo {
    display: none;
  }
  .boxTwo {
    width: 279px;
    height: 160px;
    border: 1px solid var(--accent);
    box-shadow: 6px 6px 4px 2px rgba(var(--accent-rgb), 0.45);
    border-radius: 4px;
    overflow: hidden;
  }
  .boxThree {
    width: 279px;
    height: 160px;
    border: 1px solid var(--accent);
    box-shadow: -6px 6px 4px 2px rgba(var(--accent-rgb), 0.45);
    border-radius: 4px;
    overflow: hidden;
  }
  .projectInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    padding-left: 2px;
  }
  .projectInfo.right {
    align-items: flex-end;
    padding-left: 0;
    padding-right: 2px;
  }
  .projectName {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    letter-spacing: 0.3px;
  }
  .projectStack {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 11px;
    color: rgba(var(--accent-rgb), 0.7);
    margin-top: 3px;
    letter-spacing: 0.2px;
  }
  .arrowBlacksin {
    padding-left: 10px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .resolutionImage {
    width: 100%;
    height: 100%;
    display: block;
  }
  .videoContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  .buttonMobile {
    margin-top: 50px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 160px;

    .buttonMobile {
      display: none;
    }
    .buttonDesktop {
      display: block;
    }
    .titleAndButton {
      display: flex;
      width: 60%;
      margin-bottom: 60px;
    }
    .moveTitleAndButton {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    button {
      width: 220px;
    }
    h1 {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 32px;
      letter-spacing: 1.25px;
      margin-bottom: 20px;
    }
    .projectCardWrapper {
      flex-direction: column;
    }
    .containerBoxOne {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 40px;
    }
    .boxOne {
      width: 600px;
      height: 350px;
      box-shadow: -12px -12px 8px 4px rgba(var(--accent-rgb), 0.45);
    }
    .containerInterrogationOne {
      display: flex;
      height: 60px;
      margin-left: 40px;
      align-items: center;
      cursor: pointer;
    }
    .boxTwo {
      width: 600px;
      height: 350px;
      box-shadow: 12px 12px 8px 4px rgba(var(--accent-rgb), 0.45);
    }
    .containerInterrogationTwo {
      display: flex;
      justify-content: flex-end;
      height: 60px;
      width: 600px;
      margin-right: 80px;
      align-items: center;
      cursor: pointer;
    }
    .boxThree {
      width: 600px;
      height: 350px;
      box-shadow: -12px 12px 8px 4px rgba(var(--accent-rgb), 0.45);
    }
    .projectInfo {
      margin-top: 12px;
    }
    .projectInfo.right {
      align-items: flex-end;
    }
    .projectName {
      font-size: 16px;
    }
    .projectStack {
      font-size: 13px;
    }
    .videoContainer {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap: 80px;
      width: 69%;
      margin-top: 60px;
    }
    .containerBoxTwo {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      align-items: flex-start;
    }
    .containerBoxThree {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
`;
