
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const Game = () => {
  const [plants, setPlants] = useState([
    { id: 1, name: 'الصبار', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', matched: false },
    { id: 2, name: 'الياسمين', image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843', matched: false },
    { id: 3, name: 'الورد', image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07', matched: false },
    { id: 4, name: 'النخيل', image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', matched: false },
  ]);
  
  const [cards, setCards] = useState<any[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<any | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<any | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  
  // Duplicate cards and shuffle
  const shuffleCards = () => {
    const plantsPairs = [...plants, ...plants]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(plantsPairs);
    setTurns(0);
    setGameWon(false);
    
    // Reset matched status
    setPlants(plants.map(plant => ({...plant, matched: false})));
  };
  
  // Start game automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  
  // Handle a choice
  const handleChoice = (card: any) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  
  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      
      if (choiceOne.name === choiceTwo.name) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.name === choiceOne.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        
        setPlants(prevPlants => {
          return prevPlants.map(plant => {
            if (plant.name === choiceOne.name) {
              return { ...plant, matched: true };
            } else {
              return plant;
            }
          });
        });
        
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  
  // Check if game is won
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      setGameWon(true);
      toast.success('أحسنت! لقد فزت باللعبة', {
        position: 'top-center'
      });
    }
  }, [cards]);
  
  // Reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-rawaa-accent/20 to-white py-12">
          <div className="container mx-auto px-4 rtl">
            <h1 className="text-3xl font-bold text-center mb-4">لعبة تطابق النباتات</h1>
            <p className="text-center text-gray-600 mb-8">اختبر معرفتك بالنباتات من خلال لعبة التطابق الممتعة!</p>
            
            <div className="flex justify-center mb-6">
              <Button onClick={shuffleCards} className="bg-rawaa-accent hover:bg-rawaa-accent/90">
                لعبة جديدة
              </Button>
            </div>
            
            <div className="flex justify-center mb-4">
              <p className="bg-white px-4 py-2 rounded-lg shadow text-lg">
                عدد المحاولات: <span className="font-bold">{turns}</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {cards.map(card => (
                <div 
                  key={card.id} 
                  className={`relative bg-white rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ${card.matched ? 'opacity-70 hover:opacity-100' : ''}`}
                  style={{aspectRatio: '3/4'}}
                >
                  <div 
                    className={`w-full h-full ${(choiceOne === card || choiceTwo === card || card.matched) ? 'rotateY-0' : 'rotateY-180'}`}
                    onClick={() => !disabled && !card.matched && choiceOne !== card && choiceTwo !== card && handleChoice(card)}
                  >
                    {(choiceOne === card || choiceTwo === card || card.matched) ? (
                      <div className="w-full h-full">
                        <img 
                          src={card.image} 
                          alt={card.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 w-full bg-rawaa-dark/70 p-2">
                          <p className="text-white text-center">{card.name}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-rawaa-primary flex items-center justify-center">
                        <div className="text-4xl text-white">؟</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {gameWon && (
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-rawaa-primary mb-4">مبروك! لقد فزت باللعبة</h2>
                <p className="mb-4">عدد المحاولات: {turns}</p>
                <Button onClick={shuffleCards} className="bg-rawaa-accent hover:bg-rawaa-accent/90">
                  العب مرة أخرى
                </Button>
              </div>
            )}
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-lg rtl">
              <h3 className="text-xl font-bold mb-4 text-rawaa-primary">تعليمات اللعبة:</h3>
              <ul className="list-disc mr-6 space-y-2 text-gray-600">
                <li>اقلب بطاقتين في كل مرة لمحاولة إيجاد زوجين متطابقين من النباتات.</li>
                <li>إذا تطابقت البطاقتان، فسيتم إبقاؤهما مكشوفتين.</li>
                <li>إذا لم تتطابقا، سيتم قلبهما مجدداً.</li>
                <li>الهدف هو مطابقة جميع أزواج البطاقات بأقل عدد ممكن من المحاولات.</li>
                <li>تعلم أسماء النباتات واستمتع!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Game;
