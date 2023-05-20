import { createContext, useState } from "react";
const MultiContext = createContext();

const MultiProvider = ({children}) => {

    const [objPlan, setObjPlan] = useState({});

    const [mostrarInfo, setMostrarInfo] = useState(true);
    const [mostrarPlan, setMostrarPlan] = useState(false);
    const [mostrarAdds, setMostrarAdds] = useState(false);

    const handleSubmitInfo = (name, email, phone) => {
        setObjPlan({
            name: name,
            email: email,
            phone: phone
        });
        setMostrarInfo(false)
        setMostrarPlan(true)
    }

    const handleSubmitPlan = (plan) => {
        setObjPlan({...objPlan, ...plan})
        setMostrarInfo(false)
        setMostrarPlan(false)
        setMostrarAdds(true)
    }

    const handleVolverInfo = () => {
        setMostrarInfo(true)
        setMostrarPlan(false)
        setMostrarAdds(false)
    }

    const handleVolverPlan = () => {
        setMostrarInfo(false)
        setMostrarPlan(true)
        setMostrarAdds(false)
    }


    return (
        <MultiContext.Provider
            value={{
                handleSubmitInfo,
                objPlan,
                mostrarInfo,
                mostrarPlan,
                handleSubmitPlan,
                handleVolverInfo,
                mostrarAdds,
                handleVolverPlan
            }}
        >{children}
        </MultiContext.Provider>
      )
}

export{
    MultiProvider
}

export default MultiContext;