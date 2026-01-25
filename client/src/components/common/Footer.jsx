import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks, supportLinks } from "../../constants";

export default function Footer() {
    return (
        <footer className="bg-[#1C1A17] text-[#EDE6DD] ">
            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-semibold tracking-wide">
                            creative
                            <span className="text-[#B08968]">Crafty</span>
                        </h2>

                        <p className="mt-5 text-sm text-[#A89F94] max-w-md leading-relaxed">
                            A curated marketplace for authentic handmade creations,
                            crafted with passion by skilled artisans across India.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-8">
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-[#24211D] flex items-center justify-center hover:bg-[#B08968] hover:text-[#1C1A17] transition"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-[#24211D] flex items-center justify-center hover:bg-[#B08968] hover:text-[#1C1A17] transition"
                            >
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xs font-semibold mb-6 uppercase tracking-widest text-[#B08968]">
                            Explore
                        </h3>
                        <ul className="space-y-4 text-sm text-[#A89F94]">
                            {footerLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.link}
                                        className="hover:text-[#EDE6DD] transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-xs font-semibold mb-6 uppercase tracking-widest text-[#B08968]">
                            Support
                        </h3>
                        <ul className="space-y-4 text-sm text-[#A89F94]">
                            {supportLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.link}
                                        className="hover:text-[#EDE6DD] transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Soft Divider */}
                <div className="my-16 h-px bg-gradient-to-r from-transparent via-[#3A342C] to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#A89F94] tracking-wide">
                    <p>
                        © {new Date().getFullYear()} creativeCrafty. All rights reserved.
                    </p>
                    <p>
                        Thoughtfully crafted for lovers of handmade beauty
                    </p>
                </div>

            </div>
        </footer>
    );
}
