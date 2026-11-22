import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
export default function Form() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const handleChange = function (e) {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = function (e) {
        e.preventDefault()

        Swal.fire({
            title: "Success!",
            text: "Your information has been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
            confirmButtonColor: "#D4B477",
            background: "#101B32",
            color: "#F1F3F7"
        })

    }
    return (

        <form className="max-w-4xl mx-auto bg-[#101B32] p-8 rounded-2xl border border-slate-700 shadow-xl mt-40" onSubmit={handleSubmit}>

            <h1 className="text-2xl font-bold text-white text-center mb-2">
                Create Account
            </h1>

            <p className="text-slate-400 text-center mb-8">
                Enter your information below
            </p>

            <div className="mb-5">
                <label className="block text-white mb-2 font-medium">
                    Full Name
                </label>

                <input
                    type="text"
                    placeholder="Enter your full name"
                    name="name"
                    value={formData.name}
                    className="w-full p-3 rounded-lg bg-[#080D18] border border-slate-700 text-white outline-none "
                    onChange={handleChange}
                />
            </div>

            <div className="mb-5">
                <label className="block text-white mb-2 font-medium">
                    Email Address
                </label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    className="w-full p-3 rounded-lg bg-[#080D18] border border-slate-700 text-white outline-none "
                    onChange={handleChange}
                />
            </div>

            <div className="mb-6">
                <label className="block text-white mb-2 font-medium">
                    Phone Number
                </label>

                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    className="w-full p-3 rounded-lg bg-[#080D18] border border-slate-700 text-white outline-none "
                    onChange={handleChange}
                />
            </div>

            <button
                disabled={formData.name == 0 || formData.email == 0 || formData.phone == 0}
                type="submit"
                className="w-full bg-[#D4B477] text-[#080D18] py-3 rounded-lg font-bold hover:bg-[#c5a366] hover:-translate-y-1 transition duration-300 disabled:cursor-not-allowed"
            >
                Submit
            </button>

        </form>

    )
}
