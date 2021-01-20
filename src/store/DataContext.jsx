import React, { useState, useMemo } from "react";

const DataContext = React.createContext({ ministries: [] });

const AppContext = ({ children }) => {
  const [ministries, setMinistries] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  const updateMinistries = (data) => {
    setMinistries(data);
  };

  const updateQuery = (data) => {
    setSearchQuery(data);
  };

  const updateResults = (data) => {
    setSearchResults(data);
  };

  const value = useMemo(
    () => ({
      ministries,
      searchResults,
      searchQuery,
      updateResults,
      updateMinistries,
      updateQuery,
    }),
    [searchResults, ministries, searchQuery]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function useAppContext() {
  return React.useContext(DataContext);
}

export default AppContext;
