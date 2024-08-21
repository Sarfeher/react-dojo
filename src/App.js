import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {


  return (
    <Router>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element= {<Home />} /> 
          <Route path="/create" element= {<Create />} /> 
          <Route path="/blogs/:id" element= {<BlogDetails />} /> 
        </Routes>
      </main>
    </Router>

  );
}

export default App;
