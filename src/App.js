// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './component/maincomp/Master';
import Home from './component/maincomp/Home';
import About from './component/pages/About';
import Blog from './component/pages/Blog';
import { Testimonial } from './component/pages/Testimonial';
import Gallery from './component/pages/Gallery';
import Services from './component/pages/Services';
import Team from './component/pages/Team';
import { Contact } from './component/pages/Contact';

// import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"




function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    
  <Route path='/' element={<Master Rcf={Home}/>}></Route>
  <Route path='/about' element={<Master Rcf={About}/>}></Route>
  <Route path='/blog' element={<Master Rcf={Blog}/>}></Route>
  <Route path='/testimonial' element={<Master Rcf={Testimonial}/>}></Route>
  <Route path='/gallery' element={<Master Rcf={Gallery}/>}></Route>
  <Route path='/services' element={<Master Rcf={Services}/>}></Route>
  <Route path='/team' element={<Master Rcf={Team}/>}></Route>
  <Route path='/contact' element={<Master Rcf={Contact}/>}></Route>


  
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
