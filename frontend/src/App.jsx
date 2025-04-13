import React from 'react'
import Navbar from './components/Header/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <p className='text-red-500'>This is my first react app</p>
      <p className='text-blue-500'>This is my first react app</p>
      <p className='text-green-500'>This is my first react app</p>
    </div>
  )
}

export default App
