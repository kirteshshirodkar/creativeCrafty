import { Mail, Phone, MapPin, HelpCircle, AlertCircle } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar />


            {/* HERO */}
            <section className="bg-[#f9f7f4] ">
                <div className="max-w-7xl mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl font-semibold mt-6 mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Have a question, issue, or suggestion? We’re here to help you connect directly with the creativeCrafty team.
                    </p>
                </div>
            </section>

            {/* CONTACT INFO */}
            <section className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
                        <Mail className="mx-auto mb-4 text-[#8b5e3c]" />
                        <h3 className="font-semibold mb-1">Email Us</h3>
                        <p className="text-sm text-gray-600">
                            support@creativecrafty.com
                        </p>
                    </div>

                    <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
                        <Phone className="mx-auto mb-4 text-[#8b5e3c]" />
                        <h3 className="font-semibold mb-1">Call Us</h3>
                        <p className="text-sm text-gray-600">
                            +91 98765 43210
                        </p>
                    </div>

                    <div className="border rounded-xl p-6 text-center hover:shadow-md transition">
                        <MapPin className="mx-auto mb-4 text-[#8b5e3c]" />
                        <h3 className="font-semibold mb-1">Visit Us</h3>
                        <p className="text-sm text-gray-600">
                            Pune, Maharashtra, India
                        </p>
                    </div>

                </div>
            </section>

            {/* HELP & REPORT */}
            <section className="bg-[#f9f7f4]">
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* HELP */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <HelpCircle className="text-[#8b5e3c] mb-4" size={28} />
                        <h2 className="text-xl font-semibold mb-3">
                            Need Help?
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                            If you are facing issues with orders, payments, or account access, our support team is happy to assist you.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                            <li>Order related issues</li>
                            <li>Payment problems</li>
                            <li>Account login support</li>
                            <li>General queries</li>
                        </ul>
                    </div>

                    {/* REPORT */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <AlertCircle className="text-[#8b5e3c] mb-4" size={28} />
                        <h2 className="text-xl font-semibold mb-3">
                            Report a Problem
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Found a bug, incorrect product details, or something not working properly? Please report it directly to us.
                        </p>
                        <p className="text-sm text-gray-600">
                            We take user feedback seriously and respond as quickly as possible.
                        </p>
                    </div>

                </div>
            </section>

            {/* CONTACT FORM */}
            <section className="max-w-3xl mx-auto px-6 py-20">
                <h2 className="text-2xl font-semibold text-center mb-8">
                    Contact / Report Form
                </h2>

                <form className="bg-white border rounded-xl p-8 space-y-6">
                    <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Type of Query</label>
                        <select className="w-full mt-2 px-4 py-3 border rounded-lg">
                            <option>General Inquiry</option>
                            <option>Order Issue</option>
                            <option>Payment Issue</option>
                            <option>Report a Bug</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Describe your issue or message"
                            className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#8b5e3c] text-white py-3 rounded-full hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>
            <Footer />

        </div>
    );
}
