import React, { FC } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">CV Andreas Arnolfo</a>
    </div>
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
