import "./App.css";
import Email from "./Components/Email/Email.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import PlanData from "./Components/PlanData/PlanData.jsx";
import Programs from "./Components/Programs/Programs.jsx";
import Reasons from "./Components/Reasons/Reasons.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs/>
      {/* <Reasons/> */}
      <Reasons/>
      <PlanData/>
      <Testimonials/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
