import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();

  return (
    <div>
      User: <span>{id}</span>
    </div>
  );
}

export default User;
