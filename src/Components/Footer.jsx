import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-xl font-bold text-amber-500">{t("title")}</h2>
            <p className="text-sm text-gray-400 mt-1">
              © {new Date().getFullYear()} {t("title")}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/iftakher_sifat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition duration-300"
              aria-label="Instagram"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-4">
          <p>
            {t("developed")} <span className="text-amber-500 font-medium">{t("name")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
