import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from "../../assets/banner.png";

import { Container, TextContent, Title, TItleHighlight } from "./styles";
const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TItleHighlight>
              Implemente
              <br />
            </TItleHighlight>
            o seu futuro agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizada pelas emrpesas mais invadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Comecar agora"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
      {/* <Button title="Teste1" />
      <Button variant="secondary" title="Teste2" />
      <Link to="/login">Ir para o login</Link> */}
    </>
  );
};

export { Home };
