import { useEffect, useState } from "react";
import { getPageText } from "../services/TextService";
import "./index.css";

const MainPage = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPageText('HOME');
            setText(data);
        };
        fetchData();
    }, []);

    return (
        <div className="main">
            <h1>Accueil</h1>
            <p>{text}</p>
        </div>
    );
};

export default MainPage;
