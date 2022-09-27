import { useEffect, useState } from "react";
import { getPageText } from "../services/TextService";
import "./Rules.css";

const RulesPage = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPageText('RULES');
            setText(data);
        };
        fetchData();
    }, []);

    return (
        <div className="rules">
            <h1>Règlement</h1>
            <p>{text}</p>
        </div>
    );
};

export default RulesPage;
