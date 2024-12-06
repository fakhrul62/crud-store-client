import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  ///
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("user created to FB", result.user);
        const newUser = { name, email, photoURL, password };
        //save new user to the DB
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user created to DB", data);
            updateProfile(user, {
              displayName: name,
              photoURL: photoURL,
            })
              .then(() => {})
              .catch((error) => {
                console.log(error.message);
              });
            Swal.fire({
              title: "User Created!",
              icon: "success",
            });
          });
        form.reset();
      })
      .catch((error) => {
        console.log("you got error bro:", error.message);
      });
  };
  return (
    <div>
      <div className="w-6/12 mx-auto">
        <h2 className="text-center font-bold text-4xl my-5 font-logo">
          Sign Up now!
        </h2>
        <div className="mt-5 mb-20">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Valid Photo URL (URL should end with .jpg/.jpeg/.png)"
                name="photoURL"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-black text-white">Sign Up</button>
            </div>
          </form>
          <h3 className="font-body text-center">Already have an account? <Link to='/sign-in'>Log in Now</Link></h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
