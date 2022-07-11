import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home!</h1>
      {/* Link no tiene la propiedad isActive */}
      <Link to="/about">About</Link>
    </>
  );
}

export default Home;
