import React from "react";
import styled from "styled-components";
import { Side } from "./Side";
import { products } from "../utils/data";
import { useEffect, useState, useRef } from "react";

export const SplitScreen = () => {
  const [mouseX, setMouseX] = useState();
  const sideRefs = useRef([]);
  sideRefs.current = [];

  const addToRefs = el => {
    if (el && !sideRefs.current.includes(el)) {
      sideRefs.current.push(el);
    }
  };
  const handleMove = e => {
    const x = (e.clientX / window.innerWidth) * 100;
    setMouseX(x);
  };

  return (
    <Wrapper onMouseMove={handleMove}>
      {products.map(product => (
        <Side
          key={product.id}
          {...product}
          addToRefs={addToRefs}
          mouseX={mouseX}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
