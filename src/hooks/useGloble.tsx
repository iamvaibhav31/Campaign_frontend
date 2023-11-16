import GlobleContext from "../context/GlobleContext";

import { useContext } from "react";

const useGloble = () => useContext(GlobleContext);

export default useGloble;