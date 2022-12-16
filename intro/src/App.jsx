import { useEffect } from "react";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Stories } from "./components/Stories";
import { Intro } from "./components/Intro";
import gsap from "gsap";

function App() {
  useEffect(() => {
    let vh = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    gsap.to("body", { duration: 0, css: { visibility: "visible" } });
    //tl;
    const tl = gsap.timeline();
    tl.to(".line span", {
      duration: 1.8,
      y: 100,
      ease: "Power4.easeOut",
      delay: 1,
      skewY: 7,
      stagger: 0.3,
    })
      .to(".overlay-top", {
        duration: 1.6,
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: 0.4,
      })
      .to(".intro-overlay", { duration: 0, css: { display: "none" } })
      .to(".story-image img", {
        scale: 1.4,
        duration: 1.6,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.4,
      });
  }, []);
  return (
    <div className="App">
      <Intro />
      <Header />
      <Banner />
      <Stories />
    </div>
  );
}

export default App;
