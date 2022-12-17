import React from "react";
import styled from "styled-components";

export const Product = ({ image }) => {
  return (
    <Wrap>
      <div className="product">
        <div className="front">
          <img src={image} alt="" />
        </div>
        <div className="back">
          <header>
            <h1>tvaroh</h1>
            <span className="category">category: dairy</span>
            <span className="weight">weight: 250g</span>
          </header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quidem
            quod reiciendis ipsum voluptatem illo enim unde harum dolores,
            reprehenderit vero corrupti molestias commodi sequi rerum dolorum
            distinctio quam quasi nihil voluptates. Harum excepturi quam
            reiciendis eos tenetur. Cumque maxime ea deserunt voluptatum ad
            placeat expedita cupiditate consequatur quibusdam sed.
          </p>
        </div>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 260px;
  height: 400px;
  margin: 80px;
  perspective: 600px;
  cursor: pointer;
  .product {
    width: 260px;
    height: 400px;
    transform-style: preserve-3d;
    /* transform: translateZ(-130px); */
    transition: transform 350ms;
    &:hover {
      /* transform: rotateY(-180deg) translateZ(30px); */
      transform: rotateY(-180deg);
    }
    .front,
    .back {
      position: absolute;
      width: 260px;
      height: 400px;
      /* background-color: white; */
      backface-visibility: hidden;
    }
    .front {
      /* transform: translateZ(130px); */
      background-size: cover;
      background-repeat: no-repeat;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .back {
      background-color: white;
      /* transform: rotateY(180deg) translateZ(230px); */
      transform: rotateY(180deg);
      border: 1px solid #b8b5b5;
      font-size: 0.75em;
    }
    &:after {
      content: "";
      width: 260px;
      height: 520px;
      border-radius: 100%;
      position: absolute;
      bottom: 0;
      box-shadow: 0 30px 50px rgba(0, 0, 0, 0.398);
      transform-origin: 100% 100%;
      transform: rotateX(90deg) translateY(30px);
      transition: box-shadow 350ms;
    }

    &:hover:after {
      /* height: 260px; */
      height: 130px;
      border-radius: 0%;
      box-shadow: 20px -5px 50px rgba(0, 0, 0, 0.3);
      box-shadow: none;
    }
  }
`;
