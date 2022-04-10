
import './App.css';
import Aboutme from './Components/Navbar/Aboutme/Aboutme';
import Intro from './Components/Navbar/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Navbar/Service/Service';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Aboutme></Aboutme>
      <Service></Service>
      
    </div>
  );
}

export default App;
