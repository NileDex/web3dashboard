import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Dashboard } from '@mui/icons-material';
import Project from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Project/>
  
    </div>
  );
}

export default App;
