import "./Category.css";
import { Pages } from "../routes/AppRouter";

const Category = ({ category }) => {
    return (
        <div className="category" onClick={() => window.location.href = `${Pages.CATEGORIES}/${category.slug}`}>
            <div className="category__name">{category.name}</div>
            <div className="overlay">
                <img src={category.image} alt={category.name + "_image"} />
            </div>
        </div>
    );
};

export default Category;