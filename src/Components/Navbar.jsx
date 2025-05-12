import React from 'react';
import { NavLink } from 'react-router'; // Corrected
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const navItems = [
        { path: "/", label: t("home") },
        { path: "/about", label: t("about") }
    ];

    const getNavLinkClass = ({ isActive }) =>
        isActive ? "text-amber-500 underline" : "text-gray-800";

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className='bg-gray-100 shadow-sm'>
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                
                {/* Logo + Mobile Dropdown */}
                <div className="flex items-center space-x-3">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost" aria-label="Toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white shadow-md rounded-box mt-2 p-2 w-40 z-10">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={item.path}
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.05 }}
                                >
                                    <NavLink to={item.path} className={getNavLinkClass}>
                                        {item.label}
                                    </NavLink>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    <NavLink to="/">
                        <img className='w-10' src="/assets/logo.png" alt="Flag Quiz Game Logo" />
                    </NavLink>
                    <h1 className='text-2xl font-bold text-amber-500 whitespace-nowrap'>
                        {t("title")}
                    </h1>
                </div>

                {/* Desktop Menu + Language Selector */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.path}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <NavLink to={item.path} className={getNavLinkClass}>
                                {item.label}
                            </NavLink>
                        </motion.div>
                    ))}

                    <select
                        value={i18n.language}
                        onChange={handleLanguageChange}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                        <option value="en">English</option>
                        <option value="bn">বাংলা</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
