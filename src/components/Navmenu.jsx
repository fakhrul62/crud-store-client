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
            className="text-2xl font-black font-logo text-fireb flex gap-2 items-center"
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
                  src={
                    user?.photoURL !== "" ? user?.photoURL : user?.photoURL
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
        </div>
      </div>
    </div>
  );
};

export default Navmenu;
