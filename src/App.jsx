import React from 'react'
import Header from './componant/Header'
import Hero from './componant/Hero'
import Products from './componant/products'
import Form from './componant/Form'
import trans from "./data/text";
import { useState } from 'react'
export default function App() {
  const [lang, setLang] = useState("en")


  let language = trans[lang]
  return (
    <div className='overflow-x-hidden relative' dir={lang == "en" ? "ltr" : "rtl"}>
      <div className='bg-gradient-to-r from-[#080D18] via-[#101B32] to-[#080D18]'>
        <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition duration-300" onClick={() => setLang(lang === "en" ? "ar" : "en")}>
          ع
        </button>
      </div>
      <Header language={language} lang={lang} />

      <Hero language={language} />
      <Products />
      <Form />
    </div>
  )
}
