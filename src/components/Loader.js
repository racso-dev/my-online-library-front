import { Oval } from 'react-loader-spinner';
import './Loader.css';

const Loader = ({ isLoading }) => {
    return (
        <Oval
            height={"7em"}
            width={"7em"}
            color="#002b80"
            wrapperStyle={{}}
            wrapperClass="spinner-container"
            visible={isLoading}
            ariaLabel='oval-loading'
            secondaryColor="#002b80"
            strokeWidth={3}
            strokeWidthSecondary={3}
        />
    );
};

export default Loader;