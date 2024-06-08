import { createContext, useContext } from "react";

export const AuthContext = createContext({
    users : [{}],
    isLoggedIn : false,
    logIn : ()=>{},
    logOut : ()=>{},
    signUp : ()=>{}
});

export const AuthProvider = AuthContext.Provider;

export default function useAuth(){
    return useContext(AuthContext)
}
