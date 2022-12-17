import { Navigation } from "./components/Navigation";
import { Section } from "./components/Section";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Section id="1" />
      <Section id="2" />
      <Section id="3" />
    </div>
  );
}

export default App;
