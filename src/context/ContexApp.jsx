import { createContext, useContext } from "react";


export const AppContext = createContext();


export const useApp=()=>{
    const context = useContext(AppContext)
    if(!context){
        throw new Error("useApp must be used within a AppContextProvider")
    }
    return context
}

export const AppContextProvider = ({children})=>{

    return (
        <AppContext.Provider >
            {children}
        </AppContext.Provider>
    )
}