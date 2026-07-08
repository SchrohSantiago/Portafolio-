import React from "react";
import styled from "styled-components";
import { Modal } from "../../Modal.jsx/Modal";
import { useModal } from "../../../hooks/useModal";
import interrogationRight from "../../../assets/images/interrogationRight.png";
import interrogationLeft from "../../../assets/images/interrogationLeft.png";

const ProjectModal = ({ title, tags, paragraphs, repoUrl }) => (
  <ModalContent>
    <h2 className="modalTitle">{title}</h2>
    <div className="tagRow">
      {tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
    <div className="divider" />
    <div className="bodyText">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
    {repoUrl && (
      <a className="repoBtn" href={repoUrl} target="_blank" rel="noreferrer">
        Ver en GitHub →
      </a>
    )}
  </ModalContent>
);

export const InterrogationModalRight = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Trigger onClick={openModal}>
      <img src={interrogationRight} alt="Ver detalles" />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ProjectModal
          title="Digitize"
          tags={["React", "Node.js", "No Country"]}
          paragraphs={[
            "Digitize es una plataforma de servicios digitales desarrollada de forma grupal durante mi paso por No Country, una organización que simula entornos laborales reales con metodología ágil.",
            "El objetivo es que empresas y emprendedores puedan contratar servicios de desarrollo web y marketing. La plataforma presenta distintos planes según la necesidad o dimensión del proyecto.",
            "Mi rol fue principalmente Frontend: desarrollé la interfaz de pricing y la landing de planes, trabajando en sprint semanales con un equipo de 4 personas.",
          ]}
          repoUrl="https://github.com/SchrohSantiago?tab=repositories"
        />
      </Modal>
    </Trigger>
  );
};

export const InterrogationModalRightTwo = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Trigger onClick={openModal}>
      <img src={interrogationRight} alt="Ver detalles" />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ProjectModal
          title="Eco-Sport"
          tags={["React", "Node.js", "JWT", "MySQL", "No Country"]}
          paragraphs={[
            "Eco-Sport es un e-commerce de ropa deportiva desarrollado en No Country en 5 semanas, por un equipo de 4 desarrolladores.",
            "Cuenta con catálogo completo, filtros de búsqueda, carrito de compras, proceso de pago, autenticación con JWT (login/register), panel de administrador, y diseño responsive Mobile y Desktop.",
            "Mi foco estuvo en la implementación del sistema de autenticación con JWT y las rutas protegidas del panel de administrador.",
          ]}
          repoUrl="https://github.com/SchrohSantiago?tab=repositories"
        />
      </Modal>
    </Trigger>
  );
};

export const InterrogationModalLeft = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <Trigger onClick={openModal}>
      <img src={interrogationLeft} alt="Ver detalles" />
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ProjectModal
          title="App Clima 2.0"
          tags={["JavaScript", "CSS", "OpenWeather API"]}
          paragraphs={[
            "App Clima 2.0 fue mi primer proyecto personal: una app del tiempo que consume la API de OpenWeatherMap en tiempo real.",
            "Aunque técnicamente simple, fue el proyecto que me hizo romper la barrera entre la teoría y la práctica. Cuando lo tuve funcionando, decidí invertir en el diseño y la UX —y ahí descubrí lo importante que es la experiencia del usuario.",
            "Incluye búsqueda por ciudad, temperatura en tiempo real, íconos dinámicos según el clima y diseño completamente personalizado.",
          ]}
          repoUrl="https://github.com/SchrohSantiago?tab=repositories"
        />
      </Modal>
    </Trigger>
  );
};

const Trigger = styled.div`
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  img {
    transition: transform 300ms ease;
    display: block;
  }
  img:hover {
    transform: scale(1.15);
  }
`;

const ModalContent = styled.div`
  .modalTitle {
    font-family: "DM Sans";
    font-weight: 600;
    font-size: 26px;
    line-height: 1.2;
    color: #ffffff;
    margin: 0 0 14px 0;
    text-decoration: underline;
    text-decoration-color: var(--accent);
    text-underline-offset: 6px;
    text-decoration-thickness: 2px;
  }

  .tagRow {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 18px;
  }

  .tag {
    display: inline-flex;
    align-items: center;
    padding: 3px 12px;
    border: 1px solid rgba(var(--accent-rgb), 0.4);
    border-radius: 100px;
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 500;
    color: var(--accent);
    background: rgba(var(--accent-rgb), 0.07);
    letter-spacing: 0.3px;
  }

  .divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.07);
    margin-bottom: 18px;
  }

  .bodyText p {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 15px;
    line-height: 26px;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 14px 0;
  }
  .bodyText p:last-child {
    margin-bottom: 0;
  }

  .repoBtn {
    display: inline-flex;
    align-items: center;
    margin-top: 20px;
    padding: 8px 18px;
    border: 1px solid rgba(var(--accent-rgb), 0.45);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.06);
    color: var(--accent);
    font-family: "DM Sans";
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    transition: all 200ms ease;
  }
  .repoBtn:hover {
    background: rgba(var(--accent-rgb), 0.14);
    border-color: rgba(var(--accent-rgb), 0.7);
  }
`;
