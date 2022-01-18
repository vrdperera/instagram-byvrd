import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function Profile() {
  const { username } = useParams();
  const [userExist, setUserExist] = useState(undefined);

  return <h1>HII</h1>;
}
