import { useEffect, useState } from "react";
import { getRulesPageText } from "../services/TextService";
import "./Rules.css";

const RulesPage = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getRulesPageText();
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
