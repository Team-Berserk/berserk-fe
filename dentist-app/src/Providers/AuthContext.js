import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { instance } from '../Clients'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState()
  const Navigator = useNavigate()
  const verifyToken = () => {
    const token = window.localStorage.token
    instance
      .get('verify', {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setUserData(response.data)
        console.log(response.data.username)
      })
  }
  useEffect(() => {
    verifyToken()
  }, [])
  return (
    <AuthContext.Provider
      value={{ userData, setUserData, verifyToken, Navigator }}
    >
      {children}
    </AuthContext.Provider>
  )
}
