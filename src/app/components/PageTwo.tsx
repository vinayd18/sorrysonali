import { motion } from 'motion/react';
import { useState } from 'react';

interface PageTwoProps {
  onNext: () => void;
}

export function PageTwo({ onNext }: PageTwoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[600px] perspective-1000 relative z-10 overflow-visible">
      
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 text-center z-50 pointer-events-none w-full px-4"
        >
           <h2 className="text-[#d63031] text-3xl font-bold font-['Poppins'] mb-2 drop-shadow-sm">You have a letter 💌</h2>
           <p className="text-gray-600 text-base">Tap the heart to open</p>
        </motion.div>
      )}

      {/* Envelope Container */}
      <motion.div 
        className="relative w-[300px] h-[200px] cursor-pointer mt-32"
        onClick={!isOpen ? handleOpen : undefined}
      >
        {/* Envelope Back Body (Base) */}
        <div className="absolute inset-0 bg-[#e17055] rounded-b-lg shadow-2xl z-0" />

        {/* The Letter Card - Starts hidden inside, slides up */}
        <motion.div 
          className="absolute left-2 right-2 bg-white shadow-md z-10 flex flex-col items-center justify-start text-center border-t-4 border-[#d63031] rounded-t-sm"
          style={{ height: 300, transformOrigin: 'bottom center' }}
          initial={{ bottom: 0, y: 0, zIndex: 1 }}
          animate={isOpen ? { bottom: 0, y: -150, zIndex: 2 } : { bottom: 0, y: 0, zIndex: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 40 }}
        >
           <div className="w-full h-full flex flex-col items-center pt-6 px-4">
              <h3 className="font-['Dancing_Script'] text-2xl text-[#d63031] font-bold mb-2">
                I'm So Sorry...
              </h3>
              <p className="font-['Poppins'] text-gray-600 text-xs italic leading-relaxed mt-2">
                "Every moment without you feels like a lifetime. Please forgive me, Sonali..."
              </p>
              
              {isOpen && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="mt-8 bg-[#d63031] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-[#b30000] hover:shadow-lg transition-all cursor-pointer pointer-events-auto"
                >
                  Read Full Letter ➔
                </motion.button>
              )}
           </div>
        </motion.div>

        {/* Envelope Front Pocket (The Triangle Overlay) */}
        <div className="absolute bottom-0 left-0 right-0 h-0 border-l-[150px] border-r-[150px] border-b-[100px] border-l-transparent border-r-transparent border-b-[#fab1a0] z-20 rounded-b-lg pointer-events-none" />
        
        {/* Left Side Flap */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-l-[150px] border-b-[100px] border-t-transparent border-l-[#ff7675] border-b-transparent z-20 rounded-bl-lg pointer-events-none" />
        
        {/* Right Side Flap */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[150px] border-b-[100px] border-t-transparent border-r-[#ff7675] border-b-transparent z-20 rounded-br-lg pointer-events-none" />

        {/* Envelope Top Flap (Animated) */}
        <motion.div 
          className="absolute top-0 left-0 w-0 h-0 border-l-[150px] border-r-[150px] border-t-[100px] border-l-transparent border-r-transparent border-t-[#d63031] origin-top drop-shadow-md"
          initial={{ rotateX: 0, zIndex: 30 }}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        
        {/* Heart Seal */}
        {!isOpen && (
        <motion.div 
           className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-5xl z-40 drop-shadow-md cursor-pointer"
           animate={{ scale: [1, 1.1, 1] }}
           transition={{ repeat: Infinity, duration: 2 }}
           onClick={handleOpen}
        >
          ❤️
        </motion.div>
        )}
      </motion.div>
    </div>
  );
}
