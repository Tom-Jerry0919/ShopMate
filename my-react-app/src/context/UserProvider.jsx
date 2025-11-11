import React from 'react'

function UserProvider({ children }) {
  const [user, setUser] = useState('abc');
  

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider