import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setNav(false);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'User Data', path: '/userData' },
    { id: 3, text: 'Company', path: '/company' },
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className=' bg-black flex justify-between items-center h-24 mx-auto px-4 text-white'>
      <h1 onClick={() => navigate('/home')} className='w-full cursor-pointer text-3xl font-bold text-[#00df9a]'>ZeeRoot Labs</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl text-nowrap m-4 cursor-pointer duration-300 hover:text-black'
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 z-50 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 z-50 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ZeeRoot Labs</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            onClick={() => handleNavigation(item.path)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar;
