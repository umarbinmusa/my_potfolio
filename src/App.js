import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Experience from "./pages/Experience";


const App = ()  => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Project" element={<Project />} />
        <Route path="Experience" element={<Experience />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;