"use client";

import { useState, useEffect, useRef } from "react";

const TOTAL_VAGAS = 9;

export default function UrgencyBar() {
  const [vagas, setVagas] = useState(3);
  const [viewers, setViewers] = useState(23);
  const [animate, setAnimate] = useState(false);
  const vagasRef = useRef(3);
  const viewersRef = useRef(23);

  useEffect(() => {
    function scheduleSlotDrop() {
      const delay = (50 + Math.random() * 70) * 1000;
      return setTimeout(() => {
        if (vagasRef.current > 1) {
          vagasRef.current--;
          setVagas(vagasRef.current);
          setAnimate(true);
          setTimeout(() => setAnimate(false), 400);
        }
        scheduleSlotDrop();
      }, delay);
    }
    const t = scheduleSlotDrop();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    function fluctuate() {
      const delay = (5 + Math.random() * 9) * 1000;
      return setTimeout(() => {
        const delta = Math.random() < 0.55 ? 1 : -1;
        viewersRef.current = Math.min(38, Math.max(16, viewersRef.current + delta));
        setViewers(viewersRef.current);
        fluctuate();
      }, delay);
    }
    const t = fluctuate();
    return () => clearTimeout(t);
  }, []);

  const pct = Math.round(((TOTAL_VAGAS - vagas) / TOTAL_VAGAS) * 100);

  return (
    <div className="urgency-bar">
      <div className="urgency-fire">🔥</div>
      <div className="urgency-main">
        <div className="urgency-headline">
          ATENÇÃO — Restam apenas{" "}
          <span style={{ transform: animate ? "scale(1.6)" : "scale(1)", transition: "transform 0.4s", display: "inline-block" }}>
            {vagas}
          </span>{" "}
          vagas <em>essa semana</em>
        </div>
        <div className="urgency-sub-row">
          <div className="urgency-live">
            <span className="live-dot" />
            <span>{viewers}</span> pessoas vendo agora
          </div>
          <div className="urgency-progress-wrap">
            <div className="urgency-progress-bar">
              <div className="urgency-progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <span>{pct}% preenchido</span>
          </div>
        </div>
      </div>
      <div className="urgency-fire">🔥</div>
    </div>
  );
}
