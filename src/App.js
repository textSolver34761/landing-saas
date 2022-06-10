import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './NavB';
import FooterBar from './Footer';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header>
        <NavBarr />
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
