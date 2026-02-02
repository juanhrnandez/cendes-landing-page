'use client';

import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight, Heart } from 'lucide-react';
import { programs } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,116,64,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(180,182,81,0.08),transparent_50%)]" />
            
            <div className="container-cendes relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 px-6">
                    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        
                        {/* Column 1: Brand & Mission */}
                        <div className="lg:col-span-2">
                            <div className="mb-6 bg-white p-3 rounded-xl inline-block shadow-lg">
                                <img
                                    src="/images/CENDES.svg"
                                    alt="CENDES Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">
                                Centro Nacional de Prevención y Fortalecimiento
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                                Transformamos la prevención de violencia sexual infantil y adolescente a través del arte. 
                                Más de 10 años protegiendo comunidades escolares en todo México.
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/fundacioncendes"
                                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#C47440] flex items-center justify-center transition-colors border border-white/20"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/fundacioncendes"
                                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-[#C47440] flex items-center justify-center transition-colors border border-white/20"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Programs */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Programas</h4>
                            <ul className="space-y-3">
                                {programs.slice(0, 5).map((program) => (
                                    <li key={program.id}>
                                        <a 
                                            href="https://registro.cendes.org/" 
                                            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <ArrowRight className="h-3 w-3 text-gray-500 group-hover:text-[#C47440] group-hover:translate-x-1 transition-all" />
                                            {program.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact */}
                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-6">Contacto</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-[#C47440]/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-[#C47440]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">55 2788 2274</p>
                                        <a
                                            href="https://wa.me/525527882274"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-[#B4B651] hover:text-[#C8CA6F] transition-colors"
                                        >
                                            WhatsApp directo →
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-[#B4B651]/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-5 w-5 text-[#B4B651]" />
                                    </div>
                                    <div>
                                        <a href="mailto:carolina.lopez@cendes.com.mx" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            carolina.lopez@cendes.com.mx
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="h-10 w-10 rounded-lg bg-gray-700/50 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Ciudad de México<br />México</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/10" />

                {/* Bottom Bar */}
                <div className="py-8 px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-gray-400">
                            <Link href="#" className="hover:text-white transition-colors">
                                Aviso de Privacidad
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Términos y Condiciones
                            </Link>
                            <Link href="#faq" className="hover:text-white transition-colors">
                                FAQ
                            </Link>
                        </div>
                        
                        <div className="text-center md:text-right">
                            <p className="text-sm text-gray-400 flex items-center gap-2 justify-center md:justify-end">
                                Hecho con <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> para proteger infancias
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                © {new Date().getFullYear()} CENDES. Todos los derechos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
