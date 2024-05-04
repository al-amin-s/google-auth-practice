import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const Nave = () => {
    const { logOut, user } = useAuth();
    return (
        <div>




            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to="/home"><li>Home</li></Link>
                            <Link to="/products"><li>Products</li></Link>
                            <Link to="/about"><li>Products</li></Link>

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <Link className="btn mx-2" to="/home"><li>Home</li></Link>
                        <Link className="btn mx-2" to="/products"><li>Products</li></Link>
                        <Link className="btn mx-2" to="/about"><li>About</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link className="btn " to="/login">LogIn</Link>
                    <button onClick={() => logOut()} className="btn">logOut</button> */}


                        {
                            user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" m-1">

                                <div className="w-10 rounded-full">
                                    {user?
                                        <img className="rounded-full" src={user.photoURL } alt="" />
                                    :
                                    <span>Photo not found</span>
                                    }
                                        

                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li>{user.displayName}</li>
                              <button onClick={logOut} className="btn">LogOut</button>
                            </ul>
                          </div>
                          :
                          <Link to="/login"><button className="btn">Login</button></Link>
                          
                        }
                </div>
            </div>





        </div>
    );
};

export default Nave;