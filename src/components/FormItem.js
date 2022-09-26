import Form from "react-bootstrap/Form";

const FormItem = ({ label, type, value, onChange, controlId, placeHolder }) => {
    return (
        <Form.Group className="form" controlId={controlId}>
            <Form.Label className="form-label">{label}</Form.Label>
            <Form.Control className="form-input" type={type} value={value} onChange={onChange} placeholder={placeHolder} />
        </Form.Group>
    );
};

export default FormItem;