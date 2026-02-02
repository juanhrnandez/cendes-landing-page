'use client';

import { motion } from 'framer-motion';
import { School, Users, Globe, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';

const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">Cargando mapa...</div>
});

const stats = [
    {
        icon: School,
        value: "+2,000",
        label: "Escuelas Alcanzadas",
        gradient: "from-[#C47440] to-[#A85F33]"
    },
    {
        icon: Users,
        value: "+100,000",
        label: "Personas Impactadas",
        gradient: "from-[#B4B651] to-[#9A9B42]"
    },
    {
        icon: MapPin,
        value: "Nacional",
        label: "Cobertura en Todo México",
        gradient: "from-[#6A6A6A] to-[#525252]"
    }
];

export default function ReachSection() {
    const locations = [
        { name: 'Ciudad de México', lat: 19.4326, lng: -99.1332, students: '45,000+' },
        { name: 'Guadalajara', lat: 20.6597, lng: -103.3496, students: '12,000+' },
        { name: 'Monterrey', lat: 25.6866, lng: -100.3161, students: '15,000+' },
        { name: 'Puebla', lat: 19.0414, lng: -98.2063, students: '8,500+' },
        { name: 'Querétaro', lat: 20.5888, lng: -100.3899, students: '7,200+' },
        { name: 'Mérida', lat: 20.9674, lng: -89.5926, students: '5,800+' },
        { name: 'Tijuana', lat: 32.5149, lng: -117.0382, students: '6,400+' },
        { name: 'Cancún', lat: 21.1619, lng: -86.8515, students: '4,100+' },
    ];

    return (
        <section id="reach" className="py-24 bg-[#F5EFE7] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C47440]/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B4B651]/10 rounded-full blur-[100px]" />

            <div className="container-cendes relative z-10 px-6">
                
                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                     {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="border-0 shadow-lg bg-white overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <CardContent className="p-8 flex items-center gap-6">
                                    <div className={`flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white shadow-lg`}>
                                        <stat.icon className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
                                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
                                    </div>
                                </CardContent>
                                <div className={`h-1.5 w-full bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                            </Card>
                        </motion.div>
                     ))}
                </div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white h-[500px] md:h-[600px]"
                >
                     <InteractiveMap locations={locations} />
                     
                     {/* Map Overlay Badge */}
                     <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/50 max-w-xs">
                        <p className="font-bold text-gray-900 mb-1">Presencia Nacional</p>
                        <p className="text-sm text-gray-600">Tenemos coordinadores en las principales zonas metropolitanas y capacidad de viaje.</p>
                     </div>
                </motion.div>

            </div>
        </section>
    );
}
