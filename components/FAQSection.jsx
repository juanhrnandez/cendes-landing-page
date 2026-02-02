'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/constants';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export default function FAQSection() {
    return (
        <section id="faq" className="py-24 bg-[#F5EFE7]">
            <div className="container-cendes px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-[#C47440]/30 bg-[#C47440]/10 text-[#C47440] uppercase tracking-widest font-bold">
                            Dudas Frecuentes
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Resolvemos tus <span className="text-[#C47440]">Inquietudes</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Queremos que tengas total tranquilidad al llevar este proyecto a tu escuela.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-white"
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0 px-2 group">
                                <AccordionTrigger className="text-left text-lg font-bold text-gray-800 hover:text-[#C47440] hover:no-underline py-5 group-data-[state=open]:text-[#C47440]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 pl-4 border-l-2 border-gray-100 ml-1">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>

                {/* Contact CTA */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white inline-flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl shadow-sm border border-gray-200">
                        <div className="bg-[#E5F6E8] p-3 rounded-full">
                            <HelpCircle className="h-8 w-8 text-[#2A6E3B]" />
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-gray-900 text-lg">¿Tienes alguna pregunta específica?</p>
                            <p className="text-sm text-gray-500">Nuestro equipo pedagógico te responde directamente.</p>
                        </div>
                        <Button className="bg-[#2A6E3B] hover:bg-[#1f522b] text-white rounded-full px-6" asChild>
                            <Link href="https://wa.me/525527882274" target="_blank">
                                Contactar por WhatsApp
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
