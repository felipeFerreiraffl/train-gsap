import Basic from "./components/Basic";
import FromTo from "./components/FromTo";
import Scroll from "./components/Scroll";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div className="gb-container">
      <h1>GSAP</h1>

      <Basic />
      <FromTo />
      <Timeline />
      <Scroll />
    </div>
  );
}
