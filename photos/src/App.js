import './App.css';
import { Route, Routes, useLocation} from 'react-router-dom';


import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth';

function App() {
  const location=useLocation();


  return (
    <div className="App">

        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Main/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/auth' element={<Auth/>} />


        </Routes>

    </div>
  );
}

export default App;
