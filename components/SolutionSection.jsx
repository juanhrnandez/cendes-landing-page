'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Theater, Users, Sparkles } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section id="solution" className="relative overflow-hidden section-cendes bg-gradient-to-br from-[#F3E8FF] via-[#FAF5FF] to-[#EDE9FE]">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-primary)] opacity-5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--color-accent)] opacity-5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="container-cendes relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Left Column: Text Content */}
                    <AnimatedSection direction="left">
                        <div className="space-y-6">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[var(--color-primary)]/20 shadow-sm">
                                <Sparkles className="w-4 h-4 text-[var(--color-primary)]" />
                                <span className="text-sm font-semibold text-[var(--color-primary)]">10 años transformando vidas</span>
                            </div>

                            {/* Title with gradient */}
                            <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
                                ¿Qué es{' '}
                                <span className="gradient-text">CENDES</span>?
                            </h2>

                            {/* Description paragraphs with enhanced styling */}
                            <div className="space-y-4">
                                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                                    CENDES es el <span className="font-bold text-[var(--color-primary)]">Centro Nacional de prevención y fortalecimiento</span> ante
                                    la violencia sexual <span className="font-bold text-[var(--color-primary)]">infantil y adolescente</span> a través del arte.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                                    Durante 10 años hemos llevado <span className="font-semibold text-[var(--color-accent)]">teatro, monólogo y cine profesional</span> a más de{' '}
                                    <span className="font-bold text-[var(--color-primary)]">2,000 escuelas</span> en México y España,
                                    alcanzando a más de <span className="font-bold text-[var(--color-primary)]">100,000 personas</span>.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700 md:text-xl font-medium">
                                    No damos "pláticas aburridas". Creamos{' '}
                                    <span className="font-bold text-[var(--color-highlight)]">experiencias artísticas</span>{' '}
                                    que tocan el corazón y abren conversaciones reales.
                                </p>
                            </div>

                            {/* Enhanced Feature Cards */}
                            <div className="grid gap-5 md:grid-cols-2 pt-4">
                                {/* Arte Profesional Card */}
                                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex flex-col gap-4">
                                        {/* Animated icon container */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                            <div className="relative rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] p-3.5 w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                                <Theater className="h-6 w-6 text-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                                Arte Profesional
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Obras escritas y dirigidas por especialistas.
                                                No es teatro escolar, es teatro de calidad
                                                con mensaje de protección.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Toda la Comunidad Card */}
                                <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10 flex flex-col gap-4">
                                        {/* Animated icon container */}
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[var(--color-accent)] rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                                            <div className="relative rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] p-3.5 w-fit group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                                <Users className="h-6 w-6 text-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                                                Toda la Comunidad
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Capacitamos a docentes, familias y estudiantes.
                                                Porque la prevención se construye entre todos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Column: Enhanced Image */}
                    <AnimatedSection direction="right">
                        <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                            {/* Decorative gradient border */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-highlight)] rounded-3xl opacity-20 blur-xl animate-pulse-slow"></div>

                            {/* Image container with floating animation */}
                            <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(124,58,237,0.25)] transition-all duration-700 group">
                                <img
                                    src="/images/cendes.jpg"
                                    alt="Equipo CENDES"
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-highlight)] rounded-full opacity-10 blur-2xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-accent)] rounded-full opacity-10 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
