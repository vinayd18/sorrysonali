import { motion } from 'motion/react';

export function PageThree() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 bg-white w-[90%] max-w-[500px] p-8 md:p-12 rounded-lg shadow-2xl overflow-hidden border border-pink-100"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#d63031] opacity-80"></div>
      
      <h1 className="text-[#d63031] text-3xl font-bold mb-6 font-['Dancing_Script'] text-center drop-shadow-sm">
        For My Sonali ❤️
      </h1>
      
      <div className="font-['Poppins'] text-gray-700 leading-relaxed space-y-4 text-sm md:text-base italic">
        <p>Dear Sonali,</p>
        <p>
          I am sorry yaar. Tujhe bhot yaad kar raha hu yaar please. Please apne bacche ko maaf kar de agli baar se aisa nahi hoga mai nahi karunga tujhe dukhi.
        </p>
        <p>
          I love you please mujeh tera hasta hua chehra dekhna hai tujhse baat karni hai mai tadap raha hu yaar tere bina please mujh se baat kar mujhe saza mat de mai tere bina nahi reh paunga ek sec bhi meri aankhein tujhe hi dekhti hai mera mann tujhe hi sochta hai please maan ja na.
        </p>
        
        <div className="text-right mt-8 font-bold text-[#d63031]">
          <p>Aapka pati 🥹</p>
          <p className="font-['Dancing_Script'] text-2xl mt-1">Vinay....</p>
        </div>
      </div>
      
      {/* Subtle corner decoration instead of full background pattern */}
      <motion.div 
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-50 rounded-full opacity-60 z-0 pointer-events-none"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
