import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Basic() {
  // Em React, é necessário passar um ref para referências do DOM
  const boxRef = useRef(null);

  // Definição de uma animação por meio de um destino
  useEffect(() => {
    gsap.to(boxRef.current, { rotate: 360, duration: 2 });
  }, []);

  return (
    <section className="container">
      <h2 className="headline-2">Animação básica de Tween</h2>

      <div ref={boxRef} className="box basic"></div>
    </section>
  );
}
