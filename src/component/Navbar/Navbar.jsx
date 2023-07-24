import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsMortarboardFill } from "react-icons/bs";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
 
    const navbar = <>
        <li className='px-4'><Link to="/">Home</Link></li>
        <li className='px-4'><Link to="/colleges">Colleges</Link></li>
        <li className='px-4'><Link to="/admission">Admission</Link></li>
        <li className='px-4'><Link to="/myCollege">My College</Link></li>


    </>
    return (
        <div>
            <div className="navbar bg-orange-950 text-white ">
                <div className="navbar-start">
                    <div className="dropdown text-white z-10 ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <a className="text-center item-center normal-case text-xl lg:ml-5"><BsMortarboardFill></BsMortarboardFill><span className=' uppercase font-serif text-xs'>Education hub</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex px-1">
                        {navbar}
                    </ul>
                </div>
                <div className='navbar-end' >
                    {
                        user?.email ? <>


                            <button onClick={handleLogOut} className='btn btn-sm rounded-3xl bg-orange-950 text-white border-none'>Sign Out</button>  <img className="h-[50px] w-[50px] ml-3 rounded-full" onMouseMove={user.displayName} src={user.photoURL} alt="" />


                        </> : <Link to="/login" className="btn btn-sm rounded-3xl bg-orange-950 text-white border-none text-xl">Log In</Link >
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;