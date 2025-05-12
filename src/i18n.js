import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About Us",
      title: "Flag Quiz Game",
      developed: "Developed with ❤️ by",
      name: "Iftakher Hossen Sifat",

      // about us
      about_title: "About the Flag Quiz Game",
      about_description:
        "Welcome to the Flag Quiz Game, where you can test your knowledge of world flags! This fun and educational game challenges you to identify flags from various countries across the globe. Whether you're playing solo, competing with a friend in multiplayer mode, or aiming for the top spot on the leaderboard, this game offers a great way to improve your geography skills and have fun at the same time.",
      features_title: "Features:",
      feature_difficulty: "Multiple Difficulty Levels – Choose from all countries or specific regions like Europe, Asia, or Africa.",
      feature_multiplayer: "Multiplayer Mode – Challenge a friend to a real-time quiz competition.",
      feature_leaderboard: "Leaderboard – Save your high scores and compete with others.",
      feature_tts: "Text-to-Speech (TTS) – Hear the names of countries read aloud for improved accessibility.",
      feature_bonus: "Bonus Scoring – Get extra points for quick answers!",
      feature_review: "Review Mode – Review your answers and learn from mistakes at the end of the game.",
      developed_by_title: "Developed by:",
      developer_description: "A passionate web developer who enjoys building interactive and educational applications.",

      // quiz game
      "welcome_title": "Welcome to the Flag Quiz Game!",
      "welcome_text": "Test your knowledge of world flags. Click start to begin.",
      "multiplayer_mode":"Multiplayer Mode:",
      "start_button": "Start Game",
      "choose_correct_flag": "Choose the Correct Flag",
      "correct": "Correct",
      "wrong": "Wrong",
      "highest_score": "Highest Score",
      "time_left": "Time Left",
      "enable_tts": "Enable Text-to-Speech",
      "your_answer": "Your Answer",
      "correct_answer": "Correct Answer",
      "fast_bonus": "Bonus for Fast Answer!",
      "review_title": "Review Your Answers",
      "bonus_earned": "Bonus Earned",
      "total_answered": "Total Questions Answered",
      "save_score": "Save Score",
      "play_again": "Play Again",
      "leaderboard": "Leaderboard",
      "enter_name": "Enter your name",
      next: "Next",
      end: "End Game",

    }
  },
  bn: {
    translation: {
      home: "হোম",
      about: "আমাদের সম্পর্কে",
      title: "ফ্ল্যাগ কুইজ গেম",
      developed: "❤️ দিয়ে তৈরি করেছেন",
      name: "ইফতেখার হোসেন সিফাত",

      // about us
      about_title: "ফ্ল্যাগ কুইজ গেম সম্পর্কে",
      about_description:
        "স্বাগতম ফ্ল্যাগ কুইজ গেম-এ, যেখানে আপনি বিশ্ব পতাকা সম্পর্কে আপনার জ্ঞান পরীক্ষা করতে পারেন! এই মজার এবং শিক্ষণীয় গেমটি আপনাকে বিভিন্ন দেশের পতাকা সনাক্ত করতে চ্যালেঞ্জ করে। আপনি একা খেলুন, বন্ধুর সঙ্গে মাল্টিপ্লেয়ার মোডে প্রতিযোগিতা করুন, অথবা লিডারবোর্ডে সেরা হতে চেষ্টা করুন—এই গেমটি একইসাথে মজা এবং জিওগ্রাফি শেখার দারুণ উপায়।",
      features_title: "বৈশিষ্ট্যসমূহ:",
      feature_difficulty: "বিভিন্ন কঠিনতা স্তর – সমস্ত দেশ বা নির্দিষ্ট অঞ্চল (যেমন ইউরোপ, এশিয়া, আফ্রিকা) থেকে বেছে নিন।",
      feature_multiplayer: "মাল্টিপ্লেয়ার মোড – বন্ধুকে রিয়েল-টাইম কুইজ প্রতিযোগিতায় চ্যালেঞ্জ করুন।",
      feature_leaderboard: "লিডারবোর্ড – আপনার সর্বোচ্চ স্কোর সংরক্ষণ করুন এবং অন্যদের সঙ্গে প্রতিযোগিতা করুন।",
      feature_tts: "টেক্সট-টু-স্পিচ (TTS) – দেশের নাম শুনে জানুন আরও সহজে।",
      feature_bonus: "বোনাস স্কোর – দ্রুত উত্তর দিলে অতিরিক্ত পয়েন্ট পান!",
      feature_review: "রিভিউ মোড – গেম শেষে আপনার উত্তরগুলো দেখুন ও ভুল থেকে শিখুন।",
      developed_by_title: "ডেভেলপার:",
      developer_description: "একজন নিবেদিত ওয়েব ডেভেলপার যিনি ইন্টারেক্টিভ ও শিক্ষামূলক অ্যাপ তৈরি উপভোগ করেন।",

      // quiz game
      welcome_title: "ফ্ল্যাগ কুইজ গেমে স্বাগতম!",
      welcome_text: "বিশ্বের পতাকা সম্পর্কে আপনার জ্ঞান পরীক্ষা করুন। শুরু করতে Start চাপুন।",
      multiplayer_mode:"মাল্টিপ্লেয়ার মোড:",
      start_button: "গেম শুরু করুন",
      choose_correct_flag: "সঠিক পতাকাটি নির্বাচন করুন",
      correct: "সঠিক",
      wrong: "ভুল",
      highest_score: "সর্বোচ্চ স্কোর",
      time_left: "অবশিষ্ট সময়",
      enable_tts: "টেক্সট-টু-স্পিচ চালু করুন",
      your_answer: "আপনার উত্তর",
      correct_answer: "সঠিক উত্তর",
      fast_bonus: "দ্রুত উত্তর দেওয়ায় বোনাস!",
      review_title: "আপনার উত্তর পর্যালোচনা করুন",
      bonus_earned: "আর্জিত বোনাস",
      total_answered: "মোট প্রশ্নের উত্তর",
      save_score: "স্কোর সংরক্ষণ করুন",
      play_again: "আবার খেলুন",
      leaderboard: "লিডারবোর্ড",
      enter_name: "আপনার নাম লিখুন",
      next: "পরবর্তী",
      end : "খেলা শেষ করুন",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
