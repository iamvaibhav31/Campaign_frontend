import GlobleContext, { GlobleContextStore } from "./../context/GlobleContext";
import React from 'react'
function GlobleContextProvider({ children }: { children?: React.ReactNode }) {
  
  const contextValue = GlobleContextStore();

  return <GlobleContext.Provider value={contextValue}>{children}</GlobleContext.Provider>;
}

export default GlobleContextProvider;
