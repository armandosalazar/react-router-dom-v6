import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import User from './pages/User';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Ya no es necesaria la propiedad exact la cual altes era necesaria */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        {/* Subruta */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          {/* Es necesario el Outlet para indicarle donde pintar el componente */}
          <Route
            path="subruta"
            element={<p>Data of dashboard from subrute</p>}
          />
          {/* Podemos anidas más subrutas */}
          <Route path="welcome" element={<p>Welcome!!!</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
