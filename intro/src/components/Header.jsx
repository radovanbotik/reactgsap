import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <Wrapper>
      <div className="control">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">RADO.</a>
          </div>
          <div className="nav">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 10;
  @media (min-width: 600px) {
    height: 96px;
  }
  .logo {
    a {
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
      color: black;
      text-decoration: none;
      font-weight: 700;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    width: 25px;
    @media (min-width: 600px) {
      width: 20px;
    }
    span {
      /* margin-bottom: 0.3rem; */
      background-color: black;
      height: 2px;
      width: 100%;
      display: block;
    }
  }
`;
