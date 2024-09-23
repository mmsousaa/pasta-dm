import { createContext } from "react";

const AuthContext = createContext ({});

export const AuthProvider = ({children}) => {
    return (
    <AuthContext.Provider value={{
        signed:false,
        token:"bibidibobidibu",
        email:"aula@fatec.edu.br"}}>
        {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;