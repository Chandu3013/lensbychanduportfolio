import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GalleryGrid from "../components/GalleryGrid";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Head>
                <title>Lensbychandu | Photography Portfolio</title>
                <meta name="description" content="Capturing moments with creativity ✨" />
            </Head>
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <section className="p-8 max-w-6xl mx-auto mt-12 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">Featured Shots</h2>
                    <GalleryGrid />
                </section>
            </main>
            <Footer />
        </div>
    );
}
