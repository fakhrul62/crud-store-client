import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    name,
    category,
    price,
    rating,
    customization,
    processing,
    stock,
    user,
    email,
    photo,
    description,
  } = product;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const stock = form.stock.value;
    const user = form.user.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const updatedProduct = {
      name,
      category,
      price,
      rating,
      customization,
      processing,
      stock,
      user,
      email,
      photo,
      description,
    };
    //send data to the server
    fetch(`http://localhost:5000/store/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(res=> res.json())
    .then(data=> {
        console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                title: "Product Updated!",
                icon: "success"
              });
        }
    })
    form.reset();
  };
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <h2 className="text-center font-bold text-4xl my-5 font-logo">
          Update Equipment
        </h2>
        <div className="mt-5 mb-20">
          <form
            className="grid grid-cols-2 gap-5 w-10/12 mx-auto font-body"
            onSubmit={handleUpdate}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={customization}
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
                defaultValue={processing}
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Stock Status</span>
              </div>
              <input
                type="text"
                placeholder="Stock Status"
                name="stock"
                defaultValue={stock}
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control col-span-2 w-full ">
              <div className="label">
                <span className="label-text">Users Name</span>
              </div>
              <input
                type="text"
                defaultValue={user}
                name="user"
                disabled
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Users Email</span>
              </div>
              <input
                type="text"
                defaultValue={email}
                name="email"
                disabled
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
                defaultValue={photo}
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
                defaultValue={description}
                className="input input-bordered w-full h-32"
              />
            </label>
            <div className="col-span-2">
              <button
                type="submit"
                className="btn w-full   text-white py-3 rounded-md hover:  hover:  hover:border"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
