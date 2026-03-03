import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Head>
                <title>Contact | Lensbychandu</title>
            </Head>
            <Navbar />
            <main className="flex-grow flex items-center justify-center p-8">
                <div className="max-w-xl w-full bg-gray-900 border border-gray-800 p-10 rounded-3xl shadow-2xl text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let's Create <br /><span className="text-yellow-500">Magic</span></h2>
                    <p className="text-gray-400 mb-10 text-lg">Whether it's a college event, portrait session, or creative shoot, I'm ready to capture your vision.</p>

                    <div className="space-y-6">
                        <a href="mailto:lensbychandu007@gmail.com" className="group block w-full py-4 px-6 bg-black border border-gray-700 hover:border-gray-500 hover:bg-gray-800 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            lensbychandu007@gmail.com
                        </a>

                        <a href="https://forms.gle/6EskGFnn4YbgK1HK6" target="_blank" rel="noopener noreferrer" className="block w-full py-4 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold flex items-center justify-center gap-2 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            Book a Shoot
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
