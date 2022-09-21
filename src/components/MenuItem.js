import "./MenuItem.css";

const MenuItem = ({ title, onClick, className }) => {
    return (
        <div className={className} onClick={onClick}>
            <h1>{title}</h1>
        </div>
    );
};

export default MenuItem;