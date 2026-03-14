import { motion } from 'framer-motion';

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="text-6xl font-bold text-blue-500 tracking-tighter">
          RS
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute -bottom-2 left-0 h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        />
      </motion.div>
      
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full bg-blue-400"
        />
      </div>
    </motion.div>
  );
};
