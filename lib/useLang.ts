'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import type { Lang } from './i18n'
import React from 'react'

interface LangContextType {
  lang: Lang
  changeLang: (l: Lang) => void
}

const LangContext = createContext<LangContextType>({
  lang: 'EN',
  changeLang: () => {},
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('EN')

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang
    if (stored && ['EN', 'LV', 'RU'].includes(stored)) setLang(stored)
  }, [])

  const changeLang = (l: Lang) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }

  return React.createElement(LangContext.Provider, { value: { lang, changeLang } }, children)
}

export function useLang() {
  return useContext(LangContext)
}
