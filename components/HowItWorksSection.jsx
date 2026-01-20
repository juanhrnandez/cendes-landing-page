'use client';

import { useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { howItWorksSteps } from '@/lib/constants';
import { GraduationCap, Users, Theater, BookOpen, Award, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorksSection() {
    const [activeStep, setActiveStep] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const iconMap = {
        GraduationCap,
        Users,
        Theater,
        BookOpen,
        Award,
    };

    // Auto-advance steps
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
        <section id="how-it-works" className="section-cendes bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
            <div className="container-cendes">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 mb-6">
                            <Theater className="h-4 w-4 text-purple-600" />
                            <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">
                                Proceso Simple
                            </span>
                        </div>
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                            ¿Cómo Funciona?
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600 leading-relaxed">
                            Un proceso efectivo en 5 pasos para transformar tu comunidad escolar
                        </p>
                    </div>
                </AnimatedSection>

                {/* Desktop: Interactive Horizontal Timeline */}
                <div className="hidden lg:block">
                    <div className="relative max-w-6xl mx-auto">
                        {/* Connecting Line with Progress */}
                        <div className="absolute left-0 right-0 top-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
                                initial={{ width: '0%' }}
                                animate={{ width: `${((activeStep + 1) / howItWorksSteps.length) * 100}%` }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            />
                        </div>

                        {/* Steps */}
                        <div className="relative grid grid-cols-5 gap-4 mb-12">
                            {howItWorksSteps.map((step, index) => {
                                const Icon = iconMap[step.icon];
                                const isActive = index === activeStep;
                                const isPast = index < activeStep;
                                
                                return (
                                    <div 
                                        key={index}
                                        className="flex flex-col items-center cursor-pointer"
                                        onClick={() => {
                                            setActiveStep(index);
                                            setIsAutoPlaying(false);
                                        }}
                                        onMouseEnter={() => setIsAutoPlaying(false)}
                                        onMouseLeave={() => setIsAutoPlaying(true)}
                                    >
                                        {/* Icon Circle with animations */}
                                        <motion.div 
                                            className={`group relative z-10 mb-6 flex h-24 w-24 items-center justify-center rounded-full shadow-xl transition-all duration-500 ${
                                                isActive 
                                                    ? 'bg-gradient-to-br from-purple-600 to-cyan-600 scale-110' 
                                                    : isPast 
                                                    ? 'bg-gradient-to-br from-purple-500 to-cyan-500'
                                                    : 'bg-gray-300'
                                            }`}
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            animate={isActive ? { 
                                                scale: [1.1, 1.15, 1.1],
                                            } : {}}
                                            transition={{ 
                                                duration: 1.5, 
                                                repeat: isActive ? Infinity : 0,
                                                ease: 'easeInOut'
                                            }}
                                        >
                                            <Icon className={`h-12 w-12 transition-all duration-300 ${
                                                isActive || isPast ? 'text-white' : 'text-gray-500'
                                            }`} />

                                            {/* Step Number Badge */}
                                            <div className={`absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-lg ring-2 ring-white transition-all duration-300 ${
                                                isActive 
                                                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-110' 
                                                    : isPast
                                                    ? 'bg-purple-500 text-white'
                                                    : 'bg-white text-gray-400'
                                            }`}>
                                                {index + 1}
                                            </div>

                                            {/* Animated rings for active step */}
                                            {isActive && (
                                                <>
                                                    <motion.div 
                                                        className="absolute inset-0 rounded-full border-4 border-purple-400"
                                                        animate={{ 
                                                            scale: [1, 1.3, 1],
                                                            opacity: [0.5, 0, 0.5]
                                                        }}
                                                        transition={{ 
                                                            duration: 2, 
                                                            repeat: Infinity,
                                                            ease: 'easeInOut'
                                                        }}
                                                    />
                                                    <motion.div 
                                                        className="absolute inset-0 rounded-full border-4 border-cyan-400"
                                                        animate={{ 
                                                            scale: [1, 1.4, 1],
                                                            opacity: [0.5, 0, 0.5]
                                                        }}
                                                        transition={{ 
                                                            duration: 2, 
                                                            repeat: Infinity,
                                                            ease: 'easeInOut',
                                                            delay: 0.5
                                                        }}
                                                    />
                                                </>
                                            )}

                                            {/* Checkmark for completed steps */}
                                            {isPast && (
                                                <motion.div 
                                                    className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 shadow-lg"
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                >
                                                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className={`text-center text-lg font-bold transition-all duration-300 ${
                                            isActive ? 'text-purple-600 scale-105' : 'text-gray-700'
                                        }`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Active Step Detail Card */}
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-purple-50/50 to-cyan-50/50 p-8 shadow-2xl border border-purple-100"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    {(() => {
                                        const Icon = iconMap[howItWorksSteps[activeStep].icon];
                                        return (
                                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 shadow-lg">
                                                <Icon className="h-8 w-8 text-white" />
                                            </div>
                                        );
                                    })()}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {howItWorksSteps[activeStep].title}
                                        </h3>
                                        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold">
                                            Paso {activeStep + 1} de {howItWorksSteps.length}
                                        </span>
                                    </div>
                                    <p className="text-xl text-gray-700 leading-relaxed">
                                        {howItWorksSteps[activeStep].description}
                                    </p>
                                </div>
                                {activeStep < howItWorksSteps.length - 1 && (
                                    <button
                                        onClick={() => setActiveStep((prev) => prev + 1)}
                                        className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                )}
                            </div>
                            
                            {/* Progress indicator */}
                            <div className="mt-6 flex gap-2">
                                {howItWorksSteps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveStep(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === activeStep 
                                                ? 'w-12 bg-gradient-to-r from-purple-600 to-cyan-600' 
                                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Mobile: Vertical Timeline */}
                <div className="lg:hidden">
                    <div className="relative space-y-8">
                        {/* Vertical Line */}
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                                className="w-full bg-gradient-to-b from-purple-600 via-pink-600 to-cyan-600"
                                initial={{ height: '0%' }}
                                animate={{ height: `${((activeStep + 1) / howItWorksSteps.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>

                        {/* Steps */}
                        {howItWorksSteps.map((step, index) => {
                            const Icon = iconMap[step.icon];
                            const isActive = index === activeStep;
                            const isPast = index < activeStep;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative flex items-start gap-6 pl-2"
                                    onClick={() => setActiveStep(index)}
                                >
                                    {/* Icon Circle */}
                                    <motion.div 
                                        className={`group relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
                                            isActive 
                                                ? 'bg-gradient-to-br from-purple-600 to-cyan-600 scale-110' 
                                                : isPast 
                                                ? 'bg-gradient-to-br from-purple-500 to-cyan-500'
                                                : 'bg-gray-300'
                                        }`}
                                        animate={isActive ? { scale: [1.1, 1.2, 1.1] } : {}}
                                        transition={{ duration: 1.5, repeat: isActive ? Infinity : 0 }}
                                    >
                                        <Icon className={`h-6 w-6 ${isActive || isPast ? 'text-white' : 'text-gray-500'}`} />

                                        {/* Step Number Badge */}
                                        <div className={`absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold shadow ring-2 ring-white ${
                                            isActive || isPast ? 'bg-purple-600 text-white' : 'bg-white text-gray-400'
                                        }`}>
                                            {index + 1}
                                        </div>

                                        {/* Checkmark for past steps */}
                                        {isPast && (
                                            <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </motion.div>

                                    {/* Content Card */}
                                    <motion.div 
                                        className={`flex-1 rounded-2xl p-6 shadow-md transition-all duration-300 ${
                                            isActive 
                                                ? 'bg-gradient-to-br from-purple-50 to-cyan-50 shadow-xl border-2 border-purple-200' 
                                                : 'bg-white border border-gray-200'
                                        }`}
                                    >
                                        <h3 className={`mb-2 text-lg font-bold ${isActive ? 'text-purple-600' : 'text-gray-900'}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
