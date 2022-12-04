import React from "react";
import { Button } from "../Button";
import Logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
  BuscarInputContainer,
  UserPicture
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo da Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Bucar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/108370157?v=4" />
          ) : (
            <>
              <MenuRight onClick={() => navigate("/")}>Home</MenuRight>
              <Button title="Entrar" onClick={() => navigate("/login")} />
              <Button title="Cadastrar" onClick={() => navigate("/register")} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
