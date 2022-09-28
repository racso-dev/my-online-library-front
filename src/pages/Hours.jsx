import { useEffect, useState } from "react";
import { getPageText } from "../services/TextService";
import "./Hours.css";

const HoursPage = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPageText('HOURS');
            setText(data);
        };
        fetchData();
    }, []);

    return (
        <div className="main">
            <h1>Horaires</h1>
            <p>{text}</p>
        </div>
    );
};

export default HoursPage;
