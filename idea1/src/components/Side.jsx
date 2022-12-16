import React from "react";
import styled from "styled-components";

export const Side = ({
  id,
  name,
  title,
  category,
  keyword,
  backgroundcolor,
  maincolor,
  addToRefs,
  mouseX,
  img,
}) => {
  console.log(mouseX);
  return (
    <Wrapper
      zindex={id}
      backgroundcolor={backgroundcolor}
      maincolor={maincolor}
      ref={addToRefs}
      width={mouseX}
      id={id}
    >
      <div className="control">
        <h4>{name}</h4>
        <p>{title}</p>
        <h2>{category}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo
          iusto molestias, ab error non, voluptatem libero alias laborum veniam
          fugit excepturi optio, minus explicabo vel quis nihil sapiente dicta.
          Nulla fugit minus quibusdam molestias architecto aut accusantium
          obcaecati laboriosam dolorum culpa sit blanditiis error quas
          aspernatur, laborum debitis, natus asperiores impedit vitae magni.
          Vero impedit cum nesciunt voluptas rem, commodi non maiores
          perferendis tempore at animi eaque nostrum, quia voluptatem iusto
          itaque aperiam, debitis suscipit adipisci saepe qui esse explicabo
          recusandae sequi. Laboriosam dolorem, qui vitae cumque sed repudiandae
          excepturi dicta vel laudantium modi eaque, consequuntur molestiae
          accusantium alias.
        </p>
        <div className="img-control">
          <img src={img} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: ${props => props.zindex};
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.maincolor};
  width: ${props => (props.id === 2 ? `${props.width}%` : "100%")};
  display: grid;
  place-items: center;

  .control {
    padding:5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* place-items: center; */
    width: 100vw;
    h4 {
    }
    p {
      grid-column:1;
    }
    h2 {
    }
   
      .img-control {
        width: 400px;
        img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
        }
      }
    }
  }
`;
