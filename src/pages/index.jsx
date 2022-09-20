import { useEffect, useState } from "react";
import { getMainPageText } from "../services/TextService";
import "./index.css";

const MainPage = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMainPageText();
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
