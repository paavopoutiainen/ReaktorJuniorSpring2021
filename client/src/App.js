import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import { fetchProductsData } from "./services/productsService"
import useSWR, { SWRConfig } from "swr"
import Routes from './router'
import { io } from "socket.io-client"
const socket = io(process.env.NODE_ENV === 'production' ? "https://evening-ridge-26628.herokuapp.com" : "http://localhost:3001")

function App() {
  const {data} = useSWR("/products")

  socket.on("data changed", (data) => {
    console.log("data", data)
  })

  return (
    <div className="App">
      <SWRConfig value={{ dedupingInterval: 150000, refreshInterval: 300000, fetcher: fetchProductsData }}>
        <Router>
            <NavigationHeader />
            <Routes/>
        </Router>
      </SWRConfig>
    </div>
  );
}

export default App;
