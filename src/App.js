import "./App.css";
import Hero from "./Components/Hero/Hero.jsx";
import PlanData from "./Components/PlanData/PlanData.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Reasons from "./Components/Reasons/Reasons.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      {/* <Reasons/> */}
      <Reasons/>
      <PlanData/>
    </div>
  );
}

export default App;
