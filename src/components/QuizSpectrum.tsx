import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionSpectrum } from '../types';
import { Button } from './ui/Button';
import { Ghost, Sparkles } from 'lucide-react';

interface QuizSpectrumProps {
    data: QuestionSpectrum;
    onAnswer: (score: number) => void;
    disabled: boolean;
}

export const QuizSpectrum: React.FC<QuizSpectrumProps> = ({ data, onAnswer, disabled }) => {
    const [value, setValue] = useState(3); // 1 to 5

    // Reset to middle when a new question appears
    useEffect(() => {
        setValue(3);
    }, [data.id]);


    return (
        <div className="w-full max-w-lg mx-auto px-4 perspective-1000">
            <AnimatePresence mode="wait">
                <motion.div
                    key={data.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Richer Card Design */}
                    <div className="
                    relative overflow-hidden rounded-2xl 
                    bg-[#fffcf5] border-2 border-[#e6d5ac] 
                    shadow-[0_10px_40px_-10px_rgba(217,119,6,0.15)]
                    p-8 min-h-[550px] flex flex-col justify-between
                ">
                        {/* Decorative Corner Ornaments */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-200/50 rounded-tl-xl pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-200/50 rounded-tr-xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-200/50 rounded-bl-xl pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-200/50 rounded-br-xl pointer-events-none"></div>

                        {/* Question Header */}
                        <div className="text-center z-10">
                            <span className="inline-flex items-center gap-2 text-xs font-serif font-bold text-amber-900/40 uppercase tracking-[0.3em] mb-6">
                                <Sparkles className="w-3 h-3" /> Résonance {data.id} <Sparkles className="w-3 h-3" />
                            </span>

                            {/* Dynamic Text Contrast */}
                            <div className="grid grid-cols-2 gap-6 items-center min-h-[120px]">
                                <motion.div
                                    animate={{ opacity: value <= 2 ? 1 : 0.7, scale: value <= 2 ? 1.05 : 0.95 }}
                                    className={`text-center font-serif leading-relaxed ${value <= 2 ? 'text-emerald-800 font-bold' : 'text-slate-600'}`}
                                >
                                    {data.leftLabel}
                                </motion.div>

                                {/* VS separator */}
                                <div className="absolute left-1/2 -translate-x-1/2 text-amber-200 font-serif italic opacity-50 text-sm">vs</div>

                                <motion.div
                                    animate={{ opacity: value >= 4 ? 1 : 0.7, scale: value >= 4 ? 1.05 : 0.95 }}
                                    className={`text-center font-serif leading-relaxed ${value >= 4 ? 'text-rose-900 font-bold' : 'text-slate-600'}`}
                                >
                                    {data.rightLabel}
                                </motion.div>
                            </div>
                        </div>

                        {/* FANTASY SLIDER */}
                        <div className="relative h-32 flex items-center justify-center my-6 z-10">

                            {/* The "Golden Thread" Track */}
                            <div className="absolute left-4 right-4 h-[2px] bg-gradient-to-r from-emerald-300 via-amber-200 to-rose-300"></div>

                            {/* Step Points (Gems) */}
                            <div className="absolute left-4 right-4 flex justify-between items-center px-[0px]">
                                {[1, 2, 3, 4, 5].map((step) => (
                                    <button
                                        key={step}
                                        onClick={() => setValue(step)}
                                        className={`
                                        w-4 h-4 rounded-full border-2 transition-all duration-300 transform
                                        ${value === step ? 'scale-150 bg-amber-100 border-amber-400' : 'bg-white border-amber-200 hover:scale-125'}
                                    `}
                                    />
                                ))}
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-center gap-4 z-10 mt-auto">
                            <Button
                                variant={value >= 4 ? 'danger' : 'primary'}
                                onClick={() => !disabled && onAnswer(value)}
                                disabled={disabled}
                                className="w-full shadow-lg"
                            >
                                Confirmer le Choix
                            </Button>
                            <button
                                onClick={() => { setValue(3); onAnswer(3); }}
                                className="text-amber-900/40 text-xs hover:text-amber-900/70 flex items-center gap-2 transition-colors"
                            >
                                <Ghost className="w-3 h-3" /> Je ne sais pas
                            </button>
                        </div>

                        {/* Ambient Glow */}
                        <div className={`
                        absolute inset-0 transition-colors duration-1000 -z-0 pointer-events-none opacity-20
                        bg-gradient-to-t from-transparent via-transparent 
                        ${value <= 2 ? 'to-emerald-100' : value >= 4 ? 'to-rose-100' : 'to-indigo-50'}
                    `}></div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
