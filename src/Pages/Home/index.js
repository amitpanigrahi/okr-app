// import logo from "../../logo.svg";
import OKRList from "../../Components/OKRList";
import {OkrListProvider} from "../../Container/OKRList/OkrListContext";

const HomePage = () => {
    return (
        <div className={'d-flex justify-content-center h-100'}>
            <OkrListProvider>
                <OKRList/>
            </OkrListProvider>
        </div>
    )
}

export default HomePage;
