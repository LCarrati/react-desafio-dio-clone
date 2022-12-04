import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";
const Feed = () => {
  return (
    <>
      <Header autenticado="true" />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={90}
            nome="Leo"
            image="https://avatars.githubusercontent.com/u/108370157?v=4"
          />
          <UserInfo
            percentual={85}
            nome="Leo"
            image="https://avatars.githubusercontent.com/u/108370157?v=4"
          />
          <UserInfo
            percentual={80}
            nome="Leo"
            image="https://avatars.githubusercontent.com/u/108370157?v=4"
          />
          <UserInfo
            percentual={55}
            nome="Leo"
            image="https://avatars.githubusercontent.com/u/108370157?v=4"
          />
          <UserInfo
            percentual={30}
            nome="Leo"
            image="https://avatars.githubusercontent.com/u/108370157?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
