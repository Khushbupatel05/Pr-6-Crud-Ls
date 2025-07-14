import React from 'react';

const UserList = ({ users, deleteUser, getEditUser }) => {
  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  const handleEdit = (user) => {
    getEditUser(user);
  };

  return (
    <div className="min-h-screen py-10 px-4 flex flex-col items-center ">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-6xl p-6">

        <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">
          Student User List
        </h2>

        {users.length === 0 ? (
          <div className="text-center text-gray-600 text-lg py-6">
            No students available.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-base uppercase bg-gray-100 text-gray-800">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Course</th>
                  <th className="px-6 py-3">Gender</th>
                  <th className="px-6 py-3">Password</th>
                  <th className="px-6 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="odd:bg-white even:bg-gray-50 border-b border-gray-200"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {{
                        1: 'Full Stack Development',
                        2: 'Marketing',
                        3: 'UI / UX',
                        4: 'AI / ML',
                      }[user.course]}
                    </td>
                    <td className="px-6 py-4">{user.gender}</td>
                    <td className="px-6 py-4">{user.password}</td>
                    <td className="px-6 py-4 flex items-center gap-3 justify-center">
                      <button
                        onClick={() => handleEdit(user)}
                        className="px-4 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="px-4 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
