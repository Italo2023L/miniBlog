import { NavLink } from "react-router-dom"



import styles from './Navbar.module.css'
import { useAuthValue } from "../context/AuthContext";
import { useAuthentication } from "../hooks/useAuthenticaction";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } =useAuthentication();

  return (
    <nav className={styles.navbar}>
    <NavLink className={styles.brand} to="/" >
        Mini <span>Blog</span>
    </NavLink>
    <ul className={styles.links_list}>
        <li>
            <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? styles.active : "")}>
                Home
            </NavLink>
        </li>
        {!user && (
            <>
        <li>
            <NavLink to="/Login" className={({ isActive }) => (isActive ? styles.active : "")}>
                Login
            </NavLink>
        </li>
        <li>
            <NavLink to="/Register" className={({ isActive }) => (isActive ? styles.active : "")}>
                Cadastrar
            </NavLink>
        </li>
            </>
        )}
        {user && (
            <>
        <li>
            <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>
                Novo post
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                Dashboard
            </NavLink>
        </li>
            </>
        )}
        <li>
            <NavLink to="/About" className={({ isActive }) => (isActive ? styles.active : "")}>
                About
            </NavLink>
        </li>
        {user && (
            <li>
                <button onClick={logout}>Sair</button>
            </li>
        )}
    </ul>
  </nav>);
}

export default Navbar;