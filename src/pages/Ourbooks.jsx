import Category from "../components/Category";
import "./Ourbooks.css";

const Categories = [
    {
        name: "Littérature",
        image: "https://alivreouvertdotnet.files.wordpress.com/2014/01/rang-livres-marches.jpg",
        slug: "litterature"
    },
    {
        name: "Bande dessinée",
        image: "https://expodif.fr/wp-content/uploads/2021/07/livreS-BD.jpg",
        slug: "bande-dessinee"
    },
    {
        name: "Utilitaire",
        image: "https://mobile-img.lpcdn.ca/lpca/924x/r3996/3c15d79c-5a65-11ea-b33c-02fe89184577.jpg",
        slug: "utilitaire"
    },
    {
        name: "Livre pour enfant",
        image: "https://meltingpotassoc.files.wordpress.com/2021/01/livres-pour-enfants.jpg",
        slug: "livre-pour-enfant"
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
}

export default OurbooksPage;
