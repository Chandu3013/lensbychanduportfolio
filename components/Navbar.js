import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => {
        return router.pathname === path ? "text-yellow-500 font-semibold" : "text-gray-300 hover:text-white transition-colors duration-300";
    };

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-5 bg-black/80 backdrop-blur-md border-b border-gray-800 text-white">
            <Link href="/" className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
                <span className="text-yellow-500">📸</span> Lensbychandu
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
                <Link href="/" className={isActive("/")}>Home</Link>
                <Link href="/gallery" className={isActive("/gallery")}>Gallery</Link>
                <Link href="/contact" className={isActive("/contact")}>Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 md:hidden flex flex-col p-4 shadow-xl">
                    <Link href="/" className={`py-3 px-4 rounded-lg ${isActive("/")}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link href="/gallery" className={`py-3 px-4 rounded-lg mt-1 ${isActive("/gallery")}`} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                    <Link href="/contact" className={`py-3 px-4 rounded-lg mt-1 ${isActive("/contact")}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
