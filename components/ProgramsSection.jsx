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
        <section id="programs" className="pt-32 pb-48 md:py-32 bg-white relative overflow-hidden">
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
                                            className="h-full pt-4 pb-4"
                                        >
                                            <Card className="h-full border-0 shadow-[0_0_30px_-5px_rgba(0,0,0,0.05)] bg-white rounded-[2rem] overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col relative isolation-auto">
                                                {/* Visual Header with Image & Gradient */}
                                                <div className="h-48 w-full relative overflow-hidden">
                                                    {/* Background Image */}
                                                    <img 
                                                        src={program.image} 
                                                        alt={program.title}
                                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    />
                                                    
                                                    {/* Gradient Overlay */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-90 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-85`} />
                                                    
                                                    {/* Pattern Overlay */}
                                                    <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] mix-blend-overlay" />
                                                    
                                                    {/* Floating Badge */}
                                                    <div className="absolute top-4 right-4 z-10">
                                                         <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 font-bold border-0 shadow-sm hover:bg-white px-3 py-1 text-xs uppercase tracking-wider">
                                                            {program.title === 'Corazonada' ? 'Infantil' : program.title.includes('Llamada') ? 'Adolescentes' : 'Jóvenes'}
                                                         </Badge>
                                                    </div>
                                                </div>
                                                
                                                <CardHeader className="pt-0 relative px-8">
                                                    {/* Overlapping Title Card */}
                                                    <div className="-mt-10 mb-2 z-10 relative">
                                                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 inline-block w-full">
                                                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                                <span className={`block h-2 w-2 rounded-full bg-gradient-to-r ${program.gradient}`} />
                                                                Programa
                                                            </div>
                                                            <CardTitle className="text-2xl font-black text-gray-900 leading-tight">
                                                                {program.title}
                                                            </CardTitle>
                                                        </div>
                                                    </div>

                                                    <CardDescription className="text-gray-600 font-medium leading-relaxed text-base mt-2 min-h-[4.5rem]">
                                                        {program.theme}
                                                    </CardDescription>
                                                    
                                                    {/* Age Range Specifics */}
                                                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-500 bg-gray-50 p-2 rounded-lg w-fit">
                                                        <Users className="h-4 w-4" />
                                                        {program.ageRange}
                                                    </div>
                                                </CardHeader>
                                                
                                                <CardContent className="flex-grow px-8 pb-0">
                                                    {/* Divider */}
                                                    <div className="h-px w-full bg-gray-100 my-4" />
                                                    
                                                    {/* Formats Section */}
                                                    <div>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Disponible en formato:</p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {icons.map((item, idx) => (
                                                                <div key={idx} className="flex items-center gap-1.5 bg-[#F9FAFB] px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-[#FFF8F3] group-hover:border-[#FFEADD] transition-colors duration-300">
                                                                    <item.Icon className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#C47440] transition-colors" />
                                                                    <span className="text-xs font-bold text-gray-600 group-hover:text-[#C47440] transition-colors">{item.label}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>

                                                <CardFooter className="pt-8 px-8 pb-8 mt-auto">
                                                    <Button 
                                                        className={`w-full bg-gradient-to-r ${program.gradient} text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all rounded-xl py-6 text-base font-bold`}
                                                        asChild
                                                    >
                                                        <Link href={`/programas/${program.id}`}>
                                                            Ver Detalles <ArrowRight className="h-5 w-5 ml-2" />
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
