
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { _auth } from '../Backend/Backend';
import toast from 'react-hot-toast';

// Creating context
export let authUser = createContext();

const UserContext = ({ children }) => {

    // State to store current user details
    let [authuser, setAuthuser] = useState(null);

    // Monitor Firebase authentication status
    useEffect(() => {

        let unsubscribe = onAuthStateChanged(_auth, (userCred) => {
            setAuthuser(userCred);
        });

        // Cleanup function
        return () => unsubscribe();

    }, []);

    // Logout function
    async function logout() {

        try {
            await signOut(_auth);
            toast.success("Logged out successfully");
        }
        catch (error) {
            toast.error(error.message);
        }

    }

    return (
        <authUser.Provider value={{ authuser, logout }}>
            {children}
        </authUser.Provider>
    );

};

export default UserContext;
