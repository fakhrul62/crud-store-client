import React from "react";

const BlogSection = () => {
  return (
    <div className="py-20 w-10/12 mx-auto">
      <div>
        <h2 className="font-body font-bold   text-3xl text-center my-3">
          Blogs
        </h2>
        <p className="font-body   text-center mb-10">
          Find the category that suits you
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="rounded-lg border">
          <img
            src="https://www.gosportsart.com/wp-content/uploads/2022/09/SA_0001_BLOG-MOVING-WITH-HOPE.png"
            className="rounded-lg w-full h-60 object-cover"
          />
          <div className="p-3">
            <h2 className="font-logo font-bold">The Power to Change Lives</h2>
            <div className="flex justify-between font-body  ">
              <span>Ruben Mejia</span>
              <span>September 22, 2022</span>
            </div>
            <a
              href="https://www.gosportsart.com/power-to-change-lives/"
              target="_blank"
              className="  underline mt-2 font-body"
              type="button"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="rounded-lg border">
          <img
            src="https://www.gosportsart.com/wp-content/uploads/2022/08/think-tank-hero.png"
            className="rounded-lg w-full h-60 object-cover"
          />
          <div className="p-3">
            <h2 className="font-logo font-bold">The 17th Annual ICAA Forum Think Tank</h2>
            <div className="flex justify-between font-body  ">
              <span>Ruben Mejia</span>
              <span>August 3, 2022</span>
            </div>
            <a
              href="https://www.gosportsart.com/inspiring-our-shared-world/"
              target="_blank"
              className="  underline mt-2 font-body"
              type="button"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="rounded-lg border">
          <img
            src="https://www.gosportsart.com/wp-content/uploads/2021/10/October112021blogpostfeature.jpg"
            className="rounded-lg w-full h-60 object-cover"
          />
          <div className="p-3">
            <h2 className="font-logo font-bold">Moving Your Body is Good for Your Mental Health</h2>
            <div className="flex justify-between font-body  ">
              <span>Ruben Mejia</span>
              <span>October 10, 2021</span>
            </div>
            <a
              href="https://www.gosportsart.com/your-mental-health-matters/"
              target="_blank"
              className="  underline mt-2 font-body"
              type="button"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
