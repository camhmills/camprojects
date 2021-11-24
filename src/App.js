import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import { MainContainer } from './styled-components/ProjectStyle';

function App() {
  return (
    <Router>
    <Header/>
    <MainContainer>
      <Routes>
        <Route path = '/' element = {<Projects/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
    </MainContainer>
    </Router>
  );
}

export default App;
