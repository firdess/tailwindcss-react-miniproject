import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Home from "./pages/Home";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
