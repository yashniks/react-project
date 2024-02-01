// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Master from './component/maincomp/Master';
import All from './component/maincomp/All';
import About from './component/About';
// import "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"




function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Master Rcf={All}/>}></Route>
  <Route path='/about' element={<Master Rcf={About}/>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
