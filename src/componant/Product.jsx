import React from 'react'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'
export default function Product({ name, price, desc, image, avl }) {


    const [qty, setQty] = useState(1)


    // .........................

    const decrease = function () {
        qty > 1 ? setQty(qty - 1) : 1
    }

    // ............................

    const increase = function () {
        if (qty < avl) {
            setQty(qty + 1)
        }
        else {
            alert(" last product")
        }
    }

    // ..........................
    return (
        <div className='bg-[#1b2741] rounded-2xl overflow-hidden
                border border-slate-700'>
            <img src={image} alt="" className='w-full h-56 object-cover' />
            <div className='p-5 my-5'>   <h1 className="text-white text-xl font-bold">{name}</h1>
                <p className="text-slate-400">{desc}</p></div>

            <div className='flex items-center justify-between'>
                <strong className="text-[#D4B477] text-xl font-bold p-2">${price}</strong>
                {qty > 1 && <p className="text-[#D4B477] text-xl font-bold p-2" >${price} x {qty}=${price * qty}</p>}
                <div className="flex items-center gap-0">

                    <button
                        className="bg-[#1D3152] text-white p-3 rounded-l-lg
               hover:bg-[#29446D] transition" onClick={decrease}>
                        <Minus size={18} />
                    </button>

                    <span className="bg-[#101B32] text-white px-6 py-3">
                        {qty}
                    </span>

                    <button
                        className="bg-[#D4B477] text-[#080D18] p-3 rounded-r-lg
               hover:bg-[#c5a366] transition"onClick={increase}>
                        <Plus size={18} />
                    </button>

                </div>
            </div>
            <button className="w-full bg-[#D4B477] text-[#080D18]
                       py-3 rounded-lg font-bold
                       hover:bg-[#c5a366] transition mt-3">Buy Now</button>
        </div>
    )
}
