import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import Routes from './router'

function App() {
  return (
    <div className="App">
      <Router>
          <NavigationHeader/>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
