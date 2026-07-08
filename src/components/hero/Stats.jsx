import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const METRICS = [
  {
    end: 15000,
    format: (n) => `+${n >= 1000 ? n.toLocaleString("es-AR") : n}`,
    label: "Usuarios en producción",
    sub: "Plataforma Gobierno de Santa Fe",
  },
  {
    end: 2,
    format: (n) => `${n}+`,
    label: "Años de experiencia",
    sub: "en sistemas productivos",
  },
  {
    end: 4,
    format: (n) => String(n),
    label: "Personas coordinadas",
    sub: "3 devs · 1 funcional",
  },
  {
    end: 60,
    format: (n) => `~${n}`,
    label: "Incidentes/mes",
    sub: "gestionados bajo SLA",
  },
];

const StatCard = ({ metric, started }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let rafId;
    const startTime = performance.now();
    const duration = 1800;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * metric.end));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, metric.end]);

  return (
    <div className="card">
      <span className="number">{metric.format(count)}</span>
      <span className="label">{metric.label}</span>
      <span className="sub">{metric.sub}</span>
    </div>
  );
};

export const Stats = () => {
  const [started, setStarted] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <div className="inner">
        {METRICS.map((m, i) => (
          <StatCard key={i} metric={m} started={started} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  padding: 0 3%;

  .inner {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 14px;
    overflow: hidden;
  }

  .card {
    background: #141516;
    padding: 28px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    transition: background 250ms ease;
  }
  .card:hover {
    background: #191c1f;
  }

  .number {
    font-family: "DM Sans";
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    letter-spacing: -1.5px;
    color: var(--accent);
  }

  .label {
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.3;
  }

  .sub {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.38);
    letter-spacing: 0.2px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 64px;
    padding: 0;

    .inner {
      width: 88%;
      max-width: 1200px;
      grid-template-columns: repeat(4, 1fr);
    }

    .card {
      padding: 36px 24px;
    }

    .number {
      font-size: 56px;
      letter-spacing: -2px;
    }

    .label {
      font-size: 14px;
    }

    .sub {
      font-size: 12px;
    }
  }
`;
