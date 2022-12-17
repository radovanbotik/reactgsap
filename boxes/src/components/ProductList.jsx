import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import fat from "../assets/fullfat.png";
import nofat from "../assets/fatfree.png";

export const ProductList = () => {
  return (
    <Wrap>
      <Product image={fat} />
      <Product image={nofat} />
    </Wrap>
  );
};

const Wrap = styled.div``;
