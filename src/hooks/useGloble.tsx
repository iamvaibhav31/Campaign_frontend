import GlobleContext from "../context/GlobleContext";

import { useContext } from "react";
import type { GlobleContextStatetype } from "../context/GlobleContext";

const useGloble: () => GlobleContextStatetype = () => {
    const contextValue = useContext(GlobleContext);
    return contextValue!;
  };

export default useGloble;