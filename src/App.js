import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Contact from './components/Contact'
import Work from'./components/Work'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/work" element={<Work />}/>
    </Routes>
  );
}

export default App;