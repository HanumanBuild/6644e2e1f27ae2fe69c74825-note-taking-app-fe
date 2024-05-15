import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='container mx-auto text-center'>
    <h1 className='text-4xl font-bold mt-10'>Welcome to Note-Taking App</h1>
    <div className='mt-10'>
      <Link to='/login' className='text-blue-500 hover:text-blue-700'>Login</Link> |
      <Link to='/signup' className='text-blue-500 hover:text-blue-700'>Sign Up</Link>
    </div>
  </div>
);

export default HomePage;