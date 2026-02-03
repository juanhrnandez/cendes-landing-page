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
        <section id="testimonials" className="py-16 md:py-20 bg-white relative overflow-hidden">
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
        </section>
    );
}
