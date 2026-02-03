'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { howItWorksSteps } from '@/lib/constants';
import { GraduationCap, Users, Theater, BookOpen, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const iconMap = {
    GraduationCap,
    Users,
    Theater,
    BookOpen,
    Award,
};

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
        }, 4000); // 4 seconds per step
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Manual interaction pauses auto-play
    const handleStepClick = (index) => {
        setActiveStep(index);
        setIsAutoPlaying(false);
    };

    return (
        <section id="how-it-works" className="pt-32 pb-48 md:py-32 bg-[#F9FAFB] relative">
             {/* Wave Divider at Top - Animated */}
             <div className="absolute top-0 left-0 right-0 w-full h-[100px] md:h-[150px] overflow-hidden leading-none z-20 pointer-events-none -translate-y-[99%]">
                <motion.div 
                    className="absolute bottom-0 left-0 w-[200%] h-full -ml-[50%] transform rotate-180"
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                >
                    <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]/50"></path>
                    </svg>
                </motion.div>
                 <motion.div 
                    className="relative w-[150%] h-full -ml-[25%] transform rotate-180"
                    animate={{ x: [20, -20, 20] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                     <svg className="block w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#F9FAFB]"></path>
                    </svg>
                 </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-[#F9FAFB]" />
            <div className="absolute right-0 top-40 h-[400px] w-[400px] bg-[#B4B651]/5 rounded-full blur-[100px]" />
            <div className="absolute left-0 bottom-40 h-[400px] w-[400px] bg-[#C47440]/5 rounded-full blur-[100px]" />

            <div className="container-cendes relative z-10 px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                         <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 border border-gray-200 shadow-sm mb-6">
                            <span className="flex h-2 w-2 relative">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-[#B4B651] opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B4B651]"></span>
                            </span>
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                                Metodología Probada
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Implementación simple, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C47440] to-[#A85F33]">resultados profundos.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Diseñamos un proceso de 5 pasos que blinda a tu comunidad. <br className="hidden md:block"/>
                            <span className="text-sm text-gray-400 mt-2 block">(Haz clic en cada paso para ver detalles)</span>
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Timeline Container */}
                <div className="relative max-w-5xl mx-auto">
                    
                    {/* Progress Bar (Desktop) */}
                    <div className="hidden lg:block absolute top-[48px] left-[60px] right-[60px] h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                            className="h-full bg-gradient-to-r from-[#C47440] to-[#B4B651]"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(activeStep / (howItWorksSteps.length - 1)) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Steps Row */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8 mb-12">
                        {howItWorksSteps.map((step, index) => {
                            const Icon = iconMap[step.icon];
                            const isActive = index === activeStep;
                            const isPast = index < activeStep;

                            return (
                                <div 
                                    key={index} 
                                    className="flex flex-col items-center relative z-10 cursor-pointer group"
                                    onClick={() => handleStepClick(index)}
                                >
                                    {/* Icon Circle */}
                                    <div className={cn(
                                        "h-24 w-24 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg border relative mb-4",
                                        isActive 
                                            ? "bg-[#C47440] border-[#C47440] text-white scale-110 shadow-xl shadow-[#C47440]/20" 
                                            : isPast 
                                                ? "bg-white border-[#B4B651] text-[#B4B651]" 
                                                : "bg-white border-gray-100 text-gray-300 hover:border-gray-200"
                                    )}>
                                         {/* Ripple effect for active */}
                                        {isActive && (
                                            <span className="absolute inset-0 rounded-2xl ring-2 ring-[#C47440] ring-offset-2 animate-pulse" />
                                        )}
                                        
                                        <Icon className="h-10 w-10 relative z-10 transition-transform duration-300" strokeWidth={1.5} />
                                        
                                        {/* Number Badge */}
                                        <div className={cn(
                                            "absolute -top-3 right-1/2 translate-x-[24px] z-20 h-6 w-6 rounded-full text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm transition-colors",
                                            isActive || isPast ? "bg-[#B4B651] text-white" : "bg-gray-200 text-gray-500"
                                        )}>
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Label (Always visible on Desktop) */}
                                    <span className={cn(
                                        "text-sm font-bold transition-colors duration-300 hidden md:block",
                                        isActive ? "text-[#C47440]" : "text-gray-400 group-hover:text-gray-600"
                                    )}>
                                        {step.title}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Active Step Details Card */}
                    <div className="max-w-2xl mx-auto min-h-[180px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="border-0 shadow-xl bg-white relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#C47440]" />
                                    {/* Abstract background for card */}
                                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#FFF8F3] to-transparent opacity-50" />
                                    
                                    <CardContent className="p-0 grid md:grid-cols-3">
                                        {/* Left Side: Illustrative Image (New) */}
                                        <div className="hidden md:block h-full relative overflow-hidden bg-gray-100">
                                             <img 
                                                src={`https://images.unsplash.com/photo-${
                                                    activeStep === 0 ? '1509062522246-3755977927d7' : // Docentes (clase)
                                                    activeStep === 1 ? '1542037104857-ffbb0b9155fb' : // Familias (familia unida)
                                                    activeStep === 2 ? '1503095396549-807759245b35' : // Función (escenario/luces)
                                                    activeStep === 3 ? '1497633762265-9d179a990aa6' : // Materiales (libros/educación)
                                                    '1544725176-7c40e5a71c5e'  // Reconocimiento (escuela éxito)
                                                }?q=80&w=600&h=600&auto=format&fit=crop`}
                                                alt={howItWorksSteps[activeStep].title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                             />
                                             <div className="absolute inset-0 bg-[#C47440]/10 mix-blend-multiply" />
                                        </div>

                                        {/* Right Side: Content */}
                                        <div className="col-span-2 p-8 md:p-10 flex flex-col justify-center text-center md:text-left">
                                            <div className="bg-[#FFF8F3] p-4 rounded-full mb-4 md:mb-0 inline-flex md:hidden mx-auto">
                                                {/* Mobile only icon showing current step */}
                                                {(() => {
                                                    const ActiveIcon = iconMap[howItWorksSteps[activeStep].icon];
                                                    return <ActiveIcon className="h-8 w-8 text-[#C47440]" />;
                                                })()}
                                            </div>
                                            
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
                                                    {howItWorksSteps[activeStep].title}
                                                </h3>
                                                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                                                    {howItWorksSteps[activeStep].description}
                                                </p>
                                            </div>

                                            <div className="hidden md:flex items-center gap-2 mt-6 text-[#C47440] font-bold text-sm tracking-wide uppercase">
                                                <span className="w-8 h-px bg-[#C47440]"></span>
                                                Paso 0{activeStep + 1}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom Note */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#E5F6E8] border border-[#CDEED3] text-[#2A6E3B]">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="text-sm font-semibold">Tiempo total de implementación: 2 a 4 semanas</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

