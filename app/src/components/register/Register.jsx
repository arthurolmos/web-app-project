import FormRegister from "./FormRegister";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Register({ login, logout }) {
  const [error, setError] = useState({ message: "", validation: false });
  const history = useHistory();
  function onSubmitForm(dados) {
    api
      .post("/user", {
        login: dados.login,
        password: dados.password,
      })
      .then(function (response) {
        history.push("/");
        console.log(response);
      })
      .catch(function (error) {
        let object = {
          message: "Register Error!",
          validation: true,
        };
        setError(object);
        console.log(error);
      });
  }
  function noError() {
    let object = {
      message: " ",
      validation: false,
    };
    setError(object);
  }
  return (
    <Container component="article" maxWidth="sm">
      <FormRegister error={error} onSubmit={onSubmitForm} noError={noError} />
    </Container>
  );
}

export default Register;