import { useState } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { PageOne } from './components/PageOne';
import { PageTwo } from './components/PageTwo';
import { PageThree } from './components/PageThree';
import { AnimatePresence, motion } from 'motion/react';
import '../styles/fonts.css';

export default function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((s) => s + 1);

  return (
    <div className="min-h-screen w-full bg-[#fff0f3] flex justify-center items-center overflow-hidden relative font-['Poppins']">
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="page1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="z-10 w-full flex justify-center"
          >
            <PageOne onNext={nextStep} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="page2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="z-10 w-full flex justify-center"
          >
            <PageTwo onNext={nextStep} />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="page3"
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="z-10 w-full flex justify-center"
          >
            <PageThree />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 text-gray-400 text-xs z-0">
        Made with ❤️ for Sonali
      </div>
    </div>
  );
}
