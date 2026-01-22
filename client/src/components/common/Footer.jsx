import { Instagram, Facebook } from "lucide-react";
import { Link, Links } from "react-router-dom";
import { footerLinks } from "../../constants";


export default function Footer() {
    return (
        <footer className="bg-[#fafafa] border-t mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-semibold tracking-wide">
                            creative<span className="text-[#8b5e3c]">Crafty</span>
                        </h2>
                        <p className="mt-4 text-sm text-gray-600 max-w-sm leading-relaxed">
                            A marketplace for authentic handmade products, crafted with love
                            and care by skilled artisans across India.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-[#8b5e3c] hover:text-white transition"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white border flex items-center justify-center hover:bg-[#8b5e3c] hover:text-white transition"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold mb-5 uppercase tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            {
                                footerLinks.map((items)=>(
                                    <Link key={items.id} to={items.link}><li className="hover:text-[#8b5e3c] cursor-pointer">{items.name}</li></Link>
                                ))

                            }
                            
                            
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold mb-5 uppercase tracking-wide">
                            Support
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li className="hover:text-[#8b5e3c] cursor-pointer">Help Center</li>
                            <li className="hover:text-[#8b5e3c] cursor-pointer">Report Issue</li>
                            <li className="hover:text-[#8b5e3c] cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#8b5e3c] cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t my-10" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                    <p>
                        © {new Date().getFullYear()} creativeCrafty. All rights reserved.
                    </p>
                    <p className="tracking-wide">
                        Crafted with ❤️ for handmade lovers
                    </p>
                </div>

            </div>
        </footer>
    );
}
