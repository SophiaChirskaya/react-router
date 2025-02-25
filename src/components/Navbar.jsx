import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <>
        <div className="navbar-container">
            <ul>
                <li>
                    <Navlink to='/'>HOME</Navlink>
                </li>
                <li>
                    <Navlink to='/posts'>POSTS</Navlink>
                </li>
                <li>
                    <Navlink to='/about'>ABOUT</Navlink>
                </li>
            </ul>

        </div>
        </>
    )
};