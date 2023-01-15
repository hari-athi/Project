import "./App.css";
import CustomHeader from "./component-files/CustomHeader";
import AboutUs from "./component-files/AboutUs";
import Practices from "./component-files/Practices";
import Footer from "./component-files/Footer";
import Whyus from "./component-files/Whyus";

function App() {
  return (
    <div className="background">
      <CustomHeader/>
      <AboutUs/>
      <Practices/>
      <Whyus/>
      <Footer/>
    </div>

  );
}

export default App;
