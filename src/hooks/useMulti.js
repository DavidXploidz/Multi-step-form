import { useContext } from "react";

import MultiContext from "../context/MultiProvider";

const useMulti = () => {
        return useContext(MultiContext);
}

export default useMulti;