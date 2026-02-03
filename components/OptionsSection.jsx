'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Theater, Globe, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function OptionsSection() {
    return (
        <section id="options" className="py-16 md:py-20 bg-gradient-to-br from-white via-[#FDFBF7] to-white relative overflow-hidden">
             {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C47440]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#B4B651]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container-cendes relative z-10 px-6">
                
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                         <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-[#C47440]/30 bg-[#C47440]/10 text-[#C47440] uppercase tracking-widest font-bold">
                            Modalidades
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Llevamos el programa a <br />
                            <span className="text-[#C47440]">donde estés</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Adaptamos nuestra metodología a las necesidades de tu institución, sin importar su ubicación.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    
                    {/* Option 1: CDMX */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                         <Card className="h-full border-2 border-[#C47440]/10 shadow-2xl bg-white hover:border-[#C47440]/30 transition-all duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Theater className="w-40 h-40 text-[#C47440]" />
                             </div>
                             
                             <CardHeader className="pb-4">
                                <div className="p-3 w-14 h-14 rounded-2xl bg-[#C47440]/10 flex items-center justify-center mb-6">
                                    <MapPin className="h-7 w-7 text-[#C47440]" />
                                </div>
                                <CardTitle className="text-3xl font-bold text-gray-900">CDMX y Área Metro</CardTitle>
                                <CardDescription className="text-lg font-medium text-gray-500">
                                    Experiencia presencial completa
                                </CardDescription>
                             </CardHeader>
                             
                             <CardContent className="space-y-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#C47440] shrink-0" />
                                        <span className="text-gray-700 font-medium">Teatro profesional en tu escuela</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#C47440] shrink-0" />
                                        <span className="text-gray-700 font-medium">Monólogos de alto impacto</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#C47440] shrink-0" />
                                        <span className="text-gray-700 font-medium">Opciones sin costo (Sujeto a disp.)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#C47440] shrink-0" />
                                        <span className="text-gray-700 font-medium">Funciones exclusivas en teatro</span>
                                    </li>
                                </ul>
                             </CardContent>

                             <CardFooter className="pt-8">
                                <Button className="w-full bg-[#C47440] hover:bg-[#A85F33] text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                                    <Link href="https://registro.cendes.org/">
                                        Agendar para CDMX <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                             </CardFooter>
                         </Card>
                    </motion.div>

                    {/* Option 2: Interior */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                         <Card className="h-full border-2 border-[#B4B651]/10 shadow-2xl bg-white hover:border-[#B4B651]/30 transition-all duration-300 relative overflow-hidden group">
                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Globe className="w-40 h-40 text-[#B4B651]" />
                             </div>
                             
                             <CardHeader className="pb-4">
                                <div className="p-3 w-14 h-14 rounded-2xl bg-[#B4B651]/10 flex items-center justify-center mb-6">
                                    <Globe className="h-7 w-7 text-[#9A9B42]" />
                                </div>
                                <CardTitle className="text-3xl font-bold text-gray-900">Interior de la República</CardTitle>
                                <CardDescription className="text-lg font-medium text-gray-500">
                                    Cobertura nacional flexible
                                </CardDescription>
                             </CardHeader>
                             
                             <CardContent className="space-y-6">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#9A9B42] shrink-0" />
                                        <span className="text-gray-700 font-medium">Giras escolares presenciales</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#9A9B42] shrink-0" />
                                        <span className="text-gray-700 font-medium">Funciones virtuales interactivas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#9A9B42] shrink-0" />
                                        <span className="text-gray-700 font-medium">Capacitación docente especializada</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-[#9A9B42] shrink-0" />
                                        <span className="text-gray-700 font-medium">Material digital de prevención</span>
                                    </li>
                                </ul>
                             </CardContent>

                             <CardFooter className="pt-8">
                                <Button className="w-full bg-[#B4B651] hover:bg-[#8F9140] text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                                    <Link href="https://registro.cendes.org/">
                                        Cotizar Foráneo <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                             </CardFooter>
                         </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
