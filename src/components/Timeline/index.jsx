import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Timeline() {
  const boxRef = useRef([]);

  // Timeline permite dar tempo a cada animação de um bloco
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: 2, repeatDelay: 1.5, yoyo: true });

    timeline.to(boxRef.current, { x: "90%", duration: 2, stagger: 1 });
  });

  return (
    <section className="container">
      <h2 className="headline-2">Animções com Timeline</h2>

      <div className="boxes">
        {["basic", "basic-2", "basic-3"].map((className, i) => (
          <div
            key={i}
            className={`box ${className}`}
            ref={(el) => (boxRef.current[i] = el)}
          ></div>
        ))}
      </div>
    </section>
  );
}
