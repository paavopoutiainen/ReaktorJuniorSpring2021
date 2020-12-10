import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import NavigationHeader from './components/NavigationHeader'
import { fetchProductsData } from "./services/productsService"
import useSWR, { SWRConfig, mutate } from "swr"
import Routes from './router'
import { io } from "socket.io-client"
const socket = io(process.env.NODE_ENV === 'production' ? "https://evening-ridge-26628.herokuapp.com" : "http://localhost:3001")

function App() {
  const {data} = useSWR("/products")

  socket.on("data changed", (data) => {
    mutate("/products", data)
  })

  return (
    <div className="App">
      <SWRConfig value={{fetcher: fetchProductsData }}>
        <Router>
            <NavigationHeader />
            <Routes/>
        </Router>
      </SWRConfig>
    </div>
  );
}

export default App;
