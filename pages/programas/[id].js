import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTASection from '@/components/FinalCTASection';
import { programs } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, ArrowLeft, Calendar, Users, Clock, BookOpen, Download } from 'lucide-react';

export async function getStaticPaths() {
  const paths = programs.map((program) => ({
    params: { id: program.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const program = programs.find((p) => p.id.toString() === params.id);
  return { props: { program } };
}

export default function ProgramDetail({ program }) {
  if (!program) return null;

  return (
    <>
      <Head>
        <title>{program.title} | CENDES</title>
        <meta name="description" content={`${program.title}: ${program.theme}. Programa educativo para ${program.ageRange}.`} />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white pt-20">
        {/* Back Link */}
        <div className="container-cendes max-w-6xl mx-auto px-6 pt-8 pb-4">
            <Link href="/programas" className="inline-flex items-center text-sm text-gray-500 hover:text-[#C47440] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al catálogo
            </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 pb-16">
            <div className="container-cendes max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Content */}
                    <div className="space-y-6">
                        <Badge className={`bg-gradient-to-r ${program.gradient} text-white border-0 px-4 py-1.5`}>
                            {program.ageRange}
                        </Badge>
                        
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
                            {program.title}
                        </h1>
                        
                        <p className="text-2xl font-medium text-[#C47440]">
                            {program.theme}
                        </p>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Una experiencia educativa diseñada específicamente para abordar esta problemática con sensibilidad, arte y pedagogía adecuada para la edad.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button size="lg" className="bg-[#C47440] hover:bg-[#A05D32] text-white">
                                Solicitar Cotización
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="/#contact">
                                    Agendar Cita
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
                        <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-20 z-10 mix-blend-multiply`} />
                        <Image 
                            src={program.image} 
                            alt={program.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>

        <Separator className="my-0" />

        {/* Details Section */}
        <section className="py-20 px-6 bg-[#F9FAFB]">
            <div className="container-cendes max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Main Description */}
                <div className="md:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sobre el Programa</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            El programa <strong>{program.title}</strong> utiliza el arte y la narrativa para crear un espacio seguro donde los estudiantes pueden reflexionar y aprender sobre prevención. A diferencia de las conferencias tradicionales, nuestro formato {program.format.toLowerCase()} permite una conexión emocional que facilita el aprendizaje significativo.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Nuestro enfoque se basa en la "Cadena de Protección", asegurando que no solo el estudiante reciba la información, sino que todo su entorno (docentes y familia) esté preparado para dar soporte.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                             <CheckCircle2 className="w-5 h-5 text-[#C47440]" />
                             Objetivos de Aprendizaje
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Identificación de riesgos', 'Herramientas de autocuidado', 'Fomento de la denuncia', 'Comunicación asertiva', 'Construcción de confianza', 'Redes de apoyo'].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#C47440] mt-2.5 shrink-0" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                             <BookOpen className="w-5 h-5 text-[#C47440]" />
                             Metodología
                        </h3>
                         <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                             <p className="text-gray-600 mb-4">
                                 Este programa se implementa siguiendo nuestro modelo integral de 4 pasos:
                             </p>
                             <ol className="space-y-4">
                                 <li className="flex gap-4">
                                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF8F3] text-[#C47440] font-bold text-sm shrink-0">1</span>
                                     <div>
                                         <p className="font-semibold text-gray-900">Capacitación Docente</p>
                                         <p className="text-sm text-gray-500">Sesión previa para preparar al personal escolar.</p>
                                     </div>
                                 </li>
                                 <li className="flex gap-4">
                                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF8F3] text-[#C47440] font-bold text-sm shrink-0">2</span>
                                     <div>
                                         <p className="font-semibold text-gray-900">Sensibilización Familiar</p>
                                         <p className="text-sm text-gray-500">Webinar para padres y tutores sobre el tema.</p>
                                     </div>
                                 </li>
                                 <li className="flex gap-4">
                                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF8F3] text-[#C47440] font-bold text-sm shrink-0">3</span>
                                     <div>
                                         <p className="font-semibold text-gray-900">Intervención Artística</p>
                                         <p className="text-sm text-gray-500">Presentación de {program.format} para los alumnos.</p>
                                     </div>
                                 </li>
                                  <li className="flex gap-4">
                                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF8F3] text-[#C47440] font-bold text-sm shrink-0">4</span>
                                     <div>
                                         <p className="font-semibold text-gray-900">Materiales de Refuerzo</p>
                                         <p className="text-sm text-gray-500">Guías didácticas y posters para el aula.</p>
                                     </div>
                                 </li>
                             </ol>
                         </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Ficha Técnica</h3>
                        
                        <div className="space-y-4">
                             <div className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase">Público</p>
                                    <p className="text-sm font-medium text-gray-900">{program.ageRange}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <TheatreIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase">Formato</p>
                                    <p className="text-sm font-medium text-gray-900">{program.format}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pb-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                                <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <p className="text-xs font-bold text-gray-500 uppercase">Duración</p>
                                    <p className="text-sm font-medium text-gray-900">60 - 90 minutos</p>
                                </div>
                            </div>
                            
                            <Button className="w-full bg-[#18181B] text-white hover:bg-gray-800 shadow-md">
                                <Download className="w-4 h-4 mr-2" /> Descargar Folleto
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
}

// Icon helper
function TheatreIcon(props) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M2 10s3-3 3-8" />
        <path d="M22 10s-3-3-3-8" />
        <path d="M10 2c0 4.418-2.239 8-5 8" />
        <path d="M14 2c0 4.418 2.239 8 5 8" />
        <path d="M2 10s0 2 2 2c.33 0 .68-.076 1-.226V17c0 1.105 1.79 2 4 2s4-.895 4-2v-5.226c.32.15.67.226 1 .226s.68-.076 1-.226V17c0 1.105 1.79 2 4 2s4-.895 4-2v-5.226c.32.15.67.226 1 .226 2 0 2-2 2-2" />
        </svg>
    )
}
