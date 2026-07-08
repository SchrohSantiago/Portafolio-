import React from "react";
import styled, { keyframes } from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

export const FloatingCTA = () => {
  return (
    <Wrapper
      href="https://wa.me/5492915131087"
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="icon" />
      <span className="text">¡Hablemos!</span>
    </Wrapper>
  );
};

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0.35); }
  70%  { box-shadow: 0 0 0 14px rgba(var(--accent-rgb), 0); }
  100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0); }
`;

const Wrapper = styled.a`
  position: fixed;
  bottom: 28px;
  right: 20px;
  z-index: 998;

  display: inline-flex;
  align-items: center;
  gap: 0;
  overflow: hidden;

  height: 50px;
  width: 50px;
  border-radius: 100px;

  background: #141516;
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  color: var(--accent);
  text-decoration: none;
  cursor: pointer;

  animation: ${pulse} 2.5s ease-out infinite;
  transition: width 320ms cubic-bezier(0.4, 0, 0.2, 1),
              gap 320ms ease,
              background 250ms ease,
              border-color 250ms ease,
              box-shadow 250ms ease;

  .icon {
    font-size: 22px;
    flex-shrink: 0;
    margin-left: 13px;
    transition: margin 320ms ease;
  }

  .text {
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    max-width: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-width 320ms cubic-bezier(0.4, 0, 0.2, 1),
                opacity 220ms ease;
    padding-right: 0;
  }

  /* Desktop: expand on hover */
  @media screen and (min-width: 1024px) {
    bottom: 36px;
    right: 32px;
    height: 52px;
    width: 52px;

    .icon {
      margin-left: 14px;
    }

    &:hover {
      width: 152px;
      gap: 10px;
      background: rgba(var(--accent-rgb), 0.08);
      border-color: rgba(var(--accent-rgb), 0.7);
      box-shadow: 0 4px 24px rgba(var(--accent-rgb), 0.15);
      animation: none;

      .icon {
        margin-left: 14px;
      }

      .text {
        max-width: 100px;
        opacity: 1;
        padding-right: 16px;
      }
    }
  }
`;
