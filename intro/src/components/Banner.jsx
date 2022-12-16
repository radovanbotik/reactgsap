import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Wrapper className="main">
      <div className="control">
        <div className="row">
          <h2>
            <div className="line">
              <span>I am RADO</span>
            </div>
            <div className="line">
              <span>Lets animate this stuff</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">More about me</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  background-color: white;
  .row {
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: 700;
      z-index: 10;
      color: white;
      mix-blend-mode: difference;
      @media (min-width: 800px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
      @media (min-width: 600px) {
        margin-top: 72px;
        font-size: 1.7rem;
        line-height: 2.2rem;
      }
      .line {
        /* background-color: fuchsia; */
        margin-bottom: 8px;
        height: 56px;
        position: relative;
        overflow: hidden;
        @media (min-width: 800px) {
          height: 48px;
        }
        @media (min-width: 600px) {
          height: 32px;
        }
        span {
          position: absolute;
        }
      }
    }
    .btn-row {
      width: 256px;
      position: relative;
      z-index: 2;
      a {
        font-size: 1.6rem;
        color: black;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-weight: 600;
        @media (min-width: 800px) {
          font-size: 1.3rem;
        }
        @media (min-width: 600px) {
          font-size: 1.1rem;
        }
        //svg 14min mark
      }
    }
  }
`;
