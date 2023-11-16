import GlobleContext, { GlobleContextStore } from "./../context/GlobleContext";

function GlobleContextProvider({ children }: { children?: React.ReactNode }) {
  
  const contextValue = GlobleContextStore();

  return <GlobleContext.Provider value={contextValue}>{children}</GlobleContext.Provider>;
}

export default GlobleContextProvider;
