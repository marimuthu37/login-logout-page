import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from './userSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login-logout-page/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Profile</h2>
        <p className='text-lg'><strong>Name:</strong> {name}</p>
        <p className='text-lg'><strong>Email:</strong> {email}</p>
        <button 
          onClick={handleLogout} 
          className='mt-6 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition w-full'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
