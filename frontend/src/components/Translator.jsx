import React, { useState, createContext, useContext } from 'react';

// Context to provide selected language globally
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// Language Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('eng'); // 'eng', 'span', 'hc'

  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Dropdown UI
export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="text-white ring font-bold text-xl my-3 w-fit rounded-md shadow  top-5 left-0 flex items-center space-x-2 p-2">
      <label htmlFor="language" className="text-xl font-medium">Language:</label>
      <select
        id="language"
        value={language}
        onChange={changeLanguage}
        className="border p-1 rounded"
      >
        <option className='text-black' value="eng">English</option>
        <option className='text-black' value="span">Español</option>
        <option className='text-black' value="hc">Kreyòl Ayisyen</option>
      </select>
    </div>
  );
};
