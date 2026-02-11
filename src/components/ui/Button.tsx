import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// Extend HTMLMotionProps but override children to be explicitly ReactNode if needed, 
// though HTMLMotionProps usually works. We'll simplify.
interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    isLoading?: boolean;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    isLoading,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 font-serif font-bold text-sm tracking-widest uppercase transition-all duration-300 rounded-full focus:outline-none overflow-hidden group";

    const variants = {
        primary: "bg-rose-600 text-white hover:bg-rose-700 shadow-[0_4px_14px_0_rgba(225,29,72,0.39)] hover:shadow-[0_6px_20px_rgba(225,29,72,0.23)] border border-transparent",
        secondary: "bg-white text-rose-900 border border-rose-200 hover:border-rose-300 hover:bg-rose-50 shadow-sm",
        ghost: "bg-transparent text-rose-800 hover:bg-rose-50/50 border border-transparent",
        danger: "bg-red-600 text-white hover:bg-red-700 shadow-lg border border-transparent"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {/* Loading Spinner */}
            {isLoading && (
                <span className="absolute inset-0 flex items-center justify-center bg-inherit">
                    <Loader2 className="w-5 h-5 animate-spin" />
                </span>
            )}

            {/* Button Content */}
            <span className={`flex items-center gap-2 ${isLoading ? 'invisible' : ''}`}>
                {children}
            </span>

            {/* Shine Effect on Hover (Primary only) */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
            )}
        </motion.button>
    );
};
