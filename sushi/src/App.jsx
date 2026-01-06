
import './App.css'
import Carousel from './components/Carousel';
import Header from './components/Header'
import Menu from './components/Menu';
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import WhyUs from './components/WhyUs';

function App(){
  return(
    <>
      <Header/>
      <Carousel/>
      <WhyUs/>
      <Menu/>
      <AboutUs/>
      <Footer/>
    </>
  );
}
export default App;