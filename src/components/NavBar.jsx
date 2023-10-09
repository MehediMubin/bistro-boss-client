import React from "react";

const NavBar = () => {
    const navItem = (
        <>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>Contact Us</a>
            </li>
            <li>
                <a>Dashboard</a>
            </li>
            <li>
                <a>Our Menu</a>
            </li>
            <li>
                <a>Our Shop</a>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar fixed z-10 bg-black text-white bg-opacity-20 uppercase font-semibold tracking-wider">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-white rounded-box w-52"
                        >
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItem}</ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
