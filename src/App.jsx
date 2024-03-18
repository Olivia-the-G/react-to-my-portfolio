import './App.css';
import BioComponent from "./components/Bio";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import NavComponent from "./components/Nav";
import ProjectComponent from "./components/Project";
import ResumeComponent from "./components/Resume";

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <BioComponent />
      <ProjectComponent />
      <ResumeComponent />
      <ContactComponent />
      <FooterComponent />

    </div>
  );
};

export default App;