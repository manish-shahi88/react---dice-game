import styled from "styled-components";
import {Button} from "../styles/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
        
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 0 auto;

  .content{
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
  }
`;
