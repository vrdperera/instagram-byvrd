import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { doesUserNameExsit } from '../services/firebase';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  // STATES
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // VALIDATION
  const isInValid = emailAddress === '' || password === '';

  // UI EVENTS
  const handleSignUp = async (event) => {
    event.preventDefault();

    const userNameExists = await doesUserNameExsit(userName);

    if (!userNameExists) {
      try {
        const createdUserResults = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // Authentication
        // emailAddress and password and usename (displayName)
        await createdUserResults.user.updateProfile({ displayName: userName });

        //firebase user collection (create a document)
        await firebase.firestore().collection('users').add({
          userId: createdUserResults.user.uid,
          username: userName.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          followers: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setUserName('');
        setPassword('');
        setEmailAddress('');
        setError(error.message);
      }
    } else {
      setUserName('');
      setError('That username is already exist, please try another.');
    }
  };

  // EFFECTS
  useEffect(() => {
    document.title = 'Sign Up - Instagram';
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
      <div className="flex flex-col w-6/12  ">
        <div className="flex  flex-col items-center bg-white p-4 border border-gray-300 mb-4 ">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="" className="mt-2  w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-600">{error}</p>}
          <form className="m-5" onSubmit={handleSignUp} method="post">
            <input
              aria-label="Enter your phone number or email"
              type="email"
              placeholder="Phone number, username, or email"
              className="text-sm text-gray-base  w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded  mb-2 focus:outline-none "
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your full name"
              type="text"
              placeholder="Full name"
              className="text-sm text-gray-base  w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded  mb-2 focus:outline-none "
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <input
              aria-label="Enter your username"
              type="text"
              placeholder="Username"
              className="text-sm text-gray-base  w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded  mb-2 focus:outline-none "
              onChange={({ target }) => setUserName(target.value)}
              value={userName}
            />
            <input
              arioa-lang="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2 focus:outline-none"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInValid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold
                 ${isInValid && 'opacity-50'}`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-center w-full bg-white p-4 border border-gray-300">
          <p>
            Have an account?{' '}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Login
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
