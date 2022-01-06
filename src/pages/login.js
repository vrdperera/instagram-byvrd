import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  // STATES
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // VALIDATION
  const isInValid = emailAddress === '' || password === '';

  // UI EVENTS
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }
  };

  // EFFECTS
  useEffect(() => {
    document.title = 'Login - Instagram';
  }, []);

  // UI
  return (
    <div className="container mx-auto flex max-w-screen-md items-center h-screen ">
      <div className="flex w-8/12">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="Iphone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-6/12 mb-8 ">
        <div className="flex  flex-col items-center bg-white p-4 border border-gray-primary mb-4 ">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="" className="mt-2  w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-600">{error}</p>}
          <form className="m-5" onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your phone number, username, or email"
              type="email"
              placeholder="Phone number, username, or email"
              className="text-sm text-gray-base  w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded  mb-2 focus:outline-none "
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              arioa-lang="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2 focus:outline-none"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInValid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                 ${isInValid && 'opacity-50'}`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="text-center w-full bg-white p-4 border border-gray-primary">
          <p>
            Don't have an account?{' '}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign up
            </Link>{' '}
          </p>
        </div>
        <div>
          <p className="text-center mx-3 mt-6">Get the app.</p>
          <div className="flex w-full gap-2 p-6">
            <Link
              className="w-3/6 "
              to={{
                pathname:
                  'https://apps.apple.com/app/instagram/id389801252?vt=lo',
              }}
              target="_blank"
            >
              <img src="/images/badge_apple.png" alt="" />
            </Link>
            <Link
              className="w-3/6"
              to={{
                pathname:
                  'https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb&utm_campaign=loginPage&ig_mid=F20B376D-1485-423E-852C-30F39B81465C&utm_content=lo&utm_medium=badge',
              }}
              target="_blank"
            >
              <img src="/images/badge_android.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
