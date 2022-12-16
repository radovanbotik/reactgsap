import React from "react";
import styled from "styled-components";

export const Intro = () => {
  return (
    <Wrapper className="intro-overlay">
      <div className="top">
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
        <div className="overlay-top"></div>
      </div>
      <div className="bottom">
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
        <div className="overlay-bottom"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .top {
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
    width: 100%;
    z-index: 8;

    .overlay-top {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background-color: black;
      bottom: 0;
      left: 0;
      right: 0;
      @media (min-width: 800px) {
        width: 100vw;
      }
      &:nth-child(2) {
        left: 33.333%;
        @media (min-width: 800px) {
          display: none;
        }
      }
      &:nth-child(3) {
        left: 66.666%;
        @media (min-width: 800px) {
          display: none;
        }
      }
    }
  }
  .bottom {
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
    width: 100%;
    z-index: 8;
    bottom: 0;
    .overlay-bottom {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background-color: black;
      bottom: 0;
      right: 66.666%;
      @media (min-width: 800px) {
        right: 0;
        width: 100vw;
      }
      &:nth-child(2) {
        right: 33.333%;
        @media (min-width: 800px) {
          width: 100vw;
          top: 100%;
          right: 0;
        }
      }
      &:nth-child(3) {
        right: 0;
        @media (min-width: 800px) {
          width: 100vw;
          top: 100%;
        }
      }
    }
  }
`;
