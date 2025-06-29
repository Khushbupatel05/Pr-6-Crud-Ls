import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import UserList from './Components/UserList'
import { toast, ToastContainer } from 'react-toastify';

const App = () => {

  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null)



  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])

  useEffect(() => {
    let previousUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(previousUsers);
  }, []);

  const ShowToast = () => {
    toast.success("Updated Successfully.....")
  }

  const addUsers = (User) => {
    setUsers([...users, User]) 

  }

  const deleteUser = (userId) => {
    const newUsers = users.filter((user) => {
      return user.id !== userId;
    })
    setUsers(newUsers);
    
  }

  const updateUser = (editUser) => {
    const updatedUsers = users.map((user) => {
      return user.id === editUser.id ? editUser : user;
    })
    setUsers(updatedUsers)
    setEditUser(null)
    ShowToast();
  }
  const getEditUser = (user) => {
    setEditUser(user)
  }


  return (
    <>
      <Form addUsers={addUsers} editUser={editUser} updateUser={updateUser}  />
      <UserList users={users} deleteUser={deleteUser} getEditUser={getEditUser} />
      <ToastContainer />
    </>
  )
}

export default App