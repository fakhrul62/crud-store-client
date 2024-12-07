import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navmenu.css";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserSecret } from "react-icons/fa";

const Navmenu = () => {
  const { user, logOut } = useContext(AuthContext);

  const li = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/equipments">Equipments</NavLink>
      <NavLink to="/add-equipments">Add Equipments</NavLink>
      <NavLink to="/my-equipments">My Equipments</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => {
        const errorCode = error.message;
        console.log(errorCode);
      });
  };
  return (
    <div className="shadow">
      <div className="navbar w-10/12 mx-auto py-2 flex px-0">
        <div className="navbar-start md:w-1/3 w-full gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="stroke-mongo"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-5 shadow gap-y-4"
            >
              {li}
              {user ? (
                <div className="flex gap-3 items-center">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      className="h-10 object-contain rounded-lg"
                      src={
                        user?.photoURL !== "" ? (
                          user?.photoURL
                        ) : (
                          <FaUserSecret />
                        )
                      }
                    />
                  </div>
                  <Link>
                    <button
                      onClick={handleLogOut}
                      className="bg-transparent border-2 border-fireb px-5 py-2 text-fireb font-body font-semibold rounded"
                      type="button"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-3 items-center">
                  <div className="tooltip tooltip-bottom">
                    <img className="h-10 object-contain rounded-lg" src="" />
                  </div>
                  <Link to="/sign-in">
                    <button
                      className="bg-transparent border-2 border-mongo px-5 py-2 text-mongo font-body font-semibold rounded"
                      type="button"
                    >
                      Sign In
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl font-black font-logo text-fireb  flex gap-2 items-center"
          >
            <img
              src="https://i.ibb.co.com/cwqB63N/logo.png"
              className="w-7"
              alt=""
            />
            <span className="font-logo">CRUD STORE</span>
          </Link>
        </div>
        <div className="navbar-end hidden flex-grow lg:flex gap-10">
          <ul className="menu menu-horizontal px-1 gap-5 *:font-body *:font-medium">
            {li}
          </ul>
          {user ? (
            <div className="flex gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  className="h-10 object-contain rounded-lg"
                  src={user?.photoURL !== "" ? user?.photoURL : user?.photoURL}
                />
              </div>
              <Link>
                <button
                  onClick={handleLogOut}
                  className="bg-transparent border-2 border-fireb px-5 py-2 text-fireb font-body font-semibold rounded"
                  type="button"
                >
                  Logout
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <div className="tooltip tooltip-bottom">
                <img className="h-10 object-contain rounded-lg" src="" />
              </div>
              <Link to="/sign-in">
                <button
                  className="bg-transparent border-2 border-mongo px-5 py-2 text-mongo font-body font-semibold rounded"
                  type="button"
                >
                  Sign In
                </button>
              </Link>
            </div>
          )}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller hidden"
              value="light"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
