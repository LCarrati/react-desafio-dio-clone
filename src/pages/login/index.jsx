import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock } from "react-icons/md";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./styles";

const schema = yup
  .object({
    email: yup.string().email("email não é válido").required(),
    password: yup
      .string()
      .min(3, "No mínmo 2 caracteres")
      .required("Campo obrigatório")
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  // console.log(isValid, errors);

  const onSubmit = (formData) => {
    try {
      const { data } = api.get(
        `users?email${formData.email}&senha${formData.password}`
      );
      console.log(data);
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                control={control}
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                control={control}
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Entrar"
                variant="secondary"
                onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={() => navigate("/register")}>
                Criar conta
              </CriarText>
            </Row>
          </Wrapper>
          {/* <Input placeholder="email" /> */}
        </Column>
      </Container>
      {/* <Button title="Teste1" />
      <Button variant="secondary" title="Teste2" />
      <Link to="/login">Ir para o login</Link> */}
    </>
  );
};

export { Login };
