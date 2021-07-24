import ListItem from "./ListItem";
import {useContext, useState} from "react";
import ChildList from "./ChildList";
import TagList from "../TagList";
import s from "./styles.module.scss";
import OkrListContext from "../../Container/OKRList/OkrListContext";
import ThemeContext from "../../Container/Main/ThemeProvider";
import BasicModal from "../Modals/BasicModal";
import ModalContent from "./ModalContent";

const OKRList = () => {
    const [selectedParent, setSelectedParent] = useState(null);
    const [modalData, setModalData] = useState({});
    const okrListData = useContext(OkrListContext);
    const {
        isDarkTheme,
    } = useContext(ThemeContext);
    const {
        formattedDataResponse,
        categoryList,
        activeSearchList,
        handleSearch
    } = okrListData
    return (
        <div className={`${s.wrapper} font14 d-flex flex-column`}>
            <div className={"py-2"}>
                <TagList handleSearch={handleSearch} activeSearchList={activeSearchList} data={categoryList}/>
            </div>
            <div className={'overflow-auto'}>
                <ol className={'px-3 m-0 float-left'}>
                    {formattedDataResponse.map(({parent = {}, data = []}) => {
                        const isSelected = parent.id && (parent.id === selectedParent);
                        const shouldShow = parent.id && data.length
                        return (
                            (shouldShow) ? <ol key={parent.id} className={s.borderList}>
                                <div onClick={() => setSelectedParent(isSelected ? null : parent.id)}>
                                    <span className={`${s.dropdownIcon} flex-center-all cursor-pointer ${isDarkTheme ? s.darkDropDown : ''}`}>{!isSelected ? '+' : '-'}</span>
                                    <ListItem data={parent}/>
                                </div>
                                {isSelected ?
                                    <ChildList data={data} handleClick={(data) => setModalData(data)}/> : null}
                            </ol> : null
                        )
                    })
                    }
                </ol>
            </div>
            <BasicModal onClose={() => setModalData({})} open={!!Object.keys(modalData).length}>
                <ModalContent data={modalData}/>
            </BasicModal>
        </div>
    )
}

export default OKRList;
