import Input from "./inputs/Input";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState(null);
  const [tok, setTok] = useState("");

  let token = true;

  const resetState = () => {
    setPass("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email, password: pass })
      .then((res) => {
        setTok(res.data.token);
        console.log(tok);
      })
      .catch((error) => {
        setTok(error.response.data.error);
        console.log(tok);
      });
  };

  return (
    <Form className="form">
      {token ? <p>{tok}</p> : <p>""</p>}
      <div className="top">
        <Form.Label> Welcome Back</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Text className="text-muted">Sub-title Text goes here</Form.Text>
        </Form.Group>
      </div>

      <Input
        controlId="formBasicEmail"
        type="email"
        placeholder="Email Address*"
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        controlId="formBasicPassword"
        type="password"
        placeholder="Password*"
        handleChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <Button
        onClick={handleSubmit}
        className="Submit-button"
        variant="primary"
        type="submit"
      >
        Login
      </Button>
      <div className="check">
        <Form.Check type="checkbox" label="Remember Password" />
        <Form.Text type="text">Forgot Password?</Form.Text>
      </div>
    </Form>
  );
};

export default Login;
