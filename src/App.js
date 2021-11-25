import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import { MainContainer } from './styled-components/ProjectStyle';

function App() {
  return (
    <Router>
    <Header/>
    <MainContainer>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
    </MainContainer>
    </Router>
  );
}

export default App;
