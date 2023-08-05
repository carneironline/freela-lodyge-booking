"use client";
import { createContext, useState, useEffect } from "react";

type TagsControlContextType = {
	isModalOpen: boolean;
	setIsModalOpen: (isLoading: boolean) => void;
	clickHandler: () => void;
};

type WithChildrenProps = {
	children: React.ReactNode;
};

export const TagsControlContext = createContext<TagsControlContextType>({
	isModalOpen: false,
	setIsModalOpen: () => {},
	clickHandler: () => {},
});

export const TagsControlProvider = ({ children }: WithChildrenProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const clickHandler = () => setIsModalOpen(!isModalOpen);

	return (
		<TagsControlContext.Provider
			value={{ isModalOpen, setIsModalOpen, clickHandler }}
		>
			{children}
		</TagsControlContext.Provider>
	);
};
