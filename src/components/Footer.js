import { Link } from "react-router-dom";
import "./Footer.css";
import { Pages } from "../routes/AppRouter";
import { BOOK_CATEGORIES } from "../pages/Ourbooks";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__list">
                <h3>Catégories</h3>
                <ul>
                    <li><Link className='link' to={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.LITERATURE.SLUG}`}>Littérature</Link></li>
                    <li><Link className='link' to={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.COMICS.SLUG}`}>Bandes dessinées</Link></li>
                    <li><Link className='link' to={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.UTILITY.SLUG}`}>Outils</Link></li>
                    <li><Link className='link' to={`${Pages.OUR_BOOKS}/${BOOK_CATEGORIES.CHILDREN.SLUG}`}>Enfants</Link></li>
                </ul>
            </div>
            <div className="footer__list">
                <h3>Liens utiles</h3>
                <ul>
                    <li><Link className='link' to={Pages.HOURS}>Horaires</Link></li>
                    <li><Link className='link' to={Pages.RULES}>Règlement</Link></li>
                </ul>
            </div>
            <div className="footer__list">
                <h3>Mentions légales</h3>
                <ul>
                    <li><Link className='link' to={Pages.CGU}>CGU</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;