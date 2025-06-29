import React from 'react'

const UserList = ({ users, deleteUser, getEditUser }) => {

  const handleDelete = (userId) => {
    deleteUser(userId);
  }
  const handleEdit = (user) => {
    getEditUser(user);
  }
  return (
    <>

      <div className='container mx-auto my-5  px-11'>

        {users.length === 0 ? (
          <div className="bg-white p-6 text-center">
            <p className="text-gray-600 text-lg mb-4">No students available.</p>
            {/* <button
              onClick={Back}
              className="px-4 py-2 bg-[#d3936b] hover:bg-[#aa795b] text-white rounded-lg"
            >
              Add New Student
            </button> */}
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-base text-gray-700 uppercase bg-gray-50">
                <tr className=''>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {

                  users.map((user, index) => {
                    return <tr key={user.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {user.name}
                      </th>
                      <td className="px-6 py-4">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        {{
                          1: "Full Stack Development",
                          2: "Marketing",
                          3: "UI / UX",
                          4: "AI / ML"
                        }[user.course]}
                      </td>
                      <td className="px-6 py-4">
                        {user.gender}
                      </td>
                      <td className="px-6 py-4">
                        {user.password}
                      </td>
                      <td className="flex gap-2 px-6 py-4">
                        <button onClick={() => handleEdit(user)} className="font-medium text-green-600 hover:underline">Edit</button>
                        <button onClick={() => handleDelete(user.id)} className="font-medium text-red-600 hover:underline">Delete</button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>

          </div>
        )}
      </div>
    </>
  )
}

export default UserList