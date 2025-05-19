import React from "react";
import Swal from "sweetalert2";

const Add = () => {
  const handelcreate = (e) => {
    e.preventDefault();

    const form = e.target;
    const formdata = new FormData(form);
    const saveddata = Object.fromEntries(formdata.entries());
    console.log(saveddata);

    fetch("https://dairy-server-l9s0459xk-siamahmeddhks-projects.vercel.app/pages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveddata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Write Your Daily Memory
        </h2>

        <form onSubmit={handelcreate}>
          <div className="text-gray-700 flex flex-col space-y-2">
            <input
              className="w-full h-8 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
              type="text"
              name="title"
              placeholder="add title"
            />
            <input
              className="w-full h-8 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
              type="email"
              name="email"
              placeholder="add email"
            />
            <input
              className="w-full h-8 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
              type="text"
              name="url"
              placeholder="momorable photo today"
            />
          </div>

          <textarea
            className="w-full h-40 p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-700"
            name="message"
            placeholder="What happened today?"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Save Memory
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
