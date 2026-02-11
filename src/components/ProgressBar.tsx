import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
    label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
    const percentage = Math.min(100, Math.max(0, (current / total) * 100));

    return (
        <div className="w-full max-w-xs mx-auto mb-6">
            <div className="flex justify-between items-end mb-2">
                <span className="text-[10px] uppercase tracking-widest font-serif text-slate-400">
                    {label}
                </span>
                <span className="text-xs font-serif font-bold text-rose-400">
                    {current} / {total}
                </span>
            </div>

            <div className="h-1 w-full bg-rose-100 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-rose-300 to-rose-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>
        </div>
    );
};
