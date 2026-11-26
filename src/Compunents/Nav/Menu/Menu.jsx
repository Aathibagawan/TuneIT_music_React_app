
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../../../context/UserContext';

const Menu = () => {

  // Access user details from Context
  let { authuser, logout } = useContext(authUser);

  // Function for logged-in user
  function validUser() {

    return (
      <>
        <li className="flex items-center gap-2">

          <img
            src={authuser.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover"
          />

          <Link
            to="/profile"
            className="no-underline text-white font-semibold hover:text-purple-400"
          >
            {authuser.displayName || "User"}
          </Link>

        </li>

        <li>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-5 py-2 rounded-md"
          >
            Logout
          </button>
        </li>
      </>
    );
  }

  // Function for logged-out user
  function invalidUser() {

    return (
      <>
        <li>
          <Link to="/login" className="no-underline text-white">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register" className="no-underline text-white">
            Register
          </Link>
        </li>
      </>
    );
  }

  return (
    <div>
      <nav>
        <ul className="flex justify-end items-center gap-10 list-none p-0 m-0">

          <li>
            <Link to="/" className="no-underline text-white">
              Home
            </Link>
          </li>

          {
            authuser?.emailVerified ? validUser() : invalidUser()
          }

        </ul>
      </nav>
    </div>
  );

};

export default Menu;
