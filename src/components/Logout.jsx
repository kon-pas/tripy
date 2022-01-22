import useLogout from "../hooks/useLogout";

const Logout = () => {
    const logout = useLogout();
    
    return (
        <button className="logout" onClick={logout}>Wyloguj</button>
    );
}

export default Logout;