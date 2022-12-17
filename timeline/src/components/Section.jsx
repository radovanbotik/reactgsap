import React from "react";
import styled from "styled-components";
export const Section = ({ id }) => {
  return <Wrapper id={`section_${id}`} style={{ "--i": `${id}` }}></Wrapper>;
};
const Wrapper = styled.section`
  height: 100vh;
  min-height: 100vh;
  padding: 8rem 1rem max(5vh, 2rem) 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  --h: calc(var(--i) * 30);
  background-color: hsl(var(--h, 0) 75% 60%);
`;
