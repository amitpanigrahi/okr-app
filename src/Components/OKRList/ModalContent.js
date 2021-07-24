import s from "./styles.module.scss";
import {memo} from "react";
const ModalContent = ({data = {}}) => {
    return (
        <div className={`${s.modalContentWrapper} font14`}>
            {Object.keys(data).map((valKey, i) => {
                return (
                    <div key={i} className={'py-1'}>
                        <b>{valKey}: </b>
                        {JSON.stringify(data[valKey])}
                    </div>
                )
            })}
        </div>
    )
}

export default memo(ModalContent);
