'use client';

import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { Theater, Film, Mic, Sparkles, Users, ArrowRight } from 'lucide-react';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { programs } from '@/lib/constants';
import Link from 'next/link';

// Helper to get icons
const getFormatIcons = (formatString) => {
    const icons = [];
    if (formatString.includes('Teatro')) icons.push({ Icon: Theater, label: 'Teatro' });
    if (formatString.includes('Cine')) icons.push({ Icon: Film, label: 'Cine' });
    if (formatString.includes('Monólogo')) icons.push({ Icon: Mic, label: 'Monólogo' });
    return icons;
};

export default function ProgramsSection() {
    return (
        <section id="programs" className="py-24 bg-white relative overflow-hidden">
             {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,116,64,0.05),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(180,182,81,0.05),transparent_40%)]" />

            <div className="container-cendes relative z-10 px-6">
                
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF8F3] px-4 py-1.5 border border-[#FFEADD] mb-6">
                             <Sparkles className="h-4 w-4 text-[#C47440]" />
                            <span className="text-xs font-bold text-[#C47440] uppercase tracking-widest">
                                Oferta Educativa
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            Programas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47440] to-[#B4B651]">Transformadores</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Diseñamos experiencias artísticas para cada etapa del desarrollo, desde preescolar hasta preparatoria.
                        </p>
                    </motion.div>
                </div>

                {/* Carousel */}
                <div className="relative px-4 md:px-12">
                     <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {programs.map((program) => {
                                const icons = getFormatIcons(program.format);
                                
                                return (
                                    <CarouselItem key={program.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5 }}
                                            className="h-full"
                                        >
                                            <Card className="h-full border-0 shadow-lg bg-white rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col relative">
                                                {/* Card Header Gradient */}
                                                <div className={`h-2 w-full bg-gradient-to-r ${program.gradient}`} />
                                                
                                                <CardHeader className="pt-8 pb-4">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <Badge variant="outline" className="text-xs font-semibold py-1 px-3 border-gray-200 bg-gray-50 text-gray-600">
                                                            {program.ageRange}
                                                        </Badge>
                                                    </div>
                                                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#C47440] transition-colors">
                                                        {program.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-base font-medium text-gray-600 line-clamp-2 min-h-[3rem]">
                                                        {program.theme}
                                                    </CardDescription>
                                                </CardHeader>
                                                
                                                <CardContent className="flex-grow space-y-6">
                                                    {/* Formats Section */}
                                                    <div>
                                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Formatos disponibles</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {icons.map((item, idx) => (
                                                                <div key={idx} className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 group-hover:bg-[#FFF8F3] group-hover:border-[#FFEADD] transition-colors">
                                                                    <item.Icon className="h-4 w-4 text-gray-500 group-hover:text-[#C47440]" />
                                                                    <span className="text-sm font-medium text-gray-600 group-hover:text-[#C47440]">{item.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>

                                                <CardFooter className="pt-4 pb-8 border-t border-gray-50 mt-auto">
                                                    <Button 
                                                        variant="ghost" 
                                                        className="w-full justify-between hover:bg-[#FFF8F3] hover:text-[#C47440] group-hover:text-[#C47440]"
                                                        asChild
                                                    >
                                                        <Link href="https://registro.cendes.org/">
                                                            Solicitar Programa <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                        </Link>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 border-gray-200 text-gray-600 hover:text-[#C47440] hover:border-[#C47440]" />
                        <CarouselNext className="hidden md:flex -right-12 h-12 w-12 border-gray-200 text-gray-600 hover:text-[#C47440] hover:border-[#C47440]" />
                    </Carousel>
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-gray-500 text-lg">
                            ¿No sabes cuál elegir? Nosotros te asesoramos.
                        </p>
                        <Button size="lg" className="bg-[#1A1A1A] text-white hover:bg-black rounded-full px-8 h-12 shadow-lg" asChild>
                             <Link href="https://registro.cendes.org/">
                                Ver Catálogo Completo
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
