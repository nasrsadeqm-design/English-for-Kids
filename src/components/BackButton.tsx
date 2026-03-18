import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../utils';

interface BackButtonProps {
  onClick: () => void;
  text?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, text = 'رجوع', className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-2xl shadow-md hover:shadow-lg hover:from-rose-600 hover:to-rose-700 transition-all font-black group z-10",
        className
      )}
      dir="rtl"
    >
      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      <span>{text}</span>
    </motion.button>
  );
};
