'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden pt-24 pb-48 lg:pt-32" style={{ backgroundColor: 'rgb(247, 241, 238)' }}>
            
            <div className="container relative z-10 px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    
                    {/* Left Column: Content */}
                    <motion.div
                        className="text-center lg:text-left space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="space-y-3">
                            <h1 className="text-3xl font-bold leading-tight text-[#1A1A1A] sm:text-4xl md:text-5xl tracking-tight">
                                Protegemos a la infancia<br/>
                                <span className="text-[#635E40]">a través del arte</span>
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 font-medium">
                                Programas profesionales de prevención para escuelas
                            </p>
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="pt-2"
                        >
                            <Button 
                                size="lg"
                                className="text-white px-10 py-7 text-xl rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-semibold"
                                style={{ backgroundColor: 'rgb(99, 94, 64)' }}
                            >
                                Conocer más
                            </Button>
                        </motion.div>

                        {/* Stats Grid - Adjusted for column width */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
                        >
                            <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#D0C29D]/30 shadow-sm transition-all hover:bg-white/80">
                                <div className="p-3 bg-[#D0C29D]/20 rounded-full text-[#635E40] mb-2">
                                    <Shield className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-extrabold text-[#635E40]">10+</div>
                                <p className="text-sm font-semibold text-gray-700 text-center lg:text-left">Años de experiencia</p>
                            </div>
                            <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#D0C29D]/30 shadow-sm transition-all hover:bg-white/80">
                                <div className="p-3 bg-[#D0C29D]/20 rounded-full text-[#635E40] mb-2">
                                    <Users className="h-6 w-6" />
                                </div>
                                <div className="text-3xl font-extrabold text-[#635E40]">+500k</div>
                                <p className="text-sm font-semibold text-gray-700 text-center lg:text-left">Niñas, niños y adolescentes impactados</p>
                            </div>
                            <div className="flex flex-col items-center lg:items-start space-y-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-[#D0C29D]/30 shadow-sm transition-all hover:bg-white/80">
                                <div className="p-3 bg-[#D0C29D]/20 rounded-full text-[#635E40] mb-2">
                                    <Award className="h-6 w-6" />
                                </div>
                                <div className="text-xl font-extrabold text-[#635E40] mt-1 mb-1">Reconocidos</div>
                                <p className="text-sm font-semibold text-gray-700 text-center lg:text-left">por SIPINNA y el DIF</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="relative h-[400px] lg:h-[600px] w-full hidden lg:block"
                    >
                         {/* Abstract shape or container for image */}
                         <div className="absolute inset-0 bg-[#D0C29D] rounded-tl-[100px] rounded-br-[100px] transform rotate-3 opacity-20 z-0"></div>
                         <div className="absolute inset-0 overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-2xl z-10 border-4 border-white">
                            <Image 
                                src="/images/hero-cendes.jpg" 
                                alt="CENDES Impacto Social" 
                                fill
                                className="object-cover"
                                priority
                            />
                         </div>
                    </motion.div>
                </div>
            </div>

            {/* Waves Container */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-0 overflow-hidden">
                <svg className="relative block w-[200%] -ml-[50%] h-[200px] sm:h-[250px] md:h-[300px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    
                    {/* Layer 1 (Back): Darkest Wave rgb(183, 167, 143) - Top band */}
                    <motion.path 
                        fill="rgb(183, 167, 143)" 
                        fillOpacity="1" 
                        d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,202.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{ x: ["0px", "200px", "0px"] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    />

                    {/* Layer 2 (Middle): Medium Wave rgb(208, 194, 157) - Middle band */}
                    <motion.path 
                        fill="rgb(208, 194, 157)" 
                        fillOpacity="1" 
                        d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,176C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{ x: ["200px", "0px", "200px"] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                    />

                    {/* Layer 3 (Front): Light beige wave rgb(220, 205, 180) - Bottom band */}
                    <motion.path 
                        fill="rgb(220, 205, 180)" 
                        fillOpacity="1" 
                        d="M0,224L48,234.7C96,245,192,267,288,261.3C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{ x: ["0px", "-200px", "0px"] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
                    />
                </svg>
            </div>
        </section>
    );
}
