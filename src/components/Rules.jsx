import styled from "styled-components"

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        
        <ul className="text">
            
            <li><p>Select any number</p></li>
            <li><p>
                after click on dice if selected number is equal to dice number you will get same point aas dice {" "}

            </p></li>
            
            <li><p>Click on dice image</p></li>
            
            <li><p>if you get wrong guess then 2 points will be deducted</p></li>
        </ul>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 46px;
    background-color: #fbf1f1;
    padding: 20px 40px;

    h2{
        font-size: 24px   ; 
    }
    .text{
        margin-top: 24px;
    }

`