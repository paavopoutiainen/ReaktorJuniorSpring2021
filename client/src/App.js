import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import { fetchProductsData } from "./services/productsService"
import useSWR from "swr"
import Routes from './router'

function App() {
  const {data: productsData} = useSWR("/products", fetchProductsData)

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
