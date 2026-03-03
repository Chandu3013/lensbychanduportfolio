import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554046967-0c6a2ae5e186?q=80&w=2000&auto=format&fit=crop')" }}>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative text-center z-10 px-6 max-w-4xl mx-auto w-full">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-6 block drop-shadow-md">Photographer & Student</span>
                <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter drop-shadow-xl">Lensbychandu</h1>
                <p className="mt-6 text-xl md:text-3xl font-light text-gray-200 mb-12 drop-shadow-lg">Capturing moments with creativity ✨</p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                    <a href="https://forms.gle/6EskGFnn4YbgK1HK6" target="_blank" rel="noopener noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                        Book a Session
                    </a>
                    <Link href="/gallery"
                        className="bg-black/40 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-full font-bold text-lg transition-colors duration-300">
                        View Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
