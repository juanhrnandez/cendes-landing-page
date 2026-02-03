'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Shield, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { statistics } from '@/lib/constants';

const icons = [AlertCircle, TrendingUp, Users, Shield];

export default function ProblemSection() {
    return (
        <section id="problem" className="pt-32 pb-48 md:py-32 bg-[#F9FAFB] relative">
             {/* Wave Divider at Top - Animated */}
             <div className="absolute top-0 left-0 right-0 w-full h-[100px] md:h-[150px] overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
                <motion.div 
                    className="absolute bottom-0 left-0 w-[200%] h-full -ml-[50%] transform rotate-180"
                    animate={{ x: [0, 50, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                >
                    <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]/50"></path>
                    </svg>
                </motion.div>
                 <motion.div 
                    className="relative w-[150%] h-full -ml-[25%] transform rotate-180"
                    animate={{ x: [0, -50, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                     <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]"></path>
                    </svg>
                 </motion.div>
            </div>

            {/* Background Gradient Orbs */}
            <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-[#B4B651]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

            <div className="container-cendes relative z-10 px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Context & Narrative */}
                    <div className="lg:col-span-5 space-y-8 sticky top-32">
                        {/* Section Tag */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-red-50 border border-red-100"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Realidad Urgente</span>
                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
                                El problema que <span className="text-[#C47440]">no podemos ignorar</span>.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed text-balance">
                                México enfrenta una crisis silenciosa en sus escuelas. La falta de educación preventiva deja a millones de estudiantes vulnerables cada año.
                            </p>
                        </motion.div>

                        <Separator className="bg-gray-100" />
                        
                        <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.2 }}
                             className="relative rounded-2xl overflow-hidden shadow-2xl group"
                        >
                            {/* Emotive Image Background */}
                            <img 
                                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?q=80&w=800&auto=format&fit=crop" 
                                alt="Estudiante en pasillo escolar" 
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-[#C47440] rounded-lg">
                                        <Shield className="h-5 w-5 text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg">La inacción cuesta vidas</h3>
                                </div>
                                <p className="text-sm text-gray-200 leading-relaxed max-w-sm">
                                    Nuestra misión es transformar estas estadísticas a través del arte y la educación emocional, brindando herramientas reales.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Statistics Grid */}
                    <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                        {statistics.map((stat, index) => {
                            const Icon = icons[index];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <Card className="h-full border-0 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_35px_-5px_rgba(196,116,64,0.15)] transition-all duration-300 group overflow-hidden bg-white/50 backdrop-blur-sm">
                                        <CardHeader className="pb-2">
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-[#C47440] transition-colors duration-300">
                                                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                                                </div>
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Dato {index + 1}</span>
                                            </div>
                                            <CardTitle className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
                                                {stat.number}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-base text-gray-600 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                                                {stat.text}
                                            </p>
                                        </CardContent>
                                        
                                        {/* Decorative Hover Line */}
                                        <div className="absolute bottom-0 left-0 h-1 bg-[#C47440] w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
