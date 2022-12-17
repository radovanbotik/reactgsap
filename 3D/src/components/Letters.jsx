import React from "react";
import styled from "styled-components";

export const Letters = () => {
  return (
    <Wrapper>
      <div className="letter">
        <span data-letter="T">T</span>
      </div>
      <div className="letter">
        <span data-letter="V">V</span>
      </div>
      <div className="letter">
        <span data-letter="A">A</span>
      </div>
      <div className="letter">
        <span data-letter="R">R</span>
      </div>
      <div className="letter">
        <span data-letter="O">O</span>
      </div>{" "}
      <div className="letter">
        <span data-letter="H">H</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* background: #e74d3c; */
  .letter {
    span {
      display: inline-block;
      font-weight: 900;
      line-height: 1;
      position: relative;
      color: hsla(0, 0%, 0%, 0.6);
      transform-style: preserve-3d;
      perspective: 550px;
      z-index: 1;
      /* text-shadow: 1px 4px 6px #e74d3c, 0 0 0 hsla(0, 0%, 0%, 0.3),
        1px 4px 6px #e74d3c; */
      &:before,
      &:after {
        content: attr(data-letter);
        position: absolute;
        line-height: inherit;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        transition: all 0.3s;

        transform-origin: 0 50%;
      }
      &:before {
        text-shadow: none;
        color: hsla(0, 0%, 0%, 0.12);
        /* color: yellow; */
        transform: scale(1.08, 1) skew(0deg, 1deg);
      }
      &:after {
        /* color: #e74d3c; */
        color: blue;
        text-shadow: -1px 0px 0px hsla(360, 100%, 100%, 0.1),
          3px 0px 1px hsla(0, 0%, 0%, 0.4);
        //HOW MUCH OPEN LETTER IS
        transform: rotateY(-25deg);
      }
    }
    &:hover span:before {
      //SHADOW OF THE LETTER ON HOVER
      /* color: gold; */
      transform: scale(0.85, 1) skew(0deg, 20deg);
    }
    &:hover span:after {
      //HOW MUCH WE CAN OPEN THE LETTER
      transform: rotateY(-80deg);
      /* color: #ea6253; */
    }
  }
`;
