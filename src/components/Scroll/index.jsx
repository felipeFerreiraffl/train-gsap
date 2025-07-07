import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: { trigger: textRef.current },
      }
    );
  }, []);

  return (
    <section className="container">
      <h2 className="headline-2">Eventos de scroll</h2>

      <div ref={textRef} className="text-container">
        <h3 className="headline-1">Isso é um texto</h3>
        <h4 className="headline-2">Isso é outro texto</h4>
        <h5 className="headline-3">Mais uma vez, um texto</h5>
        <h6 className="headline-4">Olá denovo. Um texto.</h6>
      </div>
    </section>
  );
}
