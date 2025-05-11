import React, { useEffect, useState } from 'react';

const FlagQuizGame = () => {
  const [countries, setCountries] = useState([]);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isTTSOn, setIsTTSOn] = useState(true);
  const [history, setHistory] = useState([]);
  const [username, setUsername] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [isMultiplayer, setIsMultiplayer] = useState(false);
  const [turn, setTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const correctSound = new Audio('/assets/sounds/ding-sound-effect_2.mp3');
  const wrongSound = new Audio('/assets/sounds/buzzer-or-wrong-answer-20582.mp3');

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        const valid = data.filter(c => c.flags?.png && c.name?.common);
        setCountries(valid);
      });
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(saved);
  }, []);

  useEffect(() => {
    if (isTTSOn && question?.options?.length) {
      const names = question.options.map(opt => opt.name.common).join(", ");
      const utterance = new SpeechSynthesisUtterance(`Options are: ${names}`);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  }, [question, isTTSOn]);

  const generateQuestion = () => {
    let filtered = countries;
    if (selectedRegion) {
      filtered = countries.filter(c => c.region === selectedRegion);
    }
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    const options = shuffled.slice(0, 4);
    const correct = options[Math.floor(Math.random() * options.length)];

    setQuestion({ options, correct });
    setSelected(null);
    setTimeLeft(10);
  };

  useEffect(() => {
    if (isGameStarted && countries.length) {
      generateQuestion();
    }
  }, [countries, isGameStarted]);

  useEffect(() => {
    if (!selected && timeLeft > 0 && isGameStarted && !isGameEnded) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !selected) {
      setSelected({});
      setWrongCount(prev => prev + 1);
    }
  }, [timeLeft, selected, isGameStarted, isGameEnded]);

  const handleAnswer = (country) => {
    setSelected(country);
    const isCorrect = country.cca3 === question.correct.cca3;

    setHistory(prev => [...prev, {
      flag: question.correct.flags.png,
      correctAnswer: question.correct.name.common,
      selectedAnswer: country.name.common,
      isCorrect
    }]);

    if (isMultiplayer) {
      if (turn === 1) {
        if (isCorrect) {
          correctSound.play();
          setPlayer1Score(prev => prev + 1);
        } else {
          wrongSound.play();
        }
        setTurn(2);
      } else {
        if (isCorrect) {
          correctSound.play();
          setPlayer2Score(prev => prev + 1);
        } else {
          wrongSound.play();
        }
        setTurn(1);
      }
    } else {
      if (isCorrect) {
        correctSound.play();
        setCorrectCount(prev => {
          const newScore = prev + 1;
          if (newScore > highestScore) setHighestScore(newScore);
          return newScore;
        });
      } else {
        wrongSound.play();
        setWrongCount(prev => prev + 1);
      }
    }
  };

  const saveScore = () => {
    const totalScore = correctCount * 10 + timeLeft;
    const newEntry = {
      name: username || "Anonymous",
      score: totalScore,
      date: new Date().toLocaleString(),
    };
    const existing = JSON.parse(localStorage.getItem("leaderboard")) || [];
    const updated = [...existing, newEntry].sort((a, b) => b.score - a.score).slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(updated));
    setLeaderboard(updated);
  };

  const handleGameEnd = () => {
    setIsGameEnded(true);
    setIsGameStarted(false);
    if (correctCount > highestScore) {
      setHighestScore(correctCount);
      setMessage("🎉 New Highest Score!");
    }
  };

  const handleGameReset = () => {
    setCorrectCount(0);
    setWrongCount(0);
    setSelected(null);
    setIsGameEnded(false);
    setIsGameStarted(false);
    setMessage("");
    setPlayer1Score(0);
    setPlayer2Score(0);
    setTurn(1);
  };

  return (
    <div className="container mx-auto text-center py-10 px-4">
      {!isGameStarted && !isGameEnded && (
        <div>
          <h1 className="text-3xl font-bold text-amber-500 mb-6">Welcome to the Flag Quiz Game!</h1>
          <p className="mb-6">Test your knowledge of world flags. Click start to begin.</p>

          <div className="mb-4">
            <label className="mr-2 font-semibold">Multiplayer Mode:</label>
            <input type="checkbox" checked={isMultiplayer} onChange={(e) => setIsMultiplayer(e.target.checked)} />
          </div>

          <div className="mb-6">
            <label className="font-medium mr-2">🌍 Select Any Region (Optional):</label>
            <select className="border rounded px-3 py-1" value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
              <option value="">All</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
            </select>
          </div>
          <button className="border px-5 py-2 rounded-xl bg-amber-500 text-white" onClick={() => setIsGameStarted(true)}>
            Start Game
          </button>
        </div>
      )}

      {isGameStarted && !isGameEnded && (
        <>
          <h1 className="text-3xl font-bold text-amber-500 mb-6">Choose the Correct Flag</h1>
          {isMultiplayer && <p className="mb-4">👤 Player 1: {player1Score} | 👤 Player 2: {player2Score} | Now Playing: <span className="font-bold">Player {turn}</span></p>}
          <p className="mb-6">✅ Correct: {correctCount} | ❌ Wrong: {wrongCount} | 🏆 Highest Score: {highestScore}</p>

          <div className="text-xl font-bold text-blue-500 mb-4">⏱️ Time Left: {timeLeft} seconds</div>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mb-6">
            <div className={`h-full transition-all duration-500 ${timeLeft <= 3 ? "bg-red-500" : "bg-amber-500"}`} style={{ width: `${(timeLeft / 10) * 100}%` }}></div>
          </div>

          {question && (
            <>
              <div className={`mb-6 transition-transform duration-500 ${selected ? "animate__animated animate__flipInY" : ""}`}>
                <img src={question.correct.flags.png} alt="Country Flag" className="w-[500px] h-auto mx-auto rounded-2xl shadow object-contain" />
              </div>
              <label className="flex items-center gap-2 mb-6 justify-center">
                <input type="checkbox" checked={isTTSOn} onChange={(e) => setIsTTSOn(e.target.checked)} />
                🔊 Enable Text-to-Speech
              </label>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {question.options.map((country) => (
                  <button key={country.cca3} onClick={() => handleAnswer(country)} disabled={!!selected} className={`border-1 border-amber-200 rounded-2xl py-2 px-4 transition-all duration-300 ${selected ? (country.cca3 === question.correct.cca3 ? "bg-green-500 text-white animate__animated animate__bounce" : country.cca3 === selected.cca3 ? "bg-red-200" : "bg-gray-200") : "bg-white"}`}>
                    {country.name.common}
                  </button>
                ))}
              </div>
              {selected && (
                <div className="mb-4 text-lg">
                  {selected.cca3 === question.correct.cca3 ? (
                    <span className="text-green-600 font-semibold">Correct!</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Incorrect! It was {question.correct.name.common}.</span>
                  )}
                </div>
              )}
            </>
          )}

          <div className="flex justify-center gap-4 mt-4">
            <button className="border px-5 py-2 rounded-xl bg-amber-500 text-white" onClick={generateQuestion}>Next</button>
            <button className="border px-5 py-2 rounded-xl bg-red-500 text-white" onClick={handleGameEnd}>End Game</button>
          </div>
        </>
      )}

      {isGameEnded && (
        <div>
          <h2 className="text-2xl font-bold mb-4">📋 Review Your Answers</h2>
          {isMultiplayer && (
            <div className="mb-4">
              <p>👤 Player 1 Score: {player1Score}</p>
              <p>👤 Player 2 Score: {player2Score}</p>
              <p>🏆 Winner: {player1Score === player2Score ? "It's a Tie!" : player1Score > player2Score ? "Player 1" : "Player 2"}</p>
            </div>
          )}
          <ul className="space-y-4">
            {history.map((item, index) => (
              <li key={index} className="border p-4 rounded-xl shadow bg-white text-left">
                <div className="flex items-center gap-4">
                  <img src={item.flag} alt="Flag" className="w-16 h-10 object-contain" />
                  <div>
                    <p className="font-semibold">Correct: {item.correctAnswer}</p>
                    <p className={`${item.isCorrect ? "text-green-600" : "text-red-500"}`}>Your Answer: {item.selectedAnswer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <input type="text" placeholder="Enter your name" className="border rounded px-4 py-2" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button className="ml-2 px-4 py-2 bg-green-600 text-white rounded" onClick={saveScore}>💾 Save Score</button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">🏆 Leaderboard</h2>
            <ul className="space-y-2">
              {leaderboard.map((entry, index) => (
                <li key={index} className="border p-2 rounded flex justify-between bg-white shadow">
                  <span>{index + 1}. {entry.name}</span>
                  <span className="font-semibold">{entry.score} pts</span>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={handleGameReset} className="mt-6 px-5 py-2 bg-amber-500 text-white rounded-xl">🔁 Play Again</button>
        </div>
      )}
    </div>
  );
};

export default FlagQuizGame;
