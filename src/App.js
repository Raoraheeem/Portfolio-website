

import './App.css';
import Headers from './components/Headers/Headers';
import Intro from './components/Intro/intro';
import About from './components/About/About';
import Work from './components/Work/Work';
import Reviews from './components/Reviews/Reviews';
import Hiring from './components/Hiring/Hiring';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Projects';


function App() {
  return (
   <div
   className='App'>
 <Headers/>
 <Intro/>
 <About/>
 <Work/>
 <Reviews/>
 <Hiring/>
 <Project/>
 <Footer/>
 
   </div>
  );
}

export default App;
