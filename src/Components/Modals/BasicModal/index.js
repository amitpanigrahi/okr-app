import ReactDOM from "react-dom";
import s from "./styles.module.scss";

const BasicModal = ({onClose, open = false, children}) => {
    return (
        open ? ReactDOM.createPortal(
            <>
            <div className={s.modalWrapper} onClick={onClose}>
                {onClose && <span onClick={onClose} className={s.closeIcon}>+</span>}
                <div onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div></>, document.getElementById("root")
        ) : null
    )
}

export default BasicModal;
