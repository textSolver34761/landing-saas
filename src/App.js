import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
