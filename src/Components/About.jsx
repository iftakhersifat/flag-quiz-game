import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto text-center py-10 px-4">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">About the Flag Quiz Game</h1>
      <p className="mb-4 text-lg">
        Welcome to the <strong>Flag Quiz Game</strong>, where you can test your knowledge of world flags! This fun and educational game challenges you to identify flags from various countries across the globe. Whether you're playing solo, competing with a friend in multiplayer mode, or aiming for the top spot on the leaderboard, this game offers a great way to improve your geography skills and have fun at the same time.
      </p>

      <h2 className="text-2xl font-semibold text-amber-500 mb-4">Features:</h2>
      <ul className="text-lg mb-6">
        <li>🌍 Multiple Difficulty Levels – Choose from all countries or specific regions like Europe, Asia, or Africa.</li>
        <li>👥 Multiplayer Mode – Challenge a friend to a real-time quiz competition.</li>
        <li>🏆 Leaderboard – Save your high scores and compete with others.</li>
        <li>🔊 Text-to-Speech (TTS) – Hear the names of countries read aloud for improved accessibility.</li>
        <li>⭐ Bonus Scoring – Get extra points for quick answers!</li>
        <li>📋 Review Mode – Review your answers and learn from mistakes at the end of the game.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Developed by:</h2>
      <p className="text-lg font-bold">Iftakher Hossen Sifat</p>
      <p className="text-lg">A passionate web developer who enjoys building interactive and educational applications.</p>
    </div>
  );
};

export default About;
