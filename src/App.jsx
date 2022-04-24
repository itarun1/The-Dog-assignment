import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Description from "./Components/Description"
import { Forms } from './Components/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/listing/:id' element={<Description/>}></Route>
        <Route path='/listing/create' element={<Forms/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
