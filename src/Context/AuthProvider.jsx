import { createContext, useEffect, useState } from "react";
import { auth, database } from '../Format/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref, set } from "firebase/database";

// create context
const AuthContext = createContext();

// creat provider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // simpan user ke local storage
        const user = localStorage.getItem("user")
        return user ? JSON.parse(user) : null
    })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            if (user) {
                localStorage.setItem("user", JSON.stringify(user))
            } else {
                localStorage.removeItem("user")
            }
        })
        return unsubscribe
    }, [])

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCrenditial) => {
            const user = userCrenditial.user;

            // tambahkan data user ke reltime database firebase
            set(ref(database, 'users/' + user.uid), {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: new Date().toISOString()
            })
            
        })
        .catch((error) => {
            console.error('ada error ni pak di bagian register:', error)
        })
    }

    const logout = () => {
        return signOut(auth)
        .then(() => {
            // kemudian hapus user dari localstorage jika logout
            localStorage.removeItem("user")
        })
    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            // tambahkan data user ke realtime database firebase
            set(ref(database, 'users/' + user.uid), {
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
                photoURL: user.photoURL,
                createdAt: new Date().toISOString()
            })
            .catch((error) => {
                console.error('ada error ni pak dibagian login:', error);
            })
        })
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext, AuthProvider }