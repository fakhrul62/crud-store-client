import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="md:p-10">
        <div className=" md:p-10 p-6 rounded-lg shadow-xl gap-20 md:w-4/12 mx-auto">
          <div className="flex items-center">
            <img src={user.photoURL} className="w-full h-96 object-cover rounded-md" />
          </div>
          <div className="mt-2 col-span-2 text-center">
            <h3 className="font-logo text-5xl font-bold">{user.displayName}</h3>
            <h3 className="font-body mt-2 text-xl">
              EMAIL: {user.email}
            </h3>
         
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
