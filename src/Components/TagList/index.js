import "./styles.scss";
import {useState} from "react";

const TagList = ({activeSearchList, handleSearch, data = []}) => {
    const [expandAll, setExpandAll] = useState(false);
    const handleItemSelection = (label, isActive) => {
        const currentList = new Set(activeSearchList);
        if (isActive) {
            currentList.delete(label)
        } else {
            currentList.add(label);
        }
        handleSearch([...currentList]);
    }
    return (
        <div className={"text-center"}>
            <div className={`font14 ${expandAll ? "" : "tag-module-height"}`}>
                <div className={"flex-center-all flex-wrap"}>
                    {data.map(({id, label}) => {
                        const isActive = activeSearchList.includes(label);
                        return (
                            <div key={id} onClick={() => handleItemSelection(label, isActive)}
                                 className={`cursor-pointer m-1 p-1 tag ${isActive ? 'active' : ''}`}>
                                {label}
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr/>
            <div>
                {data.length > 4 ? <button onClick={() => setExpandAll(!expandAll)} className={'btn-primary font14 p-1 mx-1'}>
                    {expandAll ? "Hide" : "View More"} filters
                </button> : null}
                {activeSearchList.length ?
                    <button onClick={() => handleSearch([])} className={'btn-primary font14 p-1 mx-1'}>
                        Reset
                    </button> : null}
            </div>
        </div>
    )
}

export default TagList;
