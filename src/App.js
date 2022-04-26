// import { SearchBox } from "./components/SearchBox";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Apply from "./components/Search/Apply";
import { Home } from "./components/body/home";
import LoginUsingGoogle from "./components/LoginUsingGoogle/LoginUsingGoogle";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import SearchResults from "./components/Search/SearchResults";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            
          <Route path="/Apply/:jobTitle" element = {<Apply />} />
          
          <Route path="/" element = {<Home />} />
          <Route path="/login" element = {<LoginUsingGoogle />} />
          <Route path="/register" element = {<RegisterPage />} />
          <Route path="*" element = {<ErrorPage />} />
          <Route path="/SearchResults/:query/:location" element = {<SearchResults />} />
        </Routes>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;
