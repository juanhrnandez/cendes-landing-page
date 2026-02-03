import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { programs } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Theater, Film, Mic, Users, CheckCircle2 } from 'lucide-react';

const getFormatIcon = (formatStr) => {
  if (formatStr.includes('Teatro')) return Theater;
  if (formatStr.includes('Cine')) return Film;
  return Mic;
};

export default function Programas() {
  return (
    <>
      <Head>
        <title>Programas Educativos | CENDES</title>
        <meta name="description" content="Conoce nuestro catálogo completo de programas de prevención para preescolar, primaria, secundaria y preparatoria." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        
        {/* Header Hero */}
        <section className="bg-[#F9FAFB] pt-32 pb-20 px-6">
          <div className="container-cendes max-w-5xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-[#C47440] text-[#C47440] uppercase tracking-widest font-bold">
                Catálogo 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Programas de <span className="text-[#C47440]">Impacto Real</span> para cada etapa
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Nuestra metodología se adapta cognitivamente a la edad de tus estudiantes. 
              No es "una plática para todos", es arte diseñado pedagógicamente.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 px-6">
          <div className="container-cendes max-w-6xl mx-auto space-y-24">
            
            {programs.map((program, index) => {
               const Icon = getFormatIcon(program.format);
               const isEven = index % 2 === 0;

               return (
                <div key={program.id} className={`flex flex-col md:flex-row gap-12 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className={`absolute top-4 ${isEven ? '-left-4' : '-right-4'} w-full h-full rounded-[2.5rem] bg-gradient-to-br ${program.gradient} opacity-20`} />
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video md:aspect-[4/3]">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                       <span className={`block h-3 w-3 rounded-full bg-gradient-to-r ${program.gradient}`} />
                       <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{program.ageRange}</span>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900">{program.title}</h2>
                    
                    <p className="text-lg text-gray-600 font-medium leading-relaxed border-l-4 border-gray-100 pl-4">
                      {program.theme}
                    </p>
                    
                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-2 text-gray-700">
                           <CheckCircle2 className="h-5 w-5 text-[#C47440]" />
                           <span>Formatos disponibles: <strong>{program.format}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                           <Users className="h-5 w-5 text-[#B4B651]" />
                           <span>Incluye guía didáctica para docentes</span>
                        </div>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-4">
                      <Button size="lg" className={`bg-gradient-to-r ${program.gradient} text-white shadow-lg rounded-full px-8`} asChild>
                        <Link href="/#contact">
                          Solicitar ahora
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="rounded-full px-8 hover:bg-gray-50 text-gray-700" asChild>
                        <Link href={`/programas/${program.id}`}>
                          Ver detalles
                        </Link>
                      </Button>
                    </div>
                  </div>

                </div>
               );
            })}

          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111827] py-20 px-6 text-center">
            <div className="container-cendes max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                    ¿No sabes cuál elegir?
                </h2>
                <p className="text-gray-400 text-lg mb-10">
                    Agenda una videollamada de 15 minutos con nuestros asesores pedagógicos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                     <Button size="lg" className="bg-[#C47440] hover:bg-[#A85F33] text-white rounded-full px-8 h-12" asChild>
                        <Link href="https://registro.cendes.org/">
                           Contactar Asesor
                        </Link>
                     </Button>
                     <Button variant="outline" size="lg" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full px-8 h-12" asChild>
                        <Link href="/">
                           Volver al Inicio
                        </Link>
                     </Button>
                </div>
            </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
