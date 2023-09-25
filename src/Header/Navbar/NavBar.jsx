import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const NavBar = () => {
    return (
        <div className="w-[85%] mx-auto ">
            <div className="navbar bg-base-100">
  <div className="navbar-start sm:flex sm:justify-between lg:block">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        
      </ul>
    </div>
    <div className=''>
        <div className='w-[150px]'>
            <img className='lg:relative lg:top-[-11px]' src={logo} />
        </div>
        
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/donation'>Donation</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default NavBar;