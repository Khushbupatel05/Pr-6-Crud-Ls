import React, { useEffect, useState } from 'react'
import Form from './Components/Form'
import UserList from './Components/UserList'

const App = () => {

  const [users, setUsers] = useState([]);
   const addUsers = (User) =>{
      setUsers([...users , User])
   }
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users])
  return (
    <>
      <Form addUsers={addUsers} />
      <UserList />
    </>
  )
}

export default App