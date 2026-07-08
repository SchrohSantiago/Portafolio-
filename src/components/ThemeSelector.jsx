import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdPalette } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

export const ThemeSelector = () => {
  const { activeTheme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <Wrapper ref={wrapperRef}>
      <button
        className={`paletteBtn ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Cambiar tema de color"
        title="Cambiar color"
      >
        <MdPalette className="paletteIcon" />
      </button>

      {open && (
        <div className="popover" role="dialog" aria-label="Selector de tema">
          <span className="popoverLabel">Tema de color</span>
          <div className="swatches">
            {themes.map((t) => (
              <button
                key={t.id}
                className={`swatch ${t.id === activeTheme.id ? "selected" : ""}`}
                style={{ "--swatch-color": t.accent }}
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
                title={t.name}
                aria-label={`Tema ${t.name}`}
              />
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  .paletteBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: transparent;
    color: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    transition: all 200ms ease;
    padding: 0;
  }
  .paletteBtn:hover,
  .paletteBtn.open {
    border-color: rgba(var(--accent-rgb), 0.5);
    color: var(--accent);
    background: rgba(var(--accent-rgb), 0.07);
  }
  .paletteIcon {
    font-size: 16px;
  }

  /* Popover */
  .popover {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    z-index: 1001;
    background: #1a1d21;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px 14px;
    min-width: 160px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    animation: popoverIn 180ms ease;
  }
  @keyframes popoverIn {
    from { opacity: 0; transform: translateY(-6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .popoverLabel {
    display: block;
    font-family: "DM Sans";
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    margin-bottom: 10px;
  }

  .swatches {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .swatch {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: var(--swatch-color);
    cursor: pointer;
    transition: transform 150ms ease, box-shadow 150ms ease;
    padding: 0;
    outline: none;
  }
  .swatch:hover {
    transform: scale(1.15);
    box-shadow: 0 0 8px var(--swatch-color);
  }
  .swatch.selected {
    border-color: #ffffff;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3),
                0 0 8px var(--swatch-color);
    transform: scale(1.1);
  }
`;
