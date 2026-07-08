import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export const Hamburger = () => {
  return (
    <Nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link
            to={"inicio"}
            spy={true}
            smooth={true}
            offset={-200}
            duration={300}
          >
            <li>Inicio</li>
          </Link>
          <Link
            to={"aboutMe"}
            spy={true}
            smooth={true}
            offset={-430}
            duration={300}
          >
            <li>Acerca de mi</li>
          </Link>
          <Link
            to={"trayectoria"}
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
          >
            <li>Trayectoria</li>
          </Link>
          <Link
            to={"proyects"}
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
          >
            <li>Proyectos</li>
          </Link>
          <Link
            to={"contactme"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
          >
            <li>Contactame</li>
          </Link>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  #menuToggle {
    display: block;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: var(--accent);
  }

  #menuToggle input {
    display: flex;
    width: 40px;
    height: 32px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  #menuToggle span {
    display: flex;
    width: 5px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    padding-right: 25px;
    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #ffffff;
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  #menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    margin: -100px 0 0 -100%;
    padding: 50px;
    padding-top: 125px;
    background: #0f0f0fef;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    height: 166px;
    transform-origin: 0% 0%;
    transform: translate(100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 18px 12px 10px 3.5%;
    font-size: 22px;
    border: 1px solid var(--accent);
    border-right: none;
    border-left: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
