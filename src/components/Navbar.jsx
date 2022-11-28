import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FcDepartment } from 'react-icons/fc';

const Navbar = () => {

  const ref = useRef();
  const size = useRef();

  const maxSize = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 731) {
        ref.current.style.display = "block";
      } else {
        ref.current.style.display = "none";
        size.current.style.height = "4.5rem";
      }
    })
  }

  useEffect(() => {
    maxSize();
    window.removeEventListener("resize", null)
  }, [])


  return (
    <nav className='Navbar'>
      <Link to="/">
        <div className='logo'>
          <span className='loco-icon'>
            <FcDepartment />
          </span>
          <span className='logo-text-1'>
            simula
          </span>
          <span className='logo-text-2'>
            cr.
          </span>
        </div>
      </Link>
    </nav>
  )
}

export default Navbar