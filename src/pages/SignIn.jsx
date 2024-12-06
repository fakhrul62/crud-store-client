import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        //navigate after login
        navigate(location?.state ? location.state : "/");
        //update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch(`http://localhost:5000/user`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("sign in info updated", data);
            form.reset();
          });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
            title: "Wrong Credentials!",
            icon: "error",
          });
      });
  };
  return (
    <div>
      <div className="w-6/12 mx-auto">
        <h2 className="text-center font-bold text-4xl my-5 font-logo">
          Sign In
        </h2>
        <div className="mt-5 mb-20">
          <form className="card-body font-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black hover:bg-fireb text-white">Log In</button>
            </div>
          </form>
          <div className="my-4 text-center">
            <button onClick={googleSignIn} className="btn bg-black text-white hover:bg-fireb font-body tracking-wide uppercase">
              Sign in with Google
            </button>
          </div>
          <h3 className="font-body text-center text-xl">
            New to this site? <Link to="/sign-up" className="text-fireb">Register Now</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
