import { Letters } from "./components/Letters";
function App() {
  return (
    <div
      className="App"
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        backgroundColor: "#e74d3c",
      }}
    >
      <Letters />
    </div>
  );
}

export default App;
