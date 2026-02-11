import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QuestionMCQ } from '../types';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Ghost, Sparkles, AlertTriangle } from 'lucide-react';

interface QuizMCQProps {
    data: QuestionMCQ;
    onAnswer: (score: number) => void;
    disabled: boolean;
}

export const QuizMCQ: React.FC<QuizMCQProps> = ({ data, onAnswer, disabled }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = (id: string, score: number) => {
        if (disabled) return;
        setSelectedId(id);

        // Theme Twist: Visual feedback based on score (0 = healthy, 3 = toxic)
        // We delay the onAnswer slightly to show the effect
        setTimeout(() => {
            onAnswer(score);
            setSelectedId(null);
        }, 600);
    };

    return (
        <div className="w-full max-w-lg mx-auto perspective-1000 px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={data.id}
                    initial={{ opacity: 0, x: 50, rotate: 2 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -50, rotate: -2 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <Card className="p-6 md:p-8 min-h-[400px] flex flex-col justify-between">
                        <div>
                            <div className="mb-6">
                                <span className="text-xs font-serif font-bold text-rose-400 uppercase tracking-widest">
                                    Chapitre {data.id}
                                </span>
                            </div>

                            <h2 className="text-xl md:text-2xl font-serif font-bold text-rose-950 mb-8 leading-relaxed drop-shadow-sm">
                                {data.question}
                            </h2>
                        </div>

                        <div className="space-y-3">
                            {data.options.map((option) => {
                                const isSelected = selectedId === option.id;
                                const isBlurry = selectedId !== null && !isSelected;

                                // Toxic visual cue (only visible AFTER selection)
                                const isToxic = isSelected && option.score >= 2;

                                return (
                                    <motion.button
                                        key={option.id}
                                        onClick={() => handleSelect(option.id, option.score)}
                                        disabled={disabled || selectedId !== null}
                                        animate={{
                                            opacity: isBlurry ? 0.4 : 1,
                                            scale: isSelected ? 1.02 : 1,
                                            borderColor: isToxic ? '#ef4444' : isSelected ? '#e11d48' : 'transparent'
                                        }}
                                        className={`
                                    w-full text-left p-4 rounded-xl border border-rose-100/50 
                                    bg-white/60 hover:bg-rose-50/90 transition-all relative overflow-hidden group shadow-sm
                                    ${isSelected ? 'shadow-md bg-white' : ''}
                                `}
                                    >
                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className={`
                                        w-8 h-8 rounded-full border flex items-center justify-center font-serif text-sm transition-colors font-bold
                                        ${isSelected ? 'bg-rose-100 border-rose-300 text-rose-900' : 'bg-white border-rose-200 text-rose-400'}
                                    `}>
                                                {option.id}
                                            </div>
                                            <span className={`text-base md:text-lg font-medium ${isToxic ? 'text-red-900' : 'text-slate-900'}`}>
                                                {option.text}
                                            </span>
                                        </div>

                                        {/* Glitch/Toxic Effect Overlay */}
                                        {isToxic && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0, 0.5, 0] }}
                                                transition={{ duration: 0.3, times: [0, 0.2, 1] }}
                                                className="absolute inset-0 bg-red-500 mix-blend-multiply z-0"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Skip (Ghost) */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => !disabled && onAnswer(1)}
                                disabled={disabled}
                                className="text-stone-400 text-xs hover:text-stone-600 flex items-center gap-1 transition-colors"
                            >
                                <Ghost className="w-3 h-3" />
                                Passer
                            </button>
                        </div>

                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
