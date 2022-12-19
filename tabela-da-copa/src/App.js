import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Equipes from './components/Equipes';
import Playoffs from './components/Playoffs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="font-face-gm">
        <Navbar /> 
        <Banner />
        <Playoffs />
        <Equipes />
      </div>
    </>
  );
}

export default App;
