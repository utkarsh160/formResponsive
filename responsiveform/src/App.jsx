import "./App.css";
import MainPage from "./MainPage";
import PostSubmitPage from "./success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/submitted" element={<PostSubmitPage/>}/>
          </Routes>
      </Router>
    </div>

  );
}

export default App;