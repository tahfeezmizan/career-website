import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>

        {/* <li className="text-lg font-medium opacity-70 hover:bg-transparent">NavLink</li>
        <li className="text-lg font-medium opacity-70 hover:bg-transparent">Recipes </li>
        <li className="text-lg font-medium opacity-70 hover:bg-transparent">About </li>
        <li className="text-lg font-medium opacity-70 hover:bg-transparent">Search </li> */}
    </>
    return (
        <div className="navbar w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {links}
                        <button className="btn btn-active btn-primary">Primary</button>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold lexend">Career</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-active btn-primary">Primary</button>
            </div>
        </div>
    );
};

export default Header;