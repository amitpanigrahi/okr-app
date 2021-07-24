import React, {useEffect, useState} from "react";
import useOkrListFormatter from "../../HOOKS/OkrListHooks/useOkrListFormatter";
import ReactLoader from "../../Components/Loaders/ReactLoader";

const getOkrSampleData = async () => {
    let response = [];
    await fetch("https://okrcentral.github.io/sample-okrs/db.json").then(data => data.json()).then(resp => {
        response = resp.data
    });
    return response;
}

export const OkrListProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [sourceData, setSourceData] = useState([]);
    const [activeSearchList, setActiveSearchList] = useState([]);
    const {
        formattedDataResponse,
        categoryList
    } = useOkrListFormatter({sourceData, activeSearchList: activeSearchList})
    useEffect(() => {
        setIsLoading(true);
        getOkrSampleData().then(resp => {
            setSourceData(resp);
            setIsLoading(false);
        })
    }, []);
    return (
        <OkrListContext.Provider value={{
            formattedDataResponse,
            categoryList,
            handleSearch: setActiveSearchList,
            activeSearchList
        }}>
            {isLoading && <ReactLoader/>}
            {children}
        </OkrListContext.Provider>
    )
}

const OkrListContext = React.createContext({});

export default OkrListContext;
