import React, { useEffect, useState } from 'react';

const Form = ({ editUser, addUsers, updateUser }) => {
  const [input, setInput] = useState({
    name: '', email: '', course: '', gender: '', password: '', confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editUser) {
      setInput(editUser);
    } else {
      setInput({
        name: '', email: '', course: '', gender: '', password: '', confirmPassword: '',
      });
    }
  }, [editUser]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (input.name.trim() === "") {
      validationErrors.name = "Enter Your Name !";
    }

    if (input.email.trim() === "") {
      validationErrors.email = "Enter Your Email !";
    }

    if (!input.course) {
      validationErrors.course = "Select Your Course !";
    }

    if (!input.gender) {
      validationErrors.gender = "Please select your gender";
    }

    if (input.password.trim().length < 8) {
      validationErrors.password = "Enter a Valid and Strong Password !";
    }

    if (input.password.trim() !== input.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Password and Confirm Password Should Be Same !";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (editUser) {
      updateUser(input);
    } else {
      addUsers({ ...input, id: Date.now() });
    }

    setInput({
      name: '', email: '', course: '', gender: '', password: '', confirmPassword: '',
    });
    setErrors({});
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8a2a2] via-[#b94d8b] to-[#731f9c] p-6">
    <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-5xl overflow-hidden">
      <div className="hidden md:flex flex-col justify-center items-center bg-[#1e1e2f] text-white w-1/2 p-8">
        <img src="/img/studentNow.png" alt="Professional"  className="w-50 h-70 object-contain mb-6" />
        <h2 className="text-xl font-semibold text-center">
          Registered Now
        </h2>

      </div>

      <div className="w-full md:w-1/2 p-8">
        <h2 className='text-3xl font-bold text-center text-blue-800 mb-4'>
           Student From
        </h2>

        <form onSubmit={handleSubmit} className='space-y-5'>
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input onChange={handleChange}  value={input.name} type="text" id="name"   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"  />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input  onChange={handleChange} value={input.email} type="email" id="email"  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"  />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="course" className="block mb-1 font-medium">Course</label>
            <select  onChange={handleChange} value={input.course}  id="course"  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" >
              <option value="">-- Select Course --</option>
              <option value="1">Full Stack Development</option>
              <option value="2">Marketing</option>
              <option value="3">UI / UX</option>
              <option value="4">AI / ML</option>
            </select>
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Gender</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input  type="radio"  id="gender"   name="gender"  value="Male"   onChange={handleChange}   checked={input.gender === "Male"}  />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input  type="radio"  id="gender"  name="gender"  value="Female"  onChange={handleChange}   checked={input.gender === "Female"} />
                Female
              </label>
            </div>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">Password</label>
            <input onChange={handleChange}  value={input.password}  type="password"  id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Password"  />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
            <input  onChange={handleChange}  value={input.confirmPassword}  type="password"  id="confirmPassword"  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Repeat your password"  />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit"   className="w-full py-3 bg-[#7d05a5] text-white font-semibold rounded-lg hover:bg-[#5f1e80] transition" >
            {editUser ? "Update" : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  </div>
);

};

export default Form;
