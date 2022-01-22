import { useCallback } from "react"

const useLogout = () => {
    const logout = useCallback(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('cards');
        window.location.reload();
    }, []);

    return logout;
};

export default useLogout;