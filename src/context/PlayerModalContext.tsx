
"use client";
import { createContext, useState } from "react";

type PlayerModalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (isLoading: boolean) => void;
    clickHandler: () => void;
};

type WithChildrenProps = {
    children: React.ReactNode;
};

export const PlayerModalContext = createContext<PlayerModalContextType>({
    isModalOpen: false,
    setIsModalOpen: () => {},
    clickHandler: () => {},
});

export const PlayerModalProvider = ({children}: WithChildrenProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const clickHandler = () => setIsModalOpen(!isModalOpen);

    return (
        <PlayerModalContext.Provider value={{ isModalOpen, setIsModalOpen, clickHandler }}>
            {children}
        </PlayerModalContext.Provider>
    )
}