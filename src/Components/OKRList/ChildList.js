import {memo} from "react";
import ListItem from "./ListItem";
import s from "./styles.module.scss";

const ChildList = ({handleClick, data = []}) => {
    return (
        <ol type={'a'}>
            {data.map(val => {
                return (
                    <li key={val.id} className={s.childList}>
                        <ListItem handleClick={handleClick} data={val} />
                    </li>
                )
            })}
        </ol>
    )
}

export default memo(ChildList);
