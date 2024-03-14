import CreateProject from "./component/CreateProject";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Login from "./component/auth/login";
import Register from "./component/auth/register";
import { AuthProvider } from "./contexts";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/reg' element={<Register />} />
          <Route exact path='/createproject' element={<CreateProject />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;