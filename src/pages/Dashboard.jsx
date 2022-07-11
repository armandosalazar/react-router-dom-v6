import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div>
      <h2>Dashboard!</h2>
      {/* Subrutas */}
      {/* Existe una mejor forma para evitar que no se entienda el código. */}
      <Routes>
        <Route path="data" element={<p>Data of dashboard</p>} />
      </Routes>
      <Outlet />
      <Link to="data">Show data</Link>
      <br />
      <Link to="subruta">Show data in subruta</Link>
      <br />
      <Link to="welcome">Show welcome</Link>
      <br />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
