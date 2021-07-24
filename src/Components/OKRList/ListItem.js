import {memo} from "react";
const ListItem = ({handleClick = () => {}, data = {}}) => {
    const {
        id = "",
        // category = "",
        title = "",
        // metric_name = "",
        // metric_start = "",
        // metric_target = "",
        // parent_objective_id = "",
        // archived = "",
    } = data;
    return (
        <div key={id} className={'cursor-pointer'} onClick={() => handleClick(data)}>
            <p>{title}</p>
        </div>
    )
}

export default memo(ListItem);
