import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Heart, Fingerprint, Info, X, Github } from 'lucide-react';

interface IntroCardProps {
    onStart: () => void;
}

export const IntroCard: React.FC<IntroCardProps> = ({ onStart }) => {
    const [holding, setHolding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showInfo, setShowInfo] = useState(false);
    const controls = useAnimation();

    // Handle the "Hold" logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (holding) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        onStart();
                        return 100;
                    }
                    return prev + 2; // Speed of fill
                });
            }, 30);
            controls.start({ scale: 1.1, textShadow: "0px 0px 8px rgb(225, 29, 72)" });
        } else {
            setProgress(0);
            controls.start({ scale: 1, textShadow: "none" });
        }
        return () => clearInterval(interval);
    }, [holding, onStart, controls]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center relative">

            {/* Info Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={() => setShowInfo(!showInfo)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full border border-rose-200 bg-white/60 backdrop-blur-sm flex items-center justify-center text-rose-400 hover:text-rose-600 hover:border-rose-400 transition-all shadow-sm"
                aria-label="Informations"
            >
                {showInfo ? <X className="w-4 h-4" /> : <Info className="w-4 h-4" />}
            </motion.button>

            {/* Info Panel */}
            {showInfo && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-20 right-6 z-50 bg-white/90 backdrop-blur-md rounded-lg shadow-lg border border-rose-100 p-5 text-left max-w-xs"
                >
                    <p className="text-sm text-slate-700 font-serif leading-relaxed">
                        Créé par <span className="font-bold text-rose-900">Gonçalo Pereira</span><br />
                        Cours B2-C1
                    </p>
                    <a
                        href="https://github.com/yazieh/Le-Barometre-du-Coeur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 flex items-center gap-2 text-xs text-slate-500 hover:text-rose-600 transition-colors font-mono"
                    >
                        <Github className="w-3.5 h-3.5" />
                        Open Source sur GitHub
                    </a>
                </motion.div>
            )}

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mb-12 relative z-10"
            >
                <h1 className="text-5xl md:text-7xl font-serif font-black text-rose-950 mb-2 tracking-tighter drop-shadow-sm">
                    Le Baromètre <br /> du Cœur
                </h1>
                <p className="text-rose-800/60 font-serif italic text-lg tracking-widest">
                    Amour Sain ou Amour Toxique ?
                </p>
            </motion.div>

            {/* The Interaction Hook */}
            <div className="relative group cursor-pointer"
                onMouseDown={() => setHolding(true)}
                onMouseUp={() => setHolding(false)}
                onMouseLeave={() => setHolding(false)}
                onTouchStart={() => setHolding(true)}
                onTouchEnd={() => setHolding(false)}
            >
                {/* Progress Circle Background */}
                <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                        cx="96"
                        cy="96"
                        r="88"
                        fill="transparent"
                        stroke="#fecdd3" // Rose-200
                        strokeWidth="2"
                    />
                    <motion.circle
                        cx="96"
                        cy="96"
                        r="88"
                        fill="transparent"
                        stroke="#e11d48" // Rose-600
                        strokeWidth="4"
                        strokeDasharray="553"
                        strokeDashoffset={553 - (553 * progress) / 100}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Center Heart/Fingerprint */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={holding ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                        transition={holding ? { repeat: Infinity, duration: 0.6 } : {}}
                        className="relative"
                    >
                        {holding ? (
                            <Fingerprint className="w-20 h-20 text-rose-600 opacity-80" />
                        ) : (
                            <Heart className="w-20 h-20 text-rose-400 fill-rose-100 animate-pulse-slow" />
                        )}

                        {/* Inner glow pulsating */}
                        {holding && (
                            <div className="absolute inset-0 bg-rose-500 blur-xl opacity-40 rounded-full animate-ping"></div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Instructions */}
            <motion.p
                className="mt-8 text-sm font-serif uppercase tracking-[0.2em] text-rose-800/70"
                animate={{ opacity: holding ? 0.5 : 1 }}
            >
                {holding ? "Connexion en cours..." : "Maintenez"}
            </motion.p>

        </div>
    );
};
