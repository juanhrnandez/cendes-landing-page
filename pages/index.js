'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  Shield,
  GraduationCap,
  Theater,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronDown
} from 'lucide-react';

import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Accordion from '@/components/Accordion';
import { programs, statistics, faqs, testimonials, howItWorksSteps, recognitions } from '@/lib/constants';

export default function Home() {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgramIndex((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextProgram = () => {
    setCurrentProgramIndex((prev) => (prev + 1) % programs.length);
  };

  const prevProgram = () => {
    setCurrentProgramIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="container-cendes relative z-10 px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Protege a tu comunidad escolar<br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                a través del arte
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">
              Prevención profesional de violencia sexual, bullying y acoso
              para niñas, niños y adolescentes            </p>
            <Button variant="large" size="xlarge" href="/registro">
              Descubre qué programa es para tu escuela
            </Button>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90 md:text-xl lg:text-2xl">
              ✓ Solo 2 minutos  ✓ Sin compromiso  ✓ Propuesta personalizada
            </p>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Reconocidos y apoyados por:
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <img src="/images/sipinna-logo.png" alt="SIPINNA" className="h-12 object-contain opacity-90" />
              <img src="/images/dif-logo.png" alt="DIF Nacional" className="h-12 object-contain opacity-90" />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section-cendes bg-white">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              La realidad que no podemos ignorar
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              Datos que no podemos ignorar
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white p-8 text-center shadow-lg transition-transform hover:scale-105">
                  <div className="mb-4 text-5xl font-extrabold text-[var(--color-highlight)] md:text-6xl">
                    {stat.number}
                  </div>
                  <p className="text-base font-medium text-gray-700 md:text-lg">
                    {stat.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section-cendes bg-[var(--color-background-lavender)]">
        <div className="container-cendes">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
                ¿Qué es CENDES?              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                CENDES es el Centro Nacional de prevención y fortalecimiento ante
                la violencia sexual <span className="font-bold text-[var(--color-primary)]">infantil y adolescente</span> a través del arte.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                Durante 10 años hemos llevado teatro, monólogo y cine
                profesional a más de 2,000 escuelas en México y España,
                alcanzando a más de 100,000 personas.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700 md:text-xl">
                No damos "pláticas aburridas". Creamos experiencias artísticas
                que tocan el corazón y abren conversaciones reales entre
                estudiantes, familias y docentes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[var(--color-primary)] p-3">
                    <Theater className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Arte Profesional</h3>
                    <p className="text-gray-700">
                      Obras escritas y dirigidas por especialistas.
                      No es teatro escolar, es teatro de calidad
                      con mensaje de protección.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[var(--color-accent)] p-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Toda la Comunidad</h3>
                    <p className="text-gray-700">
                      Capacitamos a docentes, familias y estudiantes.
                      Porque la prevención se construye entre todos.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src="/images/cendes-team.jpg"
                  alt="Equipo CENDES"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-[var(--color-primary)] p-6 text-white shadow-xl">
                  <div className="text-4xl font-bold">+100k</div>
                  <div className="text-sm">personas impactadas</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-cendes bg-white">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              ¿Cómo funciona la Campaña "Te veo, te creo, te escucho"?
            </h2>
            <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              Un proceso integral en 5 etapas que transforma tu comunidad escolar
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Desktop: Horizontal */}
            <div className="hidden lg:block">
              <div className="relative flex items-center justify-between">
                {/* Connecting Line */}
                <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]" />

                {howItWorksSteps.map((step, index) => {
                  const Icon = {
                    GraduationCap,
                    Users,
                    Theater,
                    BookOpen,
                    Award
                  }[step.icon];

                  return (
                    <AnimatedSection key={index} delay={index * 0.15} className="relative z-10">
                      <div className="flex flex-col items-center">
                        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-xl">
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="mb-2 text-center text-xl font-bold">{step.title}</h3>
                        <p className="max-w-[200px] text-center text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Vertical */}
            <div className="lg:hidden">
              <div className="relative space-y-8">
                {/* Connecting Line */}
                <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)]" />

                {howItWorksSteps.map((step, index) => {
                  const Icon = {
                    GraduationCap,
                    Users,
                    Theater,
                    BookOpen,
                    Award
                  }[step.icon];

                  return (
                    <AnimatedSection key={index} delay={index * 0.1} className="relative flex items-start gap-6">
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-cendes bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              Nuestros Programas
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              5 programas especializados por edad y temática
            </p>
          </AnimatedSection>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentProgramIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl"
              >
                <Card {...programs[currentProgramIndex]} />
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevProgram}
                className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-[var(--color-primary)] hover:text-white"
                aria-label="Programa anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {programs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProgramIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all ${index === currentProgramIndex
                      ? 'w-8 bg-[var(--color-primary)]'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Ir a programa ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextProgram}
                className="rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-[var(--color-primary)] hover:text-white"
                aria-label="Siguiente programa"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <p className="mt-4 text-center text-lg text-gray-600">
              No importa dónde esté tu escuela o cuántos alumnos tengas.
              Tenemos opciones para TODA la República Mexicana.            </p>

            <div className="mt-12 text-center">
              <Button variant="primary" size="large" href="/registro">
                Descubre qué programa es para tu escuela
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-cendes bg-[var(--color-background-dark)]">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Lo que dicen las escuelas que ya son protectoras
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-white/80 md:text-xl">
              Testimonios reales de directores escolares
            </p>
          </AnimatedSection>

          {/* Video Placeholder */}
          <AnimatedSection>
            <div className="mx-auto mb-12 max-w-4xl">
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                <video
                  controls
                  className="h-full w-full object-cover"
                  poster="/images/testimonial-poster.jpg"
                >
                  <source src="/videos/testimonials.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </AnimatedSection>

          {/* Testimonial Carousel */}
          <div className="relative">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl"
            >
              <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-12">
                <div className="mb-6 text-6xl text-[var(--color-accent)]">"</div>
                <p className="mb-6 text-xl italic leading-relaxed text-white md:text-2xl">
                  {testimonials[currentTestimonialIndex].quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]" />
                  <div>
                    <p className="font-bold text-white">
                      {testimonials[currentTestimonialIndex].name}
                    </p>
                    <p className="text-sm text-white/80">
                      {testimonials[currentTestimonialIndex].school}
                    </p>
                    <p className="text-sm text-white/60">
                      {testimonials[currentTestimonialIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`h-3 w-3 rounded-full transition-all ${index === currentTestimonialIndex
                      ? 'w-8 bg-white'
                      : 'bg-white/30 hover:bg-white/50'
                      }`}
                    aria-label={`Ir a testimonio ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20"
                aria-label="Siguiente testimonio"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section id="reach" className="section-cendes bg-white">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              Nuestro Alcance
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              10 años protegiendo infancias en México y el mundo
            </p>
          </AnimatedSection>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <img
                  src="/images/mexico-map.svg"
                  alt="Mapa de México"
                  className="w-full"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="rounded-2xl bg-white p-6 shadow-2xl">
                    <div className="text-5xl font-bold text-[var(--color-primary)]">+100k</div>
                    <div className="text-sm font-semibold text-gray-600">Personas Impactadas</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold md:text-3xl">Reconocimientos Oficiales</h3>
                <ul className="space-y-4">
                  {recognitions.map((recognition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="h-6 w-6 flex-shrink-0 text-[var(--color-highlight)]" />
                      <span className="text-lg text-gray-700">{recognition}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 text-center">
                    <div className="text-4xl font-bold text-[var(--color-primary)]">2,000+</div>
                    <div className="text-sm font-semibold text-gray-600">Escuelas</div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 text-center">
                    <div className="text-4xl font-bold text-[var(--color-accent)]">10</div>
                    <div className="text-sm font-semibold text-gray-600">Años de experiencia</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section id="options" className="section-cendes bg-gradient-to-br from-gray-50 to-white">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              Opciones para tu escuela
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              Opciones para tu escuela, sin importar dónde estés
            </p>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="h-full rounded-2xl border-4 border-[var(--color-primary)] bg-white p-8 shadow-xl transition-transform hover:scale-105 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[var(--color-primary)] p-4">
                    <Theater className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">CDMX</h3>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-[var(--color-primary)]">
                  ¿Tu escuela está en CDMX?
                </h4>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">✓</span>
                    <span>Teatro en tu escuela</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">✓</span>
                    <span>Monólogo en tu escuela (desde SIN COSTO*)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">✓</span>
                    <span>Teatro en el teatro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-primary)]">✓</span>
                    <span> Monólogo en el teatro</span>
                  </li>
                </ul>
                <Button variant="primary" size="large" href="/registro" className="w-full">
                  Solicitar información
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="h-full rounded-2xl border-4 border-[var(--color-accent)] bg-white p-8 shadow-xl transition-transform hover:scale-105 md:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="rounded-full bg-[var(--color-accent)] p-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">Nacional</h3>
                </div>
                <h4 className="mb-4 text-xl font-semibold text-[var(--color-accent)]">
                  ¿Tu escuela está en otro estado?
                </h4>
                <ul className="mb-8 space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)]">✓</span>
                    <span>Cine educativo (muy accesible)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)]">✓</span>
                    <span>Formatos presenciales con viáticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)]">✓</span>
                    <span>Mismo impacto, adaptado a tu ubicación</span>
                  </li>
                </ul>
                <Button variant="accent" size="large" href="/registro" className="w-full">
                  Solicitar información
                </Button>
              </div>

            </AnimatedSection>
          </div><p className="text-center text-lg text-gray-600">
            Descubre exactamente qué opciones aplican para TU escuela
            en nuestro registro personalizado.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-cendes bg-white">
        <div className="container-cendes">
          <AnimatedSection>
            <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
              Preguntas Frecuentes
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 md:text-xl">
              Resolvemos tus dudas
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-4xl">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Accordion question={faq.question} answer={faq.answer} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="mb-6 text-lg text-gray-600">
              ¿Tienes más preguntas? Estamos aquí para ayudarte
            </p>
            <Button variant="secondary" size="large" href="/registro">
              Contactar a un asesor
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="section-cendes bg-gradient-to-r from-[var(--color-primary)] via-purple-600 to-[var(--color-accent)]">
        <div className="container-cendes text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Tu comunidad escolar<br />
              merece estar protegida
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90 md:text-2xl">
              Más de 2,000 escuelas ya lo hicieron. <br />El momento es ahora.
            </p>
            <Button variant="large" size="xlarge" href="/registro">
              Descubre qué programa es para tu escuela
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="mt-16">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Heart className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-2xl font-bold text-white">2 minutos</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Shield className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-2xl font-bold text-white">Sin compromiso</h3>
              </div>
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <Users className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-2xl font-bold text-white">Respuesta en 24 horas</h3>
              </div>
            </div>
          </AnimatedSection>

          {/* Alternative Contact Section */}
          <AnimatedSection delay={0.5} className="mt-16">
            <div className="mx-auto max-w-2xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-10">
              <h3 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
                ¿Prefieres hablar directamente?
              </h3>
              <div className="space-y-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-6 w-6 text-[var(--color-accent)]" />
                  <a
                    href="mailto:carolina.lopez@cendes.org"
                    className="text-lg text-white transition-colors hover:text-[var(--color-accent)] md:text-xl"
                  >
                    carolina.lopez@cendes.org
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-6 w-6 text-[var(--color-accent)]" />
                  <a
                    href="tel:+525527882274"
                    className="text-lg text-white transition-colors hover:text-[var(--color-accent)] md:text-xl"
                  >
                    55 2788 2274
                  </a>
                </div>
                <div className="pt-4">
                  <a
                    href="https://wa.me/525527882274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition-all hover:bg-green-600 hover:scale-105"
                  >
                    💬 WhatsApp directo
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-background-dark)] py-16 text-white">
        <div className="container-cendes">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Info */}
            <div>
              <h3 className="mb-4 text-2xl font-bold">CENDES</h3>
              <p className="mb-4 text-white/80">
                Centro Nacional de Prevención y
                Fortalecimiento ante la Violencia
                Sexual Infantil y Adolescente <br />
                "Donde el arte se convierte en protección"
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/fundacioncendes" className="transition-colors hover:text-[var(--color-accent)]" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/fundacioncendes" className="transition-colors hover:text-[var(--color-accent)]" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Column 2: Programs */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Programas</h3>
              <ul className="space-y-2">
                {programs.map((program) => (
                  <li key={program.id}>
                    <a href="/registro" className="text-white/80 transition-colors hover:text-white">
                      {program.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mb-4 text-white/80">
                Exponer lo que se trata cada una de ellas              </p>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Contacto</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                  <div>
                    <p className="text-white/80">55 2788 2274</p>
                    <a
                      href="https://wa.me/525527882274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-accent)] hover:underline"
                    >
                      WhatsApp directo
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                  <a href="mailto:contacto@cendes.org.mx" className="text-white/80 hover:text-white">
                    carolina.lopez@cendes.com.mx
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-[var(--color-accent)]" />
                  <p className="text-white/80">Ciudad de México, México</p>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white/80 transition-colors hover:text-white">
                    Aviso de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 transition-colors hover:text-white">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/80 transition-colors hover:text-white">
                    Preguntas Frecuentes
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} CENDES - Centro Nacional de Prevención y Fortalecimiento ante la Violencia Sexual Infantil y Adolescente Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
