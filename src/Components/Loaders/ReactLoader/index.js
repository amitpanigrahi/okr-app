import logo from '../../../logo.svg';
import "./ReactLoader.css";

const ReactLoader = () => {
    return (
        <div className={'loader__react-loader'}>
            <img className={'loader__react-loader-logo'} alt={'loader'} src={logo}/>
        </div>
    )
}

export default ReactLoader
