import "./Category.css";
import { Pages } from "../routes/AppRouter";
import { useNavigate } from 'react-router-dom';

const Category = ({ category }) => {
    const navigate = useNavigate();

    return (
        <div className="category" onClick={() => navigate(`${Pages.OUR_BOOKS}/${category.slug}`)}>
            <div className="category__name">{category.name}</div>
            <div className="overlay">
                <img src={category.image} alt={category.name + "_image"} />
            </div>
        </div>
    );
};

export default Category;