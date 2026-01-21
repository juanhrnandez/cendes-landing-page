'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
        >
            <div className="container-cendes">
                <div className="flex items-center justify-between py-3 md:py-1">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img
                            src="/images/CENDES.svg"
                            alt="CENDES - Centro de Desarrollo y Educación Social - Prevención de Violencia Sexual y Bullying"
                            className="h-12 md:h-16"
                        />
                    </a>

                    {/* Contact Button */}
                    <a 
                        href="https://registro.cendes.org/" 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-bold text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
