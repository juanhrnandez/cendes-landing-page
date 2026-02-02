'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Problema', href: '#problem' },
    { name: 'Solución', href: '#solution' },
    { name: 'Programas', href: '#programs' },
    { name: 'Impacto', href: '#reach' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled 
                    ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm" 
                    : "bg-transparent py-5"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-cendes flex items-center justify-between px-6">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center gap-2">
                    <img
                        src="/images/CENDES.svg"
                        alt="CENDES Logo"
                        className="h-10 md:h-12 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#C47440] transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C47440] transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* Desktop Action */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button 
                        asChild
                        variant={isScrolled ? "default" : "outline"}
                        className={cn(
                            "rounded-full font-semibold transition-all px-6",
                            !isScrolled && "bg-white/50 backdrop-blur-sm border-white/40 hover:bg-white hover:text-[#C47440] text-gray-800"
                        )}
                        style={isScrolled ? { backgroundColor: '#C47440' } : {}}
                    >
                         <Link href="https://registro.cendes.org/">
                            Únete Ahora
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu (Sheet) */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                <Menu className="h-6 w-6 text-gray-800" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-gray-100">
                            <SheetHeader className="text-left border-b border-gray-100 pb-4 mb-4">
                                <SheetTitle>
                                    <img
                                        src="/images/CENDES.svg"
                                        alt="CENDES Logo"
                                        className="h-10"
                                    />
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <SheetClose key={item.name} asChild>
                                        <Link
                                            href={item.href}
                                            className="flex items-center justify-between py-3 text-base font-medium text-gray-600 hover:text-[#C47440] border-b border-gray-50 transition-colors"
                                        >
                                            {item.name}
                                            <ChevronRight className="h-4 w-4 text-gray-400" />
                                        </Link>
                                    </SheetClose>
                                ))}
                                <div className="mt-6">
                                     <Button asChild className="w-full bg-[#C47440] hover:bg-[#A85F33] text-white rounded-full py-6 text-lg">
                                        <Link href="https://registro.cendes.org/">
                                            Contacto Directo
                                        </Link>
                                     </Button>
                                    <p className="mt-4 text-center text-xs text-gray-400">
                                        Prevención de violencia y bullying escolar
                                    </p>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
