import styled from "styled-components";
import { ProductList } from "./components/ProductList";
function App() {
  return (
    <Wrap>
      <ProductList />
    </Wrap>
  );
}

export default App;

const Wrap = styled.main`
  max-width: 960px;
  height: 100vh;
  display: grid;
  place-content: center;
  /* margin: 0 auto 100px auto; */
`;
