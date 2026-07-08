import React, { useEffect } from "react";
import styled from "styled-components";

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal} aria-label="Cerrar">
          ✕
        </button>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  .modal-container {
    position: relative;
    background-color: #1a1d21;
    border: 1px solid rgba(var(--accent-rgb), 0.35);
    border-radius: 14px;
    width: 100%;
    max-width: 560px;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(var(--accent-rgb), 0.08);
  }

  .modal-content {
    padding: 32px 28px 24px;
  }

  .modal-close {
    position: sticky;
    top: 0;
    float: right;
    margin: 12px 12px 0 0;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    cursor: pointer;
    transition: all 200ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .modal-close:hover {
    background-color: rgba(220, 50, 50, 0.7);
    border-color: transparent;
    color: white;
  }

  /* Scrollbar sutil */
  .modal-container::-webkit-scrollbar {
    width: 4px;
  }
  .modal-container::-webkit-scrollbar-track {
    background: transparent;
  }
  .modal-container::-webkit-scrollbar-thumb {
    background: rgba(var(--accent-rgb), 0.3);
    border-radius: 4px;
  }
`;
