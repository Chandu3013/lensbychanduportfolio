export default function GalleryGrid() {
    // Photos - Replace with your actual local images in /public/images/
    // The unsplash images here are placeholders to make the template look good immediately
    const images = [
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {images.map((src, i) => (
                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl cursor-pointer border border-gray-800">
                    <img src={src} alt={`Featured Shot ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                        <span className="text-white font-semibold text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Details</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
