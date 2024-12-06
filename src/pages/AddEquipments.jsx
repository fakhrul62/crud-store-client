import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipments = () => {
  const { user } = useContext(AuthContext);
    const handleAddEquip = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing = form.processing.value;
        const user = form.user.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const newProduct = {name, category, price, rating, customization, processing,user, email, photo, description};
        console.log(newProduct);
        //send data to the server
        fetch('http://localhost:5000/store',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Product Added!",
                    icon: "success"
                  });
            }
        })
        form.reset();
       
    }
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-5 font-logo">Add an Equipment</h2>
      <div className="mt-5 mb-20">
        <form
          className="grid grid-cols-2 gap-5 w-10/12 mx-auto font-body"
          onSubmit={handleAddEquip}
        >
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Customization</span>
            </div>
            <input
              type="text"
              placeholder="Customization"
              name="customization"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Processing Time</span>
            </div>
            <input
              type="text"
              placeholder="Processing Time in Hours"
              name="processing"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Users Name</span>
            </div>
            <input
              type="text"
              value={user.displayName}
              name="user"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Users Email</span>
            </div>
            <input
              type="text"
              value={user.email}
              name="email"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control col-span-2 w-full ">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              placeholder="Photo"
              name="photo"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control col-span-2 w-full ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered w-full h-32"
              />
          </label>
          <div className="col-span-2">
            <button
              type="submit"
              className="btn w-full bg-zinc-900 text-white py-3 rounded-md hover:bg-zinc-200 hover:text-black hover:border"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipments;
