import {useEffect, useMemo, useState} from "react";
const formatOkrListData = (sourceData = []) => {
    const formattedDataResponse = {};
    const categoryList = [];
    const categoryMap = new Set();
    sourceData.forEach((val) => {
        const {
            id,
            category,
            parent_objective_id
        } = val;
        const parentId = (parent_objective_id || id);
        //Preparing category filter list
        if (!categoryMap.has(category)) {
            categoryMap.add(category);
            categoryList.push({id: parentId, label: category});
        }
        //Preparing parent child list
        formattedDataResponse[parentId] = (formattedDataResponse[parent_objective_id] || {});
        if (parent_objective_id) {
            formattedDataResponse[parentId].data = (formattedDataResponse[parentId].data || []);
            formattedDataResponse[parentId].data.push(val);
        } else {
            formattedDataResponse[parentId].parent = val;
        }
    })
    return ({formattedDataResponse: Object.values(formattedDataResponse), categoryList});
}
const useOkrListFormatter = ({sourceData = [], activeSearchList = []}) => {
    const [filteredSourceData, setFilteredSourceData] = useState([]);
    const {
        formattedDataResponse = [],
        categoryList
    } = useMemo(() => formatOkrListData(sourceData), [sourceData]);
    useEffect(() => {
        if (activeSearchList.length) {
            const filteredData = sourceData.filter(val => activeSearchList.includes(val.category));
            setFilteredSourceData(formatOkrListData(filteredData).formattedDataResponse || [])
        } else {
            setFilteredSourceData(formattedDataResponse);
        }
    }, [activeSearchList, formattedDataResponse, sourceData]);
    return ({formattedDataResponse: filteredSourceData, categoryList})
}

export default useOkrListFormatter;
