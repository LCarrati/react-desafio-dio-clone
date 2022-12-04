import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";

import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import {
  Column,
  Container,
  // CriarText,
  // EsqueciText,
  AvisoText,
  Aviso2Text,
  // Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./styles";

const schema = yup
  .object({
    name: yup.string().min(3, "Nome incorreto").required("Campo obrigatório"),
    email: yup.string().email("email não é válido").required(),
    password: yup
      .string()
      .min(3, "No mínmo 2 caracteres")
      .required("Campo obrigatório")
  })
  .required();

const Register = () => {
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
      // console.log(data);
    } catch {
      alert("Houve um erro, tente novamente");
    }
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
            <TitleLogin>Começe agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                errorMessage={errors?.name?.message}
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
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
                title="Criar minha conta"
                variant="secondary"
                // onClick={handleClickSignIn}
                type="submit"
              />
            </form>
            {/* <Row> */}
            <AvisoText>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de Uso da DIO.
            </AvisoText>
            <Aviso2Text>
              Já tenho conta.{" "}
              <span onClick={() => navigate("/login")}>Fazer login</span>
            </Aviso2Text>
            {/* </Row> */}
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

export { Register };
