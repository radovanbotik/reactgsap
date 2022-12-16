import React from "react";
import styled from "styled-components";
import me from "../assets/images/me.png";

const stories = [
  {
    id: 1,
    subtitle: "boy",
    title: "a big boy",
    img: "/assets/images/me.png",
  },
  {
    id: 2,
    subtitle: "boy 2",
    title: "a very big boy",
    img: "/assets/images/me.png",
  },
  {
    id: 3,
    subtitle: "boy 3",
    title: "a very very big boy",
    img: "/assets/images/me.png",
  },
];

export const Stories = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="stories-navigation">
          <div className="stories-arrow prev disabled">
            <span className="material-symbols-outlined">navigate_before</span>
          </div>
          <div className="stories-arrow next">
            <span className="material-symbols-outlined">navigate_next</span>
          </div>
        </div>
        <div className="row">
          {stories.map(story => {
            return (
              <div className="story" key={story.id}>
                <div className="story-details">
                  <span>{story.subtitle}</span>
                  <h2>{story.title}</h2>
                </div>
                <div className="story-image">
                  <img src={me} alt={story.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    .stories-navigation {
      position: absolute;
      bottom: 0px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 20;
      padding: 32px;
      @media (min-width: 800px) {
        display: none;
      }
      .stories-arrow {
        background-color: #0000003b;
        height: 72px;
        width: 72px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: white;
          /* height: 28px;
          width: 28px; */
          font-size: 2.5rem;
        }
        &.disabled {
          opacity: 0.3;
        }
      }
    }
    .row {
      padding: 0px;
      @media (min-width: 800px) {
        flex-direction: column;
      }
      .story {
        position: relative;
        background-color: black;
        cursor: pointer;
        &:hover {
          .story-image {
            opacity: 0.4;
          }
        }
        .story-details {
          width: 33.333vw;
          height: 50vh;
          height: calc(var(--vh, 1vh) * 50);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 32px;
          z-index: 1;
          position: relative;
          @media (min-width: 800px) {
            width: 100vw;
            /* width: 100vh; */
          }
          @media (min-width: 600px) {
            padding: 16px;
          }
          span {
            margin-top: 156px;
            font-size: 1.6rem;
            opacity: 0.8;
            color: white;
            font-weight: 600;
            @media (min-width: 800px) {
              font-size: 1.4rem;
            }
            @media (max-width: 800px) {
              font-size: 1.2rem;
              line-height: 2.2rem;
            }
          }
          h2 {
            font-size: 2.4rem;
            line-height: 3.4rem;
            width: 85%;
            margin-top: 16px;
            color: white;
            @media (min-width: 800px) {
              font-size: 2rem;
              line-height: 2.4rem;
            }
            @media (max-width: 800px) {
              font-size: 1.7rem;
              line-height: 2.2rem;
              margin-top: 8px;
            }
          }
        }
        .story-image {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: absolute;
          opacity: 0.65;
          transition: all 0.4s ease-in-out;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
`;
