'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedSection({
    children,
    delay = 0,
    direction = 'up',
    className = ''
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
