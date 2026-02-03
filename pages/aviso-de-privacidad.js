import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';

export default function AvisoPrivacidad() {
  return (
    <>
      <Head>
        <title>Aviso de Privacidad | CENDES</title>
        <meta name="description" content="Aviso de Privacidad de CENDES. Conoce cómo protegemos y utilizamos tus datos personales conforme a la ley." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="container-cendes px-6 max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 mb-12">
            <div className="mb-8">
              <Badge variant="outline" className="mb-4 text-[#C47440] border-[#C47440] bg-[#C47440]/10">
                Legal
              </Badge>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                Aviso de Privacidad
              </h1>
              <p className="text-gray-500 text-sm">
                Última actualización: Febrero 2026
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none">
              <p>
                <strong>CENTRO DE DESARROLLO Y EDUCACIÓN SOCIAL (CENDES)</strong>, con domicilio en Ciudad de México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">¿Para qué fines utilizaremos sus datos personales?</h3>
              <p>
                Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Verificar su identidad como director o autoridad escolar.</li>
                <li>Coordinar la logística de las presentaciones escénicas y talleres.</li>
                <li>Hacer llegar materiales educativos digitales e impresos.</li>
                <li>Emitir los reconocimientos de "Escuela Protectora".</li>
                <li>Facturación y cobro (en caso de aplicar).</li>
              </ul>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">¿Qué datos personales recabamos?</h3>
              <p>
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Nombre completo</li>
                <li>Cargo o puesto</li>
                <li>Nombre de la institución educativa</li>
                <li>Teléfono institucional o personal de contacto</li>
                <li>Correo electrónico institucional o personal</li>
                <li>Dirección de la escuela</li>
              </ul>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">Derechos ARCO</h3>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del correo electrónico: <strong>contacto@cendes.org</strong>
              </p>

              <h3 className="text-gray-900 font-bold mt-8 mb-4">Cambios al aviso de privacidad</h3>
              <p>
                El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; o por otras causas.
              </p>
              <p>
                Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de nuestra página de internet.
              </p>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
