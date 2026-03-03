import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Gallery() {
    // Using placeholder images. Replace with actual images in /public/images/
    // The user should place their photos named appropriately
    const images = [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554046967-0c6a2ae5e186?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1000&auto=format&fit=crop"
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Head>
                <title>Gallery | Lensbychandu</title>
            </Head>
            <Navbar />
            <main className="flex-grow p-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-12 mt-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Portfolio</h1>
                    <p className="text-gray-400 text-lg">A collection of my best moments captured through the lens.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <div key={i} className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl relative group cursor-pointer border border-gray-800">
                            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white border border-white px-6 py-2 rounded-full font-medium tracking-wide">View Image</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
