import { useCallback } from "react"

const useLogout = () => {
    const logout = useCallback(() => {
        localStorage.removeItem('user');
        window.location.reload();
    }, []);

    return logout;
};

export default useLogout;