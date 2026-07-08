import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useRecruiterMode } from "../../context/RecruiterMode";

const TIMELINE = [
  {
    period: "Dic 2025 – Presente",
    current: true,
    role: "Backend Developer & Release Coordinator",
    company: "Leafnoise",
    client: "Gobierno de Santa Fe · Timbó / Moorea",
    achievements: [
      "+15.000 usuarios activos en plataforma productiva de alta criticidad",
      "30–60 incidentes productivos/mes gestionados bajo SLA",
      "Coordinación de equipo de 4 personas (3 devs + 1 funcional)",
      "Releases on-demand sobre 4 ambientes vía Jenkins",
      "Code review, mentoría técnica y documentación operativa mensual",
    ],
    tags: ["Python", "Flask", "MongoDB", "MySQL", "Jenkins", "Docker", "GitLab CI/CD"],
    note: null,
  },
  {
    period: "Jun 2025 – Dic 2025",
    current: false,
    role: "Backend Module Owner – Digital Soil Platform",
    company: "Leafnoise",
    client: "Plataforma agronómica regulatoria",
    achievements: [
      "Sistema construido desde cero dentro de la plataforma Moorea",
      "4 motores de cálculo agronómico específicos del dominio",
      "3 modelos de datos centrales (Usuarios, Establecimientos, Cultivos)",
      "Pipelines de ingesta desde Excel con validación automática",
      "Módulos de reportes con generación automática de gráficos y PDFs",
    ],
    tags: ["Python", "FastAPI", "MongoDB", "PyMongo", "SQL", "Pandas", "MATLAB", "Domain-Driven Design"],
    note: null,
  },
  {
    period: "Nov 2024 – Jun 2025",
    current: false,
    role: "Backend Developer",
    company: "Leafnoise",
    client: "Incorporación · Módulos Core",
    achievements: [
      "Implementación y mantenimiento de funcionalidades en Python y MongoDB",
      "Resolución de incidentes productivos y fixes a nivel de código",
      "Integración en flujos de trabajo con GitLab CI/CD y entornos multi-ambiente",
      "Primer contacto con el ecosistema de la plataforma Timbó/Moorea",
    ],
    tags: ["Python", "MongoDB", "MongoEngine", "GitLab", "Git"],
    note: null,
  },
  {
    period: "Dic 2025 – Feb 2026",
    current: false,
    role: "Founder & Full Stack Developer",
    company: "Freelance",
    client: "PWA Fitness Management · Gimnasio local, Bahía Blanca",
    achievements: [
      "Proyecto productivo y monetizado — único developer",
      "Backend REST con Python (Flask + FastAPI) y autenticación JWT",
      "Frontend PWA en React + Tailwind CSS, mobile-first",
      "Entrega y deploy completo end-to-end",
    ],
    tags: ["Python", "Flask", "FastAPI", "React", "Tailwind CSS", "SQL", "JWT"],
    note: "Simultáneo a Leafnoise",
  },
];

const TimelineEntry = ({ entry, isLast }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const { isRecruiterMode } = useRecruiterMode();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <EntryWrapper ref={ref} className={visible ? "visible" : ""}>
      <div className="rail">
        <div className={`dot ${entry.current ? "dot--active" : ""}`} />
        {!isLast && <div className="line" />}
      </div>

      <div className="card">
        <div className="cardHeader">
          <span className="period">{entry.period}</span>
          {entry.current && <span className="badge badge--current">Actual</span>}
          {entry.note && <span className="badge badge--note">{entry.note}</span>}
        </div>

        <h3 className="role">{entry.role}</h3>

        <div className="company">
          <span className="companyName">{entry.company}</span>
          <span className="dot-sep">·</span>
          <span className="client">{entry.client}</span>
        </div>

        <ul className="achievements">
          {entry.achievements.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>

        {!isRecruiterMode && (
          <div className="tags">
            {entry.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
      </div>
    </EntryWrapper>
  );
};

export const Timeline = () => (
  <Wrapper id="trayectoria">
    <div className="inner">
      <h1 className="sectionTitle">Trayectoria</h1>
      <div className="entries">
        {TIMELINE.map((entry, i) => (
          <TimelineEntry
            key={i}
            entry={entry}
            isLast={i === TIMELINE.length - 1}
          />
        ))}
      </div>
    </div>
  </Wrapper>
);

/* ── Entry wrapper ─────────────────────────────── */
const EntryWrapper = styled.div`
  display: flex;
  gap: 20px;
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 550ms ease, transform 550ms ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .rail {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    width: 18px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #0f0f0f;
    border: 2px solid rgba(var(--accent-rgb), 0.45);
    flex-shrink: 0;
    margin-top: 5px;
  }
  .dot--active {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
  }

  .line {
    width: 2px;
    flex: 1;
    background: rgba(var(--accent-rgb), 0.13);
    margin-top: 10px;
    min-height: 32px;
  }

  /* ── Card ── */
  .card {
    flex: 1;
    padding-bottom: 44px;
  }

  .cardHeader {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
  }

  .period {
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 500;
    color: rgba(var(--accent-rgb), 0.75);
    letter-spacing: 0.4px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 9px;
    border-radius: 100px;
    font-family: "DM Sans";
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }
  .badge--current {
    background: rgba(var(--accent-rgb), 0.1);
    border: 1px solid rgba(var(--accent-rgb), 0.4);
    color: var(--accent);
  }
  .badge--note {
    background: rgba(168, 100, 255, 0.08);
    border: 1px solid rgba(168, 100, 255, 0.3);
    color: rgba(200, 150, 255, 0.85);
  }

  .role {
    font-family: "DM Sans";
    font-weight: 600;
    font-size: 17px;
    color: #ffffff;
    margin: 0 0 6px 0;
    line-height: 1.3;
  }

  .company {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
  }

  .companyName {
    font-family: "DM Sans";
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
  }

  .dot-sep {
    color: rgba(255, 255, 255, 0.22);
    font-size: 12px;
  }

  .client {
    font-family: "DM Sans";
    font-size: 13px;
    color: rgba(255, 255, 255, 0.38);
  }

  .achievements {
    list-style: none;
    padding: 0;
    margin: 0 0 14px 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .achievements li {
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    padding-left: 16px;
    position: relative;
  }

  .achievements li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: rgba(var(--accent-rgb), 0.55);
    font-size: 11px;
    top: 2px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .tag {
    display: inline-flex;
    padding: 3px 10px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 100px;
    font-family: "DM Sans";
    font-size: 11px;
    color: rgba(255, 255, 255, 0.38);
    background: rgba(255, 255, 255, 0.02);
  }

  @media screen and (min-width: 1024px) {
    gap: 28px;

    .dot {
      width: 14px;
      height: 14px;
      margin-top: 6px;
    }
    .rail {
      width: 20px;
    }
    .role {
      font-size: 19px;
    }
    .achievements li {
      font-size: 15px;
    }
    .card {
      padding-bottom: 52px;
    }
  }
`;

/* ── Section wrapper ─────────────────────────────── */
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .inner {
    width: 94%;
  }

  .sectionTitle {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 40px;
  }

  .entries {
    padding-left: 4px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 80px;

    .inner {
      width: 88%;
      max-width: 860px;
    }

    .sectionTitle {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
      margin-bottom: 48px;
    }
  }
`;
