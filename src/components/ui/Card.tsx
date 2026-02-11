import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={`
        relative overflow-hidden rounded-2xl 
        bg-white/80 backdrop-blur-xl 
        border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]
        ${className}
      `}
        >
            {/* Subtle Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
