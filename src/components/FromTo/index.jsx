import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function FromTo() {
  const boxRef = useRef(null);
  const circleRef = useRef(null);
  const diamondRef = useRef(null);

  // Animações com início e fim (fromTo())
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, duration: 1.2, ease: "power1.inOut" },
      { opacity: 1, duration: 1.2, ease: "power1.inOut" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      {
        x: -150,
        rotate: 0,
        ease: "power1.inOut",
      },
      {
        x: 0,
        rotate: 360,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      diamondRef.current,
      { rotate: 0 },
      { rotate: 45, scale: 1.1, duration: 2, ease: "power1.inOut" }
    );
  }, []);

  return (
    <section className="container">
      <h2 className="headline-2">Animações com fromTo()</h2>

      <div className="sec-container">
        <div className="container">
          <h3 className="headline-3">Opacidade</h3>
          <div ref={boxRef} className="box basic"></div>
        </div>

        <div className="container">
          <h3 className="headline-3">Scroll</h3>
          <div ref={circleRef} className="circle basic-2"></div>
        </div>

        <div className="container">
          <h3 className="headline-3">Escala</h3>
          <div ref={diamondRef} className="diamond basic-3"></div>
        </div>
      </div>
    </section>
  );
}
