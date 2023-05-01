import React, {createContext, useState} from "react";

export const SidebarContext = createContext({
    collapse: false,
    setCollapse: () => {}
});

export const SidebarProvider = ({children}) => {
    const [collapse, setCollapse] = useState(false);

    const value = {
        collapse, setCollapse
    }

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    )
}

