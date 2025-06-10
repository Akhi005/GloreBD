import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext); 

const SearchProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchContext.Provider value={{ showSearch, setShowSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
