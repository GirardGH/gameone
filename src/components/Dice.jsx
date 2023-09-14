import React, { useState } from 'react';
import diceData from '../data/gameData';
import { motion } from 'framer-motion';

const Dice = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [randomIndexes, setRandomIndexes] = useState([0, 0]); // Stocke les index aléatoires pour les deux premières cartes

  const toggleCardsVisibility = () => {
    if (!cardsVisible) {
      // Génère des index aléatoires pour les deux premières cartes
      const randomIndex1 = Math.floor(Math.random() * diceData[0].images.length);
      const randomIndex2 = Math.floor(Math.random() * diceData[1].images.length);
      setRandomIndexes([randomIndex1, randomIndex2]);
    }
    setCardsVisible(!cardsVisible);
  };

  return (
    <div>
      <button onClick={toggleCardsVisibility} className="bg-gray-800 text-white px-4 py-2 mb-4">
        {cardsVisible ? 'Cacher les cartes' : 'Tirer les cartes'}
      </button>

      {cardsVisible && (
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Première carte avec les images du premier tableau */}
          <motion.div
            key={0}
            className="w-36 h-48 bg-gray-800 relative flex items-center justify-center overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img src={diceData[0].images[randomIndexes[0]]} alt="Image 1" className="w-1/2 h-1/2 object-contain" />
          </motion.div>

          {/* Deuxième carte avec les images du deuxième tableau */}
          <motion.div
            key={1}
            className="w-36 h-48 bg-gray-800 relative flex items-center justify-center overflow-hidden rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={diceData[1].images[randomIndexes[1]]} alt="Image 2" className="w-1/2 h-1/2 object-contain" />
          </motion.div>

          {Array.from({ length: 7 }).map((_, index) => (
            <motion.div
              key={index + 2}
              className="w-36 h-48 bg-gray-800 relative flex items-center justify-center overflow-hidden rounded-xl shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            >
              {/* Contenu de votre carte */}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Dice;