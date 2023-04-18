import { LinkButton } from "../components/LinkButton/LinkButton.styled";
import { Container } from "./Home.styled";

const HomePage = () => {
  return (
    <Container>
      <h1>Home Page</h1>
      <LinkButton to="/tweets">Go to Tweets</LinkButton>
    </Container>
  );
};

export default HomePage;
