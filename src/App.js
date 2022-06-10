import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './NavB';
import FooterBar from './Footer';
import Welcome from './Welcome';
import Pricing from './pages/pricing';
import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>  
      <BrowserRouter>    
        <Routes>
          <NavBarr />
          <Route path="price" component={Pricing}></Route>
          <Route path="price" element={<Pricing />} /> 
        </Routes>
      </BrowserRouter>
      </header>
      <div>
        <Welcome />
      </div>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
