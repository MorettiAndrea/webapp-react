import { createContext,useContext, useState } from "react";

const LoaderContext = createContext()

const LoaderProvider = ({childern}) => {

    const [isLoading,setIsLoading] = useState(false);

    const LoaderData= {isLoading,setIsLoading};
    return(
         <LoaderContext.Provider value={LoaderData}>
        {childern}
        </LoaderContext.Provider>)

}

const useLoader = useContext(LoaderContext)


export {LoaderProvider,useLoader}