
import './App.css';
import Navbar from './Components/Navbar';
import Title from './Components/Title';
import Description from './Components/Description';
import Contact from './Components/Contact';
import Globalservice from './Components/globalservice';
import Countries from './Components/countries';
import Statements from './Components/Statements';
import Projects from './Components/Projects';
import Grid from './Components/grid';


function App() {
  return (
    <div className="App">
     
      <Navbar/>
      
      <Title/>
      <Description/>
      <Globalservice/>
      <Countries/>
      <Statements/>
      <Projects/>
      <Grid/>
      <Contact/>
      
    </div>
  );
}

export default App;
