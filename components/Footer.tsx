export default function Footer() {
    return (
        <footer className="bg-white py-12 border-t border-brand-dark/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-2xl font-bold text-brand-dark mb-4 md:mb-0">
                        SIMPLY<span className="text-brand-lime">SLICED</span>
                    </div>
                    <div className="flex space-x-6 text-brand-dark/60">
                        <a href="#" className="hover:text-brand-lime transition-colors">Instagram</a>
                        <a href="#" className="hover:text-brand-lime transition-colors">Twitter</a>
                        <a href="#" className="hover:text-brand-lime transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div className="text-center md:text-left text-brand-dark/40 text-sm">
                    © {new Date().getFullYear()} SimplySliced. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
