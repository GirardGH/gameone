import { useState, memo } from 'react';
import diceData from '../data/gameData.js';

const Dice = () => {
  const [dice, setDice] = useState([]);
  const [selectedDiceIndices, setSelectedDiceIndices] = useState([]);

  const rollDice = () => {
    const newDice = diceData.map((die) => {
      const randomIndex = Math.floor(Math.random() * die.images.length);
      return {
        id: die.id,
        image: die.images[randomIndex],
        selected: false,
      };
    });
    setDice(newDice);
    setSelectedDiceIndices([]);
  };

  const selectImage = (index) => {
    if (selectedDiceIndices.length < 3) {
      const updatedDice = dice.map((die, i) => {
        if (i === index) {
          return { ...die, selected: true };
        }
        return die;
      });

      setSelectedDiceIndices([...selectedDiceIndices, index]);
      setDice(updatedDice);
    }
  };

  const resetGame = () => {
    setDice([]);
    setSelectedDiceIndices([]);
  };

  return (
    <div>
      <button onClick={rollDice} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Lancer les dés
      </button>
      {selectedDiceIndices.length < 3 && (
        <div className="flex justify-center flex-wrap">
          {dice.map((die, index) => (
            <img
              key={die.id}
              src={die.image}
              alt={`Dé ${die.id}`}
              className={`h-32 m-2 cursor-pointer ${die.selected ? 'opacity-50' : ''}`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>
      )}
      <div className="mt-4 flex justify-center">
        {selectedDiceIndices.map((selectedIndex, index) => (
          <div key={index} className="bg-gray-200 p-4 m-2">
            <img className='h-44' src={dice[selectedIndex].image} alt={`Image sélectionnée ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedDiceIndices.length === 3 && (
        <button onClick={resetGame} className="bg-red-500 text-white px-4 py-2 mt-4">
          Réinitialiser le jeu
        </button>
      )}
    </div>
  );
};

export default memo(Dice);