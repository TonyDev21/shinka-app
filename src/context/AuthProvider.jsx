import { createContext, useContext, useState, useEffect } from "react";
import { API_URL } from "../constants/env";
import Loader from "../components/atoms/Loader";

const AuthContext = createContext({
    isAuthenticated: false,
    getAccessToken: () => "",
    saveUser: (userData) => {},
    getRefreshToken: () => "",
    getUser: () => ({}),
    signOut: () => {},
});

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedAccessToken = localStorage.getItem("accessToken");
        const storedRefreshToken = localStorage.getItem("refreshToken");

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            checkAuth(storedAccessToken, storedRefreshToken);
        } else {
            setIsLoading(false);
        }
    }, []);

    async function requestNewAccessToken(refreshToken) {
        try {
            const response = await fetch(`${API_URL}/refresh-token`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${refreshToken}`
                }
            });

            if (response.ok) {
                const json = await response.json();
                return json.body.accessToken;
            }
        } catch (error) {
            console.log("Error requesting new access token:", error);
        }
        return null;
    }

    async function getUserInfo(accessToken) {
        try {
            const response = await fetch(`${API_URL}/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (response.ok) {
                const json = await response.json();
                return json.body;
            }
        } catch (error) {
            console.log("Error fetching user info:", error);
        }
        return null;
    }

    async function checkAuth(storedAccessToken, storedRefreshToken) {
        setIsLoading(true);

        if (storedAccessToken) {
            const userInfo = await getUserInfo(storedAccessToken);
            if (userInfo) {
                saveSessionInfo(userInfo, storedAccessToken, storedRefreshToken);
                setIsAuthenticated(true);
                setIsLoading(false);
                return;
            }
        }
        
        if (storedRefreshToken) {
            const newAccessToken = await requestNewAccessToken(storedRefreshToken);
            if (newAccessToken) {
                const userInfo = await getUserInfo(newAccessToken);
                if (userInfo) {
                    saveSessionInfo(userInfo, newAccessToken, storedRefreshToken);
                    setIsAuthenticated(true);
                    setIsLoading(false);
                    return;
                }
            }
        }

        signOut();
        setIsLoading(false);
    }

    function signOut() {
        setIsAuthenticated(false);
        setAccessToken("");
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }

    function saveSessionInfo(userInfo, newAccessToken, refreshToken) {
        setAccessToken(newAccessToken);
        setUser(userInfo);
        setIsAuthenticated(true);
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", refreshToken);
    }

    function getAccessToken() {
        return accessToken;
    }

    function getRefreshToken() {
        return localStorage.getItem("refreshToken");
    }

    function saveUser(userData) {
        saveSessionInfo(
            userData.body.user,
            userData.body.accessToken,
            userData.body.refreshToken
        );
    }

    function getUser() {
        return user;
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, getAccessToken, getRefreshToken, saveUser, getUser, signOut }}>
            {isLoading ? <Loader/> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);