"use client";
import { createContext, useState, useEffect } from "react";

type MenuControlContextType = {
    isMenuOpen: boolean;
    setIsMenuOpen: (isLoading: boolean) => void;
    clickHandler: () => void;
};

type WithChildrenProps = {
    children: React.ReactNode;
};

export const MenuControlContext = createContext<MenuControlContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => {},
    clickHandler: () => {},
});

export const MenuControlProvider = ({children}: WithChildrenProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickHandler = () => setIsMenuOpen(!isMenuOpen);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflowHidden');
            document.documentElement.classList.add('overflowHidden');
        }
    
        return () => {
            document.body.classList.remove('overflowHidden');
            document.documentElement.classList.remove('overflowHidden');
        };
      }, [isMenuOpen]);

    return (
        <MenuControlContext.Provider value={{ isMenuOpen, setIsMenuOpen, clickHandler }}>
            {children}
        </MenuControlContext.Provider>
    )
}