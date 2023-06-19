import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./layout/Dashboard"
import Home from "./pages/Home"
import 'reseter.css'
import './assets/css/global.css'
import './assets/css/variables.css'
import './assets/css/font.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
