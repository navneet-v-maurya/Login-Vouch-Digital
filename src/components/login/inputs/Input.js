import { Form } from "react-bootstrap";
import "./Input.css";

const Input = ({ controlId, type, placeholder, handleChange }) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Group>
  );
};

export default Input;
