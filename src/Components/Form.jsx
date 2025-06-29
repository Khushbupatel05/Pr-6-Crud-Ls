import React, { useEffect,  useState } from 'react';

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
    <div className='container mx-auto my-4  '>
      <h1 className='text-3xl text-center font-semibold my-12'>Form Validation</h1>

      <form  onSubmit={handleSubmit} className="max-w-sm mx-auto">

        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
          <input onChange={handleChange} value={input.name} type="text" id="name"  className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"   placeholder="Name"  />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

 
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
          <input
            onChange={handleChange}
            value={input.email}
            type="email"
            id="email"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Email" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-5">
          <label htmlFor="course" className="block mb-2 text-sm font-medium text-gray-900">Select Course</label>
          <select
            onChange={handleChange}
            value={input.course} id="course"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
            <option value="">--Select Course--</option>
            <option value="1">Full Stack Development</option>
            <option value="2">Marketing</option>
            <option value="3">UI / UX</option>
            <option value="4">AI / ML</option>
          </select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
        </div>

       
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2 text-gray-900">
            <input
              type="radio"
              id="gender"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={input.gender === "Male"}
            />
            Male
          </label>
          <label className="flex items-center gap-2 text-gray-900">
            <input
              type="radio"
              id="gender"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={input.gender === "Female"}
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="text-red-500 text-sm mb-4">{errors.gender}</p>}

        
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your Password</label>
          <input
            onChange={handleChange}
            value={input.password}
            type="password"
            id="password"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

       
        <div className="mb-5">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Repeat Password</label>
          <input
            onChange={handleChange}
            value={input.confirmPassword}
            type="password"
            id="confirmPassword"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>

       
        <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5" >
          {editUser ?"Update" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
