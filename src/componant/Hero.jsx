
import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero({ language }) {
    // const [lang, setLang] = useState("en")
    return (
        <section className="bg-[#080D18] text-white px-8 md:px-16 py-16 grid grid-cols-1  md:grid-cols-2 items-center justify-between gap-10">


            <div className="flex-1 space-y-6">

                <p className="text-blue-400 font-semibold tracking-widest">
                    {language.title}
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {language.subtitle}

                </h1>

                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                    {language.desc}
                </p>

                <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold transition duration-300">
                    {language.btn}
                    <ArrowRight size={20} />
                </button>

            </div>


            <div className="flex-1 w-full">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
                    alt="Fashion Store"
                    className="w-full h-[350px] md:h-[420px] object-cover rounded-2xl shadow-2xl border border-slate-700"
                />
            </div>

        </section>
    )
}
