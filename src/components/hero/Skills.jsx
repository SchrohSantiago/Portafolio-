import React from "react";
import styled from "styled-components";
import { useRecruiterMode } from "../../context/RecruiterMode";

const SKILLS = [
  {
    category: "Backend",
    items: ["Python", "Flask", "FastAPI", "SQLAlchemy", "PyMongo", "MongoEngine", "Celery", "PyTest", "Pandas", "JWT"],
  },
  {
    category: "Bases de datos",
    items: ["MongoDB", "MySQL / SQL", "Redis"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "Styled Components", "Tailwind CSS", "HTML · CSS"],
  },
  {
    category: "DevOps & CI/CD",
    items: ["Jenkins", "Docker", "GitLab CI/CD", "Git", "AWS", "Portainer", "Elastic"],
  },
  {
    category: "IA & Tooling",
    items: ["Claude Code", "AI-assisted code review", "Automatización con IA", "Jira", "Trello"],
  },
];

export const Skills = () => {
  const { isRecruiterMode } = useRecruiterMode();
  if (isRecruiterMode) return null;
  return (
    <Wrapper id="skills">
      <div className="inner">
        <h1 className="sectionTitle">Stack Técnico</h1>
        <div className="grid">
          {SKILLS.map((group) => (
            <div key={group.category} className="group">
              <span className="groupTitle">{group.category}</span>
              <div className="badges">
                {group.items.map((skill) => (
                  <span key={skill} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  .inner {
    width: 94%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .sectionTitle {
    font-family: "DM Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin-bottom: 28px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .group {
    background-color: #141516;
    border-radius: 10px;
    padding: 18px 16px;
    border: 1px solid rgba(255, 255, 255, 0.04);
  }

  .groupTitle {
    display: block;
    font-family: "DM Sans";
    font-weight: 500;
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    border: 1px solid rgba(var(--accent-rgb), 0.28);
    border-radius: 100px;
    font-family: "DM Sans";
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.75);
    background: rgba(var(--accent-rgb), 0.04);
    transition: all 180ms ease;
    cursor: default;
  }

  .badge:hover {
    background: rgba(var(--accent-rgb), 0.1);
    border-color: rgba(var(--accent-rgb), 0.55);
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 80px;

    .inner {
      width: 88%;
      max-width: 1200px;
      box-sizing: border-box;
    }

    .sectionTitle {
      font-size: 40px;
      line-height: 48px;
      text-align: left;
      margin-bottom: 36px;
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .group {
      padding: 22px 20px;
    }

    .groupTitle {
      font-size: 11px;
      margin-bottom: 14px;
    }

    .badge {
      font-size: 13px;
      padding: 5px 13px;
    }
  }
`;
