import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Equipes from './components/Equipes';
import Playoffs from './components/Playoffs';
import Select from './components/Select';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar /> 
      <Banner />
      <Playoffs />
      <Equipes />
      <Select />

    </>
  );
}

export default App;
