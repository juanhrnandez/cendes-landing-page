import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

export default function TerminosCondiciones() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones | CENDES</title>
        <meta name="description" content="Términos y Condiciones de uso de los servicios y programas de CENDES." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container-cendes px-6 max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-12">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 text-[#B4B651] border-[#B4B651] bg-[#B4B651]/10">
                Legal
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                Términos y Condiciones
              </h1>
              <p className="text-gray-500 text-sm">
                Última actualización: Febrero 2026
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                Bienvenido al sitio web de CENDES. Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a los siguientes términos y condiciones.
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">1. Objeto de los Servicios</h3>
              <p>
                CENDES ofrece programas educativos, talleres, obras de teatro y conferencias enfocados en la prevención del abuso sexual infantil, bullying y violencia escolar. Nuestros servicios están dirigidos principalmente a instituciones educativas, docentes, padres de familia y alumnos.
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">2. Propiedad Intelectual</h3>
              <p>
                Todo el contenido presentado en este sitio web y en nuestros programas presenciales (guiones, personajes, logotipos, materiales didácticos, diseños) es propiedad exclusiva de CENDES o cuenta con las licencias correspondientes. Queda estrictamente prohibida su reproducción, distribución o modificación sin autorización expresa por escrito.
              </p>
              <p>
                Las obras "Corazonada", "Primera Llamada", "Segunda Llamada", entre otras, son obras originales protegidas por derechos de autor.
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">3. Compromisos de la Escuela (Modelo Cadena de Protección)</h3>
              <p>
                Para las escuelas que participan bajo el modelo "Cadena de Protección" (sin costo directo para la escuela), la institución se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Otorgar las facilidades logísticas necesarias para la realización del evento.</li>
                <li>Convocar activamente a los padres de familia.</li>
                <li>Permitir el acceso al equipo de CENDES para el montaje y desmontaje.</li>
                <li>Respetar la naturaleza educativa y social del proyecto.</li>
              </ul>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">4. Cancelaciones y Reagendamientos</h3>
              <p>
                Cualquier cambio de fecha deberá solicitarse con al menos 15 días hábiles de anticipación. Cancelaciones con menos tiempo podrían incurrir en gastos administrativos dependiendo del modelo contratado.
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">5. Limitación de Responsabilidad</h3>
              <p>
                CENDES se esfuerza por mantener la exactitud de la información proporcionada. Sin embargo, no garantizamos que el sitio esté libre de errores. Los contenidos educativos son herramientas de prevención y no sustituyen terapia psicológica profesional ni asesoría legal.
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">6. Contacto</h3>
              <p>
                Para cualquier duda sobre estos términos, por favor contáctenos en a través de nuestros canales oficiales señalados en el sitio web.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
