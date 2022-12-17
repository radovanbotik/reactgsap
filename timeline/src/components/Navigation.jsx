import React from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, Draggable);

export const Navigation = () => {
  //   useEffect(() => {
  //     const events = [...document.querySelectorAll("[data-link]")];
  //     const track = document.querySelector("[data-draggable]");
  //     const lastItemWidth = () => events[events.length - 1].offsetWidth;

  //     const tl = gsap.timeline().to(track, {
  //       x: () => {
  //         return (track.offsetWidth * 0.5 - lastItemWidth()) * -1;
  //       },
  //       ease: "none",
  //     });

  //     const st = ScrollTrigger.create({
  //       animation: tl,
  //       scrub: 0,
  //     });

  //     const getDraggableWidth = () => {
  //       return track.offsetWidth * 0.5 - lastItemWidth();
  //     };

  //     const getDocumentHeight = () => {
  //       document.documentElement.offsetHeight - window.innerHeight;
  //     };

  //     const updatePosition = () => {
  //       const left = track.getBoundingClientRect().left * -1;
  //       const width = getDraggableWidth();
  //       const useableHeight = getDocumentHeight();
  //       const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);

  //       st.scroll(y);
  //     };
  //     const draggableInstance = Draggable.create(track, {
  //       type: "x",
  //       bounds: {
  //         minX: 0,
  //         maxX: getDraggableWidth() * -1,
  //       },
  //       edgeResistance: 1,
  //       onDragStart: () => st.disable(),
  //       onDragEnd: () => st.enable(),
  //       onDrag: updatePosition,
  //       onThrowUpdate: updatePosition,
  //     });
  //   }, []);
  useEffect(() => {
    const sections = gsap.utils.toArray("section");
    const track = document.querySelector("[data-draggable]");
    const navLinks = gsap.utils.toArray("[data-link]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const lastItemWidth = () => navLinks[navLinks.length - 1].offsetWidth;

    const getUseableHeight = () =>
      document.documentElement.offsetHeight - window.innerHeight;

    const getDraggableWidth = () => {
      return track.offsetWidth * 0.5 - lastItemWidth();
    };

    const updatePosition = () => {
      const left = track.getBoundingClientRect().left * -1;
      const width = getDraggableWidth();
      const useableHeight = getUseableHeight();
      const y = gsap.utils.mapRange(0, width, 0, useableHeight, left);

      st.scroll(y);
    };

    /* Create the timeline to move the track */
    const tl = gsap.timeline().to(track, {
      x: () => getDraggableWidth() * -1,
      ease: "none", // remove easing - very important!
    });

    /* Create the ScrollTrigger instance */
    const st = ScrollTrigger.create({
      animation: tl,
      scrub: 0, // sync timeline to scroll position
    });

    /* Create the Draggable instance */
    const draggableInstance = Draggable.create(track, {
      type: "x",
      inertia: true,
      bounds: {
        minX: 0,
        maxX: getDraggableWidth() * -1,
      },
      edgeResistance: 1,
      onDragStart: () => st.disable(),
      onDragEnd: () => st.enable(),
      onDrag: updatePosition,
      onThrowUpdate: updatePosition,
    });

    /* Allow navigation via keyboard */
    track.addEventListener("keyup", e => {
      const id = e.target.getAttribute("href");
      if (!id || e.key !== "Tab") return;

      const section = document.querySelector(id);
      const y = section.getBoundingClientRect().topA + window.scrollY;

      st.scroll(y);
    });
  }, []);
  return (
    <Wrapper>
      <div className="marker"></div>
      <div className="nav-track" data-draggable>
        <ul className="events-list">
          <li className="event">
            <a href="#section_1" className="link" data-link>
              <span>1993</span>
            </a>
          </li>
          <li className="event">
            <a href="#section_2" className="link" data-link>
              <span>1995</span>
            </a>
          </li>
          <li className="event">
            <a href="#section_3" className="link" data-link>
              <span>1996</span>
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .marker {
    position: fixed;
    top: 1.75rem;
    left: 4rem;
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 100%;
    transform: translate3d(-50%, 0, 0);
    z-index: 10;
  }
  .nav-track {
    background-color: blue;
    position: relative;
    min-width: max(200rem, 200%);
    padding: 1.5rem max(100rem, 100%) 0 0;

    .events-list {
      list-style: none;
      display: flex;
      justify-content: space-between;
      .event {
        background-color: yellow;
        position: relative;
        display: block;
        min-width: 8rem;
        text-align: center;
      }
    }
  }
`;
