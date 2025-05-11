import React, { useEffect, useState } from 'react';

const FlagQuizGame = () => {
  const [countries, setCountries] = useState([]);
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => {
        const valid = data.filter(c => c.flags?.png && c.name?.common);
        setCountries(valid);
      });
  }, []);

  const generateQuestion = () => {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    const options = shuffled.slice(0, 4);
    const correct = options[Math.floor(Math.random() * options.length)];
    setQuestion({ options, correct });
    setSelected(null);
  };

  useEffect(() => {
    if (countries.length) generateQuestion();
  }, [countries]);

  const handleAnswer = (country) => {
  setSelected(country);

  if (country.cca3 === question.correct.cca3) {
    setCorrectCount((prev) => {
      const newScore = prev + 1;
      if (newScore > highestScore) {
        setHighestScore(newScore);
      }
      return newScore;
    });
  } else {
    setWrongCount((prev) => prev + 1);
  }
};

  return (
    <div className="max-w-xl mx-auto text-center py-10 px-4">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">Choose the Correct Flag</h1>
      <p className="mb-6">✅ Correct: {correctCount} | ❌ Wrong: {wrongCount} | 🏆 Highest Score: {highestScore}</p>


      {correctCount === 10 && (
        <div className="text-green-500 font-semibold mb-4">
          🎉 Congratulations! You got 10 correct! Carry On
        </div>
      )}

      {question && (
        <>
          <div className="mb-6">
        <img
          src={question.correct.flags.png}
          alt="Country Flag"
          className="w-[500px] h-auto mx-auto rounded-2xl shadow object-contain"
        />
        </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {question.options.map((country) => (
              <button
                key={country.cca3}
                onClick={() => handleAnswer(country)}
                disabled={!!selected}
                className={`border-1 border-amber-200 rounded-2xl  py-2 px-4 ${
                  selected ? country.cca3 === question.correct.cca3 ? "bg-green-500 text-white rounded-2xl" : country.cca3 === selected.cca3 ? "bg-red-200" : "bg-gray-200" : "bg-white" }`} >{country.name.common} </button> ))}
          </div>

          {selected && (
            <div className="mb-4 text-lg">
              {selected.cca3 === question.correct.cca3 ? (
                <span className="text-green-600 font-semibold">Correct!</span>) : (
                <span className="text-red-600 font-semibold"> Incorrect! It was {question.correct.name.common}.</span>
              )}
            </div>
          )}

        </>
      )}

      {/* <button className="border px-5 py-2 rounded-xl bg-amber-500 text-white" onClick={generateQuestion} > Next
      </button> */}

      <div className="flex justify-center gap-4 mt-4">
  <button
    className="border px-5 py-2 rounded-xl bg-amber-500 text-white"
    onClick={generateQuestion}
  >
    Next
  </button>

  <button
    className="border px-5 py-2 rounded-xl bg-red-500 text-white"
    onClick={() => {
      setCorrectCount(0);
      setWrongCount(0);
      setSelected(null);
      generateQuestion();
    }}
  >
    Reset
  </button>
</div>
    </div>
  );
};

export default FlagQuizGame;
