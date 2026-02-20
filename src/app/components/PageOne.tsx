import { motion } from 'motion/react';
import { useState } from 'react';

interface PageOneProps {
  onNext: () => void;
}

export function PageOne({ onNext }: PageOneProps) {
  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);
  const [message, setMessage] = useState("Sonali, please maan ja na...");

  const handleNoClick = () => {
    if (noScale > 0.2) {
      setNoScale((prev) => prev - 0.15);
      setYesScale((prev) => prev + 0.2);
      setMessage("Apne bacche ko maaf kar de na! 🥺");
    }
  };

  return (
    <div className="relative z-10 w-[90%] max-w-[450px] bg-white rounded-3xl p-10 shadow-2xl text-center transform transition-all duration-500 hover:scale-[1.02]">
      <h1 className="text-[#d63031] text-3xl font-bold mb-4 font-['Poppins']">
        Mujhe maaf kar de 🥺
      </h1>
      <p 
        className="text-gray-600 mb-8 font-['Poppins'] text-lg min-h-[30px]"
        dangerouslySetInnerHTML={{ __html: message }}
      />
      
      <div className="flex justify-center items-center gap-4 flex-wrap min-h-[100px]">
        <motion.button
          layout
          onClick={onNext}
          animate={{ scale: yesScale }}
          whileHover={{ scale: yesScale * 1.1 }}
          whileTap={{ scale: yesScale * 0.9 }}
          className="bg-[#d63031] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-[#b30000] transition-colors"
        >
          Yes
        </motion.button>

        {noScale > 0.2 && (
          <motion.button
            layout
            onClick={handleNoClick}
            animate={{ scale: noScale }}
            whileHover={{ scale: noScale * 1.1 }}
            whileTap={{ scale: noScale * 0.9 }}
            className="bg-gray-200 text-gray-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition-colors"
          >
            No
          </motion.button>
        )}
      </div>
    </div>
  );
}
