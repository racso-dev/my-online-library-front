import Category from "../components/Category";
import "./Ourbooks.css";

export const BOOK_CATEGORIES = {
    LITERATURE: {
        SLUG: 'litterature',
        ENDPOINT: 'literature'
    },
    COMICS: {
        SLUG: 'bande-dessinee',
        ENDPOINT: 'comics'
    },
    UTILITY: {
        SLUG: 'utilitaire',
        ENDPOINT: 'utility'
    },
    CHILDREN: {
        SLUG: 'livre-pour-enfant',
        ENDPOINT: 'children'
    },
};

const Categories = [
    {
        name: "Littérature",
        image: "https://alivreouvertdotnet.files.wordpress.com/2014/01/rang-livres-marches.jpg",
        slug: BOOK_CATEGORIES.LITERATURE.SLUG
    },
    {
        name: "Bande dessinée",
        image: "https://expodif.fr/wp-content/uploads/2021/07/livreS-BD.jpg",
        slug: BOOK_CATEGORIES.COMICS.SLUG
    },
    {
        name: "Utilitaire",
        image: "https://mobile-img.lpcdn.ca/lpca/924x/r3996/3c15d79c-5a65-11ea-b33c-02fe89184577.jpg",
        slug: BOOK_CATEGORIES.UTILITY.SLUG
    },
    {
        name: "Livre pour enfant",
        image: "https://meltingpotassoc.files.wordpress.com/2021/01/livres-pour-enfants.jpg",
        slug: BOOK_CATEGORIES.CHILDREN.SLUG
    },
];


const OurbooksPage = () => {
    return (
        <div className="our-books">
            {
                Categories.map((category, index) => (
                    <Category key={index} category={category} />
                ))
            }
        </div>
    );
};

export default OurbooksPage;
