import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom'

export function dashBoardLoader(){
    const userName = fetchData("userName")
    return { userName }
}

 const Dashboard = () => {
   const { userName } = useLoaderData()

  return (
    <div>
        Dashboard
        <h1>{ userName }</h1>
        
        </div> 
  )
}
export default Dashboard
