import './App.css';
import Header from './components/header/Header';
import AboutMe from './components/aboutMe/AboutMe';
import Brands from './components/brands/Brands';
import Features from './components/features/Features';
import Services from './components/services/Services';
import Parallax from './components/parallax/Parallax';
import Products from './components/products/Products';
import Scores from './components/scores/Scores';
import Introduce from './components/introducce/Introduce';
import Teams from './components/teams/Teams';
import Contact from './components/contact/Contact';
import Button from './components/button/Button';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Brands/> 
      <Features/>
      <Services/>
      <Parallax/>
      <Products/>
      <Scores/>
      <Introduce/>
      <Teams/>
      <Contact/>
      <Button type="upBtn" text="Up" link="#header"/>
      <Footer/>
    </div>
  );
}

export default App;
