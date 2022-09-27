import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import TextareaAutosize from 'react-textarea-autosize';
import { toast } from 'react-toastify';
import { toastOptions } from '../App';
import * as TextService from '../services/TextService';
import './TextDashboard.css';
import { Pages } from '../routes/AppRouter';



const TextDashboard = () => {
    const [homeText, setHomeText] = useState("");
    const [hoursText, setHoursText] = useState("");
    const [rulesText, setRulesText] = useState("");

    const [newHomeText, setNewHomeText] = useState("");
    const [newHoursText, setNewHoursText] = useState("");
    const [newRulesText, setNewRulesText] = useState("");

    const navigate = useNavigate();

    const isHomeTextChanged = () => (homeText !== newHomeText);
    const isHoursTextChanged = () => (hoursText !== newHoursText);
    const isRulesTextChanged = () => (rulesText !== newRulesText);

    const validate = () => (isHomeTextChanged() || isHoursTextChanged() || isRulesTextChanged());

    const handler = async (event) => {
        event.preventDefault();
        const errors = [];
        let res;

        if (isHomeTextChanged()) {
            res = await TextService.updatePageText('HOME', newHomeText);
            if (res.status !== 204) {
                errors.push(res.message);
            }
        }
        if (isHoursTextChanged()) {
            res = await TextService.updatePageText('HOURS', newHoursText);
            if (res.status !== 204) {
                errors.push(res.message);
            }
        }
        if (isRulesTextChanged()) {
            res = await TextService.updatePageText('RULES', newRulesText);
            if (res.status !== 204) {
                errors.push(res.message);
            }
        }

        if (errors.length > 0) {
            toast.error('Une erreur est survenue lors de la mise à jour des textes', toastOptions);
        } else {
            fetchData();
            toast.success('Les textes ont bien été mis à jour', toastOptions);
        }
    };

    const fetchData = async () => {
        let data = await TextService.getPageText('HOME');
        setHomeText(data);
        setNewHomeText(data);
        data = await TextService.getPageText('HOURS');
        setHoursText(data);
        setNewHoursText(data);
        data = await TextService.getPageText('RULES');
        setRulesText(data);
        setNewRulesText(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='text'>
            <div className='text-container'>
                <h1>Accueil</h1>
                <TextareaAutosize className='text-input' onChange={(e) => setNewHomeText(e.target.value)} value={newHomeText} />
                <h1>Horaires</h1>
                <TextareaAutosize className='text-input' onChange={(e) => setNewHoursText(e.target.value)} value={newHoursText} />
                <h1>Règlement</h1>
                <TextareaAutosize className='text-input' onChange={(e) => setNewRulesText(e.target.value)} value={newRulesText} />
            </div>
            <div className='button-container'>
                <Button className='button' variant='secondary' onClick={() => navigate(Pages.ADMIN_DASHBOARD)}>Retour</Button>
                <Button className='button' variant='primary' onClick={handler} disabled={!validate()}>Enregistrer</Button>
            </div>
        </div>
    );
};

export default TextDashboard;