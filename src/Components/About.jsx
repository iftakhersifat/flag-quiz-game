import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto text-center py-10 px-4">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">{t("about_title")}</h1>
      <p className="mb-4 text-lg">{t("about_description")}</p>

      <h2 className="text-2xl font-semibold text-amber-500 mb-4">{t("features_title")}</h2>
      <ul className="text-lg mb-6 space-y-2">
        <li>🌍 {t("feature_difficulty")}</li>
        <li>👥 {t("feature_multiplayer")}</li>
        <li>🏆 {t("feature_leaderboard")}</li>
        <li>🔊 {t("feature_tts")}</li>
        <li>⭐ {t("feature_bonus")}</li>
        <li>📋 {t("feature_review")}</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">{t("developed_by_title")}</h2>
      <p className="text-lg font-bold">{t("name")}</p>
      <p className="text-lg">{t("developer_description")}</p>
    </div>
  );
};

export default About;
