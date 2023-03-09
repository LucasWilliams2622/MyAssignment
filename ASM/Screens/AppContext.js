import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    //data use chung
    const [isLogin, setisLogin] = useState(false)
    const [inforUser, setinforUser] = useState({})
    const [PWUser, setPWUser] = useState('')
    return (
        // bỏ isLogin vào kho để reuse
        <AppContext.Provider value={{ isLogin, setisLogin, inforUser, setinforUser,PWUser, setPWUser }}>
            {children}
        </AppContext.Provider>
    )
}