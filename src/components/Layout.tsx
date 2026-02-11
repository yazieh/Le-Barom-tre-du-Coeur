import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
    theme?: 'love' | 'toxic' | 'neutral';
}

export const Layout: React.FC<LayoutProps> = ({ children, theme = 'love' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden bg-rose-50 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">

            {/* Dynamic Background Gradients */}
            <div
                className={`absolute inset-0 transition-colors duration-1000 ease-in-out z-0
          ${theme === 'love' ? 'bg-gradient-to-b from-rose-50 via-white to-rose-100' : ''}
          ${theme === 'toxic' ? 'bg-gradient-to-b from-slate-900 via-rose-950 to-slate-900' : ''}
          ${theme === 'neutral' ? 'bg-stone-50' : ''}
        `}
            />

            {/* Floating Particles (CSS Only for performance) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* We will rely on the global CSS .petal animation for now, but cleaner */}
                {theme !== 'toxic' && Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="petal absolute opacity-40 bg-rose-300 rounded-full blur-[1px]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 10}s`,
                            width: `${Math.random() * 15 + 5}px`,
                            height: `${Math.random() * 15 + 5}px`,
                            animationDuration: `${Math.random() * 10 + 10}s`
                        }}
                    />
                ))}

                {/* Toxic Particles (Thorns/Ash) */}
                {theme === 'toxic' && Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-rose-900/60 w-1 h-3 rounded-full blur-[0.5px] animate-float-fast"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '100%',
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 5 + 3}s`
                        }}
                    />
                ))}
            </div>

            {/* Main Content Container */}
            <main className="relative z-10 w-full min-h-screen flex flex-col">
                <AnimatePresence mode="wait">
                    {children}
                </AnimatePresence>
            </main>

        </div>
    );
};
