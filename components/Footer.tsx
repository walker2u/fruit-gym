export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-2xl font-bold text-white mb-4 md:mb-0">
                        FRUIT<span className="text-brand-lime">GYM</span>
                    </div>
                    <div className="flex space-x-6 text-white/60">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
                <div className="text-center md:text-left text-white/40 text-sm">
                    © {new Date().getFullYear()} Fruit Gym. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
