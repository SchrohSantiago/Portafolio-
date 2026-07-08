import { Link } from "react-scroll";
import React from "react";
import styled from "styled-components";
import { FaUserTie } from "react-icons/fa";
import { Hamburger } from "./Hamburger";
import { useRecruiterMode } from "../../context/RecruiterMode";
import { ThemeSelector } from "../ThemeSelector";

export const NavBar = () => {
  const { isRecruiterMode, toggle } = useRecruiterMode();

  return (
    <>
      <Wrapper recruiter={isRecruiterMode ? 1 : 0}>
        <div className="container">
          <div className="nameContainer">
            <span className="santiagoName">Santiago Dev</span>
            <div className="mobileRight">
              <ThemeSelector />
              <button
                onClick={toggle}
                className={`recruiterToggle ${isRecruiterMode ? "active" : ""}`}
                aria-label="Alternar modo reclutador"
              >
                <FaUserTie className="toggleIcon" />
                <span className="toggleText">
                  {isRecruiterMode ? "Vista RH" : "Modo RH"}
                </span>
              </button>
              <span className="hamburger">
                <Hamburger />
              </span>
            </div>
          </div>

          <div className="optionsContainer">
            <Link to={"inicio"} spy smooth offset={-200} duration={100} className="animatedLine">
              Inicio
            </Link>
            <Link to={"aboutMe"} spy smooth offset={-200} duration={100} className="animatedLine">
              Acerca de mí
            </Link>
            <Link to={"trayectoria"} spy smooth offset={-150} duration={100} className="animatedLine">
              Trayectoria
            </Link>
            {!isRecruiterMode && (
              <Link to={"skills"} spy smooth offset={-150} duration={100} className="animatedLine">
                Stack
              </Link>
            )}
            <Link to={"proyects"} spy smooth offset={-150} duration={100} className="animatedLine">
              Proyectos
            </Link>
            <Link to={"contactme"} spy smooth offset={-110} duration={100} className="animatedLine">
              Contactame
            </Link>

            <ThemeSelector />
            <button
              onClick={toggle}
              className={`recruiterToggle ${isRecruiterMode ? "active" : ""}`}
              aria-label="Alternar modo reclutador"
            >
              <FaUserTie className="toggleIcon" />
              <span className="toggleText">
                {isRecruiterMode ? "Vista RH ✓" : "Modo RH"}
              </span>
            </button>
          </div>
        </div>
      </Wrapper>

      {/* Banner cuando el modo está activo */}
      {isRecruiterMode && (
        <Banner>
          <span>
            Vista simplificada para reclutadores activa — el stack técnico completo está oculto
          </span>
          <button onClick={toggle}>Desactivar ×</button>
        </Banner>
      )}
    </>
  );
};

const Wrapper = styled.div`
  z-index: 999;
  display: flex;
  width: 100%;
  height: 54px;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: rgba(15, 15, 15, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid
    ${({ recruiter }) =>
      recruiter
        ? "rgba(var(--accent-rgb), 0.35)"
        : "rgba(var(--accent-rgb), 0.08)"};
  transition: border-color 400ms ease;

  a {
    color: white;
  }
  .container {
    display: flex;
    width: 95%;
    align-items: center;
  }
  .nameContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-left: 5px;
    width: 95%;
  }
  .santiagoName {
    z-index: 2;
  }
  .mobileRight {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .optionsContainer {
    display: none;
  }

  /* Toggle button — compartido mobile/desktop */
  .recruiterToggle {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 11px;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    background: transparent;
    color: rgba(255, 255, 255, 0.5);
    font-family: "DM Sans";
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
    transition: all 220ms ease;
    white-space: nowrap;
    letter-spacing: 0.3px;
  }
  .recruiterToggle:hover {
    border-color: rgba(var(--accent-rgb), 0.45);
    color: rgba(255, 255, 255, 0.85);
  }
  .recruiterToggle.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #0c0c0c;
    font-weight: 600;
  }
  .toggleIcon {
    font-size: 11px;
  }
  /* Solo icono en mobile */
  .toggleText {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    height: 90px;
    border-bottom: 1px solid
      ${({ recruiter }) =>
        recruiter
          ? "rgba(var(--accent-rgb), 0.35)"
          : "rgba(var(--accent-rgb), 0.2)"};

    a {
      color: white;
      text-decoration: none;
    }
    .mobileRight {
      display: none;
    }
    .nameContainer {
      font-family: "Poppins";
      font-weight: 600;
      font-size: 30px;
      width: auto;
      flex-shrink: 0;
      margin-right: 24px;
    }
    .optionsContainer {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 28px;
      flex: 1;
      font-family: "DM Sans";
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
    }
    .animatedLine {
      background-image: linear-gradient(90deg, var(--accent), var(--accent));
      text-decoration: none;
      background-repeat: no-repeat;
      background-size: 0% 2px;
      background-position: bottom;
      transition: background-size 500ms ease-in-out;
      line-height: 30px;
      color: white;
      padding-bottom: 2px;
    }
    .animatedLine:hover {
      background-size: 100% 2px;
    }
    /* Texto visible en desktop */
    .toggleText {
      display: inline;
    }
    .recruiterToggle {
      font-size: 12px;
      padding: 6px 14px;
      margin-left: 8px;
    }
    .toggleIcon {
      font-size: 12px;
    }
  }
`;

const Banner = styled.div`
  position: fixed;
  top: 54px;
  left: 0;
  right: 0;
  z-index: 998;
  background: rgba(var(--accent-rgb), 0.1);
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.25);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 7px 16px;
  font-family: "DM Sans";
  font-size: 12px;
  color: rgba(var(--accent-rgb), 0.9);
  text-align: center;

  button {
    background: transparent;
    border: 1px solid rgba(var(--accent-rgb), 0.35);
    border-radius: 100px;
    color: rgba(var(--accent-rgb), 0.8);
    font-family: "DM Sans";
    font-size: 11px;
    padding: 2px 10px;
    cursor: pointer;
    white-space: nowrap;
    transition: all 200ms ease;
    flex-shrink: 0;
  }
  button:hover {
    background: rgba(var(--accent-rgb), 0.1);
  }

  @media screen and (min-width: 1024px) {
    top: 90px;
    font-size: 13px;
  }
`;
