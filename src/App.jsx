import React from 'react'
import { useState } from "react";

const App = () => {

  const [input, setInput] = useState({
    name: "",
    date: "",
    message: "",
    rate: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let showError = {};

    if (input.name.trim() === "") {
      showError.name = "Enter Your Name";
    }
    if (input.message.trim() === "") {
      showError.message = "Enter Valid Review!";
    }
    if (input.date.trim() === "") {
      showError.date = "Select Valid Date!";
    }
    if (input.rate.trim() === "") {
      showError.rate = "Select Rating!";
    }

  };
  return (
    <div className="min-h-screen  py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-md  p-8 rounded-xl shadow-2xl">


        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-gray-800">Crud Local Storage</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" value={input.name} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Enter Email Id:</label>
            <input type="text" id="email" value={input.name} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your EmailId" />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">PassWord:</label>
            <input type="Password" id="date" value={input.date} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Confirm PassWord:</label>
            <input type="Password" id="date" value={input.date} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>

          <div>
            <label htmlFor="Country" className="block text-sm font-medium text-gray-700"></label>
            <select id="rate" value={input.rate} onChange={handleChange} className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400" >
              <option value={0}>Select Course</option>
              <option value="1">Full-Stach Developer</option>
              <option value="2">UI/UX</option>
              <option value="3">AI/ML</option>
              <option value="4"></option>
            </select>
          </div>
          <div className='flex gap-3'>
            <div classname="flex items-center mb-4">
              <input id="female" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600  " />
              <label htmlFor="female" className="ms-2 text-sm font-medium ">Female</label>
            </div>
            <div className="flex items-center">
              <input defaultChecked id="male" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 " />
              <label htmlFor="male" className="ms-2 text-sm font-medium ">Male</label>
            </div>
          </div>

          <button type="submit" className=" p-1 ps-3  pe-3  bg-cyan-700 ms-40 text-white font-semibold rounded  hover:bg-cyan-800 bg-cyan-700transition-all">
            Submit
          </button>
        </form>


      </div>

    </div>
  )
}

export default App