import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import { fetchProductsData } from "./services/productsService"
import useSWR, { SWRConfig } from "swr"
import Routes from './router'

function App() {
  const {data} = useSWR("/products")

  return (
    <div className="App">
      <SWRConfig value={{ dedupingInterval: 300000, fetcher: fetchProductsData }}>
        <Router>
            <NavigationHeader />
            <Routes/>
        </Router>
      </SWRConfig>
    </div>
  );
}

export default App;
