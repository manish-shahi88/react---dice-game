import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import {Button, OutlineButton} from "../styles/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score,setScore] = useState(0)
  const [selectedNumber, useSelectedNumber] = useState();
  const [currentDice,setCurrentDice] = useState(1)
  const [error,setError] = useState("")
  const [showRules,setShowRules] = useState(false)

  const generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min)+min)
}
const roleDice = ()=>{
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1,7)
    // eslint-disable-next-line no-unused-vars
    setCurrentDice((prev)=>randomNumber)

    if(selectedNumber === randomNumber){
      setScore((prev) => prev + randomNumber)
    }
    else{
      setScore((prev) => prev - 2)
    }
    useSelectedNumber(undefined)
}
  const resetScore = ()=>{
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} useSelectedNumber={useSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        {/* <Button>Show Rules</Button> */}
        <OutlineButton onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules?"Hide":"Show"} Rules</OutlineButton>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btns{
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  }
`;
