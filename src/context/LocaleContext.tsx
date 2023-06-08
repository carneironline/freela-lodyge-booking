"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { I18n } from 'i18n-js';
import en from '../locales/en';
import pt from '../locales/pt-BR';

const i18n = new I18n({
    en,
    pt,
    'pt-BR': pt,
});

const LANGUAGES: {[key: string]: string} = {
    en: 'en',
    'en-US': 'en',
    pt: 'pt-BR',
    'pt-BR': 'pt-BR',
  };

type LocaleContextType = {
    locale: string;
    setLocale: (locale: string) => void;
    toggleLocation: (checked: boolean) => void;
    isPT: boolean;
    translate: (scope: string, options?: {}) => string;
};

type WithChildrenProps = {
    children: React.ReactNode;
};

i18n.enableFallback = true;

const LOCALE_TOKEN = 'lodygeApp@locale';
let _locales: any;
let _locale: any;

export const LocaleContext = createContext<LocaleContextType>({
    locale: 'pt-BR',
    setLocale: () => {},
    toggleLocation: () => {},
    isPT: true,
    translate: (_scope: string, _options?: {}) => "",
});

export const LocaleProvider = ({children}: WithChildrenProps) => {
    const [isReady, setIsReady] = useState(false);
    const [locale, setLocale] = useState('pt-BR');
    const [isPT, setIsPT] = useState<boolean>(true);
    const storageLocale = typeof localStorage !== 'undefined' ? localStorage.getItem(LOCALE_TOKEN) : null;
    const browserLocale = typeof navigator !== 'undefined' ? navigator.language : 'en';
    const locales = Object.values(LANGUAGES);

    const setTopLevelLocale = (locales: any, locale: any) => {
        _locales = locales;
        _locale = locale;
    }

    const getSystemLocale = (locale: string): string => {
        const DEFAULT_LOCALE = 'pt-BR';
        return LANGUAGES[locale] || DEFAULT_LOCALE;
    };

    const detectStorageLocale = useCallback(() => {
        const localeStorage = typeof localStorage !== 'undefined' ? localStorage.getItem(LOCALE_TOKEN) : null;
        const isPT = localeStorage === 'pt-BR';
    
        setIsPT(isPT);
    },[]);

    const setStorageLocale = useCallback(() => {
        let locale;
        if (!storageLocale) {
            locale = getSystemLocale(browserLocale);
            localStorage.setItem(LOCALE_TOKEN, locale);
        } else {
            locale = storageLocale;
        }
        setLocale(locale);
        setTopLevelLocale(locales, locale);
    },[browserLocale, storageLocale]);

    const toggleLocation = (checked: boolean) => {
        const newLocation = checked ? 'pt-BR' : 'en';
        localStorage.setItem(LOCALE_TOKEN, newLocation);
        setIsPT(checked);
        setLocale(newLocation);
        setTopLevelLocale(locales, newLocation);
    };

    const translate = (scope: string, options = {}) => {
        return i18n.t(scope, {locale: _locale, ...options});
    }

    useEffect(() => {
        detectStorageLocale();
        setStorageLocale();
        setIsReady(true);
    },[setStorageLocale])

    if(!isReady) return <></>;

    return (
        <LocaleContext.Provider value={{ locale, setLocale, toggleLocation, isPT, translate }}>
            {children}
        </LocaleContext.Provider>
    )
}