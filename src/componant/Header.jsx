
import React, { useState, useEffect } from 'react'
import nav from "../data/navitems"
import { ChevronDown, MenuIcon, X } from 'lucide-react'

const navAr = ["الرئيسية", "من نحن", "خدماتنا", "فريق العمل", "المدونة"]

export default function Header({ language, lang }) {

    const [showMenu, setshowMenu] = useState(false)
    const [showMobile, setShowMobile] = useState(false)

    useEffect(() => {
        function closeMenu() {
            setshowMenu(false)
        }

        document.addEventListener("click", closeMenu)

        return () => {
            document.removeEventListener("click", closeMenu)
        }
    }, [])

    return (
        <>
            <div className='bg-gradient-to-r from-[#080D18] via-[#101B32] to-[#080D18] flex items-center justify-between text-white p-7 relative'>

                <h1 className='font-bold text-2xl'>{language.web}</h1>

                <div>
                    {showMobile
                        ? <X className='md:hidden' onClick={() => setShowMobile(false)} />
                        : <MenuIcon className='md:hidden' onClick={() => setShowMobile(true)} />
                    }
                </div>

                <ul className='md:flex gap-7 hidden'>
                    {nav.map((n, index) => (
                        n.children ? (
                            <li key={n.id} className='relative'>
                                <span
                                    className='flex items-center gap-1 font-bold cursor-pointer'
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setshowMenu(!showMenu)
                                    }}
                                >
                                    {lang === "en" ? n.label : navAr[index]}
                                    <ChevronDown size={16} />
                                </span>

                                {showMenu && (
                                    <ul className='absolute right-0 top-8 bg-[#101B32] w-40 rounded'>
                                        {n.children.map((child) => (
                                            <li className='p-2 hover:bg-[#1a2b51]' key={child.id}>
                                                {child.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={n.id} className='hover:-translate-y-1 duration-200 font-bold cursor-pointer'>
                                {lang === "en" ? n.label : navAr[index]}
                            </li>
                        )
                    ))}
                </ul>
            </div>

            <div>
                <ul className={`absolute top-28 h-96 grid gap-0.5 ${showMobile ? "right-0" : "right-[-400px]"} w-56 bg-[#101B32] text-white text-center duration-200`}>
                    {nav.map((n, index) => (
                        n.children ? (
                            <li key={n.id} className='relative w-full'>
                                <span
                                    className='flex items-center justify-center gap-1 font-bold cursor-pointer'
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setshowMenu(!showMenu)
                                    }}
                                >
                                    {lang === "en" ? n.label : navAr[index]}
                                    <ChevronDown size={16} />
                                </span>

                                {showMenu && (
                                    <ul className='absolute right-0 top-8 bg-[#101B32] w-40 rounded'>
                                        {n.children.map((child) => (
                                            <li className='p-2 hover:bg-[#1a2b51]' key={child.id}>
                                                {child.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li key={n.id} className='font-bold cursor-pointer p-1'>
                                {lang === "en" ? n.label : navAr[index]}
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </>
    )
}
