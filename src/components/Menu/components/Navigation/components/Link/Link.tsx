import React from 'react';
import style from './link.module.scss';

type LinkProps = {
    children: React.ReactNode;
    url: string;
    onClick?: () => void
};

export const Link = ({children, url, onClick}: LinkProps) => {
    return (<a href={url} className={style.navLink} onClick={onClick}>{children}</a>)
}
