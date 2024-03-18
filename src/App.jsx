import './App.css';
import BioComponent from "./components/Bio";
import ContactComponent from "./components/Contact";
import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import NavComponent from "./components/Nav";
import ResumeComponent from "./components/Resume";
import PortfolioComponent from './components/Portfolio';

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavComponent />
      <BioComponent />
      <PortfolioComponent />
      <ResumeComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default App;