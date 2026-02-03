'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/constants';
import { Quote, School } from 'lucide-react';
import { 
    Carousel, 
    CarouselContent, 
    CarouselItem, 
    CarouselNext, 
    CarouselPrevious,
    CarouselDotNav
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="pt-32 pb-48 md:py-32 bg-[#F9FAFB] relative">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
             
            <div className="container-cendes relative z-10 px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-gray-200 bg-gray-50 text-gray-600 uppercase tracking-widest font-bold">
                            Testimonios
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                             Lo que dicen las <br />
                            <span className="text-[#C47440]">Escuelas Protectoras</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Más de 2,000 directores han confiado en nosotros. Escucha sus experiencias reales.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto px-12">
                     <Carousel
                        opts={{
                            loop: true,
                            align: "center",
                        }}
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                                     <div className="h-full">
                                        <Card className="h-full border-0 shadow-lg bg-[#F9FAFB] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 relative group">
                                            <Quote className="absolute top-8 right-8 h-10 w-10 text-gray-200 group-hover:text-[#C47440]/20 transition-colors" />
                                            
                                            <CardContent className="p-0 flex flex-col h-full">
                                                <div className="flex-grow mb-8">
                                                    <p className="text-lg text-gray-700 italic leading-relaxed">
                                                        "{testimonial.quote}"
                                                    </p>
                                                </div>
                                                
                                                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                                                    <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                                                        <AvatarImage src={testimonial.image} className="object-cover" />
                                                        <AvatarFallback className="bg-[#C47440] text-white">
                                                            {testimonial.name.charAt(0)}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm leading-tight">{testimonial.name}</p>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <School className="h-3 w-3 text-gray-400" />
                                                            <p className="text-xs text-gray-500 font-medium">{testimonial.school}</p>
                                                        </div>
                                                         <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{testimonial.location}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                     </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-gray-200 hover:border-[#C47440] hover:text-[#C47440]" />
                        <CarouselNext className="hidden md:flex -right-12 border-gray-200 hover:border-[#C47440] hover:text-[#C47440]" />
                    </Carousel>
                </div>
            </div>

            {/* Top Wave Divider (Inverted) - Animated & Notorious */}
            <div className="absolute top-0 left-0 right-0 w-full h-[100px] md:h-[150px] overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
                {/* Back Wave */}
                <motion.div 
                    className="absolute bottom-0 left-0 w-[200%] h-full -ml-[50%] transform rotate-180"
                    animate={{ x: [20, -20, 20], scaleY: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                    <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]/50"></path>
                    </svg>
                </motion.div>

                 {/* Front Wave */}
                 <motion.div 
                    className="relative w-[150%] h-full -ml-[25%] transform rotate-180"
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                     <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]"></path>
                    </svg>
                 </motion.div>
            </div>
        </section>
    );
}
