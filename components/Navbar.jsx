'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { programs } from '@/lib/constants';
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
    { name: 'Problema', href: '/#problem' },
    { name: 'Solución', href: '/#solution' },
    { 
        name: 'Programas', 
        href: '/programas',
        children: programs.map(p => ({ 
            name: p.title, 
            href: `/programas/${p.id}`,
            description: p.theme
        }))
    },
    { name: 'Testimonios', href: '/#testimonials' },
    { name: 'FAQ', href: '/#faq' },
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
                        className="h-14 md:h-16 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link 
                                href={item.href}
                                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[#C47440] transition-colors relative"
                            >
                                {item.name}
                                {item.children && <ChevronDown className="w-3 h-3 mt-0.5" />}
                                {!item.children && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C47440] transition-all group-hover:w-full" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-64">
                                    <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-2 overflow-hidden ring-1 ring-black ring-opacity-5">
                                        <div className="flex flex-col">
                                            {/* Header of dropdown */}
                                            <div className="px-4 py-2 bg-gray-50/50 -mx-2 -mt-2 mb-2 border-b border-gray-50">
                                                 <Link href="/programas" className="text-xs font-bold text-[#C47440] hover:underline uppercase tracking-wider flex items-center justify-between">
                                                    Ver todo el catálogo
                                                    <ChevronRight className="w-3 h-3" />
                                                 </Link>
                                            </div>
                                            
                                            {item.children.map((child) => (
                                                <Link 
                                                    key={child.name} 
                                                    href={child.href}
                                                    className="group/item flex flex-col px-4 py-2.5 hover:bg-[#FFF8F3] rounded-lg transition-colors"
                                                >
                                                    <span className="text-sm font-bold text-gray-700 group-hover/item:text-[#C47440]">{child.name}</span>
                                                    <span className="text-[10px] text-gray-500 line-clamp-1">{child.description}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Action */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button 
                        asChild
                        className="rounded-full font-semibold transition-all px-6 text-white hover:opacity-90"
                        style={{ backgroundColor: '#C47440' }}
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
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <MobileNavItem key={item.name} item={item} />
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

function MobileNavItem({ item }) {
    const [isOpen, setIsOpen] = React.useState(false);

    if (item.children) {
        return (
            <div className="border-b border-gray-50 last:border-0">
                <div className="flex items-center justify-between py-3 pr-2">
                    <SheetClose asChild>
                         <Link 
                            href={item.href}
                            className="text-base font-medium text-gray-600 hover:text-[#C47440]"
                        >
                            {item.name}
                        </Link>
                    </SheetClose>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ChevronDown className={cn("h-4 w-4 text-gray-400 transition-transform duration-200", isOpen && "rotate-180")} />
                    </button>
                </div>
                
                <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out pl-4 space-y-3",
                    isOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
                )}>
                    {item.children.map((child) => (
                        <SheetClose key={child.name} asChild>
                            <Link 
                                href={child.href}
                                className="block text-sm text-gray-500 hover:text-[#C47440] py-1 border-l-2 border-gray-100 pl-3 hover:border-[#C47440] transition-colors"
                            >
                                {child.name}
                            </Link>
                        </SheetClose>
                    ))}
                     <SheetClose asChild>
                         <Link href="/programas" className="block text-xs font-bold text-[#C47440] mt-2 uppercase tracking-wider">
                             Ver todo el catálogo →
                         </Link>
                     </SheetClose>
                </div>
            </div>
        );
    }

    return (
        <SheetClose asChild>
            <Link
                href={item.href}
                className="flex items-center justify-between py-3 text-base font-medium text-gray-600 hover:text-[#C47440] border-b border-gray-50 last:border-0 transition-colors"
            >
                {item.name}
                <ChevronRight className="h-4 w-4 text-gray-400" />
            </Link>
        </SheetClose>
    );
}
